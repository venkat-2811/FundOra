
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import StudentDashboard from '@/components/dashboards/student-dashboard';
import AIAssistant from '@/components/chat/ai-assistant';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Students = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Students</h1>
          <p className="text-lg text-gray-600 mb-8">
            Build financial literacy, explore entrepreneurship, and develop investment skills with guidance from AI.
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Student Dashboard</h2>
              <StudentDashboard />
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your AI Learning Assistant</h2>
              <AIAssistant />
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Entrepreneurship Simulator</h3>
                    <p className="text-gray-600 mb-4">Virtual startup building experience to learn entrepreneurship in a risk-free environment.</p>
                    <Link to="/students/entrepreneurship-simulator">
                      <Button className="w-full bg-fundora-orange hover:bg-orange-600">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Financial Literacy Certification</h3>
                    <p className="text-gray-600 mb-4">Industry-recognized credentials to showcase your financial knowledge to employers.</p>
                    <Link to="/students/financial-literacy">
                      <Button className="w-full bg-fundora-orange hover:bg-orange-600">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Micro-Investment Platform</h3>
                    <p className="text-gray-600 mb-4">Small-scale investment opportunities designed specifically for learning with minimal risk.</p>
                    <Link to="/students/micro-investment">
                      <Button className="w-full bg-fundora-orange hover:bg-orange-600">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Career Path Explorer</h3>
                    <p className="text-gray-600 mb-4">AI guidance on various career options in finance and entrepreneurship based on your interests and skills.</p>
                    <Link to="/students/career-explorer">
                      <Button className="w-full bg-fundora-orange hover:bg-orange-600">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Students;
