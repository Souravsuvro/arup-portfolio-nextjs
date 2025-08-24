'use client'

import { motion } from '@/components/ui/LazyMotion'

export function ResearchMethodology() {
  const methodologies = [
    {
      title: 'Spatial Analysis',
      icon: 'fas fa-map',
      description: 'Geographic Information Systems (GIS) and spatial statistics to analyze environmental and health data patterns across different geographic scales.',
      tools: ['ArcGIS', 'QGIS', 'R Spatial', 'PostGIS']
    },
    {
      title: 'Statistical Modeling',
      icon: 'fas fa-chart-line',
      description: 'Advanced statistical methods including regression analysis, time series analysis, and machine learning techniques for data-driven insights.',
      tools: ['R', 'Python', 'STATA', 'SPSS']
    },
    {
      title: 'Remote Sensing',
      icon: 'fas fa-satellite',
      description: 'Integration of satellite imagery and earth observation data to monitor environmental changes and their impacts on human populations.',
      tools: ['Google Earth Engine', 'MODIS', 'Landsat', 'Sentinel']
    },
    {
      title: 'Survey Integration',
      icon: 'fas fa-poll',
      description: 'Combining demographic and health survey data with environmental datasets to understand climate-health relationships.',
      tools: ['DHS Data', 'Census Data', 'Health Surveys', 'Climate Indices']
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
          Research Methodology
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Interdisciplinary approaches combining environmental science, statistics, and public health methods
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {methodologies.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center">
                <i className={`${method.icon} text-white text-lg`}></i>
              </div>
              <h3 className="text-xl font-bold text-white">{method.title}</h3>
            </div>

            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              {method.description}
            </p>

            <div>
              <h4 className="text-emerald-400 text-sm font-semibold mb-2">Tools & Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {method.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-md border border-emerald-500/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Research Process Flow */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Research Process</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Data Collection', desc: 'Gather environmental and health datasets' },
            { step: '2', title: 'Integration', desc: 'Combine spatial and temporal data sources' },
            { step: '3', title: 'Analysis', desc: 'Apply statistical and spatial methods' },
            { step: '4', title: 'Insights', desc: 'Generate actionable findings' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {item.step}
              </div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
