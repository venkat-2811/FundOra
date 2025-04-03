
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowRight, TrendingUp, BarChart as BarChartIcon, DollarSign, Clock, RefreshCw, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const PortfolioSimulation = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("simulator");
  const [riskLevel, setRiskLevel] = useState("moderate");
  const [investmentAmount, setInvestmentAmount] = useState(10000);
  const [investmentPeriod, setInvestmentPeriod] = useState("10");

  // Mock portfolio allocation data
  const portfolioAllocation = {
    conservative: [
      { name: 'Bonds', value: 60 },
      { name: 'Large Cap Stocks', value: 20 },
      { name: 'Mid Cap Stocks', value: 10 },
      { name: 'International Stocks', value: 5 },
      { name: 'Cash', value: 5 },
    ],
    moderate: [
      { name: 'Bonds', value: 40 },
      { name: 'Large Cap Stocks', value: 30 },
      { name: 'Mid Cap Stocks', value: 15 },
      { name: 'International Stocks', value: 10 },
      { name: 'Small Cap Stocks', value: 5 },
    ],
    aggressive: [
      { name: 'Bonds', value: 20 },
      { name: 'Large Cap Stocks', value: 35 },
      { name: 'Mid Cap Stocks', value: 20 },
      { name: 'International Stocks', value: 15 },
      { name: 'Small Cap Stocks', value: 10 },
    ]
  };

  // Mock performance data
  const performanceData = {
    conservative: [
      { year: '2025', value: 10500 },
      { year: '2026', value: 11025 },
      { year: '2027', value: 11576 },
      { year: '2028', value: 12155 },
      { year: '2029', value: 12763 },
      { year: '2030', value: 13401 },
      { year: '2031', value: 14071 },
      { year: '2032', value: 14775 },
      { year: '2033', value: 15513 },
      { year: '2034', value: 16289 },
    ],
    moderate: [
      { year: '2025', value: 10800 },
      { year: '2026', value: 11664 },
      { year: '2027', value: 12597 },
      { year: '2028', value: 13605 },
      { year: '2029', value: 14693 },
      { year: '2030', value: 15869 },
      { year: '2031', value: 17138 },
      { year: '2032', value: 18509 },
      { year: '2033', value: 19990 },
      { year: '2034', value: 21589 },
    ],
    aggressive: [
      { year: '2025', value: 11200 },
      { year: '2026', value: 12544 },
      { year: '2027', value: 14049 },
      { year: '2028', value: 15735 },
      { year: '2029', value: 17623 },
      { year: '2030', value: 19738 },
      { year: '2031', value: 22107 },
      { year: '2032', value: 24759 },
      { year: '2033', value: 27730 },
      { year: '2034', value: 31058 },
    ]
  };

  // Mock market data
  const marketData = [
    { 
      name: 'S&P 500',
      current: 5380.65,
      change: 32.45,
      changePercent: 0.61,
      isPositive: true
    },
    { 
      name: 'Dow Jones',
      current: 39170.35,
      change: -45.63,
      changePercent: -0.12,
      isPositive: false
    },
    { 
      name: 'NASDAQ',
      current: 17172.33,
      change: 125.82,
      changePercent: 0.74,
      isPositive: true
    },
    { 
      name: 'Russell 2000',
      current: 2093.12,
      change: 15.22,
      changePercent: 0.73,
      isPositive: true
    },
  ];

  const getActiveAllocation = () => {
    return portfolioAllocation[riskLevel as keyof typeof portfolioAllocation];
  };

  const getActivePerformance = () => {
    return performanceData[riskLevel as keyof typeof performanceData];
  };

  const getProjectedValue = () => {
    const data = getActivePerformance();
    return data[data.length - 1].value;
  };

  const getExpectedReturn = () => {
    switch (riskLevel) {
      case 'conservative':
        return 5;
      case 'moderate':
        return 8;
      case 'aggressive':
        return 12;
      default:
        return 8;
    }
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <FeatureTemplate
      title="Portfolio Simulation"
      description="Visualize the potential growth of your investments over time with different risk profiles."
      backLink="/general-public"
      backLinkText="Public Dashboard"
    >
      <div className="space-y-6">
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="simulator" className="flex-1">
              <BarChartIcon className="h-4 w-4 mr-2" />
              Investment Simulator
            </TabsTrigger>
            <TabsTrigger value="market" className="flex-1">
              <TrendingUp className="h-4 w-4 mr-2" />
              Market Data
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="simulator">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Portfolio Simulator</CardTitle>
                  <CardDescription>
                    Adjust parameters to see how your investments could grow over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Risk Level</label>
                        <Select defaultValue={riskLevel} onValueChange={setRiskLevel}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select risk level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="conservative">Conservative</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="aggressive">Aggressive</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-gray-500">
                          Expected annual return: {getExpectedReturn()}%
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Initial Investment</label>
                        <div className="flex items-center space-x-4">
                          <div className="w-24 bg-gray-100 rounded px-3 py-2 flex items-center">
                            <DollarSign className="h-4 w-4 text-gray-500" />
                            <span>{investmentAmount.toLocaleString()}</span>
                          </div>
                          <Slider 
                            value={[investmentAmount]} 
                            min={1000}
                            max={100000}
                            step={1000}
                            onValueChange={(value) => setInvestmentAmount(value[0])}
                            className="flex-1"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Investment Period</label>
                        <Select defaultValue={investmentPeriod} onValueChange={setInvestmentPeriod}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 Years</SelectItem>
                            <SelectItem value="10">10 Years</SelectItem>
                            <SelectItem value="20">20 Years</SelectItem>
                            <SelectItem value="30">30 Years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Recalculate Projection
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-6">
                          <div className="space-y-2">
                            <p className="text-sm text-gray-500">Initial Investment</p>
                            <div className="flex items-baseline">
                              <span className="text-2xl font-bold">${investmentAmount.toLocaleString()}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-6">
                          <div className="space-y-2">
                            <p className="text-sm text-gray-500">Projected Value</p>
                            <div className="flex items-baseline">
                              <span className="text-2xl font-bold">${getProjectedValue().toLocaleString()}</span>
                            </div>
                            <div className="flex items-center text-sm text-green-600">
                              <ArrowUpRight className="h-4 w-4 mr-1" />
                              <span>{getExpectedReturn()}% annual return</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-6">
                          <div className="space-y-2">
                            <p className="text-sm text-gray-500">Total Growth</p>
                            <div className="flex items-baseline">
                              <span className="text-2xl font-bold text-green-600">
                                +${(getProjectedValue() - investmentAmount).toLocaleString()}
                              </span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Over {investmentPeriod} years</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Projected Growth</CardTitle>
                          <CardDescription>
                            Estimated value over time based on {getExpectedReturn()}% annual return
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart
                                data={getActivePerformance()}
                                margin={{
                                  top: 5,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip 
                                  formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
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
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Portfolio Allocation</CardTitle>
                          <CardDescription>
                            Recommended asset allocation for {riskLevel} risk profile
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={getActiveAllocation()}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                  nameKey="name"
                                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                >
                                  {getActiveAllocation().map((entry, index) => (
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
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="flex items-start">
                        <div className="mr-4 bg-blue-100 p-2 rounded-full">
                          <InfoIcon className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-medium text-blue-800">Investing involves risk</h3>
                          <p className="text-blue-700 mt-1">
                            This simulation is based on historical market averages and is for educational purposes only. 
                            Actual investment returns may vary significantly and may result in loss of principal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="market">
            <Card>
              <CardHeader>
                <CardTitle>Market Overview</CardTitle>
                <CardDescription>
                  Current market data and recent performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {marketData.map((item, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="space-y-2">
                            <p className="text-sm text-gray-500">{item.name}</p>
                            <div className="flex items-baseline">
                              <span className="text-2xl font-bold">{item.current.toLocaleString()}</span>
                            </div>
                            <div className={`flex items-center text-sm ${item.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                              {item.isPositive ? (
                                <ArrowUpRight className="h-4 w-4 mr-1" />
                              ) : (
                                <ArrowDownRight className="h-4 w-4 mr-1" />
                              )}
                              <span>
                                {item.isPositive ? '+' : ''}{item.change.toFixed(2)} ({item.isPositive ? '+' : ''}{item.changePercent.toFixed(2)}%)
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>Market News & Insights</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="border-b pb-4">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Fed Signals Potential Rate Cuts Later This Year</h3>
                                <Badge variant="outline">Economy</Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">
                                Federal Reserve officials indicated they may start cutting interest rates later this year if inflation continues to cool, according to meeting minutes released today.
                              </p>
                              <div className="text-xs text-gray-500">
                                2 hours ago
                              </div>
                            </div>
                            
                            <div className="border-b pb-4">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Tech Stocks Rally on Strong Earnings Reports</h3>
                                <Badge variant="outline">Technology</Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">
                                Major tech companies reported better-than-expected quarterly earnings, driving a sector-wide rally and pushing the NASDAQ to new highs.
                              </p>
                              <div className="text-xs text-gray-500">
                                5 hours ago
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Oil Prices Stabilize After Recent Volatility</h3>
                                <Badge variant="outline">Commodities</Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">
                                Crude oil prices have stabilized following weeks of volatility, as supply concerns ease and demand forecasts improve.
                              </p>
                              <div className="text-xs text-gray-500">
                                8 hours ago
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Economic Calendar</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="border-b pb-3">
                            <div className="text-xs text-gray-500 mb-1">Today</div>
                            <h4 className="font-medium">Jobless Claims</h4>
                            <p className="text-sm text-gray-600">8:30 AM ET</p>
                          </div>
                          
                          <div className="border-b pb-3">
                            <div className="text-xs text-gray-500 mb-1">Tomorrow</div>
                            <h4 className="font-medium">Consumer Sentiment</h4>
                            <p className="text-sm text-gray-600">10:00 AM ET</p>
                          </div>
                          
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Apr 12</div>
                            <h4 className="font-medium">CPI Data Release</h4>
                            <p className="text-sm text-gray-600">8:30 AM ET</p>
                          </div>
                          
                          <Button variant="outline" className="w-full mt-2">
                            View Full Calendar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </FeatureTemplate>
  );
};

// Missing icon components
const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
};

export default PortfolioSimulation;
