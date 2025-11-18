import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const WestMichiganLiving = () => {
  const counties = [
    {
      name: "Kent County",
      slug: "kent-county",
      description: "Home to Grand Rapids, Michigan's second-largest city. A vibrant urban center with excellent schools, diverse neighborhoods, and a thriving economy.",
      pros: ["Major city amenities", "Excellent schools", "Strong job market", "Diverse housing options"],
      cons: ["Higher cost of living", "More traffic", "Urban density"],
      lifestyle: "Bustling"
    },
    {
      name: "Ottawa County",
      slug: "ottawa-county",
      description: "Beautiful lakeshore communities including Holland, Grand Haven, and Zeeland. Known for pristine beaches, excellent schools, and family-friendly atmosphere.",
      pros: ["Beach access", "Top-rated schools", "Safe communities", "Family-oriented"],
      cons: ["Higher home prices", "Tourist traffic in summer", "Limited public transit"],
      lifestyle: "Relaxed to Moderate"
    },
    {
      name: "Allegan County",
      slug: "allegan-county",
      description: "Mix of rural charm and small-town living. Affordable housing, agricultural roots, and close-knit communities perfect for those seeking a quieter pace.",
      pros: ["Affordable housing", "Rural charm", "Close-knit communities", "Natural beauty"],
      cons: ["Limited amenities", "Fewer job opportunities", "Longer commutes"],
      lifestyle: "Relaxed"
    },
    {
      name: "Muskegon County",
      slug: "muskegon-county",
      description: "Lakeshore county with affordable housing and growing economy. Muskegon city offers urban amenities while surrounding areas provide suburban and rural options.",
      pros: ["Affordable housing", "Beach access", "Growing economy", "Diverse communities"],
      cons: ["Some areas need revitalization", "Limited public transit", "Seasonal economy"],
      lifestyle: "Moderate"
    },
    {
      name: "Van Buren County",
      slug: "van-buren-county",
      description: "Rural county with small towns and agricultural heritage. Very affordable with a relaxed pace of life, perfect for those seeking peace and quiet.",
      pros: ["Very affordable", "Peaceful living", "Natural beauty", "Low crime"],
      cons: ["Limited amenities", "Fewer services", "Longer drives to cities"],
      lifestyle: "Relaxed"
    },
    {
      name: "Barry County",
      slug: "barry-county",
      description: "Rural county known for its natural beauty, lakes, and outdoor recreation. Small towns with strong community values and affordable living.",
      pros: ["Affordable housing", "Natural beauty", "Outdoor recreation", "Strong community"],
      cons: ["Limited amenities", "Fewer job opportunities", "Rural isolation"],
      lifestyle: "Relaxed"
    },
    {
      name: "Calhoun County",
      slug: "calhoun-county",
      description: "Home to Battle Creek, a mid-sized city with affordable housing and good schools. Mix of urban and suburban living with access to nature.",
      pros: ["Affordable housing", "Good schools", "Mid-sized city amenities", "Access to nature"],
      cons: ["Limited job market growth", "Some areas need development", "Weather extremes"],
      lifestyle: "Moderate"
    },
    {
      name: "Eaton County",
      slug: "eaton-county",
      description: "Suburban county with excellent schools and family-friendly communities. Close to Lansing while maintaining its own identity and affordable housing.",
      pros: ["Excellent schools", "Family-friendly", "Affordable housing", "Good location"],
      cons: ["Limited nightlife", "Suburban sprawl", "Dependent on Lansing area"],
      lifestyle: "Moderate"
    },
    {
      name: "Ionia County",
      slug: "ionia-county",
      description: "Rural county with small towns and agricultural roots. Very affordable with a strong sense of community and traditional values.",
      pros: ["Very affordable", "Strong community", "Safe neighborhoods", "Rural charm"],
      cons: ["Limited amenities", "Fewer services", "Longer commutes", "Limited diversity"],
      lifestyle: "Relaxed"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>West Michigan Living | Explore Counties & Communities</title>
        <meta 
          name="description" 
          content="Discover what it's like to live in West Michigan counties. Explore Kent, Ottawa, Allegan, Muskegon, and other counties with detailed information about schools, cities, and lifestyle." 
        />
        <link rel="canonical" href={`${SITE_URL}/west-michigan-living`} />
        <meta property="og:title" content="West Michigan Living | Explore Counties & Communities" />
        <meta property="og:description" content="Discover what it's like to live in West Michigan counties. Explore schools, cities, and lifestyle in each county." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/west-michigan-living`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-west-michigan-living.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="West Michigan Living | Explore Counties & Communities" />
        <meta name="twitter:description" content="Discover what it's like to live in West Michigan counties." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-west-michigan-living.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="West Michigan Living | Explore Counties & Communities"
        description="Discover what it's like to live in West Michigan counties. Learn about cities, schools, lifestyle, and housing in Kent, Ottawa, Allegan, Muskegon, and other West Michigan counties."
        url="/west-michigan-living"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "West Michigan Living", url: "/west-michigan-living" }]} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              West Michigan Living
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover what makes each West Michigan county unique. From bustling urban centers to peaceful rural communities, find the perfect place to call home.
            </p>
          </div>
        </div>
      </section>

      {/* Counties Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {counties.map((county, index) => (
              <Link key={index} to={`/west-michigan-living/${county.slug}`}>
                <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 h-full flex flex-col cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-secondary" />
                    <h3 className="text-2xl font-bold text-foreground">{county.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">{county.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-foreground">Pros:</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      {county.pros.slice(0, 2).map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-semibold text-foreground">Cons:</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      {county.cons.slice(0, 2).map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Lifestyle: <span className="font-semibold text-foreground">{county.lifestyle}</span></span>
                      <span className="text-primary font-medium inline-flex items-center gap-1">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Find Your Home in West Michigan?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with local lenders who can help you explore financing options for your new home.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
            <Link to="/contact">Get Pre-Qualified Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WestMichiganLiving;

