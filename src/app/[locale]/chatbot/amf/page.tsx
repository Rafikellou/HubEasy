'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  options?: string[];
  allowMultiple?: boolean;
}

interface ChatbotState {
  currentBlock: number;
  answers: Record<string, string | string[]>;
  isComplete: boolean;
  showContactForm: boolean;
  selectedOptions: string[];
}

const CHATBOT_BLOCKS = [
  {
    id: 'role',
    question: 'Votre rôle est-il plutôt :',
    options: [
      'Prospecter de nouveaux clients',
      'Gérer un portefeuille existant',
      'Les deux'
    ],
    allowMultiple: false
  },
  {
    id: 'interlocutors',
    question: 'Vos interlocuteurs principaux sont :',
    options: [
      'Comptables publics',
      'Ordonnateurs',
      'Autres (préciser)'
    ],
    allowMultiple: false
  },
  {
    id: 'client_needs',
    question: 'Quand vos clients vous sollicitent, ils cherchent avant tout :',
    options: [
      'Être couverts contre les risques liés à leur responsabilité',
      'Avoir un interlocuteur réactif et spécialisé',
      'Des démarches simples et rapides',
      'Autre (préciser)'
    ],
    allowMultiple: false
  },
  {
    id: 'hubspot_usage',
    question: 'Utilisez-vous déjà HubSpot pour suivre vos prospects et clients ?',
    options: [
      'Oui, régulièrement',
      'Oui, mais pas souvent',
      'Non, pas encore'
    ],
    allowMultiple: false
  },
  {
    id: 'hubspot_tools',
    question: 'Quand vous travaillez dans HubSpot, avez-vous déjà utilisé :',
    options: [
      'Les séquences d\'email',
      'Les rapports / tableaux de bord',
      'Le suivi des rendez-vous / meetings',
      'Aucun de ces outils'
    ],
    allowMultiple: true
  },
  {
    id: 'follow_up_preference',
    question: 'Pour relancer vos prospects, vous préférez :',
    options: [
      'Email',
      'Téléphone',
      'Rendez-vous en personne',
      'Autre'
    ],
    allowMultiple: false
  },
  {
    id: 'data_entry',
    question: 'La saisie d\'informations dans HubSpot vous paraît :',
    options: [
      'Rapide',
      'Moyennement simple',
      'Trop chronophage'
    ],
    allowMultiple: false
  },
  {
    id: 'difficulties',
    question: 'Avez-vous parfois du mal à retrouver :',
    options: [
      'L\'historique des échanges avec un client',
      'Les relances à effectuer',
      'Vos indicateurs de performance',
      'Rien de particulier'
    ],
    allowMultiple: true
  },
  {
    id: 'goals_tracking',
    question: 'Le suivi des objectifs commerciaux est aujourd\'hui :',
    options: [
      'Clair et facile',
      'Moyennement clair',
      'Pas assez lisible'
    ],
    allowMultiple: false
  },
  {
    id: 'other_tools',
    question: 'En dehors d\'HubSpot, utilisez-vous encore d\'autres outils pour suivre vos prospects et clients ?',
    options: [
      'Oui, Excel',
      'Oui, emails (hors HubSpot)',
      'Oui, Slack / Teams',
      'Oui, un autre outil (préciser)',
      'Non, uniquement HubSpot'
    ],
    allowMultiple: true
  },
  {
    id: 'expectations',
    question: 'Avec HubSpot, vous aimeriez surtout :',
    options: [
      'Gagner du temps sur les relances',
      'Mieux visualiser vos résultats',
      'Être accompagné dans l\'utilisation des outils',
      'Autre (préciser)'
    ],
    allowMultiple: true
  },
  {
    id: 'improvement',
    question: 'Si vous deviez améliorer une seule chose dans votre quotidien commercial, ce serait :',
    options: [
      'Moins de tâches manuelles',
      'Plus de visibilité sur les opportunités',
      'Plus d\'aide pour relancer au bon moment'
    ],
    allowMultiple: false
  },
  {
    id: 'report_content',
    question: 'Pour vous, un bon rapport commercial doit montrer :',
    options: [
      'Le nombre de rendez-vous réalisés',
      'Le suivi des relances en cours',
      'Les contrats signés',
      'Autre (préciser)'
    ],
    allowMultiple: true
  },
  {
    id: 'calls_integration',
    question: 'Serait-il utile pour vous de passer vos appels directement depuis HubSpot (ex. via Aircall, Ringover) ?',
    options: [
      'Oui',
      'Non',
      'Peut-être'
    ],
    allowMultiple: false
  },
  {
    id: 'ai_emails',
    question: 'Aimeriez-vous que HubSpot vous suggère ou rédige automatiquement vos emails de suivi grâce à l\'IA ?',
    options: [
      'Oui, ce serait un vrai gain de temps',
      'Pas sûr, je préfère rédiger moi-même',
      'Non, ça ne m\'intéresse pas'
    ],
    allowMultiple: false
  },
  {
    id: 'hubspot_features',
    question: 'Trouveriez-vous utile que HubSpot :',
    options: [
      'Rappelle automatiquement vos tâches et relances',
      'Priorise vos prospects les plus chauds',
      'Génère vos rapports commerciaux en un clic'
    ],
    allowMultiple: true
  },
  {
    id: 'key_improvement',
    question: 'Si HubSpot pouvait s\'améliorer sur un point clé, ce serait :',
    options: [
      'Plus d\'automatisation',
      'Plus de simplicité',
      'Plus d\'aide pour conclure des contrats'
    ],
    allowMultiple: false
  }
];

