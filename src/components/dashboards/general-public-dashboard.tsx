
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  LineChart, CreditCard, PieChart, BookOpen, 
  Calendar, BarChart3, FileText, Target, MessageSquare 
} from 'lucide-react';

export const GeneralPublicDashboard = () => {
  return (
    <div className="w-full rounded-xl border overflow-hidden bg-white shadow-md">
      <div className="bg-gradient-to-r from-fundora-orange to-orange-400 p-4">
        <h3 className="text-lg font-semibold text-white">PersonalFinAI Dashboard</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="dashboard-item">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                <Target className="h-6 w-6 text-fundora-orange" />
              </div>
              <h4 className="font-medium">Financial Goals</h4>
              <div className="text-xs text-gray-500 mt-1">3 Active Goals</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-item">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                <LineChart className="h-6 w-6 text-fundora-orange" />
              </div>
              <h4 className="font-medium">Investments</h4>
              <div className="text-xs text-gray-500 mt-1">Portfolio Value: ₹78,500</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-item">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                <CreditCard className="h-6 w-6 text-fundora-orange" />
              </div>
              <h4 className="font-medium">Budget</h4>
              <div className="text-xs text-gray-500 mt-1">30% of monthly spent</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="dashboard-item">
            <CardContent className="p-4">
              <div className="flex items-center mb-4">
                <PieChart className="h-5 w-5 text-fundora-orange mr-2" />
                <h4 className="font-medium">Portfolio Allocation</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Stocks</span>
                  <div className="w-2/3 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-fundora-orange" style={{ width: '40%' }}></div>
                  </div>
                  <span className="text-sm font-medium">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Mutual Funds</span>
                  <div className="w-2/3 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: '30%' }}></div>
                  </div>
                  <span className="text-sm font-medium">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Fixed Deposits</span>
                  <div className="w-2/3 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '20%' }}></div>
                  </div>
                  <span className="text-sm font-medium">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Gold</span>
                  <div className="w-2/3 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500" style={{ width: '10%' }}></div>
                  </div>
                  <span className="text-sm font-medium">10%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-item">
            <CardContent className="p-4">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-fundora-orange mr-2" />
                <h4 className="font-medium">Upcoming Payments</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Home Loan EMI</p>
                    <p className="text-xs text-gray-500">Due in 3 days</p>
                  </div>
                  <span className="font-medium text-red-500">₹15,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Credit Card Bill</p>
                    <p className="text-xs text-gray-500">Due in 7 days</p>
                  </div>
                  <span className="font-medium text-red-500">₹8,750</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Insurance Premium</p>
                    <p className="text-xs text-gray-500">Due in 15 days</p>
                  </div>
                  <span className="font-medium text-red-500">₹4,500</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-4 grid grid-cols-4 gap-4">
          <Card className="dashboard-item col-span-1">
            <CardContent className="p-3 flex flex-col items-center">
              <BookOpen className="h-5 w-5 text-fundora-orange mb-1" />
              <div className="text-xs font-medium text-center">Learning<br />Modules</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-item col-span-1">
            <CardContent className="p-3 flex flex-col items-center">
              <BarChart3 className="h-5 w-5 text-fundora-orange mb-1" />
              <div className="text-xs font-medium text-center">Market<br />Analysis</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-item col-span-1">
            <CardContent className="p-3 flex flex-col items-center">
              <FileText className="h-5 w-5 text-fundora-orange mb-1" />
              <div className="text-xs font-medium text-center">Document<br />Scanner</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-item col-span-1">
            <CardContent className="p-3 flex flex-col items-center">
              <MessageSquare className="h-5 w-5 text-fundora-orange mb-1" />
              <div className="text-xs font-medium text-center">Community<br />Forum</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GeneralPublicDashboard;
