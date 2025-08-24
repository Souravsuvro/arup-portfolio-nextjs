import { Metadata } from 'next'
import { ClimateGameContainer } from '@/components/sections/ClimateGameContainer'

export const metadata: Metadata = {
  title: 'Climate Game',
  description: 'Interactive Climate Knowledge Challenge - Test your understanding of environmental science and climate change',
}

export default function ClimateGamePage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClimateGameContainer />
      </div>
    </div>
  )
}
