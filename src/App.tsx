
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GeneralPublic from "./pages/GeneralPublic";
import StartupFounders from "./pages/StartupFounders";
import Investors from "./pages/Investors";
import Students from "./pages/Students";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import OnboardingRoute from "./components/OnboardingRoute";

// Feature Pages
import InvestorDiscovery from "./pages/features/investor/InvestorDiscovery";
import DueDiligence from "./pages/features/investor/DueDiligence";
import PortfolioAnalytics from "./pages/features/investor/PortfolioAnalytics";
import CoInvestmentNetwork from "./pages/features/investor/CoInvestmentNetwork";
import FundingReadiness from "./pages/features/startup/FundingReadiness";
import InvestorMatching from "./pages/features/startup/InvestorMatching";
import PitchDeckAnalyzer from "./pages/features/startup/PitchDeckAnalyzer";
import GrowthProjections from "./pages/features/startup/GrowthProjections";
import StudentSimulator from "./pages/features/student/StudentSimulator";
import FinancialLiteracy from "./pages/features/student/FinancialLiteracy";
import MicroInvestment from "./pages/features/student/MicroInvestment";
import CareerExplorer from "./pages/features/student/CareerExplorer";
import PublicInvestmentDiscovery from "./pages/features/public/PublicInvestmentDiscovery";
import PublicFinancialLiteracy from "./pages/features/public/PublicFinancialLiteracy";
import PortfolioSimulation from "./pages/features/public/PortfolioSimulation";
import DocumentAnalyzer from "./pages/features/public/DocumentAnalyzer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* General Public Routes */}
            <Route 
              path="/general-public" 
              element={
                <ProtectedRoute requiredUserType="general_public">
                  <GeneralPublic />
                </ProtectedRoute>
              } 
            />
            <Route
              path="/general-public/investment-discovery"
              element={
                <ProtectedRoute requiredUserType="general_public">
                  <PublicInvestmentDiscovery />
                </ProtectedRoute>
              }
            />
            <Route
              path="/general-public/financial-literacy"
              element={
                <ProtectedRoute requiredUserType="general_public">
                  <PublicFinancialLiteracy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/general-public/portfolio-simulation"
              element={
                <ProtectedRoute requiredUserType="general_public">
                  <PortfolioSimulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/general-public/document-analyzer"
              element={
                <ProtectedRoute requiredUserType="general_public">
                  <DocumentAnalyzer />
                </ProtectedRoute>
              }
            />
            
            {/* Startup Founders Routes */}
            <Route 
              path="/startup-founders" 
              element={
                <OnboardingRoute requiredUserType="startup_founder">
                  <StartupFounders />
                </OnboardingRoute>
              } 
            />
            <Route
              path="/startup-founders/funding-readiness"
              element={
                <OnboardingRoute requiredUserType="startup_founder">
                  <FundingReadiness />
                </OnboardingRoute>
              }
            />
            <Route
              path="/startup-founders/investor-matching"
              element={
                <OnboardingRoute requiredUserType="startup_founder">
                  <InvestorMatching />
                </OnboardingRoute>
              }
            />
            <Route
              path="/startup-founders/pitch-deck-analyzer"
              element={
                <OnboardingRoute requiredUserType="startup_founder">
                  <PitchDeckAnalyzer />
                </OnboardingRoute>
              }
            />
            <Route
              path="/startup-founders/growth-projections"
              element={
                <OnboardingRoute requiredUserType="startup_founder">
                  <GrowthProjections />
                </OnboardingRoute>
              }
            />
            
            {/* Investors Routes */}
            <Route 
              path="/investors" 
              element={
                <OnboardingRoute requiredUserType="investor">
                  <Investors />
                </OnboardingRoute>
              } 
            />
            <Route
              path="/investors/startup-discovery"
              element={
                <OnboardingRoute requiredUserType="investor">
                  <InvestorDiscovery />
                </OnboardingRoute>
              }
            />
            <Route
              path="/investors/due-diligence"
              element={
                <OnboardingRoute requiredUserType="investor">
                  <DueDiligence />
                </OnboardingRoute>
              }
            />
            <Route
              path="/investors/portfolio-analytics"
              element={
                <OnboardingRoute requiredUserType="investor">
                  <PortfolioAnalytics />
                </OnboardingRoute>
              }
            />
            <Route
              path="/investors/co-investment-network"
              element={
                <OnboardingRoute requiredUserType="investor">
                  <CoInvestmentNetwork />
                </OnboardingRoute>
              }
            />
            
            {/* Students Routes */}
            <Route 
              path="/students" 
              element={
                <ProtectedRoute requiredUserType="student">
                  <Students />
                </ProtectedRoute>
              } 
            />
            <Route
              path="/students/entrepreneurship-simulator"
              element={
                <ProtectedRoute requiredUserType="student">
                  <StudentSimulator />
                </ProtectedRoute>
              }
            />
            <Route
              path="/students/financial-literacy"
              element={
                <ProtectedRoute requiredUserType="student">
                  <FinancialLiteracy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/students/micro-investment"
              element={
                <ProtectedRoute requiredUserType="student">
                  <MicroInvestment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/students/career-explorer"
              element={
                <ProtectedRoute requiredUserType="student">
                  <CareerExplorer />
                </ProtectedRoute>
              }
            />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
