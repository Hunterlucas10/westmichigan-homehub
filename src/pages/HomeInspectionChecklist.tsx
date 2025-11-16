import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home, Wrench, Zap, Droplets, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const HomeInspectionChecklist = () => {
  const checklistItems = [
    { category: "Structural", items: ["Foundation", "Walls", "Roof", "Floors"] },
    { category: "Electrical", items: ["Wiring", "Outlets", "Circuit breaker", "GFCI outlets"] },
    { category: "Plumbing", items: ["Pipes", "Water pressure", "Hot water heater", "Drains"] },
    { category: "HVAC", items: ["Heating system", "Cooling system", "Ductwork", "Thermostat"] }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Home Inspection Checklist for First-Time Buyers | West Michigan</title>
        <meta name="description" content="Complete home inspection checklist for first-time buyers in West Michigan. Learn what inspectors check and how to use inspection results in negotiations." />
        <link rel="canonical" href={`${SITE_URL}/blog/home-inspection-checklist`} />
        <meta property="og:title" content="Home Inspection Checklist for First-Time Buyers" />
        <meta property="og:description" content="Complete home inspection checklist for first-time buyers in West Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/home-inspection-checklist`} />
      </Helmet>
      <ArticleSchema title="Home Inspection Checklist for First-Time Buyers | West Michigan" description="Complete home inspection checklist for first-time buyers in West Michigan." url="/blog/home-inspection-checklist" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Home Inspection Checklist", url: "/blog/home-inspection-checklist" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Home Inspection Checklist for First-Time Buyers</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn what inspectors check and how to use inspection results in negotiations.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">A home inspection is a critical step in the homebuying process. Here's what inspectors typically check:</p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {checklistItems.map((category, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Pre-approved</h2>
            <p className="text-xl text-muted-foreground">Connect with local lenders who can recommend qualified inspectors.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomeInspectionChecklist;

