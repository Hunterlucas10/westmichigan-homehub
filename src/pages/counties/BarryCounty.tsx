import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { MapPin, School, TrendingUp, TrendingDown, CheckCircle, ArrowLeft } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const BarryCounty = () => {
  const cities = [
    { name: "Hastings", description: "County seat with historic downtown, good schools, and affordable housing.", schools: "Hastings Area Schools - good ratings" },
    { name: "Middleville", description: "Small community with good schools and rural charm.", schools: "Thornapple Kellogg Schools - excellent ratings" },
    { name: "Delton", description: "Rural community near lakes with affordable living.", schools: "Delton Kellogg Schools - good ratings" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Living in Barry County, Michigan | Rural Communities & Lakes Guide</title>
        <meta name="description" content="Complete guide to living in Barry County, Michigan. Learn about rural living, lakes, and outdoor recreation." />
        <link rel="canonical" href={`${SITE_URL}/west-michigan-living/barry-county`} />
      </Helmet>
      <ArticleSchema title="Living in Barry County, Michigan | Rural Communities & Lakes Guide" description="Complete guide to living in Barry County, Michigan." url="/west-michigan-living/barry-county" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "West Michigan Living", url: "/west-michigan-living" }, { name: "Barry County", url: "/west-michigan-living/barry-county" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/west-michigan-living" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" /> Back to Counties</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Living in Barry County, Michigan</h1>
            <p className="text-xl text-muted-foreground">Rural county known for natural beauty, lakes, outdoor recreation, and small towns with strong community values.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-600" /> Pros</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Affordable housing</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Natural beauty and lakes</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Outdoor recreation</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Strong community values</span></li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><TrendingDown className="w-5 h-5 text-orange-600" /> Cons</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Limited amenities</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Fewer job opportunities</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Rural isolation</span></li>
              </ul>
            </Card>
          </div>
          <Card className="p-6 bg-muted mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Lifestyle: Relaxed</h3>
            <p className="text-muted-foreground">Barry County offers a very relaxed, rural lifestyle with emphasis on outdoor recreation and community. Perfect for those seeking peace, nature, and traditional values.</p>
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Schools in Barry County</h2>
          <Card className="p-6 mb-12">
            <p className="text-muted-foreground mb-4">Barry County has good public schools with smaller districts offering personalized education.</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Thornapple Kellogg Schools - Excellent ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Hastings Area Schools - Good ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Delton Kellogg Schools - Good ratings</span></li>
            </ul>
          </Card>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Buy a Home in Barry County?</h2>
            <p className="text-xl text-muted-foreground">Connect with local lenders who know the Barry County market.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BarryCounty;

