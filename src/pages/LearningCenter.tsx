import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LearningCenter = () => {
  const articles = [
    {
      title: "Zero Down Payment Loans in Michigan: Your Complete Guide",
      description: "Learn about VA and USDA loans that allow you to buy a home with no down payment. Discover eligibility requirements and how to apply.",
      category: "Loan Programs",
      readTime: "8 min read",
    },
    {
      title: "Best First-Time Homebuyer Programs in West Michigan",
      description: "Explore MSHDA, FHA, and conventional programs designed specifically for first-time buyers in the Grand Rapids area.",
      category: "First-Time Buyers",
      readTime: "10 min read",
    },
    {
      title: "How to Buy a Home with a Low Credit Score",
      description: "Your credit isn't perfect? No problem. Learn which loan programs are available and how to improve your chances of approval.",
      category: "Credit & Finances",
      readTime: "7 min read",
    },
    {
      title: "Down Payment Assistance Programs in Grand Rapids",
      description: "Discover local and state programs that can help you cover your down payment and closing costs.",
      category: "Down Payment Help",
      readTime: "6 min read",
    },
    {
      title: "FHA Loans Explained: Is 3.5% Down Right for You?",
      description: "Everything you need to know about FHA loans, including benefits, requirements, and how they compare to conventional mortgages.",
      category: "Loan Programs",
      readTime: "9 min read",
    },
    {
      title: "The Complete Home Buying Process: Step by Step",
      description: "From pre-approval to closing day, understand every step of the homebuying journey in West Michigan.",
      category: "Buying Process",
      readTime: "12 min read",
    },
    {
      title: "VA Loans for Veterans: Zero Down in West Michigan",
      description: "Learn how veterans and active military can take advantage of VA loan benefits to buy a home with no down payment.",
      category: "Loan Programs",
      readTime: "8 min read",
    },
    {
      title: "MSHDA MI Home Loan: Michigan's Best-Kept Secret",
      description: "Discover how MSHDA's programs can help you get down payment assistance and lower interest rates.",
      category: "Down Payment Help",
      readTime: "7 min read",
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

  return (
    <div className="min-h-screen flex flex-col">
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
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{article.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{article.description}</p>
                <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </Card>
            ))}
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
