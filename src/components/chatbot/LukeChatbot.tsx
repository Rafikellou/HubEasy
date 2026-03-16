'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useChatbot } from '@/context/ChatbotContext';
import { cn } from '@/lib/utils';
import { X, Send, Loader2, MessageSquare } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export const LukeChatbot = () => {
    const { isOpen, toggleChatbot, setIsOpen } = useChatbot();
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: "Salut ! Je suis Luke, ton assistant sur tout ce qui concerne la Data et le CRM, spécialement Hubspot.\n\nJ'imagine que si tu es ici, c'est parce que tu as des soucis avec tes process Marketing/ Sales ?\n\nTu veux que je te montre ce que d'autres clients ont eu comme problème avant toi ?"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-expand after 3.5 seconds - DISABLED
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsOpen(true);
    //     }, 3500);

    //     return () => clearTimeout(timer);
    // }, [setIsOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const requestTimestamp = new Date().toISOString();
        console.log(`[${requestTimestamp}] 🚀 Frontend - Envoi message à Luke`);
        console.log(`[Frontend] Message utilisateur:`, userMessage.content);
        console.log(`[Frontend] Nombre total de messages:`, messages.length + 1);

        try {
            console.log(`[Frontend] 📤 Appel API: /api/chat`);
            const fetchStartTime = Date.now();
            
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            const fetchDuration = Date.now() - fetchStartTime;
            console.log(`[Frontend] ⏱️ Durée de la requête: ${fetchDuration}ms`);
            console.log(`[Frontend] Status de la réponse: ${response.status} ${response.statusText}`);

            const data = await response.json();
            console.log(`[Frontend] 📥 Données reçues:`, {
                hasContent: !!data.content,
                contentLength: data.content?.length || 0,
                requestId: data.requestId,
                hasError: !!data.error
            });
            
            if (!response.ok) {
                console.error(`[Frontend] ❌ Erreur API Chat`);
                console.error(`[Frontend] Status: ${response.status} ${response.statusText}`);
                console.error(`[Frontend] Données complètes:`, data);
                console.error(`[Frontend] Request ID:`, data.requestId);
                
                const errorMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    role: 'assistant',
                    content: data.content || `Désolé, j'ai rencontré une erreur (${response.status}). ${data.error ? `Erreur: ${data.error}` : 'Vérifiez la console pour plus de détails.'}`
                };
                setMessages(prev => [...prev, errorMessage]);
                return;
            }

            console.log(`[Frontend] ✅ Réponse traitée avec succès`);
            
            // Vérifier si Luke a collecté les informations de contact
            let cleanContent = data.content;
            const contactMarkerStart = '|||CONTACT_COLLECTED|||';
            const contactMarkerEnd = '|||END_CONTACT|||';
            
            if (data.content.includes(contactMarkerStart) && data.content.includes(contactMarkerEnd)) {
                console.log(`[Frontend] 🎯 Contact collecté détecté !`);
                
                try {
                    // Extraire le JSON des informations de contact
                    const startIndex = data.content.indexOf(contactMarkerStart) + contactMarkerStart.length;
                    const endIndex = data.content.indexOf(contactMarkerEnd);
                    const contactJson = data.content.substring(startIndex, endIndex).trim();
                    const contactData = JSON.parse(contactJson);
                    
                    console.log(`[Frontend] 📋 Données extraites:`, contactData);
                    
                    // Nettoyer le contenu pour l'affichage (retirer les marqueurs)
                    cleanContent = data.content.substring(0, data.content.indexOf(contactMarkerStart)).trim();
                    
                    // Envoyer les données à l'API Slack (en arrière-plan, non bloquant)
                    fetch('/api/luke-contact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            firstName: contactData.firstName,
                            email: contactData.email,
                            phone: contactData.phone,
                            conversationHistory: messages.map(m => ({
                                role: m.role,
                                content: m.content
                            }))
                        }),
                    })
                    .then(response => response.json())
                    .then(result => {
                        if (result.success) {
                            console.log(`[Frontend] ✅ Notification Slack envoyée:`, result.requestId);
                        } else {
                            console.warn(`[Frontend] ⚠️ Notification Slack non envoyée (normal si SLACK_WEBHOOK_URL non configurée):`, result);
                        }
                    })
                    .catch(error => {
                        console.warn(`[Frontend] ⚠️ Impossible d'envoyer vers Slack (normal si non configuré):`, error);
                    });
                    
                } catch (error) {
                    console.error(`[Frontend] ❌ Erreur lors de l'extraction des données de contact:`, error);
                }
            }
            
            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: cleanContent
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error(`[Frontend] ❌ ERREUR CRITIQUE`);
            console.error(`[Frontend] Type:`, error instanceof Error ? error.constructor.name : typeof error);
            console.error(`[Frontend] Message:`, error instanceof Error ? error.message : String(error));
            console.error(`[Frontend] Stack:`, error instanceof Error ? error.stack : 'N/A');
            
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: `Désolé, impossible de me connecter au serveur. ${error instanceof Error ? `Erreur: ${error.message}` : 'Erreur réseau.'}`
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
            console.log(`[Frontend] 🏁 Traitement terminé`);
        }
    };

    return (
        <>
            {/* Toggle Button - Hidden when open */}
            <button
                onClick={toggleChatbot}
                className={cn(
                    "fixed bottom-8 right-8 z-[45] p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
                    isOpen ? "opacity-0 pointer-events-none scale-0" : "bg-[#ff7a59] hover:bg-[#ff7a59]/90 opacity-100 scale-100"
                )}
            >
                <MessageSquare className="w-6 h-6 text-white" />
            </button>

            {/* Chat Interface */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full bg-background border-l shadow-2xl transition-all duration-500 ease-in-out z-[45] flex flex-col",
                    isOpen ? "translate-x-0 w-full md:w-[400px]" : "translate-x-full w-full md:w-[400px]"
                )}
            >
                {/* Header */}
                <div className="p-4 border-b bg-[#ff7a59]/10 relative">
                    {/* Close Button - Top Left */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 left-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors z-10"
                        aria-label="Fermer"
                    >
                        <X className="w-5 h-5 text-gray-700" />
                    </button>

                    <div className="flex flex-col items-center justify-center mt-2">
                        <div className="w-12 h-12 rounded-full bg-[#ff7a59] flex items-center justify-center mb-2 shadow-md">
                            <span className="text-white font-bold text-xl">L</span>
                        </div>
                        <h3 className="font-bold text-lg">Luke</h3>
                        <p className="text-xs text-muted-foreground">Agent IA Hubeasy</p>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={cn(
                                "flex w-full",
                                message.role === 'user' ? "justify-end" : "justify-start"
                            )}
                        >
                            <div
                                className={cn(
                                    "max-w-[85%] p-3 rounded-2xl text-sm",
                                    message.role === 'user'
                                        ? "bg-[#ff7a59] text-white rounded-br-none"
                                        : "bg-muted rounded-bl-none"
                                )}
                            >
                                {message.role === 'assistant' ? (
                                    <div className="prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-black/10 prose-pre:p-2 prose-pre:rounded-lg">
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                a: ({ node: _node, ...props }) => <a {...props} className="text-[#ff7a59] underline hover:text-[#ff7a59]/80 font-medium" target="_blank" rel="noopener noreferrer" />
                                            }}
                                        >
                                            {message.content}
                                        </ReactMarkdown>
                                    </div>
                                ) : (
                                    message.content
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-muted p-3 rounded-2xl rounded-bl-none">
                                <Loader2 className="w-4 h-4 animate-spin" />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t bg-background">
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Pose ta question..."
                            className="flex-1 px-4 py-2 rounded-full border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-[#ff7a59]/20"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="p-2 rounded-full bg-[#ff7a59] text-white hover:bg-[#ff7a59]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
