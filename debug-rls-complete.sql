-- Complete RLS debugging and fix
-- Run this ENTIRE script in Supabase SQL Editor

-- Step 1: Check current RLS status
SELECT 
    tablename,
    rowsecurity as "RLS Enabled"
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename = 'leads';

-- Step 2: List ALL existing policies (to see if there are conflicts)
SELECT 
    policyname,
    permissive,
    roles,
    cmd as "Command",
    qual as "USING",
    with_check as "WITH CHECK"
FROM pg_policies 
WHERE tablename = 'leads' 
AND schemaname = 'public';

-- Step 3: Remove ALL policies to start fresh
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (
        SELECT policyname 
        FROM pg_policies 
        WHERE tablename = 'leads' 
        AND schemaname = 'public'
    ) 
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.leads', r.policyname);
    END LOOP;
END $$;

-- Step 4: Ensure RLS is enabled
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Step 5: Create a simple, explicit policy for anon role
-- This allows ANY insert from the anon role (which is what the anon key uses)
CREATE POLICY "anon_insert_leads" 
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Step 6: Verify the new policy
SELECT 
    policyname,
    permissive,
    roles,
    cmd,
    with_check
FROM pg_policies 
WHERE tablename = 'leads' 
AND schemaname = 'public';

-- Step 7: Test if we can query as anon (this should work)
-- Note: This test might fail if there's no SELECT policy, but INSERT should work
SET ROLE anon;
-- Try a test insert (this will fail in SQL editor but shows the policy should work)
-- INSERT INTO public.leads (name, email, phone, city) VALUES ('test', 'test@test.com', '123', 'test');
RESET ROLE;

