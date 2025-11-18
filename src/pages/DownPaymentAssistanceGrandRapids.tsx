import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Building, DollarSign, Home, Gift, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const DownPaymentAssistanceGrandRapids = () => {
  const programs = [
    {
      icon: DollarSign,
      title: "MSHDA Down Payment Assistance",
      amount: "Up to $10,000",
      description: "Michigan's state program offers zero-interest second mortgage that covers down payment and closing costs. Available throughout Grand Rapids and Kent County.",
      link: "/mshda-loans-michigan"
    },
    {
      icon: Building,
      title: "Grand Rapids Homebuyer Assistance Fund",
      amount: "Up to $7,500",
      description: "City-specific program for Grand Rapids residents. Helps with down payment and closing costs for qualified first-time buyers who live or work in the city.",
      eligibility: "Must live/work in Grand Rapids city limits, income limits apply"
    },
    {
      icon: Home,
      title: "Kent County Community Development DPA",
      amount: "Varies by program",
      description: "For low-to-moderate-income families throughout Kent County. Provides down payment assistance and homebuyer education support.",
      eligibility: "Income and area restrictions apply"
    },
    {
      icon: Gift,
      title: "NeighborhoodLIFT by Wells Fargo",
      amount: "Up to $25,000*",
      description: "When available in Grand Rapids, provides significant down payment assistance. Check with local lenders for current availability.",
      eligibility: "Periodic program, check with local lenders"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Down Payment Assistance Programs in Grand Rapids | Local Grants & Loans</title>
        <meta 
          name="description" 
          content="Discover local and state programs in Grand Rapids that can help you cover your down payment and closing costs. Learn about MSHDA, city grants, and county assistance programs." 
        />
        <link rel="canonical" href={`${SITE_URL}/blog/down-payment-assistance-grand-rapids`} />
        <meta property="og:title" content="Down Payment Assistance Programs in Grand Rapids | Local Grants & Loans" />
        <meta property="og:description" content="Discover local and state programs in Grand Rapids that can help you cover your down payment and closing costs." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/down-payment-assistance-grand-rapids`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-down-payment-grand-rapids.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Down Payment Assistance Programs in Grand Rapids" />
        <meta name="twitter:description" content="Discover local and state programs in Grand Rapids that can help you cover your down payment." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-down-payment-grand-rapids.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="Down Payment Assistance Programs in Grand Rapids | Local Grants & Loans"
        description="Discover local and state programs in Grand Rapids that can help you cover your down payment and closing costs. Learn about MSHDA, city grants, and county assistance programs."
        url="/blog/down-payment-assistance-grand-rapids"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Learning Center", url: "/learning-center" },
        { name: "Down Payment Assistance Grand Rapids", url: "/blog/down-payment-assistance-grand-rapids" }
      ]} />
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Down Payment Assistance Programs in Grand Rapids
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover local and state programs that can help you cover your down payment and closing costs when buying a home in Grand Rapids.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Buying a home in Grand Rapids is more affordable than you might think. With multiple down payment assistance 
              programs available at the city, county, and state level, many first-time buyers can purchase a home with 
              little to no cash out of pocket.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Available Programs in Grand Rapids
            </h2>

            <div className="space-y-6 mb-12">
              {programs.map((program, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <program.icon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                      <p className="text-accent font-semibold mb-3">Amount: {program.amount}</p>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      {program.eligibility && (
                        <p className="text-sm text-muted-foreground mb-4"><strong>Eligibility:</strong> {program.eligibility}</p>
                      )}
                      {program.link && (
                        <Link to={program.link} className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                          Learn more <ChevronRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Program Details and Eligibility
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Each program has specific requirements and benefits. Here's what you need to know:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">MSHDA Down Payment Assistance</h3>
              <p className="text-muted-foreground mb-3">
                <strong>Amount:</strong> Up to $10,000 (or 10% of purchase price, whichever is less)
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Credit score:</strong> Minimum 640 (660 for manufactured homes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Income limits:</strong> Varies by county and household size (check current limits)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Purchase price limits:</strong> Must be within MSHDA limits for your area</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Repayment:</strong> Zero-interest second mortgage, repaid when you sell or refinance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Forgiveness:</strong> 20% forgiven each year for 5 years if you stay in the home</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Grand Rapids Homebuyer Assistance Fund</h3>
              <p className="text-muted-foreground mb-3">
                <strong>Amount:</strong> Up to $7,500
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Location requirement:</strong> Must live or work within Grand Rapids city limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>First-time buyer:</strong> Typically required (haven't owned a home in 3 years)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Income limits:</strong> Usually 80% of area median income (AMI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Property requirements:</strong> Must be within city limits, may have condition requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Application:</strong> Through approved lenders or city housing department</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Kent County Community Development DPA</h3>
              <p className="text-muted-foreground mb-3">
                <strong>Amount:</strong> Varies by program and funding availability
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Service area:</strong> Throughout Kent County (including Grand Rapids)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Income limits:</strong> Typically 80-120% of area median income</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Target areas:</strong> Some programs focus on specific neighborhoods or census tracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Homebuyer education:</strong> Often required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Funding:</strong> May have limited funds and operate on first-come, first-served basis</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Can You Combine Programs?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In some cases, you may be able to combine multiple down payment assistance programs:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Combining Assistance Programs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>MSHDA + City/County programs:</strong> Sometimes possible, but total assistance may be capped</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Lender restrictions:</strong> Some lenders may limit how much total assistance you can receive</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Loan type matters:</strong> FHA, conventional, and other loan types have different rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Work with experienced lender:</strong> A lender familiar with local programs can help you maximize assistance</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Example:</strong> You might be able to combine $7,500 from Grand Rapids Homebuyer Assistance Fund with $2,500 from MSHDA 
                (if you need less than the full $10,000 MSHDA amount), giving you $10,000 total assistance.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Real-World Example: Buying in Grand Rapids
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Here's how down payment assistance can work for a typical Grand Rapids homebuyer:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Scenario: $200,000 Home Purchase</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-foreground">Purchase price:</span>
                  <span className="text-foreground font-semibold">$200,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Down payment (3.5% FHA):</span>
                  <span className="text-foreground font-semibold">$7,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Closing costs (estimated):</span>
                  <span className="text-foreground font-semibold">$3,000</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-foreground font-bold">Total needed:</span>
                  <span className="text-foreground font-bold">$10,000</span>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-muted-foreground font-semibold">Option 1: MSHDA Only</p>
                <div className="flex justify-between pl-4">
                  <span className="text-foreground">MSHDA assistance:</span>
                  <span className="text-foreground font-semibold text-secondary">$10,000</span>
                </div>
                <div className="flex justify-between pl-4 border-t pt-2 mt-2">
                  <span className="text-foreground font-bold">Your cash needed:</span>
                  <span className="text-foreground font-bold">$0</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground font-semibold">Option 2: Combine Programs</p>
                <div className="flex justify-between pl-4">
                  <span className="text-foreground">Grand Rapids assistance:</span>
                  <span className="text-foreground font-semibold text-secondary">$7,500</span>
                </div>
                <div className="flex justify-between pl-4">
                  <span className="text-foreground">MSHDA assistance:</span>
                  <span className="text-foreground font-semibold text-secondary">$2,500</span>
                </div>
                <div className="flex justify-between pl-4 border-t pt-2 mt-2">
                  <span className="text-foreground font-bold">Total assistance:</span>
                  <span className="text-foreground font-bold text-secondary">$10,000</span>
                </div>
                <div className="flex justify-between pl-4 border-t pt-2 mt-2">
                  <span className="text-foreground font-bold">Your cash needed:</span>
                  <span className="text-foreground font-bold">$0</span>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              How to Apply
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Most down payment assistance programs in Grand Rapids are applied through your lender. Start by getting 
              pre-qualified with a local lender who understands these programs and can help you determine which ones you qualify for.
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Application Process</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">1. Get Pre-Qualified</h4>
                  <p className="text-muted-foreground">
                    Work with a local lender who knows Grand Rapids assistance programs. They'll review your income, credit, 
                    and situation to determine which programs you qualify for.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">2. Determine Eligibility</h4>
                  <p className="text-muted-foreground">
                    Your lender will check income limits, credit requirements, and location requirements for each program. 
                    They'll help you understand which programs are available to you.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">3. Complete Required Education</h4>
                  <p className="text-muted-foreground">
                    Many programs require homebuyer education. Your lender can help you find approved courses, which are 
                    often available online or in-person.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">4. Find a Home</h4>
                  <p className="text-muted-foreground">
                    Work with a real estate agent to find a home that meets program requirements (location, price, condition). 
                    Your lender will provide a pre-approval letter showing you're qualified for assistance.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">5. Apply for Assistance</h4>
                  <p className="text-muted-foreground">
                    Once you have a purchase agreement, your lender will submit applications for the assistance programs 
                    you qualify for. This may include MSHDA, city, and/or county programs.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">6. Close on Your Home</h4>
                  <p className="text-muted-foreground">
                    At closing, the assistance funds are applied to your down payment and closing costs. You'll sign documents 
                    for your first mortgage and any second mortgages (for assistance programs that require repayment).
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Important Considerations
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Before applying for down payment assistance, consider these factors:
            </p>

            <Card className="p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Repayment terms:</strong> Understand when and how assistance must be repaid (if at all)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Property restrictions:</strong> Some programs have restrictions on where you can buy or property types</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Income limits:</strong> Make sure your household income is within program limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Funding availability:</strong> Some programs have limited funds and may run out</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Timeline:</strong> Assistance programs may add time to your closing process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Lender requirements:</strong> Not all lenders work with all assistance programs</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Finding the Right Lender
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Working with a lender who understands local assistance programs is crucial:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">What to Look For</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>MSHDA-approved:</strong> Must be MSHDA-approved to offer MSHDA programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Local knowledge:</strong> Familiar with Grand Rapids and Kent County programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Experience:</strong> Has successfully closed loans with assistance programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Communication:</strong> Explains programs clearly and helps you understand your options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Resources:</strong> Can help you find homebuyer education courses and navigate the process</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Pre-Qualified Today</h2>
            <p className="text-xl text-muted-foreground">Connect with a local lender who knows Grand Rapids assistance programs.</p>
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

export default DownPaymentAssistanceGrandRapids;

