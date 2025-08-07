'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("Hi, I'm Akash Kushwaha")
  const [isClient, setIsClient] = useState(false)
  const fullText = "Hi, I'm Akash Kushwaha"
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  useEffect(() => {
    if (!isClient) return
    
    setDisplayText('')
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [isClient, fullText])

  return (
    <section className="bg-gradient-to-br from-blue-50 to-emerald-50 section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="wave">👋</span> {displayText}
              {isClient && <span className="animate-pulse">|</span>}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              NEET Mentor | Medical Content Creator
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="https://youtube.com/..." 
              className="btn-primary inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-play"></i>
              🔗 Watch My Journey
            </Link>
            <Link 
              href="https://wa.me/919554584978" 
              className="btn-secondary inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
              📞 Talk to Shivam (Manager)
            </Link>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 italic max-w-2xl mx-auto">
            "Helping 10,000+ students crack NEET with smart strategies since 2023"
          </p>
          
          <div className="mt-8">
            <span className="verification-badge">
              <i className="fas fa-check-circle"></i>
              Verified NEET Mentor
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
