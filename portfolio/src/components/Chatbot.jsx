import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { LuBotMessageSquare } from "react-icons/lu";



const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Toggle fenêtre
  const toggleOpen = () => setOpen(!open);

  // Scroll automatique
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Message par défaut à l'ouverture
  useEffect(() => {
    if (open && messages.length === 0) {
      setLoading(true);
      setTimeout(() => {
        setMessages([
          {
            type: "bot",
            text: "Hello 👋 I'm the assistant of Khalil. How can I help you today?",
          },
        ]);
        setLoading(false);
      }, 800);
    }
  }, [open]);

  // Envoyer message
  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!res.ok) throw new Error("Erreur serveur");

      const data = await res.json();

      setMessages((prev) => [...prev, { type: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Erreur serveur" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour afficher le texte formaté
  const formatBotText = (text) => {
    return text.split("\n").map((line, idx) => {
      const isHeader = /^[A-Z\s]+$/.test(line.trim()); // lignes majuscules = titres
      return (
        <p key={idx} className={isHeader ? "font-bold mt-2" : "mt-1"}>
          {line}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleOpen}
        className="fixed bottom-6 right-6 z-50 bg-[#CDBAD8] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer"
      >
        {open ? <FaTimes size={18} /> : <LuBotMessageSquare />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[360px] max-w-[95vw] h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200">

          {/* Header */}
          <div className="bg-gradient-to-r from-[#CDBAD8] to-[#b79acb] text-white p-4 font-semibold text-sm tracking-wide shadow-md">
            Assistant de Khalil
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm whitespace-pre-wrap break-words shadow-sm transition-all duration-200 ${
                    m.type === "user"
                      ? "bg-[#CDBAD8] text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                  }`}
                >
                  {m.type === "bot" ? formatBotText(m.text) : m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl text-sm shadow-sm border border-gray-200 animate-pulse">
                  En train d’écrire...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>


          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t bg-white">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tapez votre message..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#CDBAD8] text-sm"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-[#CDBAD8] text-white p-2 rounded-full hover:brightness-95 transition-all duration-200 cursor-pointer"
            >
              <FiSend size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;