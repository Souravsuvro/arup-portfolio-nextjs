'use client'

import { motion } from '@/components/ui/LazyMotion'

export function ResearchOverview() {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          Research
        </h1>
        <p className="text-xl text-slate-300 max-w-4xl mx-auto">
          Exploring climate-health relationships through innovative data analysis and interdisciplinary approaches to understand environmental impacts on human well-being
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Research Focus</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed text-justify">
            <p>
              My research investigates the complex relationships between climate stressors and human health outcomes, with a particular focus on vulnerable populations in coastal Bangladesh.
            </p>

            <p>
              I integrate demographic and health survey data with satellite imagery and climate indices, employing spatial and temporal statistical methods to uncover patterns of environmental vulnerability and community resilience.
            </p>
            
            <p>
              This interdisciplinary approach combines environmental science, public health, and social research to inform evidence-based policy recommendations for climate adaptation strategies.
            </p>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { icon: 'fas fa-thermometer-half', title: 'Climate Stressors', desc: 'Extreme heat & weather patterns' },
            { icon: 'fas fa-heartbeat', title: 'Health Outcomes', desc: 'Population health impacts' },
            { icon: 'fas fa-people-arrows', title: 'Migration Patterns', desc: 'Environmental displacement' },
            { icon: 'fas fa-satellite', title: 'Remote Sensing', desc: 'Satellite data integration' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center">
                <i className={`${item.icon} text-white text-lg`}></i>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
