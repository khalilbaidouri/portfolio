import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { LuBotMessageSquare } from "react-icons/lu";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const markdownComponents = {
  table: ({ children }) => (
    <div className="overflow-x-auto my-2">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[#EEEDFE] text-[#3C3489]">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-3 py-2 text-left font-medium text-xs">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-3 py-2 border-b border-gray-100 text-xs">{children}</td>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#7F77DD] font-medium hover:text-[#534AB7] transition-colors inline-flex items-center gap-1 underline break-all"
    >
      {children}
    </a>
  ),
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        PreTag="div"
        className="rounded-xl text-xs my-2"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code
        className="bg-[#f0eaf8] text-[#7F77DD] rounded px-1 py-0.5 text-xs font-mono"
        {...props}
      >
        {children}
      </code>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#CDBAD8] pl-3 my-2 text-gray-500 italic text-sm">
      {children}
    </blockquote>
  ),
  h1: ({ children }) => (
    <h1 className="text-base font-semibold mt-2 mb-1 text-gray-900">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-sm font-semibold mt-2 mb-1 text-gray-800">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-sm font-medium mt-1 mb-1 text-gray-700">{children}</h3>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-4 my-1 space-y-0.5 text-sm">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-4 my-1 space-y-0.5 text-sm">{children}</ol>
  ),
  p: ({ children }) => (
    <p className="my-1 leading-relaxed text-sm">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleOpen = () => setOpen(!open);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          type: "bot",
          text: `# Bonjour 👋\n\nJe suis **l'assistant IA de Khalil**.\n\nComment puis-je vous aider aujourd'hui ?`,
        },
      ]);
    }
  }, [open]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userText = message;
    setMessages((prev) => [...prev, { type: "user", text: userText }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { type: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "❌ Une erreur est survenue." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleOpen}
        className="fixed bottom-6 right-6 z-50 bg-[#CDBAD8] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
      >
        {open ? <FaTimes size={18} /> : <LuBotMessageSquare size={20} />}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6 w-[390px] max-w-[95vw] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col z-50"
          style={{ height: "min(590px, calc(100dvh - 120px))" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#CDBAD8] to-[#b79acc] text-white px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-sm">
              K
            </div>
            <div>
              <p className="font-semibold text-sm leading-tight">
                Khalil Assistant
              </p>
              <p className="text-xs text-white/80 leading-tight">
                Bonjour, dans l'assistant de Khalil
              </p>
            </div>
            <div className="ml-auto w-2 h-2 rounded-full bg-green-300"></div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4 min-h-0">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[84%] px-4 py-3 rounded-2xl shadow-sm ${
                    msg.type === "user"
                      ? "bg-[#CDBAD8] text-white rounded-br-none text-sm"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  {msg.type === "bot" ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={markdownComponents}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl border border-gray-200 text-sm animate-pulse text-gray-400">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white flex gap-2 shrink-0">
            <input
              type="text"
              placeholder="Tapez votre message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
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
