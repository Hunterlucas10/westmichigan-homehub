-- Test script to verify RLS policy setup
-- Run this in Supabase SQL Editor

-- 1. Check if RLS is enabled
SELECT 
    tablename,
    rowsecurity as "RLS Enabled"
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename = 'leads';

-- 2. List all policies on leads table
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd as "Command",
    qual as "USING",
    with_check as "WITH CHECK"
FROM pg_policies 
WHERE tablename = 'leads' 
AND schemaname = 'public';

-- 3. Check table structure
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
AND table_name = 'leads'
ORDER BY ordinal_position;

