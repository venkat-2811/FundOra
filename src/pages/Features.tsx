
import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import { 
  Brain, Users, Shield, MessageSquare, LineChart, Target, 
  UserCheck, Search, CheckCircle, ArrowRight, Zap, BookOpen
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-fundora-dark to-blue-900 py-24 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Powerful Features</h1>
              <p className="text-xl opacity-90 mb-8">
                Discover the tools and technologies that make FundOra the leading financial platform in India
              </p>
              <a href="/auth" className="bg-fundora-orange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center">
                Experience FundOra <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
        </section>

        {/* AIFi Framework Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Unique "AIFi" Framework</h2>
              <p className="text-xl text-gray-600">
                Revolutionizing financial literacy and investment with AI-powered solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-fundora-orange" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Integrated Financial Intelligence</h3>
                  <p className="text-gray-600">
                    A unified platform connecting education, investments, funding, and mentorship in one comprehensive ecosystem.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-fundora-orange" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Hyper-Personalized Guidance</h3>
                  <p className="text-gray-600">
                    AI that adapts to your financial literacy level, risk tolerance, and goals for truly tailored advice.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <UserCheck className="h-6 w-6 text-fundora-orange" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Smart Matching</h3>
                  <p className="text-gray-600">
                    Proprietary algorithms connecting investors with startups based on multiple compatibility factors beyond traditional metrics.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-fundora-orange" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Real-Time Compliance</h3>
                  <p className="text-gray-600">
                    Dynamic monitoring that adjusts to changing regulations across different investment categories and jurisdictions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* User-Specific Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Tailored for Every Financial Journey</h2>
              <p className="text-xl text-gray-600">
                Features designed for your specific needs, whether you're an investor, founder, student, or the general public
              </p>
            </div>

            <div className="space-y-16">
              {/* General Public */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">For General Public</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <MessageSquare className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">AI Financial Assistant</h3>
                      <p className="text-gray-600">
                        Get personalized financial advice and answers to your questions in real-time from our AI assistant.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Financial Literacy Courses</h3>
                      <p className="text-gray-600">
                        Access to beginner-friendly courses that adapt to your learning pace and financial goals.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <LineChart className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Budget & Expense Tracking</h3>
                      <p className="text-gray-600">
                        Tools to monitor your spending, set budgets, and receive personalized saving recommendations.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Startup Founders */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">For Startup Founders</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Search className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Investor Matching</h3>
                      <p className="text-gray-600">
                        Get matched with investors who align with your startup's vision, industry, and growth stage.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Zap className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Pitch Deck Builder</h3>
                      <p className="text-gray-600">
                        AI-powered tools to create compelling pitch decks that showcase your startup's potential.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Mentorship Network</h3>
                      <p className="text-gray-600">
                        Connect with experienced entrepreneurs and industry experts for guidance and advice.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Investors */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">For Investors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <Target className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Startup Discovery</h3>
                      <p className="text-gray-600">
                        Find promising startups that match your investment criteria and interests.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <LineChart className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Portfolio Analytics</h3>
                      <p className="text-gray-600">
                        Comprehensive tools to track and analyze the performance of your investment portfolio.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <Brain className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">AI Risk Assessment</h3>
                      <p className="text-gray-600">
                        Sophisticated risk analysis tools to evaluate potential investments and optimize returns.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Students */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">For Students</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                        <BookOpen className="h-6 w-6 text-yellow-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Financial Education</h3>
                      <p className="text-gray-600">
                        Foundational courses on personal finance, investing, and entrepreneurship tailored for students.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                        <MessageSquare className="h-6 w-6 text-yellow-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Student Community</h3>
                      <p className="text-gray-600">
                        Connect with peers, participate in financial challenges, and learn together.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                        <Zap className="h-6 w-6 text-yellow-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Career Guidance</h3>
                      <p className="text-gray-600">
                        Resources to explore careers in finance, technology, and entrepreneurship.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose FundOra?</h2>
              <p className="text-xl text-gray-600">
                The advantages that make our platform unique in the fintech landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-fundora-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI-Powered Personalization</h3>
                  <p className="text-gray-600">
                    Our platform adapts to your specific needs, goals, and financial literacy level, providing truly personalized guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-fundora-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">All-In-One Ecosystem</h3>
                  <p className="text-gray-600">
                    From learning and planning to investing and connecting, everything you need for your financial journey in one place.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-fundora-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">India-Focused Approach</h3>
                  <p className="text-gray-600">
                    Designed specifically for the Indian market, with insights into local regulations, trends, and opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-fundora-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Community & Collaboration</h3>
                  <p className="text-gray-600">
                    A vibrant ecosystem where students, professionals, founders, and investors can connect and collaborate.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-fundora-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Data-Driven Insights</h3>
                  <p className="text-gray-600">
                    Leverage powerful analytics to make informed decisions about your finances or investments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-fundora-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Secure & Compliant</h3>
                  <p className="text-gray-600">
                    Bank-level security and regulatory compliance to ensure your data and investments are protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-fundora-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience FundOra?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of users who are transforming their financial future with our platform
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-fundora-orange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg">
                Get Started for Free
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
