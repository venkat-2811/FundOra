
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, BookOpen, Award, ArrowRight } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const FinancialLiteracy = () => {
  const [loading, setLoading] = React.useState(true);
  const [courses, setCourses] = React.useState([]);
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setCourses([
        {
          id: 1,
          title: 'Introduction to Financial Markets',
          level: 'Beginner',
          duration: '2 hours',
          completionRate: 100,
          modules: 5,
          completed: 5,
        },
        {
          id: 2,
          title: 'Investment Fundamentals',
          level: 'Beginner',
          duration: '3 hours',
          completionRate: 60,
          modules: 8,
          completed: 5,
        },
        {
          id: 3,
          title: 'Risk Management Essentials',
          level: 'Intermediate',
          duration: '2.5 hours',
          completionRate: 20,
          modules: 6,
          completed: 1,
        },
        {
          id: 4,
          title: 'Advanced Portfolio Strategy',
          level: 'Advanced',
          duration: '4 hours',
          completionRate: 0,
          modules: 10,
          completed: 0,
        },
      ]);
      setProgress(45);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <FeatureTemplate
      title="Financial Literacy Certification"
      description="Gain industry-recognized credentials to showcase your financial knowledge."
      backLink="/students"
      backLinkText="Student Dashboard"
    >
      {loading ? (
        <Card className="animate-pulse">
          <CardContent className="p-8">
            <div className="h-48 bg-gray-100 rounded-md"></div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Certification Progress</CardTitle>
              <CardDescription>
                Complete all required courses to earn your certification
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm font-medium">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <div className="flex flex-wrap gap-4 my-6">
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <BookOpen className="h-5 w-5 text-green-600 mr-2" />
                  <div>
                    <div className="text-sm font-medium">Courses</div>
                    <div className="text-2xl font-bold">4</div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <div>
                    <div className="text-sm font-medium">Completed</div>
                    <div className="text-2xl font-bold">1</div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                  <Award className="h-5 w-5 text-amber-600 mr-2" />
                  <div>
                    <div className="text-sm font-medium">Certificates</div>
                    <div className="text-2xl font-bold">1</div>
                  </div>
                </div>
              </div>
              
              <Button className="w-full">View My Certificates</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Course Catalog</CardTitle>
              <CardDescription>
                Structured learning path to financial mastery
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-md transition-all">
                    <div className="relative">
                      {course.completionRate === 100 && (
                        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 font-medium">
                          Completed
                        </div>
                      )}
                      <CardContent className="p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold">{course.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <span>{course.level}</span>
                            <span>•</span>
                            <span>{course.duration}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>{course.completed}/{course.modules} modules</span>
                            <span>{course.completionRate}%</span>
                          </div>
                          <Progress value={course.completionRate} className="h-1.5" />
                        </div>
                        
                        <Button 
                          className="w-full bg-fundora-orange hover:bg-orange-600"
                          disabled={course.completionRate === 100}
                        >
                          {course.completionRate === 0 
                            ? 'Start Course' 
                            : course.completionRate === 100 
                              ? 'Completed' 
                              : 'Continue Course'}
                          {course.completionRate !== 100 && <ArrowRight className="ml-2 h-4 w-4" />}
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </FeatureTemplate>
  );
};

export default FinancialLiteracy;
