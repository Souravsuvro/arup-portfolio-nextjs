import { NextResponse } from 'next/server'
import { Publication } from '@/types'

const publications: Publication[] = [
  {
    id: '1',
    title: 'Climate Stressors and Health Outcomes in Coastal Bangladesh: A Spatial-Temporal Analysis',
    authors: ['Arup Ratan Paul', 'Dr. Jane Smith', 'Dr. Michael Johnson'],
    journal: 'Environmental Health Perspectives',
    year: 2024,
    type: 'Research Article',
    doi: '10.1289/EHP12345',
    abstract: 'This study investigates the relationship between climate stressors and health outcomes in coastal Bangladesh using spatial-temporal analysis methods.',
    featured: true,
    tags: ['climate-health', 'spatial-analysis', 'bangladesh'],
    pdfUrl: '/documents/publications/paul-2024-climate-health.pdf'
  },
  {
    id: '2',
    title: 'Migration Patterns in Response to Environmental Change: Evidence from South Asia',
    authors: ['Arup Ratan Paul', 'Dr. Sarah Wilson'],
    journal: 'Global Environmental Change',
    year: 2024,
    type: 'Research Article',
    doi: '10.1016/j.gloenvcha.2024.102567',
    abstract: 'Analysis of migration patterns driven by environmental changes in South Asian coastal communities.',
    featured: true,
    tags: ['migration', 'environmental-change', 'south-asia'],
    pdfUrl: '/documents/publications/paul-2024-migration.pdf'
  },
  {
    id: '3',
    title: 'Integrating Satellite Data with Health Surveys: Methodological Considerations',
    authors: ['Arup Ratan Paul', 'Dr. Robert Chen', 'Dr. Lisa Anderson'],
    journal: 'International Journal of Environmental Research',
    year: 2023,
    type: 'Methodology Paper',
    doi: '10.1007/s11356-023-27890-1',
    abstract: 'Methodological framework for integrating satellite imagery with demographic health survey data.',
    featured: false,
    tags: ['methodology', 'satellite-data', 'health-surveys'],
    pdfUrl: '/documents/publications/paul-2023-methodology.pdf'
  },
  {
    id: '4',
    title: 'Environmental Justice and Climate Vulnerability in Urban Bangladesh',
    authors: ['Arup Ratan Paul', 'Dr. Maria Rodriguez'],
    journal: 'Environmental Research Letters',
    year: 2023,
    type: 'Research Article',
    doi: '10.1088/1748-9326/ace123',
    abstract: 'Examining environmental justice implications of climate vulnerability in urban Bangladeshi communities.',
    featured: false,
    tags: ['environmental-justice', 'climate-vulnerability', 'urban-planning'],
    pdfUrl: '/documents/publications/paul-2023-justice.pdf'
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const year = searchParams.get('year')
  const featured = searchParams.get('featured')

  let filteredPublications = publications

  if (category) {
    filteredPublications = filteredPublications.filter(pub => 
      pub.tags?.some(tag => tag.includes(category.toLowerCase()))
    )
  }

  if (year) {
    filteredPublications = filteredPublications.filter(pub => 
      pub.year === parseInt(year)
    )
  }

  if (featured === 'true') {
    filteredPublications = filteredPublications.filter(pub => pub.featured)
  }

  return NextResponse.json({
    publications: filteredPublications,
    total: filteredPublications.length,
    filters: {
      category,
      year,
      featured
    }
  })
}

export async function POST() {
  // This would handle creating new publications (admin functionality)
  return NextResponse.json({ message: 'Method not implemented' }, { status: 501 })
}
