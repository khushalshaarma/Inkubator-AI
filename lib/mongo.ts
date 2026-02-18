import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ''

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

/**
 * Global is used here to maintain a cached connection across hot reloads in development.
 * This prevents connections growing exponentially during API route usage.
 */
let cached: { conn: typeof mongoose | null } = (global as any)._mongo || { conn: null }

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }
  const conn = await mongoose.connect(MONGODB_URI)
  cached.conn = conn
  ;(global as any)._mongo = cached
  return conn
}
