import { NextResponse } from 'next/server'
import { ResearchProject } from '@/types'

const researchProjects: ResearchProject[] = [
  {
    id: '1',
    title: 'Climate Change and Public Health in Coastal Bangladesh',
    description: 'Investigating the complex relationships between climate stressors and health outcomes in vulnerable coastal communities using advanced spatial-temporal analysis methods.',
    status: 'ongoing',
    startDate: '2023-01',
    endDate: '2025-12',
    collaborators: ['University of Dhaka', 'Johns Hopkins Bloomberg School of Public Health'],
    tags: ['climate-health', 'spatial-analysis', 'bangladesh', 'public-health'],
    funding: 'NSF Climate Change and Human Health Grant',
    publications: [1, 2],
    featured: true
  },
  {
    id: '2',
    title: 'Environmental Migration Patterns in South Asia',
    description: 'Comprehensive analysis of migration patterns driven by environmental changes, focusing on displacement patterns and adaptation strategies.',
    status: 'ongoing',
    startDate: '2022-06',
    endDate: '2024-12',
    collaborators: ['International Organization for Migration', 'BRAC University'],
    tags: ['migration', 'environmental-change', 'adaptation', 'south-asia'],
    funding: 'World Bank Research Grant',
    publications: [2],
    featured: true
  },
  {
    id: '3',
    title: 'Satellite-Based Environmental Health Monitoring',
    description: 'Developing methodological frameworks for integrating satellite imagery with demographic health survey data for environmental health research.',
    status: 'completed',
    startDate: '2021-03',
    endDate: '2023-08',
    collaborators: ['NASA Goddard Space Flight Center', 'Harvard T.H. Chan School'],
    tags: ['satellite-data', 'methodology', 'environmental-health', 'remote-sensing'],
    funding: 'NASA Earth Science Division',
    publications: [3],
    featured: false
  },
  {
    id: '4',
    title: 'Urban Environmental Justice Assessment',
    description: 'Examining environmental justice implications of climate vulnerability in urban communities across Bangladesh.',
    status: 'completed',
    startDate: '2022-01',
    endDate: '2023-06',
    collaborators: ['Urban Studies Institute', 'Environmental Justice Coalition'],
    tags: ['environmental-justice', 'urban-planning', 'climate-vulnerability'],
    funding: 'Ford Foundation Grant',
    publications: [4],
    featured: false
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')
  const tag = searchParams.get('tag')
  const featured = searchParams.get('featured')

  let filteredProjects = researchProjects

  if (status) {
    filteredProjects = filteredProjects.filter(project => 
      project.status === status
    )
  }

  if (tag) {
    filteredProjects = filteredProjects.filter(project => 
      project.tags.includes(tag.toLowerCase())
    )
  }

  if (featured === 'true') {
    filteredProjects = filteredProjects.filter(project => project.featured)
  }

  return NextResponse.json({
    projects: filteredProjects,
    total: filteredProjects.length,
    filters: {
      status,
      tag,
      featured
    }
  })
}
