'use client'

import { motion } from '@/components/ui/LazyMotion'

export function PublicationsHero() {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          Publications
        </h1>
        <p className="text-xl text-slate-300 max-w-4xl mx-auto">
          Academic publications and research contributions to environmental science and climate-health studies
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">8+</div>
            <div className="text-slate-300">Published Papers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
            <div className="text-slate-300">Citations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
            <div className="text-slate-300">Research Areas</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
