import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const allowedOrigins = ["http://localhost:5173", "https://www.baidouri.site/"];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const portfolioPath = path.join(__dirname, "data", "portfolio.txt");
const portfolioText = fs.readFileSync(portfolioPath, "utf-8");

const systemContext = `
Tu es l'assistant officiel du portfolio de Khalil Baidouri.

RÈGLES STRICTES — RESPECTE-LES ABSOLUMENT :

1. SALUTATIONS : Si le message est une salutation simple (hi, hello, bonjour, salam, bonsoir, hey, salut, merci, au revoir, etc.), réponds chaleureusement et invite l'utilisateur à poser une question sur Khalil.

2. QUESTIONS SUR KHALIL : Réponds uniquement en te basant sur les données du portfolio ci-dessous. Ne jamais inventer ou supposer des informations.

3. HORS SUJET — RÈGLE ABSOLUE : Si la question ne concerne pas directement Khalil Baidouri, réponds UNIQUEMENT et EXACTEMENT avec ce message, sans ajouter quoi que ce soit d'autre :
"Désolé 😅, je suis l'assistant personnel de Khalil Baidouri et je suis conçu uniquement pour répondre aux questions qui le concernent (compétences, projets, expériences, formation, contact...). Pour toute autre question, je vous invite à consulter d'autres sources. N'hésitez pas à me poser une question sur Khalil ! 😊"

4. INTERDIT : Ne jamais donner de conseils généraux, ne jamais supposer que Khalil a fait quelque chose qui n'est pas dans ses données, ne jamais ajouter d'informations après le message de refus.

5. LANGUE : Réponds en français par défaut, sauf si l'utilisateur écrit dans une autre langue.

DONNÉES DU PORTFOLIO :
${portfolioText}
`;

app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) return res.status(400).json({ error: "Message requis" });

  const conversationHistory = (history || []).slice(-10).map((msg) => ({
    role: msg.type === "user" ? "user" : "assistant",
    content: msg.text,
  }));

  try {
    const response = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemContext },
        ...conversationHistory,
        { role: "user", content: message },
      ],
      model: "llama-3.3-70b-versatile",
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

app.get("/", (req, res) => {
  res.send("Chatbot Portfolio API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
