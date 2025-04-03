
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import InvestorDashboard from '@/components/dashboards/investor-dashboard';
import AIAssistant from '@/components/chat/ai-assistant';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
                <Card className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Startup Discovery Engine</h3>
                    <p className="text-gray-600 mb-4">AI-curated startup opportunities based on your investment thesis and preferences.</p>
                    <Link to="/investors/startup-discovery">
                      <Button className="w-full bg-fundora-orange hover:bg-orange-600">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Due Diligence Assistant</h3>
                    <p className="text-gray-600 mb-4">Automated background checks and risk assessment of potential investments.</p>
                    <Link to="/investors/due-diligence">
                      <Button className="w-full bg-fundora-orange hover:bg-orange-600">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Portfolio Performance Analytics</h3>
                    <p className="text-gray-600 mb-4">Real-time monitoring and forecasting of your investment portfolio.</p>
                    <Link to="/investors/portfolio-analytics">
                      <Button className="w-full bg-fundora-orange hover:bg-orange-600">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Co-Investment Network</h3>
                    <p className="text-gray-600 mb-4">Find compatible co-investors for deals based on investment history and preferences.</p>
                    <Link to="/investors/co-investment-network">
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

export default Investors;
