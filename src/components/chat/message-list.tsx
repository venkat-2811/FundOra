
import React, { useRef, useEffect } from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
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
  );
};

export default MessageList;
