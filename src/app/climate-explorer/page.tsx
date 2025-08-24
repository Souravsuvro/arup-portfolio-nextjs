import { Metadata } from 'next'
import { ClimateExplorerContainer } from '@/components/sections/ClimateExplorerContainer'

export const metadata: Metadata = {
  title: 'Climate Explorer',
  description: 'Interactive Climate Data Explorer - Visualize global climate data, temperature trends, and environmental hotspots',
}

export default function ClimateExplorerPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClimateExplorerContainer />
      </div>
    </div>
  )
}
