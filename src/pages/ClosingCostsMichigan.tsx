import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, DollarSign, FileText, Calculator, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const ClosingCostsMichigan = () => {
  const costs = [
    { item: "Loan origination fee", typical: "0.5-1% of loan amount" },
    { item: "Appraisal", typical: "$300-$500" },
    { item: "Home inspection", typical: "$300-$500" },
    { item: "Title insurance", typical: "$500-$1,500" },
    { item: "Recording fees", typical: "$50-$200" },
    { item: "Prepaid property taxes", typical: "2-6 months" },
    { item: "Homeowner's insurance", typical: "1 year premium" },
    { item: "Escrow account funding", typical: "2 months" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Closing Costs in Michigan: What to Expect | West Michigan Guide</title>
        <meta name="description" content="Learn about typical closing costs in Michigan, including loan fees, inspections, and prepaid expenses. Understand what you'll pay when buying a home in West Michigan." />
        <link rel="canonical" href={`${SITE_URL}/blog/closing-costs-michigan`} />
        <meta property="og:title" content="Closing Costs in Michigan: What to Expect" />
        <meta property="og:description" content="Learn about typical closing costs in Michigan and what you'll pay when buying a home in West Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/closing-costs-michigan`} />
      </Helmet>
      <ArticleSchema title="Closing Costs in Michigan: What to Expect" description="Learn about typical closing costs in Michigan, including loan fees, inspections, and prepaid expenses." url="/blog/closing-costs-michigan" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Closing Costs Michigan", url: "/blog/closing-costs-michigan" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Closing Costs in Michigan: What to Expect</h1>
            <p className="text-xl text-muted-foreground mb-8">Understand typical closing costs when buying a home in West Michigan and how to prepare financially.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Closing costs are the fees and expenses you pay when finalizing your home purchase in Michigan. 
              These costs typically range from 2-5% of your home's purchase price, which means on a $200,000 
              home, you could pay $4,000 to $10,000 in closing costs. Understanding these costs upfront helps 
              you budget properly and avoid surprises on closing day.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              What Are Closing Costs?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Closing costs cover a wide range of services and fees required to complete your home purchase. 
              These include lender fees, third-party services (like appraisals and inspections), government 
              recording fees, and prepaid expenses. While some costs are negotiable, others are fixed by law 
              or required by your lender.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Detailed Breakdown of Closing Costs
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Here's a comprehensive look at each type of closing cost you'll encounter when buying a home in West Michigan:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Lender Fees</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-semibold text-lg">Loan Origination Fee</span>
                    <span className="text-muted-foreground">0.5-1% of loan amount</span>
                  </div>
                  <p className="text-muted-foreground">
                    This fee covers the lender's cost of processing your loan application. On a $200,000 loan, 
                    this could be $1,000 to $2,000. Some lenders may be willing to negotiate this fee or offer 
                    a "no origination fee" option, though this might come with a slightly higher interest rate.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-semibold text-lg">Underwriting Fee</span>
                    <span className="text-muted-foreground">$400-$900</span>
                  </div>
                  <p className="text-muted-foreground">
                    This fee covers the cost of evaluating your loan application and determining your creditworthiness. 
                    This is typically non-negotiable as it's a required service.
                  </p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-semibold text-lg">Credit Report Fee</span>
                    <span className="text-muted-foreground">$25-$50</span>
                  </div>
                  <p className="text-muted-foreground">
                    The cost of pulling your credit report from the three major credit bureaus (Equifax, Experian, TransUnion).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-semibold text-lg">Home Appraisal</span>
                    <span className="text-muted-foreground">$300-$500</span>
                  </div>
                  <p className="text-muted-foreground">
                    Required by your lender to determine the home's fair market value. The appraiser will inspect 
                    the property and compare it to similar homes in the area. This protects both you and the lender 
                    from overpaying for a property.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-semibold text-lg">Home Inspection</span>
                    <span className="text-muted-foreground">$300-$500</span>
                  </div>
                  <p className="text-muted-foreground">
                    While not always required by lenders, a home inspection is highly recommended. The inspector will 
                    check the home's structural integrity, electrical systems, plumbing, HVAC, and identify potential 
                    issues. This is separate from the appraisal and gives you valuable information about the property's condition.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-semibold text-lg">Title Insurance</span>
                    <span className="text-muted-foreground">$500-$1,500</span>
                  </div>
                  <p className="text-muted-foreground">
                    Protects you and your lender from ownership disputes or liens on the property. There are two types: 
                    lender's title insurance (required) and owner's title insurance (optional but recommended). The cost 
                    varies based on the home's purchase price.
                  </p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-semibold text-lg">Title Search</span>
                    <span className="text-muted-foreground">$200-$400</span>
                  </div>
                  <p className="text-muted-foreground">
                    A review of public records to ensure the seller has clear ownership and there are no outstanding 
                    liens or claims on the property.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Government and Recording Fees</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-semibold text-lg">Recording Fees</span>
                    <span className="text-muted-foreground">$50-$200</span>
                  </div>
                  <p className="text-muted-foreground">
                    Fees paid to the county recorder's office to officially record your deed and mortgage. These fees 
                    vary by county in Michigan.
                  </p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-semibold text-lg">Transfer Taxes</span>
                    <span className="text-muted-foreground">Varies by location</span>
                  </div>
                  <p className="text-muted-foreground">
                    Some cities and counties in Michigan charge transfer taxes when property changes hands. In West Michigan, 
                    these are typically paid by the seller, but this can be negotiated in your purchase agreement.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Prepaid Expenses</h3>
              <p className="text-muted-foreground mb-4">
                These are expenses you'll pay upfront but are for future services. They're held in an escrow account 
                and used to pay property taxes and insurance as they come due.
              </p>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-semibold text-lg">Prepaid Property Taxes</span>
                    <span className="text-muted-foreground">2-6 months</span>
                  </div>
                  <p className="text-muted-foreground">
                    You'll typically need to prepay property taxes to ensure there's enough in escrow when taxes are due. 
                    The amount depends on when you close relative to the tax due date. In Michigan, property taxes are 
                    typically due in summer and winter.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-semibold text-lg">Homeowner's Insurance</span>
                    <span className="text-muted-foreground">1 year premium</span>
                  </div>
                  <p className="text-muted-foreground">
                    You'll need to pay the first year's homeowner's insurance premium upfront. This typically ranges from 
                    $800 to $1,500 annually in West Michigan, depending on the home's value and location.
                  </p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-semibold text-lg">Escrow Account Funding</span>
                    <span className="text-muted-foreground">2 months</span>
                  </div>
                  <p className="text-muted-foreground">
                    Your lender will require you to fund an escrow account with 2 months of property taxes and insurance 
                    payments as a cushion. This ensures there's always enough money to pay these bills when they're due.
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Example: Closing Costs on a $200,000 Home
            </h2>
            <Card className="p-6 bg-muted mb-8">
              <p className="text-muted-foreground mb-4">
                Here's a realistic breakdown of closing costs for a $200,000 home in West Michigan with a 3.5% down payment ($7,000):
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground">Loan origination (0.75%)</span>
                  <span className="text-foreground font-semibold">$1,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Appraisal</span>
                  <span className="text-foreground font-semibold">$450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Home inspection</span>
                  <span className="text-foreground font-semibold">$400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Title insurance</span>
                  <span className="text-foreground font-semibold">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Recording fees</span>
                  <span className="text-foreground font-semibold">$150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Prepaid taxes (3 months)</span>
                  <span className="text-foreground font-semibold">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Homeowner's insurance (1 year)</span>
                  <span className="text-foreground font-semibold">$1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Escrow funding</span>
                  <span className="text-foreground font-semibold">$600</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-foreground font-bold text-lg">Total Closing Costs</span>
                  <span className="text-foreground font-bold text-lg">$6,450</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                This represents about 3.2% of the purchase price, which is typical for Michigan home purchases.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              How to Reduce Closing Costs
            </h2>
            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">1. Negotiate with the Seller</h3>
                <p className="text-muted-foreground">
                  In some markets, sellers may agree to pay a portion of your closing costs. This is called a "seller credit" 
                  or "seller concession." In West Michigan, it's common for sellers to contribute 2-3% of the purchase price 
                  toward closing costs, especially in buyer's markets.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">2. Shop Around for Services</h3>
                <p className="text-muted-foreground">
                  While your lender may recommend certain service providers, you often have the right to choose your own. 
                  Shop around for title insurance, home inspections, and other services to find the best rates. However, 
                  some lenders have preferred providers that may offer better rates due to volume discounts.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">3. Ask About Lender Credits</h3>
                <p className="text-muted-foreground">
                  Some lenders offer credits that can offset closing costs. These might come with a slightly higher interest 
                  rate, but if you plan to stay in the home for a shorter period, this could save you money upfront.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">4. Use Down Payment Assistance Programs</h3>
                <p className="text-muted-foreground">
                  Programs like MSHDA's down payment assistance can help cover both your down payment and closing costs. 
                  In West Michigan, MSHDA offers up to $10,000 in assistance that can be used for closing costs, making 
                  homeownership more affordable.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">5. Close at the End of the Month</h3>
                <p className="text-muted-foreground">
                  Closing near the end of the month can reduce your prepaid interest charges, as you'll only pay interest 
                  for the remaining days of that month rather than a full month's worth.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Understanding Your Loan Estimate
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Within three days of applying for a mortgage, your lender must provide you with a Loan Estimate. This document 
              breaks down all your estimated closing costs. Review it carefully and compare it to the Closing Disclosure you'll 
              receive three days before closing. By law, most costs can't increase by more than 10% from the estimate, giving 
              you protection against surprise fees.
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-3">What to Look For in Your Loan Estimate</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Compare the "Total Loan Costs" section across multiple lenders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Check which fees are fixed and which can change</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Verify prepaid expenses are reasonable for your area</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Ask about any fees you don't understand</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Closing Costs vs. Down Payment
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              It's important to understand that closing costs are separate from your down payment. If you're buying a $200,000 
              home with a 3.5% down payment ($7,000), you'll also need approximately $6,000-$8,000 for closing costs. This means 
              you'll need around $13,000-$15,000 in cash to close. However, down payment assistance programs can help cover both 
              your down payment and closing costs, significantly reducing the cash you need at closing.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Preparing for Closing Day
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Before closing day, you'll receive a Closing Disclosure that shows the final amounts. Review this carefully and 
              compare it to your Loan Estimate. Bring a cashier's check or arrange for a wire transfer for the exact amount 
              shown on the Closing Disclosure. Your lender or title company will provide specific instructions on how to pay.
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Closing Day Checklist</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Bring a valid government-issued ID</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Bring your cashier's check or wire transfer confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Review all documents carefully before signing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Ask questions about anything you don't understand</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Keep copies of all signed documents</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get a Closing Cost Estimate</h2>
            <p className="text-xl text-muted-foreground">Connect with a local lender for a detailed breakdown.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ClosingCostsMichigan;

