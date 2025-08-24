'use client'

import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface LazyMotionWrapperProps {
  children: ReactNode
}

export function LazyMotionWrapper({ children }: LazyMotionWrapperProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}

// Optimized motion component that only loads DOM animations
export { m as motion, AnimatePresence }
