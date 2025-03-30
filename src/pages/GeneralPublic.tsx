
import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import GeneralPublicDashboard from '@/components/dashboards/general-public-dashboard';
import AIAssistant from '@/components/chat/ai-assistant';

const GeneralPublic = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">General Public & Retail Investors</h1>
          <p className="text-lg text-gray-600 mb-8">
            Personalized financial guidance and investment opportunities tailored for you.
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Financial Dashboard</h2>
              <GeneralPublicDashboard />
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your AI Financial Assistant</h2>
              <AIAssistant />
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Investment Discovery</h3>
                  <p className="text-gray-600">AI-recommended investment options based on your personal goals, risk tolerance, and market conditions.</p>
                </div>
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Financial Literacy Modules</h3>
                  <p className="text-gray-600">Interactive learning paths with gamified progression to improve your financial knowledge.</p>
                </div>
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Portfolio Simulation</h3>
                  <p className="text-gray-600">Risk-free investment simulation with historical and AI-projected outcomes before investing real money.</p>
                </div>
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Document Analyzer</h3>
                  <p className="text-gray-600">Upload financial documents to get AI interpretation and advice for better financial decisions.</p>
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

export default GeneralPublic;
