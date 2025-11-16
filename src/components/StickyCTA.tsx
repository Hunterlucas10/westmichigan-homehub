import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasFormInViewport, setHasFormInViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);

      // Check if a form is in viewport
      const forms = document.querySelectorAll('form, [id*="lead-form"], [id*="contact"]');
      let formVisible = false;

      forms.forEach((form) => {
        const rect = form.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          formVisible = true;
        }
      });

      setHasFormInViewport(formVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show if form is visible or button shouldn't be visible
  if (!isVisible || hasFormInViewport) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 animate-in fade-in slide-in-from-bottom-4">
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-lg bg-accent hover:bg-accent/90 text-sm md:text-lg px-4 py-4 md:px-6 md:py-6 h-auto"
      >
        <Link to="/contact">
          <ArrowUp className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
          <span className="hidden sm:inline">Get Pre-Qualified</span>
          <span className="sm:hidden">Get Pre-Qual</span>
        </Link>
      </Button>
    </div>
  );
};

export default StickyCTA;

