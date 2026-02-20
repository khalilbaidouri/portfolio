import Groq from "groq-sdk";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const portfolioPath = path.join(process.cwd(), "data", "portfolio.txt");
const portfolioText = fs.readFileSync(portfolioPath, "utf-8");

const systemContext = `
Tu es l'assistant officiel du portfolio de Khalil.

RÈGLES IMPORTANTES :
- Réponds de manière claire, concise et professionnelle.
- Ne pas inventer de données.

DONNÉES DU PORTFOLIO :
${portfolioText}
`;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Méthode non autorisée" });

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message requis" });

  try {
    const response = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemContext },
        { role: "user", content: message }
      ],
      model: "openai/gpt-oss-120b",
      temperature: 0.3,
      max_completion_tokens: 800,
      top_p: 1,
    });

    res.status(200).json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Erreur Groq:", error.response?.data || error.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
}