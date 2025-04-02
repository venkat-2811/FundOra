
import React from 'react';

interface SuggestedPromptsProps {
  prompts: string[];
  onPromptClick: (prompt: string) => void;
  isLoading: boolean;
}

const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({ 
  prompts, 
  onPromptClick, 
  isLoading 
}) => {
  return (
    <div className="p-3 bg-gray-50">
      <div className="flex flex-wrap gap-2 mb-3">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onPromptClick(prompt)}
            className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded-full transition-colors"
            disabled={isLoading}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPrompts;
