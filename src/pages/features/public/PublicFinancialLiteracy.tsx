
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle, Award, Play, DollarSign, TrendingUp, PiggyBank, Lock } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const PublicFinancialLiteracy = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("courses");

  const courses = [
    {
      id: 1,
      title: "Personal Finance Fundamentals",
      difficulty: "Beginner",
      duration: "2 hours",
      modules: 5,
      progress: 60,
      description: "Learn the basics of budgeting, saving, and managing your personal finances.",
      tags: ["Budgeting", "Savings", "Credit"],
    },
    {
      id: 2,
      title: "Introduction to Investing",
      difficulty: "Beginner",
      duration: "3 hours",
      modules: 7,
      progress: 40,
      description: "Understanding different investment options and how to build a portfolio.",
      tags: ["Stocks", "Bonds", "ETFs"],
    },
    {
      id: 3,
      title: "Retirement Planning",
      difficulty: "Intermediate",
      duration: "2.5 hours",
      modules: 6,
      progress: 15,
      description: "Strategies for planning and saving for retirement.",
      tags: ["401k", "IRA", "Planning"],
    },
    {
      id: 4,
      title: "Advanced Investment Strategies",
      difficulty: "Advanced",
      duration: "4 hours",
      modules: 8,
      progress: 0,
      description: "Dive deeper into investment strategies and portfolio management.",
      tags: ["Asset Allocation", "Risk Management", "Analysis"],
    },
  ];

  const tools = [
    {
      id: 1,
      title: "Budget Calculator",
      description: "Create and manage your monthly budget with this interactive tool.",
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      status: "available"
    },
    {
      id: 2,
      title: "Retirement Planner",
      description: "Calculate how much you need to save for retirement and track your progress.",
      icon: <PiggyBank className="h-6 w-6 text-purple-600" />,
      status: "available"
    },
    {
      id: 3,
      title: "Investment Return Calculator",
      description: "Project potential returns on your investments over time.",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      status: "available"
    },
    {
      id: 4,
      title: "Debt Reduction Planner",
      description: "Create a strategy to pay down debt using various methods.",
      icon: <TrendingUp className="h-6 w-6 text-red-600" />,
      status: "locked"
    },
  ];

  const articles = [
    {
      id: 1,
      title: "Emergency Funds: Why You Need One and How to Build It",
      category: "Savings",
      readTime: "5 min read",
      date: "Mar 15, 2024",
      excerpt: "Learn how to build and maintain an emergency fund to protect yourself from financial surprises."
    },
    {
      id: 2,
      title: "Understanding Credit Scores: What They Mean and How to Improve Them",
      category: "Credit",
      readTime: "7 min read",
      date: "Mar 10, 2024",
      excerpt: "Discover what factors affect your credit score and strategies to improve it over time."
    },
    {
      id: 3,
      title: "The Basics of Stock Market Investing for Beginners",
      category: "Investing",
      readTime: "10 min read",
      date: "Mar 5, 2024",
      excerpt: "A simple guide to understanding stocks, exchanges, and basic investment strategies."
    },
    {
      id: 4,
      title: "How to Create a Budget That Actually Works",
      category: "Budgeting",
      readTime: "6 min read",
      date: "Feb 28, 2024",
      excerpt: "Practical tips for creating a budget you can stick to and that helps you reach your financial goals."
    },
  ];

  return (
    <FeatureTemplate
      title="Financial Literacy Center"
      description="Learn essential financial skills and knowledge to make informed money decisions."
      backLink="/general-public"
      backLinkText="Public Dashboard"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Financial Literacy Center</CardTitle>
            <CardDescription>
              Build your financial knowledge with courses, tools, and resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="courses" className="flex-1">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Courses
                </TabsTrigger>
                <TabsTrigger value="tools" className="flex-1">
                  <CalculatorIcon className="h-4 w-4 mr-2" />
                  Financial Tools
                </TabsTrigger>
                <TabsTrigger value="articles" className="flex-1">
                  <FileTextIcon className="h-4 w-4 mr-2" />
                  Articles
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="courses">
                <div className="space-y-6">
                  {courses.map(course => (
                    <Card key={course.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                              <h3 className="text-lg font-medium">{course.title}</h3>
                              <Badge variant="outline" className="w-fit">
                                {course.difficulty}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center mb-3">
                              <div className="flex items-center text-gray-500 text-sm mr-4">
                                <Clock className="h-4 w-4 mr-1" />
                                {course.duration}
                              </div>
                              <div className="flex items-center text-gray-500 text-sm">
                                <BookOpen className="h-4 w-4 mr-1" />
                                {course.modules} modules
                              </div>
                            </div>
                            
                            <p className="text-gray-600 mb-3">{course.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {course.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                          </div>
                          
                          <div className="flex flex-row md:flex-col justify-end gap-2 md:w-36">
                            <Button>
                              {course.progress > 0 ? 'Continue' : 'Start'} Course
                            </Button>
                            <Button variant="outline">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tools">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tools.map(tool => (
                    <Card key={tool.id} className={tool.status === 'locked' ? 'opacity-70' : ''}>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="mr-4">
                            {tool.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <h3 className="text-lg font-medium mr-2">{tool.title}</h3>
                              {tool.status === 'locked' && (
                                <Lock className="h-4 w-4 text-gray-400" />
                              )}
                            </div>
                            <p className="text-gray-600 mt-1 mb-4">{tool.description}</p>
                            {tool.status === 'available' ? (
                              <Button>Launch Tool</Button>
                            ) : (
                              <Button variant="outline" disabled>
                                Premium Feature
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="articles">
                <div className="space-y-4">
                  {articles.map(article => (
                    <Card key={article.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-2">
                              {article.category}
                            </Badge>
                            <h3 className="text-lg font-medium mb-2">{article.title}</h3>
                            <div className="flex items-center text-sm text-gray-500 mb-3">
                              <Clock className="h-4 w-4 mr-1" />
                              <span className="mr-3">{article.readTime}</span>
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              <span>{article.date}</span>
                            </div>
                            <p className="text-gray-600 mb-4">{article.excerpt}</p>
                            <Button variant="link" className="px-0">
                              Read Article
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
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

// Missing icon components
const CalculatorIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  );
};

const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
};

const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
};

const Clock = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
};

export default PublicFinancialLiteracy;
