'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'scale-up' | 'bounce-in' | 'rotate-in';
  delay?: number;
  className?: string;
  duration?: number;
}

export default function AnimatedSection({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '',
  duration = 800
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClasses = () => {
    const base = `transition-all duration-${duration} ease-out will-change-transform`;
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${base} opacity-0 translate-y-16 transform`;
        case 'slide-left':
          return `${base} opacity-0 translate-x-16 transform`;
        case 'slide-right':
          return `${base} opacity-0 -translate-x-16 transform`;
        case 'scale-up':
          return `${base} opacity-0 scale-75 transform`;
        case 'bounce-in':
          return `${base} opacity-0 scale-50 transform`;
        case 'rotate-in':
          return `${base} opacity-0 rotate-12 scale-75 transform`;
        default:
          return `${base} opacity-0 transform`;
      }
    }
    
    switch (animation) {
      case 'bounce-in':
        return `${base} opacity-100 scale-100 transform transition-all duration-${duration} ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]`;
      case 'rotate-in':
        return `${base} opacity-100 rotate-0 scale-100 transform`;
      default:
        return `${base} opacity-100 translate-x-0 translate-y-0 scale-100 transform`;
    }
  };

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
}
