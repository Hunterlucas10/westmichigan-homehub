import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Gift, DollarSign, FileText, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const DownPaymentGiftRules = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Down Payment Gift Rules: Can Family Help? | West Michigan Guide</title>
        <meta name="description" content="Learn about down payment gift rules for FHA, VA, USDA, and conventional loans in West Michigan. Understand who can gift funds and what documentation is required." />
        <link rel="canonical" href={`${SITE_URL}/blog/down-payment-gift-rules`} />
        <meta property="og:title" content="Down Payment Gift Rules: Can Family Help?" />
        <meta property="og:description" content="Learn about down payment gift rules for different loan types in West Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/down-payment-gift-rules`} />
      </Helmet>
      <ArticleSchema title="Down Payment Gift Rules: Can Family Help? | West Michigan Guide" description="Learn about down payment gift rules for FHA, VA, USDA, and conventional loans in West Michigan." url="/blog/down-payment-gift-rules" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Down Payment Gift Rules", url: "/blog/down-payment-gift-rules" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Down Payment Gift Rules: Can Family Help?</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn about gift fund rules for different loan types and what documentation you'll need.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">Many loan programs allow gift funds from family members to cover your down payment. However, rules vary by loan type.</p>
            <Card className="p-6 mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-3">FHA Loans</h3>
              <p className="text-muted-foreground mb-3">Gift funds are allowed from family members, employers, or charitable organizations. You'll need a gift letter stating the funds are a gift, not a loan.</p>
            </Card>
            <Card className="p-6 mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-3">Conventional Loans</h3>
              <p className="text-muted-foreground">Gift funds are typically allowed, but some programs may require you to contribute a portion from your own funds.</p>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Understand Gift Rules</h2>
            <p className="text-xl text-muted-foreground">Connect with a lender to learn about gift fund requirements for your loan type.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DownPaymentGiftRules;

