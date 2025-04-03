
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Building, Users, TrendingUp, Award, Clock, Play } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const StudentSimulator = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("simulation");

  // Mock simulation data
  const simulationData = {
    companyName: "Student Startup Ventures",
    progress: 45,
    stage: "Product Development",
    users: 125,
    revenue: 2500,
    investors: 1,
    challenges: [
      { id: 1, title: "Market Analysis", status: "completed" },
      { id: 2, title: "Product Development", status: "in-progress" },
      { id: 3, title: "Initial Customer Acquisition", status: "in-progress" },
      { id: 4, title: "Seed Funding", status: "pending" },
      { id: 5, title: "Team Building", status: "pending" },
    ],
    timeline: [
      { month: 'Jan', users: 0, revenue: 0 },
      { month: 'Feb', users: 15, revenue: 0 },
      { month: 'Mar', users: 45, revenue: 250 },
      { month: 'Apr', users: 85, revenue: 1200 },
      { month: 'May', users: 125, revenue: 2500 },
      { month: 'Jun', users: 0, revenue: 0 },
      { month: 'Jul', users: 0, revenue: 0 },
      { month: 'Aug', users: 0, revenue: 0 },
      { month: 'Sep', users: 0, revenue: 0 },
      { month: 'Oct', users: 0, revenue: 0 },
      { month: 'Nov', users: 0, revenue: 0 },
      { month: 'Dec', users: 0, revenue: 0 },
    ],
    decisions: [
      {
        id: 1,
        title: "Product Feature Prioritization",
        description: "Which feature should you prioritize for the next development sprint?",
        options: [
          { id: 'a', text: "User authentication and profiles", impact: "Increase user retention" },
          { id: 'b', text: "Payment processing integration", impact: "Enable monetization" },
          { id: 'c', text: "Social sharing capabilities", impact: "Improve user acquisition" },
        ]
      },
      {
        id: 2,
        title: "Marketing Strategy",
        description: "Where should you allocate your limited marketing budget?",
        options: [
          { id: 'a', text: "Social media advertising", impact: "Broad reach, moderate conversion" },
          { id: 'b', text: "Content marketing", impact: "Slower growth, higher quality leads" },
          { id: 'c', text: "Influencer partnerships", impact: "Targeted audience, higher cost" },
        ]
      },
    ],
    lessons: [
      { id: 1, title: "Finding Product-Market Fit", status: "available" },
      { id: 2, title: "Customer Acquisition Strategies", status: "available" },
      { id: 3, title: "Startup Funding Basics", status: "locked" },
      { id: 4, title: "Building & Managing Teams", status: "locked" },
      { id: 5, title: "Growth Hacking Techniques", status: "locked" },
    ]
  };

  return (
    <FeatureTemplate
      title="Entrepreneurship Simulator"
      description="Learn entrepreneurship through an interactive business simulation game."
      backLink="/students"
      backLinkText="Student Dashboard"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>Startup Simulator</CardTitle>
                <CardDescription>
                  Run your virtual startup and make critical business decisions
                </CardDescription>
              </div>
              <Button>
                <Play className="h-4 w-4 mr-2" />
                Continue Simulation
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="simulation" className="flex-1">Your Startup</TabsTrigger>
                <TabsTrigger value="decisions" className="flex-1">Decisions</TabsTrigger>
                <TabsTrigger value="lessons" className="flex-1">Lessons</TabsTrigger>
              </TabsList>
              
              <TabsContent value="simulation">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-medium">{simulationData.companyName}</h3>
                        <div className="text-gray-500 mt-1 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Month 5 • {simulationData.stage}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Overall Progress</div>
                        <div className="flex items-center mt-1">
                          <Progress value={simulationData.progress} className="w-32 h-2 mr-2" />
                          <span className="text-sm font-medium">{simulationData.progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500">Users</p>
                            <p className="text-2xl font-bold">{simulationData.users}</p>
                          </div>
                          <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-blue-700" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500">Revenue</p>
                            <p className="text-2xl font-bold">${simulationData.revenue}</p>
                          </div>
                          <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                            <TrendingUp className="h-5 w-5 text-green-700" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500">Investors</p>
                            <p className="text-2xl font-bold">{simulationData.investors}</p>
                          </div>
                          <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <Building className="h-5 w-5 text-purple-700" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Growth Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={simulationData.timeline}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis yAxisId="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip />
                            <Legend />
                            <Line
                              yAxisId="left"
                              type="monotone"
                              dataKey="users"
                              stroke="#3b82f6"
                              activeDot={{ r: 8 }}
                              name="Users"
                            />
                            <Line
                              yAxisId="right"
                              type="monotone"
                              dataKey="revenue"
                              stroke="#10b981"
                              name="Revenue ($)"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Business Challenges</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {simulationData.challenges.map((challenge) => (
                          <div key={challenge.id} className="flex items-center">
                            <div className={`h-4 w-4 rounded-full mr-3 ${
                              challenge.status === 'completed' ? 'bg-green-500' : 
                              challenge.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                            }`} />
                            <div className="flex-1">
                              <p className={`${
                                challenge.status === 'completed' ? 'text-gray-400 line-through' : 
                                'text-gray-700'
                              }`}>
                                {challenge.title}
                              </p>
                            </div>
                            <div>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                challenge.status === 'completed' ? 'bg-green-100 text-green-800' : 
                                challenge.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {challenge.status === 'completed' ? 'Completed' : 
                                 challenge.status === 'in-progress' ? 'In Progress' : 'Pending'}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="decisions">
                <div className="space-y-6">
                  {simulationData.decisions.map(decision => (
                    <Card key={decision.id}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-medium mb-2">{decision.title}</h3>
                        <p className="text-gray-600 mb-4">{decision.description}</p>
                        
                        <div className="space-y-3">
                          {decision.options.map(option => (
                            <div 
                              key={option.id}
                              className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                            >
                              <div className="flex items-center mb-1">
                                <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-sm font-medium">
                                  {option.id.toUpperCase()}
                                </div>
                                <h4 className="font-medium">{option.text}</h4>
                              </div>
                              <p className="text-sm text-gray-500 pl-9">Impact: {option.impact}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="lessons">
                <div className="space-y-4">
                  {simulationData.lessons.map(lesson => (
                    <Card key={lesson.id} className={lesson.status === 'locked' ? 'opacity-70' : ''}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`h-10 w-10 rounded-full mr-4 flex items-center justify-center ${
                              lesson.status === 'locked' ? 'bg-gray-100' : 'bg-blue-100'
                            }`}>
                              <Award className={`h-5 w-5 ${
                                lesson.status === 'locked' ? 'text-gray-400' : 'text-blue-700'
                              }`} />
                            </div>
                            <div>
                              <h3 className="font-medium">{lesson.title}</h3>
                              <p className="text-sm text-gray-500">
                                {lesson.status === 'locked' ? 'Unlock by advancing your startup' : 'Learning module available'}
                              </p>
                            </div>
                          </div>
                          <Button variant={lesson.status === 'locked' ? 'outline' : 'default'} disabled={lesson.status === 'locked'}>
                            {lesson.status === 'locked' ? 'Locked' : 'Start'}
                          </Button>
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

export default StudentSimulator;
