import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Home, Award, CheckCircle } from "lucide-react";

interface Stat {
  icon: typeof TrendingUp;
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

const SocialProofStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ families: 0, loans: 0, approval: 0, years: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      icon: Users,
      value: "1,500",
      label: "Families Helped",
      suffix: "+",
    },
    {
      icon: Home,
      value: "2,000",
      label: "Loans Closed",
      suffix: "+",
    },
    {
      icon: TrendingUp,
      value: "95",
      label: "Approval Rate",
      suffix: "%",
    },
    {
      icon: Award,
      value: "15",
      label: "Years Experience",
      suffix: "+",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      families: 1500,
      loans: 2000,
      approval: 95,
      years: 15,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        families: Math.floor(targets.families * progress),
        loans: Math.floor(targets.loans * progress),
        approval: Math.floor(targets.approval * progress),
        years: Math.floor(targets.years * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  const successStories = [
    {
      customer: "The Martinez Family",
      location: "Grand Rapids, MI",
      situation: "First-time buyers with limited savings and a credit score of 620. Thought homeownership was years away.",
      solution: "Qualified for MSHDA MI Home Loan with $10,000 down payment assistance and below-market interest rates.",
      outcome: "Closed on a 3-bedroom home in 60 days. Monthly payment is $200 less than their previous rent.",
      loanType: "MSHDA MI Home Loan",
    },
    {
      customer: "James & Lisa Thompson",
      location: "Holland, MI",
      situation: "Veterans with good credit but no down payment saved. Wanted to buy before interest rates increased.",
      solution: "Used VA loan with zero down payment and no PMI. Lender helped them understand all their benefits.",
      outcome: "Purchased their dream home near Lake Michigan. Saved $15,000 in down payment and closing costs.",
      loanType: "VA Loan",
    },
    {
      customer: "Amanda Chen",
      location: "Wyoming, MI",
      situation: "Single parent with stable income but credit score of 580. Needed a safe neighborhood with good schools.",
      solution: "FHA loan with 3.5% down payment. Lender provided credit counseling to improve score before closing.",
      outcome: "Bought a home near excellent schools. Credit score improved to 640 during the process. Her daughter loves the new neighborhood.",
      loanType: "FHA Loan",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            let displayValue = "";

            if (stat.label === "Families Helped") {
              displayValue = `${counts.families.toLocaleString()}${stat.suffix || ""}`;
            } else if (stat.label === "Loans Closed") {
              displayValue = `${counts.loans.toLocaleString()}${stat.suffix || ""}`;
            } else if (stat.label === "Approval Rate") {
              displayValue = `${counts.approval}${stat.suffix || ""}`;
            } else if (stat.label === "Years Experience") {
              displayValue = `${counts.years}${stat.suffix || ""}`;
            }

            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="w-10 h-10 mx-auto mb-4 text-secondary" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {displayValue}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        {/* Success Stories */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real families. Real results. See how we've helped West Michigan residents achieve homeownership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Home className="w-6 h-6 text-secondary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{story.customer}</h3>
                    <p className="text-sm text-muted-foreground">{story.location}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      The Challenge
                    </p>
                    <p className="text-sm text-muted-foreground">{story.situation}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      The Solution
                    </p>
                    <p className="text-sm text-muted-foreground">{story.solution}</p>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-foreground mb-1">The Result</p>
                    <p className="text-sm text-foreground">{story.outcome}</p>
                  </div>
                </div>

                <span className="inline-block text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                  {story.loanType}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofStats;

