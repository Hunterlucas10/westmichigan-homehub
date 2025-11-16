import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, DollarSign, Home } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const VALoans = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Zero Down Payment",
      description: "Buy a home with no down payment required. Keep your cash for moving costs and home improvements.",
    },
    {
      icon: Shield,
      title: "No Private Mortgage Insurance",
      description: "Save hundreds per month by avoiding PMI, which is typically required on conventional loans with less than 20% down.",
    },
    {
      icon: Home,
      title: "Competitive Interest Rates",
      description: "VA loans often have lower interest rates than conventional mortgages, saving you thousands over the life of your loan.",
    },
    {
      icon: CheckCircle,
      title: "Flexible Credit Requirements",
      description: "More lenient credit requirements compared to conventional loans make homeownership accessible to more veterans.",
    },
  ];

  const eligibility = [
    "Veterans who served on active duty and were discharged under conditions other than dishonorable",
    "Service members currently on active duty who have served a minimum period",
    "National Guard and Reserve members who have completed at least six years of service",
    "Surviving spouses of service members who died in service or from a service-connected disability",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>VA Loans in West Michigan | Zero Down Payment for Veterans</title>
        <meta 
          name="description" 
          content="VA loans offer zero down payment, no PMI, and competitive rates for veterans and active military in West Michigan. Learn about eligibility, benefits, and how to apply for a VA loan in Grand Rapids." 
        />
        <link rel="canonical" href={`${SITE_URL}/va-loans`} />
        <meta property="og:title" content="VA Loans in West Michigan | Zero Down Payment for Veterans" />
        <meta property="og:description" content="VA loans offer zero down payment, no PMI, and competitive rates for veterans and active military in West Michigan." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/va-loans`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-va-loans.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VA Loans in West Michigan | Zero Down Payment for Veterans" />
        <meta name="twitter:description" content="VA loans offer zero down payment, no PMI, and competitive rates for veterans and active military." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-va-loans.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="VA Loans in West Michigan | Zero Down Payment for Veterans"
        description="VA loans offer zero down payment, no PMI, and competitive rates for veterans and active military in West Michigan."
        url="/va-loans"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "VA Loans", url: "/va-loans" }]} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              VA Loans: Your Path to Homeownership with Zero Down
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              If you've served our country, you've earned incredible benefits. VA loans make homeownership 
              affordable and accessible for veterans, active duty service members, and eligible surviving spouses 
              throughout West Michigan.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why VA Loans Are Unbeatable
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            How VA Loans Work
          </h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">No Down Payment</h3>
                <p className="text-muted-foreground">
                  Unlike conventional loans that often require 3-20% down, VA loans allow you to finance 100% 
                  of your home's purchase price. This means you can buy a home and keep your savings for furniture, 
                  moving costs, or emergencies. Explore all{" "}
                  <Link to="/zero-down-home-loans-michigan" className="text-primary hover:underline font-semibold">
                    zero-down loan options available in Michigan
                  </Link>.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Lower Monthly Payments</h3>
                <p className="text-muted-foreground">
                  Without a down payment and no PMI requirement, your monthly mortgage payment is significantly 
                  lower than conventional financing. Plus, competitive interest rates mean more of your payment 
                  goes toward building equity, not interest.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Easier Qualification</h3>
                <p className="text-muted-foreground">
                  VA loans are backed by the Department of Veterans Affairs, which allows lenders to offer more 
                  flexible credit requirements. Even if you've had credit challenges in the past, you may still qualify.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Use It Again and Again</h3>
                <p className="text-muted-foreground">
                  Your VA loan benefit doesn't expire and can be used multiple times. Whether it's your first home 
                  or you're ready to upgrade, your VA benefit is always available.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Who's Eligible for VA Loans?
          </h2>
          <Card className="p-8">
            <p className="text-muted-foreground mb-6">
              VA loans are available to:
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
              If you're unsure about your eligibility, our partner lenders can help you determine if you qualify 
              and guide you through obtaining your Certificate of Eligibility (COE). If you're also a first-time buyer, 
              check out our{" "}
              <Link to="/first-time-homebuyer-programs-west-michigan" className="text-primary hover:underline">
                first-time homebuyer programs guide
              </Link>{" "}
              for additional assistance options.
            </p>
          </Card>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Use Your VA Loan Benefit?
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with a local lender who specializes in VA loans and get pre-qualified today.
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

export default VALoans;
