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
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send to backend/database
    console.log("Lead submitted:", formData);
    
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
    });
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

        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
          Check My Eligibility
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Your information is secure and only shared with verified local lenders.
        </p>
      </div>
    </form>
  );
};

export default LeadForm;
