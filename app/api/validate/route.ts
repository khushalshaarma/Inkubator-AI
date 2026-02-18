import { NextResponse } from 'next/server'
import { analyzeIdeaWithAI } from '../../../lib/ai'
import { computeViability } from '../../../lib/scoring'
import { connectToDatabase } from '../../../lib/mongo'
import Validation from '../../../models/Validation'

type Body = { idea?: string }

export async function POST(request: Request) {
  try {
    const body: Body = await request.json()
    const idea = body.idea || ''
    if (!idea) return NextResponse.json({ error: 'Idea is required' }, { status: 400 })

    const ai = await analyzeIdeaWithAI(idea)

    const scores = {
      competition: ai.competitionScore,
      demand: ai.demandScore,
      scalability: ai.scalabilityScore,
      monetization: ai.monetizationScore,
      problemClarity: ai.problemClarityScore,
    }

    const result = computeViability(scores)

    // persist
    await connectToDatabase()
    const doc = new Validation({ idea, scores: result.scores, swot: result.swot, suggestions: result.suggestions })
    await doc.save()

    return NextResponse.json({ result })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
