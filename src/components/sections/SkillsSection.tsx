'use client'

import { motion } from '@/components/ui/LazyMotion'

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Research & Analysis',
      icon: 'fas fa-microscope',
      skills: [
        { name: 'Statistical Modeling', level: 90 },
        { name: 'Spatial Analysis', level: 85 },
        { name: 'Data Visualization', level: 88 },
        { name: 'Research Design', level: 92 }
      ]
    },
    {
      title: 'Technical Skills',
      icon: 'fas fa-code',
      skills: [
        { name: 'R Programming', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'GIS/Remote Sensing', level: 88 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Environmental Science',
      icon: 'fas fa-leaf',
      skills: [
        { name: 'Climate Science', level: 92 },
        { name: 'Environmental Health', level: 88 },
        { name: 'Sustainability', level: 85 },
        { name: 'Policy Analysis', level: 80 }
      ]
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
          Skills & Expertise
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Technical and research capabilities developed through academic work and practical application
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <i className={`${category.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    <span className="text-sm text-emerald-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="bg-gradient-to-r from-emerald-400 to-blue-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
