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

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            if (!response.ok) throw new Error('Failed to fetch response');

            const data = await response.json();
            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.content
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Error:', error);
            // Handle error gracefully
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Toggle Button - Hidden when open */}
            <button
                onClick={toggleChatbot}
                className={cn(
                    "fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
                    isOpen ? "opacity-0 pointer-events-none scale-0" : "bg-[#ff7a59] hover:bg-[#ff7a59]/90 opacity-100 scale-100"
                )}
            >
                <MessageSquare className="w-6 h-6 text-white" />
            </button>

            {/* Chat Interface */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full bg-background border-l shadow-2xl transition-all duration-500 ease-in-out z-40 flex flex-col",
                    isOpen ? "translate-x-0 w-[400px]" : "translate-x-full w-[400px]"
                )}
            >
                {/* Header */}
                <div className="p-4 border-b bg-[#ff7a59]/10 relative">
                    {/* Close Button - Top Left */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 left-4 p-1 rounded-full hover:bg-black/5 transition-colors"
                        aria-label="Fermer"
                    >
                        <X className="w-4 h-4 text-muted-foreground" />
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
