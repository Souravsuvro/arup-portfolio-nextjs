'use client'

import { motion } from '@/components/ui/LazyMotion'
import Link from 'next/link'
import { designTokens } from '@/lib/design-tokens'

export function RecentPublications() {
  const publications = [
    {
      title: 'Climate Stressors and Health Outcomes in Coastal Bangladesh: A Spatial-Temporal Analysis',
      authors: ['Arup Ratan Paul', 'Dr. Jane Smith', 'Dr. Michael Johnson'],
      journal: 'Environmental Health Perspectives',
      year: 2024,
      type: 'Research Article',
      featured: true
    },
    {
      title: 'Migration Patterns in Response to Environmental Change: Evidence from South Asia',
      authors: ['Arup Ratan Paul', 'Dr. Sarah Wilson'],
      journal: 'Global Environmental Change',
      year: 2024,
      type: 'Research Article',
      featured: true
    },
    {
      title: 'Integrating Satellite Data with Health Surveys: Methodological Considerations',
      authors: ['Arup Ratan Paul', 'Dr. Robert Chen', 'Dr. Lisa Anderson'],
      journal: 'International Journal of Environmental Research',
      year: 2023,
      type: 'Methodology Paper',
      featured: false
    }
  ]

  return (
    <section className={`${designTokens.spacing.sectionSmall} bg-slate-800/30`}>
      <div className={designTokens.spacing.containerWide}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`${designTokens.typography.h3} mb-4 ${designTokens.colors.textGradientPrimary}`}>
            Recent Publications
          </h2>
          <p className={`${designTokens.typography.body} text-slate-300 max-w-2xl mx-auto`}>
            Latest research contributions and academic publications
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {pub.title}
                    </h3>
                    {pub.featured && (
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-md border border-emerald-500/30">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-2">
                    {pub.authors.join(', ')}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <i className="fas fa-book"></i>
                      {pub.journal}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fas fa-calendar"></i>
                      {pub.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fas fa-tag"></i>
                      {pub.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-slate-700/50 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 text-sm rounded-lg border border-slate-600 hover:border-emerald-500/30 transition-all duration-200">
                    <i className="fas fa-external-link-alt mr-2"></i>
                    View Paper
                  </button>
                  <button className="px-4 py-2 bg-slate-700/50 hover:bg-blue-500/20 text-slate-300 hover:text-blue-400 text-sm rounded-lg border border-slate-600 hover:border-blue-500/30 transition-all duration-200">
                    <i className="fas fa-quote-left mr-2"></i>
                    Cite
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25"
          >
            <i className="fas fa-graduation-cap"></i>
            View All Publications
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
