
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import AIAssistant from '@/components/chat/ai-assistant';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const FundingReadiness = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(true);
  const [readinessScore, setReadinessScore] = React.useState(null);
  const [assessmentAreas, setAssessmentAreas] = React.useState([]);

  React.useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setReadinessScore(68);
      setAssessmentAreas([
        {
          name: 'Business Model',
          score: 75,
          status: 'good',
          feedback: 'Your business model is well-defined and scalable.',
        },
        {
          name: 'Market Opportunity',
          score: 82,
          status: 'good',
          feedback: 'Strong market opportunity with clear growth potential.',
        },
        {
          name: 'Team Composition',
          score: 50,
          status: 'warning',
          feedback: 'Consider adding team members with financial expertise.',
        },
        {
          name: 'Financial Projections',
          score: 45,
          status: 'warning',
          feedback: 'Your financial projections need more validation and detail.',
        },
        {
          name: 'Traction & Metrics',
          score: 60,
          status: 'moderate',
          feedback: 'Showing promising early traction, but need more consistent growth metrics.',
        },
        {
          name: 'Competitive Analysis',
          score: 70,
          status: 'good',
          feedback: 'Good understanding of the competitive landscape.',
        },
      ]);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'good':
        return 'text-green-600';
      case 'moderate':
        return 'text-amber-600';
      case 'warning':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const handleGenerateReport = () => {
    toast({
      title: "Report Generated",
      description: "Your detailed funding readiness report has been sent to your email.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link to="/startup-founders" className="inline-flex items-center text-fundora-orange hover:text-orange-700 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Startup Dashboard
            </Link>
            <h1 className="text-3xl font-bold mb-2">Funding Readiness Assessment</h1>
            <p className="text-lg text-gray-600">
              AI evaluation of your business model, market opportunity, and investor appeal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
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
                      <CardTitle>Your Funding Readiness Score</CardTitle>
                      <CardDescription>
                        Based on AI analysis of your startup profile and performance metrics
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-col items-center text-center mb-4">
                        <div className="relative w-40 h-40 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                          <div className="absolute inset-2 rounded-full border-8 border-fundora-orange"></div>
                          <span className="text-4xl font-bold">{readinessScore}%</span>
                        </div>
                        <p className="text-lg text-gray-600">
                          {readinessScore < 50 ? (
                            'Needs significant improvement before approaching investors'
                          ) : readinessScore < 70 ? (
                            'Getting closer to investor-ready, focus on key improvement areas'
                          ) : (
                            'Your startup shows strong investor readiness'
                          )}
                        </p>
                      </div>
                      
                      <Button 
                        className="w-full bg-fundora-orange hover:bg-orange-600"
                        onClick={handleGenerateReport}
                      >
                        Generate Detailed Report
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Assessment Areas</CardTitle>
                      <CardDescription>
                        Detailed evaluation of key investor decision factors
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-6">
                        {assessmentAreas.map((area) => (
                          <div key={area.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium">{area.name}</h3>
                              <span className={`flex items-center ${getStatusColor(area.status)}`}>
                                {area.status === 'warning' ? (
                                  <AlertTriangle className="h-4 w-4 mr-1" />
                                ) : area.status === 'good' ? (
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                ) : null}
                                {area.score}%
                              </span>
                            </div>
                            <Progress value={area.score} className="h-2" />
                            <p className="text-sm text-gray-600">{area.feedback}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Next Steps</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-4">
                        <li className="flex">
                          <div className="bg-fundora-orange/10 text-fundora-orange rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                            1
                          </div>
                          <div>
                            <h4 className="font-medium">Address Key Weaknesses</h4>
                            <p className="text-gray-600">Focus on improving your financial projections and team composition.</p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="bg-fundora-orange/10 text-fundora-orange rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                            2
                          </div>
                          <div>
                            <h4 className="font-medium">Prepare Investor Materials</h4>
                            <p className="text-gray-600">Use our AI Pitch Deck Analyzer to create compelling investor materials.</p>
                            <Link to="/startup-founders/pitch-deck-analyzer" className="inline-flex items-center text-fundora-orange hover:text-orange-700 mt-1">
                              Go to Pitch Deck Analyzer <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="bg-fundora-orange/10 text-fundora-orange rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                            3
                          </div>
                          <div>
                            <h4 className="font-medium">Connect with Relevant Investors</h4>
                            <p className="text-gray-600">Use our Investor Matching system to find the right investors for your startup.</p>
                            <Link to="/startup-founders/investor-matching" className="inline-flex items-center text-fundora-orange hover:text-orange-700 mt-1">
                              Go to Investor Matching <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
            
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>AI Funding Coach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ask questions about your funding readiness assessment or get personalized advice.
                  </p>
                  <AIAssistant />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FundingReadiness;
