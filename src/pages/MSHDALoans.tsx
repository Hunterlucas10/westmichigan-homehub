import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home, DollarSign, GraduationCap, FileText, ChevronRight } from "lucide-react";

const MSHDALoans = () => {
  const benefits = [
    "Up to $10,000 in down payment and closing cost assistance",
    "Zero-interest, non-forgivable second mortgage",
    "No monthly payments on the assistance loan",
    "Competitive fixed-rate 30-year mortgage",
    "Only repaid when you sell or refinance",
  ];

  const eligibility = [
    "Minimum credit score: 640 (660 for manufactured homes)",
    "Household income under MSHDA's regional limits (varies by county)",
    "Home purchase price below program limits",
    "Must complete a homebuyer education course from a certified provider",
    "Available in Kent, Ottawa, Muskegon, Allegan, and other West Michigan counties",
  ];

  const steps = [
    {
      title: "Contact an MSHDA-approved lender",
      description: "Find a participating lender in West Michigan who understands the program.",
    },
    {
      title: "Get pre-approved",
      description: "Determine your eligibility and learn how much assistance you qualify for.",
    },
    {
      title: "Complete homebuyer education",
      description: "Take a certified course (often available online or in-person locally).",
    },
    {
      title: "Submit your application",
      description: "Work with your lender to submit the MSHDA DPA application.",
    },
    {
      title: "Close on your home",
      description: "MSHDA funds are added at closing, allowing you to move in with little to no cash.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MSHDA MI Home Loan & Down Payment Assistance | West Michigan Eligibility & Application Guide</title>
        <meta 
          name="description" 
          content="Learn how MSHDA's MI Home Loan and Down Payment Assistance programs help West Michigan homebuyers with up to $10,000 in support. See eligibility, income limits, and steps to apply." 
        />
      </Helmet>

      <Navigation />
      
      {/* Breadcrumbs */}
      <section className="pt-24 pb-2 px-4">
        <div className="container mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/learning-center" className="hover:text-primary">Learning Center</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">MSHDA Loans</span>
          </nav>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              MSHDA MI Home Loan & Down Payment Assistance — West Michigan Eligibility & How to Apply
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Buying your first home in West Michigan doesn't have to mean emptying your savings. The Michigan 
                State Housing Development Authority (MSHDA) offers the <Link to="/first-time-homebuyer-programs-west-michigan" className="text-primary hover:underline">MI Home Loan and Down Payment Assistance (DPA) programs</Link> to help buyers close the gap between their dreams and their budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is MSHDA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What Is the MSHDA MI Home Loan Program?
            </h2>
            <p className="text-muted-foreground mb-6">
              The MSHDA MI Home Loan is a 30-year, fixed-rate mortgage available to first-time and repeat buyers 
              in certain areas. It's designed to make homeownership affordable by offering competitive interest 
              rates and pairing with DPA funds for qualified borrowers.
            </p>
            <p className="text-muted-foreground">
              This program is one of the most popular options among <Link to="/first-time-buyer" className="text-primary hover:underline">first-time homebuyers in Michigan</Link>, helping thousands of families transition from renting to owning every year.
            </p>
          </Card>
        </div>
      </section>

      {/* DPA Benefits Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              How the Down Payment Assistance Works
            </h2>
            <Card className="p-8 mb-6">
              <p className="text-muted-foreground mb-6">
                Qualified buyers can receive up to $10,000 in down payment and closing cost assistance in the 
                form of a zero-interest, non-forgivable second mortgage. You don't have to make monthly payments 
                on this second loan—it's only repaid when you sell or refinance your home.
              </p>
            </Card>
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Who Qualifies in West Michigan?
          </h2>
          <Card className="p-8">
            <ul className="space-y-4">
              {eligibility.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            How to Apply
          </h2>
          <div className="space-y-6 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="p-8 bg-primary/5">
            <p className="text-muted-foreground">
              With home prices rising in West Michigan, the MSHDA MI Home Loan helps bridge the affordability 
              gap. Combined with other <Link to="/down-payment-assistance-west-michigan" className="text-primary hover:underline">down payment assistance programs</Link>, it's one of the most effective tools for making homeownership attainable.
            </p>
          </Card>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get Connected with an MSHDA-Approved Lender
            </h2>
            <p className="text-xl text-muted-foreground">
              Let us match you with a trusted local lender who specializes in MSHDA programs.
            </p>
          </div>
          <Card className="p-8">
            <LeadForm />
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 bg-muted border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">First-Time Buyer Programs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore all first-time homebuyer programs in Michigan
              </p>
              <Link to="/first-time-homebuyer-programs-west-michigan" className="text-primary hover:underline text-sm font-medium">
                View programs →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">Zero-Down Loans</h3>
              <p className="text-sm text-muted-foreground mb-4">
                See VA, USDA, and other no-money-down options
              </p>
              <Link to="/zero-down-home-loans-michigan" className="text-primary hover:underline text-sm font-medium">
                Learn more →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">Down Payment Assistance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Browse all DPA options in West Michigan
              </p>
              <Link to="/down-payment-assistance-west-michigan" className="text-primary hover:underline text-sm font-medium">
                View all options →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MSHDALoans;
