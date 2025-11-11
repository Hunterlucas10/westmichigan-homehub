import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home, DollarSign, FileText, ChevronRight } from "lucide-react";

const LowDownPaymentMichigan = () => {
  const programs = [
    {
      icon: Home,
      title: "FHA Loans — 3.5% Down and Flexible Credit",
      description: "FHA loans are ideal for buyers with credit scores starting at 580. With just 3.5% down, you can secure a 30-year fixed-rate mortgage backed by the Federal Housing Administration.",
      benefits: [
        "As low as 3.5% down payment",
        "Credit scores as low as 580 accepted",
        "Flexible debt-to-income ratios",
        "Gift funds allowed for down payment",
      ]
    },
    {
      icon: DollarSign,
      title: "Conventional 97 Loan — 3% Down",
      description: "Offered by Fannie Mae and Freddie Mac, this option allows buyers to put down just 3% while avoiding the stricter FHA property standards.",
      benefits: [
        "Only 3% down payment required",
        "Lower mortgage insurance compared to FHA",
        "More flexible property standards",
        "Can cancel PMI once you reach 20% equity",
      ]
    },
    {
      icon: FileText,
      title: "MSHDA Assistance Add-On",
      description: "Pair any low-down-payment loan with MSHDA's $10,000 DPA to cover most or all of your upfront costs.",
      benefits: [
        "Up to $10,000 in down payment assistance",
        "Zero-interest second mortgage",
        "No monthly payments on assistance",
        "Can be combined with FHA or Conventional loans",
      ]
    },
  ];

  const comparison = [
    {
      program: "FHA Loan",
      downPayment: "3.5%",
      creditScore: "580+",
      bestFor: "Buyers with lower credit or higher debt ratios"
    },
    {
      program: "Conventional 97",
      downPayment: "3%",
      creditScore: "620+",
      bestFor: "Buyers with good credit seeking lower PMI"
    },
    {
      program: "MSHDA + FHA/Conv",
      downPayment: "As low as 0%*",
      creditScore: "640+",
      bestFor: "Michigan residents needing maximum assistance"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Low Down Payment Mortgages in Michigan | FHA, Conventional & MSHDA Loans</title>
        <meta 
          name="description" 
          content="Explore Michigan's best low-down-payment home loans. Compare FHA, Conventional 3%, and MSHDA DPA programs to find the most affordable path to homeownership." 
        />
      </Helmet>

      <Navigation />
      
      {/* Breadcrumbs */}
      <section className="pt-24 pb-2 px-4">
        <div className="container mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/learning-center" className="hover:text-primary">Learning Center</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Low Down Payment Options</span>
          </nav>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Low-Down-Payment Mortgage Options in Michigan — FHA, Conventional & MSHDA Explained
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                You don't need 20% down to buy a home in Michigan. Many <Link to="/first-time-buyer" className="text-primary hover:underline">first-time and repeat buyers</Link> qualify for low-down-payment loans that require as little as 3%.
              </p>
              <p>
                Whether you're looking at FHA loans, Conventional 97 programs, or <Link to="/mshda-loans-michigan" className="text-primary hover:underline">MSHDA assistance</Link>, West Michigan offers multiple paths to homeownership without massive upfront costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Three Low-Down-Payment Options for Michigan Buyers
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex gap-4 mb-6">
                  <program.icon className="w-12 h-12 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{program.title}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3 pl-16">
                  {program.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Quick Comparison
          </h2>
          <Card className="p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-foreground font-bold">Program</th>
                  <th className="text-left py-4 px-4 text-foreground font-bold">Down Payment</th>
                  <th className="text-left py-4 px-4 text-foreground font-bold">Min Credit Score</th>
                  <th className="text-left py-4 px-4 text-foreground font-bold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="py-4 px-4 text-foreground font-medium">{item.program}</td>
                    <td className="py-4 px-4 text-muted-foreground">{item.downPayment}</td>
                    <td className="py-4 px-4 text-muted-foreground">{item.creditScore}</td>
                    <td className="py-4 px-4 text-muted-foreground">{item.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-muted-foreground mt-4">
              * When MSHDA DPA covers the full down payment amount
            </p>
          </Card>
        </div>
      </section>

      {/* Why Low Down Works Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Why Low-Down-Payment Loans Make Sense
          </h2>
          <Card className="p-8">
            <p className="text-muted-foreground mb-4">
              The traditional 20% down payment requirement is outdated for most buyers. Today's low-down-payment 
              programs are designed to help you:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Buy sooner while rates and home values are favorable</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Keep cash reserves for emergencies and home improvements</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Start building equity instead of paying rent</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Take advantage of appreciation in West Michigan's growing markets</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Explore Your Options?
            </h2>
            <p className="text-muted-foreground mb-6">
              The best low-down-payment program depends on your credit score, income, debt ratios, and 
              homeownership goals. A local lender who understands Michigan programs can help you compare 
              all options and find the path that saves you the most money.
            </p>
            <p className="text-muted-foreground">
              If you qualify for <Link to="/zero-down-home-loans-michigan" className="text-primary hover:underline">zero-down programs like VA or USDA</Link>, those might be even better fits. Let's connect you with the right expert.
            </p>
          </Card>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Compare Your Low-Down Options
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with a trusted lender to see which program fits your situation best.
            </p>
          </div>
          <Card className="p-8">
            <LeadForm />
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">MSHDA Assistance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about $10,000 in down payment help
              </p>
              <Link to="/mshda-loans-michigan" className="text-primary hover:underline text-sm font-medium">
                View details →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">Zero-Down Options</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore VA, USDA, and other no-money-down loans
              </p>
              <Link to="/zero-down-home-loans-michigan" className="text-primary hover:underline text-sm font-medium">
                Read guide →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-foreground mb-3">First-Time Buyer Guide</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete overview of programs and eligibility
              </p>
              <Link to="/first-time-homebuyer-programs-west-michigan" className="text-primary hover:underline text-sm font-medium">
                Get started →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LowDownPaymentMichigan;
