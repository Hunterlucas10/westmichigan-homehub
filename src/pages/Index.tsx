import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import HomeownershipQuiz from "@/components/HomeownershipQuiz";
import SocialProofStats from "@/components/SocialProofStats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, DollarSign, GraduationCap, Shield, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const Index = () => {
  const benefits = [{
    icon: DollarSign,
    title: "Zero Down Programs",
    description: "Explore USDA and VA loans that require no down payment for eligible buyers.",
    link: "/zero-down-home-loans-michigan"
  }, {
    icon: Home,
    title: "Low Down Payment Options",
    description: "FHA loans with as little as 3.5% down make homeownership more accessible."
  }, {
    icon: GraduationCap,
    title: "First-Time Buyer Programs",
    description: "MSHDA and local programs offer down payment assistance and special rates."
  }, {
    icon: Shield,
    title: "Trusted Local Lenders",
    description: "Connect with verified West Michigan mortgage specialists who know the area."
  }];
  
  const firstTimeBuyerPrograms = [
    {
      icon: Home,
      title: "FHA Loans",
      downPayment: "As low as 3.5% down",
      description: "Perfect for buyers with modest credit scores. FHA loans are government-backed and offer flexible qualification requirements.",
      highlights: [
        "Credit scores as low as 580 accepted",
        "Down payment can be gifted from family",
        "Lower interest rates than conventional loans",
      ],
    },
    {
      icon: Shield,
      title: "MSHDA MI Home Loan",
      downPayment: "Down payment assistance available",
      description: "Michigan's best-kept secret! MSHDA offers down payment assistance and lower mortgage rates to qualified first-time buyers.",
      highlights: [
        "Up to $10,000 in down payment help",
        "Below-market interest rates",
        "Income limits apply (generous for West MI)",
      ],
    },
    {
      icon: DollarSign,
      title: "Conventional 97",
      downPayment: "Just 3% down",
      description: "A conventional loan option requiring only 3% down payment, ideal for buyers with good credit and stable income.",
      highlights: [
        "Lower mortgage insurance than FHA",
        "No income limits",
        "MI can be removed when you reach 20% equity",
      ],
    },
    {
      icon: TrendingUp,
      title: "USDA Loans",
      downPayment: "Zero down",
      description: "For homes in eligible rural and suburban areas around West Michigan. Yes, many Grand Rapids suburbs qualify!",
      highlights: [
        "No down payment required",
        "Competitive interest rates",
        "Income limits apply",
      ],
    },
  ];
  
  const programs = ["FHA Loans - 3.5% down payment", "VA Loans - Zero down for veterans", "USDA Loans - Zero down in eligible areas", "MSHDA MI Home Loan - Down payment assistance", "Conventional 97 - Just 3% down", "HomeReady & Home Possible - Special first-time buyer options"];
  return <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Get Matched to the Best Lender for Your Situation in West Michigan</title>
        <meta 
          name="description" 
          content="Get matched to the best lender for your situation in West Michigan. At no cost, no BS. We connect you with the lender best suited to help your needs in your area." 
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content="West Michigan Homebuyer Hub - Zero Down & First-Time Buyer Programs" />
        <meta property="og:description" content="Your path to homeownership in West Michigan starts here. Explore FHA, VA, USDA, and MSHDA loan programs with trusted local experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-home.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="West Michigan Homebuyer Hub - Zero Down & First-Time Buyer Programs" />
        <meta name="twitter:description" content="Your path to homeownership in West Michigan starts here. Explore FHA, VA, USDA, and MSHDA loan programs with trusted local experts." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-home.jpg`} />
      </Helmet>
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-cover bg-center" style={{
      backgroundImage: `linear-gradient(rgba(21, 41, 59, 0.7), rgba(21, 41, 59, 0.8)), url(${heroImage})`
    }}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-background">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Find the Right Loan. Find the Right Lender. Find Your Home.
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-background/90">
                From zero-down and first-time buyer programs to low-rate mortgage options, we simplify the process and connect you with a lender who can actually get you approved. Free, local, and built around you.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-background/80">
                <span className="flex items-center gap-1">
                  <span className="text-green-300">✓</span> No Cost
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-300">✓</span> No BS
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-300">✓</span> Best Match for You
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  <a href="#lead-form">Get In Touch with a Local Lender</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background/20 text-lg px-8">
                  <Link to="/learning-center">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Quiz */}
            <div id="lead-form">
              <HomeownershipQuiz />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <SocialProofStats />

      {/* First-Time Buyer Programs Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            First-Time Buyer Programs Available in West Michigan
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {firstTimeBuyerPrograms.map((program, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <program.icon className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                <p className="text-accent font-semibold mb-4">{program.downPayment}</p>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link to="/first-time-homebuyer-programs-west-michigan">
                View Complete First-Time Buyer Guide →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose West Michigan Homebuyer Hub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We connect you with local experts who specialize in programs designed to make homeownership affordable and accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.link ? (
                    <Link to={benefit.link} className="hover:text-secondary transition-colors">
                      {benefit.title}
                    </Link>
                  ) : (
                    benefit.title
                  )}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Programs Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Loan Programs Available in West Michigan
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a <Link to="/first-time-homebuyer-programs-west-michigan" className="text-primary hover:underline">first-time buyer</Link>, 
                veteran, or looking for <Link to="/zero-down-home-loans-michigan" className="text-primary hover:underline">zero down payment options</Link>, 
                there's a program that fits your needs. Our partner lenders specialize in:
              </p>
              <div className="space-y-3">
                {programs.map((program, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{program}</span>
                  </div>)}
              </div>
              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
                <Link to="/learning-center">Explore All Programs</Link>
              </Button>
            </div>

            <Card className="p-8 bg-muted">
              <h3 className="text-2xl font-bold text-foreground mb-4">Not Sure Where to Start?</h3>
              <p className="text-muted-foreground mb-6">
                Our local lending partners will help you understand which programs you qualify for 
                and guide you through every step of the homebuying process.
              </p>
              <LeadForm variant="sidebar" />
              <div className="mt-6">
                <TrustBadges variant="compact" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Connect with trusted West Michigan lenders who specialize in zero down, low down, 
            and first-time homebuyer programs.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
            <Link to="/contact">Get Pre-Qualified Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;