import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  variant?: "default" | "compact";
}

const FAQ = ({ variant = "default" }: FAQProps) => {
  const faqs = [
    {
      question: "Is this really free?",
      answer:
        "Yes, absolutely! Our service is completely free. We connect you with trusted local lenders who specialize in affordable loan programs. There's no cost to you for using our matching service, and consultations with our partner lenders are free with no obligation.",
    },
    {
      question: "Will I be spammed with calls?",
      answer:
        "No, we respect your privacy. We only share your information with verified local lenders who can help with your specific situation. You'll typically receive 1-2 calls from qualified lenders who specialize in programs that match your needs. You can always opt out at any time.",
    },
    {
      question: "How quickly will I hear back?",
      answer:
        "Most of our partner lenders respond within 2-4 hours during business hours. We prioritize quick responses because we know timing matters when you're ready to buy a home. You'll typically hear from a lender the same day you submit your information.",
    },
    {
      question: "What if I have bad credit?",
      answer:
        "Don't worry! Many of our partner lenders specialize in helping buyers with less-than-perfect credit. Programs like FHA loans accept credit scores as low as 580, and there are credit improvement programs available. Our lenders will work with you to find the best path forward.",
    },
    {
      question: "Do I need to be pre-approved first?",
      answer:
        "No, you don't need to be pre-approved to use our service. In fact, we can help you get pre-approved! Our partner lenders will guide you through the pre-approval process, which is the first step toward homeownership. They'll help you understand what you qualify for.",
    },
    {
      question: "What information do I need to provide?",
      answer:
        "You'll need basic information like your name, email, phone number, and city. You'll also be asked about whether you're a first-time buyer, your income range, and credit situation. This helps us match you with the right lenders and programs.",
    },
  ];

  if (variant === "compact") {
    return (
      <Accordion type="single" collapsible className="w-full">
        {faqs.slice(0, 3).map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers. Here are the most common questions we receive.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

