import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';
import { Resend } from 'resend';

// MongoDB client connection (reused across invocations for serverless optimization)
let cachedClient: MongoClient | null = null;
let resend: Resend | null = null;

async function getMongoClient(): Promise<MongoClient> {
  const mongoUri = process.env.MONGODB_URI?.trim();
  
  if (!mongoUri) {
    throw new Error('Missing MONGODB_URI environment variable. Please set it in Vercel environment variables.');
  }

  // Validate connection string format
  if (!mongoUri.startsWith('mongodb://') && !mongoUri.startsWith('mongodb+srv://')) {
    throw new Error(`Invalid MONGODB_URI format. Connection string must start with "mongodb://" or "mongodb+srv://". Received: ${mongoUri.substring(0, 20)}...`);
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
    const { 
      name, 
      email, 
      phone, 
      city, 
      firstTimeBuyer, 
      mostImportant, 
      source = 'lead_form',
      // Quiz-specific fields
      quizAnswers,
      quizPrograms,
      quizIsEligible,
      quizEstimatedFlow,
      contactMethod
    } = request.body;

    // Validate required fields based on source
    if (source === 'homeownership_quiz') {
      // For quiz submissions, require contact info
      if (!name || !email || !phone || !city) {
        return response.status(400).json({ 
          error: 'Missing required fields',
          required: ['name', 'email', 'phone', 'city'],
          message: 'Contact information is required to submit quiz results'
        });
      }
      // Quiz answers are required for quiz submissions
      if (!quizAnswers || typeof quizAnswers !== 'object') {
        return response.status(400).json({ 
          error: 'Missing quiz data',
          required: ['quizAnswers']
        });
      }
    } else {
      // For regular lead forms, require standard fields
      if (!name || !email || !phone || !city) {
        return response.status(400).json({ 
          error: 'Missing required fields',
          required: ['name', 'email', 'phone', 'city']
        });
      }
    }

    // Get MongoDB client
    mongoClient = await getMongoClient();
    const db = mongoClient.db('westmichigan-homehub');
    const collection = db.collection('leads');

    // Prepare document for insertion
    const leadDocument: any = {
      name,
      email,
      phone,
      city,
      first_time_buyer: firstTimeBuyer || null,
      most_important: mostImportant || null,
      source,
      created_at: new Date(),
    };

    // Add quiz-specific data if this is a quiz submission
    if (source === 'homeownership_quiz') {
      leadDocument.quiz_answers = quizAnswers || {};
      leadDocument.quiz_programs = Array.isArray(quizPrograms) ? quizPrograms : [];
      leadDocument.quiz_is_eligible = quizIsEligible ?? null;
      leadDocument.quiz_estimated_flow = quizEstimatedFlow ?? null;
      leadDocument.contact_method = contactMethod || null;
    }

    // Insert into MongoDB
    const result = await collection.insertOne(leadDocument);

    if (!result.insertedId) {
      throw new Error('Failed to insert lead into database');
    }

    // Send email notification (if Resend is configured)
    const resendClient = getResendClient();
    if (resendClient && process.env.NOTIFICATION_EMAIL) {
      try {
        // Build email content based on source
        let emailSubject = `New Lead Submission - ${name}`;
        let emailHtml = `
          <h2>New Lead Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>First Time Buyer:</strong> ${firstTimeBuyer || 'Not specified'}</p>
          <p><strong>Most Important:</strong> ${mostImportant || 'Not specified'}</p>
          <p><strong>Source:</strong> ${source}</p>
        `;

        // Add quiz-specific information if this is a quiz submission
        if (source === 'homeownership_quiz') {
          emailSubject = `New Quiz Submission - ${name}`;
          emailHtml += `
            <hr>
            <h3>Quiz Results</h3>
            <p><strong>Contact Method Requested:</strong> ${contactMethod || 'Not specified'}</p>
            <p><strong>Eligible:</strong> ${quizIsEligible ? 'Yes' : 'No'}</p>
            <p><strong>Estimated Cash Flow:</strong> ${quizEstimatedFlow ? 'Strong' : 'Needs Review'}</p>
            <p><strong>Recommended Programs:</strong></p>
            <ul>
              ${Array.isArray(quizPrograms) && quizPrograms.length > 0 
                ? quizPrograms.map((program: string) => `<li>${program}</li>`).join('')
                : '<li>None specified</li>'
              }
            </ul>
            <p><strong>Quiz Answers:</strong></p>
            <ul>
              ${quizAnswers ? Object.entries(quizAnswers).map(([key, value]) => 
                `<li><strong>${key}:</strong> ${value}</li>`
              ).join('') : '<li>No answers provided</li>'}
            </ul>
          `;
        }

        emailHtml += `
          <hr>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          <p><em>Lead ID: ${result.insertedId}</em></p>
        `;

        await resendClient.emails.send({
          from: 'West Michigan Homebuyer Hub <noreply@resend.dev>',
          to: process.env.NOTIFICATION_EMAIL,
          subject: emailSubject,
          html: emailHtml,
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
