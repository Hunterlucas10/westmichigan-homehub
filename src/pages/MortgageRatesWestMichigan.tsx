import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, DollarSign, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const MortgageRatesWestMichigan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Mortgage Rates in West Michigan: Current Trends & How to Get the Best Rate</title>
        <meta name="description" content="Learn about current mortgage rate trends in West Michigan and how to secure the best rate for your home loan. Understand factors that affect rates and when to lock in." />
        <link rel="canonical" href={`${SITE_URL}/blog/mortgage-rates-west-michigan`} />
        <meta property="og:title" content="Mortgage Rates in West Michigan: Current Trends" />
        <meta property="og:description" content="Learn about current mortgage rate trends in West Michigan and how to secure the best rate." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/mortgage-rates-west-michigan`} />
      </Helmet>
      <ArticleSchema title="Mortgage Rates in West Michigan: Current Trends & How to Get the Best Rate" description="Learn about current mortgage rate trends in West Michigan and how to secure the best rate for your home loan." url="/blog/mortgage-rates-west-michigan" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Mortgage Rates West Michigan", url: "/blog/mortgage-rates-west-michigan" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Mortgage Rates in West Michigan: Current Trends</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn about current mortgage rate trends and how to secure the best rate for your home loan.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">Mortgage rates in West Michigan fluctuate based on national trends, but local lenders can offer competitive rates. Factors affecting your rate include credit score, down payment, loan type, and current market conditions.</p>
            <Card className="p-6 bg-muted mb-12">
              <h3 className="text-xl font-bold text-foreground mb-3">Tips to Get the Best Rate</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Improve your credit score before applying</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Shop around with multiple lenders</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Consider buying points to lower your rate</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Lock in your rate when you find a good one</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Compare Rates Today</h2>
            <p className="text-xl text-muted-foreground">Connect with local lenders to get current rate quotes.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MortgageRatesWestMichigan;

