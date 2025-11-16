import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, DollarSign, GraduationCap, FileText, Users, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const FirstGenerationHomebuyerGrant = () => {
  const eligibilityRequirements = [
    "Must be a first-generation homebuyer (your parents never owned a home) OR a first-time homebuyer",
    "Must meet income limits based on household size and county median income",
    "Must meet purchase price limits (varies by county in Michigan)",
    "Must complete a certified homebuyer education course",
    "Home must be your primary residence",
    "Must have qualifying credit score (typically 640+)",
  ];

  const fundingUses = [
    {
      icon: DollarSign,
      title: "Down Payment",
      description: "Apply grant funds directly to your required down payment, potentially eliminating this barrier entirely."
    },
    {
      icon: FileText,
      title: "Closing Costs",
      description: "Cover closing costs including appraisal, title insurance, recording fees, and other transaction expenses."
    },
    {
      icon: GraduationCap,
      title: "Interest Rate Reduction",
      description: "Use funds to buy down your mortgage interest rate, saving thousands over the life of your loan."
    },
  ];

  const steps = [
    {
      title: "Verify your eligibility",
      description: "Confirm you meet the first-generation or first-time buyer definition and check income/price limits for your county."
    },
    {
      title: "Complete homebuyer education",
      description: "Enroll in and complete a HUD-approved homebuyer education course (available online and in-person)."
    },
    {
      title: "Connect with an approved lender",
      description: "Work with a Michigan lender familiar with the First-Generation Grant program and required documentation."
    },
    {
      title: "Gather required documentation",
      description: "Prepare income verification, credit reports, and documentation proving first-generation status."
    },
    {
      title: "Submit your application",
      description: "Your lender will coordinate the grant application alongside your mortgage application."
    },
    {
      title: "Close on your home",
      description: "Grant funds are applied at closing, dramatically reducing your upfront costs."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Michigan First-Generation Homebuyer Grant | $25,000 in Assistance Available</title>
        <meta 
          name="description" 
          content="New Michigan homebuyer grants offer up to $25,000 for first-generation or first-time buyers. See if you qualify and how to apply in West Michigan." 
        />
        <link rel="canonical" href={`${SITE_URL}/first-generation-homebuyer-grant-michigan`} />
        <meta property="og:title" content="Michigan First-Generation Homebuyer Grant | $25,000 in Assistance Available" />
        <meta property="og:description" content="New Michigan homebuyer grants offer up to $25,000 for first-generation or first-time buyers. See if you qualify." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/first-generation-homebuyer-grant-michigan`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-first-generation-grant.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Michigan First-Generation Homebuyer Grant" />
        <meta name="twitter:description" content="New Michigan homebuyer grants offer up to $25,000 for first-generation or first-time buyers." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-first-generation-grant.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="Michigan First-Generation Homebuyer Grant | $25,000 in Assistance Available"
        description="New Michigan homebuyer grants offer up to $25,000 for first-generation or first-time buyers. See if you qualify and how to apply in West Michigan."
        url="/first-generation-homebuyer-grant-michigan"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "First Generation Homebuyer Grant", url: "/first-generation-homebuyer-grant-michigan" }]} />
      <Navigation />
      
      {/* Breadcrumbs */}
      <section className="pt-24 pb-2 px-4">
        <div className="container mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/learning-center" className="hover:text-primary">Learning Center</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">First-Generation Grant</span>
          </nav>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Michigan First-Generation & First-Time Buyer Grants — $25K Assistance & Local Application Steps
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Michigan's new First-Generation Homebuyer Grant offers up to $25,000 in assistance for eligible 
                families who've never owned a home—or whose parents didn't. This groundbreaking program aims to 
                break generational wealth gaps and help more Michigan residents achieve homeownership.
              </p>
              <p>
                If you're buying in West Michigan and qualify, this grant can be combined with <Link to="/mshda-loans-michigan" className="text-primary hover:underline">MSHDA programs</Link>, <Link to="/low-down-payment-michigan" className="text-primary hover:underline">FHA loans</Link>, and other <Link to="/down-payment-assistance-west-michigan" className="text-primary hover:underline">down payment assistance</Link> to make owning a home in Grand Rapids or Holland achievable without large savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8">
            <Users className="w-16 h-16 mb-6 text-secondary" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What Is the First-Generation Homebuyer Grant?
            </h2>
            <p className="text-muted-foreground mb-4">
              This state-funded program provides up to $25,000 in financial assistance to qualified first-generation 
              or first-time homebuyers in Michigan. The goal is to address the homeownership gap faced by families 
              who have never had generational wealth or property ownership to leverage.
            </p>
            <p className="text-muted-foreground">
              The grant is designed to work alongside traditional mortgage programs, effectively reducing or 
              eliminating the down payment and closing cost barriers that prevent many families from buying homes.
            </p>
          </Card>
        </div>
      </section>

      {/* How Funds Can Be Used Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            How Grant Funds Can Be Used
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {fundingUses.map((use, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <use.icon className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="text-xl font-bold text-foreground mb-3">{use.title}</h3>
                <p className="text-muted-foreground">{use.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Who Qualifies?
          </h2>
          <Card className="p-8">
            <ul className="space-y-4">
              {eligibilityRequirements.map((requirement, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{requirement}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <h4 className="font-bold text-foreground mb-3">What is "First-Generation"?</h4>
              <p className="text-muted-foreground">
                A first-generation homebuyer is someone whose parents never owned a home. This definition 
                recognizes that many families lack the generational wealth, knowledge, and down payment assistance 
                that comes from parents who owned property.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            How to Apply
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Combining with Other Programs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Combining with Other Michigan Programs
          </h2>
          <Card className="p-8">
            <p className="text-muted-foreground mb-6">
              The First-Generation Homebuyer Grant is powerful on its own, but it becomes even more effective 
              when combined with other Michigan homebuyer programs:
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">+ MSHDA MI Home Loan:</strong>
                  <p className="text-muted-foreground">Add up to $10,000 more in DPA assistance and access competitive interest rates.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">+ FHA Loans:</strong>
                  <p className="text-muted-foreground">Pair with FHA's 3.5% down requirement—the grant can cover this and more.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">+ Conventional 97:</strong>
                  <p className="text-muted-foreground">Use the grant with Conventional loans requiring just 3% down.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">+ Local City/County Programs:</strong>
                  <p className="text-muted-foreground">Stack with Grand Rapids, Kent County, or other local assistance programs where eligible.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why This Program Matters for West Michigan Families
            </h2>
            <p className="text-muted-foreground mb-4">
              Homeownership creates generational wealth. Families who own homes can build equity, access better 
              financing, and pass assets to their children. But for families whose parents never owned property, 
              getting started is exponentially harder.
            </p>
            <p className="text-muted-foreground">
              The First-Generation Homebuyer Grant levels the playing field. Combined with West Michigan's 
              affordable neighborhoods in <Link to="/no-money-down-grand-rapids" className="text-primary hover:underline">Grand Rapids</Link>, Holland, Muskegon, and beyond, this program makes 
              it possible to break the cycle and achieve homeownership—even without family financial support.
            </p>
          </Card>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Check Your Eligibility for the First-Generation Grant
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with a local lender who can help you navigate this program and maximize your assistance.
            </p>
          </div>
          <Card className="p-8">
            <LeadForm />
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 bg-muted border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">MSHDA Assistance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Add up to $10,000 more with Michigan's DPA program
              </p>
              <Link to="/mshda-loans-michigan" className="text-primary hover:underline text-sm font-medium">
                Learn more →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">Down Payment Assistance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore all local and state DPA options
              </p>
              <Link to="/down-payment-assistance-west-michigan" className="text-primary hover:underline text-sm font-medium">
                View programs →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">First-Time Buyer Overview</h3>
              <p className="text-sm text-muted-foreground mb-4">
                See all programs available to first-time buyers
              </p>
              <Link to="/first-time-homebuyer-programs-west-michigan" className="text-primary hover:underline text-sm font-medium">
                Explore options →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstGenerationHomebuyerGrant;
