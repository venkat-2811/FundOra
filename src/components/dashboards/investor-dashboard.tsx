
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, PieChart, SearchCheck, Briefcase, 
  TrendingUp, LineChart, Users, Filter, Calendar,
  AlertCircle, MessageCircle, BookOpen, Star, Compass
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface StartupMatch {
  id: string;
  name: string;
  industry: string;
  stage: string;
  matchScore: number;
  lastActivity: string;
}

export const InvestorDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [startupMatches, setStartupMatches] = useState<StartupMatch[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch startup matches - in a real app, this would come from the database
    // Here we're simulating this with dummy data
    const fetchStartupMatches = async () => {
      setLoading(true);
      
      // In a real implementation, you would fetch actual data from your database
      // const { data, error } = await supabase
      //  .from('startup_matches')
      //  .select('*')
      //  .eq('investor_id', user?.id)
      
      // For now, we'll use dummy data
      setTimeout(() => {
        const dummyMatches: StartupMatch[] = [
          {
            id: '1',
            name: 'EcoTech Solutions',
            industry: 'Clean Energy',
            stage: 'Seed',
            matchScore: 92,
            lastActivity: '2 days ago'
          },
          {
            id: '2',
            name: 'MediConnect',
            industry: 'HealthTech',
            stage: 'Series A',
            matchScore: 87,
            lastActivity: '1 week ago'
          },
          {
            id: '3',
            name: 'EduLearn Pro',
            industry: 'EdTech',
            stage: 'Pre-Seed',
            matchScore: 85,
            lastActivity: '4 days ago'
          },
          {
            id: '4',
            name: 'FinTrack',
            industry: 'FinTech',
            stage: 'Seed',
            matchScore: 80,
            lastActivity: '3 days ago'
          },
          {
            id: '5',
            name: 'RetailAI',
            industry: 'AI/ML',
            stage: 'MVP',
            matchScore: 78,
            lastActivity: 'Today'
          }
        ];
        setStartupMatches(dummyMatches);
        setLoading(false);
      }, 800);
    };
    
    fetchStartupMatches();
  }, [user]);
  
  const upcomingCalls = [
    { id: 1, company: 'EcoTech Solutions', date: 'Oct 15, 2023', time: '3:00 PM' },
    { id: 2, company: 'MediConnect', date: 'Oct 17, 2023', time: '11:30 AM' }
  ];
  
  const pendingTasks = [
    { id: 1, task: 'Review pitch deck from EduLearn Pro', priority: 'High', due: 'Tomorrow' },
    { id: 2, task: 'Complete due diligence for FinTrack', priority: 'Medium', due: 'Oct 20' },
    { id: 3, task: 'Schedule follow-up with RetailAI founders', priority: 'Low', due: 'Oct 25' }
  ];
  
  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 80) return 'bg-blue-100 text-blue-800';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };
  
  return (
    <div className="w-full rounded-xl border overflow-hidden bg-white shadow-md">
      <div className="bg-gradient-to-r from-purple-700 to-indigo-600 p-4">
        <h3 className="text-lg font-semibold text-white">Investor Dashboard</h3>
      </div>
      
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b px-4">
          <TabsList className="h-14">
            <TabsTrigger value="overview" className="data-[state=active]:text-indigo-700">
              <BarChart className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="startups" className="data-[state=active]:text-indigo-700">
              <Compass className="h-4 w-4 mr-2" />
              Startup Matches
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="data-[state=active]:text-indigo-700">
              <PieChart className="h-4 w-4 mr-2" />
              Portfolio
            </TabsTrigger>
            <TabsTrigger value="calendar" className="data-[state=active]:text-indigo-700">
              <Calendar className="h-4 w-4 mr-2" />
              Calendar
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="overview" className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="dashboard-item">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                  <Briefcase className="h-6 w-6 text-indigo-600" />
                </div>
                <h4 className="font-medium">Portfolio Value</h4>
                <div className="text-xs text-gray-500 mt-1">₹4.2 Cr (+8.5% YTD)</div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-item">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                  <SearchCheck className="h-6 w-6 text-indigo-600" />
                </div>
                <h4 className="font-medium">Startup Matches</h4>
                <div className="text-xs text-gray-500 mt-1">18 New Startups This Week</div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-item">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-indigo-600" />
                </div>
                <h4 className="font-medium">Active Deals</h4>
                <div className="text-xs text-gray-500 mt-1">5 Pending Due Diligence</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Star className="h-5 w-5 text-indigo-600 mr-2" />
                  Top Startup Matches
                </CardTitle>
                <CardDescription>Startups matched to your investment thesis</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-4">
                    <div className="animate-pulse">Loading matches...</div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {startupMatches.slice(0, 3).map(match => (
                      <div key={match.id} className="flex justify-between items-center border-b pb-2">
                        <div>
                          <p className="text-sm font-medium">{match.name}</p>
                          <p className="text-xs text-gray-500">{match.industry} | {match.stage}</p>
                        </div>
                        <Badge className={getMatchScoreColor(match.matchScore)}>
                          {match.matchScore}% Match
                        </Badge>
                      </div>
                    ))}
                    <Button 
                      variant="ghost" 
                      className="w-full text-indigo-600 hover:text-indigo-700"
                      onClick={() => setActiveTab('startups')}
                    >
                      View All Matches
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-indigo-600 mr-2" />
                  Tasks & Upcoming Calls
                </CardTitle>
                <CardDescription>Your schedule for the next few days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Upcoming Calls</h4>
                    {upcomingCalls.map(call => (
                      <div key={call.id} className="flex justify-between items-center text-sm mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                          <span>{call.company}</span>
                        </div>
                        <span className="text-xs text-gray-500">{call.date}, {call.time}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Pending Tasks</h4>
                    {pendingTasks.map(task => (
                      <div key={task.id} className="text-sm mb-2">
                        <div className="flex justify-between">
                          <span>{task.task}</span>
                          <Badge 
                            variant={task.priority === 'High' ? 'destructive' : 
                                    task.priority === 'Medium' ? 'outline' : 'secondary'}
                            className="text-xs"
                          >
                            {task.priority}
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-500">Due: {task.due}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="dashboard-item">
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <PieChart className="h-5 w-5 text-indigo-600 mr-2" />
                  <h4 className="font-medium">Portfolio Allocation</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">SaaS</span>
                    <div className="w-2/3 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: '35%' }}></div>
                    </div>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">FinTech</span>
                    <div className="w-2/3 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">HealthTech</span>
                    <div className="w-2/3 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '20%' }}></div>
                    </div>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">EdTech</span>
                    <div className="w-2/3 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500" style={{ width: '15%' }}></div>
                    </div>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Other</span>
                    <div className="w-2/3 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-500" style={{ width: '5%' }}></div>
                    </div>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-item">
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <LineChart className="h-5 w-5 text-indigo-600 mr-2" />
                  <h4 className="font-medium">Top Performing Investments</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">TechSolutions</p>
                      <p className="text-xs text-gray-500">SaaS | Series A</p>
                    </div>
                    <span className="font-medium text-green-500">+142%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">HealthTracker</p>
                      <p className="text-xs text-gray-500">HealthTech | Seed</p>
                    </div>
                    <span className="font-medium text-green-500">+87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">FinanceBuddy</p>
                      <p className="text-xs text-gray-500">FinTech | Series B</p>
                    </div>
                    <span className="font-medium text-green-500">+63%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">EduLearn</p>
                      <p className="text-xs text-gray-500">EdTech | Seed</p>
                    </div>
                    <span className="font-medium text-green-500">+51%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="startups" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between items-center">
                  <span>Startup Matches</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8">
                      <Filter className="h-4 w-4 mr-1" /> Filter
                    </Button>
                    <Button size="sm" className="h-8 bg-indigo-600 hover:bg-indigo-700">
                      <SearchCheck className="h-4 w-4 mr-1" /> Refine Matches
                    </Button>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                Startups that match your investment criteria, sorted by match score
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-pulse">Loading startup matches...</div>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Startup</TableHead>
                      <TableHead>Industry</TableHead>
                      <TableHead>Stage</TableHead>
                      <TableHead>Match Score</TableHead>
                      <TableHead>Last Activity</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {startupMatches.map(match => (
                      <TableRow key={match.id}>
                        <TableCell className="font-medium">{match.name}</TableCell>
                        <TableCell>{match.industry}</TableCell>
                        <TableCell>{match.stage}</TableCell>
                        <TableCell>
                          <Badge className={getMatchScoreColor(match.matchScore)}>
                            {match.matchScore}%
                          </Badge>
                        </TableCell>
                        <TableCell>{match.lastActivity}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-7 w-7 p-0">
                              <BookOpen className="h-3.5 w-3.5" />
                            </Button>
                            <Button variant="outline" size="sm" className="h-7 w-7 p-0">
                              <MessageCircle className="h-3.5 w-3.5" />
                            </Button>
                            <Button size="sm" className="h-7 bg-indigo-600 hover:bg-indigo-700">
                              View
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="portfolio" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
              <CardDescription>
                Track the performance of your investments over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded">
                <div className="text-center">
                  <BarChart className="h-12 w-12 text-indigo-200 mx-auto mb-2" />
                  <p className="text-gray-500">Portfolio performance chart will appear here</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-md font-medium mb-3">Current Investments</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Investment</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Current Value</TableHead>
                      <TableHead>Return</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">TechSolutions</TableCell>
                      <TableCell>₹50,00,000</TableCell>
                      <TableCell>Jun 2022</TableCell>
                      <TableCell>₹1,21,00,000</TableCell>
                      <TableCell className="text-green-500">+142%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">HealthTracker</TableCell>
                      <TableCell>₹30,00,000</TableCell>
                      <TableCell>Jan 2023</TableCell>
                      <TableCell>₹56,10,000</TableCell>
                      <TableCell className="text-green-500">+87%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">FinanceBuddy</TableCell>
                      <TableCell>₹1,20,00,000</TableCell>
                      <TableCell>Nov 2022</TableCell>
                      <TableCell>₹1,95,60,000</TableCell>
                      <TableCell className="text-green-500">+63%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">EduLearn</TableCell>
                      <TableCell>₹25,00,000</TableCell>
                      <TableCell>Mar 2023</TableCell>
                      <TableCell>₹37,75,000</TableCell>
                      <TableCell className="text-green-500">+51%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="calendar" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events & Meetings</CardTitle>
              <CardDescription>
                Your schedule for investor calls, startup meetings, and due diligence activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-indigo-200 mx-auto mb-2" />
                  <p className="text-gray-500">Calendar interface will appear here</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-md font-medium mb-3">Upcoming Events</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">EcoTech Solutions</TableCell>
                      <TableCell>
                        <Badge variant="outline">Pitch Meeting</Badge>
                      </TableCell>
                      <TableCell>Oct 15, 2023</TableCell>
                      <TableCell>3:00 PM</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Reschedule</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">MediConnect</TableCell>
                      <TableCell>
                        <Badge variant="outline">Follow-up</Badge>
                      </TableCell>
                      <TableCell>Oct 17, 2023</TableCell>
                      <TableCell>11:30 AM</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Reschedule</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">FinTrack Due Diligence</TableCell>
                      <TableCell>
                        <Badge variant="outline">Internal Review</Badge>
                      </TableCell>
                      <TableCell>Oct 20, 2023</TableCell>
                      <TableCell>2:00 PM</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Reschedule</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Investor Networking Event</TableCell>
                      <TableCell>
                        <Badge variant="outline">Networking</Badge>
                      </TableCell>
                      <TableCell>Oct 25, 2023</TableCell>
                      <TableCell>6:00 PM</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">RSVP</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="p-4 grid grid-cols-4 gap-4">
        <Card className="dashboard-item col-span-1">
          <CardContent className="p-3 flex flex-col items-center">
            <BarChart className="h-5 w-5 text-indigo-600 mb-1" />
            <div className="text-xs font-medium text-center">Market<br />Trends</div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-item col-span-1">
          <CardContent className="p-3 flex flex-col items-center">
            <Filter className="h-5 w-5 text-indigo-600 mb-1" />
            <div className="text-xs font-medium text-center">Due<br />Diligence</div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-item col-span-1">
          <CardContent className="p-3 flex flex-col items-center">
            <Users className="h-5 w-5 text-indigo-600 mb-1" />
            <div className="text-xs font-medium text-center">Co-Investment<br />Network</div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-item col-span-1">
          <CardContent className="p-3 flex flex-col items-center">
            <TrendingUp className="h-5 w-5 text-indigo-600 mb-1" />
            <div className="text-xs font-medium text-center">Exit<br />Opportunities</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestorDashboard;
