import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize Supabase client inside handler to ensure env vars are available
let supabase: ReturnType<typeof createClient> | null = null;
let resend: Resend | null = null;

function getSupabaseClient() {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    throw new Error('Missing Supabase environment variables: SUPABASE_URL and SUPABASE_ANON_KEY must be set');
  }
  
  if (!supabase) {
    supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );
  }
  return supabase;
}

function getResendClient() {
  if (process.env.RESEND_API_KEY && !resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // Enable CORS
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get Supabase client (will throw if env vars are missing)
    const supabaseClient = getSupabaseClient();
    
    const { name, email, phone, city, firstTimeBuyer, mostImportant, source = 'lead_form' } = request.body;

    // Validate required fields
    if (!name || !email || !phone || !city) {
      return response.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'phone', 'city']
      });
    }

    // Store in Supabase
    const { data, error } = await supabaseClient
      .from('leads')
      .insert({
        name,
        email,
        phone,
        city,
        first_time_buyer: firstTimeBuyer || null,
        most_important: mostImportant || null,
        source
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return response.status(500).json({ 
        error: 'Database error',
        message: error.message,
        details: error
      });
    }

    // Send email notification (if Resend is configured)
    const resendClient = getResendClient();
    if (resendClient && process.env.NOTIFICATION_EMAIL) {
      try {
        await resendClient.emails.send({
          from: 'West Michigan Homebuyer Hub <noreply@resend.dev>',
          to: process.env.NOTIFICATION_EMAIL,
          subject: `New Lead Submission - ${name}`,
          html: `
            <h2>New Lead Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>First Time Buyer:</strong> ${firstTimeBuyer || 'Not specified'}</p>
            <p><strong>Most Important:</strong> ${mostImportant || 'Not specified'}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            <hr>
            <p><em>Lead ID: ${data.id}</em></p>
          `,
        });
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error('Email notification failed:', emailError);
      }
    }

    return response.status(200).json({ 
      success: true,
      leadId: data.id 
    });
  } catch (error) {
    console.error('Error submitting lead:', error);
    
    // Provide more detailed error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const isConfigError = errorMessage.includes('Missing Supabase environment variables');
    
    return response.status(500).json({ 
      error: isConfigError ? 'Server configuration error' : 'Failed to submit lead',
      message: errorMessage,
      ...(isConfigError && {
        hint: 'Please check that SUPABASE_URL and SUPABASE_ANON_KEY are set in Vercel environment variables'
      })
    });
  }
}

