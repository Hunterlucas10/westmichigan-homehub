import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, FileCheck, TrendingUp, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const PreApprovalVsPreQualification = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Pre-approval vs Pre-qualification: What's the Difference? | West Michigan</title>
        <meta name="description" content="Understand the difference between pre-approval and pre-qualification for mortgages in West Michigan. Learn which one you need and when to get it." />
        <link rel="canonical" href={`${SITE_URL}/blog/pre-approval-vs-pre-qualification`} />
        <meta property="og:title" content="Pre-approval vs Pre-qualification: What's the Difference?" />
        <meta property="og:description" content="Understand the difference between pre-approval and pre-qualification for mortgages in West Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/pre-approval-vs-pre-qualification`} />
      </Helmet>
      <ArticleSchema title="Pre-approval vs Pre-qualification: What's the Difference?" description="Understand the difference between pre-approval and pre-qualification for mortgages in West Michigan." url="/blog/pre-approval-vs-pre-qualification" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Pre-approval vs Pre-qualification", url: "/blog/pre-approval-vs-pre-qualification" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Pre-approval vs Pre-qualification: What's the Difference?</h1>
            <p className="text-xl text-muted-foreground mb-8">Understand which one you need and when to get it when buying a home in West Michigan.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <Card className="p-6 mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-3">Pre-qualification</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Quick estimate based on self-reported information</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">No credit check required</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Takes 15-30 minutes</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Good for initial planning</span></li>
              </ul>
            </Card>
            <Card className="p-6 mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-3">Pre-approval</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Detailed review of your finances and credit</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Requires documentation and credit check</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Takes 1-3 days</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Shows sellers you're serious</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Pre-approved Today</h2>
            <p className="text-xl text-muted-foreground">Connect with a local lender to get pre-approved.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PreApprovalVsPreQualification;

