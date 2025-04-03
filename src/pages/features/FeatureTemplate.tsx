
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import AIAssistant from '@/components/chat/ai-assistant';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface FeatureTemplateProps {
  title: string;
  description: string;
  backLink: string;
  backLinkText: string;
  children: React.ReactNode;
}

const FeatureTemplate: React.FC<FeatureTemplateProps> = ({
  title,
  description,
  backLink,
  backLinkText,
  children
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link to={backLink} className="inline-flex items-center text-fundora-orange hover:text-orange-700 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to {backLinkText}
            </Link>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-lg text-gray-600">
              {description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {children}
            </div>
            
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>AI Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ask questions or get personalized guidance about this feature.
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

export default FeatureTemplate;
