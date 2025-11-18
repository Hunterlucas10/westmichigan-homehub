import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, DollarSign, FileText, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const FirstTimeHomebuyerTaxCreditsMichigan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>First-Time Homebuyer Tax Credits in Michigan | Deductions & Benefits</title>
        <meta name="description" content="Learn about first-time homebuyer tax credits, deductions, and benefits available in Michigan. Understand how homeownership can reduce your tax burden." />
        <link rel="canonical" href={`${SITE_URL}/blog/first-time-homebuyer-tax-credits-michigan`} />
        <meta property="og:title" content="First-Time Homebuyer Tax Credits in Michigan" />
        <meta property="og:description" content="Learn about first-time homebuyer tax credits, deductions, and benefits available in Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/first-time-homebuyer-tax-credits-michigan`} />
      </Helmet>
      <ArticleSchema title="First-Time Homebuyer Tax Credits in Michigan | Deductions & Benefits" description="Learn about first-time homebuyer tax credits, deductions, and benefits available in Michigan." url="/blog/first-time-homebuyer-tax-credits-michigan" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Tax Credits Michigan", url: "/blog/first-time-homebuyer-tax-credits-michigan" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">First-Time Homebuyer Tax Credits in Michigan</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn about tax deductions and benefits available to first-time homebuyers.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Homeownership in Michigan comes with several valuable tax benefits that can reduce your annual tax burden. While the federal 
              first-time homebuyer tax credit that was available during the housing crisis is no longer in effect, there are still significant 
              tax advantages to owning a home. Understanding these benefits helps you maximize your tax savings and plan your finances effectively.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Understanding Tax Deductions vs. Tax Credits
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              It's important to understand the difference between tax deductions and tax credits:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Tax Deductions</h3>
                <p className="text-muted-foreground">
                  Deductions reduce your taxable income, which indirectly reduces your tax bill. For example, if you're in the 22% tax bracket 
                  and have $10,000 in mortgage interest deductions, you'll save approximately $2,200 in taxes. The actual savings depend on 
                  your tax bracket.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Tax Credits</h3>
                <p className="text-muted-foreground">
                  Credits directly reduce your tax bill dollar-for-dollar. A $1,000 tax credit saves you $1,000 in taxes, regardless of your 
                  tax bracket. Credits are generally more valuable than deductions, but fewer are available for homeowners.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Major Tax Benefits of Homeownership
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Here are the primary tax benefits available to Michigan homeowners:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">1. Mortgage Interest Deduction</h3>
                <p className="text-muted-foreground mb-4">
                  The mortgage interest deduction is one of the most significant tax benefits of homeownership. You can deduct interest paid 
                  on mortgages up to $750,000 (or $375,000 if married filing separately) for loans taken out after December 15, 2017. For 
                  loans taken before that date, the limit is $1 million.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>How it works:</strong> You must itemize deductions on Schedule A to claim this</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>What's deductible:</strong> Interest on your primary mortgage and, in some cases, a second mortgage or home equity loan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Documentation:</strong> Your lender will send you Form 1098 showing the interest you paid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Example:</strong> If you paid $12,000 in mortgage interest and are in the 22% tax bracket, you save approximately $2,640 in taxes</span>
                  </li>
                </ul>
                <Card className="p-4 bg-muted">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> You can only deduct mortgage interest if you itemize deductions. With the increased standard 
                    deduction ($14,600 for single filers, $29,200 for married filing jointly in 2024), many homeowners may find the standard 
                    deduction is more beneficial than itemizing.
                  </p>
                </Card>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">2. Property Tax Deduction</h3>
                <p className="text-muted-foreground mb-4">
                  You can deduct state and local property taxes, including real estate taxes, on your federal tax return. However, there's a 
                  combined limit of $10,000 ($5,000 if married filing separately) for all state and local taxes (SALT), including property taxes, 
                  state income taxes, and sales taxes.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Michigan property taxes:</strong> Vary by county and city, typically 1-2% of assessed value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>What's deductible:</strong> Real estate taxes paid to local governments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Documentation:</strong> Property tax statements from your local assessor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Note:</strong> The $10,000 SALT cap may limit your deduction if you have high property taxes and state income taxes</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">3. Private Mortgage Insurance (PMI) Deduction</h3>
                <p className="text-muted-foreground mb-4">
                  If you pay PMI on a conventional loan, you may be able to deduct those premiums, but this deduction has income limits and 
                  may not be available every year.
                </p>
                <ul className="space-y-2 mb-4">
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
                    <span className="text-foreground"><strong>Note:</strong> This deduction must be renewed by Congress and may not be available every tax year</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">4. Capital Gains Exclusion</h3>
                <p className="text-muted-foreground mb-4">
                  When you sell your home, you can exclude up to $250,000 in capital gains ($500,000 for married couples filing jointly) 
                  from your taxable income, as long as you meet certain requirements.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Ownership requirement:</strong> You must have owned the home for at least 2 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Use requirement:</strong> You must have lived in the home as your primary residence for at least 2 of the 5 years before selling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Frequency:</strong> You can use this exclusion once every 2 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><strong>Example:</strong> If you bought a home for $200,000 and sell it for $450,000, you'd have $250,000 in gains. As a single filer, you'd pay no capital gains tax on this profit</span>
                  </li>
                </ul>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Itemizing vs. Standard Deduction
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              To claim mortgage interest and property tax deductions, you must itemize deductions on Schedule A. However, with the increased 
              standard deduction, many homeowners may find it more beneficial to take the standard deduction:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">2024 Standard Deductions</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Single filers:</strong> $14,600</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Married filing jointly:</strong> $29,200</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Head of household:</strong> $21,900</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                You should itemize only if your total itemized deductions exceed your standard deduction. For many first-time buyers with 
                smaller mortgages, the standard deduction may be more beneficial, especially in the early years when interest payments are highest.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              MSHDA Mortgage Credit Certificate (MCC)
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Michigan offers a special tax credit program for first-time homebuyers through MSHDA's Mortgage Credit Certificate (MCC) program:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">How the MCC Works</h3>
              <p className="text-muted-foreground mb-4">
                The MCC is a tax credit (not a deduction) that allows you to claim a percentage of your mortgage interest as a direct credit 
                against your federal income tax. This is one of the few actual tax credits available to Michigan homebuyers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Credit amount:</strong> Typically 20-30% of your annual mortgage interest, up to $2,000 per year</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Annual benefit:</strong> Can save you hundreds to thousands of dollars each year</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Lifetime benefit:</strong> Available for the life of your mortgage, as long as you live in the home</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Eligibility:</strong> Must be a first-time buyer, meet income limits, and purchase price limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Example:</strong> If you pay $10,000 in mortgage interest and have a 20% MCC, you get a $2,000 tax credit each year</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                The MCC can be combined with MSHDA's down payment assistance program, making it an excellent option for first-time buyers 
                in West Michigan. Learn more about the MCC program in our <Link to="/mshda-info-center" className="text-primary hover:underline">MSHDA Info Center</Link>.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              First-Year Tax Benefits
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              When you buy a home, you may be able to deduct certain expenses in your first year:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Prepaid interest (points):</strong> If you paid points to lower your interest rate, you may be able to deduct them in the year you bought the home</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Property taxes:</strong> You can deduct property taxes you paid at closing, even if the seller reimbursed you</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Mortgage interest:</strong> Interest paid from your closing date through the end of the year is deductible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Note:</strong> Your lender will provide a Form 1098 showing deductible amounts for the year</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Tax Benefits Over Time
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your tax benefits change over the life of your mortgage:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Early Years</h3>
                <p className="text-muted-foreground">
                  In the early years of your mortgage, most of your payment goes toward interest, so your mortgage interest deduction is highest. 
                  This is when itemizing is most likely to be beneficial.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Later Years</h3>
                <p className="text-muted-foreground">
                  As you pay down your mortgage, more of your payment goes toward principal and less toward interest. Your interest deduction 
                  decreases, and you may find the standard deduction becomes more beneficial than itemizing.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Home Office Deduction
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              If you work from home, you may be able to deduct a portion of your home expenses:
            </p>

            <Card className="p-6 mb-8">
              <p className="text-muted-foreground mb-4">
                The home office deduction is available if you use part of your home exclusively and regularly for business purposes. However, 
                the rules are strict, and many remote workers don't qualify. The simplified method allows you to deduct $5 per square foot of 
                home office space, up to 300 square feet ($1,500 maximum).
              </p>
              <p className="text-muted-foreground">
                <strong>Important:</strong> If you're an employee (not self-employed), you generally cannot claim the home office deduction 
                under current tax law. Consult with a tax professional to determine if you qualify.
              </p>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              What's NOT Deductible
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              It's important to know what you cannot deduct:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Principal payments on your mortgage (only interest is deductible)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Homeowners insurance premiums</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Home repairs and maintenance (though improvements may increase your basis when you sell)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Utilities (unless part of a home office deduction)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Closing costs (except prepaid interest and property taxes)</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Planning for Tax Season
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              To maximize your tax benefits, keep good records throughout the year:
            </p>

            <Card className="p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Documents to Keep</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Form 1098 from your lender (shows mortgage interest paid)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Property tax statements from your local assessor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Closing documents (HUD-1 or Closing Disclosure) showing prepaid interest and property taxes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Receipts for any home improvements (these increase your basis and reduce capital gains when you sell)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">MCC certificate (if you received one through MSHDA)</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Working with a Tax Professional
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Tax laws are complex and change frequently. Working with a qualified tax professional, especially in your first year of homeownership, 
              can help you:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Maximize your deductions and credits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Understand whether to itemize or take the standard deduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Plan for future tax years</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Ensure you're taking advantage of all available benefits, including the MSHDA MCC</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Avoid mistakes that could trigger an audit</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Example: First-Year Tax Savings
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Here's an example of potential tax savings for a first-time buyer in West Michigan:
            </p>

            <Card className="p-6 mb-8">
              <p className="text-muted-foreground mb-4">
                <strong>Scenario:</strong> Married couple, $200,000 home, $193,000 mortgage at 6.5%, $3,000 annual property taxes, 22% tax bracket
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-foreground">Mortgage interest (first year):</span>
                  <span className="text-foreground font-semibold">$12,545</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Property taxes:</span>
                  <span className="text-foreground font-semibold">$3,000</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-foreground font-bold">Total itemized deductions:</span>
                  <span className="text-foreground font-bold">$15,545</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Standard deduction:</span>
                  <span className="text-foreground font-semibold">$29,200</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-foreground font-bold">Tax savings (using standard deduction):</span>
                  <span className="text-foreground font-bold">$6,424</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                In this example, the standard deduction is more beneficial than itemizing. However, if they had an MSHDA MCC providing a 
                $2,000 tax credit, their total tax benefit would be even greater. Plus, as their mortgage balance decreases and interest 
                payments reduce, they'll continue to benefit from the standard deduction.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Consult with a Tax Professional</h2>
            <p className="text-xl text-muted-foreground">Tax laws change frequently. Consult with a tax advisor for current information.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FirstTimeHomebuyerTaxCreditsMichigan;

