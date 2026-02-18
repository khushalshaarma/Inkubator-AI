export type Scoring = {
  competition: number
  demand: number
  scalability: number
  monetization: number
  problemClarity: number
}

export type ViabilityResult = {
  scores: Scoring & { viability: number }
  verdict: 'poor' | 'average' | 'good' | 'excellent'
  color: string
  swot: { strength: string[]; weakness: string[]; opportunity: string[]; threat: string[] }
  suggestions: string[]
}
