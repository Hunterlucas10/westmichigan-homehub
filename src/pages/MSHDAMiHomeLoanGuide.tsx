import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, DollarSign, GraduationCap, Home, TrendingUp, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const MSHDAMiHomeLoanGuide = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Up to $10,000 in Assistance",
      description: "Zero-interest second mortgage that covers your down payment and closing costs. No monthly payments—only repaid when you sell or refinance."
    },
    {
      icon: TrendingUp,
      title: "Below-Market Interest Rates",
      description: "MSHDA offers competitive interest rates that are often lower than conventional loans, saving you money every month."
    },
    {
      icon: Home,
      title: "Available in West Michigan",
      description: "Program available throughout Kent, Ottawa, Muskegon, Allegan, and other West Michigan counties."
    },
    {
      icon: GraduationCap,
      title: "Homebuyer Education Included",
      description: "Required education course helps you understand the homebuying process and manage your finances as a homeowner."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MSHDA MI Home Loan: Michigan's Best-Kept Secret | Complete Guide</title>
        <meta 
          name="description" 
          content="Discover how MSHDA's programs can help you get down payment assistance and lower interest rates. Learn about eligibility, benefits, and how to apply for MSHDA loans in West Michigan." 
        />
        <link rel="canonical" href={`${SITE_URL}/blog/mshda-mi-home-loan-guide`} />
        <meta property="og:title" content="MSHDA MI Home Loan: Michigan's Best-Kept Secret | Complete Guide" />
        <meta property="og:description" content="Discover how MSHDA's programs can help you get down payment assistance and lower interest rates in West Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/mshda-mi-home-loan-guide`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-mshda-guide.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MSHDA MI Home Loan: Michigan's Best-Kept Secret" />
        <meta name="twitter:description" content="Discover how MSHDA's programs can help you get down payment assistance and lower interest rates." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-mshda-guide.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="MSHDA MI Home Loan: Michigan's Best-Kept Secret | Complete Guide"
        description="Discover how MSHDA's programs can help you get down payment assistance and lower interest rates. Learn about eligibility, benefits, and how to apply for MSHDA loans in West Michigan."
        url="/blog/mshda-mi-home-loan-guide"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Learning Center", url: "/learning-center" },
        { name: "MSHDA MI Home Loan Guide", url: "/blog/mshda-mi-home-loan-guide" }
      ]} />
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              MSHDA MI Home Loan: Michigan's Best-Kept Secret
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how MSHDA's programs can help you get down payment assistance and lower interest rates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Many West Michigan homebuyers don't know about MSHDA (Michigan State Housing Development Authority) programs, 
              but they're one of the best resources for first-time buyers in the state. With down payment assistance up to 
              $10,000 and below-market interest rates, MSHDA makes homeownership more affordable than ever.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Why MSHDA is Michigan's Best-Kept Secret
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6">
                  <benefit.icon className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Eligibility Requirements
            </h2>
            <Card className="p-6 bg-muted mb-12">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Minimum credit score: 640 (660 for manufactured homes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Household income under MSHDA's regional limits (varies by county)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Home purchase price below program limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Must complete a homebuyer education course</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Available in Kent, Ottawa, Muskegon, Allegan, and other West Michigan counties</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              MSHDA Down Payment Assistance Details
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The MSHDA down payment assistance program is a zero-interest second mortgage that helps cover your down payment and closing costs:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">How It Works</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Amount:</strong> Up to $10,000 (or 10% of purchase price, whichever is less)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Zero interest:</strong> No interest accrues on the assistance amount</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>No monthly payments:</strong> You don't make payments on the assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Repayment:</strong> Only repaid when you sell, refinance, or pay off the first mortgage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Forgiveness:</strong> 20% of the assistance is forgiven each year for 5 years (if you stay in the home)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Example: $200,000 Home Purchase</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-foreground">Purchase price:</span>
                  <span className="text-foreground font-semibold">$200,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Down payment needed (3.5%):</span>
                  <span className="text-foreground font-semibold">$7,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Closing costs (estimated):</span>
                  <span className="text-foreground font-semibold">$3,000</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-foreground font-bold">Total needed:</span>
                  <span className="text-foreground font-bold">$10,000</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-foreground font-bold">MSHDA assistance:</span>
                  <span className="text-foreground font-bold text-secondary">$10,000</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-foreground font-bold">Your cash needed:</span>
                  <span className="text-foreground font-bold">$0</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                In this example, MSHDA assistance covers your entire down payment and closing costs, allowing you to buy with zero cash out of pocket.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              MSHDA Mortgage Credit Certificate (MCC)
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In addition to down payment assistance, MSHDA offers a Mortgage Credit Certificate (MCC) that provides a tax credit:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">How MCC Works</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Tax credit:</strong> Up to 20% of your annual mortgage interest paid</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Annual benefit:</strong> Can save $1,000-$2,000+ per year on taxes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Lifetime benefit:</strong> Available for the life of your loan (up to 30 years)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Can combine:</strong> MCC can be used with down payment assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Example:</strong> If you pay $10,000 in mortgage interest, you get a $2,000 tax credit (20%)</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Income Limits for MSHDA Programs
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              MSHDA has income limits that vary by county and household size. For 2024, limits in West Michigan counties include:
            </p>

            <Card className="p-6 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold text-foreground">County</th>
                      <th className="text-left p-3 font-bold text-foreground">1-2 Person Household</th>
                      <th className="text-left p-3 font-bold text-foreground">3+ Person Household</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Kent County</td>
                      <td className="p-3 text-muted-foreground">$109,200</td>
                      <td className="p-3 text-muted-foreground">$125,580</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Ottawa County</td>
                      <td className="p-3 text-muted-foreground">$109,200</td>
                      <td className="p-3 text-muted-foreground">$125,580</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">Muskegon County</td>
                      <td className="p-3 text-muted-foreground">$87,360</td>
                      <td className="p-3 text-muted-foreground">$100,464</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Note:</strong> Income limits are updated annually and vary by county. These are 2024 limits—check with your lender 
                for current limits. Income includes all household members' gross income before taxes.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Purchase Price Limits
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              MSHDA programs have maximum purchase price limits that vary by county:
            </p>

            <Card className="p-6 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold text-foreground">County</th>
                      <th className="text-left p-3 font-bold text-foreground">Maximum Purchase Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Kent County</td>
                      <td className="p-3 text-muted-foreground">$498,257</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Ottawa County</td>
                      <td className="p-3 text-muted-foreground">$498,257</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">Muskegon County</td>
                      <td className="p-3 text-muted-foreground">$498,257</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                These limits are typically aligned with FHA loan limits and are updated annually. The home you purchase must be at or below 
                this price to qualify for MSHDA assistance.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Homebuyer Education Requirement
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              MSHDA requires all borrowers to complete a homebuyer education course:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">What the Course Covers</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Understanding the homebuying process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Mortgage basics and loan types</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Budgeting and managing homeownership costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Maintaining your home</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Understanding your mortgage documents</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Format:</strong> Courses are available online or in-person and typically take 6-8 hours to complete. You must complete 
                the course before closing on your MSHDA loan. Many lenders can help you find approved courses.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              MSHDA Loan Types
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              MSHDA offers several loan programs, each with different features:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">MSHDA MI Home Loan</h3>
                <p className="text-muted-foreground mb-3">
                  The primary program combining down payment assistance with a first mortgage:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">30-year fixed-rate mortgage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Below-market interest rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Up to $10,000 down payment assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Can combine with MCC tax credit</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">MSHDA with FHA</h3>
                <p className="text-muted-foreground mb-3">
                  MSHDA assistance can be combined with FHA loans:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">3.5% down payment (FHA) + MSHDA assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Lower credit score requirements (FHA allows 580+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">More flexible debt-to-income ratios</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">MSHDA with Conventional</h3>
                <p className="text-muted-foreground mb-3">
                  MSHDA can also work with conventional loans:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Typically requires 3-5% down payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Credit score 640+ typically required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">PMI may apply (can be removed at 20% equity)</span>
                  </li>
                </ul>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              How to Apply
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              MSHDA loans are applied through MSHDA-approved lenders. Start by connecting with a local West Michigan lender 
              who understands the program and can help you determine your eligibility and guide you through the application process.
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Application Process</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">1. Find an MSHDA-Approved Lender</h4>
                  <p className="text-muted-foreground">
                    Not all lenders are MSHDA-approved. Work with a lender who specializes in MSHDA programs and understands 
                    the unique requirements and benefits.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">2. Pre-Qualification</h4>
                  <p className="text-muted-foreground">
                    Your lender will review your income, credit, and debt to determine if you qualify for MSHDA programs. 
                    They'll also check income and purchase price limits for your area.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">3. Complete Homebuyer Education</h4>
                  <p className="text-muted-foreground">
                    You must complete an approved homebuyer education course before closing. Your lender can help you find 
                    approved courses and may offer them directly.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">4. Find a Home</h4>
                  <p className="text-muted-foreground">
                    Work with a real estate agent to find a home within MSHDA's purchase price limits. Your lender will 
                    provide a pre-approval letter showing you're qualified for MSHDA assistance.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">5. Apply for MSHDA</h4>
                  <p className="text-muted-foreground">
                    Once you have a purchase agreement, your lender will submit your MSHDA application. MSHDA will review 
                    your eligibility and approve the assistance amount.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">6. Close on Your Home</h4>
                  <p className="text-muted-foreground">
                    At closing, the MSHDA assistance is applied to your down payment and closing costs. You'll sign documents 
                    for both your first mortgage and the MSHDA second mortgage (down payment assistance).
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Why MSHDA is Underutilized
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Despite its benefits, many West Michigan homebuyers don't know about MSHDA programs:
            </p>

            <Card className="p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Lack of awareness:</strong> Many buyers and even some real estate agents aren't familiar with MSHDA</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Not all lenders participate:</strong> Only MSHDA-approved lenders can offer these programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Income limits:</strong> Some buyers assume they make too much, but limits are higher than many realize</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Education requirement:</strong> Some buyers are deterred by the homebuyer education course, but it's actually valuable</span>
                </li>
              </ul>
            </Card>

            <Link to="/mshda-loans-michigan" className="text-primary hover:underline font-medium inline-flex items-center gap-1 mb-12">
              Learn more about MSHDA loans <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">MSHDA Info Center</h3>
              <p className="text-muted-foreground mb-4">
                Complete guide to MSHDA down payment assistance and Mortgage Credit Certificate (MCC) tax credit in West Michigan.
              </p>
              <Link to="/mshda-info-center" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Guide <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">MSHDA Loans Michigan</h3>
              <p className="text-muted-foreground mb-4">
                Learn about MSHDA MI Home Loan eligibility, benefits, income limits, and how to apply in West Michigan.
              </p>
              <Link to="/mshda-loans-michigan" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Guide <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">Down Payment Assistance in West Michigan</h3>
              <p className="text-muted-foreground mb-4">
                See every down payment assistance program available in West Michigan, including MSHDA and local grants.
              </p>
              <Link to="/down-payment-assistance-west-michigan" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Guide <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">First-Time Homebuyer Programs</h3>
              <p className="text-muted-foreground mb-4">
                Discover the best first-time homebuyer programs for West Michigan residents, including MSHDA options.
              </p>
              <Link to="/first-time-homebuyer-programs-west-michigan" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Guide <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">See If You Qualify</h2>
            <p className="text-xl text-muted-foreground">Connect with a local lender who specializes in MSHDA programs.</p>
          </div>
          <Card className="p-8">
            <LeadForm />
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MSHDAMiHomeLoanGuide;

