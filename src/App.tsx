import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import LearningCenter from "./pages/LearningCenter";
import Contact from "./pages/Contact";
import VALoans from "./pages/VALoans";
import FirstTimeBuyer from "./pages/FirstTimeBuyer";
import FirstTimeBuyerPrograms from "./pages/FirstTimeBuyerPrograms";
import ZeroDownLoans from "./pages/ZeroDownLoans";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/va-loans" element={<VALoans />} />
          <Route path="/first-time-buyer" element={<FirstTimeBuyer />} />
          <Route path="/first-time-homebuyer-programs-west-michigan" element={<FirstTimeBuyerPrograms />} />
          <Route path="/zero-down-home-loans-michigan" element={<ZeroDownLoans />} />
          <Route path="/learning-center" element={<LearningCenter />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
