import mongoose, { Schema, Document } from 'mongoose'

export interface IValidation extends Document {
  userId?: string
  idea: string
  createdAt: Date
  scores: {
    competition: number
    demand: number
    scalability: number
    monetization: number
    problemClarity: number
    viability: number
  }
  swot: { strength: string[]; weakness: string[]; opportunity: string[]; threat: string[] }
  suggestions: string[]
}

const ValidationSchema = new Schema<IValidation>({
  userId: { type: String },
  idea: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  scores: {
    competition: Number,
    demand: Number,
    scalability: Number,
    monetization: Number,
    problemClarity: Number,
    viability: Number,
  },
  swot: { type: Object },
  suggestions: [String],
})

export default mongoose.models.Validation || mongoose.model<IValidation>('Validation', ValidationSchema)
