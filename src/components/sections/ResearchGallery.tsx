'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from '@/components/ui/LazyMotion'
import Image from 'next/image'

interface ResearchImage {
  id: number
  src: string
  title: string
  description: string
  location: string
  category: string
}

export function ResearchGallery() {
  const [selectedImage, setSelectedImage] = useState<ResearchImage | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const researchImages: ResearchImage[] = [
    {
      id: 1,
      src: '/research-image/Arup_Koyra_Nouka.jpg',
      title: 'Traditional Fishing Boats in Koyra',
      description: 'Local fishing boats (nouka) used by coastal communities for their daily livelihood activities. These traditional vessels represent the deep connection between the community and marine resources.',
      location: 'Koyra, Bangladesh',
      category: 'livelihood'
    },
    {
      id: 2,
      src: '/research-image/Koyra_Broken_house.jpg',
      title: 'Climate-Induced Housing Damage',
      description: 'Damaged housing structures showing the impact of extreme weather events and sea-level rise on coastal communities. This illustrates the vulnerability of local infrastructure to climate change.',
      location: 'Koyra, Bangladesh',
      category: 'infrastructure'
    },
    {
      id: 3,
      src: '/research-image/Koyra_Broken_road.jpg',
      title: 'Deteriorated Rural Infrastructure',
      description: 'Broken roads and pathways demonstrating how climate impacts affect transportation and connectivity in coastal villages, limiting access to essential services.',
      location: 'Koyra, Bangladesh',
      category: 'infrastructure'
    },
    {
      id: 4,
      src: '/research-image/Koyra_Salinity_intrusion.jpg',
      title: 'Salinity Intrusion Impact',
      description: 'Visual evidence of saltwater intrusion affecting agricultural lands and freshwater sources, a critical challenge for food security and water availability in coastal areas.',
      location: 'Koyra, Bangladesh',
      category: 'environment'
    },
    {
      id: 5,
      src: '/research-image/Koyra_community_research.jpg',
      title: 'Community-Based Research',
      description: 'Field research activities involving local community members, showcasing participatory research methods and community engagement in climate vulnerability studies.',
      location: 'Koyra, Bangladesh',
      category: 'research'
    },
    {
      id: 6,
      src: '/research-image/Koyra_muddy_road.jpg',
      title: 'Rural Transportation Challenges',
      description: 'Muddy and waterlogged roads during monsoon season, highlighting transportation difficulties that affect access to healthcare, education, and markets.',
      location: 'Koyra, Bangladesh',
      category: 'infrastructure'
    },
    {
      id: 7,
      src: '/research-image/Koyra_women_fishing.jpg',
      title: 'Women in Coastal Livelihoods',
      description: 'Women engaged in fishing activities, representing gender dimensions of climate adaptation and the important role of women in coastal livelihood strategies.',
      location: 'Koyra, Bangladesh',
      category: 'livelihood'
    }
  ]

  const categories = [
    { key: 'all', label: 'All Research' },
    { key: 'livelihood', label: 'Livelihoods' },
    { key: 'infrastructure', label: 'Infrastructure' },
    { key: 'environment', label: 'Environment' },
    { key: 'research', label: 'Field Research' }
  ]

  const filteredImages = filter === 'all' 
    ? researchImages 
    : researchImages.filter(img => img.category === filter)

  const openModal = (image: ResearchImage) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="w-full bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Research Gallery
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Visual documentation from field research in coastal Bangladesh, showcasing climate vulnerability and community resilience
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.key
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500/90 text-white text-xs font-medium rounded-full">
                      {categories.find(cat => cat.key === image.category)?.label}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <i className="fas fa-expand text-white text-sm"></i>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-emerald-400 text-sm mb-2">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{image.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {image.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No results message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">No research images found for this category.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-96">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-emerald-400 text-sm mb-4">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{selectedImage.location}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {selectedImage.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {selectedImage.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30">
                      {categories.find(cat => cat.key === selectedImage.category)?.label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
