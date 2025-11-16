import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, GraduationCap, BookOpen, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const HomebuyerEducationMichigan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Homebuyer Education Courses in Michigan | Required & Free Options</title>
        <meta name="description" content="Learn about homebuyer education courses required for MSHDA and other programs in Michigan. Find free and affordable education options in West Michigan." />
        <link rel="canonical" href={`${SITE_URL}/blog/homebuyer-education-michigan`} />
        <meta property="og:title" content="Homebuyer Education Courses in Michigan" />
        <meta property="og:description" content="Learn about homebuyer education courses required for MSHDA and other programs in Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/homebuyer-education-michigan`} />
      </Helmet>
      <ArticleSchema title="Homebuyer Education Courses in Michigan | Required & Free Options" description="Learn about homebuyer education courses required for MSHDA and other programs in Michigan." url="/blog/homebuyer-education-michigan" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Homebuyer Education Michigan", url: "/blog/homebuyer-education-michigan" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Homebuyer Education Courses in Michigan</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn about required courses and find free education options in West Michigan.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">Many Michigan programs require homebuyer education courses. These courses are often available online or in-person and cover topics like budgeting, credit, the homebuying process, and home maintenance.</p>
            <Card className="p-6 bg-muted mb-12">
              <h3 className="text-xl font-bold text-foreground mb-3">What You'll Learn</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">How to budget and manage finances as a homeowner</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Understanding credit and how to improve it</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">The complete homebuying process</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Home maintenance and ownership responsibilities</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Education Resources</h2>
            <p className="text-xl text-muted-foreground">Connect with lenders who can direct you to certified courses.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomebuyerEducationMichigan;

