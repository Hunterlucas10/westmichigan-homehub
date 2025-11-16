import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { MapPin, School, Home, TrendingUp, TrendingDown, CheckCircle, ArrowLeft } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const KentCounty = () => {
  const cities = [
    {
      name: "Grand Rapids",
      description: "Michigan's second-largest city, known for its vibrant downtown, craft beer scene, and cultural attractions.",
      schools: "Excellent public and private schools, including Forest Hills, East Grand Rapids, and Grand Rapids Public Schools"
    },
    {
      name: "East Grand Rapids",
      description: "Affluent suburb with top-rated schools and beautiful homes, consistently ranked among Michigan's best places to live.",
      schools: "East Grand Rapids Public Schools - consistently top-rated in the state"
    },
    {
      name: "Forest Hills",
      description: "Family-friendly community with excellent schools and safe neighborhoods, popular with professionals and families.",
      schools: "Forest Hills Public Schools - highly rated district"
    },
    {
      name: "Wyoming",
      description: "Diverse suburban city with affordable housing and good schools, convenient location near Grand Rapids.",
      schools: "Wyoming Public Schools - good ratings, improving district"
    },
    {
      name: "Kentwood",
      description: "Growing suburban community with diverse population, affordable housing, and access to amenities.",
      schools: "Kentwood Public Schools - diverse and improving district"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Living in Kent County, Michigan | Cities, Schools & Lifestyle Guide</title>
        <meta name="description" content="Complete guide to living in Kent County, Michigan. Learn about Grand Rapids, East Grand Rapids, Forest Hills, schools, housing, and what makes Kent County a great place to live." />
        <link rel="canonical" href={`${SITE_URL}/west-michigan-living/kent-county`} />
        <meta property="og:title" content="Living in Kent County, Michigan | Cities, Schools & Lifestyle Guide" />
        <meta property="og:description" content="Complete guide to living in Kent County, Michigan. Learn about cities, schools, and lifestyle." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/west-michigan-living/kent-county`} />
      </Helmet>
      <ArticleSchema title="Living in Kent County, Michigan | Cities, Schools & Lifestyle Guide" description="Complete guide to living in Kent County, Michigan. Learn about cities, schools, and lifestyle." url="/west-michigan-living/kent-county" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "West Michigan Living", url: "/west-michigan-living" }, { name: "Kent County", url: "/west-michigan-living/kent-county" }]} />
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/west-michigan-living" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Counties
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Living in Kent County, Michigan</h1>
            <p className="text-xl text-muted-foreground">Home to Grand Rapids, Michigan's second-largest city, Kent County offers vibrant urban living with excellent schools and diverse neighborhoods.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" /> Pros
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Major city amenities and entertainment</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Excellent public and private schools</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Strong job market with diverse industries</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Diverse housing options from urban to suburban</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Vibrant arts and culture scene</span></li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-orange-600" /> Cons
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Higher cost of living than rural areas</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">More traffic and congestion</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Urban density may not suit everyone</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-foreground">Property taxes can be higher</span></li>
              </ul>
            </Card>
          </div>

          <Card className="p-6 bg-muted mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Lifestyle: Bustling</h3>
            <p className="text-muted-foreground">
              Kent County offers a bustling, urban lifestyle with all the amenities of a major city. Grand Rapids provides 
              excellent dining, entertainment, and cultural opportunities, while surrounding suburbs offer quieter family-friendly 
              environments. The county has a strong economy with diverse job opportunities in healthcare, manufacturing, and technology.
            </p>
          </Card>

          <h2 className="text-3xl font-bold text-foreground mb-8">Best Cities & Towns in Kent County</h2>
          <div className="space-y-6 mb-12">
            {cities.map((city, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-secondary" /> {city.name}
                </h3>
                <p className="text-muted-foreground mb-4">{city.description}</p>
                <div className="flex items-start gap-2">
                  <School className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground"><strong>Schools:</strong> {city.schools}</p>
                </div>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-6">Schools in Kent County</h2>
          <Card className="p-6 mb-12">
            <p className="text-muted-foreground mb-4">
              Kent County is home to some of Michigan's top-rated school districts. East Grand Rapids and Forest Hills 
              consistently rank among the best in the state. The county offers excellent public schools, numerous private 
              school options, and several charter schools. Grand Rapids Public Schools serves the city with diverse programs 
              and magnet schools.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">East Grand Rapids Public Schools - Top-rated district</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Forest Hills Public Schools - Highly rated, large district</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Rockford Public Schools - Excellent ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Northview Public Schools - Good ratings</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground">Multiple private and charter school options</span></li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Buy a Home in Kent County?</h2>
            <p className="text-xl text-muted-foreground">Connect with local lenders who know the Kent County market.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KentCounty;

