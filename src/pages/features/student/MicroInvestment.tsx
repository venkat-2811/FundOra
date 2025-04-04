import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowRight, TrendingUp, PiggyBank, DollarSign, ArrowUpRight, BadgeDollarSign, Wallet, Percent } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const MicroInvestment = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [investmentAmount, setInvestmentAmount] = useState(25);

  // Mock portfolio data
  const portfolioData = {
    totalValue: 527.83,
    invested: 500,
    returns: 27.83,
    returnPercent: 5.57,
    monthlyContribution: 25,
    allocationData: [
      { name: 'ETFs', value: 60 },
      { name: 'Tech', value: 20 },
      { name: 'ESG', value: 15 },
      { name: 'Cash', value: 5 },
    ],
    performanceData: [
      { month: 'Jan', value: 250 },
      { month: 'Feb', value: 280 },
      { month: 'Mar', value: 320 },
      { month: 'Apr', value: 350 },
      { month: 'May', value: 390 },
      { month: 'Jun', value: 415 },
      { month: 'Jul', value: 470 },
      { month: 'Aug', value: 510 },
      { month: 'Sep', value: 527.83 },
    ],
    holdings: [
      { name: 'Total Market ETF', ticker: 'VTI', shares: 0.45, value: 110.25, change: 3.2 },
      { name: 'S&P 500 ETF', ticker: 'VOO', shares: 0.22, value: 95.15, change: 2.5 },
      { name: 'Tech ETF', ticker: 'VGT', shares: 0.18, value: 85.20, change: 4.7 },
      { name: 'ESG Fund', ticker: 'ESGV', shares: 0.63, value: 79.23, change: -1.2 },
      { name: 'Renewable Energy', ticker: 'ICLN', shares: 1.25, value: 25.75, change: 1.8 },
      { name: 'Cash', ticker: null, shares: null, value: 132.25, change: 0 },
    ]
  };

  const goalData = {
    emergencyFund: {
      current: 300,
      target: 1000,
      progress: 30
    },
    summerTrip: {
      current: 250,
      target: 1500,
      progress: 16.7
    }
  };

  const microInvestOptions = [
    {
      id: 1,
      name: "Spare Change Roundup",
      description: "Round up everyday purchases to the nearest dollar and invest the difference",
      avgMonthly: "$15-25",
      icon: <PiggyBank className="h-6 w-6 text-purple-600" />
    },
    {
      id: 2,
      name: "Set Monthly Amount",
      description: "Automatically invest a fixed amount each month",
      avgMonthly: "You decide",
      icon: <BadgeDollarSign className="h-6 w-6 text-green-600" />
    },
    {
      id: 3,
      name: "Cashback Investing",
      description: "Invest the cashback you earn from purchases",
      avgMonthly: "$5-15",
      icon: <Wallet className="h-6 w-6 text-blue-600" />
    }
  ];

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-600";
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const formatValue = (value: any): string => {
    if (typeof value === 'number') {
      return `$${value.toFixed(2)}`;
    }
    return `$${value}`;
  };

  return (
    <FeatureTemplate
      title="Micro-Investment Platform"
      description="Start building your investment portfolio with small, regular contributions."
      backLink="/students"
      backLinkText="Student Dashboard"
    >
      <div className="space-y-6">
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="dashboard" className="flex-1">Your Portfolio</TabsTrigger>
            <TabsTrigger value="invest" className="flex-1">Invest</TabsTrigger>
            <TabsTrigger value="goals" className="flex-1">Goals</TabsTrigger>
            <TabsTrigger value="learn" className="flex-1">Learn</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Portfolio Value</p>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">${portfolioData.totalValue.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        <span>${portfolioData.returns.toFixed(2)} ({portfolioData.returnPercent}%)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Total Invested</p>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">${portfolioData.invested.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span>${portfolioData.monthlyContribution}/month</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Next Investment</p>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">Apr 15</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span>${portfolioData.monthlyContribution} scheduled</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">YTD Return</p>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-green-600">+8.2%</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Percent className="h-4 w-4 mr-1" />
                        <span>vs. +7.4% S&P 500</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Portfolio Performance</CardTitle>
                      <CardDescription>
                        Track your investment growth over time
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={portfolioData.performanceData}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip 
                              formatter={(value) => [formatValue(value), 'Portfolio Value']}
                            />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="value"
                              stroke="#10b981"
                              strokeWidth={2}
                              activeDot={{ r: 8 }}
                              name="Portfolio Value"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Asset Allocation</CardTitle>
                    <CardDescription>
                      Your current portfolio mix
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={portfolioData.allocationData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {portfolioData.allocationData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Your Holdings</CardTitle>
                  <CardDescription>
                    Details of your current investments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {portfolioData.holdings.map((holding, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center p-3 border-b last:border-0"
                      >
                        <div>
                          <h4 className="font-medium">{holding.name}</h4>
                          {holding.ticker && (
                            <div className="text-gray-500 text-sm">
                              {holding.ticker} • {holding.shares} shares
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${holding.value.toFixed(2)}</div>
                          {holding.change !== 0 && (
                            <div className={`text-sm ${getChangeColor(holding.change)}`}>
                              {holding.change > 0 ? '+' : ''}{holding.change}%
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="invest">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Set Up Micro-Investing</CardTitle>
                  <CardDescription>
                    Choose how you want to build your portfolio with small, regular investments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {microInvestOptions.map(option => (
                      <div 
                        key={option.id}
                        className="border rounded-lg p-6 hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="flex items-start">
                          <div className="mr-4">
                            {option.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-medium">{option.name}</h3>
                            <p className="text-gray-600 mt-1 mb-2">{option.description}</p>
                            <div className="text-sm text-gray-500">
                              Average monthly investment: {option.avgMonthly}
                            </div>
                          </div>
                          <Button variant="outline">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="bg-gray-50 p-6 rounded-lg mt-6">
                      <h3 className="text-lg font-medium mb-4">One-Time Investment</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-gray-500 mb-1 block">Investment Amount</label>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1 text-gray-500" />
                            <Input 
                              type="number"
                              value={investmentAmount}
                              onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                              className="w-24 mr-4"
                            />
                            <Slider 
                              value={[investmentAmount]} 
                              min={5}
                              max={100}
                              step={5}
                              onValueChange={(value) => setInvestmentAmount(value[0])}
                              className="flex-1"
                            />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button>Invest Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="goals">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Financial Goals</CardTitle>
                  <CardDescription>
                    Track progress towards your savings goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-lg font-medium">Emergency Fund</h3>
                          <p className="text-gray-600 mt-1">
                            ${goalData.emergencyFund.current} of ${goalData.emergencyFund.target} Goal
                          </p>
                        </div>
                        <div className="md:text-right">
                          <span className="text-sm font-medium">{goalData.emergencyFund.progress}% complete</span>
                        </div>
                      </div>
                      <Progress value={goalData.emergencyFund.progress} className="h-2 mb-2" />
                      <div className="flex justify-end mt-4">
                        <Button variant="outline">Add Funds</Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-lg font-medium">Summer Trip</h3>
                          <p className="text-gray-600 mt-1">
                            ${goalData.summerTrip.current} of ${goalData.summerTrip.target} Goal
                          </p>
                        </div>
                        <div className="md:text-right">
                          <span className="text-sm font-medium">{goalData.summerTrip.progress.toFixed(1)}% complete</span>
                        </div>
                      </div>
                      <Progress value={goalData.summerTrip.progress} className="h-2 mb-2" />
                      <div className="flex justify-end mt-4">
                        <Button variant="outline">Add Funds</Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button>Create New Goal</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="learn">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Learning Center</CardTitle>
                  <CardDescription>
                    Build your investment knowledge and skills
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-medium mb-2">Investment Basics</h3>
                        <p className="text-gray-600 mb-4">
                          Learn the fundamentals of investing and building a portfolio
                        </p>
                        <Button className="w-full">Start Learning</Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-medium mb-2">Market Analysis</h3>
                        <p className="text-gray-600 mb-4">
                          Understand how to research and evaluate investment opportunities
                        </p>
                        <Button className="w-full">Start Learning</Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-medium mb-2">Risk Management</h3>
                        <p className="text-gray-600 mb-4">
                          Learn strategies to manage investment risk and volatility
                        </p>
                        <Button className="w-full">Start Learning</Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-medium mb-2">Long-term Planning</h3>
                        <p className="text-gray-600 mb-4">
                          Develop strategies for long-term financial success
                        </p>
                        <Button className="w-full">Start Learning</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </FeatureTemplate>
  );
};

export default MicroInvestment;
