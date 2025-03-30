
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BarChart, PieChart, SearchCheck, Briefcase, 
  TrendingUp, LineChart, Users, Filter
} from 'lucide-react';

export const InvestorDashboard = () => {
  return (
    <div className="w-full rounded-xl border overflow-hidden bg-white shadow-md">
      <div className="bg-gradient-to-r from-purple-700 to-indigo-600 p-4">
        <h3 className="text-lg font-semibold text-white">Investor Dashboard</h3>
      </div>
      <div className="p-4">
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
        
        <div className="mt-4 grid grid-cols-4 gap-4">
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
    </div>
  );
};

export default InvestorDashboard;
