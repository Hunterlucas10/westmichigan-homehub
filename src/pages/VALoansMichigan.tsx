import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Award, DollarSign, Home, ChevronRight } from "lucide-react";

const VALoansMichigan = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "$0 Down Payment",
      description: "100% financing available—no down payment required for eligible veterans and service members."
    },
    {
      icon: Shield,
      title: "No PMI Required",
      description: "Save hundreds per month by avoiding private mortgage insurance, even with zero down."
    },
    {
      icon: Award,
      title: "Competitive Interest Rates",
      description: "VA loans typically offer lower interest rates than conventional mortgages."
    },
    {
      icon: Home,
      title: "Flexible Credit Requirements",
      description: "More lenient credit standards and easier approval compared to conventional loans."
    },
  ];

  const eligibility = [
    "Active-duty service members",
    "Veterans with qualifying service",
    "National Guard and Reserve members (with 6+ years of service)",
    "Surviving spouses of service members who died in service or from service-connected disabilities",
  ];

  const coverageAreas = [
    "Kent County (Grand Rapids, Wyoming, Kentwood)",
    "Ottawa County (Holland, Grand Haven, Zeeland)",
    "Muskegon County (Muskegon, Norton Shores, Muskegon Heights)",
    "Allegan County (Holland area, Wayland, Plainwell)",
    "And all surrounding West Michigan communities",
  ];

  const steps = [
    {
      title: "Obtain your Certificate of Eligibility (COE)",
      description: "Get your COE through the VA's eBenefits portal, your lender, or by mail."
    },
    {
      title: "Get pre-approved with a VA-approved lender",
      description: "Connect with a West Michigan lender experienced in VA loans to determine your buying power."
    },
    {
      title: "Find your home",
      description: "Search for homes in Kent, Ottawa, Muskegon, or Allegan counties that meet VA property requirements."
    },
    {
      title: "Complete the VA appraisal",
      description: "The property must meet VA's minimum property requirements for safety and habitability."
    },
    {
      title: "Close on your home",
      description: "Complete the closing process with zero down payment and move into your new home."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>VA Loans Michigan | Zero-Down Mortgage for Veterans in West Michigan</title>
        <meta 
          name="description" 
          content="Veterans and active-duty service members can buy a home in West Michigan with no money down. Learn how VA loans work and how to apply locally." 
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
            <span className="text-foreground">VA Loans</span>
          </nav>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              VA Loans & Veteran Homebuyer Programs in Michigan — Zero-Down Options for West Michigan Vets
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                If you've served in the military, you've earned one of the best <Link to="/zero-down-home-loans-michigan" className="text-primary hover:underline">zero-down mortgage benefits</Link> available: the VA home loan. This powerful program offers 100% financing, flexible credit requirements, and no private mortgage insurance—making it one of the strongest homeownership tools for Michigan veterans.
              </p>
              <p>
                Lenders in Kent, Ottawa, Muskegon, and surrounding counties offer specialized VA loan programs 
                designed specifically for <Link to="/first-time-buyer" className="text-primary hover:underline">veterans buying homes in West Michigan</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Key Benefits of VA Loans in West Michigan
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <benefit.icon className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Who Qualifies for VA Loans?
          </h2>
          <Card className="p-8">
            <p className="text-muted-foreground mb-6">
              VA loans are available to eligible veterans, active-duty service members, and certain surviving spouses. Qualifying service requirements include:
            </p>
            <ul className="space-y-4">
              {eligibility.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6">
              Each situation is unique—your Certificate of Eligibility (COE) will confirm your specific eligibility and entitlement amount.
            </p>
          </Card>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            VA Loans Available Throughout West Michigan
          </h2>
          <Card className="p-8">
            <p className="text-muted-foreground mb-6">
              VA-approved lenders serve all of West Michigan, including:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {coverageAreas.map((area, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{area}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            How to Apply for a VA Loan in Michigan
          </h2>
          <div className="space-y-6">
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
        </div>
      </section>

      {/* VA Funding Fee Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Understanding the VA Funding Fee
            </h2>
            <p className="text-muted-foreground mb-4">
              While VA loans don't require a down payment or PMI, they do include a one-time VA funding fee. 
              This fee helps sustain the VA loan program for future veterans.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>First-time use: typically 2.15% of the loan amount (can be financed into the loan)</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Veterans with service-connected disabilities are exempt from the funding fee</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Even with the funding fee, VA loans often save money compared to conventional loans with PMI</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Your VA-approved lender can provide exact calculations based on your situation and help you understand the total cost savings.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Your Service Has Earned You the Best Home Loan Available
            </h2>
            <p className="text-muted-foreground mb-6">
              VA loans offer unmatched benefits for eligible veterans and service members. With zero down payment, 
              no PMI, and flexible approval requirements, you're positioned to buy a home in West Michigan with 
              confidence.
            </p>
            <p className="text-muted-foreground">
              If you're also a first-time buyer, you may qualify for additional <Link to="/first-time-homebuyer-programs-west-michigan" className="text-primary hover:underline">Michigan homebuyer programs</Link> that can stack with your VA loan benefits.
            </p>
          </Card>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Connect with a VA-Approved Lender
            </h2>
            <p className="text-xl text-muted-foreground">
              Get matched with a West Michigan lender who specializes in VA home loans.
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
                Explore all zero-down options including USDA and MSHDA
              </p>
              <Link to="/zero-down-home-loans-michigan" className="text-primary hover:underline text-sm font-medium">
                View options →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">First-Time Buyer Programs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                See what additional programs you may qualify for
              </p>
              <Link to="/first-time-homebuyer-programs-west-michigan" className="text-primary hover:underline text-sm font-medium">
                Explore programs →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">West Michigan Buying Guide</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about buying in Grand Rapids and surrounding areas
              </p>
              <Link to="/no-money-down-grand-rapids" className="text-primary hover:underline text-sm font-medium">
                Read guide →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VALoansMichigan;
