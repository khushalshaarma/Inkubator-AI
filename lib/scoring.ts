import { Scoring, ViabilityResult } from './types'

export function computeViability(scores: Scoring): ViabilityResult {
  // Ensure 0-10 scale for inputs
  const clamp = (v: number) => Math.max(0, Math.min(10, v))
  const competition = clamp(scores.competition)
  const demand = clamp(scores.demand)
  const scalability = clamp(scores.scalability)
  const monetization = clamp(scores.monetization)
  const problemClarity = clamp(scores.problemClarity)

  const viabilityRaw =
    demand * 0.35 + (10 - competition) * 0.25 + scalability * 0.2 + monetization * 0.1 + problemClarity * 0.1

  const viability = Math.round((viabilityRaw / 10) * 100)

  let verdict: ViabilityResult['verdict'] = 'poor'
  let color = 'red'
  if (viability >= 80) {
    verdict = 'excellent'
    color = 'green'
  } else if (viability >= 60) {
    verdict = 'good'
    color = 'lime'
  } else if (viability >= 40) {
    verdict = 'average'
    color = 'yellow'
  }

  const swot = {
    strength: [],
    weakness: [],
    opportunity: [],
    threat: [],
  }

  const suggestions: string[] = []

  // Simple deterministic advice based on scores
  if (demand < 5) suggestions.push('Validate demand via landing page and ad tests')
  if (competition > 7) suggestions.push('Differentiate with niche features or go-to-market')
  if (monetization < 4) suggestions.push('Explore alternative monetization models like SaaS or marketplace fees')
  if (problemClarity < 5) suggestions.push('Clarify the problem statement and target customer')
  if (scalability < 5) suggestions.push('Design architecture and unit economics for scale')

  return {
    scores: { competition, demand, scalability, monetization, problemClarity, viability },
    verdict,
    color,
    swot,
    suggestions,
  }
}
