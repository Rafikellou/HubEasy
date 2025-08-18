'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'lg' | 'default';
  variant?: 'default' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function PrimaryButton({ 
  children, 
  className = '', 
  size = 'default',
  variant = 'default',
  onClick,
  type = 'button'
}: PrimaryButtonProps) {
  const baseClasses = "font-light rounded-full transition-all duration-500 hover:scale-105 relative overflow-hidden group";
  
  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    default: "px-8 py-4",
    lg: "px-12 py-6 text-lg"
  };

  const variantClasses = {
    default: "bg-gradient-to-r from-red-500 via-red-600 to-pink-500 hover:from-red-600 hover:via-red-700 hover:to-pink-600 text-white shadow-lg hover:shadow-red-500/25",
    outline: "border-2 border-red-500 text-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:via-red-600 hover:to-pink-500 hover:text-white hover:border-transparent"
  };

  return (
    <Button 
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      onClick={onClick}
      type={type}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'default' && (
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      )}
    </Button>
  );
}
