'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from '@/components/ui/LazyMotion'
import Image from 'next/image'

interface Conference {
  id: number
  year: string
  name: string
  location: string
  presentation: string
  date: string
  image: string
  type: 'poster' | 'presentation'
}

interface ConferenceAttendedProps {
  showTitle?: boolean
  maxItems?: number
  className?: string
}

export function ConferenceAttended({ 
  showTitle = true, 
  maxItems,
  className = "" 
}: ConferenceAttendedProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const conferences: Conference[] = [
    {
      id: 1,
      year: '2025',
      name: 'Population Association of America (PAA)',
      location: 'Washington D.C.',
      presentation: 'Heat Stress and Child Health in Bangladesh',
      date: 'April 10–13, 2025',
      image: '/conference/PAA_heat_stress_poster_high_quality.jpg',
      type: 'poster'
    },
    {
      id: 2,
      year: '2024',
      name: 'Southwestern Social Science Association (SSSA)',
      location: 'New Orleans, Louisiana',
      presentation: 'Unraveling Corruption within the Context of Climate Vulnerability: A Study on Four Coastal Villages in Southwestern Bangladesh',
      date: 'April 19, 2024',
      image: '/conference/SSSA Conference 2024.jpg',
      type: 'presentation'
    },
    {
      id: 3,
      year: '2024',
      name: 'Southwestern Social Science Association (SSSA)',
      location: 'New Orleans, Louisiana',
      presentation: 'Research Presentation',
      date: 'April 2024',
      image: '/conference/SSSA 2024_2.jpg',
      type: 'presentation'
    },
    {
      id: 4,
      year: '2023',
      name: 'Southwestern Social Science Association (SSSA)',
      location: 'Dallas–Fort Worth, Texas',
      presentation: 'Vulnerability of Climate-Sensitive Livelihoods of the Coastal People in Bangladesh',
      date: 'March 30, 2023',
      image: '/conference/Thesis Defense TTU.jpeg',
      type: 'presentation'
    }
  ]

  const displayedConferences = maxItems ? conferences.slice(0, maxItems) : conferences

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displayedConferences.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, displayedConferences.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % displayedConferences.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + displayedConferences.length) % displayedConferences.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className={`mb-20 mt-20 ${className}`}>
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Conference Presentations
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Academic conferences and research presentations showcasing climate and environmental studies
          </p>
        </motion.div>
      )}

      <div className="relative max-w-6xl mx-auto">
        {/* Main Slider */}
        <div 
          className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Conference Image */}
                <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                  <Image
                    src={displayedConferences[currentSlide].image}
                    alt={`${displayedConferences[currentSlide].name} - ${displayedConferences[currentSlide].year}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500/90 text-white text-sm font-semibold rounded-full">
                      {displayedConferences[currentSlide].year}
                    </span>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-white text-xs font-medium rounded-full ${
                      displayedConferences[currentSlide].type === 'poster' 
                        ? 'bg-purple-500/90' 
                        : 'bg-blue-500/90'
                    }`}>
                      {displayedConferences[currentSlide].type === 'poster' ? 'Poster' : 'Presentation'}
                    </span>
                  </div>
                </div>

                {/* Conference Details */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {displayedConferences[currentSlide].name}
                    </h3>
                    <div className="flex items-center gap-2 text-emerald-400 mb-4">
                      <i className="fas fa-map-marker-alt"></i>
                      <span className="text-lg">{displayedConferences[currentSlide].location}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-300">
                      <i className="fas fa-calendar"></i>
                      <span>{displayedConferences[currentSlide].date}</span>
                    </div>
                    
                    <div className="flex items-start gap-2 text-slate-300">
                      <i className="fas fa-presentation mt-1"></i>
                      <p className="leading-relaxed">{displayedConferences[currentSlide].presentation}</p>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex items-center gap-2 pt-4">
                    {displayedConferences.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-emerald-500 scale-125' 
                            : 'bg-slate-600 hover:bg-slate-500'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Previous conference"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Next conference"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Conference Count */}
        <div className="text-center mt-6">
          <span className="text-slate-400 text-sm">
            {currentSlide + 1} of {displayedConferences.length} conferences
          </span>
        </div>
      </div>
    </section>
  )
}
