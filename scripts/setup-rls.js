import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://gbmcyvtfkiirgyklrvbq.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_SERVICE_ROLE_KEY) {
  console.error('❌ SUPABASE_SERVICE_ROLE_KEY is required to run SQL migrations.');
  console.log('\nTo get your service role key:');
  console.log('1. Go to your Supabase Dashboard');
  console.log('2. Navigate to Settings → API');
  console.log('3. Copy the "service_role" key (keep this secret!)');
  console.log('4. Set it as an environment variable: SUPABASE_SERVICE_ROLE_KEY=your_key_here');
  process.exit(1);
}

// Use service role key for admin operations
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function setupRLS() {
  console.log('🔧 Setting up Row Level Security policies...\n');

  const sql = `
    -- Enable Row Level Security on the leads table
    ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

    -- Drop existing policy if it exists
    DROP POLICY IF EXISTS "Allow anonymous inserts" ON leads;

    -- Create a policy that allows anonymous inserts (for form submissions)
    CREATE POLICY "Allow anonymous inserts" ON leads
      FOR INSERT
      TO anon
      WITH CHECK (true);
  `;

  try {
    // Execute SQL using Supabase REST API (rpc call)
    // Note: We'll use a direct Postgres connection approach
    console.log('⚠️  Note: Supabase JS client cannot execute arbitrary SQL.');
    console.log('Please run the following SQL in your Supabase Dashboard:\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(sql);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('Steps:');
    console.log('1. Go to https://supabase.com/dashboard/project/gbmcyvtfkiirgyklrvbq');
    console.log('2. Navigate to SQL Editor');
    console.log('3. Paste the SQL above');
    console.log('4. Click "Run"');
    
    // Alternative: Try using the management API if available
    console.log('\nAlternatively, you can use the Supabase CLI:');
    console.log('1. Link your project: npx supabase link --project-ref gbmcyvtfkiirgyklrvbq');
    console.log('2. Run: npx supabase db push');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

setupRLS();

