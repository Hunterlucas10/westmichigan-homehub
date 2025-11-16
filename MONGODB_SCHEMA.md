# MongoDB Database Schema Documentation

## Database: `westmichigan-homehub`

### Collection: `leads`

Stores all form submissions from the website. All submissions include contact information and are stored in a single collection with different `source` values.

#### Base Schema (All Submissions)
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  phone: string,
  city: string,
  first_time_buyer: string | null,  // "yes", "no", "not-sure", or null
  most_important: string | null,     // "lowest-rate", "lowest-down-payment", "established-lender", "time-to-close", or null
  source: string,                    // "lead_form", "exit_intent_popup", "homeownership_quiz"
  created_at: Date
}
```

#### Quiz-Specific Fields (Only for `source: "homeownership_quiz"`)
```typescript
{
  quiz_answers: {
    question1?: string,  // "alone", "co-borrower", "not-sure"
    question2?: string,  // "yes", "no" (veteran status)
    question3?: string,  // "yes", "no" (owned before)
    question4?: string,  // "under50", "50-80", "80-120", "over120" (income)
    question5?: string,  // "under500", "500-1000", "1000-2000", "over2000" (debt)
    question6?: string,  // "excellent", "good", "fair", "needs-improvement" (credit)
    question7?: string   // Location preference
  },
  quiz_programs: string[],           // Array of recommended programs
  quiz_is_eligible: boolean | null,  // Eligibility status
  quiz_estimated_flow: boolean | null, // Cash flow estimate
  contact_method: string | null      // "phone", "text", "email", or null
}
```

## Form Sources

### 1. `lead_form`
- **Component**: `LeadForm.tsx`
- **Fields**: name, email, phone, city, firstTimeBuyer, mostImportant
- **Location**: Used throughout the site (homepage, contact page, blog posts, county pages)
- **Quiz fields**: None

### 2. `exit_intent_popup`
- **Component**: `ExitIntentPopup.tsx`
- **Fields**: email only (name hardcoded as "Exit Intent Lead", phone/city empty)
- **Location**: Site-wide exit intent popup
- **Quiz fields**: None

### 3. `homeownership_quiz`
- **Component**: `HomeownershipQuiz.tsx`
- **Fields**: name, email, phone, city (collected via contact form dialog)
- **Quiz Data**: All 7 quiz answers, calculated programs, eligibility status
- **Location**: Homepage hero section
- **Quiz fields**: All quiz-specific fields included
- **Note**: Only saved when user provides contact information (per requirement)

## Query Examples

### Get all leads from a specific source
```javascript
db.leads.find({ source: "homeownership_quiz" })
```

### Get quiz submissions with specific eligibility
```javascript
db.leads.find({ 
  source: "homeownership_quiz",
  quiz_is_eligible: true 
})
```

### Get leads by date range
```javascript
db.leads.find({
  created_at: {
    $gte: ISODate("2024-01-01"),
    $lte: ISODate("2024-12-31")
  }
})
```

## Indexes (Recommended)

For better query performance, consider adding indexes:
```javascript
// Index on source for filtering
db.leads.createIndex({ source: 1 })

// Index on email for lookups
db.leads.createIndex({ email: 1 })

// Index on created_at for date range queries
db.leads.createIndex({ created_at: -1 })

// Compound index for quiz queries
db.leads.createIndex({ source: 1, quiz_is_eligible: 1 })
```

## Email Notifications

Email notifications are sent for all submissions (if Resend is configured):
- **Subject**: "New Lead Submission - {name}" or "New Quiz Submission - {name}"
- **Content**: Includes all form fields + quiz data (if applicable)
- **Recipient**: Set via `NOTIFICATION_EMAIL` environment variable

