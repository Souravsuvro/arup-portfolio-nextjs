'use client'

import { motion } from '@/components/ui/LazyMotion'
import Image from 'next/image'
import Link from 'next/link'
import { designTokens } from '@/lib/design-tokens'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="100vw"
          />
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-emerald-900/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center lg:pb-20 xl:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 mx-auto mb-0 lg:mb-1 relative">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-pulse p-1">
                {/* Inner background circle */}
                <div className="w-full h-full bg-slate-900 rounded-full p-1">
                  {/* Profile image container */}
                  <div className="w-full h-full relative overflow-hidden rounded-full">
                    <Image
                      src="/profile.jpeg"
                      alt="Arup Ratan Paul, Environmental Research Scientist"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`${designTokens.typography.h1} mb-3 lg:mb-4 xl:mb-5 ${designTokens.colors.textGradientHero}`}
        >
          Arup Ratan Paul
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`${designTokens.typography.subtitle} text-emerald-400 mb-3 lg:mb-4`}
        >
          Graduate Research & Teaching Assistant
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg lg:text-xl xl:text-2xl text-slate-300 mb-6 lg:mb-10 flex items-center justify-center gap-2"
        >
          <i className="fas fa-map-marker-alt text-emerald-400 mb-4"></i>
          University of Colorado Boulder · Environmental Studies
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 mb-8 lg:mb-10 max-w-md sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto"
        >
          {[
            { number: '3', label: 'Years Experience' },
            { number: '8', label: 'Publications' },
            { number: '250', label: 'Students Impacted' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 lg:p-8 xl:p-10 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 hover:border-slate-600/50 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 lg:mb-4">
                {stat.number}+
              </div>
              <div className="text-sm lg:text-base xl:text-lg text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-6 lg:mb-8"
        >
          <a
            href="/Arup_Ratan_Paul_CV.pdf"
            download="Arup_Ratan_Paul_CV.pdf"
            className={`group relative ${designTokens.spacing.buttonPadding} bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 ${designTokens.animations.hoverScale} ${designTokens.animations.hoverGlow} ${designTokens.animations.focusRing} flex-1 sm:flex-none inline-flex items-center justify-center`}
            aria-label="Download CV PDF"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <i className="fas fa-download" aria-hidden="true"></i>
              Download CV
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <Link
            href="/about"
            className={`group ${designTokens.spacing.buttonPadding} border-2 border-emerald-500/50 rounded-xl font-semibold text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 flex items-center justify-center gap-2 ${designTokens.animations.focusRing} flex-1 sm:flex-none`}
            aria-label="Learn more about Arup Ratan Paul"
          >
            <i className="fas fa-user" aria-hidden="true"></i>
            Learn More
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center gap-6"
        >
          <Link
            href="mailto:arup.ratan.paul@colorado.edu"
            className="w-12 h-12 bg-slate-800/50 hover:bg-emerald-500/20 border border-slate-700 hover:border-emerald-500/50 rounded-xl flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
            aria-label="Send email to Arup Ratan Paul"
          >
            <i className="fas fa-envelope text-lg"></i>
          </Link>
          <Link
            href="https://www.linkedin.com/in/arup-ratan-paul-1648a0199/"
            target="_blank"
            className="w-12 h-12 bg-slate-800/50 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500/50 rounded-xl flex items-center justify-center text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            aria-label="Connect with Arup Ratan Paul on LinkedIn"
          >
            <i className="fab fa-linkedin text-lg"></i>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 lg:bottom-12 xl:bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const nextSection = document.querySelector('section:nth-of-type(2)');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const nextSection = document.querySelector('section:nth-of-type(2)');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center hover:border-emerald-400 transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2 group-hover:bg-emerald-400 transition-colors duration-300"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
