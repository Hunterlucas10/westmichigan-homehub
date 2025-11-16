import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Shield, DollarSign, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const CreditScoreRequirementsByLoanType = () => {
  const loanTypes = [
    { type: "FHA Loans", score: "500-579 (10% down) or 580+ (3.5% down)", icon: Shield },
    { type: "VA Loans", score: "No minimum (lender-dependent, typically 620+)", icon: DollarSign },
    { type: "USDA Loans", score: "640+ typically", icon: TrendingUp },
    { type: "Conventional 97", score: "620+ typically", icon: TrendingUp },
    { type: "MSHDA MI Home Loan", score: "640+ (660 for manufactured homes)", icon: DollarSign }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Credit Score Requirements by Loan Type | West Michigan Guide</title>
        <meta name="description" content="Understand credit score requirements for FHA, VA, USDA, conventional, and MSHDA loans in West Michigan. Learn which loan type fits your credit profile." />
        <link rel="canonical" href={`${SITE_URL}/blog/credit-score-requirements-by-loan-type`} />
        <meta property="og:title" content="Credit Score Requirements by Loan Type" />
        <meta property="og:description" content="Understand credit score requirements for different loan types in West Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/credit-score-requirements-by-loan-type`} />
      </Helmet>
      <ArticleSchema title="Credit Score Requirements by Loan Type | West Michigan Guide" description="Understand credit score requirements for different loan types in West Michigan." url="/blog/credit-score-requirements-by-loan-type" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Credit Score Requirements", url: "/blog/credit-score-requirements-by-loan-type" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Credit Score Requirements by Loan Type</h1>
            <p className="text-xl text-muted-foreground mb-8">Understand which loan type fits your credit profile in West Michigan.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-4 mb-12">
              {loanTypes.map((loan, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <loan.icon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{loan.type}</h3>
                      <p className="text-accent font-semibold">Credit Score: {loan.score}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Your Best Loan Option</h2>
            <p className="text-xl text-muted-foreground">Connect with a lender to see which programs you qualify for.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CreditScoreRequirementsByLoanType;

