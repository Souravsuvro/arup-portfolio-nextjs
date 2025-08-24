'use client'

import { motion } from '@/components/ui/LazyMotion'
import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Environmental researcher passionate about understanding climate-health relationships through innovative data analysis
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image and Quick Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <div className="relative inline-block mb-8">
            <div className="w-64 h-64 mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-2 bg-slate-900 rounded-3xl"></div>
              <Image
                src="/profile.jpeg"
                alt="Arup Ratan Paul"
                width={240}
                height={240}
                className="absolute inset-4 rounded-2xl object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <i className="fas fa-graduation-cap text-emerald-400 text-xl"></i>
              <span className="text-lg text-white">PhD Student, Environmental Studies</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <i className="fas fa-university text-emerald-400 text-xl"></i>
              <span className="text-lg text-white">University of Colorado Boulder</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <i className="fas fa-map-marker-alt text-emerald-400 text-xl"></i>
              <span className="text-lg text-white">Boulder, Colorado, USA</span>
            </div>
          </div>
        </motion.div>

        {/* Detailed Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-white mb-6">My Journey</h2>
          
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I&apos;m a PhD student in  Environmental Studies at the University of Colorado Boulder. I study how climate stressors - such as extreme heat, salinity intrusion, and land-use change -shape health outcomes and migration patterns in vulnerable regions, with a focus on coastal Bangladesh. 
            </p>
            
            <p>
              My work integrates demographic and health survey data (BDHS, BEMS) with satellite imagery (MODIS, Sentinel) and climate indices (Climdex) using R, Stata, GIS, and remote sensing.
            </p>
            
            <p>
              My work integrates demographic and health survey data (BDHS, BEMS) with satellite imagery (MODIS, Sentinel) and climate indices (Climdex) using R, Stata, GIS, and remote sensing.
            </p>
            
          </div>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <h3 className="text-lg font-semibold text-emerald-400 mb-3">Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Climate-Health Relationships',
                'Environmental Migration',
                'Spatial Statistics',
                'Remote Sensing',
                'Environmental Justice',
                'Public Health',
                'Data Analysis',
                'GIS Modeling'
              ].map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
