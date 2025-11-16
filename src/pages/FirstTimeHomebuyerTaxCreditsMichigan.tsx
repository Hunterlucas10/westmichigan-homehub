import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, DollarSign, FileText, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const FirstTimeHomebuyerTaxCreditsMichigan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>First-Time Homebuyer Tax Credits in Michigan | Deductions & Benefits</title>
        <meta name="description" content="Learn about first-time homebuyer tax credits, deductions, and benefits available in Michigan. Understand how homeownership can reduce your tax burden." />
        <link rel="canonical" href={`${SITE_URL}/blog/first-time-homebuyer-tax-credits-michigan`} />
        <meta property="og:title" content="First-Time Homebuyer Tax Credits in Michigan" />
        <meta property="og:description" content="Learn about first-time homebuyer tax credits, deductions, and benefits available in Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/first-time-homebuyer-tax-credits-michigan`} />
      </Helmet>
      <ArticleSchema title="First-Time Homebuyer Tax Credits in Michigan | Deductions & Benefits" description="Learn about first-time homebuyer tax credits, deductions, and benefits available in Michigan." url="/blog/first-time-homebuyer-tax-credits-michigan" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Tax Credits Michigan", url: "/blog/first-time-homebuyer-tax-credits-michigan" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">First-Time Homebuyer Tax Credits in Michigan</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn about tax deductions and benefits available to first-time homebuyers.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">Homeownership comes with several tax benefits. While federal first-time buyer tax credits are no longer available, you can still benefit from mortgage interest deductions and property tax deductions.</p>
            <Card className="p-6 bg-muted mb-12">
              <h3 className="text-xl font-bold text-foreground mb-3">Tax Benefits of Homeownership</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Mortgage interest deduction (itemized deduction)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Property tax deduction</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">PMI deduction (if applicable)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Capital gains exclusion when selling (up to $250k/$500k for married couples)</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Consult with a Tax Professional</h2>
            <p className="text-xl text-muted-foreground">Tax laws change frequently. Consult with a tax advisor for current information.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FirstTimeHomebuyerTaxCreditsMichigan;

