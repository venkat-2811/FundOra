
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, Users, Target, Briefcase, 
  FileText, Award, Book, MessageSquare
} from 'lucide-react';

export const StartupDashboard = () => {
  return (
    <div className="w-full rounded-xl border overflow-hidden bg-white shadow-md">
      <div className="bg-gradient-to-r from-fundora-dark to-blue-800 p-4">
        <h3 className="text-lg font-semibold text-white">Startup Founder Dashboard</h3>
      </div>
      <div className="p-4">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="dashboard-item">
            <CardContent className="p-4">
              <div className="flex items-center mb-4">
                <Briefcase className="h-5 w-5 text-fundora-dark mr-2" />
                <h4 className="font-medium">Funding Opportunities</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Angel Investor Group</p>
                    <p className="text-xs text-gray-500">Investment Range: ₹15-30L</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">High Match</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Tech Ventures Fund</p>
                    <p className="text-xs text-gray-500">Investment Range: ₹50L-1Cr</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Medium Match</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Growth Capital Partners</p>
                    <p className="text-xs text-gray-500">Investment Range: ₹1-5Cr</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">High Match</span>
                </div>
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
                <div>
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">Problem Statement</p>
                    <div className="flex">
                      <span className="text-yellow-500">★★★</span>
                      <span className="text-gray-300">★★</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Make the market pain point more specific</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">Business Model</p>
                    <div className="flex">
                      <span className="text-yellow-500">★★★★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Strong revenue streams identified</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">Go-to-Market Strategy</p>
                    <div className="flex">
                      <span className="text-yellow-500">★★</span>
                      <span className="text-gray-300">★★★</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Needs more specific customer acquisition details</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-4 grid grid-cols-4 gap-4">
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
    </div>
  );
};

export default StartupDashboard;
