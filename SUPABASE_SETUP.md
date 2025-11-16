# Supabase RLS Setup Guide

This guide will help you set up Row Level Security (RLS) policies for the `leads` table.

## Option 1: Using Supabase Dashboard (Recommended - Easiest)

1. **Go to your Supabase Dashboard**
   - URL: https://supabase.com/dashboard/project/gbmcyvtfkiirgyklrvbq
   - Or navigate to: Dashboard → Your Project → SQL Editor

2. **Open SQL Editor**
   - Click "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Run the SQL**
   - Copy and paste the contents of `setup-rls.sql` (or see below)
   - Click "Run" (or press Ctrl+Enter)

4. **Verify**
   - Go to Authentication → Policies
   - You should see "Allow anonymous inserts" policy for the `leads` table

### SQL to Run:

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

---

## Option 2: Using Supabase CLI

### Step 1: Login to Supabase CLI

```bash
npx supabase login
```

This will open your browser to authenticate. After logging in, you'll get an access token.

### Step 2: Link Your Project

```bash
npx supabase link --project-ref gbmcyvtfkiirgyklrvbq
```

You'll be prompted for:
- Database password (found in Supabase Dashboard → Settings → Database)

### Step 3: Apply Migration

```bash
npx supabase db push
```

This will apply all migrations in the `supabase/migrations/` folder.

---

## What This Does

- **Enables RLS**: Turns on Row Level Security for the `leads` table
- **Allows Anonymous Inserts**: Permits your API (using the anon key) to insert new leads without requiring user authentication

## Verification

After setup, test by:
1. Submitting a form on your website
2. Checking the `leads` table in Supabase Dashboard → Table Editor
3. You should see the new lead entry

## Troubleshooting

If you get permission errors:
- Make sure RLS is enabled: `ALTER TABLE leads ENABLE ROW LEVEL SECURITY;`
- Verify the policy exists: Check Authentication → Policies
- Ensure you're using the `anon` key (not `service_role`) in your API

