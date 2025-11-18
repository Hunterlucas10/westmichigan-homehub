import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, FileCheck, Home, DollarSign, Key, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const HomeBuyingProcessStepByStep = () => {
  const steps = [
    {
      number: "1",
      icon: FileCheck,
      title: "Get Pre-Qualified",
      description: "Meet with a lender to understand how much you can afford. This typically takes 15-30 minutes and gives you a realistic budget for your home search.",
      timeline: "1-3 days"
    },
    {
      number: "2",
      icon: Home,
      title: "Find Your Home",
      description: "Work with a real estate agent to find homes that fit your budget and needs. Your pre-qualification letter shows sellers you're serious.",
      timeline: "2-8 weeks"
    },
    {
      number: "3",
      icon: DollarSign,
      title: "Make an Offer",
      description: "Your agent will help you make a competitive offer. Once accepted, you'll enter the inspection and appraisal phase.",
      timeline: "1-3 days"
    },
    {
      number: "4",
      icon: FileCheck,
      title: "Home Inspection & Appraisal",
      description: "A professional inspector checks the home for issues. An appraiser confirms the home's value. You can negotiate repairs or price adjustments.",
      timeline: "1-2 weeks"
    },
    {
      number: "5",
      icon: Key,
      title: "Close & Move In",
      description: "Review and sign closing documents. Transfer funds. Get the keys to your new home!",
      timeline: "30-45 days total"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>The Complete Home Buying Process: Step by Step | West Michigan Guide</title>
        <meta 
          name="description" 
          content="From pre-approval to closing day, understand every step of the homebuying journey in West Michigan. Learn what to expect and how to prepare for each phase." 
        />
        <link rel="canonical" href={`${SITE_URL}/blog/home-buying-process-step-by-step`} />
        <meta property="og:title" content="The Complete Home Buying Process: Step by Step | West Michigan Guide" />
        <meta property="og:description" content="From pre-approval to closing day, understand every step of the homebuying journey in West Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/home-buying-process-step-by-step`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-home-buying-process.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Complete Home Buying Process: Step by Step" />
        <meta name="twitter:description" content="From pre-approval to closing day, understand every step of the homebuying journey." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-home-buying-process.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="The Complete Home Buying Process: Step by Step | West Michigan Guide"
        description="From pre-approval to closing day, understand every step of the homebuying journey in West Michigan. Learn what to expect and how to prepare for each phase."
        url="/blog/home-buying-process-step-by-step"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Learning Center", url: "/learning-center" },
        { name: "Home Buying Process", url: "/blog/home-buying-process-step-by-step" }
      ]} />
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Complete Home Buying Process: Step by Step
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From pre-approval to closing day, understand every step of the homebuying journey in West Michigan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Buying a home in West Michigan doesn't have to be complicated. Understanding the process step-by-step 
              helps you know what to expect and how to prepare. From your first conversation with a lender to getting 
              the keys to your new home, here's your complete guide.
            </p>

            <div className="space-y-8 mb-12">
              {steps.map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-6 h-6 text-secondary" />
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        <span className="text-sm text-muted-foreground">({step.timeline})</span>
                      </div>
                      <p className="text-muted-foreground text-lg">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              What You'll Need
            </h2>
            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Income documentation:</strong> Recent pay stubs, W-2s, tax returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Bank statements:</strong> 2-3 months of checking and savings accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Credit report:</strong> Your lender will pull this, but review your own beforehand</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>ID and Social Security card:</strong> For identity verification</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Step 1: Get Pre-Qualified - In Detail
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Pre-qualification is your first official step and sets the foundation for your entire homebuying journey:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">What Happens During Pre-Qualification</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>Initial conversation:</strong> You'll discuss your income, debts, assets, and credit with a lender. This is typically 
                  a phone call or in-person meeting that takes 15-30 minutes.
                </p>
                <p className="text-muted-foreground">
                  <strong>Soft credit check:</strong> The lender will do a soft pull of your credit (doesn't affect your score) to get an 
                  initial assessment.
                </p>
                <p className="text-muted-foreground">
                  <strong>Pre-qualification letter:</strong> You'll receive a letter stating how much you're pre-qualified to borrow. This 
                  shows sellers and real estate agents that you're a serious buyer.
                </p>
                <p className="text-muted-foreground">
                  <strong>Budget discussion:</strong> Your lender will help you understand what monthly payment you can comfortably afford, 
                  which may be different from your maximum pre-qualification amount.
                </p>
              </div>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Pre-Qualification vs. Pre-Approval</h3>
              <p className="text-muted-foreground mb-3">
                It's important to understand the difference:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Pre-qualification:</strong> Quick estimate based on information you provide (no verification)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Pre-approval:</strong> More thorough process where lender verifies your income, assets, and credit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>For competitive markets:</strong> Pre-approval is stronger and shows sellers you're ready to move quickly</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Step 2: Find Your Home - In Detail
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Once pre-qualified, you'll work with a real estate agent to find homes that fit your budget and needs:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Working with a Real Estate Agent</h3>
              <p className="text-muted-foreground mb-3">
                A good agent will:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Help you understand the local market and neighborhoods</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Set up home searches based on your criteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Schedule showings and attend them with you</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Provide market analysis and help you make competitive offers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Negotiate on your behalf throughout the process</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">What to Look For During Showings</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Location:</strong> Neighborhood, schools, commute, nearby amenities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Condition:</strong> Age of major systems (HVAC, roof, plumbing, electrical)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Layout:</strong> Does it fit your lifestyle and needs?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Potential issues:</strong> Signs of water damage, foundation problems, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Future value:</strong> Is the area appreciating? Are there planned developments?</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Step 3: Make an Offer - In Detail
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Making an offer is more than just naming a price. Your offer includes several components:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Components of an Offer</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Purchase price:</strong> The amount you're offering to pay</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Earnest money:</strong> Typically 1-3% of purchase price, shows you're serious</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Contingencies:</strong> Conditions that must be met (inspection, appraisal, financing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Closing date:</strong> When you want to take possession</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Personal property:</strong> Items you want included (appliances, window treatments, etc.)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Common Contingencies</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Inspection contingency:</strong> Allows you to back out or negotiate repairs based on inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Appraisal contingency:</strong> Protects you if the home appraises for less than your offer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Financing contingency:</strong> Allows you to back out if you can't secure financing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Home sale contingency:</strong> If you need to sell your current home first (less competitive)</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Step 4: Home Inspection & Appraisal - In Detail
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Once your offer is accepted, you'll enter the due diligence phase:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Home Inspection</h3>
              <p className="text-muted-foreground mb-3">
                A professional inspector will examine the home's condition:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Structural:</strong> Foundation, walls, roof, framing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Systems:</strong> HVAC, plumbing, electrical, water heater</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Safety:</strong> Smoke detectors, carbon monoxide detectors, railings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Exterior:</strong> Siding, windows, doors, drainage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Cost:</strong> Typically $300-$500, paid by buyer</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>After inspection:</strong> You can request repairs, ask for a credit, renegotiate the price, or back out if issues are too significant.
              </p>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Appraisal</h3>
              <p className="text-muted-foreground mb-3">
                The lender orders an appraisal to confirm the home's value:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Purpose:</strong> Protects the lender by ensuring the home is worth the loan amount</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Process:</strong> Appraiser visits the home and compares it to similar recent sales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>If appraises low:</strong> You may need to renegotiate, bring more cash, or back out</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Cost:</strong> Typically $300-$500, paid by buyer (often at closing)</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Step 5: Close & Move In - In Detail
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Closing is the final step where ownership transfers to you:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Before Closing</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>Final walkthrough:</strong> Typically done 24-48 hours before closing. You'll verify the home is in the same condition 
                  as when you made the offer and that any agreed-upon repairs were completed.
                </p>
                <p className="text-muted-foreground">
                  <strong>Closing disclosure:</strong> You'll receive this 3 days before closing. Review it carefully and compare to your Loan 
                  Estimate to ensure everything matches.
                </p>
                <p className="text-muted-foreground">
                  <strong>Wire transfer or cashier's check:</strong> You'll need to bring funds for closing costs and down payment. Your lender 
                  will tell you the exact amount and how to transfer it.
                </p>
              </div>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Closing Day</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>What to bring:</strong> Government-issued ID, cashier's check or wire confirmation, and any other documents your lender requests.
                </p>
                <p className="text-muted-foreground">
                  <strong>Who's there:</strong> You, your real estate agent, the seller's agent, closing agent (title company or attorney), 
                  and sometimes the seller.
                </p>
                <p className="text-muted-foreground">
                  <strong>What you'll sign:</strong> Mortgage note, deed of trust, closing disclosure, and numerous other documents. 
                  The closing agent will guide you through each one.
                </p>
                <p className="text-muted-foreground">
                  <strong>How long:</strong> Typically 1-2 hours, depending on complexity and questions.
                </p>
                <p className="text-muted-foreground">
                  <strong>After signing:</strong> The deed is recorded with the county, and you get the keys! Ownership officially transfers to you.
                </p>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Common Timeline and Delays
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              While the process typically takes 30-45 days, delays can happen:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Typical Timeline</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Days 1-3:</strong> Pre-qualification and finding a real estate agent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Days 4-30:</strong> Home search and making offers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Days 31-35:</strong> Offer accepted, inspection scheduled</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Days 36-45:</strong> Inspection, appraisal, underwriting, final approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Day 45:</strong> Closing and move-in!</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Common Delays</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Inspection issues:</strong> Negotiating repairs can add 3-7 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Low appraisal:</strong> Renegotiation or bringing more cash can delay 5-10 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Underwriting requests:</strong> Additional documentation can add 3-5 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Title issues:</strong> Resolving liens or ownership questions can delay 7-14 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Seller delays:</strong> Seller not ready to move, repairs not completed, etc.</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Tips for a Smooth Homebuying Process
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Here are strategies to make your homebuying journey as smooth as possible:
            </p>

            <Card className="p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Get pre-approved, not just pre-qualified:</strong> In competitive markets, pre-approval makes your offer stronger</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Don't make major financial changes:</strong> Avoid large purchases, new credit, or job changes during the process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Respond quickly:</strong> Return lender requests, inspection responses, and other time-sensitive items promptly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Stay organized:</strong> Keep all documents, emails, and communications in one place</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Ask questions:</strong> Don't hesitate to ask your lender, agent, or closing agent about anything you don't understand</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Be flexible:</strong> Some delays are inevitable—maintain flexibility with closing dates when possible</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">Pre-Approval vs Pre-Qualification</h3>
              <p className="text-muted-foreground mb-4">
                Learn the key differences between pre-approval and pre-qualification and why it matters for your home search.
              </p>
              <Link to="/blog/pre-approval-vs-pre-qualification" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Article <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">Home Inspection Checklist</h3>
              <p className="text-muted-foreground mb-4">
                Complete guide to home inspections, what inspectors check, and how to use inspection results in negotiations.
              </p>
              <Link to="/blog/home-inspection-checklist" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Article <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">Closing Costs in Michigan</h3>
              <p className="text-muted-foreground mb-4">
                Understand all the closing costs you'll encounter when buying a home in Michigan and how to prepare for them.
              </p>
              <Link to="/blog/closing-costs-michigan" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Article <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">First-Time Homebuyer Programs</h3>
              <p className="text-muted-foreground mb-4">
                Discover the best first-time homebuyer programs for West Michigan residents, including MSHDA and FHA options.
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start?</h2>
            <p className="text-xl text-muted-foreground">Get pre-qualified and begin your homebuying journey today.</p>
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

export default HomeBuyingProcessStepByStep;

