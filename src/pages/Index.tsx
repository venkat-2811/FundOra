
import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import RoleSelector from '@/components/role-selector';
import StatsSection from '@/components/stats-section';
import TestimonialsSection from '@/components/testimonials-section';
import AIAssistant from '@/components/chat/ai-assistant';
import { Button } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Path</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                FundOra offers tailored solutions for different financial journeys
              </p>
            </div>
            <RoleSelector />
          </div>
        </section>
        
        <FeaturesSection />
        
        <StatsSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Experience Our AI Assistant</h2>
                <p className="text-xl text-gray-600">
                  Get a taste of how FundOra's AI can transform your financial journey
                </p>
              </div>
              <AIAssistant />
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Ready to experience the full power of FundOra?</p>
                <button className="bg-fundora-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center">
                  Create Your Account <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        
        <section className="py-20 bg-gradient-to-r from-fundora-dark to-blue-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of users who are already benefiting from FundOra's AI-powered financial ecosystem
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-fundora-dark hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg">
                Get Started for Free
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg">
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
