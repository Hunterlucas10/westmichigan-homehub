import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Shield, DollarSign, FileText, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const LowCreditScoreHomeBuying = () => {
  const loanOptions = [
    {
      icon: Shield,
      title: "FHA Loans",
      creditScore: "580+ (or 500-579 with 10% down)",
      description: "FHA loans are government-backed and designed for buyers with lower credit scores. They offer flexible qualification requirements and allow credit scores as low as 500.",
      benefits: [
        "Credit scores as low as 500 accepted (with 10% down)",
        "580+ credit score allows 3.5% down payment",
        "More lenient debt-to-income ratios",
        "Gift funds allowed for down payment"
      ]
    },
    {
      icon: DollarSign,
      title: "VA Loans",
      creditScore: "No minimum (lender-dependent)",
      description: "If you're a veteran or active military, VA loans don't have a strict credit score requirement. Lenders typically look for scores around 620+, but some may be more flexible.",
      benefits: [
        "No official minimum credit score",
        "Zero down payment required",
        "No PMI required",
        "More flexible underwriting"
      ],
      link: "/va-loans"
    },
    {
      icon: TrendingUp,
      title: "Credit Improvement Programs",
      creditScore: "Varies",
      description: "Some lenders offer credit builder programs that help you improve your score while preparing to buy. These programs can help you qualify for better rates.",
      benefits: [
        "Work with lenders to improve your score",
        "Access to credit counseling",
        "Structured path to homeownership",
        "May qualify for better programs after improvement"
      ]
    }
  ];

  const improvementTips = [
    {
      title: "Pay down existing debt",
      description: "Reducing your credit utilization ratio (the amount you owe vs. your credit limit) can quickly improve your score. Aim to keep balances below 30% of your credit limits."
    },
    {
      title: "Make all payments on time",
      description: "Payment history is the biggest factor in your credit score. Set up automatic payments to ensure you never miss a due date."
    },
    {
      title: "Don't close old accounts",
      description: "Length of credit history matters. Keep older accounts open, even if you're not using them regularly."
    },
    {
      title: "Check for errors",
      description: "Review your credit reports from all three bureaus (Equifax, Experian, TransUnion) and dispute any errors you find."
    },
    {
      title: "Avoid new credit applications",
      description: "Hard inquiries from applying for new credit can temporarily lower your score. Avoid applying for new credit cards or loans right before buying."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>How to Buy a Home with a Low Credit Score | West Michigan Guide</title>
        <meta 
          name="description" 
          content="Your credit isn't perfect? No problem. Learn which loan programs are available for buyers with low credit scores in West Michigan and how to improve your chances of approval." 
        />
        <link rel="canonical" href={`${SITE_URL}/blog/low-credit-score-home-buying`} />
        <meta property="og:title" content="How to Buy a Home with a Low Credit Score | West Michigan Guide" />
        <meta property="og:description" content="Learn which loan programs are available for buyers with low credit scores in West Michigan and how to improve your approval chances." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/low-credit-score-home-buying`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-low-credit-score.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Buy a Home with a Low Credit Score" />
        <meta name="twitter:description" content="Learn which loan programs are available for buyers with low credit scores in West Michigan." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-low-credit-score.jpg`} />
      </Helmet>
      <ArticleSchema 
        title="How to Buy a Home with a Low Credit Score | West Michigan Guide"
        description="Your credit isn't perfect? No problem. Learn which loan programs are available for buyers with low credit scores in West Michigan and how to improve your chances of approval."
        url="/blog/low-credit-score-home-buying"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Learning Center", url: "/learning-center" },
        { name: "How to Buy a Home with a Low Credit Score", url: "/blog/low-credit-score-home-buying" }
      ]} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How to Buy a Home with a Low Credit Score
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your credit isn't perfect? No problem. Learn which loan programs are available and how to improve your chances of approval in West Michigan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Many potential homebuyers assume that a low credit score means they can't buy a home. The good news? 
              That's not true. While a higher credit score gives you more options and better rates, there are several 
              loan programs designed specifically for buyers with lower credit scores in West Michigan.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Loan Programs for Low Credit Scores
            </h2>

            <div className="space-y-6 mb-12">
              {loanOptions.map((option, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <option.icon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{option.title}</h3>
                      <p className="text-accent font-semibold mb-3">Minimum Credit Score: {option.creditScore}</p>
                      <p className="text-muted-foreground mb-4">{option.description}</p>
                      <ul className="space-y-2">
                        {option.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      {option.link && (
                        <Link to={option.link} className="text-primary hover:underline font-medium mt-4 inline-flex items-center gap-1">
                          Learn more <ChevronRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Tips to Improve Your Credit Score Before Buying
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Even if you qualify for a loan with your current score, improving it can save you thousands of dollars 
              in interest over the life of your mortgage. Here are proven strategies:
            </p>

            <div className="space-y-4 mb-12">
              {improvementTips.map((tip, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.description}</p>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Working with Lenders Who Understand Low Credit Scores
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Not all lenders are created equal when it comes to working with buyers who have lower credit scores. 
              Some lenders specialize in FHA loans and have more experience with alternative credit evaluation. 
              In West Michigan, our partner lenders understand that a credit score is just one piece of your financial picture.
            </p>

            <Card className="p-6 bg-muted mb-12">
              <h3 className="text-xl font-bold text-foreground mb-3">What Lenders Look At Beyond Credit Score</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Payment history:</strong> Consistent on-time payments can offset a lower score</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Employment stability:</strong> Long-term employment shows reliability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Debt-to-income ratio:</strong> Lower DTI can help compensate for credit issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Savings:</strong> Having reserves shows financial responsibility</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Understanding Credit Score Ranges
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Knowing where your credit score falls helps you understand your options:
            </p>

            <Card className="p-6 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold text-foreground">Credit Score Range</th>
                      <th className="text-left p-3 font-bold text-foreground">Rating</th>
                      <th className="text-left p-3 font-bold text-foreground">Loan Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">500-579</td>
                      <td className="p-3 text-muted-foreground">Poor</td>
                      <td className="p-3 text-muted-foreground">FHA (10% down), some credit improvement programs</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">580-619</td>
                      <td className="p-3 text-muted-foreground">Fair</td>
                      <td className="p-3 text-muted-foreground">FHA (3.5% down), some conventional (higher rates)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">620-679</td>
                      <td className="p-3 text-muted-foreground">Fair to Good</td>
                      <td className="p-3 text-muted-foreground">FHA, conventional, MSHDA (640+), VA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">680+</td>
                      <td className="p-3 text-muted-foreground">Good to Excellent</td>
                      <td className="p-3 text-muted-foreground">All loan types, best rates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Alternative Credit Documentation
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              If you have a limited credit history or no traditional credit score, some programs accept alternative credit:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">What Counts as Alternative Credit</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Rent payments:</strong> 12-24 months of on-time rent payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Utility bills:</strong> Electric, gas, water, internet, phone bills</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Insurance payments:</strong> Auto, renters, or health insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Cell phone bills:</strong> Regular monthly payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Child care payments:</strong> Regular daycare or childcare expenses</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Documentation needed:</strong> You'll need to provide 12-24 months of payment history, typically through bank 
                statements, canceled checks, or payment receipts. FHA loans are particularly flexible with alternative credit.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              How Much Can You Improve Your Score?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Understanding realistic timelines for credit improvement helps you plan:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Wins (1-3 Months)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Pay down credit card balances:</strong> Can improve score by 20-50 points</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Dispute errors:</strong> Removing incorrect negative items can boost score</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Become an authorized user:</strong> If someone adds you to their good credit account</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Medium-Term Improvements (3-6 Months)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Consistent on-time payments:</strong> Builds positive payment history</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Pay off collections:</strong> Can improve score, though paid collections may still show</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Reduce overall debt:</strong> Lowering debt-to-income ratio helps</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Long-Term Building (6-12+ Months)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Age of accounts:</strong> Time is the only way to improve this factor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Diversify credit mix:</strong> Having different types of credit helps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Wait for negative items to age:</strong> Late payments and collections have less impact over time</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Cost of Buying with Low Credit
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Lower credit scores typically mean higher costs, but understanding these costs helps you make informed decisions:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Higher Interest Rates</h3>
              <p className="text-muted-foreground mb-3">
                Lower credit scores result in higher interest rates, which can cost thousands over the life of the loan:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold text-foreground">Credit Score</th>
                      <th className="text-left p-3 font-bold text-foreground">Estimated Rate</th>
                      <th className="text-left p-3 font-bold text-foreground">Monthly Payment*</th>
                      <th className="text-left p-3 font-bold text-foreground">Total Interest*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">760+</td>
                      <td className="p-3 text-muted-foreground">6.5%</td>
                      <td className="p-3 text-muted-foreground">$1,264</td>
                      <td className="p-3 text-muted-foreground">$255,089</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">700-759</td>
                      <td className="p-3 text-muted-foreground">6.75%</td>
                      <td className="p-3 text-muted-foreground">$1,297</td>
                      <td className="p-3 text-muted-foreground">$266,920</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">680-699</td>
                      <td className="p-3 text-muted-foreground">7.0%</td>
                      <td className="p-3 text-muted-foreground">$1,331</td>
                      <td className="p-3 text-muted-foreground">$279,168</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">620-679</td>
                      <td className="p-3 text-muted-foreground">7.5%</td>
                      <td className="p-3 text-muted-foreground">$1,399</td>
                      <td className="p-3 text-muted-foreground">$303,640</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">580-619</td>
                      <td className="p-3 text-muted-foreground">8.0%</td>
                      <td className="p-3 text-muted-foreground">$1,468</td>
                      <td className="p-3 text-muted-foreground">$328,480</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                *Based on $200,000 loan, 30-year fixed rate. Rates are estimates and vary by lender and market conditions. 
                This shows how a 1.5% rate difference can cost $73,391 more in interest over 30 years.
              </p>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Higher Mortgage Insurance</h3>
              <p className="text-muted-foreground mb-3">
                Lower credit scores also result in higher PMI or MIP costs:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>FHA MIP:</strong> Higher upfront and annual MIP for lower credit scores</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Conventional PMI:</strong> Can be 0.5-1.5% annually, higher for lower scores</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Example:</strong> On a $200,000 loan, PMI could be $83-$250/month depending on credit score</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Should You Buy Now or Wait?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Deciding whether to buy now with a lower credit score or wait to improve it depends on several factors:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Buy Now If:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Home prices are rising faster than you can improve your credit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You qualify for a loan program that works with your current score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You can afford the higher monthly payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You plan to refinance when your credit improves</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Wait to Improve Credit If:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You're close to the next credit tier (e.g., 615 and need 620)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Home prices are stable or declining</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">The rate difference would save you significant money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">You can improve your score within 3-6 months</span>
                  </li>
                </ul>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Next Steps
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              If you're ready to explore your options, connect with a local West Michigan lender who specializes in 
              working with buyers who have lower credit scores. They can help you understand which programs you qualify 
              for and create a plan to improve your credit if needed.
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">What to Ask Your Lender</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">What loan programs am I eligible for with my current credit score?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">What would my interest rate and monthly payment be?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">How much would I save if I improved my credit by 20-30 points?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Do you accept alternative credit documentation?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Can you help me create a credit improvement plan?</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get Pre-Qualified Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with a local lender who understands low credit score loans.
            </p>
          </div>
          <Card className="p-8">
            <LeadForm />
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">FHA Loans Explained</h3>
              <p className="text-muted-foreground mb-4">
                Everything you need to know about FHA loans, including benefits, requirements, and how they compare to conventional mortgages.
              </p>
              <Link to="/blog/fha-loans-explained" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read Article <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">Credit Score Requirements by Loan Type</h3>
              <p className="text-muted-foreground mb-4">
                Understand the credit score requirements for different loan programs available in West Michigan.
              </p>
              <Link to="/learning-center" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Browse Articles <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LowCreditScoreHomeBuying;

