import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { NextResponse } from 'next/server'

const handler = NextAuth({
  providers: [
    GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID || '', clientSecret: process.env.GOOGLE_CLIENT_SECRET || '' }),
    EmailProvider({ server: process.env.EMAIL_SERVER || '', from: process.env.EMAIL_FROM || '' }),
  ],
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
})

export async function GET(req: Request) {
  return handler(req as any)
}

export async function POST(req: Request) {
  return handler(req as any)
}
