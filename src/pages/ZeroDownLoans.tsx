import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Home, DollarSign, FileCheck } from "lucide-react";

const ZeroDownLoans = () => {
  const programs = [
    {
      icon: Shield,
      title: "VA Loans",
      description: "Available to eligible veterans and active duty service members, with zero down payment required—and often no private mortgage insurance. Outstanding for West Michigan veterans.",
    },
    {
      icon: Home,
      title: "USDA Loans",
      description: "For moderate-income buyers in eligible rural or semi-rural areas of Michigan, USDA loans may allow zero down payment and offer competitive interest.",
    },
    {
      icon: DollarSign,
      title: "Zero-Interest Down Payment Assistance",
      description: "Through state programs like the MI Home Loan + DPA through MSHDA, you might secure a second-mortgage assistance loan with 0% interest that covers your down payment or closing costs.",
    },
  ];

  const eligibility = [
    "You must meet program-specific rules: for VA service eligibility, for USDA income/area limits, for state-program income/credit limits",
    "Home must be your primary residence",
    "Some zero-down options still require you to pay closing costs or attend home-buyer education",
    "Not every home qualifies—USDA has eligible areas, and state programs may have purchase price limits",
  ];

  const actionSteps = [
    {
      title: "Check your service-/income-status",
      description: "Are you eligible for VA or USDA?",
    },
    {
      title: "Meet with a local lender",
      description: "Ask specifically about zero-down loan options.",
    },
    {
      title: "Gather your documents",
      description: "Income, credit score, asset statements, education completion.",
    },
    {
      title: "Compare costs",
      description: "Even zero-down loans have monthly costs—understand everything.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Zero-Down Home Loans Michigan | VA, USDA & No Money Down Options</title>
        <meta 
          name="description" 
          content="Explore Michigan home-loan options that require zero down payment. Veterans, rural buyers and first-timers in West Michigan can qualify for VA, USDA and other no-cash-down programs. Let us match you with the best lender today." 
        />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Zero-Down Home Loans in Michigan: VA, USDA & No-Money-Down Options for West Michigan Buyers
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                A common barrier for aspiring homebuyers is the down payment—but in Michigan, especially in 
                West Michigan, there are real paths forward even if you've saved little or nothing. "Zero-down" 
                isn't just a marketing term—it can be a reality if you match the right program with your circumstances.
              </p>
              <p>
                Here at West Michigan Homebuyer Hub, we focus on the programs that let you buy a home in Michigan 
                with zero or very low down payment, and we connect you with lenders who specialise in making it 
                happen locally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Zero Down Means */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-secondary/5">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What does "zero down" really mean?
            </h2>
            <p className="text-muted-foreground">
              "Zero-down" means you buy the home without paying a significant upfront down payment. Instead, 
              special loan programs cover the gap so your cash-out-of-pocket is minimal. It doesn't remove all 
              costs (you'll still have closing costs, inspections, education), but it drastically lowers the 
              upfront barrier.
            </p>
          </Card>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Top no-down or very-low down programs in Michigan
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <program.icon className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground">{program.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Eligibility highlights
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

      {/* Why West Michigan Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Why this matters in West Michigan
          </h2>
          <Card className="p-8">
            <p className="text-muted-foreground mb-4">
              In fast-growing markets like Grand Rapids, Holland, Muskegon or Kalamazoo, a "zero-down path" means 
              you don't have to wait years to save a large down payment. You can act sooner, lock in rates, and 
              start building equity. Lenders in West Michigan who specialise in these programs understand the local 
              market and can streamline the process.
            </p>
            <p className="text-muted-foreground">
              Plus, you'll have help navigating home-buyer education, local inspection rules, and county-specific 
              protocols.
            </p>
          </Card>
        </div>
      </section>

      {/* Taking Action Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Taking action
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {actionSteps.map((step, index) => (
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
              Use our form: At West Michigan Homebuyer Hub we'll match you with a vetted lender who specialises 
              in zero or low-down programs.
            </p>
          </Card>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Don't let the "down payment" stop your home-buying goals
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            With the right program and partner, the dream of owning your home in West Michigan can be within 
            reach now. Fill out our form to get started — and let us connect you with a local lender who knows 
            how to make a zero-down path work.
          </p>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get Matched with a Zero-Down Specialist
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with a local lender who specializes in VA, USDA, and zero-down programs.
            </p>
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

export default ZeroDownLoans;
