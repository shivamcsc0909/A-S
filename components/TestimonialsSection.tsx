'use client'

import { useState, useEffect } from 'react'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  
  const testimonials = [
    {
      text: "Akash's MCQ tricks saved 3 months of my prep!",
      author: "Riya",
      details: "NEET 2025, 98%ile",
      rating: 5
    },
    {
      text: "Shivam's SEO grew my clinic's traffic by 300%",
      author: "Dr. Verma",
      details: "Client since 2024",
      rating: 4
    },
    {
      text: "The crash course was exactly what I needed before NEET",
      author: "Arjun",
      details: "NEET 2024, AIR 2,456",
      rating: 5
    }
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    
    return () => clearInterval(timer)
  }, [isClient, testimonials.length])

  if (!isClient) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Students Say
            </h2>
            <p className="text-lg text-gray-600">
              Success stories from our NEET mentoring program
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card text-center min-h-[200px] flex flex-col justify-center">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Students Say
          </h2>
          <p className="text-lg text-gray-600">
            Success stories from our NEET mentoring program
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card text-center min-h-[200px] flex flex-col justify-center">
            <div className="mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <i key={i} className="fas fa-star text-amber-400 text-xl mr-1"></i>
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <div>
              <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
              <p className="text-gray-600">{testimonials[currentIndex].details}</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
