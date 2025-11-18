import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Gift, DollarSign, FileText, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const DownPaymentGiftRules = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Down Payment Gift Rules: Can Family Help? | West Michigan Guide</title>
        <meta name="description" content="Learn about down payment gift rules for FHA, VA, USDA, and conventional loans in West Michigan. Understand who can gift funds and what documentation is required." />
        <link rel="canonical" href={`${SITE_URL}/blog/down-payment-gift-rules`} />
        <meta property="og:title" content="Down Payment Gift Rules: Can Family Help?" />
        <meta property="og:description" content="Learn about down payment gift rules for different loan types in West Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/down-payment-gift-rules`} />
      </Helmet>
      <ArticleSchema title="Down Payment Gift Rules: Can Family Help? | West Michigan Guide" description="Learn about down payment gift rules for FHA, VA, USDA, and conventional loans in West Michigan." url="/blog/down-payment-gift-rules" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Down Payment Gift Rules", url: "/blog/down-payment-gift-rules" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Down Payment Gift Rules: Can Family Help?</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn about gift fund rules for different loan types and what documentation you'll need.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Using gift funds for your down payment is a common way to make homeownership more accessible, especially for first-time buyers. 
              Many loan programs allow family members, employers, or other sources to gift money toward your down payment and closing costs. 
              However, each loan type has specific rules about who can gift, how much can be gifted, and what documentation is required. 
              Understanding these rules helps ensure your gift funds are accepted and your loan closes smoothly.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              What Are Gift Funds?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Gift funds are money given to you by someone else with no expectation of repayment. Unlike a loan, gift funds don't need to be 
              paid back. Lenders have strict rules about gift funds because they want to ensure the money is truly a gift and not a loan that 
              would increase your debt-to-income ratio. The key requirement is that the gift must be documented properly with a gift letter 
              and proof of transfer.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Gift Fund Rules by Loan Type
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Each loan program has different rules about gift funds. Here's what you need to know for each type:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">FHA Loans</h3>
                <p className="text-muted-foreground mb-4">
                  FHA loans are very flexible when it comes to gift funds. You can use gift funds for your entire down payment and closing costs.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Who can gift:</strong> Family members (parents, grandparents, siblings, aunts, uncles, etc.), employers, labor unions, close friends with a clearly defined interest in the borrower, charitable organizations, or government agencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Amount:</strong> Can cover 100% of down payment and closing costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Documentation:</strong> Gift letter, proof of transfer (bank statements showing the gift was deposited), and donor's bank statements showing they had the funds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Timing:</strong> Gift must be received and documented before closing</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Conventional Loans</h3>
                <p className="text-muted-foreground mb-4">
                  Conventional loans allow gift funds, but the rules are more restrictive than FHA loans, especially for certain programs.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Who can gift:</strong> Family members, domestic partners, fiancés, or close friends (lender-dependent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Amount:</strong> Varies by program. For down payments less than 20%, you typically need to contribute at least 5% of your own funds. For 20%+ down payments, gift funds can cover the entire amount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Conventional 97 (3% down):</strong> Requires at least 1% of the purchase price from your own funds, the remaining 2% can be gifted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Documentation:</strong> Gift letter and proof of transfer required</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">VA Loans</h3>
                <p className="text-muted-foreground mb-4">
                  VA loans don't require a down payment, but gift funds can be used for closing costs or to reduce your loan amount.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Who can gift:</strong> Family members, employers, or other sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Amount:</strong> Can be used for closing costs, prepaid expenses, or to reduce loan amount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Documentation:</strong> Gift letter and proof of transfer required</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">USDA Loans</h3>
                <p className="text-muted-foreground mb-4">
                  USDA loans allow gift funds, similar to FHA loans, since they also don't require a down payment.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Who can gift:</strong> Family members or other acceptable sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Amount:</strong> Can be used for closing costs and prepaid expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Documentation:</strong> Gift letter and proof of transfer required</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">MSHDA Loans</h3>
                <p className="text-muted-foreground mb-4">
                  MSHDA allows gift funds, which can be combined with their down payment assistance program.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Who can gift:</strong> Family members or other acceptable sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Amount:</strong> Can be used in combination with MSHDA down payment assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Documentation:</strong> Gift letter and proof of transfer required</span>
                  </li>
                </ul>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              The Gift Letter: What You Need
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A gift letter is a required document that confirms the money is a gift, not a loan. The letter must be signed by the donor 
              and include specific information. Your lender will provide a gift letter template, but it typically must include:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Donor information:</strong> Full name, address, and relationship to the borrower</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Borrower information:</strong> Full name of the person receiving the gift</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Gift amount:</strong> Exact dollar amount of the gift</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Property address:</strong> Address of the home being purchased (if known)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Statement that it's a gift:</strong> Explicit statement that the funds are a gift with no expectation of repayment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Donor's signature and date:</strong> Must be signed and dated by the donor</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Documentation Requirements
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In addition to the gift letter, you'll need to provide proof that the gift was actually transferred and that the donor had 
              the funds available:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Proof of Transfer</h3>
                <p className="text-muted-foreground mb-3">
                  You'll need to show the money was actually transferred to your account:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Bank statement showing the gift deposit in your account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Wire transfer confirmation or check copy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">The deposit should be clearly labeled or identifiable as the gift</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Donor's Bank Statements</h3>
                <p className="text-muted-foreground">
                  The lender will need to verify the donor had the funds available. This typically requires the donor's bank statement 
                  showing the withdrawal or transfer. The statement should show the donor had sufficient funds before making the gift.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Timing of the Gift</h3>
                <p className="text-muted-foreground">
                  The gift should be deposited into your account well before closing. Most lenders want to see the gift in your account 
                  for at least one statement cycle (30 days) before closing. This shows the funds are "seasoned" and not just deposited 
                  to meet closing requirements. However, some lenders may accept gifts closer to closing if properly documented.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Tax Implications of Gift Funds
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Understanding the tax implications is important for both the donor and recipient:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">For the Donor</h3>
              <p className="text-muted-foreground mb-4">
                The IRS allows individuals to gift up to a certain amount per year per recipient without tax consequences. As of 2024, 
                the annual gift tax exclusion is $18,000 per person per year. This means:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">A parent can gift $18,000 to their child without tax implications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">If both parents gift, they can give $36,000 total ($18,000 each) without tax consequences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Gifts above the annual exclusion may require filing a gift tax return, but taxes are typically only due on amounts exceeding the lifetime exemption (over $13 million as of 2024)</span>
                </li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mb-4">For the Recipient</h3>
              <p className="text-muted-foreground">
                As the recipient, you typically don't pay taxes on gift funds. Gift money is not considered taxable income. However, 
                you should consult with a tax professional for advice specific to your situation, especially for large gifts.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Common Gift Fund Mistakes to Avoid
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Avoiding these common mistakes can prevent delays or denials:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">1. Not Getting a Proper Gift Letter</h3>
                <p className="text-muted-foreground">
                  The gift letter must be complete and accurate. Missing information or incorrect statements can cause delays. Use your 
                  lender's template to ensure all required information is included.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">2. Depositing Cash</h3>
                <p className="text-muted-foreground">
                  Lenders prefer to see electronic transfers or checks rather than cash deposits. Cash deposits are harder to trace and 
                  may raise red flags. If you must deposit cash, ensure you have proper documentation and discuss with your lender first.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">3. Waiting Too Long to Deposit</h3>
                <p className="text-muted-foreground">
                  Depositing the gift too close to closing can cause problems. Lenders want to see the funds "seasoned" in your account. 
                  Aim to deposit gift funds at least 30-60 days before closing if possible.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">4. Not Documenting the Source</h3>
                <p className="text-muted-foreground">
                  The lender needs to verify the donor had the funds. Make sure the donor can provide bank statements showing they had 
                  the money before making the gift.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">5. Calling It a Loan</h3>
                <p className="text-muted-foreground">
                  If the donor expects repayment, it's not a gift—it's a loan. This must be disclosed to the lender and will affect your 
                  debt-to-income ratio. Be honest about the nature of the funds.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Combining Gift Funds with Other Assistance
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In many cases, you can combine gift funds with down payment assistance programs:
            </p>

            <Card className="p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>MSHDA programs:</strong> Gift funds can be combined with MSHDA down payment assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Local grants:</strong> Many local down payment assistance programs allow gift funds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>FHA loans:</strong> Gift funds can cover the entire down payment, even with other assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Conventional loans:</strong> Check with your lender about combining gift funds with assistance programs</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Working with Your Lender
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your lender is your best resource for understanding gift fund requirements. They can:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Provide the correct gift letter template for your loan type</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Explain specific requirements for your loan program</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Review your gift letter before submission to ensure it's complete</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Help you understand timing requirements for gift deposits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Advise on combining gift funds with other assistance programs</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Understand Gift Rules</h2>
            <p className="text-xl text-muted-foreground">Connect with a lender to learn about gift fund requirements for your loan type.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DownPaymentGiftRules;

