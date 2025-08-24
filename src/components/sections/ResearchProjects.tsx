'use client'

import { motion } from '@/components/ui/LazyMotion'
import Link from 'next/link'

export function ResearchProjects() {
  const projects = [
    {
      id: 1,
      title: 'Extreme Heat and Infant Health in Bangladesh',
      description: 'Linking district-level climate indices with BDHS birth histories to examine how extreme heat affects infant mortality across different life stages.',
      status: 'ongoing',
      tags: ['Climate Change', 'Infant Health', 'Bangladesh', 'Climdex Indices'],
      funding: 'NIH-funded project',
      duration: '2024 - Present',
      collaborators: ['Research Assistant'],
      featured: true,
      methods: 'Logistic regression with clustered standard errors; Climdex indices'
    },
    {
      id: 2,
      title: 'Migration, Rural Land Use, and Community Resilience',
      description: 'Combining BEMS household survey data with MODIS and Sentinel imagery to study land-use transitions (paddy → shrimp farming) and their relationship with migration and resilience.',
      status: 'ongoing',
      tags: ['Migration', 'Land Use', 'Remote Sensing', 'Community Resilience'],
      funding: 'NSF-funded project',
      duration: '2024 - Present',
      collaborators: ['Research Assistant'],
      featured: true,
      methods: 'MODIS and Sentinel imagery analysis; BEMS household survey integration'
    },
    {
      id: 3,
      title: 'Vegetation Change and Infant Health in Coastal Bangladesh',
      description: 'Investigating how vegetation dynamics in coastal Bangladesh, observed through remote sensing, influence maternal and child health outcomes.',
      status: 'ongoing',
      tags: ['Vegetation Dynamics', 'Infant Health', 'Remote Sensing', 'Coastal Bangladesh'],
      funding: 'New project',
      duration: '2024 - Present',
      collaborators: ['Research Team'],
      featured: true,
      methods: 'Integration of vegetation indices (NDVI, EVI) with BDHS health data'
    },
    {
      id: 4,
      title: 'Environmental Justice in Urban Areas',
      description: 'Examining the disproportionate impacts of environmental hazards on vulnerable communities in urban settings through comprehensive spatial analysis.',
      status: 'completed',
      tags: ['Environmental Justice', 'Urban Studies', 'Social Equity', 'Policy'],
      funding: 'Graduate Research Fellowship',
      duration: '2022 - 2024',
      collaborators: ['Dr. Lisa Anderson', 'Dr. Sarah Wilson'],
      featured: false
    },
    {
      id: 5,
      title: 'Climate Adaptation Strategies',
      description: 'Developing evidence-based recommendations for climate adaptation policies in vulnerable coastal communities.',
      status: 'planned',
      tags: ['Policy Analysis', 'Adaptation', 'Community Resilience'],
      funding: 'Pending Grant Application',
      duration: '2025 - 2027',
      collaborators: ['To be determined'],
      featured: false
    }
  ]

  const previousResearch = [
    {
      id: 1,
      title: 'Vulnerability of the Climate-Sensitive Livelihoods of the Coastal People in Bangladesh',
      type: 'MA Thesis',
      institution: 'Texas Tech University',
      year: '2024',
      description: 'Household responses to climate-induced challenges such as salinity intrusion and livelihood loss.',
      approach: 'Qualitative fieldwork, including in-depth interviews and ethnographic observations',
      tags: ['Climate Vulnerability', 'Coastal Communities', 'Qualitative Research', 'Bangladesh']
    },
    {
      id: 2,
      title: 'Extreme Weather Events and the Coping Strategies of the Coastal People in the Southwestern Part of Bangladesh',
      type: 'MSS Thesis',
      institution: 'SUST',
      year: '2021',
      description: 'Mixed-methods study examining household-level adaptation strategies to cyclones and floods.',
      approach: 'Mixed-methods study examining household-level adaptation strategies to cyclones and floods',
      tags: ['Extreme Weather', 'Coping Strategies', 'Mixed Methods', 'Coastal Bangladesh']
    },
    {
      id: 3,
      title: 'Economic Empowerment Through Microcredit: Examining Its Impacts on Women\'s Fertility Choices and Behaviors',
      type: 'Undergraduate Monograph',
      institution: 'SUST',
      year: '2017',
      description: 'Quantitative analysis examining the relationship between microcredit access and women\'s reproductive decision-making.',
      approach: 'Quantitative analysis of household survey data',
      tags: ['Economic Empowerment', 'Microcredit', 'Women\'s Health', 'Quantitative Analysis']
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
          Research Projects
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Current and completed research initiatives exploring environmental impacts on human health and society
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                project.status === 'ongoing' 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : project.status === 'completed'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
              }`}>
                {project.status === 'ongoing' ? 'Ongoing' : project.status === 'completed' ? 'Completed' : 'Planned'}
              </span>
              {project.featured && (
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/30">
                  Featured
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <i className="fas fa-clock"></i>
                <span>{project.duration}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <i className="fas fa-dollar-sign"></i>
                <span>{project.funding}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <i className="fas fa-users"></i>
                <span>{project.collaborators.join(', ')}</span>
              </div>
              
              {project.methods && (
                <div className="flex items-start gap-2 text-sm text-slate-400">
                  <i className="fas fa-microscope mt-0.5"></i>
                  <span>{project.methods}</span>
                </div>
              )}
            </div>

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

            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm rounded-lg hover:scale-105 transition-all duration-200">
                <i className="fas fa-info-circle mr-2"></i>
                Learn More
              </button>
              {project.status === 'completed' && (
                <button className="px-4 py-2 bg-slate-700/50 hover:bg-blue-500/20 text-slate-300 hover:text-blue-400 text-sm rounded-lg border border-slate-600 hover:border-blue-500/30 transition-all duration-200">
                  <i className="fas fa-file-alt"></i>
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Previous Research Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20"
      >
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Previous Research
          </h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Completed thesis work and research projects from academic studies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {previousResearch.map((research, index) => (
            <motion.div
              key={research.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {research.type}
                </span>
                <span className="text-xs text-slate-400">{research.year}</span>
              </div>

              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                {research.title}
              </h4>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <i className="fas fa-university"></i>
                  <span>{research.institution}</span>
                </div>
                
                <div className="flex items-start gap-2 text-sm text-slate-400">
                  <i className="fas fa-microscope mt-0.5"></i>
                  <span>{research.approach}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {research.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {research.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-12"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25"
        >
          <i className="fas fa-handshake"></i>
          Collaborate With Me
        </Link>
      </motion.div>
    </section>
  )
}
