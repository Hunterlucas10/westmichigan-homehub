-- Final RLS fix - run this in Supabase SQL Editor
-- This will completely reset and recreate the policy

-- Step 1: Disable RLS temporarily (to clear any issues)
ALTER TABLE public.leads DISABLE ROW LEVEL SECURITY;

-- Step 2: Drop ALL policies
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.leads;

-- Step 3: Re-enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Step 4: Create a new policy with explicit permissive setting
CREATE POLICY "Allow anonymous inserts" 
ON public.leads
AS PERMISSIVE  -- Explicitly set as permissive
FOR INSERT
TO anon
WITH CHECK (true);

-- Step 5: Verify it was created
SELECT 
    policyname,
    permissive,
    roles,
    cmd,
    with_check
FROM pg_policies 
WHERE tablename = 'leads' 
AND schemaname = 'public';

