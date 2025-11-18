import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingDown, DollarSign, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const RefinancingFirstHome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Refinancing Your First Home: When to Consider It | West Michigan</title>
        <meta name="description" content="Learn when to refinance your first home in West Michigan. Understand benefits, costs, and whether refinancing makes sense for your situation." />
        <link rel="canonical" href={`${SITE_URL}/blog/refinancing-first-home`} />
        <meta property="og:title" content="Refinancing Your First Home: When to Consider It" />
        <meta property="og:description" content="Learn when to refinance your first home in West Michigan and whether it makes sense for your situation." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/refinancing-first-home`} />
      </Helmet>
      <ArticleSchema title="Refinancing Your First Home: When to Consider It | West Michigan" description="Learn when to refinance your first home in West Michigan. Understand benefits, costs, and whether refinancing makes sense." url="/blog/refinancing-first-home" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Refinancing First Home", url: "/blog/refinancing-first-home" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Refinancing Your First Home: When to Consider It</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn when refinancing makes sense and whether it's right for your situation in West Michigan.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Refinancing your first home means replacing your existing mortgage with a new one, typically to get a lower interest rate, 
              change your loan term, or access home equity. While refinancing can save you money and provide financial flexibility, it's 
              not always the right move. Understanding when refinancing makes sense and how to calculate whether it's worth it can help 
              you make an informed decision for your West Michigan home.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              What is Refinancing?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              When you refinance, you essentially take out a new mortgage to pay off your existing one. The new loan may have different 
              terms, a different interest rate, or a different loan amount. You'll go through a similar process as when you first bought 
              your home, including application, appraisal, and closing, but you're not buying a new property—you're replacing your current mortgage.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Types of Refinancing
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              There are several types of refinancing, each serving different purposes:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Rate-and-Term Refinance</h3>
                <p className="text-muted-foreground mb-3">
                  This is the most common type of refinance. You're changing your interest rate, loan term, or both, but not increasing 
                  your loan amount. This is used to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Lower your interest rate and monthly payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Shorten your loan term (e.g., from 30 years to 15 years)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Switch from an adjustable-rate to a fixed-rate mortgage</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Cash-Out Refinance</h3>
                <p className="text-muted-foreground mb-3">
                  With a cash-out refinance, you take out a new loan for more than you currently owe and receive the difference in cash. 
                  This allows you to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Access home equity for home improvements, debt consolidation, or other expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Potentially get a lower rate while accessing cash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Note:</strong> This increases your loan balance and monthly payment</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Cash-In Refinance</h3>
                <p className="text-muted-foreground">
                  Less common, this involves bringing cash to closing to pay down your loan balance. This might make sense if you want 
                  to remove PMI, get a better rate, or shorten your loan term.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              When to Consider Refinancing
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Refinancing can be beneficial in several situations:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">1. Interest Rates Have Dropped</h3>
                <p className="text-muted-foreground mb-3">
                  If mortgage rates have dropped significantly since you bought your home, refinancing can lower your monthly payment and 
                  total interest paid. As a general rule, consider refinancing if rates have dropped by 1% or more.
                </p>
                <p className="text-muted-foreground">
                  <strong>Example:</strong> If you have a $200,000 mortgage at 7% and rates drop to 6%, refinancing could save you 
                  approximately $120 per month. Over 30 years, that's over $43,000 in savings.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">2. Your Credit Score Has Improved</h3>
                <p className="text-muted-foreground">
                  If your credit score has improved significantly since you bought your home, you may qualify for a better interest rate. 
                  Even if market rates haven't changed, your improved credit profile could result in a lower rate and monthly payment.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">3. You Want to Remove PMI</h3>
                <p className="text-muted-foreground mb-3">
                  If your home has appreciated in value or you've paid down your mortgage, you may now have 20% equity. Refinancing can 
                  remove PMI from your monthly payment, saving you money each month.
                </p>
                <p className="text-muted-foreground">
                  <strong>Alternative:</strong> You may be able to remove PMI without refinancing by requesting a new appraisal once you 
                  have 20% equity. However, if rates have also dropped, refinancing might be the better option.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">4. You Want to Shorten Your Loan Term</h3>
                <p className="text-muted-foreground">
                  If your financial situation has improved, you might want to refinance from a 30-year to a 15-year mortgage. This increases 
                  your monthly payment but saves significant interest over the life of the loan and helps you build equity faster.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">5. You Need to Access Home Equity</h3>
                <p className="text-muted-foreground">
                  A cash-out refinance allows you to tap into your home's equity for major expenses like home improvements, debt consolidation, 
                  or education costs. This can be more cost-effective than other borrowing options, but it increases your mortgage balance.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">6. You Have an Adjustable-Rate Mortgage (ARM)</h3>
                <p className="text-muted-foreground">
                  If you have an ARM and want the stability of a fixed-rate mortgage, or if your ARM is about to adjust to a higher rate, 
                  refinancing to a fixed-rate loan can provide peace of mind and potentially lower payments.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Understanding Refinancing Costs
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Refinancing isn't free. You'll pay closing costs similar to when you first bought your home, typically 2-5% of your loan amount. 
              Understanding these costs is crucial to determining if refinancing makes financial sense:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Typical Refinancing Costs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Loan origination fee:</strong> 0.5-1% of loan amount ($1,000-$2,000 on a $200,000 loan)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Appraisal:</strong> $300-$500</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Title insurance and search:</strong> $500-$1,500</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Recording fees:</strong> $50-$200</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Credit report and other fees:</strong> $200-$500</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Total:</strong> Typically $4,000-$8,000 on a $200,000 loan</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Calculating the Break-Even Point
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The break-even point is when your monthly savings equal the cost of refinancing. This helps you determine if refinancing 
              makes financial sense:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Break-Even Calculation</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Formula:</strong> Total closing costs ÷ Monthly savings = Break-even point (in months)
              </p>
              <div className="space-y-3 mb-4">
                <div className="p-4 bg-muted rounded">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Example:</strong></p>
                  <p className="text-foreground mb-2">Closing costs: $6,000</p>
                  <p className="text-foreground mb-2">Monthly savings: $150</p>
                  <p className="text-foreground font-semibold">Break-even: $6,000 ÷ $150 = 40 months (3.3 years)</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                In this example, you'd need to stay in the home for at least 40 months to recoup the refinancing costs. If you plan to 
                move sooner, refinancing may not make sense unless you can roll the costs into the loan or get a no-cost refinance.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              No-Cost Refinancing
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Some lenders offer "no-cost" refinancing, but this doesn't mean it's actually free:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Lender credits:</strong> The lender pays your closing costs, but you typically get a slightly higher interest rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Rolled into loan:</strong> Closing costs are added to your loan balance, so you pay them over time with interest</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>When it makes sense:</strong> If you plan to move soon or don't have cash for closing costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Consideration:</strong> Compare the total cost over the life of the loan, not just the upfront cost</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              The Refinancing Process
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Refinancing follows a similar process to getting your original mortgage:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">1. Application and Pre-approval (1-3 days)</h4>
                  <p className="text-muted-foreground">
                    You'll complete a mortgage application and provide financial documentation. The lender will pull your credit and give 
                    you a rate quote.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">2. Appraisal (1-2 weeks)</h4>
                  <p className="text-muted-foreground">
                    The lender will order an appraisal to determine your home's current value. This is required to calculate your loan-to-value 
                    ratio and ensure you have sufficient equity.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">3. Underwriting (1-2 weeks)</h4>
                  <p className="text-muted-foreground">
                    The lender reviews your application, verifies your income and assets, and makes a decision on your loan.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">4. Closing (30-45 days total)</h4>
                  <p className="text-muted-foreground">
                    You'll sign closing documents, similar to when you first bought the home. The new loan pays off your old one, and you 
                    start making payments on the new mortgage.
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              When NOT to Refinance
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Refinancing isn't always the right choice. Consider these situations where it might not make sense:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">You Plan to Move Soon</h3>
                <p className="text-muted-foreground">
                  If you're planning to move within a few years, you may not recoup the closing costs. Calculate your break-even point to 
                  ensure you'll be in the home long enough to benefit.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">You've Had the Loan Less Than 2 Years</h3>
                <p className="text-muted-foreground">
                  If you recently bought your home, you may not have built enough equity or the rate difference may not be significant enough 
                  to justify the costs. However, if rates have dropped dramatically, it might still make sense.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Your Credit Has Worsened</h3>
                <p className="text-muted-foreground">
                  If your credit score has dropped since you bought your home, you may not qualify for a better rate, or you might get a 
                  worse rate. In this case, focus on improving your credit before refinancing.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">You're Close to Paying Off Your Mortgage</h3>
                <p className="text-muted-foreground">
                  If you're in the final years of your mortgage, refinancing may not make sense because most of your payment is going toward 
                  principal anyway. You'd be resetting the clock and paying more interest over time.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Refinancing FHA and VA Loans
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Special refinancing programs are available for government-backed loans:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">FHA Streamline Refinance</h3>
                <p className="text-muted-foreground mb-3">
                  This program allows you to refinance an existing FHA loan with minimal documentation and no appraisal in some cases. Benefits include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Reduced documentation requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">No appraisal required (in some cases)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Lower closing costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Must result in a "net tangible benefit" (lower payment, shorter term, or lower rate)</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">VA Interest Rate Reduction Refinance Loan (IRRRL)</h3>
                <p className="text-muted-foreground mb-3">
                  Also known as a VA Streamline, this program makes refinancing easier for veterans:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">No appraisal or income verification required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Lower closing costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Can roll closing costs into the loan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Must lower your payment or interest rate</span>
                  </li>
                </ul>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Refinancing to Remove PMI
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              If you originally put down less than 20% and are paying PMI, refinancing can help remove it:
            </p>

            <Card className="p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Home appreciation:</strong> If your home has increased in value, you may now have 20% equity even if you haven't paid down much principal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Principal payments:</strong> If you've paid down enough of your mortgage to reach 20% equity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Combination:</strong> A combination of appreciation and principal payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Note:</strong> If you can remove PMI and get a lower rate, refinancing can provide double savings</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Shopping for a Refinance
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Just like when you first got your mortgage, it's important to shop around:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Compare multiple lenders:</strong> Get quotes from at least 3-4 lenders, including your current lender</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Look at APR, not just rate:</strong> APR includes fees and gives you the true cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Consider your current lender:</strong> They may offer streamlined refinancing with lower costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Calculate total savings:</strong> Don't just look at monthly payment—consider total interest paid over the life of the loan</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Example: Refinancing Scenario
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Here's a real-world example to help you understand the math:
            </p>

            <Card className="p-6 mb-8">
              <p className="text-muted-foreground mb-4">
                <strong>Original loan:</strong> $200,000 at 7% for 30 years = $1,331/month
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Current balance:</strong> $190,000 (after 2 years of payments)
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>New loan:</strong> $190,000 at 6% for 30 years = $1,139/month
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-foreground">Monthly savings:</span>
                  <span className="text-foreground font-semibold">$192</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Closing costs:</span>
                  <span className="text-foreground font-semibold">$6,000</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-foreground font-bold">Break-even point:</span>
                  <span className="text-foreground font-bold">31 months (2.6 years)</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                In this scenario, if you plan to stay in the home for more than 2.6 years, refinancing makes sense. You'd save $192 per 
                month and recoup your costs in less than 3 years.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Explore Refinancing Options</h2>
            <p className="text-xl text-muted-foreground">Connect with a lender to see if refinancing makes sense for you.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RefinancingFirstHome;

