
import { useEffect, useState } from "react";

const GEMINI_API_KEY = "AIzaSyASkyEiWCjOXiMMXRySnRBOtVcwegvHWe4";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export async function generateGeminiResponse(prompt: string, history: { role: string; content: string }[] = []) {
  try {
    // Format the conversation history for Gemini API
    const formattedHistory = history.map(msg => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }]
    }));

    // Add the current prompt
    const messages = [
      ...formattedHistory,
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ];

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: messages,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Gemini API error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    
    // Extract the response text
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Unexpected response format from Gemini API");
    }
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
}

export function useGeminiAssistant() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Check API key on component mount
  useEffect(() => {
    if (!GEMINI_API_KEY) {
      setError("Gemini API key is missing");
      console.error("Gemini API key is missing");
    }
  }, []);

  const getAssistantResponse = async (prompt: string, history: { role: string; content: string }[] = []) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await generateGeminiResponse(prompt, history);
      setIsLoading(false);
      return response;
    } catch (error: any) {
      setError(error.message || "Failed to get response from AI assistant");
      setIsLoading(false);
      return null;
    }
  };

  return {
    getAssistantResponse,
    isLoading,
    error
  };
}
