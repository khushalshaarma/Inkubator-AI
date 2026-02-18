"use client"
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="bg-white/70 backdrop-blur sticky top-0 z-10">
        <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
          <div className="font-bold">Startup Idea Validator AI</div>
          <nav className="space-x-3 text-sm text-slate-600">
            <a href="/dashboard">Dashboard</a>
            <a href="/history">History</a>
            <a href="/login">Login</a>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-4">{children}</main>
    </div>
  )
}
