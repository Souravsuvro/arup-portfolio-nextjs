import { Metadata } from 'next'
import { AboutHero, ExperienceTimeline, SkillsSection } from '@/components/sections'
import { ConferenceAttended } from '@/components/sections/ConferenceAttended'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Arup Ratan Paul - Environmental Research Scientist and PhD student at University of Colorado Boulder',
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHero />
        <ExperienceTimeline />
        <ConferenceAttended />
        <SkillsSection />
      </div>
    </div>
  )
}
