
import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import StudentDashboard from '@/components/dashboards/student-dashboard';
import AIAssistant from '@/components/chat/ai-assistant';

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
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Entrepreneurship Simulator</h3>
                  <p className="text-gray-600">Virtual startup building experience to learn entrepreneurship in a risk-free environment.</p>
                </div>
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Financial Literacy Certification</h3>
                  <p className="text-gray-600">Industry-recognized credentials to showcase your financial knowledge to employers.</p>
                </div>
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Micro-Investment Platform</h3>
                  <p className="text-gray-600">Small-scale investment opportunities designed specifically for learning with minimal risk.</p>
                </div>
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-2">Career Path Explorer</h3>
                  <p className="text-gray-600">AI guidance on various career options in finance and entrepreneurship based on your interests and skills.</p>
                </div>
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
