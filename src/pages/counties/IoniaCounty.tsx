import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { MapPin, School, TrendingUp, TrendingDown, CheckCircle, ArrowLeft } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const IoniaCounty = () => {
  const cities = [
    { name: "Ionia", description: "County seat with historic downtown, very affordable housing, and strong community values.", schools: "Ionia Public Schools - good ratings" },
    { name: "Belding", description: "Small community with affordable living and close-knit atmosphere.", schools: "Belding Area Schools - good ratings" },
    { name: "Portland", description: "Rural community with good schools and peaceful living.", schools: "Portland Public Schools - excellent ratings" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Living in Ionia County, Michigan | Rural Communities Guide</title>
        <meta name="description" content="Complete guide to living in Ionia County, Michigan. Learn about very affordable housing, rural charm, and strong communities." />
        <link rel="canonical" href={`${SITE_URL}/west-michigan-living/ionia-county`} />
      </Helmet>
      <ArticleSchema title="Living in Ionia County, Michigan | Rural Communities Guide" description="Complete guide to living in Ionia County, Michigan." url="/west-michigan-living/ionia-county" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "West Michigan Living", url: "/west-michigan-living" }, { name: "Ionia County", url: "/west-michigan-living/ionia-county" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/west-michigan-living" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" /> Back to Counties</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Living in Ionia County, Michigan</h1>
            <p className="text-xl text-muted-foreground">Rural county with small towns, agricultural roots, very affordable housing, and strong sense of community.</p>
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
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Strong community values</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Safe neighborhoods</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Rural charm</span></li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><TrendingDown className="w-5 h-5 text-orange-600" /> Cons</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Limited amenities</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Fewer services</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Longer commutes</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Limited diversity</span></li>
              </ul>
            </Card>
          </div>
          <Card className="p-6 bg-muted mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Lifestyle: Relaxed</h3>
            <p className="text-muted-foreground">Ionia County offers a very relaxed, rural lifestyle with strong traditional values. Perfect for those seeking peace, quiet, and a close-knit community atmosphere.</p>
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Schools in Ionia County</h2>
          <Card className="p-6 mb-12">
            <p className="text-muted-foreground mb-4">Ionia County has good public schools with smaller districts offering personalized education. Portland Public Schools consistently ranks well.</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Portland Public Schools - Excellent ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Ionia Public Schools - Good ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Belding Area Schools - Good ratings</span></li>
            </ul>
          </Card>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Buy a Home in Ionia County?</h2>
            <p className="text-xl text-muted-foreground">Connect with local lenders who know the Ionia County market.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default IoniaCounty;

