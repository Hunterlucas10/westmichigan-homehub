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
import { Phone } from "lucide-react";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactInfo.name || !contactInfo.email || !contactInfo.phone) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          city: '',
          firstTimeBuyer: '',
          mostImportant: '',
          source: 'exit_intent_popup'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      toast({
        title: "Thank you!",
        description: "A specialist will reach out to you shortly to help make your homebuying journey easier.",
      });

      setContactInfo({ name: "", email: "", phone: "" });
      setIsOpen(false);
    } catch (error) {
      console.error('Exit intent submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl text-center">
            Can We Make This Easier for You?
          </DialogTitle>
          <DialogDescription className="text-center text-sm md:text-base pt-2">
            Let a local homebuying specialist reach out to help you find the best programs and lenders for your situation. <strong>No cost, no obligation.</strong>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 pt-2">
          <div>
            <Label htmlFor="exit-name" className="text-sm">Full Name *</Label>
            <Input
              id="exit-name"
              type="text"
              required
              value={contactInfo.name}
              onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
              placeholder="John Smith"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="exit-email" className="text-sm">Email Address *</Label>
            <Input
              id="exit-email"
              type="email"
              required
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              placeholder="your@email.com"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="exit-phone" className="text-sm">Phone Number *</Label>
            <Input
              id="exit-phone"
              type="tel"
              required
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
              placeholder="(616) 555-1234"
              className="mt-1"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button 
              type="submit" 
              className="flex-1 bg-accent hover:bg-accent/90 text-sm md:text-base py-3"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Yes, Have Someone Reach Out</span>
              <span className="sm:hidden">Yes, Reach Out</span>
            </Button>
            <Button 
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 text-sm md:text-base py-3"
            >
              No Thanks
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center pt-1">
            Your information is secure and only shared with verified local lenders. We never sell your info.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;

