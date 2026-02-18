import fetch from 'node-fetch'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || ''

if (!OPENAI_API_KEY) {
  // We'll allow local development with mock logic but warn in runtime
}

export type AiResponse = {
  competitionScore: number
  demandScore: number
  scalabilityScore: number
  monetizationScore: number
  problemClarityScore: number
  swot: { strength: string[]; weakness: string[]; opportunity: string[]; threat: string[] }
  suggestions: string[]
}

export async function analyzeIdeaWithAI(idea: string): Promise<AiResponse> {
  if (!OPENAI_API_KEY) {
    // Intelligent mock fallback
    const base = Math.min(8, Math.max(2, Math.round(idea.length / 20)))
    return {
      competitionScore: Math.max(1, Math.min(9, base + 1)),
      demandScore: Math.max(1, Math.min(9, base + 2)),
      scalabilityScore: Math.max(1, Math.min(9, base)),
      monetizationScore: Math.max(1, Math.min(9, base - 1)),
      problemClarityScore: Math.max(1, Math.min(9, Math.round(base * 0.9))),
      swot: { strength: ['Clear problem'], weakness: ['Early stage'], opportunity: ['Large market'], threat: ['Competitors'] },
      suggestions: ['Run customer interviews', 'Build an MVP', 'Validate pricing'],
    }
  }

  // Call OpenAI-like API (structured response expected)
  const prompt = `Analyze the startup idea and return a JSON with competitionScore,demandScore,scalabilityScore,monetizationScore,problemClarityScore (0-10), swot arrays and suggestions array. Idea: "${idea}"`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 600,
      temperature: 0.2,
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`AI API error: ${res.status} ${text}`)
  }

  const data = await res.json()
  const content = data?.choices?.[0]?.message?.content || data?.choices?.[0]?.text || ''

  // Try to extract JSON from content
  const jsonMatch = content.match(/\{[\s\S]*\}/)
  let parsed: any = {}
  if (jsonMatch) {
    try {
      parsed = JSON.parse(jsonMatch[0])
    } catch (e) {
      throw new Error('Failed to parse AI JSON response')
    }
  } else {
    throw new Error('AI response did not contain JSON')
  }

  return {
    competitionScore: parsed.competitionScore,
    demandScore: parsed.demandScore,
    scalabilityScore: parsed.scalabilityScore,
    monetizationScore: parsed.monetizationScore,
    problemClarityScore: parsed.problemClarityScore,
    swot: parsed.swot,
    suggestions: parsed.suggestions,
  }
}
