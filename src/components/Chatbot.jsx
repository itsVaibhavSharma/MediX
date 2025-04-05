import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaRobot, FaUser, FaSpinner } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';

// Initialize Gemini API
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const systemPrompt = `You are MediX, an advanced AI medical assistant designed for early disease detection and telemedicine.
Your capabilities include:
1. Analyzing symptoms to predict possible diseases
2. Suggesting appropriate medical tests
3. Providing health risk assessments
4. Interpreting medical images (though for this chat, you can only describe how you would analyze them)

Important guidelines:
- Always be professional, empathetic, and clear in your responses
- Explain medical terms in simple language
- Provide helpful information while acknowledging your limitations
- NEVER provide a definitive diagnosis
- Always recommend consulting a healthcare professional for proper diagnosis and treatment
- For serious symptoms, emphasize the importance of seeking immediate medical attention

When a user asks about symptoms, ask relevant follow-up questions to gather more information before suggesting possible conditions.`;

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm MediX, your AI medical assistant. I can help assess symptoms, suggest possible conditions, and recommend appropriate tests. How can I assist you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      // Get the chat container element
      const chatContainer = messagesEndRef.current.parentElement;
      // Scroll only the chat container to the bottom
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage = {
      role: "user",
      content: input,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Prepare conversation history for the API
      const history = messages.map(msg => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      }));
      
      // Add the system prompt to the beginning
      history.unshift({
        role: "user",
        parts: [{ text: systemPrompt }],
      });
      
      // Add the latest user message
      history.push({
        role: "user",
        parts: [{ text: input }],
      });
      
      // Start the chat and send the message
      const chat = model.startChat({
        history: history,
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });
      
      const result = await chat.sendMessage("");
      const response = result.response.text();
      
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
        },
      ]);
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I encountered an error processing your request. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card flex flex-col h-[600px] md:h-[700px]">
      <div className="flex-grow overflow-y-auto chat-container pb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-container ${
              message.role === "user" ? "user-message" : "bot-message"
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                {message.role === "user" ? (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <FaUser className="text-white w-4 h-4" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <FaRobot className="text-white w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="flex-grow">
                <div className="font-medium text-white mb-1">
                  {message.role === "user" ? "You" : "MediX"}
                </div>
                <div className="text-gray-300 whitespace-pre-wrap markdown-content">
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message-container bot-message">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <FaRobot className="text-white w-4 h-4" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="font-medium text-white mb-1">MediX</div>
                <div className="text-gray-300">
                  <FaSpinner className="animate-spin h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-field flex-grow"
          placeholder="Describe your symptoms or ask a health question..."
          disabled={isLoading}
        />
        <button
          type="submit"
          className="ml-2 btn-primary whitespace-nowrap"
          disabled={isLoading}
        >
          <div className="flex items-center">
            {isLoading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              <>
                <span className="mr-2">Send</span>
                <FaPaperPlane />
              </>
            )}
          </div>
        </button>
      </form>
    </div>
  );
};

export default Chatbot;