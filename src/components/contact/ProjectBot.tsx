'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, Bot, User, CheckCircle } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ProjectData {
  company: string;
  sector: string;
  currentCRM: string;
  projectType: string;
  timeline: string;
  budget: string;
  teamSize: string;
  mainGoal: string;
  email: string;
  phone: string;
}

export default function ProjectBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant HubEasy. Je vais vous poser quelques questions pour mieux comprendre votre projet d'intégration HubSpot. Commençons par votre entreprise - quel est le nom de votre société ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [projectData, setProjectData] = useState<Partial<ProjectData>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    { key: 'company', question: "Parfait ! Dans quel secteur d'activité évoluez-vous ?" },
    { key: 'sector', question: "Merci ! Utilisez-vous actuellement un CRM ? Si oui, lequel ?" },
    { key: 'currentCRM', question: "Intéressant ! Quel type de projet envisagez-vous ? (Migration complète, intégration hybride, nouveau déploiement, optimisation existante)" },
    { key: 'projectType', question: "Excellent ! Dans quels délais souhaitez-vous réaliser ce projet ?" },
    { key: 'timeline', question: "Parfait ! Avez-vous défini un budget approximatif pour ce projet ?" },
    { key: 'budget', question: "Merci ! Combien de personnes utiliseront la solution dans votre équipe ?" },
    { key: 'teamSize', question: "Super ! Quel est votre objectif principal avec cette intégration HubSpot ?" },
    { key: 'mainGoal', question: "Excellent ! Pour finaliser, pouvez-vous me donner votre adresse email ?" },
    { key: 'email', question: "Parfait ! Et votre numéro de téléphone pour qu'on puisse vous recontacter rapidement ?" }
  ];

  const handleSendMessage = async () => {
    if (!currentInput.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: currentInput,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Save user response
    if (currentStep === 0) {
      setProjectData(prev => ({ ...prev, company: currentInput }));
    } else if (currentStep <= questions.length) {
      const questionKey = questions[currentStep - 1].key as keyof ProjectData;
      setProjectData(prev => ({ ...prev, [questionKey]: currentInput }));
    }

    setCurrentInput('');

    // Add bot response after delay
    setTimeout(() => {
      if (currentStep < questions.length) {
        const botMessage: Message = {
          id: messages.length + 2,
          text: questions[currentStep].question,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setCurrentStep(prev => prev + 1);
      } else {
        // Final message
        const finalMessage: Message = {
          id: messages.length + 2,
          text: "Parfait ! J'ai toutes les informations nécessaires. Votre demande a été transmise à notre équipe. Rafik Kellou ou un membre de notre équipe vous recontactera dans les 24h. Merci pour votre confiance ! 🚀",
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, finalMessage]);
        setIsCompleted(true);
        
        // Here you would send the data to your backend/email service
        console.log('Project data collected:', projectData);
      }
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl w-96 h-[600px] flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium">Assistant HubEasy</h3>
                <p className="text-sm opacity-90">En ligne</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 h-auto"
            >
              ✕
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[80%] ${
                  message.isBot 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                } rounded-2xl px-4 py-3`}>
                  <div className="flex items-start">
                    {message.isBot && (
                      <Bot className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-light">{message.text}</p>
                    {!message.isBot && (
                      <User className="w-4 h-4 ml-2 mt-0.5 flex-shrink-0" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          {!isCompleted && (
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre réponse..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:border-red-500 focus:outline-none transition-colors duration-300 font-light text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!currentInput.trim()}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full w-12 h-12 p-0 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Completion */}
          {isCompleted && (
            <div className="p-4 border-t border-gray-200 bg-green-50">
              <div className="flex items-center justify-center text-green-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Demande transmise avec succès !</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
