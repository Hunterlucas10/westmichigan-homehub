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
            <Card className="p-6 bg-muted mb-12">
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

