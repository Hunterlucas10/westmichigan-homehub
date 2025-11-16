import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, DollarSign, Home, Building, Gift, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const DownPaymentAssistanceWestMichigan = () => {
  const programs = [
    {
      icon: DollarSign,
      title: "MSHDA Down Payment Assistance",
      amount: "Up to $10,000",
      description: "Zero-interest second mortgage that covers down payment and closing costs. No monthly payments—only repaid when you sell or refinance.",
      link: "/mshda-loans-michigan"
    },
    {
      icon: Building,
      title: "Grand Rapids Homebuyer Assistance Fund",
      amount: "Up to $7,500",
      description: "Available for Grand Rapids city residents. Helps with down payment and closing costs for qualified first-time buyers.",
      eligibility: "Must live/work in Grand Rapids, income limits apply"
    },
    {
      icon: Home,
      title: "Kent County Community Development DPA",
      amount: "Varies",
      description: "For low-to-moderate-income families in Kent County. Provides down payment assistance and homebuyer education support.",
      eligibility: "Income and area restrictions apply"
    },
    {
      icon: Gift,
      title: "NeighborhoodLIFT by Wells Fargo",
      amount: "Up to $25,000*",
      description: "When available in West Michigan, provides significant down payment assistance. Check for current availability.",
      eligibility: "Periodic program, check with local lenders for availability"
    },
  ];

  const strategies = [
    {
      title: "Stack Multiple Programs",
      description: "Some buyers combine MSHDA assistance with local city/county programs for maximum benefit."
    },
    {
      title: "Pair with Low-Down Loans",
      description: "Use DPA alongside FHA (3.5% down) or Conventional 97 (3% down) to minimize out-of-pocket costs."
    },
    {
      title: "Consider Employer Programs",
      description: "Some West Michigan employers offer homebuyer assistance—ask your HR department."
    },
    {
      title: "Check for First-Generation Grants",
      description: "New state programs offer up to $25,000 for first-generation buyers whose parents never owned a home."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Down Payment Assistance in West Michigan | Grants, Loans & 2025 Resources</title>
        <meta 
          name="description" 
          content="See every down payment assistance program available in West Michigan. Compare MSHDA, city grants, and lender credits to buy a home with little cash upfront." 
        />
        <link rel="canonical" href={`${SITE_URL}/down-payment-assistance-west-michigan`} />
        <meta property="og:title" content="Down Payment Assistance in West Michigan | Grants, Loans & 2025 Resources" />
        <meta property="og:description" content="See every down payment assistance program available in West Michigan. Compare MSHDA, city grants, and lender credits." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/down-payment-assistance-west-michigan`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-down-payment-assistance.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Down Payment Assistance in West Michigan" />
        <meta name="twitter:description" content="See every down payment assistance program available in West Michigan." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-down-payment-assistance.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="Down Payment Assistance in West Michigan | Grants, Loans & 2025 Resources"
        description="See every down payment assistance program available in West Michigan. Compare MSHDA, city grants, and lender credits to buy a home with little cash upfront."
        url="/down-payment-assistance-west-michigan"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Down Payment Assistance", url: "/down-payment-assistance-west-michigan" }]} />
      <Navigation />
      
      {/* Breadcrumbs */}
      <section className="pt-24 pb-2 px-4">
        <div className="container mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/learning-center" className="hover:text-primary">Learning Center</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Down Payment Assistance</span>
          </nav>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Down Payment Assistance Programs in West Michigan (Local Grants, DPA & Resources)
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Down payment assistance isn't just about <Link to="/mshda-loans-michigan" className="text-primary hover:underline">MSHDA's statewide program</Link>. West Michigan buyers have access to multiple local programs, city grants, and lender credits that can dramatically reduce your upfront costs.
              </p>
              <p>
                Whether you're buying in Grand Rapids, Holland, Muskegon, or surrounding areas, there's likely 
                a <Link to="/first-time-buyer" className="text-primary hover:underline">down payment assistance program</Link> designed specifically for your community and income level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Available Down Payment Assistance Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <program.icon className="w-12 h-12 mb-4 text-secondary" />
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                  <span className="text-secondary font-bold text-sm">{program.amount}</span>
                </div>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                {program.eligibility && (
                  <p className="text-sm text-muted-foreground italic mb-4">
                    <strong>Eligibility:</strong> {program.eligibility}
                  </p>
                )}
                {program.link && (
                  <Link to={program.link} className="text-primary hover:underline text-sm font-medium">
                    Learn more →
                  </Link>
                )}
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              * Program availability and amounts subject to funding and eligibility requirements
            </p>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Maximizing Your Down Payment Assistance
          </h2>
          <div className="space-y-6">
            {strategies.map((strategy, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{strategy.title}</h3>
                    <p className="text-muted-foreground text-sm">{strategy.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How DPA Works Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            How Down Payment Assistance Works
          </h2>
          <Card className="p-8">
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">Pre-Qualification:</strong>
                  <p className="text-muted-foreground">Connect with a lender to determine which programs you qualify for based on income, credit, and location.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">Application:</strong>
                  <p className="text-muted-foreground">Submit required documentation alongside your mortgage application. Your lender handles coordination with assistance programs.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">Funding at Closing:</strong>
                  <p className="text-muted-foreground">Assistance funds are applied directly at closing, reducing your out-of-pocket costs dramatically.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">Repayment Terms:</strong>
                  <p className="text-muted-foreground">Most programs use forgivable loans, deferred payment loans, or zero-interest second mortgages that don't require monthly payments.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Eligibility Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              General Eligibility Requirements
            </h2>
            <p className="text-muted-foreground mb-6">
              While each program has specific requirements, most West Michigan down payment assistance programs share common criteria:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Credit score minimums (typically 620-640)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Income limits based on household size and county</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Home must be primary residence</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Completion of homebuyer education course</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Purchase price limits vary by program and location</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-6">
              A local lender experienced with West Michigan programs can help you navigate which combinations 
              work best for your situation and maximize your available assistance.
            </p>
          </Card>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Find Your Down Payment Assistance
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with a local expert who can help you access all available programs in your area.
            </p>
          </div>
          <Card className="p-8">
            <LeadForm />
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">MSHDA Programs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about Michigan's statewide assistance program
              </p>
              <Link to="/mshda-loans-michigan" className="text-primary hover:underline text-sm font-medium">
                View details →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">Low Down Payment Loans</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore FHA, Conventional 97, and other 3% down options
              </p>
              <Link to="/low-down-payment-michigan" className="text-primary hover:underline text-sm font-medium">
                Compare options →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">First-Generation Grants</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Up to $25,000 for eligible first-generation buyers
              </p>
              <Link to="/first-generation-homebuyer-grant-michigan" className="text-primary hover:underline text-sm font-medium">
                Check eligibility →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DownPaymentAssistanceWestMichigan;
