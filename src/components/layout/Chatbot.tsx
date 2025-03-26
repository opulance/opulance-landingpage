"use client"

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Opulance AI Assistant. How can I help you with your AI needs today?",
      isUser: false
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input.trim(),
      isUser: true
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      let response = '';
      
      // Simple keyword matching for demo purposes
      const lowercaseInput = input.toLowerCase();
      if (lowercaseInput.includes('pricing') || lowercaseInput.includes('cost')) {
        response = "Our AI solutions are tailored to your specific business needs. We offer customized pricing based on the scope and scale of your project. Would you like to schedule a consultation to discuss pricing options?";
      } else if (lowercaseInput.includes('consultation') || lowercaseInput.includes('book') || lowercaseInput.includes('call')) {
        response = "Great! You can book a consultation call by clicking the 'Book an Assessment' button on our website, or I can help schedule it for you. What dates work best for you?";
      } else if (lowercaseInput.includes('services') || lowercaseInput.includes('offerings') || lowercaseInput.includes('solutions')) {
        response = "We offer a range of AI solutions including custom AI development, AI integration, computer vision, natural language processing, and predictive analytics. Which area are you most interested in learning more about?";
      } else {
        response = "Thank you for your message. Our AI experts would love to discuss how we can help you implement AI solutions for your business. Would you like to schedule a consultation call?";
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        text: response,
        isUser: false
      };

      setMessages(prevMessages => [...prevMessages, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chatbot button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg ${
          isOpen ? 'bottom-[370px] right-6 bg-gray-700' : 'bottom-6 right-6 bg-gradient-to-r from-teal-500 to-blue-400'
        } transition-all hover:shadow-[0_0_15px_rgba(20,184,166,0.6)] focus:outline-none`}
        aria-label="Toggle chatbot"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          )}
        </AnimatePresence>
      </button>

      {/* Chatbot panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] h-[350px] bg-gray-900 border border-gray-800 rounded-xl shadow-xl z-40 flex flex-col overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-gray-800 p-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-400 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Opulance AI Assistant</h3>
                <div className="flex items-center text-xs text-teal-400">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-1"></span>
                  Online
                </div>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser 
                        ? 'bg-teal-500 text-black rounded-tr-none' 
                        : 'bg-gray-800 text-white rounded-tl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-gray-800 text-white rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 bg-gray-900">
              <div className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                  type="submit"
                  className="ml-2 w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-400 flex items-center justify-center"
                  disabled={!input.trim()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="m22 2-7 20-4-9-9-4Z"/>
                    <path d="M22 2 11 13"/>
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 