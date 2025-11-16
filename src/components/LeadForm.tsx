import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  variant?: "hero" | "sidebar";
}

const LeadForm = ({ variant = "hero" }: LeadFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    firstTimeBuyer: "",
    mostImportant: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.currentTarget as HTMLFormElement;
    // Disable submit button during submission
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton?.textContent || 'Check My Eligibility';
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
    }

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'lead_form'
        }),
      });

      // Get response as text first, then try to parse as JSON
      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (jsonError) {
        // If response is not JSON, use the text as error message
        throw new Error(`Server error: ${response.status} ${response.statusText}. ${responseText || 'Unknown error'}`);
      }

      if (!response.ok) {
        const errorMessage = data.error || data.message || 'Failed to submit';
        console.error('API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: data
        });
        throw new Error(errorMessage);
      }

      toast({
        title: "Thank you for your interest!",
        description: "A local lending specialist will contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        firstTimeBuyer: "",
        mostImportant: "",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again or contact us directly.';
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      // Re-enable submit button
      const form = e.currentTarget as HTMLFormElement;
      const submitButton = form?.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const formClasses = variant === "hero" 
    ? "bg-background/95 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-border"
    : "bg-card p-6 rounded-lg shadow-md border border-border";

  return (
    <form onSubmit={handleSubmit} className={formClasses}>
      <h3 className="text-2xl font-bold text-foreground mb-2">
        Find Out Which Programs You Qualify For
      </h3>
      <p className="text-muted-foreground mb-6">
        Get matched with trusted West Michigan lenders
      </p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="John Smith"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="john@example.com"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="(616) 555-1234"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            type="text"
            required
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="Grand Rapids"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="firstTimeBuyer">Are you a first-time buyer?</Label>
          <Select value={formData.firstTimeBuyer} onValueChange={(value) => handleChange("firstTimeBuyer", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
              <SelectItem value="not-sure">Not sure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="mostImportant">What is most important to your home buying?</Label>
          <Select value={formData.mostImportant} onValueChange={(value) => handleChange("mostImportant", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lowest-rate">Lowest rate</SelectItem>
              <SelectItem value="lowest-down-payment">Lowest down payment</SelectItem>
              <SelectItem value="established-lender">Established lender</SelectItem>
              <SelectItem value="time-to-close">Time to close</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
          Check My Eligibility
        </Button>

        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Average response time:</span>
            <span>2 hours</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Join</span>
            <span className="font-semibold text-foreground">1,500+ happy homeowners</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border">
            <span className="flex items-center gap-1">
              <span className="text-green-600">✓</span> Free Consultation
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-600">✓</span> No Obligation
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-600">✓</span> 100% Secure
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-600">✓</span> We Never Sell Your Info
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Your information is secure and only shared with verified local lenders.
          </p>
        </div>
      </div>
    </form>
  );
};

export default LeadForm;
