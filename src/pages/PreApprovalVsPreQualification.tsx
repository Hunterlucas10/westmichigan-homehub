import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, FileCheck, TrendingUp, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const PreApprovalVsPreQualification = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Pre-approval vs Pre-qualification: What's the Difference? | West Michigan</title>
        <meta name="description" content="Understand the difference between pre-approval and pre-qualification for mortgages in West Michigan. Learn which one you need and when to get it." />
        <link rel="canonical" href={`${SITE_URL}/blog/pre-approval-vs-pre-qualification`} />
        <meta property="og:title" content="Pre-approval vs Pre-qualification: What's the Difference?" />
        <meta property="og:description" content="Understand the difference between pre-approval and pre-qualification for mortgages in West Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/pre-approval-vs-pre-qualification`} />
      </Helmet>
      <ArticleSchema title="Pre-approval vs Pre-qualification: What's the Difference?" description="Understand the difference between pre-approval and pre-qualification for mortgages in West Michigan." url="/blog/pre-approval-vs-pre-qualification" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Pre-approval vs Pre-qualification", url: "/blog/pre-approval-vs-pre-qualification" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Pre-approval vs Pre-qualification: What's the Difference?</h1>
            <p className="text-xl text-muted-foreground mb-8">Understand which one you need and when to get it when buying a home in West Michigan.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              When you're ready to buy a home in West Michigan, you'll likely hear two terms: pre-qualification and pre-approval. 
              While they sound similar, they're very different in terms of what they tell you and how seriously sellers and real 
              estate agents take them. Understanding the difference can help you navigate the homebuying process more effectively 
              and make stronger offers.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              What is Pre-qualification?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Pre-qualification is an informal, preliminary assessment of how much you might be able to borrow. It's based on 
              information you provide to a lender, typically without verification or a credit check. Think of it as a "ballpark 
              estimate" that helps you understand roughly what price range you should be looking at.
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Pre-qualification Process</h3>
              <p className="text-muted-foreground mb-4">
                Getting pre-qualified is quick and straightforward:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>You provide basic information:</strong> Income, debts, assets, and estimated credit score</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>No documentation required:</strong> The lender takes your word for it</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>No credit check:</strong> Your credit isn't pulled, so no impact on your credit score</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Quick turnaround:</strong> Usually takes 15-30 minutes, sometimes done over the phone</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Non-binding estimate:</strong> The lender isn't committing to anything</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">When to Get Pre-qualified</h3>
              <p className="text-muted-foreground mb-4">
                Pre-qualification is useful when you're:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Just starting to explore homebuying and want a rough idea of your budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Not ready to commit to a full application process yet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Wanting to compare multiple lenders quickly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Unsure if you can even qualify for a mortgage</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              What is Pre-approval?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Pre-approval is a much more formal and thorough process. The lender actually reviews your financial documentation, 
              pulls your credit report, and verifies your information. If you're pre-approved, the lender is essentially saying, 
              "Based on what we've verified, we're willing to lend you up to X amount, assuming the property appraises and 
              nothing changes with your financial situation."
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Pre-approval Process</h3>
              <p className="text-muted-foreground mb-4">
                Getting pre-approved involves several steps:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Complete application:</strong> You fill out a full mortgage application</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Provide documentation:</strong> Pay stubs, W-2s, tax returns, bank statements, and more</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Credit check:</strong> Lender pulls your credit report from all three bureaus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Verification:</strong> Lender verifies your employment, income, and assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Underwriting review:</strong> An underwriter reviews your file</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Pre-approval letter:</strong> You receive a letter stating your approved loan amount</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Documentation Needed for Pre-approval</h3>
              <p className="text-muted-foreground mb-4">
                To get pre-approved, you'll typically need to provide:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Income verification:</strong> Recent pay stubs (2-3 months), W-2s (2 years), tax returns (2 years)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Asset statements:</strong> Bank statements (2-3 months), investment account statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Employment verification:</strong> Contact information for your employer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Identification:</strong> Government-issued ID, Social Security card</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Debt information:</strong> List of all debts, including credit cards, car loans, student loans</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">When to Get Pre-approved</h3>
              <p className="text-muted-foreground mb-4">
                Pre-approval is essential when you're:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Seriously looking for homes and ready to make offers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">In a competitive market where sellers expect pre-approval letters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Wanting to know exactly how much you can afford</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Ready to move quickly when you find the right home</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Key Differences at a Glance
            </h2>
            <Card className="p-6 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold text-foreground">Feature</th>
                      <th className="text-left p-3 font-bold text-foreground">Pre-qualification</th>
                      <th className="text-left p-3 font-bold text-foreground">Pre-approval</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Credit Check</td>
                      <td className="p-3 text-muted-foreground">No</td>
                      <td className="p-3 text-muted-foreground">Yes (hard inquiry)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Documentation</td>
                      <td className="p-3 text-muted-foreground">Self-reported</td>
                      <td className="p-3 text-muted-foreground">Verified documents required</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Time Required</td>
                      <td className="p-3 text-muted-foreground">15-30 minutes</td>
                      <td className="p-3 text-muted-foreground">1-3 days</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Accuracy</td>
                      <td className="p-3 text-muted-foreground">Rough estimate</td>
                      <td className="p-3 text-muted-foreground">More accurate, conditional approval</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Seller Acceptance</td>
                      <td className="p-3 text-muted-foreground">Not typically accepted</td>
                      <td className="p-3 text-muted-foreground">Accepted and expected</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Binding</td>
                      <td className="p-3 text-muted-foreground">Non-binding</td>
                      <td className="p-3 text-muted-foreground">Conditionally binding</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">Best For</td>
                      <td className="p-3 text-muted-foreground">Initial planning</td>
                      <td className="p-3 text-muted-foreground">Making offers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Why Pre-approval Matters in West Michigan
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In West Michigan's real estate market, especially in popular areas like Grand Rapids, Holland, and Kalamazoo, 
              having a pre-approval letter can make the difference between getting your offer accepted and losing out to 
              another buyer. Here's why:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">1. Shows You're Serious</h3>
                <p className="text-muted-foreground">
                  Sellers and real estate agents know that pre-approved buyers have already gone through the financial 
                  verification process. This means you're more likely to actually close on the home, reducing the risk 
                  of the deal falling through due to financing issues.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">2. Faster Closing Process</h3>
                <p className="text-muted-foreground">
                  Since much of the financial verification is already done, the final loan approval process can move faster. 
                  This is attractive to sellers who want to close quickly, and it can help your offer stand out even if 
                  another buyer offers a similar price.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">3. Know Your Exact Budget</h3>
                <p className="text-muted-foreground">
                  Pre-approval tells you exactly how much you can borrow, which helps you focus your home search on properties 
                  you can actually afford. This saves time and prevents disappointment when you find a home you love but can't 
                  actually qualify for.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">4. Competitive Advantage</h3>
                <p className="text-muted-foreground">
                  In competitive markets, many sellers won't even consider offers without pre-approval letters. Having one 
                  puts you on equal footing with other serious buyers and can sometimes help you win even if your offer isn't 
                  the highest.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              The Pre-approval Timeline
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Understanding what to expect during the pre-approval process helps you prepare:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">Day 1: Application</h4>
                  <p className="text-muted-foreground">
                    You complete the mortgage application and provide initial documentation. The lender pulls your credit report.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Day 2-3: Verification</h4>
                  <p className="text-muted-foreground">
                    The lender verifies your employment, income, and assets. They may request additional documentation if needed.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Day 3-5: Underwriting Review</h4>
                  <p className="text-muted-foreground">
                    An underwriter reviews your complete file and makes a decision. You receive your pre-approval letter if approved.
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Important Things to Know About Pre-approval
            </h2>
            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Pre-approval is Conditional</h3>
                <p className="text-muted-foreground">
                  Your pre-approval is based on the information you provided at the time of application. It's conditional on 
                  the property appraising for the purchase price, your financial situation not changing, and the property meeting 
                  the lender's requirements. If you lose your job, take on new debt, or your credit score drops significantly, 
                  your pre-approval could be revoked.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Pre-approval Expires</h3>
                <p className="text-muted-foreground">
                  Pre-approval letters typically expire after 60-90 days. This is because your financial situation and credit 
                  can change, and interest rates fluctuate. If you're still house hunting after your pre-approval expires, 
                  you'll need to get a new one.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Multiple Pre-approvals</h3>
                <p className="text-muted-foreground">
                  You can get pre-approved by multiple lenders, but try to do it within a 14-45 day window. Credit bureaus 
                  typically count multiple mortgage inquiries within this timeframe as a single inquiry, minimizing the impact 
                  on your credit score. This allows you to compare rates and terms from different lenders.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Which Should You Get First?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              For most homebuyers in West Michigan, the answer depends on where you are in the process:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Start with Pre-qualification If:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">You're just exploring and want a rough budget estimate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">You're not ready to commit to a full application</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">You want to compare multiple lenders quickly</span>
                </li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mb-4">Get Pre-approved If:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">You're actively looking at homes and ready to make offers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">You're in a competitive market</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">You want to know exactly how much you can afford</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">You want to move quickly when you find the right home</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Common Misconceptions
            </h2>
            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">"Pre-approval guarantees I'll get the loan"</h3>
                <p className="text-muted-foreground">
                  Pre-approval is conditional. The final loan approval depends on the property appraising for the purchase price, 
                  your financial situation remaining stable, and the property meeting lender requirements. However, pre-approval 
                  significantly increases your chances of final approval.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">"I can only get pre-approved by one lender"</h3>
                <p className="text-muted-foreground">
                  You can get pre-approved by multiple lenders to compare rates and terms. Just try to do it within a 14-45 day 
                  window to minimize the impact on your credit score.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">"Pre-qualification is enough to make offers"</h3>
                <p className="text-muted-foreground">
                  In most West Michigan markets, especially competitive ones, sellers expect pre-approval letters, not 
                  pre-qualification. A pre-qualification letter may not be taken seriously by sellers or their agents.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Pre-approved Today</h2>
            <p className="text-xl text-muted-foreground">Connect with a local lender to get pre-approved.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PreApprovalVsPreQualification;

