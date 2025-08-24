import { Metadata } from 'next'
import { PublicationsHero } from '@/components/sections/PublicationsHero'
import { PublicationsList } from '@/components/sections/PublicationsList'
import { PublicationsStats } from '@/components/sections/PublicationsStats'

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Academic publications and research papers by Arup Ratan Paul on environmental science and climate-health relationships',
}

export default function PublicationsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PublicationsHero />
        <PublicationsStats />
        <PublicationsList />
      </div>
    </div>
  )
}
