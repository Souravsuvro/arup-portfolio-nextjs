'use client'

import { motion } from '@/components/ui/LazyMotion'

export function PublicationsStats() {
  const stats = [
    {
      icon: 'fas fa-book-open',
      title: 'Peer-Reviewed Articles',
      count: '6',
      description: 'Published in high-impact journals'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Conference Papers',
      count: '4',
      description: 'Presented at international conferences'
    },
    {
      icon: 'fas fa-quote-right',
      title: 'Total Citations',
      count: '150+',
      description: 'Academic impact and recognition'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'H-Index',
      count: '8',
      description: 'Research productivity measure'
    }
  ]

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Publication Metrics
        </h2>
        <p className="text-lg text-slate-400">
          Academic contributions and research impact
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center">
              <i className={`${stat.icon} text-white text-2xl`}></i>
            </div>
            
            <div className="text-3xl font-bold text-white mb-2">{stat.count}</div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">{stat.title}</h3>
            <p className="text-sm text-slate-400">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
