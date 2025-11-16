-- First, check if RLS is enabled
-- If not, enable it
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies that might be conflicting
DROP POLICY IF EXISTS "Allow anonymous inserts" ON leads;

-- Create a policy that allows anonymous inserts
-- This policy allows the 'anon' role (used by the anon key) to insert rows
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Verify the policy was created
-- You can check this in Supabase Dashboard → Authentication → Policies

