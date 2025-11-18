import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, TrendingUp, Shield, FileText, ArrowRight, Info, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const MSHDAInfoCenter = () => {
  const downPaymentAssistanceFeatures = [
    {
      icon: DollarSign,
      title: "Up to $10,000 in Assistance",
      description: "MSHDA provides down payment assistance that can cover your entire down payment and closing costs, making homeownership more accessible.",
    },
    {
      icon: Shield,
      title: "Forgivable Loan",
      description: "The down payment assistance is structured as a forgivable loan - if you stay in your home for 7 years, the loan is completely forgiven.",
    },
    {
      icon: TrendingUp,
      title: "Below-Market Interest Rates",
      description: "MSHDA offers competitive interest rates that are often lower than conventional loans, saving you money over the life of your mortgage.",
    },
    {
      icon: FileText,
      title: "Flexible Requirements",
      description: "Income limits are generous for West Michigan, and credit score requirements are accessible for many first-time buyers.",
    },
  ];

  const mccFeatures = [
    {
      title: "Tax Credit, Not Deduction",
      description: "The MCC is a dollar-for-dollar reduction in your federal income tax liability, not just a deduction. This means real savings every year.",
    },
    {
      title: "Up to $2,000 Per Year",
      description: "You can receive up to $2,000 in tax credits annually, which can significantly reduce your tax burden and increase your take-home pay.",
    },
    {
      title: "Available for Life of Loan",
      description: "The tax credit continues for as long as you own the home and have the mortgage, providing ongoing financial benefits.",
    },
    {
      title: "Can Be Combined with DPA",
      description: "You can use both the down payment assistance and the MCC together, maximizing your benefits from MSHDA programs.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MSHDA Info Center - Down Payment Assistance & MCC Credit | West Michigan</title>
        <meta 
          name="description" 
          content="Complete guide to MSHDA down payment assistance (up to $10,000) and Mortgage Credit Certificate (MCC) tax credit in West Michigan. Learn eligibility, benefits, and how to apply." 
        />
        <link rel="canonical" href={`${SITE_URL}/mshda-info-center`} />
        <meta property="og:title" content="MSHDA Info Center - Down Payment Assistance & MCC Credit | West Michigan" />
        <meta property="og:description" content="Complete guide to MSHDA down payment assistance and Mortgage Credit Certificate tax credit in West Michigan." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/mshda-info-center`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-mshda-info-center.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MSHDA Info Center - Down Payment Assistance & MCC Credit" />
        <meta name="twitter:description" content="Complete guide to MSHDA programs in West Michigan." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-mshda-info-center.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="MSHDA Info Center - Down Payment Assistance & MCC Credit | West Michigan"
        description="Complete guide to MSHDA down payment assistance and Mortgage Credit Certificate tax credit in West Michigan."
        url="/mshda-info-center"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "MSHDA Info Center", url: "/mshda-info-center" }
      ]} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-12 h-12 text-secondary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                MSHDA Info Center
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Your complete resource for MSHDA down payment assistance and Mortgage Credit Certificate (MCC) programs in West Michigan.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">
                Up to $10,000 Down Payment Help
              </span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">
                Tax Credit Up to $2,000/Year
              </span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">
                Generous Income Limits
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Down Payment Assistance Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MSHDA Down Payment Assistance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get up to $10,000 to help cover your down payment and closing costs. This forgivable loan makes homeownership possible for many first-time buyers in West Michigan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {downPaymentAssistanceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 mb-4 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-muted mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">How It Works</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Apply with a Participating Lender</h4>
                  <p className="text-muted-foreground">
                    Work with a lender who participates in MSHDA programs. They'll help you determine if you qualify and guide you through the application process.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Receive Down Payment Assistance</h4>
                  <p className="text-muted-foreground">
                    If approved, MSHDA provides up to $10,000 that can be used for your down payment and closing costs. This is structured as a second mortgage.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Loan Forgiveness After 7 Years</h4>
                  <p className="text-muted-foreground">
                    As long as you remain in the home as your primary residence for 7 years, the down payment assistance loan is completely forgiven. No repayment required!
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 border-secondary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Eligibility Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Basic Requirements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">First-time homebuyer (or haven't owned in 3 years)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Minimum credit score of 640</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Home must be in Michigan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Must complete homebuyer education course</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Income Limits (2024)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">1-2 person household: $112,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">3+ person household: $129,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Income limits are generous for West Michigan area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Purchase price limits apply by county</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* MCC Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Info className="w-10 h-10 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Mortgage Credit Certificate (MCC)
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The MSHDA Mortgage Credit Certificate provides a federal tax credit that reduces your income tax liability, putting more money back in your pocket each year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {mccFeatures.map((feature, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-background mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">How the MCC Tax Credit Works</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Example Scenario</h4>
                <p className="text-muted-foreground mb-4">
                  Let's say you have a $200,000 mortgage at 6% interest. Your annual interest payments would be approximately $12,000 in the first year.
                </p>
                <div className="bg-muted p-6 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Annual Interest Paid:</span>
                      <span className="font-semibold text-foreground">$12,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">MCC Credit Rate (20%):</span>
                      <span className="font-semibold text-foreground">20%</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between items-center">
                      <span className="text-foreground font-semibold">Annual Tax Credit:</span>
                      <span className="font-bold text-secondary text-xl">$2,000</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      This $2,000 reduces your federal tax liability dollar-for-dollar. If you owe $3,000 in taxes, you'd only pay $1,000. If you're due a refund, you'd get an additional $2,000.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 border-secondary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">MCC Eligibility</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">First-time homebuyer (or haven't owned in 3 years)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Same income limits as down payment assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Home must be your primary residence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Must use a participating MSHDA lender</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Credit rate typically 20% of mortgage interest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Maximum credit of $2,000 per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Available for entire life of mortgage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Can be combined with down payment assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Combining Programs Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-secondary/30">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Use Both Programs Together
            </h3>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              The best part? You can use both MSHDA down payment assistance and the MCC tax credit together, maximizing your benefits!
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold mb-1">Get up to $10,000 for your down payment</p>
                  <p className="text-sm text-muted-foreground">Use the down payment assistance to cover upfront costs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold mb-1">Save up to $2,000 per year in taxes</p>
                  <p className="text-sm text-muted-foreground">The MCC reduces your tax burden every year you own the home</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold mb-1">Lower interest rates</p>
                  <p className="text-sm text-muted-foreground">MSHDA loans often have below-market interest rates</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">MSHDA Loans Michigan</h3>
              <p className="text-muted-foreground mb-4">
                Learn about MSHDA MI Home Loan eligibility, benefits, income limits, and how to apply in West Michigan.
              </p>
              <Link to="/mshda-loans-michigan" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Guide <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">MSHDA MI Home Loan Guide</h3>
              <p className="text-muted-foreground mb-4">
                Complete guide to MSHDA's MI Home Loan program, including benefits, eligibility, and application process.
              </p>
              <Link to="/blog/mshda-mi-home-loan-guide" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Article <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">Down Payment Assistance in West Michigan</h3>
              <p className="text-muted-foreground mb-4">
                See every down payment assistance program available in West Michigan, including MSHDA and local grants.
              </p>
              <Link to="/down-payment-assistance-west-michigan" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Guide <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">First-Time Homebuyer Programs</h3>
              <p className="text-muted-foreground mb-4">
                Discover the best first-time homebuyer programs for West Michigan residents, including MSHDA options.
              </p>
              <Link to="/first-time-homebuyer-programs-west-michigan" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Guide <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to See If You Qualify?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get matched with a lender who specializes in MSHDA programs and can help you access these benefits.
            </p>
          </div>
          <Card className="p-8">
            <LeadForm variant="sidebar" />
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MSHDAInfoCenter;

