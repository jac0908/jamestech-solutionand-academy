
-- Allow admins to update security events
CREATE POLICY "Admins can update security events"
ON public.security_events
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to delete security events
CREATE POLICY "Admins can delete security events"
ON public.security_events
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));
