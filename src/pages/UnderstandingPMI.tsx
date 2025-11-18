import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, DollarSign, TrendingUp, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const UnderstandingPMI = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Understanding PMI: Private Mortgage Insurance Explained | West Michigan</title>
        <meta name="description" content="Learn about Private Mortgage Insurance (PMI) in West Michigan. Understand when PMI is required, how much it costs, and how to remove it from your loan." />
        <link rel="canonical" href={`${SITE_URL}/blog/understanding-pmi`} />
        <meta property="og:title" content="Understanding PMI: Private Mortgage Insurance Explained" />
        <meta property="og:description" content="Learn about Private Mortgage Insurance (PMI) in West Michigan and how to remove it." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/understanding-pmi`} />
      </Helmet>
      <ArticleSchema title="Understanding PMI: Private Mortgage Insurance Explained | West Michigan" description="Learn about Private Mortgage Insurance (PMI) in West Michigan. Understand when PMI is required, how much it costs, and how to remove it." url="/blog/understanding-pmi" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Understanding PMI", url: "/blog/understanding-pmi" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Understanding PMI: Private Mortgage Insurance Explained</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn when PMI is required, how much it costs, and how to remove it from your loan.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Private Mortgage Insurance (PMI) is a type of insurance that protects lenders when borrowers put down less than 20% on a 
              conventional mortgage. While PMI adds to your monthly payment, it enables many buyers to purchase a home with a smaller down 
              payment. Understanding how PMI works, what it costs, and how to remove it can help you make informed decisions about your 
              mortgage and save money over time.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              What is Private Mortgage Insurance (PMI)?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              PMI is insurance that protects the lender, not you, if you default on your mortgage. When you put down less than 20% on a 
              conventional loan, the lender requires PMI to reduce their risk. The insurance company pays the lender if you stop making 
              payments, but you pay the premium as part of your monthly mortgage payment.
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Key Points About PMI</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Required for:</strong> Conventional loans with less than 20% down payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Not required for:</strong> FHA loans (they have MIP instead), VA loans, USDA loans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Protects:</strong> The lender, not you</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Can be removed:</strong> Once you reach 20% equity</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              When is PMI Required?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              PMI is required on conventional loans when your loan-to-value (LTV) ratio is greater than 80%. This means:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Down Payment Less Than 20%</h3>
                <p className="text-muted-foreground mb-3">
                  If you put down less than 20% of the purchase price, you'll typically need PMI. For example:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>3% down (Conventional 97):</strong> PMI required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>5% down:</strong> PMI required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>10% down:</strong> PMI required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>20% or more down:</strong> No PMI required</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Loan-to-Value (LTV) Ratio</h3>
                <p className="text-muted-foreground">
                  LTV is calculated by dividing your loan amount by the home's value. If your LTV is above 80%, PMI is typically required. 
                  For example, on a $200,000 home with a $190,000 loan (5% down), your LTV is 95%, so PMI is required.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              How Much Does PMI Cost?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              PMI costs vary based on several factors, but typically range from 0.5% to 1.5% of your loan amount annually. The cost is 
              usually split into monthly payments and added to your mortgage payment.
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Factors That Affect PMI Cost</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Loan-to-value ratio:</strong> Higher LTV (lower down payment) = higher PMI cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Credit score:</strong> Lower credit scores typically result in higher PMI rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Loan amount:</strong> Larger loans may have slightly different rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Loan type:</strong> Some programs have different PMI structures</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              PMI Cost Examples
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Here are real-world examples of PMI costs:
            </p>

            <Card className="p-6 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold text-foreground">Loan Amount</th>
                      <th className="text-left p-3 font-bold text-foreground">Down Payment</th>
                      <th className="text-left p-3 font-bold text-foreground">PMI Rate</th>
                      <th className="text-left p-3 font-bold text-foreground">Annual PMI</th>
                      <th className="text-left p-3 font-bold text-foreground">Monthly PMI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">$200,000</td>
                      <td className="p-3 text-muted-foreground">3% ($6,000)</td>
                      <td className="p-3 text-muted-foreground">1.0%</td>
                      <td className="p-3 text-muted-foreground">$2,000</td>
                      <td className="p-3 text-muted-foreground">$167</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">$200,000</td>
                      <td className="p-3 text-muted-foreground">5% ($10,000)</td>
                      <td className="p-3 text-muted-foreground">0.75%</td>
                      <td className="p-3 text-muted-foreground">$1,500</td>
                      <td className="p-3 text-muted-foreground">$125</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">$200,000</td>
                      <td className="p-3 text-muted-foreground">10% ($20,000)</td>
                      <td className="p-3 text-muted-foreground">0.5%</td>
                      <td className="p-3 text-muted-foreground">$1,000</td>
                      <td className="p-3 text-muted-foreground">$83</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">$200,000</td>
                      <td className="p-3 text-muted-foreground">20% ($40,000)</td>
                      <td className="p-3 text-muted-foreground">N/A</td>
                      <td className="p-3 text-muted-foreground">$0</td>
                      <td className="p-3 text-muted-foreground">$0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                As you can see, PMI can add $83-$167 or more to your monthly payment. Over time, this adds up significantly, which is 
                why many buyers aim to remove PMI as soon as possible.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              How PMI is Paid
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              PMI can be paid in different ways:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Monthly PMI</h3>
                <p className="text-muted-foreground">
                  Most common method. PMI is added to your monthly mortgage payment and paid along with principal, interest, taxes, and 
                  insurance. This is the standard approach for most conventional loans.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Single Premium PMI (Lender-Paid)</h3>
                <p className="text-muted-foreground">
                  The lender pays PMI upfront, but you typically pay for it through a slightly higher interest rate. This can be beneficial 
                  if you plan to stay in the home long-term, as you don't have a separate PMI payment to remove.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Split Premium PMI</h3>
                <p className="text-muted-foreground">
                  You pay part of the PMI upfront and part monthly. This is less common but can reduce your monthly payment.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              How to Remove PMI
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The good news is that PMI doesn't last forever. Here are the ways to remove it:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">1. Automatic Removal at 22% Equity</h3>
                <p className="text-muted-foreground mb-3">
                  Under the Homeowners Protection Act, PMI must be automatically removed once you reach 22% equity based on your original 
                  purchase price, assuming you're current on payments. However, you must request removal at 20% equity.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Automatic:</strong> Removed at 22% equity based on original purchase price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Request at 20%:</strong> You can request removal once you reach 20% equity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Based on original price:</strong> This method uses your original purchase price, not current value</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">2. Request Removal Based on Current Value</h3>
                <p className="text-muted-foreground mb-3">
                  If your home has appreciated in value, you can request PMI removal once you have 20% equity based on the current appraised 
                  value, even if you haven't paid down 20% of the original loan.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>New appraisal required:</strong> You'll need to pay for a new appraisal (typically $300-$500)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Must have 20% equity:</strong> Based on the new appraised value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Timing:</strong> Usually requires at least 2 years of on-time payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Example:</strong> If you bought for $200,000 with 5% down and the home is now worth $220,000, you may have 20% equity</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">3. Make Additional Principal Payments</h3>
                <p className="text-muted-foreground">
                  You can accelerate PMI removal by making extra principal payments. Each additional payment reduces your loan balance faster, 
                  helping you reach 20% equity sooner. This is especially effective if combined with home appreciation.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">4. Refinance</h3>
                <p className="text-muted-foreground mb-3">
                  If you've built 20% equity and interest rates have dropped, refinancing can remove PMI and potentially lower your rate. 
                  However, refinancing has costs, so calculate whether the savings justify the expense.
                </p>
                <p className="text-muted-foreground">
                  <strong>Note:</strong> If you refinance with less than 20% equity, you'll still need PMI on the new loan.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              PMI vs. FHA MIP
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              It's important to understand the difference between PMI (for conventional loans) and MIP (Mortgage Insurance Premium for FHA loans):
            </p>

            <Card className="p-6 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold text-foreground">Feature</th>
                      <th className="text-left p-3 font-bold text-foreground">PMI (Conventional)</th>
                      <th className="text-left p-3 font-bold text-foreground">MIP (FHA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Can be removed</td>
                      <td className="p-3 text-muted-foreground">Yes, at 20% equity</td>
                      <td className="p-3 text-muted-foreground">Usually for life of loan (unless 10%+ down)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Upfront premium</td>
                      <td className="p-3 text-muted-foreground">Usually no</td>
                      <td className="p-3 text-muted-foreground">Yes, 1.75% of loan amount</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Annual premium</td>
                      <td className="p-3 text-muted-foreground">0.5-1.5% of loan amount</td>
                      <td className="p-3 text-muted-foreground">0.45-0.85% of loan amount</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">Down payment</td>
                      <td className="p-3 text-muted-foreground">3-19%</td>
                      <td className="p-3 text-muted-foreground">3.5% or 10%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Key difference:</strong> FHA MIP is typically for the life of the loan (unless you put 10%+ down and have it for 11 years), 
                while PMI can be removed once you reach 20% equity. This makes PMI more flexible for buyers who plan to build equity quickly.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Requesting PMI Removal
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              When you believe you've reached 20% equity, you can request PMI removal:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Steps to Remove PMI</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">1. Calculate Your Equity</h4>
                  <p className="text-muted-foreground">
                    Determine your current loan balance and home value. If your loan balance is 80% or less of your home's value, you likely 
                    qualify for PMI removal.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">2. Contact Your Lender</h4>
                  <p className="text-muted-foreground">
                    Call your loan servicer and request PMI removal. They'll explain their specific requirements and process.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">3. Provide Documentation</h4>
                  <p className="text-muted-foreground">
                    If using current value, you'll need a new appraisal. The lender may also require proof of on-time payments and that 
                    you've made significant improvements (if applicable).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">4. Wait for Approval</h4>
                  <p className="text-muted-foreground">
                    The lender will review your request and appraisal. If approved, PMI will be removed from your next payment.
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Lender Requirements for PMI Removal
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Lenders have specific requirements for PMI removal:
            </p>

            <Card className="p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>On-time payments:</strong> Typically need 24 months of on-time payments (if using current value method)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>20% equity:</strong> Must have at least 20% equity based on either original price or current value</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Appraisal:</strong> If using current value, a new appraisal is required (you pay for it)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>No second mortgage:</strong> Some lenders require no second mortgage or home equity loan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Property condition:</strong> The home must be in good condition (appraisal will verify this)</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Strategies to Minimize PMI Costs
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              While PMI enables homeownership with a smaller down payment, there are strategies to minimize its cost:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">1. Make a Larger Down Payment</h3>
                <p className="text-muted-foreground">
                  If possible, putting down 20% eliminates PMI entirely. However, if you can't afford 20%, even a slightly larger down 
                  payment (10% vs. 5%) can reduce your PMI rate and monthly cost.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">2. Improve Your Credit Score</h3>
                <p className="text-muted-foreground">
                  Better credit scores typically result in lower PMI rates. Work on improving your credit before applying for a mortgage 
                  to get the best PMI rate possible.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">3. Make Extra Principal Payments</h3>
                <p className="text-muted-foreground">
                  Accelerate your path to 20% equity by making additional principal payments. Even small extra payments can significantly 
                  reduce the time you pay PMI.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">4. Consider Lender-Paid PMI</h3>
                <p className="text-muted-foreground">
                  Some lenders offer lender-paid PMI, where they pay the premium but you get a slightly higher interest rate. This can be 
                  beneficial if you plan to stay in the home long-term, as you don't have a separate PMI payment to track and remove.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              The True Cost of PMI
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Understanding the total cost of PMI helps you make informed decisions:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Example: $200,000 Home, 5% Down, 1% PMI</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-foreground">Loan amount:</span>
                  <span className="text-foreground font-semibold">$190,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Annual PMI (1%):</span>
                  <span className="text-foreground font-semibold">$1,900</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Monthly PMI:</span>
                  <span className="text-foreground font-semibold">$158</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-foreground font-bold">Total PMI paid (until 20% equity):</span>
                  <span className="text-foreground font-bold">$3,000-$5,000+</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                This example shows that PMI can cost thousands of dollars over the time you pay it. However, it enables homeownership 
                sooner, and you can remove it once you reach 20% equity. The key is to plan for PMI removal and work toward building equity.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              PMI and Home Appreciation
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Home appreciation can help you remove PMI faster:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <p className="text-muted-foreground mb-4">
                <strong>Example:</strong> You buy a $200,000 home with 5% down ($10,000), leaving a $190,000 loan (95% LTV). After 2 years 
                of payments, you've paid down to $185,000, but the home has appreciated to $220,000.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground">Current loan balance:</span>
                  <span className="text-foreground font-semibold">$185,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Current home value:</span>
                  <span className="text-foreground font-semibold">$220,000</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-foreground font-bold">Your equity:</span>
                  <span className="text-foreground font-bold">$35,000 (16% of original, but 15.9% of current value)</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                In this scenario, you may be close to 20% equity based on current value. A new appraisal could show you have 20% equity, 
                allowing you to remove PMI even though you haven't paid down 20% of the original loan.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              PMI Tax Deduction
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              PMI premiums may be tax-deductible, but with limitations:
            </p>

            <Card className="p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Income limits:</strong> Adjusted Gross Income (AGI) must be $100,000 or less ($50,000 if married filing separately)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Phase-out:</strong> Deduction phases out between $100,000-$109,000 AGI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Itemization required:</strong> You must itemize deductions to claim PMI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Annual renewal:</strong> This deduction must be renewed by Congress and may not be available every year</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Consult a tax professional:</strong> Tax laws change, so consult with a tax advisor for current information</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Should You Avoid PMI?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              While PMI adds to your monthly payment, it's not always bad:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">When PMI Makes Sense</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You can't afford 20% down but can afford the monthly payment with PMI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Home prices are rising, and waiting to save 20% could cost more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You can remove PMI within a few years through payments or appreciation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You want to start building equity and stop renting</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">When to Wait for 20% Down</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You're close to having 20% down (within 6-12 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Home prices are stable or declining</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You want to minimize your monthly payment from the start</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You prefer to have more cash reserves after closing</span>
                  </li>
                </ul>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              PMI and Loan Programs
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Different loan programs handle mortgage insurance differently:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Conventional loans:</strong> Use PMI, can be removed at 20% equity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>FHA loans:</strong> Use MIP (Mortgage Insurance Premium), usually for life of loan unless 10%+ down</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>VA loans:</strong> No PMI or MIP required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>USDA loans:</strong> Have a guarantee fee (similar to PMI), but typically lower cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>MSHDA loans:</strong> May have PMI depending on the specific program and down payment</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Planning for PMI Removal
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              If you're buying with less than 20% down, plan for PMI removal:
            </p>

            <Card className="p-6 mb-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">1. Track Your Equity</h4>
                  <p className="text-muted-foreground">
                    Monitor your loan balance and home value. Many lenders provide online tools to track your equity. Once you approach 20%, 
                    start planning for PMI removal.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">2. Make Extra Payments</h4>
                  <p className="text-muted-foreground">
                    If your budget allows, make additional principal payments to accelerate your path to 20% equity. Even $50-$100 extra 
                    per month can significantly reduce the time you pay PMI.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">3. Monitor Home Values</h4>
                  <p className="text-muted-foreground">
                    If your home appreciates significantly, you may be able to remove PMI based on current value even if you haven't paid 
                    down 20% of the original loan. Keep an eye on comparable sales in your area.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">4. Set a Reminder</h4>
                  <p className="text-muted-foreground">
                    Set a calendar reminder to check your equity after 2 years of payments. Many homeowners forget to request PMI removal 
                    and continue paying unnecessarily.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Learn More About PMI</h2>
            <p className="text-xl text-muted-foreground">Connect with a lender to understand PMI for your specific loan.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UnderstandingPMI;

