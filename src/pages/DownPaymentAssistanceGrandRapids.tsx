import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Building, DollarSign, Home, Gift, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const DownPaymentAssistanceGrandRapids = () => {
  const programs = [
    {
      icon: DollarSign,
      title: "MSHDA Down Payment Assistance",
      amount: "Up to $10,000",
      description: "Michigan's state program offers zero-interest second mortgage that covers down payment and closing costs. Available throughout Grand Rapids and Kent County.",
      link: "/mshda-loans-michigan"
    },
    {
      icon: Building,
      title: "Grand Rapids Homebuyer Assistance Fund",
      amount: "Up to $7,500",
      description: "City-specific program for Grand Rapids residents. Helps with down payment and closing costs for qualified first-time buyers who live or work in the city.",
      eligibility: "Must live/work in Grand Rapids city limits, income limits apply"
    },
    {
      icon: Home,
      title: "Kent County Community Development DPA",
      amount: "Varies by program",
      description: "For low-to-moderate-income families throughout Kent County. Provides down payment assistance and homebuyer education support.",
      eligibility: "Income and area restrictions apply"
    },
    {
      icon: Gift,
      title: "NeighborhoodLIFT by Wells Fargo",
      amount: "Up to $25,000*",
      description: "When available in Grand Rapids, provides significant down payment assistance. Check with local lenders for current availability.",
      eligibility: "Periodic program, check with local lenders"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Down Payment Assistance Programs in Grand Rapids | Local Grants & Loans</title>
        <meta 
          name="description" 
          content="Discover local and state programs in Grand Rapids that can help you cover your down payment and closing costs. Learn about MSHDA, city grants, and county assistance programs." 
        />
        <link rel="canonical" href={`${SITE_URL}/blog/down-payment-assistance-grand-rapids`} />
        <meta property="og:title" content="Down Payment Assistance Programs in Grand Rapids | Local Grants & Loans" />
        <meta property="og:description" content="Discover local and state programs in Grand Rapids that can help you cover your down payment and closing costs." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/down-payment-assistance-grand-rapids`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-down-payment-grand-rapids.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Down Payment Assistance Programs in Grand Rapids" />
        <meta name="twitter:description" content="Discover local and state programs in Grand Rapids that can help you cover your down payment." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-down-payment-grand-rapids.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="Down Payment Assistance Programs in Grand Rapids | Local Grants & Loans"
        description="Discover local and state programs in Grand Rapids that can help you cover your down payment and closing costs. Learn about MSHDA, city grants, and county assistance programs."
        url="/blog/down-payment-assistance-grand-rapids"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Learning Center", url: "/learning-center" },
        { name: "Down Payment Assistance Grand Rapids", url: "/blog/down-payment-assistance-grand-rapids" }
      ]} />
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Down Payment Assistance Programs in Grand Rapids
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover local and state programs that can help you cover your down payment and closing costs when buying a home in Grand Rapids.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Buying a home in Grand Rapids is more affordable than you might think. With multiple down payment assistance 
              programs available at the city, county, and state level, many first-time buyers can purchase a home with 
              little to no cash out of pocket.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Available Programs in Grand Rapids
            </h2>

            <div className="space-y-6 mb-12">
              {programs.map((program, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <program.icon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                      <p className="text-accent font-semibold mb-3">Amount: {program.amount}</p>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      {program.eligibility && (
                        <p className="text-sm text-muted-foreground mb-4"><strong>Eligibility:</strong> {program.eligibility}</p>
                      )}
                      {program.link && (
                        <Link to={program.link} className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                          Learn more <ChevronRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              How to Apply
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Most down payment assistance programs in Grand Rapids are applied through your lender. Start by getting 
              pre-qualified with a local lender who understands these programs and can help you determine which ones you qualify for.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Pre-Qualified Today</h2>
            <p className="text-xl text-muted-foreground">Connect with a local lender who knows Grand Rapids assistance programs.</p>
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

export default DownPaymentAssistanceGrandRapids;

