import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, DollarSign, TrendingUp, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const UnderstandingPMI = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Understanding PMI: Private Mortgage Insurance Explained | West Michigan</title>
        <meta name="description" content="Learn about Private Mortgage Insurance (PMI) in West Michigan. Understand when PMI is required, how much it costs, and how to remove it from your loan." />
        <link rel="canonical" href={`${SITE_URL}/blog/understanding-pmi`} />
        <meta property="og:title" content="Understanding PMI: Private Mortgage Insurance Explained" />
        <meta property="og:description" content="Learn about Private Mortgage Insurance (PMI) in West Michigan and how to remove it." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/understanding-pmi`} />
      </Helmet>
      <ArticleSchema title="Understanding PMI: Private Mortgage Insurance Explained | West Michigan" description="Learn about Private Mortgage Insurance (PMI) in West Michigan. Understand when PMI is required, how much it costs, and how to remove it." url="/blog/understanding-pmi" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Understanding PMI", url: "/blog/understanding-pmi" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Understanding PMI: Private Mortgage Insurance Explained</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn when PMI is required, how much it costs, and how to remove it from your loan.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">Private Mortgage Insurance (PMI) protects lenders when you put down less than 20% on a conventional loan. PMI typically costs 0.5-1.5% of your loan amount annually.</p>
            <Card className="p-6 bg-muted mb-12">
              <h3 className="text-xl font-bold text-foreground mb-3">How to Remove PMI</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Reach 20% equity through payments</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Home value increases (get a new appraisal)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Make additional principal payments</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Refinance when you have 20% equity</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Learn More About PMI</h2>
            <p className="text-xl text-muted-foreground">Connect with a lender to understand PMI for your specific loan.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UnderstandingPMI;

