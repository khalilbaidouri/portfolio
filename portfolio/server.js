import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Charger les variables d'environnement
dotenv.config();

// Permet d'utiliser __dirname avec ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// URL autorisées pour le frontend
const allowedOrigins = [
  "http://localhost:5173",              // dev local
  "https://portfolio-xyz.vercel.app"   // remplace par ton URL Vercel
];

app.use(cors({ origin: allowedOrigins }));

// Parser JSON
app.use(express.json());

// Initialisation Groq SDK
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Charger portfolio.txt
const portfolioPath = path.join(__dirname, "data", "portfolio.txt");
const portfolioText = fs.readFileSync(portfolioPath, "utf-8");

// Contexte système
const systemContext = `
Tu es l'assistant officiel du portfolio de Khalil.

RÈGLES IMPORTANTES :
- Réponds de manière claire, professionnelle et concise.
- Ne pas inventer de données.

DONNÉES DU PORTFOLIO :
${portfolioText}
`;

// Endpoint chat
app.post("/api/chat", async (req, res) => {
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

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Erreur Groq:", error.response?.data || error.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Route test racine
app.get("/", (req, res) => {
  res.send("Chatbot Portfolio API running...");
});

// Démarrer serveur sur Vercel
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});