
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Mail, Calendar, ExternalLink, Filter } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const InvestorMatching = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("matches");

  const matchedInvestors = [
    {
      id: 1,
      name: "Acme Ventures",
      logo: "",
      matchScore: 92,
      investmentFocus: ["SaaS", "AI", "FinTech"],
      portfolioSize: 28,
      avgInvestment: "$1.5M-$4M",
      stage: "Series A",
      recentInvestments: ["TechCorp", "AI Solutions", "FinTech Pro"]
    },
    {
      id: 2,
      name: "Innovation Capital",
      logo: "",
      matchScore: 87,
      investmentFocus: ["Healthcare", "AI", "Enterprise Software"],
      portfolioSize: 35,
      avgInvestment: "$500K-$2M",
      stage: "Seed, Series A",
      recentInvestments: ["MedTech Inc", "DataFlow", "Enterprise AI"]
    },
    {
      id: 3,
      name: "Future Fund",
      logo: "",
      matchScore: 81,
      investmentFocus: ["CleanTech", "SaaS", "Hardware"],
      portfolioSize: 22,
      avgInvestment: "$1M-$3M",
      stage: "Seed, Series A",
      recentInvestments: ["GreenEnergy", "CloudServices", "Smart Devices"]
    },
    {
      id: 4,
      name: "Growth Partners",
      logo: "",
      matchScore: 76,
      investmentFocus: ["FinTech", "E-commerce", "Marketplaces"],
      portfolioSize: 42,
      avgInvestment: "$2M-$5M",
      stage: "Series A, Series B",
      recentInvestments: ["PayTech", "E-Market", "ShopConnect"]
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Investors Summit",
      date: "April 15, 2024",
      type: "Conference",
      location: "Virtual",
      investors: 120,
      registration: "Open"
    },
    {
      id: 2,
      title: "Seed Funding Pitchfest",
      date: "April 22, 2024",
      type: "Pitch Event",
      location: "San Francisco, CA",
      investors: 45,
      registration: "Open"
    },
    {
      id: 3,
      title: "AI Startups Meetup",
      date: "May 5, 2024",
      type: "Networking",
      location: "New York, NY",
      investors: 65,
      registration: "Coming Soon"
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 75) return "text-amber-600";
    return "text-gray-600";
  };

  return (
    <FeatureTemplate
      title="Investor Matching"
      description="Find investors who are the perfect fit for your startup based on your business model, industry, stage, and funding needs."
      backLink="/startup-founders"
      backLinkText="Startup Dashboard"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>Investor Matching</CardTitle>
                <CardDescription>
                  We've analyzed thousands of investors to find the best matches for your startup
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter Results
                </Button>
                <Button>Update Startup Profile</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="matches" className="flex-1">
                  <Users className="h-4 w-4 mr-2" />
                  Investor Matches
                </TabsTrigger>
                <TabsTrigger value="events" className="flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Funding Events
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="matches">
                <div className="space-y-6">
                  {matchedInvestors.map(investor => (
                    <Card key={investor.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex items-start">
                            <Avatar className="h-16 w-16 mr-4">
                              <AvatarFallback>{getInitials(investor.name)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="text-xl font-medium">{investor.name}</h3>
                              <div className="flex items-center mt-1">
                                <span className={`${getMatchScoreColor(investor.matchScore)} font-medium`}>
                                  {investor.matchScore}% Match
                                </span>
                                <Progress 
                                  value={investor.matchScore} 
                                  className="w-24 h-2 ml-2" 
                                />
                              </div>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {investor.investmentFocus.map((focus, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {focus}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Portfolio Size</p>
                              <p className="font-medium">{investor.portfolioSize} companies</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Average Investment</p>
                              <p className="font-medium">{investor.avgInvestment}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Preferred Stage</p>
                              <p className="font-medium">{investor.stage}</p>
                            </div>
                            <div className="md:col-span-3">
                              <p className="text-sm text-gray-500">Recent Investments</p>
                              <p className="font-medium">{investor.recentInvestments.join(", ")}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-end space-x-3">
                          <Button variant="outline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Profile
                          </Button>
                          <Button>
                            <Mail className="h-4 w-4 mr-2" />
                            Connect
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="events">
                <div className="space-y-4">
                  {upcomingEvents.map(event => (
                    <Card key={event.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                          <div>
                            <h3 className="font-medium text-lg">{event.title}</h3>
                            <div className="flex items-center mt-1">
                              <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                              <span className="text-sm text-gray-500 mr-3">
                                {event.date}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {event.type}
                              </Badge>
                            </div>
                            <p className="text-sm mt-2">
                              <span className="text-gray-500">Location: </span>
                              {event.location}
                            </p>
                            <p className="text-sm">
                              <span className="text-gray-500">Investors attending: </span>
                              {event.investors}+
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            {event.registration === "Open" ? (
                              <Button>Register Now</Button>
                            ) : (
                              <Button variant="outline" disabled>
                                {event.registration}
                              </Button>
                            )}
                          </div>
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

export default InvestorMatching;
