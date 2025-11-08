import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, DollarSign, GraduationCap, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";

const Index = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Zero Down Programs",
      description: "Explore USDA and VA loans that require no down payment for eligible buyers.",
    },
    {
      icon: Home,
      title: "Low Down Payment Options",
      description: "FHA loans with as little as 3.5% down make homeownership more accessible.",
    },
    {
      icon: GraduationCap,
      title: "First-Time Buyer Programs",
      description: "MSHDA and local programs offer down payment assistance and special rates.",
    },
    {
      icon: Shield,
      title: "Trusted Local Lenders",
      description: "Connect with verified West Michigan mortgage specialists who know the area.",
    },
  ];

  const programs = [
    "FHA Loans - 3.5% down payment",
    "VA Loans - Zero down for veterans",
    "USDA Loans - Zero down in eligible areas",
    "MSHDA MI Home Loan - Down payment assistance",
    "Conventional 97 - Just 3% down",
    "HomeReady & Home Possible - Special first-time buyer options",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(21, 41, 59, 0.7), rgba(21, 41, 59, 0.8)), url(${heroImage})`,
        }}
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-background">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Path to Homeownership in West Michigan Starts Here
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-background/90">
                Explore zero down, low down, and first-time homebuyer loan programs with trusted local experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  <a href="#lead-form">Get Matched with a Lender</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background/20 text-lg px-8">
                  <Link to="/learning-center">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div id="lead-form">
              <LeadForm variant="hero" />
            </div>
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
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Loan Programs Available in West Michigan
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a first-time buyer, veteran, or looking for low down payment options, 
                there's a program that fits your needs. Our partner lenders specialize in:
              </p>
              <div className="space-y-3">
                {programs.map((program, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{program}</span>
                  </div>
                ))}
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
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
