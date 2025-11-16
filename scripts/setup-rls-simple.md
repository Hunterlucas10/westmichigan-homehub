# Setup RLS Policies for Leads Table

Since the Supabase JS client cannot execute arbitrary SQL, please run this SQL directly in your Supabase Dashboard.

## Steps:

1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/gbmcyvtfkiirgyklrvbq
2. Navigate to **SQL Editor** (in the left sidebar)
3. Click **New Query**
4. Paste the following SQL:

```sql
-- Enable Row Level Security on the leads table
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists (in case you run this multiple times)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON leads;

-- Create a policy that allows anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

5. Click **Run** (or press Ctrl+Enter)
6. You should see a success message

## What this does:

- **Enables RLS**: Turns on Row Level Security for the `leads` table
- **Allows anonymous inserts**: Permits the API (using the anon key) to insert new leads without authentication

## Verify it worked:

After running the SQL, you can verify by:
1. Going to **Authentication** → **Policies** in Supabase Dashboard
2. You should see the "Allow anonymous inserts" policy listed for the `leads` table

