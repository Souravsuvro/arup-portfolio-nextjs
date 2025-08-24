import { NextResponse } from 'next/server'
import { ClimateData, ClimateHotspot } from '@/types'

const climateData: ClimateData[] = [
  { year: 2020, temperature: 14.9, co2: 414, seaLevel: 21.6, precipitation: 1050 },
  { year: 2021, temperature: 15.0, co2: 416, seaLevel: 21.8, precipitation: 1045 },
  { year: 2022, temperature: 15.1, co2: 418, seaLevel: 22.0, precipitation: 1040 },
  { year: 2023, temperature: 15.2, co2: 420, seaLevel: 22.2, precipitation: 1035 },
  { year: 2024, temperature: 15.3, co2: 422, seaLevel: 22.4, precipitation: 1030 }
]

const hotspots: ClimateHotspot[] = [
  {
    id: "1",
    name: "Bangladesh Coastal Region",
    lat: 22.3569,
    lng: 91.7832,
    type: "Sea Level Rise",
    severity: "high",
    description: "Coastal Bangladesh faces severe sea level rise, affecting millions of people and agricultural land.",
    impact: "15 million people at risk by 2050",
    data: { temperature: 26.5, precipitation: 2540, seaLevel: 3.2, co2: 420 }
  },
  {
    id: "2",
    name: "Arctic Ice Sheet",
    lat: 71.0,
    lng: -8.0,
    type: "Ice Melting",
    severity: "critical",
    description: "Rapid Arctic ice melting contributes to global sea level rise and ecosystem disruption.",
    impact: "Ice loss rate: 280 billion tons/year",
    data: { temperature: -2.1, precipitation: 400, seaLevel: 0, co2: 420 }
  },
  {
    id: "3",
    name: "Amazon Rainforest",
    lat: -3.4653,
    lng: -62.2159,
    type: "Deforestation",
    severity: "high",
    description: "Deforestation and climate change threaten the Amazon's role as a carbon sink.",
    impact: "17% of forest lost since 1970",
    data: { temperature: 27.2, precipitation: 2300, seaLevel: 0, co2: 420 }
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
  const startYear = searchParams.get('startYear')
  const endYear = searchParams.get('endYear')

  if (type === 'hotspots') {
    const severity = searchParams.get('severity')
    let filteredHotspots = hotspots

    if (severity) {
      filteredHotspots = hotspots.filter(h => h.severity === severity)
    }

    return NextResponse.json({
      hotspots: filteredHotspots,
      total: filteredHotspots.length
    })
  }

  // Default to climate data
  let filteredData = climateData

  if (startYear) {
    filteredData = filteredData.filter(d => d.year >= parseInt(startYear))
  }

  if (endYear) {
    filteredData = filteredData.filter(d => d.year <= parseInt(endYear))
  }

  return NextResponse.json({
    data: filteredData,
    total: filteredData.length,
    latest: filteredData[filteredData.length - 1]
  })
}
