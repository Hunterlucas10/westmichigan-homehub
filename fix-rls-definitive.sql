-- DEFINITIVE RLS FIX
-- Run this COMPLETE script in Supabase SQL Editor
-- This will completely reset RLS and create a working policy

-- Step 1: Show current state
SELECT 'Current RLS Status:' as info;
SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public' AND tablename = 'leads';

SELECT 'Current Policies:' as info;
SELECT policyname, permissive, roles, cmd FROM pg_policies WHERE tablename = 'leads' AND schemaname = 'public';

-- Step 2: Remove ALL existing policies
DO $$ 
DECLARE
    pol RECORD;
BEGIN
    FOR pol IN (
        SELECT policyname 
        FROM pg_policies 
        WHERE tablename = 'leads' 
        AND schemaname = 'public'
    ) 
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.leads', pol.policyname);
        RAISE NOTICE 'Dropped policy: %', pol.policyname;
    END LOOP;
END $$;

-- Step 3: Disable and re-enable RLS to ensure clean state
ALTER TABLE public.leads DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Step 4: Create a fresh, simple policy
-- This policy allows the anon role (used by anon key) to insert ANY row
CREATE POLICY "anon_can_insert_leads" 
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Step 5: Verify the policy was created correctly
SELECT 'New Policy Created:' as info;
SELECT 
    policyname,
    permissive,
    roles::text[] as roles,
    cmd,
    with_check
FROM pg_policies 
WHERE tablename = 'leads' 
AND schemaname = 'public';

-- Expected output:
-- policyname: anon_can_insert_leads
-- permissive: PERMISSIVE
-- roles: {anon}
-- cmd: INSERT
-- with_check: (true)

