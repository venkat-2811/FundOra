
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, BookOpen, Lightbulb, Award, 
  LineChart, Users, Calendar, Target
} from 'lucide-react';

export const StudentDashboard = () => {
  return (
    <div className="w-full rounded-xl border overflow-hidden bg-white shadow-md">
      <div className="bg-gradient-to-r from-green-600 to-teal-500 p-4">
        <h3 className="text-lg font-semibold text-white">Student Dashboard</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="dashboard-item">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <GraduationCap className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium">Learning Progress</h4>
              <div className="text-xs text-gray-500 mt-1">3 of 5 Modules Completed</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-item">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Lightbulb className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium">Startup Simulator</h4>
              <div className="text-xs text-gray-500 mt-1">Virtual Company Valuation: ₹2.5Cr</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-item">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <LineChart className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium">Investment Portfolio</h4>
              <div className="text-xs text-gray-500 mt-1">Virtual Balance: ₹52,800</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="dashboard-item">
            <CardContent className="p-4">
              <div className="flex items-center mb-4">
                <BookOpen className="h-5 w-5 text-green-600 mr-2" />
                <h4 className="font-medium">Learning Path</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Financial Basics</p>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Completed</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Investment Fundamentals</p>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Completed</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Entrepreneurship 101</p>
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">In Progress</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-yellow-500" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Business Plan Creation</p>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Locked</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-gray-500" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-item">
            <CardContent className="p-4">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-green-600 mr-2" />
                <h4 className="font-medium">Upcoming Events</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">Startup Pitch Workshop</p>
                    <p className="text-xs text-gray-500">May 15, 2023 • 3:00 PM</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Workshop</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">Stock Market Simulation</p>
                    <p className="text-xs text-gray-500">May 18, 2023 • 5:00 PM</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Competition</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">Angel Investor Q&A</p>
                    <p className="text-xs text-gray-500">May 22, 2023 • 4:00 PM</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Webinar</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-4 grid grid-cols-4 gap-4">
          <Card className="dashboard-item col-span-1">
            <CardContent className="p-3 flex flex-col items-center">
              <Award className="h-5 w-5 text-green-600 mb-1" />
              <div className="text-xs font-medium text-center">Skill<br />Certification</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-item col-span-1">
            <CardContent className="p-3 flex flex-col items-center">
              <Users className="h-5 w-5 text-green-600 mb-1" />
              <div className="text-xs font-medium text-center">Mentor<br />Connect</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-item col-span-1">
            <CardContent className="p-3 flex flex-col items-center">
              <Target className="h-5 w-5 text-green-600 mb-1" />
              <div className="text-xs font-medium text-center">Career<br />Guidance</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-item col-span-1">
            <CardContent className="p-3 flex flex-col items-center">
              <Lightbulb className="h-5 w-5 text-green-600 mb-1" />
              <div className="text-xs font-medium text-center">Idea<br />Validation</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
