import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocialProofStats from "@/components/SocialProofStats";
import SuccessStories from "@/components/SuccessStories";
import TrustBadges from "@/components/TrustBadges";
import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Award } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import { BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community Focus",
      description: "We're dedicated to helping West Michigan residents achieve their dreams of homeownership.",
    },
    {
      icon: Users,
      title: "Expert Partners",
      description: "We work exclusively with verified local lenders who specialize in affordable loan programs.",
    },
    {
      icon: Target,
      title: "Education First",
      description: "We believe informed buyers make better decisions. That's why education is at our core.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our partner lenders have helped thousands of families find the right path to homeownership.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Us - West Michigan Homebuyer Hub | Trusted Local Lenders</title>
        <meta 
          name="description" 
          content="Learn about West Michigan Homebuyer Hub. We connect aspiring homeowners with verified local lenders specializing in zero down, low down payment, and first-time buyer programs in Grand Rapids and West Michigan." 
        />
        <link rel="canonical" href={`${SITE_URL}/about`} />
        <meta property="og:title" content="About Us - West Michigan Homebuyer Hub | Trusted Local Lenders" />
        <meta property="og:description" content="Learn about West Michigan Homebuyer Hub. We connect aspiring homeowners with verified local lenders specializing in affordable loan programs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-about.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - West Michigan Homebuyer Hub" />
        <meta name="twitter:description" content="Learn about West Michigan Homebuyer Hub. We connect aspiring homeowners with verified local lenders." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-about.jpg`} />
      </Helmet>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About West Michigan Homebuyer Hub
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted resource for navigating homeownership in West Michigan
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                West Michigan Homebuyer Hub was created to bridge the gap between aspiring homeowners 
                and the financing options available to them. We recognized that many potential buyers 
                in the Grand Rapids area and surrounding communities simply didn't know about the 
                zero down, low down payment, and first-time buyer programs that could make homeownership possible.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our mission is simple: <strong className="text-foreground">educate, connect, and empower</strong>. 
                We provide clear, accessible information about loan programs like FHA, VA, USDA, MSHDA, 
                and others, then connect you with local lenders who specialize in these programs.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that everyone deserves a chance at homeownership, and we're here to help 
                make that dream a reality for families throughout West Michigan.
              </p>
            </div>
            <div>
              <img 
                src={aboutImage} 
                alt="Mortgage advisor helping clients" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <SocialProofStats />

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to West Michigan homebuyers is built on these core values
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Our Lending Partners
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We've carefully selected our network of lending partners based on their expertise 
              in affordable loan programs and their commitment to serving the West Michigan community. 
              Our partners specialize in:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span className="text-muted-foreground">FHA loans for buyers with lower down payments and credit flexibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span className="text-muted-foreground">VA loans for veterans and active military with zero down payment options</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span className="text-muted-foreground">USDA loans for rural and suburban areas with no down payment required</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span className="text-muted-foreground">MSHDA programs offering down payment assistance and lower rates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span className="text-muted-foreground">Conventional low down payment programs for first-time buyers</span>
              </li>
            </ul>
            <p className="text-lg text-muted-foreground">
              Each partner lender is fully licensed, experienced in West Michigan's housing market, 
              and committed to helping you find the best financing solution for your unique situation.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStories />

      {/* Trust Badges Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why You Can Trust Us</h2>
            <p className="text-lg text-muted-foreground">
              We're committed to transparency, security, and your success
            </p>
          </div>
          <TrustBadges />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
