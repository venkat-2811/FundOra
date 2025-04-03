
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Info, TrendingUp, Clock, Star, ArrowUp, ArrowDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import FeatureTemplate from '../FeatureTemplate';

const PublicInvestmentDiscovery = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [investments, setInvestments] = useState([]);
  const [savedInvestments, setSavedInvestments] = useState([]);
  
  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setInvestments([
        {
          id: 1,
          name: 'Renewable Energy ETF',
          type: 'ETF',
          risk: 'Moderate',
          return: '+12.4%',
          trend: 'up',
          description: 'A diversified portfolio of companies in the renewable energy sector.',
          match: 94,
        },
        {
          id: 2,
          name: 'Technology Growth Fund',
          type: 'Mutual Fund',
          risk: 'High',
          return: '+18.7%',
          trend: 'up',
          description: 'Focus on high-growth technology companies with innovative products.',
          match: 88,
        },
        {
          id: 3,
          name: 'Sustainable Infrastructure Bond',
          type: 'Bond',
          risk: 'Low',
          return: '+5.2%',
          trend: 'up',
          description: 'Fixed income investment in sustainable infrastructure projects.',
          match: 86,
        },
        {
          id: 4,
          name: 'Healthcare Innovation Fund',
          type: 'Mutual Fund',
          risk: 'Moderate',
          return: '+8.9%',
          trend: 'up',
          description: 'Investment in companies developing healthcare innovations and treatments.',
          match: 82,
        },
        {
          id: 5,
          name: 'Consumer Staples ETF',
          type: 'ETF',
          risk: 'Low',
          return: '-1.3%',
          trend: 'down',
          description: 'Tracks companies providing essential consumer products.',
          match: 75,
        },
      ]);
      setSavedInvestments([]);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSaveInvestment = (investment) => {
    // Check if already saved
    if (savedInvestments.some(item => item.id === investment.id)) {
      setSavedInvestments(savedInvestments.filter(item => item.id !== investment.id));
      toast({
        title: "Investment removed",
        description: `${investment.name} has been removed from your saved investments.`,
      });
    } else {
      setSavedInvestments([...savedInvestments, investment]);
      toast({
        title: "Investment saved",
        description: `${investment.name} has been added to your saved investments.`,
      });
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low':
        return 'text-green-600 bg-green-50';
      case 'Moderate':
        return 'text-amber-600 bg-amber-50';
      case 'High':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const InvestmentCard = ({ investment, onSave }) => {
    const isReturningPositive = !investment.return.includes('-');
    const isSaved = savedInvestments.some(item => item.id === investment.id);
    
    return (
      <Card className="hover:shadow-md transition-all">
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{investment.name}</h3>
              <div className="flex items-center space-x-3 text-sm mt-1">
                <span className="text-gray-500">{investment.type}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getRiskColor(investment.risk)}`}>
                  {investment.risk} Risk
                </span>
                <span className={`flex items-center ${isReturningPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {isReturningPositive ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  )}
                  {investment.return}
                </span>
              </div>
              <p className="mt-2 text-gray-700">{investment.description}</p>
            </div>
            <div className="bg-green-50 text-green-700 font-semibold rounded-full h-10 w-10 flex items-center justify-center">
              {investment.match}%
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outline" size="sm">
              <Info className="h-4 w-4 mr-2" /> Details
            </Button>
            <Button 
              variant={isSaved ? "default" : "ghost"} 
              size="sm"
              onClick={() => onSave(investment)}
              className={isSaved ? "bg-fundora-orange hover:bg-orange-600" : ""}
            >
              <Star className="h-4 w-4 mr-2" /> {isSaved ? 'Saved' : 'Save'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <FeatureTemplate
      title="Investment Discovery"
      description="AI-recommended investment options based on your personal goals and risk tolerance."
      backLink="/general-public"
      backLinkText="General Public Dashboard"
    >
      <Card className="mb-6">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Recommended Investments</CardTitle>
              <CardDescription>
                Personalized to your financial goals and risk profile
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" /> Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" /> Search
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="recommended">
            <div className="px-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recommended" className="flex items-center">
                  <Star className="h-4 w-4 mr-2" /> Recommended
                </TabsTrigger>
                <TabsTrigger value="trending" className="flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" /> Trending
                </TabsTrigger>
                <TabsTrigger value="saved" className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" /> Saved
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="recommended" className="pt-4 px-6 pb-6">
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="animate-pulse">
                      <CardContent className="p-4">
                        <div className="h-24 bg-gray-100 rounded-md"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {investments.map(investment => (
                    <InvestmentCard 
                      key={investment.id} 
                      investment={investment} 
                      onSave={handleSaveInvestment}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="trending" className="pt-4 px-6 pb-6">
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="animate-pulse">
                      <CardContent className="p-4">
                        <div className="h-24 bg-gray-100 rounded-md"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center p-8 text-center">
                  <div>
                    <TrendingUp className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Trending Insights Coming Soon</h3>
                    <p className="text-gray-500">
                      We're currently gathering market data to provide you with trending investment opportunities.
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="saved" className="pt-4 px-6 pb-6">
              {savedInvestments.length > 0 ? (
                <div className="space-y-4">
                  {savedInvestments.map(investment => (
                    <InvestmentCard 
                      key={investment.id} 
                      investment={investment} 
                      onSave={handleSaveInvestment}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center p-8 text-center">
                  <div>
                    <Star className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">No Saved Investments</h3>
                    <p className="text-gray-500">
                      You haven't saved any investments yet. Browse the recommendations and save the ones you're interested in.
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </FeatureTemplate>
  );
};

export default PublicInvestmentDiscovery;
