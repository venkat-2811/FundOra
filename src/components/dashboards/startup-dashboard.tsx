
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, Users, Target, Briefcase, 
  FileText, Award, Book, MessageSquare,
  BarChart4, Calendar, Lightbulb, DollarSign,
  PiggyBank, Zap, ChevronRight
} from 'lucide-react';

export const StartupDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const investorMatches = [
    { 
      id: 1, 
      name: 'Green Ventures', 
      focus: 'Clean Energy, Sustainability', 
      stage: 'Seed, Series A',
      matchScore: 95,
      status: 'Interested'
    },
    { 
      id: 2, 
      name: 'Tech Capital', 
      focus: 'SaaS, AI/ML', 
      stage: 'Seed to Series B',
      matchScore: 92,
      status: 'New Match'
    },
    { 
      id: 3, 
      name: 'Growth Partners', 
      focus: 'Marketplace, Consumer Tech', 
      stage: 'Series A, Series B',
      matchScore: 87,
      status: 'Reviewing'
    },
    { 
      id: 4, 
      name: 'Innovation Fund', 
      focus: 'DeepTech, Enterprise', 
      stage: 'Seed, Pre-Seed',
      matchScore: 84,
      status: 'New Match'
    },
    { 
      id: 5, 
      name: 'Indian Startup Fund', 
      focus: 'Mobile, Consumer', 
      stage: 'Seed',
      matchScore: 81,
      status: 'New Match'
    }
  ];
  
  const fundingOpportunities = [
    { 
      id: 1, 
      name: 'Angel Investor Group', 
      amount: '₹15-30L',
      deadline: 'Oct 30, 2023',
      match: 'High'
    },
    { 
      id: 2, 
      name: 'Tech Ventures Fund', 
      amount: '₹50L-1Cr',
      deadline: 'Nov 15, 2023',
      match: 'Medium'
    },
    { 
      id: 3, 
      name: 'Growth Capital Partners', 
      amount: '₹1-5Cr',
      deadline: 'Dec 1, 2023',
      match: 'High'
    },
  ];
  
  const pitchFeedback = [
    { 
      id: 1, 
      section: 'Problem Statement', 
      rating: 3,
      comment: 'Make the market pain point more specific'
    },
    { 
      id: 2, 
      section: 'Business Model', 
      rating: 4,
      comment: 'Strong revenue streams identified'
    },
    { 
      id: 3, 
      section: 'Go-to-Market Strategy', 
      rating: 2,
      comment: 'Needs more specific customer acquisition details'
    },
    { 
      id: 4, 
      section: 'Competitive Analysis', 
      rating: 3,
      comment: 'Good overview, highlight differentiators more clearly'
    },
    { 
      id: 5, 
      section: 'Team Background', 
      rating: 5,
      comment: 'Strong founding team with relevant experience'
    },
    { 
      id: 6, 
      section: 'Financials', 
      rating: 3,
      comment: 'Projections seem reasonable, include more details on unit economics'
    },
  ];
  
  const renderRatingStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>★</span>
        ))}
      </div>
    );
  };
  
  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 80) return 'bg-blue-100 text-blue-800';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };
  
  const getMatchColor = (match: string) => {
    if (match === 'High') return 'bg-green-100 text-green-800';
    if (match === 'Medium') return 'bg-yellow-100 text-yellow-800';
    if (match === 'Low') return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };
  
  const getStatusColor = (status: string) => {
    if (status === 'Interested') return 'bg-green-100 text-green-800';
    if (status === 'Reviewing') return 'bg-blue-100 text-blue-800';
    if (status === 'New Match') return 'bg-purple-100 text-purple-800';
    if (status === 'Declined') return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };
  
  return (
    <div className="w-full rounded-xl border overflow-hidden bg-white shadow-md">
      <div className="bg-gradient-to-r from-fundora-dark to-blue-800 p-4">
        <h3 className="text-lg font-semibold text-white">Startup Founder Dashboard</h3>
      </div>
      
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b px-4">
          <TabsList className="h-14">
            <TabsTrigger value="overview" className="data-[state=active]:text-fundora-dark">
              <BarChart4 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="investors" className="data-[state=active]:text-fundora-dark">
              <Users className="h-4 w-4 mr-2" />
              Investor Matches
            </TabsTrigger>
            <TabsTrigger value="funding" className="data-[state=active]:text-fundora-dark">
              <PiggyBank className="h-4 w-4 mr-2" />
              Funding
            </TabsTrigger>
            <TabsTrigger value="pitch" className="data-[state=active]:text-fundora-dark">
              <Lightbulb className="h-4 w-4 mr-2" />
              Pitch Deck
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="overview" className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="dashboard-item">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-fundora-dark" />
                </div>
                <h4 className="font-medium">Funding Status</h4>
                <div className="text-xs text-gray-500 mt-1">Seed Round: 60% Complete</div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-item">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-fundora-dark" />
                </div>
                <h4 className="font-medium">Investor Matches</h4>
                <div className="text-xs text-gray-500 mt-1">12 New Potential Matches</div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-item">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <Target className="h-6 w-6 text-fundora-dark" />
                </div>
                <h4 className="font-medium">Growth Metrics</h4>
                <div className="text-xs text-gray-500 mt-1">MRR Growth: +15% this month</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Users className="h-5 w-5 text-fundora-dark mr-2" />
                  Top Investor Matches
                </CardTitle>
                <CardDescription>Investors interested in your industry and stage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {investorMatches.slice(0, 3).map(investor => (
                    <div key={investor.id} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="text-sm font-medium">{investor.name}</p>
                        <p className="text-xs text-gray-500">{investor.focus}</p>
                      </div>
                      <Badge className={getMatchScoreColor(investor.matchScore)}>
                        {investor.matchScore}% Match
                      </Badge>
                    </div>
                  ))}
                  <Button 
                    variant="ghost" 
                    className="w-full text-fundora-dark hover:text-fundora-dark/80"
                    onClick={() => setActiveTab('investors')}
                  >
                    View All Matches
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="h-5 w-5 text-fundora-dark mr-2" />
                  Upcoming Tasks & Deadlines
                </CardTitle>
                <CardDescription>Critical actions for your fundraising journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="border-b pb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm font-medium">Finalize pitch deck</span>
                      </div>
                      <Badge variant="outline">Today</Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Incorporate latest feedback from mentors</p>
                  </div>
                  <div className="border-b pb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm font-medium">Prepare financial projections</span>
                      </div>
                      <Badge variant="outline">Oct 18</Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Update 3-year forecast with Q3 actuals</p>
                  </div>
                  <div className="border-b pb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-sm font-medium">Investor meeting: Green Ventures</span>
                      </div>
                      <Badge variant="outline">Oct 20</Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Initial pitch presentation, 30 minutes</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 text-purple-500 mr-2" />
                        <span className="text-sm font-medium">Submit to Tech Ventures Fund</span>
                      </div>
                      <Badge variant="outline">Oct 30</Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Application deadline for Q4 cohort</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="dashboard-item">
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-5 w-5 text-fundora-dark mr-2" />
                  <h4 className="font-medium">Funding Opportunities</h4>
                </div>
                <div className="space-y-3">
                  {fundingOpportunities.map(opportunity => (
                    <div key={opportunity.id} className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">{opportunity.name}</p>
                        <p className="text-xs text-gray-500">Investment Range: {opportunity.amount}</p>
                        <p className="text-xs text-gray-500">Deadline: {opportunity.deadline}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getMatchColor(opportunity.match)}`}>
                        {opportunity.match} Match
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-item">
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <FileText className="h-5 w-5 text-fundora-dark mr-2" />
                  <h4 className="font-medium">Pitch Deck Feedback</h4>
                </div>
                <div className="space-y-3">
                  {pitchFeedback.slice(0, 3).map(feedback => (
                    <div key={feedback.id}>
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">{feedback.section}</p>
                        <div className="flex">
                          {renderRatingStars(feedback.rating)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">{feedback.comment}</p>
                    </div>
                  ))}
                  <Button 
                    variant="ghost" 
                    className="w-full text-fundora-dark hover:text-fundora-dark/80"
                    onClick={() => setActiveTab('pitch')}
                  >
                    View All Feedback
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="investors" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between items-center">
                  <span>Investor Matches</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8">
                      <Target className="h-4 w-4 mr-1" /> Filter
                    </Button>
                    <Button size="sm" className="h-8 bg-fundora-dark hover:bg-fundora-dark/80">
                      <Users className="h-4 w-4 mr-1" /> Expand Network
                    </Button>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                Investors matched to your startup's industry, stage, and growth potential
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investor</TableHead>
                    <TableHead>Focus Areas</TableHead>
                    <TableHead>Investment Stage</TableHead>
                    <TableHead>Match Score</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {investorMatches.map(investor => (
                    <TableRow key={investor.id}>
                      <TableCell className="font-medium">{investor.name}</TableCell>
                      <TableCell>{investor.focus}</TableCell>
                      <TableCell>{investor.stage}</TableCell>
                      <TableCell>
                        <Badge className={getMatchScoreColor(investor.matchScore)}>
                          {investor.matchScore}%
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(investor.status)}>
                          {investor.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="h-7 w-7 p-0">
                            <Book className="h-3.5 w-3.5" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-7 w-7 p-0">
                            <MessageSquare className="h-3.5 w-3.5" />
                          </Button>
                          <Button size="sm" className="h-7 bg-fundora-dark hover:bg-fundora-dark/80">
                            Connect
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="funding" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Funding Journey</CardTitle>
              <CardDescription>
                Track your fundraising progress and upcoming opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="text-md font-medium mb-3">Current Fundraising Round</h4>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Seed Round</span>
                    <span className="text-blue-600">₹1.2 Cr / ₹2 Cr</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: '60%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>60% Completed</span>
                    <span>Goal: ₹2 Cr</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-md font-medium mb-3">Open Funding Opportunities</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Opportunity</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Match</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fundingOpportunities.map(opportunity => (
                      <TableRow key={opportunity.id}>
                        <TableCell className="font-medium">{opportunity.name}</TableCell>
                        <TableCell>{opportunity.amount}</TableCell>
                        <TableCell>{opportunity.deadline}</TableCell>
                        <TableCell>
                          <Badge className={getMatchColor(opportunity.match)}>
                            {opportunity.match}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" className="bg-fundora-dark hover:bg-fundora-dark/80">
                            Apply
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div>
                <h4 className="text-md font-medium mb-3">Funding Roadmap</h4>
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 top-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <ChevronRight className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-1">Pre-Seed Round</h5>
                      <p className="text-xs text-gray-600 mb-1">₹25 Lakhs • Completed May 2023</p>
                      <p className="text-xs text-gray-500">Initial investment from angel investors to build MVP and validate market fit.</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 top-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <ChevronRight className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-1">Seed Round</h5>
                      <p className="text-xs text-gray-600 mb-1">₹2 Cr • In Progress (60% Complete)</p>
                      <p className="text-xs text-gray-500">Scaling team, product development, and initial customer acquisition.</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-1">Series A</h5>
                      <p className="text-xs text-gray-600 mb-1">Target: ₹8-10 Cr • Planned Q3 2024</p>
                      <p className="text-xs text-gray-500">Significant market expansion, team growth, and product line diversification.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pitch" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Pitch Deck Analysis</CardTitle>
              <CardDescription>
                AI-powered feedback and improvement suggestions for your investor pitch
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-md font-medium">Overall Pitch Score</h4>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <span className="font-semibold text-blue-700">3.8</span>
                    </div>
                    <span className="text-sm text-gray-600">/ 5.0</span>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg mb-6">
                  <h5 className="text-sm font-medium mb-2">AI Summary</h5>
                  <p className="text-sm text-gray-700">
                    Your pitch deck effectively communicates your product value and business model. 
                    To strengthen your pitch, add more specific market size data, clarify customer acquisition 
                    strategy, and enhance the competitive analysis with clear differentiators.
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-medium mb-3">Section-by-Section Feedback</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Section</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Feedback</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pitchFeedback.map(feedback => (
                      <TableRow key={feedback.id}>
                        <TableCell className="font-medium">{feedback.section}</TableCell>
                        <TableCell>{renderRatingStars(feedback.rating)}</TableCell>
                        <TableCell>{feedback.comment}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button className="bg-fundora-dark hover:bg-fundora-dark/80">
                  <FileText className="h-4 w-4 mr-2" />
                  Upload New Version
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-4 grid grid-cols-4 gap-4 p-4">
        <Card className="dashboard-item col-span-1">
          <CardContent className="p-3 flex flex-col items-center">
            <Award className="h-5 w-5 text-fundora-dark mb-1" />
            <div className="text-xs font-medium text-center">Mentorship<br />Program</div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-item col-span-1">
          <CardContent className="p-3 flex flex-col items-center">
            <Book className="h-5 w-5 text-fundora-dark mb-1" />
            <div className="text-xs font-medium text-center">Legal<br />Documents</div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-item col-span-1">
          <CardContent className="p-3 flex flex-col items-center">
            <TrendingUp className="h-5 w-5 text-fundora-dark mb-1" />
            <div className="text-xs font-medium text-center">Financial<br />Projections</div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-item col-span-1">
          <CardContent className="p-3 flex flex-col items-center">
            <MessageSquare className="h-5 w-5 text-fundora-dark mb-1" />
            <div className="text-xs font-medium text-center">Founder<br />Community</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StartupDashboard;
