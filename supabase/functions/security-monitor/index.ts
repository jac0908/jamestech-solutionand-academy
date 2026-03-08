import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ADMIN_EMAIL = "yaikobdiriba22@gmail.com";

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
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const event: SecurityEvent = await req.json();

    // Validate required fields
    if (!event.event_type || !event.description) {
      return new Response(
        JSON.stringify({ error: "event_type and description are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check for rate limiting - same IP, same event type within last 5 minutes
    const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const { count } = await supabase
      .from("security_events")
      .select("*", { count: "exact", head: true })
      .eq("ip_address", event.ip_address || "unknown")
      .eq("event_type", event.event_type)
      .gte("created_at", fiveMinAgo);

    const isDuplicate = (count || 0) > 3;

    // Log the event
    const { error: insertError } = await supabase
      .from("security_events")
      .insert({
        event_type: event.event_type,
        severity: event.severity || "medium",
        ip_address: event.ip_address || "unknown",
        user_agent: event.user_agent || "unknown",
        path: event.path || "/",
        description: event.description,
        metadata: event.metadata || {},
        notified: !isDuplicate && (event.severity === "high" || event.severity === "critical"),
      });

    if (insertError) {
      console.error("Failed to log security event:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to log event" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email alert for high/critical severity (skip duplicates)
    if (!isDuplicate && (event.severity === "high" || event.severity === "critical")) {
      console.log(`[SECURITY ALERT] Sending email to ${ADMIN_EMAIL}`);
      console.log(`Type: ${event.event_type} | Severity: ${event.severity}`);
      console.log(`Description: ${event.description}`);
      console.log(`IP: ${event.ip_address} | Path: ${event.path}`);

      // Send email via Supabase Auth admin
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
                event_type: event.event_type,
                severity: event.severity,
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
        alerted: !isDuplicate && (event.severity === "high" || event.severity === "critical") 
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Security monitor error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
