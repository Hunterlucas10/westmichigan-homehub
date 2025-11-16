import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  loanType: string;
  photo?: string;
}

interface TestimonialsProps {
  variant?: "default" | "compact";
}

const Testimonials = ({ variant = "default" }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah & Mike Johnson",
      location: "Grand Rapids, MI",
      rating: 5,
      text: "We thought buying a home was impossible with our savings. The MSHDA program helped us get into our dream home with just $10,000 in down payment assistance. The process was smooth and our lender was amazing!",
      loanType: "MSHDA MI Home Loan",
    },
    {
      name: "David Martinez",
      location: "Holland, MI",
      rating: 5,
      text: "As a first-time buyer, I was overwhelmed. The team connected me with a local lender who walked me through every step. I closed on my home in 45 days with an FHA loan and couldn't be happier!",
      loanType: "FHA Loan",
    },
    {
      name: "Jennifer & Tom Williams",
      location: "Wyoming, MI",
      rating: 5,
      text: "We found out about zero-down USDA loans through this site. We never thought we could buy in the suburbs, but we qualified and moved into our perfect home last month. Thank you!",
      loanType: "USDA Loan",
    },
    {
      name: "Robert Chen",
      location: "Kentwood, MI",
      rating: 5,
      text: "The VA loan process seemed complicated, but the lender they matched me with made it simple. Zero down payment, no PMI, and I'm now a homeowner. This service is a game-changer!",
      loanType: "VA Loan",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  if (variant === "compact") {
    return (
      <div className="space-y-4">
        {testimonials.slice(0, 2).map((testimonial, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
              <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                {testimonial.loanType}
              </span>
            </div>
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
            What Our Homebuyers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real stories from real families who achieved homeownership in West Michigan
          </p>
        </div>

        <div className="relative">
          <Card className="p-8 md:p-12">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-foreground mb-8 italic">
              "{current.text}"
            </blockquote>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xl font-semibold text-foreground mb-1">{current.name}</p>
                <p className="text-muted-foreground">{current.location}</p>
              </div>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">
                {current.loanType}
              </span>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-secondary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

