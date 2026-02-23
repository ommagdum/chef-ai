import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

// Initialize the Gemini API
// If using Vite: import.meta.env.VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash", // or "gemini-3-flash" if you have access
    systemInstruction: SYSTEM_PROMPT 
});

export async function getRecipeFromGemini(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    const userPrompt = `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`;

    try {
        const result = await model.generateContent(userPrompt);
        const response = await result.response;
        return response.text();
    } catch (err) {
        console.error("Gemini API Error:", err.message);
        return "I'm sorry, I couldn't whip up a recipe right now.";
    }
}