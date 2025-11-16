import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home, DollarSign, Shield, TrendingUp } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const FirstTimeBuyer = () => {
  const programs = [
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
      description: "For homes in eligible rural and suburban areas around West Michigan. Yes, many Grand Rapids suburbs qualify! Learn more about all zero-down options.",
      highlights: [
        "No down payment required",
        "Competitive interest rates",
        "Income limits apply",
      ],
      link: "/zero-down-home-loans-michigan"
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Get Pre-Qualified",
      description: "Talk to a lender to understand how much you can afford and which programs you qualify for. Takes about 15 minutes.",
    },
    {
      number: "2",
      title: "Find Your Home",
      description: "Work with a real estate agent to find a home that fits your budget and needs. Your lender will help you understand what you can afford.",
    },
    {
      number: "3",
      title: "Make an Offer",
      description: "Found the perfect home? Your agent will help you make a competitive offer and negotiate on your behalf.",
    },
    {
      number: "4",
      title: "Close & Move In",
      description: "Your lender handles the paperwork, you review and sign documents, and you get the keys to your new home!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>First-Time Homebuyer Programs in West Michigan | Low & Zero Down Options</title>
        <meta 
          name="description" 
          content="Discover first-time homebuyer programs in West Michigan. Learn about FHA loans, MSHDA assistance, conventional 97, and USDA loans. Get pre-qualified with local lenders in Grand Rapids." 
        />
        <link rel="canonical" href={`${SITE_URL}/first-time-buyer`} />
        <meta property="og:title" content="First-Time Homebuyer Programs in West Michigan | Low & Zero Down Options" />
        <meta property="og:description" content="Discover first-time homebuyer programs in West Michigan. Learn about FHA loans, MSHDA assistance, and zero down options." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/first-time-buyer`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-first-time-buyer.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="First-Time Homebuyer Programs in West Michigan" />
        <meta name="twitter:description" content="Discover first-time homebuyer programs in West Michigan. Learn about FHA loans, MSHDA assistance, and zero down options." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-first-time-buyer.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="First-Time Homebuyer Programs in West Michigan"
        description="Discover first-time homebuyer programs in West Michigan. Learn about FHA loans, MSHDA assistance, conventional 97, and USDA loans."
        url="/first-time-buyer"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "First-Time Buyer", url: "/first-time-buyer" }]} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              First-Time Homebuyer Programs in West Michigan
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Buying your first home is exciting—and easier than you think! Discover programs designed 
              specifically to help first-time buyers in West Michigan get into a home with less money down 
              and more affordable payments. For an in-depth look at all available options, check out our{" "}
              <Link to="/first-time-homebuyer-programs-west-michigan" className="text-primary hover:underline font-semibold">
                complete first-time homebuyer programs guide
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Why It's Easier Than You Think */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            You Don't Need Perfect Credit or 20% Down
          </h2>
          <Card className="p-8 bg-muted">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">3%</div>
                <p className="text-foreground font-semibold mb-2">Minimum Down Payment</p>
                <p className="text-sm text-muted-foreground">Some programs require as little as 3% down, and others offer zero down!</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">580</div>
                <p className="text-foreground font-semibold mb-2">Minimum Credit Score</p>
                <p className="text-sm text-muted-foreground">Many programs accept credit scores in the 500s and 600s.</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">$10,000</div>
                <p className="text-foreground font-semibold mb-2">Down Payment Help</p>
                <p className="text-sm text-muted-foreground">Programs like MSHDA offer thousands in assistance to cover your down payment.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            First-Time Buyer Programs Available in West Michigan
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <program.icon className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                <p className="text-accent font-semibold mb-4">{program.downPayment}</p>
                <p className="text-muted-foreground mb-6">
                  {program.description}
                  {program.link && (
                    <>
                      {" "}
                      <Link to={program.link} className="text-primary hover:underline">
                        Learn more →
                      </Link>
                    </>
                  )}
                </p>
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
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            The First-Time Buyer Process (It's Simpler Than You Think)
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Myths */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Common First-Time Buyer Myths
          </h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ❌ Myth: "I need 20% down to buy a home"
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-secondary">Truth:</strong> Most first-time buyers put down 3-5%, and some programs require{" "}
                  <Link to="/zero-down-home-loans-michigan" className="text-primary hover:underline">
                    zero down
                  </Link>!
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ❌ Myth: "My credit isn't good enough"
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-secondary">Truth:</strong> Programs exist for credit scores as low as 500-580, and lenders can help you improve your score.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ❌ Myth: "Renting is cheaper than buying"
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-secondary">Truth:</strong> With low down payment programs, your monthly mortgage payment might be similar to or less than rent—and you're building equity!
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ❌ Myth: "The process takes forever"
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-secondary">Truth:</strong> From pre-approval to closing typically takes 30-45 days, and you can be pre-qualified in 15 minutes.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Find Out Which Programs You Qualify For
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with a local lender who specializes in first-time homebuyer programs.
            </p>
          </div>
          <Card className="p-8">
            <LeadForm />
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstTimeBuyer;
