
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
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route 
              path="/general-public" 
              element={
                <ProtectedRoute requiredUserType="general_public">
                  <GeneralPublic />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/startup-founders" 
              element={
                <ProtectedRoute requiredUserType="startup_founder">
                  <StartupFounders />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/investors" 
              element={
                <ProtectedRoute requiredUserType="investor">
                  <Investors />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/students" 
              element={
                <ProtectedRoute requiredUserType="student">
                  <Students />
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
