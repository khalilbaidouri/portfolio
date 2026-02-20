import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = input;
    setMessages([...messages, { role: "user", content: userMessage }]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();

      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "bot", content: "Erreur serveur" }]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "message user" : "message bot"}>
            {m.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tapez votre message..."
      />
      <button onClick={sendMessage}>Envoyer</button>
    </div>
  );
}