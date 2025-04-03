
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Search, Users, UserPlus, MessageSquare, Filter } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const CoInvestmentNetwork = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("discover");
  const [searchQuery, setSearchQuery] = useState("");

  const investorProfiles = [
    {
      id: 1,
      name: "Alex Morgan",
      avatar: "",
      company: "Venture Capital Firm",
      investmentFocus: ["AI", "Fintech", "SaaS"],
      compatibility: 85,
      deals: 24
    },
    {
      id: 2,
      name: "Sarah Chen",
      avatar: "",
      company: "Angel Investor",
      investmentFocus: ["Health Tech", "EdTech"],
      compatibility: 72,
      deals: 15
    },
    {
      id: 3,
      name: "Michael Johnson",
      avatar: "",
      company: "Innovation Capital",
      investmentFocus: ["CleanTech", "AI", "Biotech"],
      compatibility: 91,
      deals: 32
    },
    {
      id: 4,
      name: "Jessica Williams",
      avatar: "",
      company: "Tech Investments LLC",
      investmentFocus: ["SaaS", "Mobile Apps", "Cybersecurity"],
      compatibility: 68,
      deals: 19
    },
  ];

  const activeDeals = [
    {
      id: 1,
      company: "AI Analytics Platform",
      round: "Series A",
      target: "$8 Million",
      raised: "$5.2 Million",
      investors: 7,
      deadline: "March 30, 2024"
    },
    {
      id: 2,
      company: "Sustainable Energy Storage",
      round: "Seed",
      target: "$2 Million",
      raised: "$1.5 Million",
      investors: 5,
      deadline: "April 15, 2024"
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const getCompatibilityColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-amber-600";
    return "text-gray-600";
  };

  return (
    <FeatureTemplate
      title="Co-Investment Network"
      description="Find compatible co-investors for deals based on investment history and preferences."
      backLink="/investors"
      backLinkText="Investor Dashboard"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>Co-Investment Network</CardTitle>
                <CardDescription>
                  Connect with other investors to collaborate on deals
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    type="search" 
                    placeholder="Search investors..." 
                    className="pl-8" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="discover" className="flex-1">
                  <Users className="h-4 w-4 mr-2" />
                  Discover Investors
                </TabsTrigger>
                <TabsTrigger value="deals" className="flex-1">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Active Deals
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="discover">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {investorProfiles.map(investor => (
                    <Card key={investor.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center">
                              <Avatar className="h-12 w-12 mr-4">
                                <AvatarFallback>{getInitials(investor.name)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-medium">{investor.name}</h3>
                                <p className="text-gray-500 text-sm">{investor.company}</p>
                              </div>
                            </div>
                            <span className={`${getCompatibilityColor(investor.compatibility)} font-medium`}>
                              {investor.compatibility}% Match
                            </span>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm text-gray-500">Investment Focus</p>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {investor.investmentFocus.map((focus, idx) => (
                                  <span 
                                    key={idx} 
                                    className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                                  >
                                    {focus}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Previous Deals</p>
                              <p className="font-medium">{investor.deals} investments</p>
                            </div>
                          </div>
                        </div>
                        <div className="border-t p-4 bg-gray-50 flex justify-between">
                          <Button variant="outline" size="sm">View Profile</Button>
                          <Button size="sm">
                            <UserPlus className="h-4 w-4 mr-2" />
                            Connect
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="deals">
                <div className="space-y-4">
                  {activeDeals.map(deal => (
                    <Card key={deal.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="font-medium text-lg">{deal.company}</h3>
                            <div className="flex items-center mt-1">
                              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full mr-2">
                                {deal.round}
                              </span>
                              <span className="text-sm text-gray-500">
                                {deal.investors} investors • Deadline: {deal.deadline}
                              </span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm">
                              <span className="text-gray-500">Target: </span>
                              <span className="font-medium">{deal.target}</span>
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500">Raised: </span>
                              <span className="font-medium text-green-600">{deal.raised}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end space-x-3">
                          <Button variant="outline">View Details</Button>
                          <Button>Join Deal</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </FeatureTemplate>
  );
};

export default CoInvestmentNetwork;
