import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Home, DollarSign, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const NoMoneyDownGrandRapids = () => {
  const programs = [
    {
      icon: Shield,
      title: "VA Loans — 100% Financing for Veterans",
      description: "If you've served in the military, you may qualify for a VA loan, one of the best zero-down mortgage programs available. Backed by the U.S. Department of Veterans Affairs, VA loans require no down payment and no private mortgage insurance (PMI).",
      link: "/va-loans-michigan"
    },
    {
      icon: Home,
      title: "USDA Loans — For Rural and Suburban Areas",
      description: "USDA loans offer 100% financing for homes located in eligible rural or suburban areas, which includes much of West Michigan. These loans are perfect for buyers with moderate incomes and credit scores above 640.",
      link: "/zero-down-home-loans-michigan"
    },
    {
      icon: DollarSign,
      title: "MSHDA Down Payment Assistance",
      description: "Even if you don't qualify for VA or USDA, the MSHDA DPA program can cover up to $10,000 toward your down payment and closing costs—allowing you to close with little to no cash out of pocket.",
      link: "/mshda-loans-michigan"
    },
  ];

  const qualificationTips = [
    "Keep your credit score above 640",
    "Limit your monthly debts (DTI below 45%)",
    "Work with a local lender who knows West Michigan programs",
    "Complete required homebuyer education courses",
    "Ensure the property meets program requirements",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Buy a House with No Money Down | Zero-Down Home Loans in Grand Rapids & West Michigan</title>
        <meta 
          name="description" 
          content="Yes, you can buy a home in West Michigan with no money down! Learn about VA, USDA, and MSHDA options to purchase with zero or low upfront costs." 
        />
        <link rel="canonical" href={`${SITE_URL}/no-money-down-grand-rapids`} />
        <meta property="og:title" content="Buy a House with No Money Down | Zero-Down Home Loans in Grand Rapids" />
        <meta property="og:description" content="Yes, you can buy a home in West Michigan with no money down! Learn about VA, USDA, and MSHDA options." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/no-money-down-grand-rapids`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-no-money-down.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy a House with No Money Down in Grand Rapids" />
        <meta name="twitter:description" content="Yes, you can buy a home in West Michigan with no money down!" />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-no-money-down.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="Buy a House with No Money Down | Zero-Down Home Loans in Grand Rapids & West Michigan"
        description="Yes, you can buy a home in West Michigan with no money down! Learn about VA, USDA, and MSHDA options to purchase with zero or low upfront costs."
        url="/no-money-down-grand-rapids"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "No Money Down Grand Rapids", url: "/no-money-down-grand-rapids" }]} />
      <Navigation />
      
      {/* Breadcrumbs */}
      <section className="pt-24 pb-2 px-4">
        <div className="container mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/learning-center" className="hover:text-primary">Learning Center</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">No Money Down in Grand Rapids</span>
          </nav>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How to Buy a House with No Money Down in Grand Rapids & West Michigan
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                If saving for a down payment has kept you from buying a home, you're not alone. Many <Link to="/first-time-buyer" className="text-primary hover:underline">first-time buyers in Grand Rapids</Link> and across West Michigan assume they need 10% or 20% down—but that's not true.
              </p>
              <p>
                There are real, <Link to="/zero-down-home-loans-michigan" className="text-primary hover:underline">zero-down mortgage options</Link> available that can help you become a homeowner sooner than you think.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Three Zero-Down Paths to Homeownership
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <program.icon className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {program.description}
                </p>
                <Link to={program.link} className="text-primary hover:underline text-sm font-medium">
                  Learn more →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Why Zero-Down Doesn't Mean Risky
          </h2>
          <Card className="p-8">
            <p className="text-muted-foreground mb-4">
              Buying with zero down doesn't mean risky financing—it means using the programs designed to make 
              homeownership attainable. These aren't subprime loans or adjustable-rate schemes. They're 
              government-backed or state-supported options with clear terms and protections.
            </p>
            <p className="text-muted-foreground">
              West Michigan lenders who specialize in these programs understand the local market and can guide 
              you through the process with confidence. You'll still need to qualify based on income, credit, 
              and debt-to-income ratios—but the down payment barrier is removed.
            </p>
          </Card>
        </div>
      </section>

      {/* Qualification Tips Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Tips to Qualify for a No-Money-Down Loan
          </h2>
          <Card className="p-8">
            <ul className="space-y-4">
              {qualificationTips.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Buy in Grand Rapids with Zero Down?
            </h2>
            <p className="text-muted-foreground mb-6">
              The path to homeownership in West Michigan is more accessible than you think. Whether you're a 
              veteran, qualify for rural housing programs, or need <Link to="/mshda-loans-michigan" className="text-primary hover:underline">MSHDA assistance</Link>, there's a zero-down option that fits your situation.
            </p>
            <p className="text-muted-foreground">
              Connect with a local lender today to explore your options and take the first step toward owning 
              your home—no massive savings required.
            </p>
          </Card>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get Started with Zero Down
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with a trusted West Michigan lender who specializes in no-money-down programs.
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
              <h3 className="text-lg font-bold text-foreground mb-3">Zero-Down Loans Guide</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete guide to VA, USDA, and other zero-down options
              </p>
              <Link to="/zero-down-home-loans-michigan" className="text-primary hover:underline text-sm font-medium">
                Read guide →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">VA Loans for Veterans</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about 100% financing for military service members
              </p>
              <Link to="/va-loans-michigan" className="text-primary hover:underline text-sm font-medium">
                View benefits →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">MSHDA Assistance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get up to $10,000 in down payment help
              </p>
              <Link to="/mshda-loans-michigan" className="text-primary hover:underline text-sm font-medium">
                Learn more →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NoMoneyDownGrandRapids;
