import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://jamestech-solution.lovable.app",
  "https://id-preview--fbd05f1b-a050-438f-9061-20ab73972d76.lovable.app",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("Origin") || "";
  const allowedOrigin = ALLOWED_ORIGINS.find((o) => origin.startsWith(o)) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

const ADMIN_EMAIL = "yaikobdiriba22@gmail.com";

// Whitelist of allowed event types and severities
const ALLOWED_EVENT_TYPES = [
  "rate_limit_exceeded",
  "honeypot_triggered",
  "suspicious_activity",
  "form_abuse",
];
const ALLOWED_SEVERITIES = ["low", "medium", "high", "critical"];

// Field length limits
const MAX_DESCRIPTION_LENGTH = 500;
const MAX_EVENT_TYPE_LENGTH = 50;
const MAX_PATH_LENGTH = 200;
const MAX_USER_AGENT_LENGTH = 500;

// Server-side rate limiting per IP
const ipRequestCounts = new Map<string, { count: number; resetAt: number }>();
const SERVER_RATE_LIMIT = 10; // max events per window
const SERVER_RATE_WINDOW = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequestCounts.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRequestCounts.set(ip, { count: 1, resetAt: now + SERVER_RATE_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > SERVER_RATE_LIMIT;
}

function sanitize(value: string | undefined, maxLength: number): string {
  if (!value) return "";
  // Strip control characters and trim
  return value.replace(/[\x00-\x1f\x7f]/g, "").trim().slice(0, maxLength);
}

interface SecurityEvent {
  event_type: string;
  severity: string;
  ip_address?: string;
  user_agent?: string;
  path?: string;
  description: string;
  metadata?: Record<string, unknown>;
}

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // Verify authorization header exists (anon key or user token)
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify the token is valid by checking with Supabase auth
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const anonClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    // Try to verify the token - getClaims will fail for invalid tokens
    const token = authHeader.replace("Bearer ", "");
    const { error: claimsError } = await anonClient.auth.getClaims(token);
    if (claimsError) {
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Server-side rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(clientIp)) {
      return new Response(
        JSON.stringify({ error: "Rate limited" }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const event: SecurityEvent = await req.json();

    // Validate and sanitize event_type
    const eventType = sanitize(event.event_type, MAX_EVENT_TYPE_LENGTH);
    if (!eventType || !ALLOWED_EVENT_TYPES.includes(eventType)) {
      return new Response(
        JSON.stringify({ error: "Invalid event_type" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate severity
    const severity = sanitize(event.severity || "medium", 10);
    if (!ALLOWED_SEVERITIES.includes(severity)) {
      return new Response(
        JSON.stringify({ error: "Invalid severity" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize all fields
    const description = sanitize(event.description, MAX_DESCRIPTION_LENGTH);
    if (!description) {
      return new Response(
        JSON.stringify({ error: "description is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const ipAddress = sanitize(event.ip_address, 45) || clientIp;
    const userAgent = sanitize(event.user_agent, MAX_USER_AGENT_LENGTH) || "unknown";
    const path = sanitize(event.path, MAX_PATH_LENGTH) || "/";

    // Sanitize metadata - only allow simple key-value pairs
    let metadata: Record<string, unknown> = {};
    if (event.metadata && typeof event.metadata === "object") {
      const metaStr = JSON.stringify(event.metadata);
      if (metaStr.length <= 1000) {
        metadata = event.metadata;
      }
    }

    const serviceClient = createClient(supabaseUrl, supabaseServiceKey);

    // Check for duplicates
    const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const { count } = await serviceClient
      .from("security_events")
      .select("*", { count: "exact", head: true })
      .eq("ip_address", ipAddress)
      .eq("event_type", eventType)
      .gte("created_at", fiveMinAgo);

    const isDuplicate = (count || 0) > 3;

    // Log the event
    const { error: insertError } = await serviceClient
      .from("security_events")
      .insert({
        event_type: eventType,
        severity,
        ip_address: ipAddress,
        user_agent: userAgent,
        path,
        description,
        metadata,
        notified: !isDuplicate && (severity === "high" || severity === "critical"),
      });

    if (insertError) {
      console.error("Failed to log security event:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to log event" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email alert for high/critical severity (skip duplicates)
    if (!isDuplicate && (severity === "high" || severity === "critical")) {
      console.log(`[SECURITY ALERT] Type: ${eventType} | Severity: ${severity}`);
      console.log(`Description: ${description}`);
      console.log(`IP: ${ipAddress} | Path: ${path}`);

      try {
        const emailRes = await fetch(`${supabaseUrl}/auth/v1/admin/generate_link`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${supabaseServiceKey}`,
            "apikey": supabaseServiceKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "magiclink",
            email: ADMIN_EMAIL,
            options: {
              data: {
                security_alert: true,
                event_type: eventType,
                severity,
              },
            },
          }),
        });
        const emailData = await emailRes.json();
        if (!emailRes.ok) {
          console.error("Email generation failed:", emailData);
        }
      } catch (emailErr) {
        console.error("Email send error:", emailErr);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        logged: true,
        alerted: !isDuplicate && (severity === "high" || severity === "critical"),
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Security monitor error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...getCorsHeaders(req), "Content-Type": "application/json" } }
    );
  }
});
