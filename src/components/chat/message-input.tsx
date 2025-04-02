
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Send } from 'lucide-react';

interface MessageInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!input.trim() || isLoading) return;
    
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full space-x-2">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask anything..."
        className="flex-1"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        className="bg-green-600 hover:bg-green-700" 
        disabled={isLoading || !input.trim()}
      >
        {isLoading ? 
          <Loader2 className="h-4 w-4 animate-spin" /> : 
          <Send className="h-4 w-4" />
        }
      </Button>
    </form>
  );
};

export default MessageInput;
