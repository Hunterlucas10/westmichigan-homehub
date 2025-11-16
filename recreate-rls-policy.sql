-- Recreate RLS policy for leads table
-- Run this in Supabase SQL Editor

-- 1. Drop the existing policy
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.leads;

-- 2. Ensure RLS is enabled
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 3. Create the policy with explicit schema
CREATE POLICY "Allow anonymous inserts" 
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);

-- 4. Verify it worked (this should return 1 row)
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'leads' 
AND schemaname = 'public';

