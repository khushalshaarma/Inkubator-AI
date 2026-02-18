"use client"
import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold">SI</div>
          <div>
            <div className="text-lg font-semibold">Startup Idea Validator AI</div>
            <div className="text-xs text-slate-500">AI-driven idea validation</div>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <Link href="/dashboard" className="text-sm px-3 py-2 rounded-md bg-slate-100/60 hover:bg-slate-100">Dashboard</Link>
          <Link href="/history" className="text-sm px-3 py-2 rounded-md">History</Link>
          <Link href="/login" className="text-sm px-3 py-2 rounded-md bg-sky-600 text-white">Login</Link>
        </nav>
      </div>
    </header>
  )
}
