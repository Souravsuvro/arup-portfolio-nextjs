import { Metadata } from 'next'
import { ResearchOverview, ResearchProjects, ResearchMethodology } from '@/components/sections'
import { ResearchGallery } from '@/components/sections/ResearchGallery'

export const metadata: Metadata = {
  title: 'Research',
  description: 'Environmental research projects focusing on climate-health relationships and data analysis',
}

export default function ResearchPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResearchOverview />
        <ResearchProjects />
      </div>
      <ResearchGallery />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResearchMethodology />
      </div>
    </div>
  )
}
