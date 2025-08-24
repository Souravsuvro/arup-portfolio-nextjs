// TypeScript type definitions for Arup's Environmental Science Portfolio

import React from 'react'

export interface PersonalInfo {
  name: string
  title: string
  institution: string
  location: string
  email: string
  linkedin?: string
  bio: string
  avatar: string
}

export interface Experience {
  id: string
  title: string
  institution: string
  period: string
  description: string
  current: boolean
}

export interface Publication {
  id: string
  title: string
  authors: string[]
  journal: string
  year: number
  type: string
  doi?: string
  abstract?: string
  featured?: boolean
  tags?: string[]
  pdfUrl?: string
}

export interface ResearchProject {
  id: string
  title: string
  description: string
  status: 'ongoing' | 'completed' | 'planned'
  startDate?: string
  endDate?: string
  tags: string[]
  collaborators?: string[]
  funding?: string
  publications?: number[]
  featured?: boolean
}

export interface ClimateData {
  year: number
  temperature: number
  co2: number
  seaLevel: number
  precipitation: number
}

export interface ClimateHotspot {
  id: string
  name: string
  lat: number
  lng: number
  type: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  description: string
  impact: string
  data: {
    temperature: number
    precipitation: number
    seaLevel: number
    co2: number
  }
}

export interface GameQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
}

export interface GameState {
  currentQuestion: number
  score: number
  totalQuestions: number
  gameStarted: boolean
  gameCompleted: boolean
  answers: number[]
}

export interface Skill {
  name: string
  level: number
  category: 'technical' | 'research' | 'soft'
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface NavItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}
