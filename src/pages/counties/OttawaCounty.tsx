import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { MapPin, School, TrendingUp, TrendingDown, CheckCircle, ArrowLeft } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const OttawaCounty = () => {
  const cities = [
    { name: "Holland", description: "Charming lakeshore city with Dutch heritage, beautiful beaches, and excellent schools.", schools: "Holland Public Schools, West Ottawa Public Schools - both highly rated" },
    { name: "Grand Haven", description: "Popular beach town with vibrant downtown, excellent schools, and strong community.", schools: "Grand Haven Area Public Schools - top-rated district" },
    { name: "Zeeland", description: "Family-friendly community with strong schools and safe neighborhoods.", schools: "Zeeland Public Schools - excellent ratings" },
    { name: "Hudsonville", description: "Growing suburban community with good schools and convenient location.", schools: "Hudsonville Public Schools - good ratings" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Living in Ottawa County, Michigan | Lakeshore Communities Guide</title>
        <meta name="description" content="Complete guide to living in Ottawa County, Michigan. Learn about Holland, Grand Haven, Zeeland, schools, beaches, and what makes Ottawa County special." />
        <link rel="canonical" href={`${SITE_URL}/west-michigan-living/ottawa-county`} />
      </Helmet>
      <ArticleSchema title="Living in Ottawa County, Michigan | Lakeshore Communities Guide" description="Complete guide to living in Ottawa County, Michigan." url="/west-michigan-living/ottawa-county" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "West Michigan Living", url: "/west-michigan-living" }, { name: "Ottawa County", url: "/west-michigan-living/ottawa-county" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/west-michigan-living" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" /> Back to Counties</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Living in Ottawa County, Michigan</h1>
            <p className="text-xl text-muted-foreground">Beautiful lakeshore communities with pristine beaches, excellent schools, and family-friendly atmosphere.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-600" /> Pros</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Pristine Lake Michigan beaches</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Top-rated school districts</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Safe, family-friendly communities</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Strong sense of community</span></li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><TrendingDown className="w-5 h-5 text-orange-600" /> Cons</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Higher home prices near beaches</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Tourist traffic in summer</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Limited public transit</span></li>
              </ul>
            </Card>
          </div>
          <Card className="p-6 bg-muted mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Lifestyle: Relaxed to Moderate</h3>
            <p className="text-muted-foreground">Ottawa County offers a relaxed lakeshore lifestyle with moderate activity. Communities are family-oriented with excellent schools and safe neighborhoods. The area balances natural beauty with good amenities.</p>
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Schools in Ottawa County</h2>
          <Card className="p-6 mb-12">
            <p className="text-muted-foreground mb-4">Ottawa County is known for excellent schools. Grand Haven, Zeeland, and West Ottawa consistently rank among Michigan's top districts.</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Grand Haven Area Public Schools - Top-rated</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Zeeland Public Schools - Excellent ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">West Ottawa Public Schools - Highly rated</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Hudsonville Public Schools - Good ratings</span></li>
            </ul>
          </Card>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Buy a Home in Ottawa County?</h2>
            <p className="text-xl text-muted-foreground">Connect with local lenders who know the Ottawa County market.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OttawaCounty;

