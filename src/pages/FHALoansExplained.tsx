import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, DollarSign, TrendingUp, FileText, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const FHALoansExplained = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Low Down Payment",
      description: "Only 3.5% down payment required with a credit score of 580 or higher. Even with a score of 500-579, you can qualify with 10% down."
    },
    {
      icon: Shield,
      title: "Flexible Credit Requirements",
      description: "FHA loans accept credit scores as low as 500, making them accessible to many buyers who might not qualify for conventional loans."
    },
    {
      icon: TrendingUp,
      title: "Gift Funds Allowed",
      description: "Your down payment can come from family members, employers, or charitable organizations—making it easier to gather the funds you need."
    },
    {
      icon: FileText,
      title: "Government Backing",
      description: "FHA loans are backed by the Federal Housing Administration, which allows lenders to offer more flexible terms."
    }
  ];

  const comparison = [
    {
      feature: "Down Payment",
      fha: "3.5% (580+ credit) or 10% (500-579)",
      conventional: "3-20% depending on loan type"
    },
    {
      feature: "Credit Score Minimum",
      fha: "500 (with 10% down)",
      conventional: "620+ typically"
    },
    {
      feature: "Mortgage Insurance",
      fha: "Required for loan term",
      conventional: "Can be removed at 20% equity"
    },
    {
      feature: "Property Standards",
      fha: "Stricter requirements",
      conventional: "More flexible"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>FHA Loans Explained: Is 3.5% Down Right for You? | West Michigan Guide</title>
        <meta 
          name="description" 
          content="Everything you need to know about FHA loans in West Michigan. Learn about benefits, requirements, 3.5% down payment, and how FHA loans compare to conventional mortgages." 
        />
        <link rel="canonical" href={`${SITE_URL}/blog/fha-loans-explained`} />
        <meta property="og:title" content="FHA Loans Explained: Is 3.5% Down Right for You? | West Michigan Guide" />
        <meta property="og:description" content="Everything you need to know about FHA loans in West Michigan. Learn about benefits, requirements, and how they compare to conventional mortgages." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/fha-loans-explained`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-fha-loans.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FHA Loans Explained: Is 3.5% Down Right for You?" />
        <meta name="twitter:description" content="Everything you need to know about FHA loans in West Michigan." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-fha-loans.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="FHA Loans Explained: Is 3.5% Down Right for You? | West Michigan Guide"
        description="Everything you need to know about FHA loans in West Michigan. Learn about benefits, requirements, 3.5% down payment, and how FHA loans compare to conventional mortgages."
        url="/blog/fha-loans-explained"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Learning Center", url: "/learning-center" },
        { name: "FHA Loans Explained", url: "/blog/fha-loans-explained" }
      ]} />
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              FHA Loans Explained: Is 3.5% Down Right for You?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about FHA loans, including benefits, requirements, and how they compare to conventional mortgages.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              FHA (Federal Housing Administration) loans are one of the most popular mortgage options for first-time homebuyers 
              in West Michigan. With a down payment as low as 3.5% and flexible credit requirements, FHA loans make homeownership 
              accessible to many buyers who might not qualify for conventional financing.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Key Benefits of FHA Loans
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
              FHA vs Conventional Loans
            </h2>

            <Card className="p-6 mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold text-foreground">Feature</th>
                      <th className="text-left p-3 font-bold text-foreground">FHA Loan</th>
                      <th className="text-left p-3 font-bold text-foreground">Conventional</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3 font-semibold text-foreground">{row.feature}</td>
                        <td className="p-3 text-muted-foreground">{row.fha}</td>
                        <td className="p-3 text-muted-foreground">{row.conventional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Is an FHA Loan Right for You?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              FHA loans are ideal if you have a credit score between 500-679, need a low down payment, or have limited savings. 
              However, keep in mind that FHA loans require mortgage insurance for the life of the loan if you put down less than 10%.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Pre-Qualified for an FHA Loan</h2>
            <p className="text-xl text-muted-foreground">Connect with a local lender who specializes in FHA loans.</p>
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

export default FHALoansExplained;

