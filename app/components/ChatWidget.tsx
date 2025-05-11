"use client";

import { useState } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

const exampleQuestions: string[] = [
  "How do I sell my license?",
  "Is SoftSell secure?",
  "What types of licenses can I sell?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const userMessage: Message = { sender: "user", text: trimmedInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmedInput }),
      });

      const botReply = await response.json();
      const botMessage: Message = {
        sender: "bot",
        text: botReply.text || "Sorry, I didn’t understand that.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Please try again later." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 text-white px-4 py-2 font-medium flex justify-between items-center">
            <span>AI Assistant</span>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-sm">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-80">
            {messages.length === 0 ? (
              <div className="text-sm text-gray-500">
                Try asking:
                <ul className="list-disc ml-4 mt-1">
                  {exampleQuestions.map((q, i) => (
                    <li
                      key={i}
                      className="cursor-pointer hover:underline"
                      onClick={() => setInput(q)}
                    >
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-md ${
                    msg.sender === "user"
                      ? "bg-indigo-100 text-right"
                      : "bg-gray-100 dark:bg-gray-800 text-left text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-300 dark:border-gray-700">
            <input
              className="flex-1 px-3 py-2 text-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 text-white px-4 hover:bg-indigo-700 text-sm"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700"
          aria-label="Open chat"
        >
          💬 Chat
        </button>
      )}
    </div>
  );
}
