import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { MapPin, School, TrendingUp, TrendingDown, CheckCircle, ArrowLeft } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const EatonCounty = () => {
  const cities = [
    { name: "Charlotte", description: "County seat with historic downtown, excellent schools, and family-friendly atmosphere.", schools: "Charlotte Public Schools - excellent ratings" },
    { name: "Grand Ledge", description: "Charming community with top-rated schools and beautiful river views.", schools: "Grand Ledge Public Schools - top-rated district" },
    { name: "Eaton Rapids", description: "Small city with good schools, affordable housing, and community spirit.", schools: "Eaton Rapids Public Schools - good ratings" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Living in Eaton County, Michigan | Suburban Communities Guide</title>
        <meta name="description" content="Complete guide to living in Eaton County, Michigan. Learn about excellent schools, family-friendly communities, and affordable housing." />
        <link rel="canonical" href={`${SITE_URL}/west-michigan-living/eaton-county`} />
      </Helmet>
      <ArticleSchema title="Living in Eaton County, Michigan | Suburban Communities Guide" description="Complete guide to living in Eaton County, Michigan." url="/west-michigan-living/eaton-county" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "West Michigan Living", url: "/west-michigan-living" }, { name: "Eaton County", url: "/west-michigan-living/eaton-county" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/west-michigan-living" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" /> Back to Counties</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Living in Eaton County, Michigan</h1>
            <p className="text-xl text-muted-foreground">Suburban county with excellent schools, family-friendly communities, and affordable housing close to Lansing.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-600" /> Pros</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Excellent school districts</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Family-friendly communities</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Affordable housing</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Good location near Lansing</span></li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><TrendingDown className="w-5 h-5 text-orange-600" /> Cons</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Limited nightlife</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Suburban sprawl</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Dependent on Lansing area for some amenities</span></li>
              </ul>
            </Card>
          </div>
          <Card className="p-6 bg-muted mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Lifestyle: Moderate</h3>
            <p className="text-muted-foreground">Eaton County offers a moderate suburban lifestyle with excellent schools and family-friendly communities. Close enough to Lansing for amenities while maintaining its own identity.</p>
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Schools in Eaton County</h2>
          <Card className="p-6 mb-12">
            <p className="text-muted-foreground mb-4">Eaton County is known for excellent schools, with Grand Ledge and Charlotte consistently ranking among Michigan's top districts.</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Grand Ledge Public Schools - Top-rated district</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Charlotte Public Schools - Excellent ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Eaton Rapids Public Schools - Good ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Potterville Public Schools - Good ratings</span></li>
            </ul>
          </Card>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Buy a Home in Eaton County?</h2>
            <p className="text-xl text-muted-foreground">Connect with local lenders who know the Eaton County market.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EatonCounty;

