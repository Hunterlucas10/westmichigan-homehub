import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { MapPin, School, TrendingUp, TrendingDown, CheckCircle, ArrowLeft } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const AlleganCounty = () => {
  const cities = [
    { name: "Allegan", description: "County seat with historic downtown, good schools, and affordable housing.", schools: "Allegan Public Schools - good ratings" },
    { name: "Plainwell", description: "Small town with strong community, good schools, and access to nature.", schools: "Plainwell Community Schools - good ratings" },
    { name: "Otsego", description: "Family-friendly community with good schools and affordable living.", schools: "Otsego Public Schools - good ratings" },
    { name: "Wayland", description: "Rural community with excellent schools and peaceful living.", schools: "Wayland Union Schools - excellent ratings" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Living in Allegan County, Michigan | Rural Communities Guide</title>
        <meta name="description" content="Complete guide to living in Allegan County, Michigan. Learn about affordable housing, rural charm, and small-town living." />
        <link rel="canonical" href={`${SITE_URL}/west-michigan-living/allegan-county`} />
      </Helmet>
      <ArticleSchema title="Living in Allegan County, Michigan | Rural Communities Guide" description="Complete guide to living in Allegan County, Michigan." url="/west-michigan-living/allegan-county" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "West Michigan Living", url: "/west-michigan-living" }, { name: "Allegan County", url: "/west-michigan-living/allegan-county" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/west-michigan-living" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" /> Back to Counties</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Living in Allegan County, Michigan</h1>
            <p className="text-xl text-muted-foreground">Mix of rural charm and small-town living with affordable housing and close-knit communities.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-600" /> Pros</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Very affordable housing</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Rural charm and natural beauty</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Close-knit communities</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Good schools</span></li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><TrendingDown className="w-5 h-5 text-orange-600" /> Cons</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Limited amenities and services</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Fewer job opportunities</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Longer commutes to major cities</span></li>
              </ul>
            </Card>
          </div>
          <Card className="p-6 bg-muted mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Lifestyle: Relaxed</h3>
            <p className="text-muted-foreground">Allegan County offers a relaxed, rural lifestyle perfect for those seeking peace and quiet. Communities are small and friendly with strong traditional values.</p>
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Schools in Allegan County</h2>
          <Card className="p-6 mb-12">
            <p className="text-muted-foreground mb-4">Allegan County has good public schools with Wayland Union consistently ranking well. Smaller districts offer personalized education.</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Wayland Union Schools - Excellent ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Plainwell Community Schools - Good ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Otsego Public Schools - Good ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Allegan Public Schools - Good ratings</span></li>
            </ul>
          </Card>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Buy a Home in Allegan County?</h2>
            <p className="text-xl text-muted-foreground">Connect with local lenders who know the Allegan County market.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AlleganCounty;

