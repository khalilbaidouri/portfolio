import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { LuBotMessageSquare } from "react-icons/lu";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const toggleOpen = () => setOpen(!open);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          type: "bot",
          text: `# Hello 👋

Je suis **l'assistant IA de Khalil**.

Comment puis-je vous aider aujourd'hui ?`,
        },
      ]);
    }
  }, [open]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userText = message;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: userText },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userText,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "❌ Une erreur est survenue.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={toggleOpen}
        className="fixed bottom-6 right-6 z-50 bg-[#CDBAD8] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
      >
        {open ? <FaTimes size={18} /> : <LuBotMessageSquare size={20} />}
      </button>

      {/* Chat */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[390px] max-w-[95vw] h-[590px] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col z-50">

          {/* Header */}
          <div className="bg-gradient-to-r from-[#CDBAD8] to-[#b79acc] text-white p-4 font-semibold">
            Khalil Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[84%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
                    msg.type === "user"
                      ? "bg-[#CDBAD8] text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  {msg.type === "bot" ? (
                    <div className="prose prose-sm max-w-none text-gray-800
                      prose-headings:text-gray-900
                      prose-headings:font-bold
                      prose-h1:text-lg
                      prose-h2:text-base
                      prose-p:my-2
                      prose-ul:my-2
                      prose-li:my-1
                      prose-strong:text-black
                      prose-pre:bg-gray-900
                      prose-pre:text-white
                      prose-pre:rounded-xl
                      prose-code:text-pink-600
                      prose-blockquote:border-l-4
                      prose-blockquote:pl-3
                    ">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl border border-gray-200 text-sm animate-pulse">
                  Typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white flex gap-2">
            <input
              type="text"
              placeholder="Tapez votre message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              className="flex-1 px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#CDBAD8]"
            />

            <button
              onClick={sendMessage}
              className="bg-[#CDBAD8] text-white p-3 rounded-full hover:brightness-95 transition"
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