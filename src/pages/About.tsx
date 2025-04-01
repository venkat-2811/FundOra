
import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import { ExternalLink, Users, BarChart, Heart, Zap, Shield, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-fundora-dark to-blue-900 py-20 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About FundOra</h1>
              <p className="text-xl opacity-90 mb-8">
                Revolutionizing financial literacy and investment opportunities in India
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-fundora-dark">Our Mission</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    At FundOra, we are on a mission to democratize financial literacy and investment 
                    opportunities across India. We believe that financial knowledge should be accessible 
                    to everyone, regardless of their background, education, or social status.
                  </p>
                  <p className="text-lg text-gray-700">
                    Through our innovative "AIFi" platform, we combine artificial intelligence with 
                    financial expertise to provide personalized guidance, education, and investment 
                    opportunities that empower individuals and businesses to achieve their financial goals.
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                    src="/lovable-uploads/6c33e98a-0ef7-4964-bbe9-e15f00dd1e51.png" 
                    alt="FundOra Mission" 
                    className="w-full max-w-md mx-auto shadow-lg rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-700">
                The principles that guide everything we do at FundOra
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
                <p className="text-gray-700">
                  We believe financial knowledge should be accessible to everyone, regardless of background or expertise.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust & Transparency</h3>
                <p className="text-gray-700">
                  We maintain the highest standards of integrity in all our operations and communications.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We constantly push the boundaries of what's possible with AI and financial technology.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <p className="text-gray-700">
                  We're committed to improving financial literacy through accessible, personalized learning.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Empathy</h3>
                <p className="text-gray-700">
                  We understand the diverse financial challenges people face and design solutions with compassion.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p className="text-gray-700">
                  We measure our success by the positive difference we make in people's financial lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-fundora-dark">The Beginning</h3>
                    <p className="text-gray-700">
                      FundOra was born from a simple observation: despite India's growing economy and tech-savvy 
                      population, financial literacy remained low and access to quality investment opportunities 
                      was limited to the privileged few. Our founder, Sunkara Venkata Karthik Sai, envisioned a platform 
                      that could bridge this gap using the power of artificial intelligence.
                    </p>
                  </div>
                  <div className="flex-1 order-first md:order-last">
                    <img 
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80" 
                      alt="FundOra Beginning" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80" 
                      alt="FundOra Growth" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-fundora-dark">Growth & Innovation</h3>
                    <p className="text-gray-700">
                      What started as an AI-powered educational tool quickly evolved into a comprehensive 
                      ecosystem for financial empowerment. We brought together a team of financial experts, 
                      AI researchers, and educators to develop our proprietary "AIFi" framework that adapts 
                      to each user's unique financial journey.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-fundora-dark">FundOra Today</h3>
                    <p className="text-gray-700">
                      Today, FundOra serves thousands of users across India, from college students 
                      taking their first steps in financial literacy to seasoned investors and startup 
                      founders. Our platform continues to evolve, with new features and partnerships 
                      that expand opportunities for our growing community.
                    </p>
                  </div>
                  <div className="flex-1 order-first md:order-last">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                      alt="FundOra Today" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-fundora-orange text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join the FundOra Family?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Start your journey toward financial empowerment today
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/auth" className="bg-white text-fundora-dark hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg inline-flex items-center justify-center">
                Get Started for Free
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg inline-flex items-center justify-center">
                Contact Us
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
