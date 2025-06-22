
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Send, 
  Minimize2, 
  Maximize2, 
  X,
  Bot,
  User,
  Lightbulb,
  BookOpen,
  Calculator,
  TrendingUp
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface AIChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
  courseContext?: string;
  isMinimized?: boolean;
  onMinimize?: () => void;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ 
  isOpen, 
  onToggle, 
  courseContext = "Financial Modeling",
  isMinimized = false,
  onMinimize
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: `Hello! I'm your AI Finance Tutor. I'm here to help you understand concepts in ${courseContext}. Feel free to ask me any questions about finance, investments, or course materials!`,
      timestamp: new Date(),
      suggestions: [
        "Explain DCF modeling",
        "What is WACC?",
        "How to calculate NPV?",
        "Risk assessment methods"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date(),
        suggestions: generateSuggestions(inputMessage)
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('dcf') || input.includes('discounted cash flow')) {
      return "DCF (Discounted Cash Flow) is a valuation method that estimates the intrinsic value of an investment by forecasting its future cash flows and discounting them back to present value using a discount rate (usually WACC). The formula is: DCF = CF₁/(1+r)¹ + CF₂/(1+r)² + ... + CFₙ/(1+r)ⁿ, where CF is cash flow, r is discount rate, and n is the period.";
    }
    
    if (input.includes('wacc')) {
      return "WACC (Weighted Average Cost of Capital) represents the average rate a company pays to finance its assets. It's calculated as: WACC = (E/V × Re) + (D/V × Rd × (1-Tc)), where E is equity value, D is debt value, V is total value, Re is cost of equity, Rd is cost of debt, and Tc is tax rate.";
    }
    
    if (input.includes('npv') || input.includes('net present value')) {
      return "NPV (Net Present Value) measures the profitability of an investment by calculating the difference between present value of cash inflows and outflows. NPV = Σ[CFt/(1+r)^t] - Initial Investment. If NPV > 0, the investment is profitable; if NPV < 0, it's not profitable.";
    }
    
    if (input.includes('risk')) {
      return "Risk assessment in finance involves identifying, measuring, and managing potential losses. Key methods include: 1) Value at Risk (VaR), 2) Stress testing, 3) Scenario analysis, 4) Beta calculation for market risk, 5) Credit scoring for credit risk. Each method helps quantify different types of financial risks.";
    }
    
    return "I understand you're asking about finance concepts. Could you be more specific about what you'd like to learn? I can help explain financial modeling, valuation methods, risk management, investment analysis, or any other finance topics related to your course.";
  };

  const generateSuggestions = (userInput: string): string[] => {
    const suggestions = [
      "Can you explain this with an example?",
      "What are the practical applications?",
      "How is this used in real world?",
      "What are common mistakes to avoid?"
    ];
    return suggestions.slice(0, 2);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={onToggle}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg z-50"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 shadow-2xl transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
    }`}>
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <CardTitle className="text-lg">AI Finance Tutor</CardTitle>
            <p className="text-xs text-gray-500">{courseContext}</p>
          </div>
        </div>
        <div className="flex space-x-1">
          {onMinimize && (
            <Button size="sm" variant="ghost" onClick={onMinimize}>
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
          )}
          <Button size="sm" variant="ghost" onClick={onToggle}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="flex flex-col h-full p-0">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    {message.type === 'user' ? (
                      <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                    ) : (
                      <AvatarFallback className="bg-blue-600 text-white">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div className={`rounded-lg p-3 ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-blue-600 text-white">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Suggestions */}
            {messages.length > 0 && messages[messages.length - 1].suggestions && (
              <div className="flex flex-wrap gap-2 px-2">
                {messages[messages.length - 1].suggestions?.map((suggestion, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-50 text-xs"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <Lightbulb className="h-3 w-3 mr-1" />
                    {suggestion}
                  </Badge>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t">
            <div className="flex space-x-2 mb-3">
              <Button size="sm" variant="outline" className="text-xs" onClick={() => handleSuggestionClick("Explain DCF modeling")}>
                <Calculator className="h-3 w-3 mr-1" />
                DCF
              </Button>
              <Button size="sm" variant="outline" className="text-xs" onClick={() => handleSuggestionClick("What is WACC?")}>
                <TrendingUp className="h-3 w-3 mr-1" />
                WACC
              </Button>
              <Button size="sm" variant="outline" className="text-xs" onClick={() => handleSuggestionClick("Risk assessment methods")}>
                <BookOpen className="h-3 w-3 mr-1" />
                Risk
              </Button>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me anything about finance..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default AIChatbot;
