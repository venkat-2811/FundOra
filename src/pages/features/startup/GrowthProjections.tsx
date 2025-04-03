
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, TrendingUp, DollarSign, Users, BarChart as BarChartIcon } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const GrowthProjections = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("revenue");
  const [scenario, setScenario] = useState("moderate");
  const [timeframe, setTimeframe] = useState("1y");

  // Mock financial projection data
  const revenueData = {
    conservative: [
      { month: 'Apr', value: 10000 },
      { month: 'May', value: 12000 },
      { month: 'Jun', value: 13500 },
      { month: 'Jul', value: 15000 },
      { month: 'Aug', value: 16200 },
      { month: 'Sep', value: 17500 },
      { month: 'Oct', value: 19000 },
      { month: 'Nov', value: 20500 },
      { month: 'Dec', value: 22000 },
      { month: 'Jan', value: 23000 },
      { month: 'Feb', value: 24000 },
      { month: 'Mar', value: 25000 },
    ],
    moderate: [
      { month: 'Apr', value: 10000 },
      { month: 'May', value: 13000 },
      { month: 'Jun', value: 16000 },
      { month: 'Jul', value: 20000 },
      { month: 'Aug', value: 25000 },
      { month: 'Sep', value: 31000 },
      { month: 'Oct', value: 38000 },
      { month: 'Nov', value: 46000 },
      { month: 'Dec', value: 55000 },
      { month: 'Jan', value: 65000 },
      { month: 'Feb', value: 75000 },
      { month: 'Mar', value: 85000 },
    ],
    aggressive: [
      { month: 'Apr', value: 10000 },
      { month: 'May', value: 15000 },
      { month: 'Jun', value: 22500 },
      { month: 'Jul', value: 33750 },
      { month: 'Aug', value: 50625 },
      { month: 'Sep', value: 75937 },
      { month: 'Oct', value: 113906 },
      { month: 'Nov', value: 170859 },
      { month: 'Dec', value: 256288 },
      { month: 'Jan', value: 384432 },
      { month: 'Feb', value: 576648 },
      { month: 'Mar', value: 864972 },
    ],
  };

  const userGrowthData = {
    conservative: [
      { month: 'Apr', value: 100 },
      { month: 'May', value: 120 },
      { month: 'Jun', value: 135 },
      { month: 'Jul', value: 150 },
      { month: 'Aug', value: 162 },
      { month: 'Sep', value: 175 },
      { month: 'Oct', value: 190 },
      { month: 'Nov', value: 205 },
      { month: 'Dec', value: 220 },
      { month: 'Jan', value: 230 },
      { month: 'Feb', value: 240 },
      { month: 'Mar', value: 250 },
    ],
    moderate: [
      { month: 'Apr', value: 100 },
      { month: 'May', value: 140 },
      { month: 'Jun', value: 196 },
      { month: 'Jul', value: 275 },
      { month: 'Aug', value: 384 },
      { month: 'Sep', value: 538 },
      { month: 'Oct', value: 753 },
      { month: 'Nov', value: 1054 },
      { month: 'Dec', value: 1476 },
      { month: 'Jan', value: 2066 },
      { month: 'Feb', value: 2893 },
      { month: 'Mar', value: 4050 },
    ],
    aggressive: [
      { month: 'Apr', value: 100 },
      { month: 'May', value: 180 },
      { month: 'Jun', value: 324 },
      { month: 'Jul', value: 583 },
      { month: 'Aug', value: 1050 },
      { month: 'Sep', value: 1890 },
      { month: 'Oct', value: 3402 },
      { month: 'Nov', value: 6123 },
      { month: 'Dec', value: 11022 },
      { month: 'Jan', value: 19840 },
      { month: 'Feb', value: 35711 },
      { month: 'Mar', value: 64280 },
    ],
  };

  const expenseData = [
    { category: 'Engineering', value: 45000 },
    { category: 'Marketing', value: 25000 },
    { category: 'Sales', value: 30000 },
    { category: 'Operations', value: 15000 },
    { category: 'Admin', value: 10000 },
  ];

  const unitEconomicsData = [
    { name: 'CAC', value: 120 },
    { name: 'LTV', value: 850 },
    { name: 'ARPU', value: 85 },
    { name: 'Gross Margin', value: 75 },
    { name: 'Churn Rate', value: 5 },
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case 'revenue':
        return revenueData[scenario as keyof typeof revenueData];
      case 'users':
        return userGrowthData[scenario as keyof typeof userGrowthData];
      default:
        return [];
    }
  };

  const getDataLineColor = () => {
    switch (scenario) {
      case 'conservative':
        return '#3b82f6';
      case 'moderate':
        return '#10b981';
      case 'aggressive':
        return '#f97316';
      default:
        return '#10b981';
    }
  };

  return (
    <FeatureTemplate
      title="Growth Projections"
      description="AI-generated business forecasting with multiple scenarios to plan your growth strategy."
      backLink="/startup-founders"
      backLinkText="Startup Dashboard"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Current MRR</p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">$10,000</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>15% from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Active Users</p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">1,245</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>22% from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Avg. Customer LTV</p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">$850</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>5% from last quarter</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Runway</p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">8.5 months</span>
                </div>
                <div className="flex items-center text-sm text-amber-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>Based on burn rate</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle>Financial Projections</CardTitle>
                <CardDescription>
                  AI-generated growth forecasts based on your historical data
                </CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Select defaultValue={scenario} onValueChange={setScenario}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Scenario" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">Conservative</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="aggressive">Aggressive</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1y">1 Year</SelectItem>
                    <SelectItem value="2y">2 Years</SelectItem>
                    <SelectItem value="3y">3 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full md:w-auto mb-6">
                <TabsTrigger value="revenue">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Revenue
                </TabsTrigger>
                <TabsTrigger value="users">
                  <Users className="h-4 w-4 mr-2" />
                  User Growth
                </TabsTrigger>
                <TabsTrigger value="expenses">
                  <BarChartIcon className="h-4 w-4 mr-2" />
                  Expenses
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="revenue">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={getActiveData()}
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
                        formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={getDataLineColor()}
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                        name="Monthly Revenue"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-sm text-gray-500 text-center">
                  {scenario === 'conservative' ? 'Conservative: 10% monthly growth' : 
                   scenario === 'moderate' ? 'Moderate: 20% monthly growth' : 
                   'Aggressive: 50% monthly growth'}
                </div>
              </TabsContent>
              
              <TabsContent value="users">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={getActiveData()}
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
                        formatter={(value) => [value.toLocaleString(), 'Users']}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={getDataLineColor()}
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                        name="Active Users"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-sm text-gray-500 text-center">
                  {scenario === 'conservative' ? 'Conservative: 10% monthly user growth' : 
                   scenario === 'moderate' ? 'Moderate: 40% monthly user growth' : 
                   'Aggressive: 80% monthly user growth'}
                </div>
              </TabsContent>
              
              <TabsContent value="expenses">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={expenseData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`$${value.toLocaleString()}`, 'Expense']}
                      />
                      <Legend />
                      <Bar dataKey="value" name="Quarterly Expense" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-sm text-gray-500 text-center">
                  Projected quarterly expenses by department
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Unit Economics</CardTitle>
              <CardDescription>
                Key metrics for evaluating business efficiency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {unitEconomicsData.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border-b last:border-0">
                    <div>
                      <h4 className="font-medium">{metric.name}</h4>
                    </div>
                    <div className="font-medium">
                      {metric.name.includes("CAC") || metric.name.includes("LTV") || metric.name.includes("ARPU") ? (
                        `$${metric.value}`
                      ) : (
                        `${metric.value}%`
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Funding Requirements</CardTitle>
              <CardDescription>
                Based on your growth projections and burn rate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-800">Recommended Funding</h3>
                  <div className="text-3xl font-bold text-blue-900 mt-2">$1.2 Million</div>
                  <p className="text-blue-700 text-sm mt-1">
                    This will provide 18 months of runway at your projected burn rate
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-500">Suggested Funding Allocation</h4>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm">Engineering</p>
                        <p className="font-medium">$500K (42%)</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm">Marketing</p>
                        <p className="font-medium">$350K (29%)</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm">Sales</p>
                        <p className="font-medium">$250K (21%)</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm">Operations</p>
                        <p className="font-medium">$100K (8%)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button>Generate Funding Pitch</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </FeatureTemplate>
  );
};

export default GrowthProjections;
