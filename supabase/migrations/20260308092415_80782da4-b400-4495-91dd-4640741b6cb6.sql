-- Create security events table
CREATE TABLE public.security_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL,
  severity TEXT NOT NULL DEFAULT 'medium',
  ip_address TEXT,
  user_agent TEXT,
  path TEXT,
  description TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  notified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.security_events ENABLE ROW LEVEL SECURITY;

-- Only allow inserts from service role (edge functions)
CREATE POLICY "Service role can manage security events"
  ON public.security_events
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Indexes
CREATE INDEX idx_security_events_created_at ON public.security_events (created_at DESC);
CREATE INDEX idx_security_events_type ON public.security_events (event_type);
CREATE INDEX idx_security_events_ip ON public.security_events (ip_address);