
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SendHorizontal, MessageSquare, Bot, User } from 'lucide-react';

export const AIAssistant = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm your FundOra AI assistant. How can I help you with your financial queries today?", isUser: false },
  ]);
  const [input, setInput] = useState('');

  const demoResponses: { [key: string]: string } = {
    investment: "Based on your profile and goals, I recommend considering a diversified portfolio with 40% in index funds, 30% in blue-chip stocks, 20% in government bonds, and 10% in gold ETFs. This balanced approach provides growth potential while managing risk.",
    retirement: "To plan for retirement, you should aim to save at least 15% of your income. Using compound interest calculations, starting at age 30 with ₹10,000 monthly contributions, with an 8% annual return, you could accumulate approximately ₹2.2 crore by age 60.",
    loan: "For your home loan inquiry, I recommend comparing options from HDFC, SBI, and ICICI. Current rates range from 8.4% to 8.9%. With your credit profile, you could qualify for up to ₹50 lakhs with a 20-year term. Would you like me to calculate EMI options?",
    startup: "For early-stage funding, I suggest focusing on these options: angel investors (₹25L-1Cr), seed funds (₹50L-3Cr), or incubator programs that provide both funding and mentorship. Based on your business model, angel investors in the fintech space would be most suitable.",
    default: "I'm your personalized financial assistant powered by advanced AI. I can provide advice on investments, retirement planning, loan options, tax optimization, and more. I learn from your preferences and financial situation to give you tailored guidance. What would you like to know more about?"
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: input, isUser: true }]);
    
    // Generate AI response based on keywords
    setTimeout(() => {
      let response = demoResponses.default;
      
      if (input.toLowerCase().includes('invest')) {
        response = demoResponses.investment;
      } else if (input.toLowerCase().includes('retire')) {
        response = demoResponses.retirement;
      } else if (input.toLowerCase().includes('loan')) {
        response = demoResponses.loan;
      } else if (input.toLowerCase().includes('startup') || input.toLowerCase().includes('funding')) {
        response = demoResponses.startup;
      }
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);
    
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
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
              />
              <Button 
                onClick={handleSendMessage} 
                className="bg-fundora-orange hover:bg-orange-600"
              >
                <SendHorizontal className="h-4 w-4" />
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
