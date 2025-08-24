import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'
import { LazyMotionWrapper } from '@/components/ui/LazyMotion'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arup Ratan Paul - Environmental Research Scientist',
  description: 'Graduate Research & Teaching Assistant at University of Colorado Boulder, specializing in environmental studies and climate research.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-white antialiased`}>
        <LazyMotionWrapper>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LazyMotionWrapper>
        <Analytics />
      </body>
    </html>
  )
}
