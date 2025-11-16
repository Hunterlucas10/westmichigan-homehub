import { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

interface Article {
  title: string;
  description: string;
  category: string;
  readTime: string;
  link: string;
}

const LearningCenter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");

  const articles: Article[] = [
    // Loan Programs
    {
      title: "Zero Down Payment Loans in Michigan: Your Complete Guide",
      description: "Learn about VA and USDA loans that allow you to buy a home with no down payment. Discover eligibility requirements and how to apply.",
      category: "Loan Programs",
      readTime: "8 min read",
      link: "/zero-down-home-loans-michigan",
    },
    {
      title: "FHA Loans Explained: Is 3.5% Down Right for You?",
      description: "Everything you need to know about FHA loans, including benefits, requirements, and how they compare to conventional mortgages.",
      category: "Loan Programs",
      readTime: "9 min read",
      link: "/blog/fha-loans-explained",
    },
    {
      title: "VA Loans for Veterans: Zero Down in West Michigan",
      description: "Learn how veterans and active military can take advantage of VA loan benefits to buy a home with no down payment and no PMI.",
      category: "Loan Programs",
      readTime: "8 min read",
      link: "/va-loans-michigan",
    },
    {
      title: "MSHDA MI Home Loan: Michigan's Best-Kept Secret",
      description: "Discover how MSHDA's programs can help you get down payment assistance and lower interest rates for qualified buyers.",
      category: "Loan Programs",
      readTime: "7 min read",
      link: "/blog/mshda-mi-home-loan-guide",
    },
    {
      title: "Understanding PMI: Private Mortgage Insurance Explained",
      description: "Learn what PMI is, when you need it, how much it costs, and how to avoid or remove it from your mortgage payment.",
      category: "Loan Programs",
      readTime: "6 min read",
      link: "/blog/understanding-pmi",
    },
    {
      title: "Conventional Loans vs. Government Loans: Which is Right for You?",
      description: "Compare conventional, FHA, VA, and USDA loans to find the best mortgage option for your situation in West Michigan.",
      category: "Loan Programs",
      readTime: "10 min read",
      link: "/zero-down-home-loans-michigan",
    },
    {
      title: "USDA Rural Development Loans in West Michigan",
      description: "Explore zero down payment options for eligible rural and suburban areas in West Michigan through USDA loans.",
      category: "Loan Programs",
      readTime: "7 min read",
      link: "/zero-down-home-loans-michigan",
    },
    // First-Time Buyers
    {
      title: "Best First-Time Homebuyer Programs in West Michigan",
      description: "Explore MSHDA, FHA, and conventional programs designed specifically for first-time buyers in the Grand Rapids area.",
      category: "First-Time Buyers",
      readTime: "10 min read",
      link: "/first-time-homebuyer-programs-west-michigan",
    },
    {
      title: "First-Time Homebuyer Tax Credits in Michigan",
      description: "Discover available tax credits and deductions that can help first-time buyers save money on their home purchase.",
      category: "First-Time Buyers",
      readTime: "5 min read",
      link: "/blog/first-time-homebuyer-tax-credits-michigan",
    },
    {
      title: "First Generation Homebuyer Grant in Michigan",
      description: "Learn about special grants and programs available for first-generation homebuyers in West Michigan.",
      category: "First-Time Buyers",
      readTime: "6 min read",
      link: "/first-generation-homebuyer-grant-michigan",
    },
    {
      title: "Homebuyer Education Requirements in Michigan",
      description: "Understand why homebuyer education is important and which programs require it for loan approval.",
      category: "First-Time Buyers",
      readTime: "5 min read",
      link: "/blog/homebuyer-education-michigan",
    },
    // Credit & Finances
    {
      title: "How to Buy a Home with a Low Credit Score",
      description: "Your credit isn't perfect? No problem. Learn which loan programs are available and how to improve your chances of approval.",
      category: "Credit & Finances",
      readTime: "7 min read",
      link: "/blog/low-credit-score-home-buying",
    },
    {
      title: "Credit Score Requirements by Loan Type",
      description: "Understand the minimum credit score requirements for FHA, VA, conventional, and other loan programs in Michigan.",
      category: "Credit & Finances",
      readTime: "8 min read",
      link: "/blog/credit-score-requirements-by-loan-type",
    },
    {
      title: "How to Improve Your Credit Score Before Buying",
      description: "Practical steps to boost your credit score quickly and increase your chances of mortgage approval and better rates.",
      category: "Credit & Finances",
      readTime: "9 min read",
      link: "/blog/low-credit-score-home-buying",
    },
    {
      title: "Debt-to-Income Ratio: What Lenders Look For",
      description: "Learn how your debt-to-income ratio affects mortgage approval and what you can do to improve it.",
      category: "Credit & Finances",
      readTime: "6 min read",
      link: "/first-time-buyer",
    },
    {
      title: "Mortgage Rates in West Michigan: What to Expect",
      description: "Understand current mortgage rate trends, factors that affect rates, and how to secure the best rate for your loan.",
      category: "Credit & Finances",
      readTime: "7 min read",
      link: "/blog/mortgage-rates-west-michigan",
    },
    // Down Payment Help
    {
      title: "Down Payment Assistance Programs in Grand Rapids",
      description: "Discover local and state programs that can help you cover your down payment and closing costs.",
      category: "Down Payment Help",
      readTime: "6 min read",
      link: "/blog/down-payment-assistance-grand-rapids",
    },
    {
      title: "MSHDA Down Payment Assistance: Up to $10,000",
      description: "Learn about Michigan's MSHDA down payment assistance program that provides up to $10,000 for eligible homebuyers.",
      category: "Down Payment Help",
      readTime: "7 min read",
      link: "/mshda-info-center",
    },
    {
      title: "Down Payment Gift Rules: Using Gift Money for Your Home",
      description: "Understand the rules and requirements for using gift money from family members toward your down payment.",
      category: "Down Payment Help",
      readTime: "5 min read",
      link: "/blog/down-payment-gift-rules",
    },
    {
      title: "Low Down Payment Options in Michigan",
      description: "Explore all available low down payment mortgage options, from 3% to 3.5% down payment programs.",
      category: "Down Payment Help",
      readTime: "8 min read",
      link: "/low-down-payment-michigan",
    },
    {
      title: "Down Payment Assistance Programs in West Michigan",
      description: "Complete guide to all down payment assistance programs available to homebuyers in West Michigan counties.",
      category: "Down Payment Help",
      readTime: "9 min read",
      link: "/down-payment-assistance-west-michigan",
    },
    {
      title: "No Money Down Options in Grand Rapids",
      description: "Discover zero down payment loan programs available specifically for Grand Rapids area homebuyers.",
      category: "Down Payment Help",
      readTime: "7 min read",
      link: "/no-money-down-grand-rapids",
    },
    // Buying Process
    {
      title: "The Complete Home Buying Process: Step by Step",
      description: "From pre-approval to closing day, understand every step of the homebuying journey in West Michigan.",
      category: "Buying Process",
      readTime: "12 min read",
      link: "/blog/home-buying-process-step-by-step",
    },
    {
      title: "Pre-Approval vs. Pre-Qualification: What's the Difference?",
      description: "Learn the key differences between pre-approval and pre-qualification and why it matters for your home search.",
      category: "Buying Process",
      readTime: "6 min read",
      link: "/blog/pre-approval-vs-pre-qualification",
    },
    {
      title: "Closing Costs in Michigan: What to Expect",
      description: "Understand all the closing costs you'll encounter when buying a home in Michigan and how to prepare for them.",
      category: "Buying Process",
      readTime: "8 min read",
      link: "/blog/closing-costs-michigan",
    },
    {
      title: "Home Inspection Checklist: What Inspectors Look For",
      description: "Complete guide to home inspections, what inspectors check, and how to use inspection results in negotiations.",
      category: "Buying Process",
      readTime: "9 min read",
      link: "/blog/home-inspection-checklist",
    },
    {
      title: "Refinancing Your First Home: When and Why",
      description: "Learn when refinancing makes sense, how to qualify, and what to consider before refinancing your mortgage.",
      category: "Buying Process",
      readTime: "7 min read",
      link: "/blog/refinancing-first-home",
    },
    {
      title: "Working with a Real Estate Agent in West Michigan",
      description: "Tips for finding and working with a great real estate agent who understands the West Michigan market.",
      category: "Buying Process",
      readTime: "6 min read",
      link: "/contact",
    },
  ];

  const categories = [
    "All Articles",
    "Loan Programs",
    "First-Time Buyers",
    "Credit & Finances",
    "Down Payment Help",
    "Buying Process",
  ];

  const filteredArticles = selectedCategory === "All Articles"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Learning Center - Homebuyer Guides & Resources | West Michigan</title>
        <meta 
          name="description" 
          content="Comprehensive guides on homebuying in West Michigan. Learn about loan programs, first-time buyer programs, down payment assistance, credit requirements, and the homebuying process." 
        />
        <link rel="canonical" href={`${SITE_URL}/learning-center`} />
        <meta property="og:title" content="Learning Center - Homebuyer Guides & Resources | West Michigan" />
        <meta property="og:description" content="Comprehensive guides on homebuying in West Michigan. Learn about loan programs, down payment assistance, and the homebuying process." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/learning-center`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-learning-center.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Learning Center - Homebuyer Guides & Resources" />
        <meta name="twitter:description" content="Comprehensive guides on homebuying in West Michigan. Learn about loan programs and the homebuying process." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-learning-center.jpg`} />
      </Helmet>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }]} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Learning Center
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about buying a home in West Michigan, from loan programs to the closing process.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-muted border-y border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {filteredArticles.length === 0 ? (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground text-lg">
                    No articles found in this category. Try selecting a different category.
                  </p>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredArticles.map((article, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{article.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{article.description}</p>
                      <Link 
                        to={article.link} 
                        className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                      >
                        Read Article <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Card>
                  ))}
                </div>
              )}
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <Card className="p-8 md:p-12 text-center bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Homebuying Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Connect with a local lender who can help you explore which programs you qualify for.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Pre-Qualified Today <ArrowRight className="w-5 h-5" />
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearningCenter;
