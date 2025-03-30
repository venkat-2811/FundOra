
import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import StartupDashboard from '@/components/dashboards/startup-dashboard';
import AIAssistant from '@/components/chat/ai-assistant';

const StartupFounders = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Startup Founders</h1>
          <p className="text-lg text-gray-600 mb-8">
            Connect with investors, get funding insights, and access growth tools for your startup.
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Startup Dashboard</h2>
              <StartupDashboard />
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your AI Funding Assistant</h2>
              <AIAssistant />
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Funding Readiness Assessment</h3>
                  <p className="text-gray-600">AI evaluation of your business model, market opportunity, and investor appeal.</p>
                </div>
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Investor Matching</h3>
                  <p className="text-gray-600">Proprietary algorithm connecting your startup with compatible investors based on multiple factors.</p>
                </div>
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Pitch Deck Analyzer</h3>
                  <p className="text-gray-600">AI feedback on pitch presentation materials to improve your funding success rate.</p>
                </div>
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Growth Projections</h3>
                  <p className="text-gray-600">AI-generated business forecasting with multiple scenarios to plan your growth strategy.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartupFounders;
