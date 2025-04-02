import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useGeminiAssistant } from '@/integrations/gemini/aiAssistant';
import { useAuth } from '@/contexts/AuthContext';
import MessageList from './message-list';
import MessageInput from './message-input';
import SuggestedPrompts from './suggested-prompts';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const presetUserPrompts: Record<string, string[]> = {
  investor: [
    "Suggest startups in the healthtech sector that match my investment criteria",
    "Analyze the potential ROI for an early-stage SaaS startup",
    "What due diligence questions should I ask a fintech startup?",
    "Compare current market trends in AI startups",
  ],
  startup_founder: [
    "Help me refine my elevator pitch for investors",
    "What metrics should my SaaS startup focus on for Series A?",
    "Draft an email to follow up with a potential investor",
    "Analyze my competitor's weaknesses in the market",
  ],
  general_public: [
    "Explain angel investing in simple terms",
    "What are the risks of startup investing?",
    "How can I start investing with a small amount?",
    "Compare mutual funds vs direct startup investing",
  ],
  student: [
    "Explain startup funding rounds for beginners",
    "What skills should I develop for a career in venture capital?",
    "Recommend resources to learn about startup valuation",
    "How can students get involved in startups?",
  ]
};

const getAssistantType = (userType: string | null) => {
  switch (userType) {
    case 'investor':
      return 'Investment Assistant';
    case 'startup_founder':
      return 'Startup Funding Assistant';
    case 'student':
      return 'Financial Education Assistant';
    case 'general_public':
    default:
      return 'Financial Assistant';
  }
};

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { getAssistantResponse, isLoading, error } = useGeminiAssistant();
  const { toast } = useToast();
  const { userType } = useAuth();
  
  const assistantType = getAssistantType(userType);
  
  const suggestedPrompts = userType ? presetUserPrompts[userType] : presetUserPrompts.general_public;
  
  useEffect(() => {
    const welcomeMessage = {
      role: 'assistant' as const,
      content: `Hello! I'm your ${assistantType}, powered by Gemini 2.0 Flash. How can I help you today?`,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [assistantType]);
  
  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: error,
        variant: 'destructive',
      });
    }
  }, [error, toast]);
  
  const handleSend = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;
    
    const userMessage: Message = {
      role: 'user',
      content: messageText,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    const history = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));
    
    try {
      const responseText = await getAssistantResponse(messageText, history);
      
      if (responseText) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: responseText,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (err) {
      console.error("Error getting assistant response:", err);
      toast({
        title: 'Error',
        description: 'Failed to get response from assistant. Please try again.',
        variant: 'destructive',
      });
    }
  };
  
  const handlePromptClick = (prompt: string) => {
    handleSend(prompt);
  };
  
  return (
    <Card className="w-full shadow-md mb-6">
      <CardHeader className="bg-gradient-to-r from-green-700 to-emerald-600 text-white">
        <CardTitle className="text-lg font-semibold">
          Your {assistantType}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col h-[370px]">
          <MessageList messages={messages} />
          <SuggestedPrompts 
            prompts={suggestedPrompts} 
            onPromptClick={handlePromptClick} 
            isLoading={isLoading} 
          />
        </div>
      </CardContent>
      <CardFooter className="border-t p-3">
        <MessageInput onSend={handleSend} isLoading={isLoading} />
      </CardFooter>
    </Card>
  );
};

export default AIAssistant;
