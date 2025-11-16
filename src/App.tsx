import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@/components/Analytics";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import Index from "./pages/Index";
import About from "./pages/About";
import LearningCenter from "./pages/LearningCenter";
import Contact from "./pages/Contact";
import VALoans from "./pages/VALoans";
import FirstTimeBuyer from "./pages/FirstTimeBuyer";
import FirstTimeBuyerPrograms from "./pages/FirstTimeBuyerPrograms";
import ZeroDownLoans from "./pages/ZeroDownLoans";
import MSHDALoans from "./pages/MSHDALoans";
import MSHDAInfoCenter from "./pages/MSHDAInfoCenter";
import NoMoneyDownGrandRapids from "./pages/NoMoneyDownGrandRapids";
import LowDownPaymentMichigan from "./pages/LowDownPaymentMichigan";
import DownPaymentAssistanceWestMichigan from "./pages/DownPaymentAssistanceWestMichigan";
import VALoansMichigan from "./pages/VALoansMichigan";
import FirstGenerationHomebuyerGrant from "./pages/FirstGenerationHomebuyerGrant";
import LowCreditScoreHomeBuying from "./pages/LowCreditScoreHomeBuying";
import DownPaymentAssistanceGrandRapids from "./pages/DownPaymentAssistanceGrandRapids";
import FHALoansExplained from "./pages/FHALoansExplained";
import HomeBuyingProcessStepByStep from "./pages/HomeBuyingProcessStepByStep";
import MSHDAMiHomeLoanGuide from "./pages/MSHDAMiHomeLoanGuide";
import ClosingCostsMichigan from "./pages/ClosingCostsMichigan";
import PreApprovalVsPreQualification from "./pages/PreApprovalVsPreQualification";
import MortgageRatesWestMichigan from "./pages/MortgageRatesWestMichigan";
import HomebuyerEducationMichigan from "./pages/HomebuyerEducationMichigan";
import DownPaymentGiftRules from "./pages/DownPaymentGiftRules";
import CreditScoreRequirementsByLoanType from "./pages/CreditScoreRequirementsByLoanType";
import FirstTimeHomebuyerTaxCreditsMichigan from "./pages/FirstTimeHomebuyerTaxCreditsMichigan";
import RefinancingFirstHome from "./pages/RefinancingFirstHome";
import HomeInspectionChecklist from "./pages/HomeInspectionChecklist";
import UnderstandingPMI from "./pages/UnderstandingPMI";
import WestMichiganLiving from "./pages/WestMichiganLiving";
import KentCounty from "./pages/counties/KentCounty";
import OttawaCounty from "./pages/counties/OttawaCounty";
import AlleganCounty from "./pages/counties/AlleganCounty";
import MuskegonCounty from "./pages/counties/MuskegonCounty";
import VanBurenCounty from "./pages/counties/VanBurenCounty";
import BarryCounty from "./pages/counties/BarryCounty";
import CalhounCounty from "./pages/counties/CalhounCounty";
import EatonCounty from "./pages/counties/EatonCounty";
import IoniaCounty from "./pages/counties/IoniaCounty";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Analytics />
        <StickyCTA />
        <ExitIntentPopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/va-loans" element={<VALoans />} />
          <Route path="/first-time-buyer" element={<FirstTimeBuyer />} />
          <Route path="/first-time-homebuyer-programs-west-michigan" element={<FirstTimeBuyerPrograms />} />
          <Route path="/zero-down-home-loans-michigan" element={<ZeroDownLoans />} />
          <Route path="/mshda-loans-michigan" element={<MSHDALoans />} />
          <Route path="/mshda-info-center" element={<MSHDAInfoCenter />} />
          <Route path="/no-money-down-grand-rapids" element={<NoMoneyDownGrandRapids />} />
          <Route path="/low-down-payment-michigan" element={<LowDownPaymentMichigan />} />
          <Route path="/down-payment-assistance-west-michigan" element={<DownPaymentAssistanceWestMichigan />} />
          <Route path="/va-loans-michigan" element={<VALoansMichigan />} />
          <Route path="/first-generation-homebuyer-grant-michigan" element={<FirstGenerationHomebuyerGrant />} />
          <Route path="/learning-center" element={<LearningCenter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/low-credit-score-home-buying" element={<LowCreditScoreHomeBuying />} />
          <Route path="/blog/down-payment-assistance-grand-rapids" element={<DownPaymentAssistanceGrandRapids />} />
          <Route path="/blog/fha-loans-explained" element={<FHALoansExplained />} />
          <Route path="/blog/home-buying-process-step-by-step" element={<HomeBuyingProcessStepByStep />} />
          <Route path="/blog/mshda-mi-home-loan-guide" element={<MSHDAMiHomeLoanGuide />} />
          <Route path="/blog/closing-costs-michigan" element={<ClosingCostsMichigan />} />
          <Route path="/blog/pre-approval-vs-pre-qualification" element={<PreApprovalVsPreQualification />} />
          <Route path="/blog/mortgage-rates-west-michigan" element={<MortgageRatesWestMichigan />} />
          <Route path="/blog/homebuyer-education-michigan" element={<HomebuyerEducationMichigan />} />
          <Route path="/blog/down-payment-gift-rules" element={<DownPaymentGiftRules />} />
          <Route path="/blog/credit-score-requirements-by-loan-type" element={<CreditScoreRequirementsByLoanType />} />
          <Route path="/blog/first-time-homebuyer-tax-credits-michigan" element={<FirstTimeHomebuyerTaxCreditsMichigan />} />
          <Route path="/blog/refinancing-first-home" element={<RefinancingFirstHome />} />
          <Route path="/blog/home-inspection-checklist" element={<HomeInspectionChecklist />} />
          <Route path="/blog/understanding-pmi" element={<UnderstandingPMI />} />
          <Route path="/west-michigan-living" element={<WestMichiganLiving />} />
          <Route path="/west-michigan-living/kent-county" element={<KentCounty />} />
          <Route path="/west-michigan-living/ottawa-county" element={<OttawaCounty />} />
          <Route path="/west-michigan-living/allegan-county" element={<AlleganCounty />} />
          <Route path="/west-michigan-living/muskegon-county" element={<MuskegonCounty />} />
          <Route path="/west-michigan-living/van-buren-county" element={<VanBurenCounty />} />
          <Route path="/west-michigan-living/barry-county" element={<BarryCounty />} />
          <Route path="/west-michigan-living/calhoun-county" element={<CalhounCounty />} />
          <Route path="/west-michigan-living/eaton-county" element={<EatonCounty />} />
          <Route path="/west-michigan-living/ionia-county" element={<IoniaCounty />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
