'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface ParallaxSectionProps {
  children: React.ReactNode
  backgroundImage: string
  className?: string
  speed?: number
}

export function ParallaxSection({ 
  children, 
  backgroundImage, 
  className = '',
  speed = 0.5 
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed
      
      // Only apply parallax when section is visible
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        imageRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div 
        ref={imageRef} 
        className="absolute inset-0 will-change-transform"
        style={{ top: '-20%', height: '120%' }}
      >
        <Image
          src={backgroundImage}
          alt="Background parallax"
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
