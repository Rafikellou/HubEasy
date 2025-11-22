'use client';

import React, { ReactNode } from 'react';
import { useChatbot } from '@/context/ChatbotContext';
import { cn } from '@/lib/utils';

export const ChatLayoutWrapper = ({ children }: { children: ReactNode }) => {
    const { isOpen } = useChatbot();

    return (
        <div
            className={cn(
                "transition-all duration-500 ease-in-out w-full",
                isOpen ? "mr-[400px] w-[calc(100%-400px)]" : "mr-0"
            )}
        >
            {children}
        </div>
    );
};
