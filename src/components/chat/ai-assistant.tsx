
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SendHorizontal, MessageSquare, Bot, User, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const AIAssistant = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm your FundOra AI assistant. How can I help you with your financial queries today?", isUser: false },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setIsLoading(true);
    
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': 'AIzaSyASkyEiWCjOXiMMXRySnRBOtVcwegvHWe4'
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `You are a financial assistant for FundOra, helping users with financial advice. 
                  Keep responses concise but informative.
                  Current query: ${input}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          }
        })
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates.length > 0) {
        const aiResponse = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { text: aiResponse, isUser: false }]);
      } else if (data.promptFeedback) {
        // Handle content filtering/blocking
        toast({
          title: "Response blocked",
          description: "The AI response was blocked due to content safety filters.",
          variant: "destructive",
        });
        setMessages(prev => [...prev, { 
          text: "I'm sorry, but I couldn't generate a response for that query. Please try asking something else.", 
          isUser: false 
        }]);
      } else {
        throw new Error("Unexpected API response format");
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      toast({
        title: "Error",
        description: "Failed to get a response from the AI assistant. Please try again.",
        variant: "destructive",
      });
      setMessages(prev => [...prev, { 
        text: "I apologize, but I'm having trouble processing your request right now. Please try again later.", 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  return (
    <Card className="w-full border shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-fundora-orange to-orange-400 p-4 flex items-center">
        <Bot className="h-5 w-5 text-white mr-2" />
        <h3 className="text-lg font-semibold text-white">PersonalFinAI Assistant</h3>
      </div>
      <CardContent className="p-0">
        <div className="h-[400px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-fundora-orange text-white rounded-tr-none'
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <div className="flex items-start mb-1">
                    {!message.isUser && (
                      <Bot className="h-4 w-4 mr-1 mt-0.5 text-fundora-orange" />
                    )}
                    {message.isUser && (
                      <User className="h-4 w-4 mr-1 mt-0.5 text-white" />
                    )}
                    <span className={`text-xs font-medium ${message.isUser ? 'text-white' : 'text-fundora-orange'}`}>
                      {message.isUser ? 'You' : 'FundOra AI'}
                    </span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Ask a financial question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage} 
                className="bg-fundora-orange hover:bg-orange-600"
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <SendHorizontal className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="mt-2 text-xs text-gray-500 flex items-center">
              <MessageSquare className="h-3 w-3 mr-1" />
              <span>Ask about investments, retirement planning, loans, or startup funding</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
