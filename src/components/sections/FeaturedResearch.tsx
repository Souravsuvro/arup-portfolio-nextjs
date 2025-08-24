'use client'

import { motion } from '@/components/ui/LazyMotion'
import Link from 'next/link'
import { designTokens } from '@/lib/design-tokens'

export function FeaturedResearch() {
  const researchProjects = [
    {
      title: 'Climate-Health Relationships in Bangladesh',
      description: 'Investigating how extreme heat, salinity intrusion, and land-use change affect health outcomes and migration patterns in coastal Bangladesh.',
      status: 'ongoing',
      tags: ['Climate Change', 'Public Health', 'Migration'],
      funding: 'NIH-funded project'
    },
    {
      title: 'Spatial-Temporal Climate Data Analysis',
      description: 'Integrating demographic and health data with satellite imagery and climate indices using advanced statistical methods.',
      status: 'ongoing',
      tags: ['Remote Sensing', 'GIS', 'Statistical Modeling'],
      funding: 'University Research Grant'
    },
    {
      title: 'Environmental Justice in Urban Areas',
      description: 'Examining the disproportionate impacts of environmental hazards on vulnerable communities in urban settings.',
      status: 'completed',
      tags: ['Environmental Justice', 'Urban Studies', 'Social Equity'],
      funding: 'Graduate Research Fellowship'
    }
  ]

  return (
    <section className={`${designTokens.spacing.section} mt-20 bg-slate-900`}>
      <div className={designTokens.spacing.containerWide}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`${designTokens.typography.h2} mb-6 ${designTokens.colors.textGradientPrimary}`}>
            Featured Research
          </h2>
          <p className={`${designTokens.typography.subtitle} text-slate-300 max-w-3xl mx-auto`}>
            Current and recent research projects in environmental science and climate-health relationships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {researchProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`${designTokens.colors.cardBg} ${designTokens.spacing.cardPadding} rounded-2xl ${designTokens.animations.hoverLift} transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  project.status === 'ongoing' 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                }`}>
                  {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                </span>
                <i className="fas fa-microscope text-emerald-400 text-lg"></i>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-xs text-emerald-400 font-medium">
                {project.funding}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25"
          >
            <i className="fas fa-microscope"></i>
            View All Research
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
