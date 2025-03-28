"use client"

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: number;
}

const INITIAL_MESSAGE: Message = {
  id: 1,
  text: "Hello! I'm Opulance AI Assistant. How can I help you with your AI needs today?",
  isUser: false,
  timestamp: Date.now()
};

const MAX_STORED_MESSAGES = 20;
const CHAT_STORAGE_KEY = 'opulance-chat-history';

// For production, replace with actual API call to chatbot service
const generateBotResponse = async (userMessage: string): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
  
  const lowercaseInput = userMessage.toLowerCase();
  
  // Simple keyword matching for demo purposes
  if (lowercaseInput.includes('pricing') || lowercaseInput.includes('cost')) {
    return "Our AI solutions are tailored to your specific business needs. We offer customized pricing based on the scope and scale of your project. Would you like to schedule a consultation to discuss pricing options?";
  } else if (lowercaseInput.includes('consultation') || lowercaseInput.includes('book') || lowercaseInput.includes('call')) {
    return "Great! You can book a consultation call by clicking the 'Book a Call' button on our website. What dates work best for you?";
  } else if (lowercaseInput.includes('services') || lowercaseInput.includes('offerings') || lowercaseInput.includes('solutions')) {
    return "We offer a range of AI solutions including custom AI development, AI integration, computer vision, natural language processing, and predictive analytics. Which area are you most interested in learning more about?";
  } else if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || lowercaseInput.includes('hey')) {
    return "Hello! It's nice to meet you. I'm the Opulance AI Assistant. How can I help you today?";
  } else if (lowercaseInput.includes('help') || lowercaseInput.includes('support')) {
    return "I'd be happy to help! You can ask me about our AI services, pricing, or how to schedule a consultation call with our team.";
  } else if (lowercaseInput.includes('thank')) {
    return "You're welcome! Is there anything else I can help you with today?";
  }
  
  return "Thank you for your message. Our AI experts would love to discuss how we can help you implement AI solutions for your business. Would you like to schedule a consultation call?";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatboxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Load chat history from localStorage on mount
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem(CHAT_STORAGE_KEY);
      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages) as Message[];
        
        // Check if the saved messages are from today
        const mostRecentMessage = parsedMessages[parsedMessages.length - 1];
        const isFromToday = mostRecentMessage && 
          new Date(mostRecentMessage.timestamp).toDateString() === new Date().toDateString();
        
        if (parsedMessages.length && isFromToday) {
          setMessages(parsedMessages);
          
          // If there's a new AI message and chat is closed, show notification
          if (!parsedMessages[parsedMessages.length - 1].isUser) {
            setHasNewMessage(true);
          }
        }
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
      // Fallback to initial message if there's an error
      setMessages([INITIAL_MESSAGE]);
    }
  }, []);
  
  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 1) { // Only save if there's more than just the welcome message
      try {
        // Limit stored messages to prevent localStorage from getting too large
        const messagesToStore = messages.slice(-MAX_STORED_MESSAGES);
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messagesToStore));
      } catch (error) {
        console.error('Error saving chat history:', error);
      }
    }
  }, [messages]);
  
  // Handle click outside to close chatbot
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      if (chatboxRef.current && !chatboxRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    
    // Add delay to prevent immediate closing when opening chatbot
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Scroll to bottom of messages whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    
    // If there's a new AI message and the chat is closed, show the notification
    if (!isOpen && messages.length > 1 && !messages[messages.length - 1].isUser) {
      setHasNewMessage(true);
    }
  }, [messages, isOpen]);
  
  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);
  
  // Reset new message indicator when chat is opened
  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      isUser: true,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Generate AI response
      const response = await generateBotResponse(input);
      
      // Add AI message
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: response,
        isUser: false,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      // Add error message
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        isUser: false,
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChatHistory = () => {
    setMessages([INITIAL_MESSAGE]);
    localStorage.removeItem(CHAT_STORAGE_KEY);
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chatbot button */}
      <div className="fixed z-[100] bottom-6 right-6">
        {/* Notification indicator */}
        {hasNewMessage && !isOpen && (
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center z-10"
          >
            <span className="text-white text-xs font-bold">!</span>
          </motion.div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-blue-400 transition-all hover:shadow-[0_0_15px_rgba(20,184,166,0.6)] focus:outline-none"
          aria-label="Toggle chatbot"
        >
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
        </button>
      </div>

      {/* Chatbot panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatboxRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 sm:bottom-6 right-6 w-[95vw] sm:w-[350px] h-[450px] bg-gray-900 border border-gray-800 rounded-xl shadow-xl z-[100] flex flex-col overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-gray-800 p-4 flex items-center justify-between">
              <div className="flex items-center">
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
              
              <div className="flex gap-2">
                {/* Clear chat button */}
                <button 
                  onClick={clearChatHistory}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                  aria-label="Clear chat history"
                  title="Clear chat history"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* Close button */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                  aria-label="Close chatbot"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex flex-col">
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isUser 
                          ? 'bg-teal-500 text-black rounded-tr-none ml-auto' 
                          : 'bg-gray-800 text-white rounded-tl-none'
                      }`}
                    >
                      {message.text}
                    </div>
                    <span className={`text-xs mt-1 text-gray-500 ${
                      message.isUser ? 'text-right' : ''
                    }`}>
                      {formatTime(message.timestamp)}
                    </span>
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
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                  type="submit"
                  className={`ml-2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    input.trim() 
                      ? 'bg-gradient-to-r from-teal-500 to-blue-400 opacity-100 cursor-pointer' 
                      : 'bg-gray-700 opacity-50 cursor-not-allowed'
                  }`}
                  disabled={!input.trim() || isTyping}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={input.trim() ? 'text-black' : 'text-gray-400'}>
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