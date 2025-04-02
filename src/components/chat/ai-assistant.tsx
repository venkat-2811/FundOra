
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, User, Bot } from 'lucide-react';
import { useGeminiAssistant } from '@/integrations/gemini/aiAssistant';
import { useAuth } from '@/contexts/AuthContext';

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
  const [input, setInput] = useState('');
  const { getAssistantResponse, isLoading, error } = useGeminiAssistant();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { userType } = useAuth();
  
  // Get the assistant type based on user type
  const assistantType = getAssistantType(userType);
  
  // Get preset prompts based on user type
  const suggestedPrompts = userType ? presetUserPrompts[userType] : presetUserPrompts.general_public;
  
  useEffect(() => {
    // Add welcome message when component mounts
    const welcomeMessage = {
      role: 'assistant' as const,
      content: `Hello! I'm your ${assistantType}. How can I help you today?`,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [assistantType]);
  
  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: error,
        variant: 'destructive',
      });
    }
  }, [error, toast]);
  
  const handleSend = async (event: React.FormEvent | null, promptText?: string) => {
    if (event) event.preventDefault();
    
    const messageText = promptText || input;
    if (!messageText.trim() || isLoading) return;
    
    // Add user message to chat
    const userMessage: Message = {
      role: 'user',
      content: messageText,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Format conversation history for the API
    const history = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));
    
    try {
      // Get response from Gemini
      const responseText = await getAssistantResponse(messageText, history);
      
      if (responseText) {
        // Add assistant response to chat
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
    setInput(prompt);
    handleSend(null, prompt);
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
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`rounded-lg px-4 py-2 max-w-[80%] flex items-start gap-2
                  ${message.role === 'user' 
                    ? 'bg-blue-100 text-blue-900' 
                    : 'bg-gray-100 text-gray-900'}`}
                >
                  {message.role === 'assistant' && (
                    <Bot className="h-5 w-5 mt-0.5 text-green-600 shrink-0" />
                  )}
                  <div>
                    <div className="whitespace-pre-wrap text-sm">
                      {message.content}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  {message.role === 'user' && (
                    <User className="h-5 w-5 mt-0.5 text-blue-600 shrink-0" />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-3 bg-gray-50">
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(prompt)}
                  className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded-full transition-colors"
                  disabled={isLoading}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-3">
        <form onSubmit={handleSend} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isLoading || !input.trim()}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default AIAssistant;
