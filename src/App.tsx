import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import HomePage from "./pages/HomePage";
import PermitsPage from "./pages/PermitsPage";
import HousingPage from "./pages/HousingPage";
import SchoolsPage from "./pages/SchoolsPage";
import NeighborhoodsPage from "./pages/NeighborhoodsPage";
import TaxationPage from "./pages/TaxationPage";
import SocialSecurityPage from "./pages/SocialSecurityPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/permits" element={<PermitsPage />} />
              <Route path="/housing" element={<HousingPage />} />
              <Route path="/schools" element={<SchoolsPage />} />
              <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
              <Route path="/taxation" element={<TaxationPage />} />
              <Route path="/social-security" element={<SocialSecurityPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
