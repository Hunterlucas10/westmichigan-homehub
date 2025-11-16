import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';
import { Resend } from 'resend';

// MongoDB client connection (reused across invocations for serverless optimization)
let cachedClient: MongoClient | null = null;
let resend: Resend | null = null;

async function getMongoClient(): Promise<MongoClient> {
  const mongoUri = process.env.MONGODB_URI;
  
  if (!mongoUri) {
    throw new Error('Missing MONGODB_URI environment variable. Please set it in Vercel environment variables.');
  }

  // Reuse existing connection if available
  if (cachedClient) {
    return cachedClient;
  }

  // Create new connection
  cachedClient = new MongoClient(mongoUri, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });

  await cachedClient.connect();
  return cachedClient;
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

  let mongoClient: MongoClient | null = null;

  try {
    const { name, email, phone, city, firstTimeBuyer, mostImportant, source = 'lead_form' } = request.body;

    // Validate required fields
    if (!name || !email || !phone || !city) {
      return response.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'phone', 'city']
      });
    }

    // Get MongoDB client
    mongoClient = await getMongoClient();
    const db = mongoClient.db('westmichigan-homehub');
    const collection = db.collection('leads');

    // Prepare document for insertion
    const leadDocument = {
      name,
      email,
      phone,
      city,
      first_time_buyer: firstTimeBuyer || null,
      most_important: mostImportant || null,
      source,
      created_at: new Date(),
    };

    // Insert into MongoDB
    const result = await collection.insertOne(leadDocument);

    if (!result.insertedId) {
      throw new Error('Failed to insert lead into database');
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
            <p><em>Lead ID: ${result.insertedId}</em></p>
          `,
        });
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error('Email notification failed:', emailError);
      }
    }

    return response.status(200).json({ 
      success: true,
      leadId: result.insertedId.toString()
    });
  } catch (error) {
    console.error('Error submitting lead:', error);
    
    // Provide more detailed error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const isConfigError = errorMessage.includes('Missing MONGODB_URI');
    
    // Handle MongoDB-specific errors
    let errorDetails: any = {};
    if (error && typeof error === 'object' && 'name' in error) {
      const mongoError = error as any;
      if (mongoError.name === 'MongoServerError' || mongoError.name === 'MongoNetworkError') {
        errorDetails = {
          type: mongoError.name,
          message: mongoError.message,
        };
      }
    }
    
    return response.status(500).json({ 
      error: isConfigError ? 'Server configuration error' : 'Failed to submit lead',
      message: errorMessage,
      ...(isConfigError && {
        hint: 'Please check that MONGODB_URI is set in Vercel environment variables and redeploy',
        debug: {
          hasMongoUri: !!process.env.MONGODB_URI
        }
      }),
      ...(Object.keys(errorDetails).length > 0 && { details: errorDetails })
    });
  }
}
