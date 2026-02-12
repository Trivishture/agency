import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Using process.env.API_KEY directly as per guidelines.
// Assuming the variable is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface TripPrompt {
  destination: string;
  duration: string;
  budget: string;
}

export const generateItinerary = async (prompt: TripPrompt): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    const textPrompt = `Create a ${prompt.duration} day itinerary for ${prompt.destination} with a budget of ${prompt.budget}. Format as JSON list of days.`;
    
    const response = await ai.models.generateContent({
      model: model,
      contents: textPrompt,
    });
    
    return response.text || "No itinerary generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};