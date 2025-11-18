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
              How to Apply
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              MSHDA loans are applied through MSHDA-approved lenders. Start by connecting with a local West Michigan lender 
              who understands the program and can help you determine your eligibility and guide you through the application process.
            </p>
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

