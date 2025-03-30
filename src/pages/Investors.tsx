
import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import InvestorDashboard from '@/components/dashboards/investor-dashboard';
import AIAssistant from '@/components/chat/ai-assistant';

const Investors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Investors</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover promising startups, perform due diligence, and manage your investment portfolio with AI assistance.
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Investor Dashboard</h2>
              <InvestorDashboard />
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your AI Investment Assistant</h2>
              <AIAssistant />
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Startup Discovery Engine</h3>
                  <p className="text-gray-600">AI-curated startup opportunities based on your investment thesis and preferences.</p>
                </div>
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Due Diligence Assistant</h3>
                  <p className="text-gray-600">Automated background checks and risk assessment of potential investments.</p>
                </div>
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Portfolio Performance Analytics</h3>
                  <p className="text-gray-600">Real-time monitoring and forecasting of your investment portfolio.</p>
                </div>
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Co-Investment Network</h3>
                  <p className="text-gray-600">Find compatible co-investors for deals based on investment history and preferences.</p>
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

export default Investors;
