import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactMethod, setContactMethod] = useState<string>("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;

  const handleAnswer = (questionKey: keyof QuizAnswer, value: string) => {
    setAnswers({ ...answers, [questionKey]: value });
    if (step < totalSteps) {
      setStep(step + 1);
    }
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
    setContactMethod(method);
    setShowContactForm(true);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactInfo.name || !contactInfo.email || !contactInfo.phone || !contactInfo.city) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const results = calculateResults();
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          city: contactInfo.city,
          source: 'homeownership_quiz',
          quizAnswers: answers,
          quizPrograms: results.programs,
          quizIsEligible: results.isEligible,
          quizEstimatedFlow: results.estimatedFlow,
          contactMethod: contactMethod,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      toast({
        title: "Thank you!",
        description: `We'll reach out to you via ${contactMethod === 'phone' ? 'phone call' : contactMethod === 'text' ? 'text message' : 'email'} shortly with your personalized options.`,
      });

      // Reset form and close dialog
      setShowContactForm(false);
      setContactInfo({ name: "", email: "", phone: "", city: "" });
      setContactMethod("");
    } catch (error) {
      console.error('Quiz submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const results = step === totalSteps ? calculateResults() : null;

  return (
    <Card className="p-6 md:p-8 bg-card/95 backdrop-blur-sm">
      {step === 0 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Can You Buy a Home in Michigan? 🏡
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
            Let's Find Out Together ✨
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

          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
              {step === 1 && (
                <>
                  <h4 className="text-xl font-semibold text-foreground">
                    Would you be buying alone or with a co-borrower?
                  </h4>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question1", "alone")}
                    >
                      🙋 Just me
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question1", "co-borrower")}
                    >
                      👫 With a spouse or co-borrower
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question1", "not-sure")}
                    >
                      🤔 Not sure yet
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
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question2", "yes")}
                    >
                      🎖️ Yes
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question2", "no")}
                    >
                      👤 No
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
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question3", "yes")}
                    >
                      🏘️ Yes
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question3", "no")}
                    >
                      ✨ No
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
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question4", "under50")}
                    >
                      💵 Under $50,000
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question4", "50-80")}
                    >
                      💰 $50,000–$80,000
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question4", "80-120")}
                    >
                      💸 $80,000–$120,000
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question4", "over120")}
                    >
                      🤑 Over $120,000
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
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question5", "under500")}
                    >
                      📉 Under $500
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question5", "500-1000")}
                    >
                      📊 $500–$1,000
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question5", "1000-2000")}
                    >
                      📈 $1,000–$2,000
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question5", "over2000")}
                    >
                      💳 Over $2,000
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
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question6", "excellent")}
                    >
                      ⭐ Excellent (740+)
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question6", "good")}
                    >
                      👍 Good (680–739)
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question6", "fair")}
                    >
                      👌 Fair (620–679)
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                      onClick={() => handleAnswer("question6", "needs-improvement")}
                    >
                      💪 Needs improvement (below 620)
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
                    {[
                      { name: "Grand Rapids area", emoji: "🏙️" },
                      { name: "Muskegon", emoji: "🌊" },
                      { name: "Holland / Zeeland", emoji: "🌷" },
                      { name: "Kalamazoo", emoji: "🎓" },
                      { name: "Lansing", emoji: "🏛️" },
                      { name: "Other area", emoji: "📍" }
                    ].map((location) => (
                      <Button
                        key={location.name}
                        variant="outline"
                        className="w-full justify-start h-auto py-4 text-foreground hover:text-foreground hover:font-bold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105"
                        onClick={() => handleAnswer("question7", location.name.toLowerCase())}
                      >
                        {location.emoji} {location.name}
                      </Button>
                    ))}
                  </div>
                </>
              )}
            </div>
        </div>
      )}

      {results && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center space-y-2">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto animate-in zoom-in duration-500" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Here's what we found for you! 🎉
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
            }}
          >
            Start Over
          </Button>
        </div>
      )}

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              Get Your Personalized Options
            </DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              We'll connect you with a local expert who can help you explore your best options.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleContactSubmit} className="space-y-4 pt-4">
            <div>
              <Label htmlFor="quiz-name">Full Name *</Label>
              <Input
                id="quiz-name"
                type="text"
                required
                value={contactInfo.name}
                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                placeholder="John Smith"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="quiz-email">Email *</Label>
              <Input
                id="quiz-email"
                type="email"
                required
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                placeholder="john@example.com"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="quiz-phone">Phone *</Label>
              <Input
                id="quiz-phone"
                type="tel"
                required
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                placeholder="(616) 555-1234"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="quiz-city">City *</Label>
              <Input
                id="quiz-city"
                type="text"
                required
                value={contactInfo.city}
                onChange={(e) => setContactInfo({ ...contactInfo, city: e.target.value })}
                placeholder="Grand Rapids"
                className="mt-1"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit & Get Connected'}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Your information is secure and only shared with verified local lenders.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default HomeownershipQuiz;
