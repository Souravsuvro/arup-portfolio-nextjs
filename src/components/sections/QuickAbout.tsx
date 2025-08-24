'use client'

import { motion } from '@/components/ui/LazyMotion'
import { designTokens } from '@/lib/design-tokens'

export function QuickAbout() {
  return (
    <section className={`${designTokens.spacing.section} bg-gradient-to-b from-slate-900 to-slate-800/50 relative`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_50%)]"></div>
      <div className={`${designTokens.spacing.containerMedium} text-center relative z-10`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`${designTokens.typography.h2} mb-6 ${designTokens.colors.textGradientPrimary}`}>
            About Me
          </h2>
          <p className={`${designTokens.typography.subtitle} text-slate-300 max-w-3xl mx-auto`}>
            Environmental researcher passionate about data-driven solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${designTokens.colors.cardBg} ${designTokens.spacing.cardPadding} rounded-2xl`}
          >
            <div className="mb-6">
              <h3 className={`${designTokens.typography.h3} text-white mb-4`}>Hello! I&apos;m Arup Ratan Paul</h3>
              <p className={`${designTokens.typography.body} text-slate-300 mb-6`}>
                I&apos;m a PhD student in Environmental Studies at the University of Colorado Boulder, studying how climate stressors—such as extreme heat, salinity intrusion, and land-use change—affect health outcomes and migration patterns in climate-vulnerable areas, especially coastal Bangladesh.
              </p>
              <p className={`${designTokens.typography.body} text-slate-300`}>
                My research integrates demographic and health data with satellite imagery and climate indices, using spatial and temporal statistics to investigate patterns of vulnerability and resilience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: 'fas fa-graduation-cap', text: 'PhD Student' },
                { icon: 'fas fa-map-marker-alt', text: 'Boulder, Colorado' },
                { icon: 'fas fa-globe-americas', text: 'Environmental Science' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/30"
                >
                  <i className={item.icon}></i>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating Elements Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              {[
                { emoji: '🌱', delay: 0, x: '20%', y: '20%' },
                { emoji: '📊', delay: 1, x: '70%', y: '30%' },
                { emoji: '🌍', delay: 2, x: '30%', y: '70%' },
                { emoji: '🔬', delay: 3, x: '80%', y: '80%' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute text-6xl"
                  style={{ left: item.x, top: item.y }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                >
                  {item.emoji}
                </motion.div>
              ))}
              
              {/* Central connecting lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-emerald-400/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