export default function ChatbotAMFPage() {
  const [chatbotState, setChatbotState] = useState<ChatbotState>({
    currentBlock: 0,
    answers: {},
    isComplete: false,
    showContactForm: false,
    selectedOptions: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Bonjour 👋, ce chatbot est conçu pour mieux comprendre vos besoins avec HubSpot. Quelques questions rapides ?',
      options: ['Commencer le questionnaire']
    }
  ]);

  const handleOptionSelect = (option: string) => {
    const currentBlockData = CHATBOT_BLOCKS[chatbotState.currentBlock];
    
    if (currentBlockData.allowMultiple) {
      // Sélection multiple
      setChatbotState(prev => ({
        ...prev,
        selectedOptions: prev.selectedOptions.includes(option)
          ? prev.selectedOptions.filter(opt => opt !== option)
          : [...prev.selectedOptions, option]
      }));
    } else {
      // Sélection unique - passer directement à la question suivante
      handleAnswer(option);
    }
  };

  const handleAnswer = (answer: string | string[]) => {
    // Ajouter la réponse de l'utilisateur
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: Array.isArray(answer) ? answer.join(', ') : answer
    };

    setMessages(prev => [...prev, userMessage]);

    // Si c'est le bouton de démarrage, commencer avec la première question
    if (answer === 'Commencer le questionnaire') {
      const firstQuestion = CHATBOT_BLOCKS[0];
      const firstMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        content: firstQuestion.question,
        options: firstQuestion.options,
        allowMultiple: firstQuestion.allowMultiple
      };

      setTimeout(() => {
        setMessages(prev => [...prev, firstMessage]);
      }, 500);
      return;
    }

    // Traitement normal des réponses
    const currentBlockData = CHATBOT_BLOCKS[chatbotState.currentBlock];
    
    // Mettre à jour les réponses
    const newAnswers = {
      ...chatbotState.answers,
      [currentBlockData.id]: answer
    };

    // Réinitialiser les options sélectionnées
    setChatbotState(prev => ({
      ...prev,
      selectedOptions: []
    }));

    // Passer au bloc suivant ou terminer
    if (chatbotState.currentBlock < CHATBOT_BLOCKS.length - 1) {
      setChatbotState(prev => ({
        ...prev,
        currentBlock: prev.currentBlock + 1,
        answers: newAnswers
      }));

      // Ajouter la prochaine question
      const nextBlock = CHATBOT_BLOCKS[chatbotState.currentBlock + 1];
      const nextMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        content: nextBlock.question,
        options: nextBlock.options,
        allowMultiple: nextBlock.allowMultiple
      };

      setTimeout(() => {
        setMessages(prev => [...prev, nextMessage]);
      }, 500);
    } else {
      // Chatbot terminé
      setChatbotState(prev => ({
        ...prev,
        answers: newAnswers,
        isComplete: true,
        showContactForm: true
      }));

      const thankYouMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        content: 'Merci beaucoup pour vos réponses ! Vos informations nous aideront à mieux comprendre vos besoins avec HubSpot. Souhaitez-vous être recontacté par notre équipe ?'
      };

      setTimeout(() => {
        setMessages(prev => [...prev, thankYouMessage]);
      }, 500);
    }
  };

  const handleNext = () => {
    if (chatbotState.selectedOptions.length > 0) {
      handleAnswer(chatbotState.selectedOptions);
    }
  };

  const progressPercentage = ((chatbotState.currentBlock + 1) / CHATBOT_BLOCKS.length) * 100;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const contactInfo = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
    };

    try {
      const response = await fetch('/api/chatbot-amf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers: chatbotState.answers,
          contactInfo,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('✅ Merci ! Vos informations ont été envoyées avec succès.');
      } else {
        setSubmitMessage('❌ Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitMessage('❌ Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2a2171] to-[#2e8bcb] text-white p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <img 
                src="/logo-client/amf-logo" 
                alt="Logo AMF" 
                className="h-8 sm:h-12 w-auto"
              />
              <div>
                <h1 className="text-lg sm:text-2xl font-bold">Chatbot AMF</h1>
                <p className="text-blue-100 text-sm sm:text-base">Questionnaire pour commerciaux AMF</p>
              </div>
            </div>
            
            {/* Barre de progression */}
            <div className="mt-4">
              <div className="flex justify-between text-xs sm:text-sm text-blue-100 mb-2">
                <span>Progression</span>
                <span>{chatbotState.currentBlock + 1}/{CHATBOT_BLOCKS.length}</span>
              </div>
              <div className="w-full bg-[#2a2171] rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-[#51b9a3] to-[#fbba00] h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-4 sm:p-6 h-80 sm:h-96 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs sm:max-w-md px-3 sm:px-4 py-2 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-[#2e8bcb] text-white' 
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}>
                    <p className="text-xs sm:text-sm">{message.content}</p>
                    
                    {/* Options de réponse */}
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, index) => {
                          const isSelected = chatbotState.selectedOptions.includes(option);
                          const currentBlockData = CHATBOT_BLOCKS[chatbotState.currentBlock];
                          
                          return (
                            <button
                              key={index}
                              onClick={() => handleOptionSelect(option)}
                              className={`block w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${
                                message.allowMultiple
                                  ? isSelected
                                    ? 'bg-[#51b9a3] text-white border-2 border-[#51b9a3]'
                                    : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
                                  : 'bg-gray-100 hover:bg-[#51b9a3] hover:text-white'
                              }`}
                            >
                              {message.allowMultiple && (
                                <span className="mr-2">
                                  {isSelected ? '✓' : '○'}
                                </span>
                              )}
                              {option}
                            </button>
                          );
                        })}
                        
                        {/* Bouton Suivant pour sélection multiple */}
                        {message.allowMultiple && chatbotState.selectedOptions.length > 0 && (
                          <button
                            onClick={handleNext}
                            className="w-full mt-3 px-4 py-2 bg-[#2e8bcb] text-white rounded-lg hover:bg-[#2a2171] transition-colors text-sm font-medium"
                          >
                            Suivant ({chatbotState.selectedOptions.length} sélectionné{chatbotState.selectedOptions.length > 1 ? 's' : ''})
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire de contact */}
          {chatbotState.showContactForm && (
            <div className="p-4 sm:p-6 bg-white border-t">
              <h3 className="text-base sm:text-lg font-semibold mb-4">Souhaitez-vous être recontacté ?</h3>
              
              {submitMessage && (
                <div className={`mb-4 p-3 rounded-lg text-sm ${
                  submitMessage.includes('✅') 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#51b9a3] focus:border-transparent text-sm sm:text-base"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#51b9a3] focus:border-transparent text-sm sm:text-base"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#51b9a3] focus:border-transparent text-sm sm:text-base"
                    placeholder="Nom de votre entreprise"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[#2e8bcb] hover:bg-[#2a2171] text-white text-sm sm:text-base py-2 sm:py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer mes informations'}
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
