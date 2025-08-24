'use client'

import { useState } from 'react'
import { motion } from '@/components/ui/LazyMotion'

export function PublicationsList() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const publications = [
    {
      id: 1,
      title: 'Climate Stressors and Health Outcomes in Coastal Bangladesh: A Spatial-Temporal Analysis',
      authors: ['Arup Ratan Paul', 'Dr. Jane Smith', 'Dr. Michael Johnson'],
      journal: 'Environmental Health Perspectives',
      year: 2024,
      type: 'Research Article',
      category: 'climate-health',
      doi: '10.1289/EHP12345',
      abstract: 'This study investigates the relationship between climate stressors and health outcomes in coastal Bangladesh using spatial-temporal analysis methods.',
      featured: true,
      citations: 45
    },
    {
      id: 2,
      title: 'Migration Patterns in Response to Environmental Change: Evidence from South Asia',
      authors: ['Arup Ratan Paul', 'Dr. Sarah Wilson'],
      journal: 'Global Environmental Change',
      year: 2024,
      type: 'Research Article',
      category: 'migration',
      doi: '10.1016/j.gloenvcha.2024.102567',
      abstract: 'Analysis of migration patterns driven by environmental changes in South Asian coastal communities.',
      featured: true,
      citations: 32
    },
    {
      id: 3,
      title: 'Integrating Satellite Data with Health Surveys: Methodological Considerations',
      authors: ['Arup Ratan Paul', 'Dr. Robert Chen', 'Dr. Lisa Anderson'],
      journal: 'International Journal of Environmental Research',
      year: 2023,
      type: 'Methodology Paper',
      category: 'methodology',
      doi: '10.1007/s11356-023-27890-1',
      abstract: 'Methodological framework for integrating satellite imagery with demographic health survey data.',
      featured: false,
      citations: 28
    },
    {
      id: 4,
      title: 'Environmental Justice and Climate Vulnerability in Urban Bangladesh',
      authors: ['Arup Ratan Paul', 'Dr. Maria Rodriguez'],
      journal: 'Environmental Research Letters',
      year: 2023,
      type: 'Research Article',
      category: 'environmental-justice',
      doi: '10.1088/1748-9326/ace123',
      abstract: 'Examining environmental justice implications of climate vulnerability in urban Bangladeshi communities.',
      featured: false,
      citations: 19
    },
    {
      id: 5,
      title: 'Salinity Intrusion and Agricultural Productivity: A Remote Sensing Approach',
      authors: ['Arup Ratan Paul', 'Dr. Ahmed Hassan', 'Dr. Jennifer Lee'],
      journal: 'Agricultural Systems',
      year: 2022,
      type: 'Research Article',
      category: 'agriculture',
      doi: '10.1016/j.agsy.2022.103456',
      abstract: 'Remote sensing analysis of salinity intrusion impacts on agricultural productivity in coastal regions.',
      featured: false,
      citations: 41
    },
    {
      id: 6,
      title: 'Statistical Methods for Climate-Health Research: A Review',
      authors: ['Arup Ratan Paul'],
      journal: 'Statistics in Medicine',
      year: 2022,
      type: 'Review Article',
      category: 'methodology',
      doi: '10.1002/sim.9456',
      abstract: 'Comprehensive review of statistical methods used in climate-health research applications.',
      featured: false,
      citations: 67
    }
  ]

  const filters = [
    { id: 'all', label: 'All Publications', count: publications.length },
    { id: 'climate-health', label: 'Climate-Health', count: publications.filter(p => p.category === 'climate-health').length },
    { id: 'migration', label: 'Migration', count: publications.filter(p => p.category === 'migration').length },
    { id: 'methodology', label: 'Methodology', count: publications.filter(p => p.category === 'methodology').length },
    { id: 'environmental-justice', label: 'Environmental Justice', count: publications.filter(p => p.category === 'environmental-justice').length }
  ]

  const filteredPublications = selectedFilter === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === selectedFilter)

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          All Publications
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </motion.div>

      <div className="space-y-6">
        {filteredPublications.map((pub, index) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white hover:text-emerald-400 transition-colors">
                    {pub.title}
                  </h3>
                  {pub.featured && (
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-md border border-emerald-500/30">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-sm mb-3">
                  {pub.authors.join(', ')}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
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
                  <span className="flex items-center gap-1">
                    <i className="fas fa-quote-right"></i>
                    {pub.citations} citations
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {pub.abstract}
                </p>

                <div className="text-xs text-emerald-400 font-mono">
                  DOI: {pub.doi}
                </div>
              </div>

              <div className="flex flex-col gap-2 lg:ml-6">
                <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm rounded-lg hover:scale-105 transition-all duration-200">
                  <i className="fas fa-external-link-alt mr-2"></i>
                  View Paper
                </button>
                <button className="px-4 py-2 bg-slate-700/50 hover:bg-blue-500/20 text-slate-300 hover:text-blue-400 text-sm rounded-lg border border-slate-600 hover:border-blue-500/30 transition-all duration-200">
                  <i className="fas fa-quote-left mr-2"></i>
                  Cite
                </button>
                <button className="px-4 py-2 bg-slate-700/50 hover:bg-purple-500/20 text-slate-300 hover:text-purple-400 text-sm rounded-lg border border-slate-600 hover:border-purple-500/30 transition-all duration-200">
                  <i className="fas fa-download mr-2"></i>
                  PDF
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredPublications.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 text-lg">No publications found for the selected filter.</div>
        </div>
      )}
    </section>
  )
}
