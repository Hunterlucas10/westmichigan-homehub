import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Phone, MessageSquare, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type QuizAnswer = {
  question1?: string;
  question2?: string;
  question3?: string;
  question4?: string;
  question5?: string;
  question6?: string;
  question7?: string;
};

const HomeownershipQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer>({});
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const { toast } = useToast();

  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;

  const handleAnswer = (questionKey: keyof QuizAnswer, value: string, message: string) => {
    setAnswers({ ...answers, [questionKey]: value });
    setCurrentMessage(message);
    setShowMessage(true);
    
    setTimeout(() => {
      setShowMessage(false);
      setTimeout(() => {
        if (step < totalSteps) {
          setStep(step + 1);
        }
      }, 300);
    }, 2500);
  };

  const calculateResults = () => {
    const programs: string[] = [];
    let isEligible = true;

    if (answers.question2 === "yes") {
      programs.push("VA Loan (0% down, no PMI)");
      programs.push("MSHDA MI Home Loan");
    }

    if (answers.question3 === "no") {
      programs.push("MSHDA Down Payment Assistance (up to $10,000)");
      if (answers.question4 === "under50" || answers.question4 === "50-80") {
        programs.push("Local Grand Rapids Homebuyer Grant");
      }
    }

    if (answers.question6 === "excellent" || answers.question6 === "good") {
      programs.push("Conventional 97 Loan (3% down)");
      programs.push("Fannie Mae HomeReady");
    }

    if (answers.question6 === "fair") {
      programs.push("FHA Low-Down-Payment Mortgage (3.5% down)");
    }

    if (answers.question6 === "needs-improvement") {
      programs.push("Credit Builder Programs");
      programs.push("Next Steps to Get Mortgage Ready");
      isEligible = false;
    }

    const incomeLevel = answers.question4;
    const debtLevel = answers.question5;
    let estimatedFlow = true;

    if (incomeLevel === "under50" && (debtLevel === "1000-2000" || debtLevel === "over2000")) {
      estimatedFlow = false;
    }

    return { programs: [...new Set(programs)], isEligible, estimatedFlow };
  };

  const handleContact = (method: string) => {
    toast({
      title: "Request Received!",
      description: `We'll reach out to you via ${method} shortly with your personalized options.`,
    });
  };

  const results = step === totalSteps ? calculateResults() : null;

  return (
    <Card className="p-6 md:p-8 bg-card/95 backdrop-blur-sm">
      {step === 0 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Can You Buy a Home in Michigan?
            </h3>
            <p className="text-muted-foreground">
              See what programs and assistance might make homeownership possible for you.
            </p>
          </div>
          <Button 
            onClick={() => setStep(1)} 
            size="lg" 
            className="w-full"
          >
            Let's Find Out Together
          </Button>
        </div>
      )}

      {step > 0 && step <= totalSteps && (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
          </div>

          {showMessage ? (
            <div className="animate-fade-in bg-secondary/20 border border-secondary p-4 rounded-lg">
              <p className="text-foreground flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                {currentMessage}
              </p>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              {step === 1 && (
                <>
                  <h4 className="text-xl font-semibold text-foreground">
                    Would you be buying alone or with a co-borrower?
                  </h4>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question1", "alone", "Nice! Many buyers qualify solo — let's see what works for you!")}
                    >
                      Just me
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question1", "co-borrower", "Nice! Having a co-borrower can often boost your approval odds — but many buyers qualify solo, too!")}
                    >
                      With a spouse or co-borrower
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question1", "not-sure", "No problem! We can explore options for both scenarios.")}
                    >
                      Not sure yet
                    </Button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h4 className="text-xl font-semibold text-foreground">
                    Are you or your co-borrower a veteran?
                  </h4>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question2", "yes", "Awesome! You may qualify for a VA Loan — 0% down and no mortgage insurance!")}
                    >
                      Yes
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question2", "no", "No worries! There are plenty of low and zero down programs beyond VA options.")}
                    >
                      No
                    </Button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h4 className="text-xl font-semibold text-foreground">
                    Have you owned a home before?
                  </h4>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question3", "yes", "Great! Did you know some first-time buyer programs can still benefit repeat buyers?")}
                    >
                      Yes
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question3", "no", "Perfect — Michigan has several grants just for first-time buyers!")}
                    >
                      No
                    </Button>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h4 className="text-xl font-semibold text-foreground">
                    What best describes your household income (before taxes)?
                  </h4>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question4", "under50", "Got it! Most Michigan programs are income-based, so your range helps us match you with the right fit.")}
                    >
                      Under $50,000
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question4", "50-80", "Got it! Most Michigan programs are income-based, so your range helps us match you with the right fit.")}
                    >
                      $50,000–$80,000
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question4", "80-120", "Got it! Most Michigan programs are income-based, so your range helps us match you with the right fit.")}
                    >
                      $80,000–$120,000
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question4", "over120", "Got it! Most Michigan programs are income-based, so your range helps us match you with the right fit.")}
                    >
                      Over $120,000
                    </Button>
                  </div>
                </>
              )}

              {step === 5 && (
                <>
                  <h4 className="text-xl font-semibold text-foreground">
                    What are your total monthly debts (car, credit cards, loans)?
                  </h4>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question5", "under500", "Thanks! We'll use this to estimate your cash flow and see which programs could fit best.")}
                    >
                      Under $500
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question5", "500-1000", "Thanks! We'll use this to estimate your cash flow and see which programs could fit best.")}
                    >
                      $500–$1,000
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question5", "1000-2000", "Thanks! We'll use this to estimate your cash flow and see which programs could fit best.")}
                    >
                      $1,000–$2,000
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question5", "over2000", "Thanks! We'll use this to estimate your cash flow and see which programs could fit best.")}
                    >
                      Over $2,000
                    </Button>
                  </div>
                </>
              )}

              {step === 6 && (
                <>
                  <h4 className="text-xl font-semibold text-foreground">
                    How would you rate your credit score?
                  </h4>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question6", "excellent", "Fantastic! You'll likely have multiple loan and assistance options.")}
                    >
                      Excellent (740+)
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question6", "good", "Nice! You're in great shape for several popular loan programs.")}
                    >
                      Good (680–739)
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question6", "fair", "You're close! Some lenders and programs are flexible with credit scores.")}
                    >
                      Fair (620–679)
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                      onClick={() => handleAnswer("question6", "needs-improvement", "That's okay — homeownership can still be on the horizon. We'll show programs designed to help you get ready.")}
                    >
                      Needs improvement (below 620)
                    </Button>
                  </div>
                </>
              )}

              {step === 7 && (
                <>
                  <h4 className="text-xl font-semibold text-foreground">
                    Where in Michigan are you looking to buy?
                  </h4>
                  <div className="space-y-3">
                    {["Grand Rapids area", "Muskegon", "Holland / Zeeland", "Kalamazoo", "Lansing", "Other area"].map((location) => (
                      <Button
                        key={location}
                        variant="outline"
                        className="w-full justify-start h-auto py-4 hover:bg-secondary/10 hover:border-secondary"
                        onClick={() => handleAnswer("question7", location.toLowerCase(), "Perfect! There are local grants and programs specific to your area — let's check your options.")}
                      >
                        {location}
                      </Button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {results && (
        <div className="space-y-6 animate-fade-in">
          <div className="text-center space-y-2">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Here's what we found for you!
            </h3>
          </div>

          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 space-y-4">
            {results.isEligible && results.estimatedFlow && (
              <p className="text-foreground font-medium">
                Based on what you shared, you may qualify for:
              </p>
            )}
            {!results.isEligible || !results.estimatedFlow ? (
              <p className="text-foreground">
                You're on your way! Even if you don't qualify today, you're closer than you think. 
                A quick chat with a local expert can help you plan your path to homeownership.
              </p>
            ) : null}
            
            <ul className="space-y-3">
              {results.programs.map((program, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{program}</span>
                </li>
              ))}
            </ul>

            {results.isEligible && results.estimatedFlow && (
              <p className="text-foreground font-medium pt-2">
                Your estimated cash flow looks strong! You're closer than you think to owning a home.
              </p>
            )}
          </div>

          <div className="space-y-4">
            <p className="text-center text-foreground font-medium">
              Would you like to explore your best options with a local professional?
            </p>
            <div className="grid gap-3">
              <Button
                size="lg"
                className="w-full"
                onClick={() => handleContact("phone")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Request a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={() => handleContact("text")}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Text Me Info
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={() => handleContact("email")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email My Options
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Your answers aren't shared publicly. We'll simply connect you with a friendly, local expert who can help you take the next step — no pressure, just guidance.
            </p>
          </div>

          <Button
            variant="ghost"
            className="w-full"
            onClick={() => {
              setStep(0);
              setAnswers({});
              setShowMessage(false);
            }}
          >
            Start Over
          </Button>
        </div>
      )}
    </Card>
  );
};

export default HomeownershipQuiz;
