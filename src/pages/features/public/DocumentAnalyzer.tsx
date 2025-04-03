
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { FileText, Upload, CheckCircle, AlertCircle, ArrowRight, FileSearch, Bookmark, UploadCloud, RefreshCw } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const DocumentAnalyzer = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("upload");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // Mock analysis results
  const analysisResults = {
    documentType: "Insurance Policy",
    summary: "This is a comprehensive home insurance policy that covers property damage, liability, and additional living expenses. The policy has several exclusions and a $1,000 deductible.",
    keyPoints: [
      { 
        title: "Coverage Amount", 
        value: "$300,000", 
        description: "Maximum coverage for dwelling" 
      },
      { 
        title: "Deductible", 
        value: "$1,000", 
        description: "Amount you pay before insurance coverage begins" 
      },
      { 
        title: "Policy Period", 
        value: "1 Year", 
        description: "Coverage effective from 06/01/2024 to 05/31/2025" 
      },
      { 
        title: "Liability Coverage", 
        value: "$100,000", 
        description: "Protection against lawsuits for property damage or injuries" 
      },
    ],
    warnings: [
      "Flood damage is explicitly excluded from coverage",
      "Policy may be void if property is vacant for more than 60 consecutive days",
      "Certain high-value items have coverage limits of $1,500"
    ],
    recommendations: [
      "Consider additional flood insurance given property location",
      "Document high-value possessions with photos and receipts",
      "Review the liability coverage amount based on your assets"
    ]
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // In a real app, you'd upload the file to the server
      // For now, just set a dummy value
      setUploadedFile({} as any);
    }
  };

  const handleAnalyze = () => {
    setActiveTab("analyzing");
    setAnalyzing(true);
    
    // Simulate analysis process
    setTimeout(() => {
      setAnalyzing(false);
      setAnalysisComplete(true);
      setActiveTab("results");
    }, 3000);
  };

  return (
    <FeatureTemplate
      title="Document Analyzer"
      description="Use AI to analyze financial and legal documents for better understanding."
      backLink="/general-public"
      backLinkText="Public Dashboard"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Document Analyzer</CardTitle>
            <CardDescription>
              Upload financial or legal documents for AI analysis and explanation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="upload" className="flex-1">Upload</TabsTrigger>
                <TabsTrigger value="analyzing" className="flex-1" disabled={!uploadedFile}>Analyzing</TabsTrigger>
                <TabsTrigger value="results" className="flex-1" disabled={!analysisComplete}>Results</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload">
                <div className="space-y-6">
                  <div className="border-2 border-dashed rounded-lg p-12 text-center">
                    <div className="max-w-xs mx-auto space-y-6">
                      <div className="mx-auto bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center">
                        <UploadCloud className="h-10 w-10 text-gray-400" />
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium">Upload document</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Upload financial or legal documents to analyze
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => document.getElementById('file-upload')?.click()}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Browse Files
                        </Button>
                        <input 
                          id="file-upload" 
                          type="file" 
                          className="hidden" 
                          accept=".pdf,.doc,.docx,.txt" 
                          onChange={handleFileUpload}
                        />
                        <p className="text-xs text-gray-500">
                          Supports PDF, Word, and text files (max 20MB)
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-medium mb-2">Supported document types:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>Insurance policies</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>Credit card agreements</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>Loan documents</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>Investment prospectuses</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>Rental agreements</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>Employment contracts</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      disabled={!uploadedFile} 
                      onClick={handleAnalyze}
                    >
                      <FileSearch className="h-4 w-4 mr-2" />
                      Analyze Document
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analyzing">
                <div className="space-y-6 py-12">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 border-4 border-t-fundora-orange border-r-gray-200 border-b-gray-200 border-l-gray-200 rounded-full animate-spin"></div>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Analyzing your document</h3>
                    <p className="text-gray-600 max-w-md mb-6">
                      Our AI is reviewing your document to identify key information, terms, and potential concerns.
                    </p>
                    <div className="w-full max-w-md">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Processing</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} className="h-2 mb-6" />
                      <p className="text-xs text-gray-500 italic">
                        This may take a minute or two depending on document length and complexity
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="results">
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-2 mr-4">
                        <CheckCircle className="h-6 w-6 text-green-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-green-800">Analysis Complete</h3>
                        <p className="text-green-700 mt-1">
                          We've analyzed your {analysisResults.documentType.toLowerCase()} and extracted the key information for you.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Document Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Badge className="mr-3">{analysisResults.documentType}</Badge>
                          <div className="text-sm text-gray-500">Analyzed on {new Date().toLocaleDateString()}</div>
                        </div>
                        <p className="text-gray-700">{analysisResults.summary}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {analysisResults.keyPoints.map((point, index) => (
                          <Card key={index}>
                            <CardContent className="p-4">
                              <div className="flex items-start">
                                <div className="mr-3 mt-1">
                                  <Badge variant="outline" className="px-1.5 py-0">
                                    <FileText className="h-3 w-3" />
                                  </Badge>
                                </div>
                                <div>
                                  <h4 className="font-medium">{point.title}</h4>
                                  <p className="text-lg font-semibold">{point.value}</p>
                                  <p className="text-sm text-gray-500">{point.description}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-amber-200">
                      <CardHeader className="bg-amber-50 border-b border-amber-200">
                        <CardTitle className="flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2 text-amber-600" />
                          Important Warnings
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {analysisResults.warnings.map((warning, index) => (
                            <li key={index} className="flex items-start">
                              <AlertCircle className="h-5 w-5 mr-2 text-amber-600 flex-shrink-0 mt-0.5" />
                              <span>{warning}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-blue-200">
                      <CardHeader className="bg-blue-50 border-b border-blue-200">
                        <CardTitle className="flex items-center">
                          <LightbulbIcon className="h-5 w-5 mr-2 text-blue-600" />
                          Recommendations
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {analysisResults.recommendations.map((recommendation, index) => (
                            <li key={index} className="flex items-start">
                              <ArrowRight className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>{recommendation}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save Analysis
                    </Button>
                    <Button>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Analyze Another Document
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

// Missing icon component
const LightbulbIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <line x1="9" y1="18" x2="15" y2="18"></line>
      <line x1="10" y1="22" x2="14" y2="22"></line>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
    </svg>
  );
};

export default DocumentAnalyzer;
