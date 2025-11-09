import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home, DollarSign, GraduationCap, FileText, ChevronRight } from "lucide-react";

const FirstTimeBuyerPrograms = () => {
  const programs = [
    {
      icon: Home,
      title: "MSHDA MI Home Loan",
      description: "A popular option that pairs with down payment assistance for lower-cost entry into homeownership.",
    },
    {
      icon: DollarSign,
      title: "Down Payment Assistance (DPA)",
      description: "These may reduce or eliminate your upfront payment requirement, helping you buy with little-to-no cash down. Some Michigan programs offer up to $10,000 in assistance.",
    },
    {
      icon: GraduationCap,
      title: "Federal-Backed Loan Options",
      description: "Programs like FHA (low down payment), VA (zero down for veterans), and USDA (zero down in eligible rural areas) provide additional paths for first-time buyers.",
      link: "/zero-down-home-loans-michigan"
    },
  ];

  const eligibility = [
    "Minimum credit score (often ~640 for state programs)",
    "Income and purchase price limits tied to program and location",
    "Homebuyer education course may be required",
    "Home must be your primary residence",
  ];

  const nextSteps = [
    {
      title: "Get pre-qualified",
      description: "Talk with a local lender who knows Michigan's first-time buyer programs.",
    },
    {
      title: "Compare programs",
      description: "See which one fits your income, down payment, and home-value goals.",
    },
    {
      title: "Prepare the application",
      description: "Gather documentation (income, credit, debt, etc.) and complete any required education.",
    },
    {
      title: "Submit & close",
      description: "With approval in hand, begin your home search!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>First-Time Homebuyer Programs in West Michigan | Low & Zero-Down Loans</title>
        <meta 
          name="description" 
          content="Discover the best first-time homebuyer programs for West Michigan residents. Learn about low-down and zero-down loans, eligibility, and how you can buy your first home with trusted local lenders." 
        />
      </Helmet>

      <Navigation />
      
      {/* Breadcrumbs */}
      <section className="pt-24 pb-2 px-4">
        <div className="container mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/first-time-buyer" className="hover:text-primary">First-Time Buyers</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Programs Guide</span>
          </nav>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              First-Time Homebuyer Programs in West Michigan — Complete Michigan Guide
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Buying your first home in West Michigan can feel both exciting and overwhelming. From searching 
                neighborhoods in Grand Rapids or Holland to figuring out down-payments and loan options—you want 
                a clear path forward. That's where the right programs and local support make all the difference.
              </p>
              <p>
                Here at West Michigan Homebuyer Hub, we've gathered the top programs designed specifically for 
                first-time homebuyers in Michigan. Whether you have saved a little, saved nothing, or are just 
                beginning to explore, there are options that can help you qualify for a mortgage, reduce your 
                down payment, and get into a home sooner than you might expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Counts Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What counts as a "first-time" homebuyer?
            </h2>
            <p className="text-muted-foreground mb-6">
              In Michigan many programs define a first-time buyer as someone who has not owned a primary 
              residence in the past three years, though each program may vary.
            </p>
            <p className="text-muted-foreground">
              Because you're local to West Michigan, you benefit from lenders and programs that understand 
              our market and can help you navigate each step.
            </p>
          </Card>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Top first-time buyer programs for Michigan residents
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <program.icon className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground">
                  {program.description}
                  {program.link && (
                    <>
                      {" "}
                      <Link to={program.link} className="text-primary hover:underline">
                        Learn more →
                      </Link>
                    </>
                  )}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Key eligibility criteria you should know
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
            Why West Michigan is a smart place to buy now
          </h2>
          <Card className="p-8">
            <p className="text-muted-foreground">
              The West Michigan market offers some great opportunities for first-time buyers. With affordable 
              neighborhoods, proximity to lakes and amenities, and lenders familiar with Michigan's special 
              programs, you're in a strong position. The right loan program + down-payment plan can make all 
              the difference.
            </p>
          </Card>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Your next steps
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {nextSteps.map((step, index) => (
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
            <p className="text-muted-foreground mb-6">
              Buying your first home doesn't have to wait 10 years of saving. With the programs outlined here 
              and our team of West Michigan lenders standing by, you might be closer than you think. Fill out 
              our quick form and let us connect you with a trusted local lender today.
            </p>
          </Card>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Check Your Eligibility
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with a trusted local lender who specializes in first-time homebuyer programs.
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
              <h3 className="text-lg font-bold text-foreground mb-3">Zero-Down Loans</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore VA, USDA, and other no-money-down options
              </p>
              <Link to="/zero-down-home-loans-michigan" className="text-primary hover:underline text-sm font-medium">
                Read guide →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">First-Time Buyer Overview</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn the basics and process of buying your first home
              </p>
              <Link to="/first-time-buyer" className="text-primary hover:underline text-sm font-medium">
                Learn more →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">Learning Center</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Browse all articles and guides
              </p>
              <Link to="/learning-center" className="text-primary hover:underline text-sm font-medium">
                Browse articles →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstTimeBuyerPrograms;
