import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingDown, DollarSign, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const RefinancingFirstHome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Refinancing Your First Home: When to Consider It | West Michigan</title>
        <meta name="description" content="Learn when to refinance your first home in West Michigan. Understand benefits, costs, and whether refinancing makes sense for your situation." />
        <link rel="canonical" href={`${SITE_URL}/blog/refinancing-first-home`} />
        <meta property="og:title" content="Refinancing Your First Home: When to Consider It" />
        <meta property="og:description" content="Learn when to refinance your first home in West Michigan and whether it makes sense for your situation." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/refinancing-first-home`} />
      </Helmet>
      <ArticleSchema title="Refinancing Your First Home: When to Consider It | West Michigan" description="Learn when to refinance your first home in West Michigan. Understand benefits, costs, and whether refinancing makes sense." url="/blog/refinancing-first-home" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Refinancing First Home", url: "/blog/refinancing-first-home" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Refinancing Your First Home: When to Consider It</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn when refinancing makes sense and whether it's right for your situation in West Michigan.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">Refinancing can help you lower your monthly payment, shorten your loan term, or access home equity. Consider refinancing if rates have dropped significantly or your credit has improved.</p>
            <Card className="p-6 bg-muted mb-12">
              <h3 className="text-xl font-bold text-foreground mb-3">When to Refinance</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Interest rates have dropped 1% or more</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Your credit score has improved significantly</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">You want to remove PMI</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">You need to access home equity</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Explore Refinancing Options</h2>
            <p className="text-xl text-muted-foreground">Connect with a lender to see if refinancing makes sense for you.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RefinancingFirstHome;

