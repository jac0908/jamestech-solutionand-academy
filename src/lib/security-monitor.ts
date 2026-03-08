import { supabase } from "@/integrations/supabase/client";

interface SecurityReport {
  event_type: string;
  severity: "low" | "medium" | "high" | "critical";
  path?: string;
  description: string;
  metadata?: Record<string, unknown>;
}

// Track requests per action for rate limit detection
const requestCounts: Record<string, { count: number; firstTime: number }> = {};

const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_THRESHOLD = 10; // max requests per window

async function reportEvent(event: SecurityReport) {
  try {
    await supabase.functions.invoke("security-monitor", {
      body: {
        ...event,
        user_agent: navigator.userAgent,
        ip_address: "client", // server will log actual IP
        path: event.path || window.location.pathname,
      },
    });
  } catch (err) {
    console.error("Security report failed:", err);
  }
}

/**
 * Check if an action is being rate-limited (too many rapid requests)
 */
export function checkRateLimit(actionKey: string): boolean {
  const now = Date.now();
  const entry = requestCounts[actionKey];

  if (!entry || now - entry.firstTime > RATE_LIMIT_WINDOW) {
    requestCounts[actionKey] = { count: 1, firstTime: now };
    return false;
  }

  entry.count++;

  if (entry.count > RATE_LIMIT_THRESHOLD) {
    reportEvent({
      event_type: "rate_limit_exceeded",
      severity: "high",
      description: `Rate limit exceeded for action "${actionKey}": ${entry.count} requests in ${Math.round((now - entry.firstTime) / 1000)}s`,
      metadata: { action: actionKey, count: entry.count },
    });
    return true;
  }

  return false;
}

/**
 * Report suspicious form submission (honeypot triggered)
 */
export function reportHoneypotTriggered(formName: string) {
  reportEvent({
    event_type: "honeypot_triggered",
    severity: "high",
    description: `Bot detected: honeypot field filled on "${formName}" form`,
    metadata: { form: formName },
  });
}

/**
 * Report repeated failed actions
 */
export function reportSuspiciousActivity(description: string, metadata?: Record<string, unknown>) {
  reportEvent({
    event_type: "suspicious_activity",
    severity: "high",
    description,
    metadata,
  });
}

/**
 * Report form abuse (rapid submissions)
 */
export function reportFormAbuse(formName: string) {
  reportEvent({
    event_type: "form_abuse",
    severity: "critical",
    description: `Form abuse detected on "${formName}": multiple rapid submissions`,
    metadata: { form: formName },
  });
}
