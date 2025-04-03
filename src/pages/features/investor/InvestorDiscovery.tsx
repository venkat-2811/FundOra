
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import AIAssistant from '@/components/chat/ai-assistant';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search, Filter, Star } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const InvestorDiscovery = () => {
  const { user } = useAuth();
  const [loading, setLoading] = React.useState(true);
  const [startups, setStartups] = React.useState([]);

  React.useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setStartups([
        {
          id: 1,
          name: 'EcoTech Solutions',
          industry: 'CleanTech',
          fundingStage: 'Seed',
          description: 'Sustainable energy solutions for residential buildings.',
          match: 92,
        },
        {
          id: 2,
          name: 'HealthAI',
          industry: 'HealthTech',
          fundingStage: 'Series A',
          description: 'AI-powered diagnostics for early disease detection.',
          match: 87,
        },
        {
          id: 3,
          name: 'FinEdge',
          industry: 'FinTech',
          fundingStage: 'Pre-Seed',
          description: 'Next-generation payment processing for small businesses.',
          match: 84,
        },
        {
          id: 4,
          name: 'DeepLearn',
          industry: 'EdTech',
          fundingStage: 'Seed',
          description: 'Personalized learning platform using machine learning.',
          match: 79,
        },
      ]);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link to="/investors" className="inline-flex items-center text-fundora-orange hover:text-orange-700 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Investor Dashboard
            </Link>
            <h1 className="text-3xl font-bold mb-2">Startup Discovery Engine</h1>
            <p className="text-lg text-gray-600">
              Find promising startups that match your investment thesis and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Recommended Startups</span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" /> Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Search className="h-4 w-4 mr-2" /> Search
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((item) => (
                        <Card key={item} className="bg-gray-50 animate-pulse">
                          <CardContent className="h-32"></CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {startups.map((startup) => (
                        <Card key={startup.id} className="hover:shadow-md transition-all">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-semibold">{startup.name}</h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                  <span>{startup.industry}</span>
                                  <span>•</span>
                                  <span>{startup.fundingStage}</span>
                                </div>
                                <p className="mt-2 text-gray-700">{startup.description}</p>
                              </div>
                              <div className="bg-green-50 text-green-700 font-semibold rounded-full h-10 w-10 flex items-center justify-center">
                                {startup.match}%
                              </div>
                            </div>
                            <div className="flex justify-between mt-4">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Star className="h-4 w-4 mr-2" /> Save
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>AI Investment Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ask questions about startups, get insights, or refine your search criteria.
                  </p>
                  <AIAssistant />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InvestorDiscovery;
