-- Enable Row Level Security on the leads table
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists (in case you run this multiple times)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON leads;

-- Create a policy that allows anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Optional: Create a policy for authenticated users to read their own leads
-- (Uncomment if you want authenticated users to read leads)
-- CREATE POLICY "Users can read their own leads" ON leads
--   FOR SELECT
--   TO authenticated
--   USING (auth.uid()::text = user_id);

-- Note: The anon role is used by the Supabase client with the anon key
-- This allows the API to insert leads without requiring authentication

