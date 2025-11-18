import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Shield, DollarSign, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const CreditScoreRequirementsByLoanType = () => {
  const loanTypes = [
    { type: "FHA Loans", score: "500-579 (10% down) or 580+ (3.5% down)", icon: Shield },
    { type: "VA Loans", score: "No minimum (lender-dependent, typically 620+)", icon: DollarSign },
    { type: "USDA Loans", score: "640+ typically", icon: TrendingUp },
    { type: "Conventional 97", score: "620+ typically", icon: TrendingUp },
    { type: "MSHDA MI Home Loan", score: "640+ (660 for manufactured homes)", icon: DollarSign }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Credit Score Requirements by Loan Type | West Michigan Guide</title>
        <meta name="description" content="Understand credit score requirements for FHA, VA, USDA, conventional, and MSHDA loans in West Michigan. Learn which loan type fits your credit profile." />
        <link rel="canonical" href={`${SITE_URL}/blog/credit-score-requirements-by-loan-type`} />
        <meta property="og:title" content="Credit Score Requirements by Loan Type" />
        <meta property="og:description" content="Understand credit score requirements for different loan types in West Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/credit-score-requirements-by-loan-type`} />
      </Helmet>
      <ArticleSchema title="Credit Score Requirements by Loan Type | West Michigan Guide" description="Understand credit score requirements for different loan types in West Michigan." url="/blog/credit-score-requirements-by-loan-type" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Credit Score Requirements", url: "/blog/credit-score-requirements-by-loan-type" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Credit Score Requirements by Loan Type</h1>
            <p className="text-xl text-muted-foreground mb-8">Understand which loan type fits your credit profile in West Michigan.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Your credit score is one of the most important factors lenders consider when evaluating your mortgage application. Different 
              loan types have different credit score requirements, and understanding these requirements helps you identify which programs 
              you qualify for and which ones might be out of reach—at least until you improve your credit. In West Michigan, there are 
              several loan options available, each with its own credit score thresholds.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Understanding Credit Scores
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Before diving into loan requirements, it's important to understand how credit scores work. Lenders typically use FICO scores, 
              which range from 300 to 850. Your score is calculated based on:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Payment history (35%):</strong> Whether you pay bills on time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Amounts owed (30%):</strong> Credit utilization ratio (how much you owe vs. credit limits)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Length of credit history (15%):</strong> How long you've had credit accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Credit mix (10%):</strong> Types of credit you have (credit cards, loans, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>New credit (10%):</strong> Recent credit inquiries and new accounts</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Credit Score Requirements by Loan Type
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Here's a detailed breakdown of credit score requirements for each loan type available in West Michigan:
            </p>

            <div className="space-y-6 mb-8">
              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3">FHA Loans</h3>
                    <p className="text-accent font-semibold text-lg mb-3">Credit Score: 500-579 (10% down) or 580+ (3.5% down)</p>
                    <p className="text-muted-foreground mb-4">
                      FHA loans are the most flexible when it comes to credit scores, making them ideal for buyers with lower credit. The minimum 
                      credit score is 500, but the down payment requirement changes based on your score.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>580+ credit score:</strong> Only 3.5% down payment required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>500-579 credit score:</strong> 10% down payment required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Below 500:</strong> Generally not eligible for FHA loans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Note:</strong> Individual lenders may have higher minimums (often 620+) even though FHA allows lower scores</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <DollarSign className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3">VA Loans</h3>
                    <p className="text-accent font-semibold text-lg mb-3">Credit Score: No official minimum (lender-dependent, typically 620+)</p>
                    <p className="text-muted-foreground mb-4">
                      The VA doesn't set a minimum credit score requirement, but individual lenders do. Most lenders require at least 620, though 
                      some may be more flexible for veterans with strong financial profiles.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Typical requirement:</strong> 620+ for most lenders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Some lenders:</strong> May accept scores as low as 580 with compensating factors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Benefits:</strong> 0% down payment, no PMI, competitive rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Eligibility:</strong> Must be a veteran, active-duty service member, or eligible surviving spouse</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3">USDA Loans</h3>
                    <p className="text-accent font-semibold text-lg mb-3">Credit Score: 640+ typically</p>
                    <p className="text-muted-foreground mb-4">
                      USDA loans are designed for rural and suburban homebuyers and typically require a credit score of 640 or higher. Some lenders 
                      may accept lower scores with strong compensating factors.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Standard requirement:</strong> 640+ credit score</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Benefits:</strong> 0% down payment, low mortgage insurance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Income limits:</strong> Must meet area median income requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Property location:</strong> Must be in a USDA-eligible rural or suburban area</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Conventional Loans</h3>
                    <p className="text-accent font-semibold text-lg mb-3">Credit Score: 620+ typically (varies by program)</p>
                    <p className="text-muted-foreground mb-4">
                      Conventional loans are not backed by the government and typically have stricter credit requirements. However, there are 
                      programs for buyers with lower scores.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Standard conventional:</strong> 620+ credit score</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Conventional 97 (3% down):</strong> 620+ credit score, first-time buyer program</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Fannie Mae HomeReady:</strong> 620+ credit score, flexible income requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Best rates:</strong> Typically require 740+ credit score</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <DollarSign className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3">MSHDA MI Home Loan</h3>
                    <p className="text-accent font-semibold text-lg mb-3">Credit Score: 640+ (660 for manufactured homes)</p>
                    <p className="text-muted-foreground mb-4">
                      MSHDA's MI Home Loan program helps first-time buyers in Michigan with down payment assistance and below-market rates. 
                      Credit requirements are moderate.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Standard homes:</strong> 640+ credit score</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Manufactured homes:</strong> 660+ credit score</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Benefits:</strong> Up to $10,000 down payment assistance, below-market rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Requirements:</strong> Must complete homebuyer education, meet income limits</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              How Credit Scores Affect Your Rate
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your credit score doesn't just determine whether you qualify—it also affects the interest rate you'll receive. Generally, 
              higher scores mean lower rates:
            </p>

            <Card className="p-6 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold text-foreground">Credit Score Range</th>
                      <th className="text-left p-3 font-bold text-foreground">Rate Impact</th>
                      <th className="text-left p-3 font-bold text-foreground">Example Rate Difference*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">760-850 (Excellent)</td>
                      <td className="p-3 text-muted-foreground">Best rates available</td>
                      <td className="p-3 text-muted-foreground">Base rate</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">700-759 (Very Good)</td>
                      <td className="p-3 text-muted-foreground">Slightly higher rates</td>
                      <td className="p-3 text-muted-foreground">+0.125-0.25%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">680-699 (Good)</td>
                      <td className="p-3 text-muted-foreground">Moderate rate increase</td>
                      <td className="p-3 text-muted-foreground">+0.25-0.5%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">620-679 (Fair)</td>
                      <td className="p-3 text-muted-foreground">Significant rate increase</td>
                      <td className="p-3 text-muted-foreground">+0.5-1%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">Below 620</td>
                      <td className="p-3 text-muted-foreground">Limited options, higher rates</td>
                      <td className="p-3 text-muted-foreground">May need FHA or specialized programs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                *Rate differences are approximate and vary by lender and market conditions. A 0.5% rate difference on a $200,000 loan 
                can mean over $20,000 in additional interest over 30 years.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Lender Variations
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              It's important to understand that minimum credit score requirements can vary between lenders, even for the same loan type:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Why Lenders Set Higher Minimums</h3>
                <p className="text-muted-foreground">
                  Even though FHA allows credit scores as low as 500, many lenders set their own minimums at 620 or higher. This is because 
                  lenders want to reduce their risk and may have their own underwriting guidelines. Shopping around with multiple lenders 
                  can help you find one willing to work with your credit score.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Compensating Factors</h3>
                <p className="text-muted-foreground">
                  Some lenders may accept lower credit scores if you have strong compensating factors, such as:
                </p>
                <ul className="space-y-2 mt-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Large down payment (20% or more)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Low debt-to-income ratio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Significant cash reserves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Stable employment history</span>
                  </li>
                </ul>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Improving Your Credit Score
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              If your credit score is below the requirements for your desired loan type, there are steps you can take to improve it:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">1. Pay All Bills on Time</h3>
                <p className="text-muted-foreground">
                  Payment history is the biggest factor in your credit score. Set up automatic payments or reminders to ensure you never 
                  miss a due date. Even one late payment can significantly impact your score.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">2. Reduce Credit Card Balances</h3>
                <p className="text-muted-foreground">
                  Keep your credit utilization ratio below 30%. If you have $10,000 in credit limits, try to keep balances under $3,000. 
                  Paying down high balances can quickly improve your score.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">3. Don't Close Old Accounts</h3>
                <p className="text-muted-foreground">
                  Length of credit history matters. Keep older accounts open, even if you're not using them regularly. Closing old 
                  accounts can shorten your credit history and lower your score.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">4. Check for Errors</h3>
                <p className="text-muted-foreground">
                  Review your credit reports from all three bureaus (Equifax, Experian, TransUnion) and dispute any errors. Incorrect 
                  information can drag down your score unnecessarily.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">5. Avoid New Credit Applications</h3>
                <p className="text-muted-foreground">
                  Hard inquiries from applying for new credit can temporarily lower your score. Avoid opening new credit cards or loans 
                  in the months before applying for a mortgage.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Which Loan Type is Right for Your Credit Score?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Use this guide to identify which loan types you might qualify for based on your credit score:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">Credit Score 500-579</h4>
                  <p className="text-muted-foreground">
                    Your options are limited, but FHA loans may be available with a 10% down payment. Focus on improving your score to 
                    access better programs and rates.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Credit Score 580-619</h4>
                  <p className="text-muted-foreground">
                    FHA loans with 3.5% down are available. Some VA lenders may consider you. Work on improving to 620+ to access more 
                    conventional options.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Credit Score 620-639</h4>
                  <p className="text-muted-foreground">
                    You qualify for FHA, VA (if eligible), and some conventional programs like Conventional 97. MSHDA may be an option 
                    if you can reach 640.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Credit Score 640-679</h4>
                  <p className="text-muted-foreground">
                    Most loan programs are available, including MSHDA, USDA, FHA, VA, and conventional loans. You'll get better rates 
                    as you approach 680+.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Credit Score 680+</h4>
                  <p className="text-muted-foreground">
                    All loan programs are available, and you'll receive competitive rates. Scores of 740+ typically get the best rates available.
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Getting Your Credit Score
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Before applying for a mortgage, it's important to know your credit score. You can get it from several sources:
            </p>

            <Card className="p-6 mb-8">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Free credit reports:</strong> AnnualCreditReport.com provides free reports from all three bureaus once per year</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Credit monitoring services:</strong> Many banks and credit card companies provide free credit scores</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Mortgage pre-approval:</strong> Your lender will pull your credit and tell you your score</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Note:</strong> The score you see may differ slightly from what lenders see, as they use specific mortgage credit scores</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Your Best Loan Option</h2>
            <p className="text-xl text-muted-foreground">Connect with a lender to see which programs you qualify for.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CreditScoreRequirementsByLoanType;

