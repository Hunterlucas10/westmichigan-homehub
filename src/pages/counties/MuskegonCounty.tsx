import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { MapPin, School, TrendingUp, TrendingDown, CheckCircle, ArrowLeft } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const MuskegonCounty = () => {
  const cities = [
    { name: "Muskegon", description: "Lakeshore city with affordable housing, growing economy, and access to Lake Michigan beaches.", schools: "Muskegon Public Schools - improving district with good programs" },
    { name: "Norton Shores", description: "Suburban community with good schools, safe neighborhoods, and beach access.", schools: "Mona Shores Public Schools - excellent ratings" },
    { name: "Muskegon Heights", description: "Affordable community with improving schools and strong community spirit.", schools: "Muskegon Heights Public Schools - improving district" },
    { name: "North Muskegon", description: "Small lakeshore community with excellent schools and beautiful homes.", schools: "North Muskegon Public Schools - top-rated district" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Living in Muskegon County, Michigan | Lakeshore Communities Guide</title>
        <meta name="description" content="Complete guide to living in Muskegon County, Michigan. Learn about affordable housing, beaches, and growing communities." />
        <link rel="canonical" href={`${SITE_URL}/west-michigan-living/muskegon-county`} />
      </Helmet>
      <ArticleSchema title="Living in Muskegon County, Michigan | Lakeshore Communities Guide" description="Complete guide to living in Muskegon County, Michigan." url="/west-michigan-living/muskegon-county" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "West Michigan Living", url: "/west-michigan-living" }, { name: "Muskegon County", url: "/west-michigan-living/muskegon-county" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/west-michigan-living" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" /> Back to Counties</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Living in Muskegon County, Michigan</h1>
            <p className="text-xl text-muted-foreground">Lakeshore county with affordable housing, growing economy, and access to beautiful Lake Michigan beaches.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-600" /> Pros</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Affordable housing options</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Lake Michigan beach access</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Growing economy</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Diverse communities</span></li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><TrendingDown className="w-5 h-5 text-orange-600" /> Cons</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Some areas need revitalization</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Limited public transit</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Seasonal economy in some areas</span></li>
              </ul>
            </Card>
          </div>
          <Card className="p-6 bg-muted mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Lifestyle: Moderate</h3>
            <p className="text-muted-foreground">Muskegon County offers a moderate lifestyle with urban amenities in Muskegon city and suburban/rural options in surrounding areas. The county is experiencing growth and revitalization.</p>
          </Card>
          <h2 className="text-3xl font-bold text-foreground mb-8">Best Cities & Towns</h2>
          <div className="space-y-6 mb-12">
            {cities.map((city, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2"><MapPin className="w-6 h-6 text-secondary" /> {city.name}</h3>
                <p className="text-muted-foreground mb-4">{city.description}</p>
                <div className="flex items-start gap-2"><School className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><p className="text-foreground"><strong>Schools:</strong> {city.schools}</p></div>
              </Card>
            ))}
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Schools in Muskegon County</h2>
          <Card className="p-6 mb-12">
            <p className="text-muted-foreground mb-4">Muskegon County has a mix of school districts. Mona Shores and North Muskegon are top-rated, while Muskegon Public Schools is improving.</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Mona Shores Public Schools - Excellent ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">North Muskegon Public Schools - Top-rated</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Reeths-Puffer Schools - Good ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Muskegon Public Schools - Improving district</span></li>
            </ul>
          </Card>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Buy a Home in Muskegon County?</h2>
            <p className="text-xl text-muted-foreground">Connect with local lenders who know the Muskegon County market.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MuskegonCounty;

