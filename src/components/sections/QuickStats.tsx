'use client'

import { motion } from '@/components/ui/LazyMotion'
import { designTokens } from '@/lib/design-tokens'

export function QuickStats() {
  const stats = [
    {
      icon: 'fas fa-microscope',
      number: '3',
      label: 'Years of Research',
      description: 'Environmental data analysis'
    },
    {
      icon: 'fas fa-graduation-cap',
      number: '8',
      label: 'Publications',
      description: 'Peer-reviewed articles'
    },
    {
      icon: 'fas fa-users',
      number: '250',
      label: 'Students Taught',
      description: 'Across multiple courses'
    },
    {
      icon: 'fas fa-globe-americas',
      number: '5',
      label: 'Research Areas',
      description: 'Climate-health focus'
    }
  ]

  return (
    <section className={`${designTokens.spacing.section} mt-20 bg-slate-800/20`}>
      <div className={designTokens.spacing.containerWide}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`${designTokens.typography.h3} mb-4 ${designTokens.colors.textGradientPrimary}`}>
            Research Impact
          </h2>
          <p className={`${designTokens.typography.body} text-slate-400 max-w-2xl mx-auto`}>
            Making a difference through environmental research and education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group ${designTokens.colors.cardBg} ${designTokens.spacing.cardPadding} rounded-2xl ${designTokens.animations.hoverLift} transition-all duration-300`}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${stat.icon} text-white text-2xl`}></i>
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {stat.number}+
                </motion.div>
                
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-slate-400">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
