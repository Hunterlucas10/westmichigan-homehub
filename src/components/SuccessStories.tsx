import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Home } from "lucide-react";

interface SuccessStory {
  customer: string;
  location: string;
  situation: string;
  solution: string;
  outcome: string;
  loanType: string;
}

interface SuccessStoriesProps {
  variant?: "default" | "compact";
}

const SuccessStories = ({ variant = "default" }: SuccessStoriesProps) => {
  const stories: SuccessStory[] = [
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

  if (variant === "compact") {
    return (
      <div className="space-y-4">
        {stories.slice(0, 2).map((story, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Home className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{story.customer}</h3>
                <p className="text-sm text-muted-foreground mb-3">{story.location}</p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Situation:</strong> {story.situation}
                </p>
                <p className="text-sm text-foreground">
                  <strong>Result:</strong> {story.outcome}
                </p>
              </div>
            </div>
            <span className="inline-block text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">
              {story.loanType}
            </span>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            Real families. Real results. See how we've helped West Michigan residents achieve homeownership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
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
    </section>
  );
};

export default SuccessStories;

