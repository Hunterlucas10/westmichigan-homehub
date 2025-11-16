-- Complete RLS fix for leads table
-- Run this in Supabase SQL Editor

-- Step 1: Ensure RLS is enabled
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Step 2: Drop ALL existing policies on leads table (to start fresh)
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'leads' AND schemaname = 'public') 
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.leads';
    END LOOP;
END $$;

-- Step 3: Create the INSERT policy for anon role
-- This allows anonymous users (using anon key) to insert rows
CREATE POLICY "Allow anonymous inserts" 
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Step 4: Verify the policy was created
-- Check: SELECT * FROM pg_policies WHERE tablename = 'leads';

