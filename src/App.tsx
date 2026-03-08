import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectAssetInventory from "./pages/ProjectAssetInventory";
import ProjectSafetyPlanning from "./pages/ProjectSafetyPlanning";
import ProjectHBUAnalysis from "./pages/ProjectHBUAnalysis";
import ProjectPravas from "./pages/ProjectPravas";
import ProjectSnapSpend from "./pages/ProjectSnapSpend";
import ProjectAsetrace from "./pages/ProjectAsetrace";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/asset-inventory" element={<ProjectAssetInventory />} />
            <Route path="/project/safety-planning" element={<ProjectSafetyPlanning />} />
            <Route path="/project/hbu-analysis" element={<ProjectHBUAnalysis />} />
            <Route path="/project/pravas" element={<ProjectPravas />} />
            <Route path="/project/snapspend" element={<ProjectSnapSpend />} />
            <Route path="/project/asetrace" element={<ProjectAsetrace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
