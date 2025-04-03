
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { AlertCircle, TrendingUp, ChevronDown, ChevronUp, Percent, DollarSign, Clock } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const PortfolioAnalytics = () => {
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('1y');
  const [portfolioData, setPortfolioData] = useState(null);
  const [performanceData, setPerformanceData] = useState([]);
  const [allocationData, setAllocationData] = useState([]);
  
  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setPortfolioData({
        totalValue: 285750,
        change: 12800,
        changePercent: 4.7,
        isPositive: true
      });
      
      setAllocationData([
        { name: 'Technology', value: 35 },
        { name: 'Healthcare', value: 20 },
        { name: 'Financial', value: 15 },
        { name: 'Consumer', value: 12 },
        { name: 'Energy', value: 10 },
        { name: 'Other', value: 8 },
      ]);
      
      setPerformanceData([
        { name: 'Jan', value: 250000 },
        { name: 'Feb', value: 255000 },
        { name: 'Mar', value: 262000 },
        { name: 'Apr', value: 258000 },
        { name: 'May', value: 267000 },
        { name: 'Jun', value: 273000 },
        { name: 'Jul', value: 270000 },
        { name: 'Aug', value: 278000 },
        { name: 'Sep', value: 285750 },
      ]);
      
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const COLORS = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#8884d8', '#8dd1e1'];

  const investmentData = [
    { name: 'Tech Ventures Fund', amount: 75000, return: 12.4, isPositive: true },
    { name: 'Biotech Startup', amount: 50000, return: 8.2, isPositive: true },
    { name: 'AI Research Co.', amount: 60000, return: 15.7, isPositive: true },
    { name: 'Green Energy Initiative', amount: 45000, return: -2.3, isPositive: false },
    { name: 'FinTech Platform', amount: 55750, return: 6.8, isPositive: true },
  ];

  return (
    <FeatureTemplate
      title="Portfolio Performance Analytics"
      description="Real-time monitoring and forecasting of your investment portfolio."
      backLink="/investors"
      backLinkText="Investor Dashboard"
    >
      {loading ? (
        <div className="space-y-6">
          <Card className="animate-pulse">
            <CardContent className="p-8">
              <div className="h-32 bg-gray-100 rounded-md"></div>
            </CardContent>
          </Card>
          <Card className="animate-pulse">
            <CardContent className="p-8">
              <div className="h-64 bg-gray-100 rounded-md"></div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Total Portfolio Value</p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">${portfolioData.totalValue.toLocaleString()}</span>
                  </div>
                  <div className={`flex items-center text-sm ${portfolioData.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {portfolioData.isPositive ? (
                      <ChevronUp className="h-4 w-4 mr-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 mr-1" />
                    )}
                    <span>${portfolioData.change.toLocaleString()}</span>
                    <span className="ml-1">({portfolioData.changePercent}%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Performance (YTD)</p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-green-600">+14.3%</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>vs. +9.2% benchmark</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Risk Assessment</p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">Moderate</span>
                  </div>
                  <div className="flex items-center text-sm text-amber-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>Diversification recommended</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Projected Annual Return</p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">11.5%</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Based on current allocation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle>Portfolio Performance</CardTitle>
                  <CardDescription>
                    Track your investment growth over time
                  </CardDescription>
                </div>
                <Select defaultValue={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1m">1 Month</SelectItem>
                    <SelectItem value="3m">3 Months</SelectItem>
                    <SelectItem value="6m">6 Months</SelectItem>
                    <SelectItem value="1y">1 Year</SelectItem>
                    <SelectItem value="all">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={performanceData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#ff7300"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                      name="Portfolio Value"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>
                  Current distribution of your portfolio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={allocationData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {allocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Investment Performance</CardTitle>
                <CardDescription>
                  Individual investments and their returns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {investmentData.map((investment, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <h4 className="font-medium">{investment.name}</h4>
                        <div className="text-gray-500 text-sm">
                          ${investment.amount.toLocaleString()}
                        </div>
                      </div>
                      <div className={`flex items-center font-medium ${investment.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {investment.isPositive ? (
                          <ChevronUp className="h-4 w-4 mr-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 mr-1" />
                        )}
                        {investment.return}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Button>Generate Detailed Report</Button>
            <Button variant="outline">Download as PDF</Button>
          </div>
        </div>
      )}
    </FeatureTemplate>
  );
};

export default PortfolioAnalytics;
