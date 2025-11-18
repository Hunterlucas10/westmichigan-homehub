import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const Sitemap = () => {
  const mainPages = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Learning Center", url: "/learning-center" },
  ];

  const loanPrograms = [
    { name: "VA Loans", url: "/va-loans" },
    { name: "VA Loans Michigan", url: "/va-loans-michigan" },
    { name: "Zero Down Home Loans", url: "/zero-down-home-loans-michigan" },
    { name: "MSHDA Loans", url: "/mshda-loans-michigan" },
    { name: "MSHDA Info Center", url: "/mshda-info-center" },
    { name: "First-Time Buyer Programs", url: "/first-time-homebuyer-programs-west-michigan" },
    { name: "First-Time Buyer Guide", url: "/first-time-buyer" },
    { name: "Low Down Payment Michigan", url: "/low-down-payment-michigan" },
    { name: "No Money Down Grand Rapids", url: "/no-money-down-grand-rapids" },
    { name: "Down Payment Assistance West Michigan", url: "/down-payment-assistance-west-michigan" },
    { name: "First Generation Homebuyer Grant", url: "/first-generation-homebuyer-grant-michigan" },
  ];

  const blogArticles = [
    { name: "How to Buy a Home with a Low Credit Score", url: "/blog/low-credit-score-home-buying" },
    { name: "Down Payment Assistance Programs in Grand Rapids", url: "/blog/down-payment-assistance-grand-rapids" },
    { name: "FHA Loans Explained", url: "/blog/fha-loans-explained" },
    { name: "The Complete Home Buying Process: Step by Step", url: "/blog/home-buying-process-step-by-step" },
    { name: "MSHDA MI Home Loan Guide", url: "/blog/mshda-mi-home-loan-guide" },
    { name: "Closing Costs in Michigan", url: "/blog/closing-costs-michigan" },
    { name: "Pre-Approval vs Pre-Qualification", url: "/blog/pre-approval-vs-pre-qualification" },
    { name: "Mortgage Rates in West Michigan", url: "/blog/mortgage-rates-west-michigan" },
    { name: "Homebuyer Education Requirements in Michigan", url: "/blog/homebuyer-education-michigan" },
    { name: "Down Payment Gift Rules", url: "/blog/down-payment-gift-rules" },
    { name: "Credit Score Requirements by Loan Type", url: "/blog/credit-score-requirements-by-loan-type" },
    { name: "First-Time Homebuyer Tax Credits in Michigan", url: "/blog/first-time-homebuyer-tax-credits-michigan" },
    { name: "Refinancing Your First Home", url: "/blog/refinancing-first-home" },
    { name: "Home Inspection Checklist", url: "/blog/home-inspection-checklist" },
    { name: "Understanding PMI: Private Mortgage Insurance", url: "/blog/understanding-pmi" },
  ];

  const counties = [
    { name: "West Michigan Living", url: "/west-michigan-living" },
    { name: "Kent County", url: "/west-michigan-living/kent-county" },
    { name: "Ottawa County", url: "/west-michigan-living/ottawa-county" },
    { name: "Allegan County", url: "/west-michigan-living/allegan-county" },
    { name: "Muskegon County", url: "/west-michigan-living/muskegon-county" },
    { name: "Van Buren County", url: "/west-michigan-living/van-buren-county" },
    { name: "Barry County", url: "/west-michigan-living/barry-county" },
    { name: "Calhoun County", url: "/west-michigan-living/calhoun-county" },
    { name: "Eaton County", url: "/west-michigan-living/eaton-county" },
    { name: "Ionia County", url: "/west-michigan-living/ionia-county" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sitemap - West Michigan Homebuyer Hub | All Pages</title>
        <meta 
          name="description" 
          content="Complete sitemap of West Michigan Homebuyer Hub. Find all loan programs, blog articles, county guides, and resources for homebuyers in West Michigan." 
        />
        <link rel="canonical" href={`${SITE_URL}/sitemap`} />
        <meta property="og:title" content="Sitemap - West Michigan Homebuyer Hub" />
        <meta property="og:description" content="Complete sitemap of all pages on West Michigan Homebuyer Hub." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/sitemap`} />
      </Helmet>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Sitemap", url: "/sitemap" }]} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Sitemap
            </h1>
            <p className="text-xl text-muted-foreground text-center">
              Find all pages and resources on West Michigan Homebuyer Hub
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Pages */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Main Pages</h2>
              <ul className="space-y-2">
                {mainPages.map((page) => (
                  <li key={page.url}>
                    <Link 
                      to={page.url} 
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Loan Programs */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Loan Programs</h2>
              <ul className="space-y-2">
                {loanPrograms.map((program) => (
                  <li key={program.url}>
                    <Link 
                      to={program.url} 
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Blog Articles */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Blog Articles & Guides</h2>
              <ul className="space-y-2">
                {blogArticles.map((article) => (
                  <li key={article.url}>
                    <Link 
                      to={article.url} 
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      {article.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Counties */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">West Michigan Counties</h2>
              <ul className="space-y-2">
                {counties.map((county) => (
                  <li key={county.url}>
                    <Link 
                      to={county.url} 
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      {county.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sitemap;

