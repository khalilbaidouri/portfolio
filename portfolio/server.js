/* // server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

// Autoriser le frontend React
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Parser le JSON envoyé par le frontend
app.use(express.json());

// Initialisation Groq SDK
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Contexte global pour le chatbot
const systemContext = `
Tu es l'assistant du portfolio de Khalil, développeur Full-Stack spécialisé en React, Java et Spring Security.
Tu connais ses projets : Shopify-Clone, Taskify, Blogify, Portfolio Khalil, Weather-Dashboard.
Tu sais parler de son parcours académique : DEUST, cycle d'ingénierie en informatique, compétences clés et certifications Oracle Java.
Tu réponds aux questions de manière claire et concise sur son expérience, ses projets, ses compétences, et comment le contacter.
`;

// Endpoint chat
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message requis" });
  }

  try {
    const response = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemContext },
        { role: "user", content: message }
      ],
      model: "openai/gpt-oss-120b",
      temperature: 0.7,
      max_completion_tokens: 1024,
      top_p: 1,
      reasoning_effort: "medium",
    });

    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Erreur Groq:", error.response?.data || error.message || error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Démarrage du serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
}); */



import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Charger variables d'environnement
dotenv.config();

// Permet d'utiliser __dirname avec ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Autoriser ton frontend React
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// Initialisation Groq
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Charger le fichier portfolio.txt
const portfolioPath = path.join(__dirname, "data", "portfolio.txt");
const portfolioText = fs.readFileSync(portfolioPath, "utf-8");

// Contexte système basé uniquement sur portfolio.txt
const systemContext = `
Tu es l'assistant officiel du portfolio de Khalil.

RÈGLES IMPORTANTES :
- Tu réponds de manière claire, professionnelle et concise.
- Tu ne dois rien inventer.

DONNÉES DU PORTFOLIO :
${portfolioText}
`;

// Endpoint Chat
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message requis" });
  }

  try {
    const response = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemContext },
        { role: "user", content: message },
      ],
      model: "openai/gpt-oss-120b",
      temperature: 0.3, // réduit hallucination
      max_completion_tokens: 800,
      top_p: 1,
    });

    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Erreur Groq:", error.response?.data || error.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Route test
app.get("/", (req, res) => {
  res.send("Chatbot Portfolio API running...");
});

// Lancement serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});