'use client'

import { motion } from '@/components/ui/LazyMotion'

export function ExperienceTimeline() {
  const experiences = [
    {
      id: 1,
      title: 'Graduate Research Assistant',
      institution: 'University of Colorado Boulder - Environmental Studies',
      period: 'June 2025 - Present',
      description: 'Leading research on extreme heat and infant mortality in Bangladesh as part of an NIH-funded project. Integrating Bangladesh Meteorological Department data with BDHS surveys for comprehensive climate-health analysis.',
      current: true
    },
    {
      id: 2,
      title: 'Graduate Teaching Assistant',
      institution: 'University of Colorado Boulder',
      period: 'Aug 2024 - May 2025',
      description: 'Teaching Assistant for Introduction to Environmental Studies, leading three recitation sessions weekly for 30-40 students each',
      current: true
    },
    {
      id: 3,
      title: 'Graduate Teaching Assistant',
      institution: 'Texas Tech University',
      period: 'Aug 2022 - May 2024',
      description: 'Taught diverse sociology courses including Human Societies, Health and Environment, Contemporary Sociological Theories, Prison and Society, Criminological Theory, and Introduction to Sociology.',
      current: false
    }
  ]

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          Experience Journey
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          My academic and professional journey in environmental research and education
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-blue-500 transform md:-translate-x-0.5"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10">
                <div className="absolute inset-1 bg-slate-900 rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-emerald-400 font-medium">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-500/30">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>

                  <p className="text-emerald-400 text-sm mb-3 font-medium">
                    {exp.institution}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
