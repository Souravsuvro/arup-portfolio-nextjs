import { GameQuestion } from '@/types'

export const gameQuestions: GameQuestion[] = [
  {
    id: 1,
    question: "What is the primary greenhouse gas responsible for climate change?",
    options: [
      "Oxygen (O₂)",
      "Carbon Dioxide (CO₂)",
      "Nitrogen (N₂)",
      "Argon (Ar)"
    ],
    correctAnswer: 1,
    explanation: "Carbon dioxide (CO₂) is the primary greenhouse gas contributing to climate change, mainly from burning fossil fuels.",
    difficulty: "easy",
    category: "Climate Science"
  },
  {
    id: 2,
    question: "Which of the following is NOT a renewable energy source?",
    options: [
      "Solar power",
      "Wind power",
      "Natural gas",
      "Hydroelectric power"
    ],
    correctAnswer: 2,
    explanation: "Natural gas is a fossil fuel and therefore not renewable. Solar, wind, and hydroelectric are all renewable energy sources.",
    difficulty: "easy",
    category: "Energy"
  },
  {
    id: 3,
    question: "What percentage of the Earth's surface is covered by oceans?",
    options: [
      "50%",
      "61%",
      "71%",
      "81%"
    ],
    correctAnswer: 2,
    explanation: "Approximately 71% of the Earth's surface is covered by oceans, making them crucial for climate regulation.",
    difficulty: "medium",
    category: "Earth Systems"
  },
  {
    id: 4,
    question: "Which region is most vulnerable to sea level rise?",
    options: [
      "Mountain regions",
      "Desert areas",
      "Coastal low-lying areas",
      "Forest regions"
    ],
    correctAnswer: 2,
    explanation: "Coastal low-lying areas are most vulnerable to sea level rise, affecting millions of people worldwide.",
    difficulty: "easy",
    category: "Climate Impacts"
  },
  {
    id: 5,
    question: "What is the main cause of ocean acidification?",
    options: [
      "Plastic pollution",
      "Oil spills",
      "Absorption of CO₂ from the atmosphere",
      "Industrial waste"
    ],
    correctAnswer: 2,
    explanation: "Ocean acidification occurs when oceans absorb CO₂ from the atmosphere, forming carbonic acid and lowering pH.",
    difficulty: "medium",
    category: "Ocean Science"
  },
  {
    id: 6,
    question: "Which climate phenomenon causes periodic warming of sea surface temperatures in the Pacific?",
    options: [
      "La Niña",
      "El Niño",
      "Arctic Oscillation",
      "Monsoon"
    ],
    correctAnswer: 1,
    explanation: "El Niño is a climate pattern characterized by warming of sea surface temperatures in the central and eastern Pacific Ocean.",
    difficulty: "medium",
    category: "Climate Patterns"
  },
  {
    id: 7,
    question: "What is the approximate current atmospheric CO₂ concentration?",
    options: [
      "320 ppm",
      "380 ppm",
      "420 ppm",
      "460 ppm"
    ],
    correctAnswer: 2,
    explanation: "Current atmospheric CO₂ levels are approximately 420 parts per million, the highest in human history.",
    difficulty: "hard",
    category: "Climate Data"
  },
  {
    id: 8,
    question: "Which sector contributes the most to global greenhouse gas emissions?",
    options: [
      "Transportation",
      "Agriculture",
      "Energy production",
      "Buildings"
    ],
    correctAnswer: 2,
    explanation: "Energy production (electricity, heat, and other energy uses) is the largest contributor to global greenhouse gas emissions.",
    difficulty: "medium",
    category: "Emissions"
  },
  {
    id: 9,
    question: "What is permafrost?",
    options: [
      "Permanently frozen ground",
      "Glacier ice",
      "Sea ice",
      "Snow that never melts"
    ],
    correctAnswer: 0,
    explanation: "Permafrost is permanently frozen ground that stores large amounts of carbon and is vulnerable to climate change.",
    difficulty: "medium",
    category: "Cryosphere"
  },
  {
    id: 10,
    question: "Which gas has the highest global warming potential per molecule?",
    options: [
      "Carbon dioxide (CO₂)",
      "Methane (CH₄)",
      "Nitrous oxide (N₂O)",
      "Sulfur hexafluoride (SF₆)"
    ],
    correctAnswer: 3,
    explanation: "Sulfur hexafluoride (SF₆) has the highest global warming potential, about 23,500 times more potent than CO₂.",
    difficulty: "hard",
    category: "Greenhouse Gases"
  },
  {
    id: 11,
    question: "What is the main driver of deforestation in tropical regions?",
    options: [
      "Urban development",
      "Agriculture and livestock",
      "Mining",
      "Tourism"
    ],
    correctAnswer: 1,
    explanation: "Agriculture and livestock farming are the primary drivers of deforestation in tropical regions worldwide.",
    difficulty: "medium",
    category: "Land Use"
  },
  {
    id: 12,
    question: "Which renewable energy source has the fastest growth rate globally?",
    options: [
      "Hydroelectric",
      "Wind",
      "Solar",
      "Geothermal"
    ],
    correctAnswer: 2,
    explanation: "Solar energy has the fastest growth rate globally, with costs declining rapidly and deployment accelerating.",
    difficulty: "medium",
    category: "Energy Transition"
  }
]
