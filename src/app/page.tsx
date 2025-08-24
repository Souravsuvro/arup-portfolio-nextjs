import { HeroSection } from '@/components/sections/HeroSection'
import dynamic from 'next/dynamic'

// Lazy load non-critical sections
const QuickAbout = dynamic(() => import('@/components/sections/QuickAbout').then(mod => ({ default: mod.QuickAbout })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/20 rounded-xl" />
})

const FeaturedResearch = dynamic(() => import('@/components/sections/FeaturedResearch').then(mod => ({ default: mod.FeaturedResearch })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/20 rounded-xl" />
})

const RecentPublications = dynamic(() => import('@/components/sections/RecentPublications').then(mod => ({ default: mod.RecentPublications })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/20 rounded-xl" />
})

const QuickStats = dynamic(() => import('@/components/sections/QuickStats').then(mod => ({ default: mod.QuickStats })), {
  loading: () => <div className="h-64 animate-pulse bg-slate-800/20 rounded-xl" />
})

const ConferenceAttended = dynamic(() => import('@/components/sections/ConferenceAttended').then(mod => ({ default: mod.ConferenceAttended })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/20 rounded-xl" />
})

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="pb-20 mt-20 md:pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickAbout />
        <QuickStats />
        <FeaturedResearch />
        <ConferenceAttended maxItems={3} />
        <RecentPublications />
      </div>
    </div>
  )
}
