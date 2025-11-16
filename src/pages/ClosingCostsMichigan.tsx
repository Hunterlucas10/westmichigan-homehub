import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, DollarSign, FileText, Calculator, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const ClosingCostsMichigan = () => {
  const costs = [
    { item: "Loan origination fee", typical: "0.5-1% of loan amount" },
    { item: "Appraisal", typical: "$300-$500" },
    { item: "Home inspection", typical: "$300-$500" },
    { item: "Title insurance", typical: "$500-$1,500" },
    { item: "Recording fees", typical: "$50-$200" },
    { item: "Prepaid property taxes", typical: "2-6 months" },
    { item: "Homeowner's insurance", typical: "1 year premium" },
    { item: "Escrow account funding", typical: "2 months" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Closing Costs in Michigan: What to Expect | West Michigan Guide</title>
        <meta name="description" content="Learn about typical closing costs in Michigan, including loan fees, inspections, and prepaid expenses. Understand what you'll pay when buying a home in West Michigan." />
        <link rel="canonical" href={`${SITE_URL}/blog/closing-costs-michigan`} />
        <meta property="og:title" content="Closing Costs in Michigan: What to Expect" />
        <meta property="og:description" content="Learn about typical closing costs in Michigan and what you'll pay when buying a home in West Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/closing-costs-michigan`} />
      </Helmet>
      <ArticleSchema title="Closing Costs in Michigan: What to Expect" description="Learn about typical closing costs in Michigan, including loan fees, inspections, and prepaid expenses." url="/blog/closing-costs-michigan" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Closing Costs Michigan", url: "/blog/closing-costs-michigan" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Closing Costs in Michigan: What to Expect</h1>
            <p className="text-xl text-muted-foreground mb-8">Understand typical closing costs when buying a home in West Michigan and how to prepare financially.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">Closing costs typically range from 2-5% of your home's purchase price in Michigan. Here's what to expect:</p>
            <Card className="p-6 mb-12">
              <div className="space-y-3">
                {costs.map((cost, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-3">
                    <span className="text-foreground font-medium">{cost.item}</span>
                    <span className="text-muted-foreground">{cost.typical}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get a Closing Cost Estimate</h2>
            <p className="text-xl text-muted-foreground">Connect with a local lender for a detailed breakdown.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ClosingCostsMichigan;

