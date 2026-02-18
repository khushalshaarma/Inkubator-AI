import { NextResponse } from 'next/server'
import { connectToDatabase } from '../../../lib/mongo'
import Validation from '../../../models/Validation'

export async function GET() {
  try {
    await connectToDatabase()
    const docs = await Validation.find().sort({ createdAt: -1 }).limit(50).lean()
    return NextResponse.json({ data: docs })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
