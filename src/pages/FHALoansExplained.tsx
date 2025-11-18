import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, DollarSign, TrendingUp, FileText, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const FHALoansExplained = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Low Down Payment",
      description: "Only 3.5% down payment required with a credit score of 580 or higher. Even with a score of 500-579, you can qualify with 10% down."
    },
    {
      icon: Shield,
      title: "Flexible Credit Requirements",
      description: "FHA loans accept credit scores as low as 500, making them accessible to many buyers who might not qualify for conventional loans."
    },
    {
      icon: TrendingUp,
      title: "Gift Funds Allowed",
      description: "Your down payment can come from family members, employers, or charitable organizations—making it easier to gather the funds you need."
    },
    {
      icon: FileText,
      title: "Government Backing",
      description: "FHA loans are backed by the Federal Housing Administration, which allows lenders to offer more flexible terms."
    }
  ];

  const comparison = [
    {
      feature: "Down Payment",
      fha: "3.5% (580+ credit) or 10% (500-579)",
      conventional: "3-20% depending on loan type"
    },
    {
      feature: "Credit Score Minimum",
      fha: "500 (with 10% down)",
      conventional: "620+ typically"
    },
    {
      feature: "Mortgage Insurance",
      fha: "Required for loan term",
      conventional: "Can be removed at 20% equity"
    },
    {
      feature: "Property Standards",
      fha: "Stricter requirements",
      conventional: "More flexible"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>FHA Loans Explained: Is 3.5% Down Right for You? | West Michigan Guide</title>
        <meta 
          name="description" 
          content="Everything you need to know about FHA loans in West Michigan. Learn about benefits, requirements, 3.5% down payment, and how FHA loans compare to conventional mortgages." 
        />
        <link rel="canonical" href={`${SITE_URL}/blog/fha-loans-explained`} />
        <meta property="og:title" content="FHA Loans Explained: Is 3.5% Down Right for You? | West Michigan Guide" />
        <meta property="og:description" content="Everything you need to know about FHA loans in West Michigan. Learn about benefits, requirements, and how they compare to conventional mortgages." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/fha-loans-explained`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-fha-loans.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FHA Loans Explained: Is 3.5% Down Right for You?" />
        <meta name="twitter:description" content="Everything you need to know about FHA loans in West Michigan." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-fha-loans.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="FHA Loans Explained: Is 3.5% Down Right for You? | West Michigan Guide"
        description="Everything you need to know about FHA loans in West Michigan. Learn about benefits, requirements, 3.5% down payment, and how FHA loans compare to conventional mortgages."
        url="/blog/fha-loans-explained"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Learning Center", url: "/learning-center" },
        { name: "FHA Loans Explained", url: "/blog/fha-loans-explained" }
      ]} />
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              FHA Loans Explained: Is 3.5% Down Right for You?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about FHA loans, including benefits, requirements, and how they compare to conventional mortgages.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              FHA (Federal Housing Administration) loans are one of the most popular mortgage options for first-time homebuyers 
              in West Michigan. With a down payment as low as 3.5% and flexible credit requirements, FHA loans make homeownership 
              accessible to many buyers who might not qualify for conventional financing.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Key Benefits of FHA Loans
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6">
                  <benefit.icon className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              FHA vs Conventional Loans
            </h2>

            <Card className="p-6 mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold text-foreground">Feature</th>
                      <th className="text-left p-3 font-bold text-foreground">FHA Loan</th>
                      <th className="text-left p-3 font-bold text-foreground">Conventional</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3 font-semibold text-foreground">{row.feature}</td>
                        <td className="p-3 text-muted-foreground">{row.fha}</td>
                        <td className="p-3 text-muted-foreground">{row.conventional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              FHA Loan Requirements in Detail
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Understanding FHA requirements helps you prepare for the application process:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Credit Score Requirements</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>580+ credit score:</strong> 3.5% down payment required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>500-579 credit score:</strong> 10% down payment required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Below 500:</strong> Typically not eligible for FHA loans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>No credit history:</strong> FHA allows alternative credit documentation (rent, utilities, insurance payments)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Debt-to-Income (DTI) Ratio</h3>
              <p className="text-muted-foreground mb-3">
                FHA loans are more flexible with debt-to-income ratios than conventional loans:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Front-end DTI:</strong> Up to 31% (housing costs vs. income)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Back-end DTI:</strong> Up to 43% (all debts vs. income), can go higher with compensating factors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Compensating factors:</strong> Strong credit, reserves, or stable employment can allow higher DTI</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              FHA Mortgage Insurance (MIP)
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              FHA loans require Mortgage Insurance Premium (MIP), which is different from PMI on conventional loans:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Upfront MIP</h3>
              <p className="text-muted-foreground mb-3">
                A one-time premium paid at closing (or rolled into the loan):
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Amount:</strong> 1.75% of the loan amount</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Example:</strong> On a $200,000 loan, upfront MIP is $3,500</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Can be financed:</strong> Added to your loan amount, so you don't need cash at closing</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Annual MIP</h3>
              <p className="text-muted-foreground mb-3">
                Paid monthly as part of your mortgage payment:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Loan term 15+ years, down payment < 10%:</strong> 0.85% annually (0.0708% monthly)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Loan term 15+ years, down payment ≥ 10%:</strong> 0.80% annually (0.0667% monthly)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Loan term < 15 years, down payment < 10%:</strong> 0.70% annually (0.0583% monthly)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Loan term < 15 years, down payment ≥ 10%:</strong> 0.45% annually (0.0375% monthly)</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Important:</strong> Unlike PMI on conventional loans, MIP typically cannot be removed unless you put down 10% or more 
                (then it's removed after 11 years). For loans with less than 10% down, MIP is for the life of the loan.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              FHA Loan Limits in West Michigan
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              FHA loan limits vary by county and are updated annually. For 2024, limits in West Michigan counties include:
            </p>

            <Card className="p-6 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold text-foreground">County</th>
                      <th className="text-left p-3 font-bold text-foreground">1-Unit Limit</th>
                      <th className="text-left p-3 font-bold text-foreground">2-Unit Limit</th>
                      <th className="text-left p-3 font-bold text-foreground">3-Unit Limit</th>
                      <th className="text-left p-3 font-bold text-foreground">4-Unit Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Kent County</td>
                      <td className="p-3 text-muted-foreground">$498,257</td>
                      <td className="p-3 text-muted-foreground">$637,950</td>
                      <td className="p-3 text-muted-foreground">$770,125</td>
                      <td className="p-3 text-muted-foreground">$956,700</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Ottawa County</td>
                      <td className="p-3 text-muted-foreground">$498,257</td>
                      <td className="p-3 text-muted-foreground">$637,950</td>
                      <td className="p-3 text-muted-foreground">$770,125</td>
                      <td className="p-3 text-muted-foreground">$956,700</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">Muskegon County</td>
                      <td className="p-3 text-muted-foreground">$498,257</td>
                      <td className="p-3 text-muted-foreground">$637,950</td>
                      <td className="p-3 text-muted-foreground">$770,125</td>
                      <td className="p-3 text-muted-foreground">$956,700</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Note:</strong> These limits are for 2024 and are subject to change. Check with your lender for current limits. 
                Limits are higher for 2-4 unit properties.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Property Requirements for FHA Loans
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              FHA loans have specific property requirements that are stricter than conventional loans:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Safety and security:</strong> Home must be safe, secure, and structurally sound</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Property condition:</strong> Must meet minimum property standards (MPS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Appraisal required:</strong> FHA appraisal is more thorough than conventional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Repairs:</strong> Seller must fix health and safety issues before closing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Property types:</strong> Single-family homes, condos (FHA-approved), townhomes, manufactured homes (with restrictions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Not eligible:</strong> Investment properties, fixer-uppers (unless using FHA 203k), commercial properties</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              FHA 203k Loans: Buying and Renovating
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              FHA 203k loans allow you to buy a home that needs repairs and finance both the purchase and renovations:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Standard 203k</h3>
              <p className="text-muted-foreground mb-3">
                For major renovations ($5,000+):
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Can finance structural repairs, room additions, major renovations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Requires a consultant to oversee the work</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">More paperwork and longer processing time</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Limited 203k</h3>
              <p className="text-muted-foreground mb-3">
                For minor renovations (up to $35,000):
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Simpler process, no consultant required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Faster approval and closing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Good for cosmetic updates, appliances, flooring, HVAC</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Is an FHA Loan Right for You?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              FHA loans are ideal if you have a credit score between 500-679, need a low down payment, or have limited savings. 
              However, keep in mind that FHA loans require mortgage insurance for the life of the loan if you put down less than 10%.
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">FHA Loans Are Good For:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">First-time homebuyers with limited savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Buyers with credit scores below 680</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Those who can't afford 20% down payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Buyers with higher debt-to-income ratios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Those buying homes that need minor repairs (203k)</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Consider Conventional If:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You have a credit score of 680+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You can put down 20% (no PMI) or 10% (PMI can be removed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You want to avoid lifetime mortgage insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You're buying a property that doesn't meet FHA standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You need a loan above FHA limits</span>
                  </li>
                </ul>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              How to Apply for an FHA Loan
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The FHA loan application process is similar to conventional loans but with some additional steps:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">1. Get Pre-Qualified</h4>
                  <p className="text-muted-foreground">
                    Work with an FHA-approved lender to determine how much you can borrow. This gives you a realistic budget 
                    and shows sellers you're serious.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">2. Find an FHA-Approved Lender</h4>
                  <p className="text-muted-foreground">
                    Not all lenders are FHA-approved. Work with a lender who specializes in FHA loans and understands the 
                    unique requirements and process.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">3. Gather Documentation</h4>
                  <p className="text-muted-foreground">
                    You'll need pay stubs, W-2s, tax returns, bank statements, and proof of any gift funds. FHA may also 
                    require explanations for credit issues or gaps in employment.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">4. Property Appraisal</h4>
                  <p className="text-muted-foreground">
                    FHA requires a specific appraisal that checks both value and property condition. The appraiser will note 
                    any required repairs that must be completed before closing.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">5. Underwriting and Approval</h4>
                  <p className="text-muted-foreground">
                    FHA underwriting can be more flexible than conventional, but still thorough. Be prepared to provide additional 
                    documentation if requested.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">6. Closing</h4>
                  <p className="text-muted-foreground">
                    Once approved, you'll close on your home. FHA loans typically take 30-45 days from application to closing, 
                    similar to conventional loans.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">How to Buy a Home with a Low Credit Score</h3>
              <p className="text-muted-foreground mb-4">
                Learn which loan programs are available for buyers with credit challenges and how to improve your chances of approval.
              </p>
              <Link to="/blog/low-credit-score-home-buying" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Article <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">Credit Score Requirements by Loan Type</h3>
              <p className="text-muted-foreground mb-4">
                Understand the minimum credit score requirements for FHA, VA, conventional, and other loan programs in Michigan.
              </p>
              <Link to="/blog/credit-score-requirements-by-loan-type" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Article <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">Low Down Payment Options in Michigan</h3>
              <p className="text-muted-foreground mb-4">
                Explore all available low down payment mortgage options, from 3% to 3.5% down payment programs.
              </p>
              <Link to="/low-down-payment-michigan" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Guide <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">Understanding PMI</h3>
              <p className="text-muted-foreground mb-4">
                Learn what PMI is, when you need it, how much it costs, and how to avoid or remove it from your mortgage payment.
              </p>
              <Link to="/blog/understanding-pmi" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Article <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Pre-Qualified for an FHA Loan</h2>
            <p className="text-xl text-muted-foreground">Connect with a local lender who specializes in FHA loans.</p>
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

export default FHALoansExplained;

