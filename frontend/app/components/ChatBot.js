'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help you. How can I assist you today?",
      sender: 'bot',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        // Show chatbot only after scrolling past hero section
        setShowChatBot(scrollPosition > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
    };
    setMessages([...messages, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "Thank you for your message! I'm here to help. How can I assist you further?",
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  if (!showChatBot) return null;

  return (
    <>
      {/* Chat Bot Button - Fixed bottom right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#ff6b35] hover:bg-[#e55a2b] transition-all duration-300 shadow-2xl flex items-center justify-center group hover:scale-110"
        style={{ zIndex: 9999 }}
        aria-label="Open chat"
      >
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src="/image.png"
            alt="Chat Bot"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9999] w-80 md:w-96 h-[500px] md:h-[600px] bg-black border-2 border-[#ff6b35] rounded-2xl shadow-2xl flex flex-col overflow-hidden" style={{ zIndex: 9999 }}>
          {/* Chat Header */}
          <div className="bg-[#ff6b35] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/image.png"
                  alt="Chat Bot"
                  fill
                  className="object-cover object-center rounded-full"
                />
              </div>
              <div>
                <h3 className="text-white font-sans font-bold text-sm md:text-base">Chat Assistant</h3>
                <p className="text-white/80 font-sans text-xs">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                    <Image
                      src="/image.png"
                      alt="Bot"
                      fill
                      className="object-cover object-center rounded-full"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-[#ff6b35] text-white'
                      : 'bg-gray-800 text-white'
                  }`}
                >
                  <p className="text-sm font-sans">{message.text}</p>
                </div>
                {message.sender === 'user' && (
                  <div className="relative w-8 h-8 rounded-full overflow-hidden ml-2 flex-shrink-0 bg-gray-700"></div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-800 p-4 bg-black">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-[#ff6b35] font-sans text-sm"
              />
              <button
                type="submit"
                className="bg-[#ff6b35] text-white px-4 py-2 rounded-lg hover:bg-[#e55a2b] transition-colors"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

