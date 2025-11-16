import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Home, Award } from "lucide-react";

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

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default SocialProofStats;

