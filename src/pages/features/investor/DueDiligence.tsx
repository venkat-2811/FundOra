
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { AlertCircle, CheckCircle, XCircle, FileText, Search } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const DueDiligence = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("startups");

  const startupCompanies = [
    {
      id: 1,
      name: "TechInnovate",
      sector: "AI & Machine Learning",
      stage: "Series A",
      funding: "$5M",
      riskScore: 72,
      lastUpdated: "2023-12-10"
    },
    {
      id: 2,
      name: "GreenEnergy Solutions",
      sector: "CleanTech",
      stage: "Seed",
      funding: "$1.2M",
      riskScore: 65,
      lastUpdated: "2023-11-28"
    },
    {
      id: 3,
      name: "HealthTech Pioneer",
      sector: "Healthcare",
      stage: "Series B",
      funding: "$12M",
      riskScore: 85,
      lastUpdated: "2024-01-15"
    },
    {
      id: 4,
      name: "FinTech Innovators",
      sector: "Financial Technology",
      stage: "Series A",
      funding: "$7.5M",
      riskScore: 78,
      lastUpdated: "2023-12-20"
    },
  ];

  const getRiskColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 65) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <FeatureTemplate
      title="Due Diligence Assistant"
      description="Automated background checks and risk assessment of potential investments."
      backLink="/investors"
      backLinkText="Investor Dashboard"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Due Diligence Dashboard</CardTitle>
            <CardDescription>
              Analyze and assess potential investments with AI-powered insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="startups" className="flex-1">Startup Analysis</TabsTrigger>
                <TabsTrigger value="documents" className="flex-1">Document Analysis</TabsTrigger>
                <TabsTrigger value="market" className="flex-1">Market Intelligence</TabsTrigger>
              </TabsList>
              
              <TabsContent value="startups">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Sector</TableHead>
                      <TableHead>Stage</TableHead>
                      <TableHead>Funding</TableHead>
                      <TableHead>Risk Score</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {startupCompanies.map((company) => (
                      <TableRow key={company.id}>
                        <TableCell className="font-medium">{company.name}</TableCell>
                        <TableCell>{company.sector}</TableCell>
                        <TableCell>{company.stage}</TableCell>
                        <TableCell>{company.funding}</TableCell>
                        <TableCell className={getRiskColor(company.riskScore)}>
                          {company.riskScore}/100
                        </TableCell>
                        <TableCell>{company.lastUpdated}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <Search className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="documents">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <FileText className="h-6 w-6 mr-3 text-blue-600" />
                        <h3 className="text-lg font-medium">Document Scanner</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Upload financial documents, pitch decks, and legal agreements for automated review.
                      </p>
                      <Button className="w-full">Upload Documents</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <AlertCircle className="h-6 w-6 mr-3 text-amber-600" />
                        <h3 className="text-lg font-medium">Risk Assessment</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        AI-powered analysis of documents to identify potential risks and inconsistencies.
                      </p>
                      <Button variant="outline" className="w-full">Run Assessment</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="market">
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Market intelligence data is being updated</p>
                  <Button>Refresh Data</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </FeatureTemplate>
  );
};

export default DueDiligence;
