import { ClimateData, ClimateHotspot } from '@/types'

export const climateHotspots: ClimateHotspot[] = [
  {
    id: "1",
    name: "Bangladesh Coastal Region",
    lat: 22.3569,
    lng: 91.7832,
    type: "Sea Level Rise",
    severity: "high",
    description: "Coastal Bangladesh faces severe sea level rise, affecting millions of people and agricultural land.",
    impact: "15 million people at risk by 2050",
    data: {
      temperature: 26.5,
      precipitation: 2540,
      seaLevel: 3.2,
      co2: 420
    }
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
    data: {
      temperature: -2.1,
      precipitation: 400,
      seaLevel: 0,
      co2: 420
    }
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
    data: {
      temperature: 27.2,
      precipitation: 2300,
      seaLevel: 0,
      co2: 420
    }
  },
  {
    id: "4",
    name: "Sahel Region",
    lat: 15.0,
    lng: 0.0,
    type: "Drought",
    severity: "high",
    description: "Increasing drought and desertification affect agriculture and water security.",
    impact: "50 million people affected",
    data: {
      temperature: 29.8,
      precipitation: 200,
      seaLevel: 0,
      co2: 420
    }
  },
  {
    id: "5",
    name: "Maldives",
    lat: 3.2028,
    lng: 73.2207,
    type: "Sea Level Rise",
    severity: "critical",
    description: "Low-lying island nation facing existential threat from sea level rise.",
    impact: "80% of land less than 1m above sea level",
    data: {
      temperature: 28.0,
      precipitation: 1972,
      seaLevel: 3.4,
      co2: 420
    }
  },
  {
    id: "6",
    name: "Great Barrier Reef",
    lat: -18.2871,
    lng: 147.6992,
    type: "Ocean Acidification",
    severity: "high",
    description: "Coral bleaching due to rising ocean temperatures and acidification.",
    impact: "50% of coral lost since 1995",
    data: {
      temperature: 25.5,
      precipitation: 2010,
      seaLevel: 0,
      co2: 420
    }
  },
  {
    id: "7",
    name: "California Wildfire Zone",
    lat: 36.7783,
    lng: -119.4179,
    type: "Extreme Weather",
    severity: "high",
    description: "Increasing frequency and intensity of wildfires due to climate change.",
    impact: "2 million acres burned annually",
    data: {
      temperature: 16.3,
      precipitation: 563,
      seaLevel: 0,
      co2: 420
    }
  },
  {
    id: "8",
    name: "Himalayan Glaciers",
    lat: 28.0,
    lng: 84.0,
    type: "Ice Melting",
    severity: "high",
    description: "Glacial retreat threatens water security for billions in South Asia.",
    impact: "1.9 billion people depend on glacier water",
    data: {
      temperature: -5.2,
      precipitation: 1000,
      seaLevel: 0,
      co2: 420
    }
  }
]

export const globalClimateData: ClimateData[] = [
  {
    year: 2020,
    temperature: 14.9,
    co2: 414,
    seaLevel: 21.6,
    precipitation: 1050
  },
  {
    year: 2021,
    temperature: 15.0,
    co2: 416,
    seaLevel: 21.8,
    precipitation: 1045
  },
  {
    year: 2022,
    temperature: 15.1,
    co2: 418,
    seaLevel: 22.0,
    precipitation: 1040
  },
  {
    year: 2023,
    temperature: 15.2,
    co2: 420,
    seaLevel: 22.2,
    precipitation: 1035
  },
  {
    year: 2024,
    temperature: 15.3,
    co2: 422,
    seaLevel: 22.4,
    precipitation: 1030
  }
]

export const climateDataLayers = [
  {
    id: 'temperature',
    name: 'Global Temperature',
    description: 'Average global temperature anomalies',
    unit: '°C',
    color: '#ef4444'
  },
  {
    id: 'precipitation',
    name: 'Precipitation',
    description: 'Annual precipitation patterns',
    unit: 'mm',
    color: '#3b82f6'
  },
  {
    id: 'co2',
    name: 'CO₂ Levels',
    description: 'Atmospheric carbon dioxide concentration',
    unit: 'ppm',
    color: '#f59e0b'
  },
  {
    id: 'seaLevel',
    name: 'Sea Level Rise',
    description: 'Global mean sea level change',
    unit: 'cm',
    color: '#06b6d4'
  }
]
