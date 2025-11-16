import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, city, firstTimeBuyer, mostImportant, source = 'lead_form' } = request.body;

    // Validate required fields
    if (!name || !email || !phone || !city) {
      return response.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'phone', 'city']
      });
    }

    // Store in Supabase
    const { data, error } = await supabase
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
      throw error;
    }

    // Send email notification (if Resend is configured)
    if (resend && process.env.NOTIFICATION_EMAIL) {
      try {
        await resend.emails.send({
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
    return response.status(500).json({ 
      error: 'Failed to submit lead',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

