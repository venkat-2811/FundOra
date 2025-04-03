
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle, UploadCloud, FileText, Play, AlertTriangle } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const PitchDeckAnalyzer = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("upload");
  const [uploadedFile, setUploadedFile] = useState(null);

  // Mock analysis results
  const analysisResults = {
    overallScore: 78,
    sections: [
      { name: "Problem Statement", score: 85, feedback: "Clear problem identification with market validation." },
      { name: "Solution", score: 90, feedback: "Well-articulated solution with strong differentiation." },
      { name: "Market Opportunity", score: 65, feedback: "Market size analysis could be more detailed with specific TAM/SAM/SOM breakdown." },
      { name: "Business Model", score: 80, feedback: "Revenue model is clear, but could elaborate more on pricing strategy." },
      { name: "Traction", score: 75, feedback: "Good early traction metrics, consider adding more customer testimonials." },
      { name: "Team", score: 82, feedback: "Strong founding team with relevant experience." },
      { name: "Competitive Analysis", score: 68, feedback: "Competition section needs more detail on direct competitors and differentiation strategy." },
      { name: "Financials", score: 72, feedback: "Financial projections are reasonable, but add more detail on assumptions." },
    ],
    improvements: [
      "Add more specific market sizing data with credible sources",
      "Include a more detailed competitive landscape analysis",
      "Strengthen the go-to-market strategy section",
      "Add more visuals to illustrate key metrics and traction"
    ]
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 65) return "text-amber-600";
    return "text-red-600";
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // In a real app, you'd upload the file to the server
      // For now, just set a dummy value
      setUploadedFile({} as any);
      setActiveTab("analysis");
    }
  };

  return (
    <FeatureTemplate
      title="Pitch Deck Analyzer"
      description="AI feedback on your pitch deck materials to improve your funding success rate."
      backLink="/startup-founders"
      backLinkText="Startup Dashboard"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Pitch Deck Analyzer</CardTitle>
            <CardDescription>
              Get professional AI feedback on your pitch deck to improve investor appeal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="upload" className="flex-1">Upload</TabsTrigger>
                <TabsTrigger value="analysis" className="flex-1" disabled={!uploadedFile}>Analysis</TabsTrigger>
                <TabsTrigger value="improvements" className="flex-1" disabled={!uploadedFile}>Improvements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload">
                <div className="border-2 border-dashed rounded-lg p-12 text-center">
                  <div className="max-w-xs mx-auto space-y-6">
                    <div className="mx-auto bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center">
                      <UploadCloud className="h-10 w-10 text-gray-400" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Upload your pitch deck</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Upload your pitch deck in PDF or PowerPoint format for AI analysis
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => document.getElementById('file-upload')?.click()}
                      >
                        <UploadCloud className="h-4 w-4 mr-2" />
                        Browse Files
                      </Button>
                      <input 
                        id="file-upload" 
                        type="file" 
                        className="hidden" 
                        accept=".pdf,.pptx" 
                        onChange={handleFileUpload}
                      />
                      <p className="text-xs text-gray-500">
                        Supports PDF, PPTX (max 20MB)
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analysis">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-4">
                        <div className="relative h-32 w-32">
                          <svg viewBox="0 0 100 100" className="h-32 w-32">
                            <circle 
                              cx="50" 
                              cy="50" 
                              r="45" 
                              fill="none" 
                              stroke="#e5e7eb" 
                              strokeWidth="8" 
                            />
                            <circle 
                              cx="50" 
                              cy="50" 
                              r="45" 
                              fill="none" 
                              stroke={analysisResults.overallScore >= 80 ? "#22c55e" : analysisResults.overallScore >= 65 ? "#f59e0b" : "#ef4444"} 
                              strokeWidth="8" 
                              strokeDasharray="283" 
                              strokeDashoffset={283 - (283 * analysisResults.overallScore / 100)} 
                              transform="rotate(-90 50 50)" 
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-3xl font-bold">{analysisResults.overallScore}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-medium">Overall Score</h3>
                      <p className="text-gray-500 mt-1">Your pitch deck is performing well, with some areas for improvement</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Section Analysis</h3>
                    
                    {analysisResults.sections.map((section, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{section.name}</h4>
                          <span className={`${getScoreColor(section.score)} font-medium`}>
                            {section.score}/100
                          </span>
                        </div>
                        <Progress value={section.score} className="h-2 mb-3" />
                        <p className="text-sm text-gray-600">
                          {section.score >= 80 ? (
                            <CheckCircle className="h-4 w-4 inline-block mr-1 text-green-600" />
                          ) : section.score >= 65 ? (
                            <AlertTriangle className="h-4 w-4 inline-block mr-1 text-amber-600" />
                          ) : (
                            <AlertCircle className="h-4 w-4 inline-block mr-1 text-red-600" />
                          )}
                          {section.feedback}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="improvements">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-2 mr-4">
                        <FileText className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-blue-800">Key Improvements</h3>
                        <p className="text-blue-700 mt-1">
                          Implement these recommendations to improve your chances of securing funding
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {analysisResults.improvements.map((improvement, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div className="bg-gray-100 rounded-full p-1 mr-3">
                              <AlertCircle className="h-4 w-4 text-amber-600" />
                            </div>
                            <p>{improvement}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-3 pt-4">
                    <Button variant="outline">
                      <UploadCloud className="h-4 w-4 mr-2" />
                      Upload New Version
                    </Button>
                    <Button>
                      <Play className="h-4 w-4 mr-2" />
                      Get Presentation Coaching
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </FeatureTemplate>
  );
};

export default PitchDeckAnalyzer;
