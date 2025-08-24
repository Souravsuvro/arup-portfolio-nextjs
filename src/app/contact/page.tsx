import { Metadata } from 'next'
import { ContactContainer } from '@/components/sections/ContactContainer'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Arup Ratan Paul - Environmental scientist and researcher specializing in climate change and public health',
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactContainer />
      </div>
    </div>
  )
}
