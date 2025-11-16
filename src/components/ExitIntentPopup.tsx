import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Download, X } from "lucide-react";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    // Check if popup has been shown in this session
    const shown = sessionStorage.getItem("exitIntentShown");
    if (shown === "true") {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is moving upward (toward browser close button)
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would send to backend/database
    console.log("Exit intent email captured:", email);
    
    toast({
      title: "Thank you!",
      description: "Your free guide will be sent to your email shortly.",
    });

    setEmail("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Wait! Get Your Free Homebuyer Guide
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Don't miss out on our comprehensive guide: <strong>"10 Steps to Homeownership in West Michigan"</strong>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div>
            <Label htmlFor="exit-email">Email Address *</Label>
            <Input
              id="exit-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="mt-1"
            />
          </div>

          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
            <Download className="w-5 h-5 mr-2" />
            Get My Free Guide
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            We'll send you the guide instantly. No spam, unsubscribe anytime.
          </p>
        </form>

        <Button
          variant="ghost"
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;

