
require("dotenv").config();
const { GoogleGenerativeAI }=require("@google/generative-ai");


const genAI = new GoogleGenerativeAI(process.env.API_KEY);
module.exports.generateGeminiContent = async (req, res) => {
  try {
    const { prompt } = req.body;
   

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;

    res.json({ reply: response.text() });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};