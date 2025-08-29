import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, User, Send } from "lucide-react";

interface Message {
  type: 'bot' | 'user';
  text: string;
  timestamp: string;
}

const demoConversation: Message[] = [
  {
    type: 'bot',
    text: "Hello! I'm Aethel, your legal intake assistant. I'm here to help gather information about your case. Could you please tell me what type of legal matter brings you here today?",
    timestamp: "2:30 PM"
  },
  {
    type: 'user',
    text: "I need help with a landlord-tenant dispute. My landlord is trying to evict me.",
    timestamp: "2:31 PM"
  },
  {
    type: 'bot',
    text: "I understand you're facing an eviction. That can be very stressful. Let me gather some key details to help your attorney assess your case. Have you received any written notices from your landlord?",
    timestamp: "2:31 PM"
  },
  {
    type: 'user',
    text: "Yes, I got a 3-day notice to pay rent or quit about a week ago.",
    timestamp: "2:32 PM"
  },
  {
    type: 'bot',
    text: "Thank you for that information. A few more questions: What's the total amount the landlord claims you owe? And have there been any issues with the property condition that might have affected your ability to pay?",
    timestamp: "2:32 PM"
  }
];

const ChatDemo = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && currentMessageIndex < demoConversation.length) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        
        setTimeout(() => {
          setMessages(prev => [...prev, demoConversation[currentMessageIndex]]);
          setCurrentMessageIndex(prev => prev + 1);
          setIsTyping(false);
        }, 1500);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex, isPlaying]);

  const startDemo = () => {
    setMessages([]);
    setCurrentMessageIndex(0);
    setIsPlaying(true);
  };

  const resetDemo = () => {
    setMessages([]);
    setCurrentMessageIndex(0);
    setIsPlaying(false);
    setIsTyping(false);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Interactive Client Intake Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how Aethel guides clients through structured intake, 
            automatically capturing case details for attorney review.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-0">
            <CardHeader className="bg-gradient-hero text-white">
              <CardTitle className="flex items-center gap-3">
                <Bot className="w-6 h-6 text-legal-gold" />
                Client Intake Assistant - Landlord/Tenant Case
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 overflow-y-auto bg-legal-neutral/30 p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.type === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-accent-foreground" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-md p-3 rounded-lg ${
                        message.type === 'bot'
                          ? 'bg-card border border-border'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'bot' ? 'text-muted-foreground' : 'text-primary-foreground/70'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>

                    {message.type === 'user' && (
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div className="bg-card border border-border p-3 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6 border-t bg-background">
                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={startDemo}
                    disabled={isPlaying && currentMessageIndex < demoConversation.length}
                    variant="default"
                    className="px-8"
                  >
                    {messages.length === 0 ? 'Start Demo' : 'Continue Demo'}
                  </Button>
                  <Button onClick={resetDemo} variant="outline" className="px-8">
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;