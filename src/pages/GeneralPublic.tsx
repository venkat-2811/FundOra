
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import GeneralPublicDashboard from '@/components/dashboards/general-public-dashboard';
import AIAssistant from '@/components/chat/ai-assistant';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
                <Card className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Investment Discovery</h3>
                    <p className="text-gray-600 mb-4">AI-recommended investment options based on your personal goals, risk tolerance, and market conditions.</p>
                    <Link to="/general-public/investment-discovery">
                      <Button className="w-full bg-fundora-orange hover:bg-orange-600">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Financial Literacy Modules</h3>
                    <p className="text-gray-600 mb-4">Interactive learning paths with gamified progression to improve your financial knowledge.</p>
                    <Link to="/general-public/financial-literacy">
                      <Button className="w-full bg-fundora-orange hover:bg-orange-600">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Portfolio Simulation</h3>
                    <p className="text-gray-600 mb-4">Risk-free investment simulation with historical and AI-projected outcomes before investing real money.</p>
                    <Link to="/general-public/portfolio-simulation">
                      <Button className="w-full bg-fundora-orange hover:bg-orange-600">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Document Analyzer</h3>
                    <p className="text-gray-600 mb-4">Upload financial documents to get AI interpretation and advice for better financial decisions.</p>
                    <Link to="/general-public/document-analyzer">
                      <Button className="w-full bg-fundora-orange hover:bg-orange-600">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
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
