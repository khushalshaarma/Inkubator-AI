"use client"
"use client"
import { useState } from 'react'
import dynamic from 'next/dynamic'

const Gauge = dynamic(() => import('../../components/Gauge'), { ssr: false })

export default function DashboardPage() {
  const [idea, setIdea] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/validate', { method: 'POST', body: JSON.stringify({ idea }), headers: { 'Content-Type': 'application/json' } })
      const data = await res.json()
      setResult(data.result)
    } catch (e) {
      // handle
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={submit} className="lg:col-span-2 card">
          <label className="block text-sm font-medium mb-2">Your idea</label>
          <textarea className="w-full p-3 border rounded mb-3" value={idea} onChange={(e) => setIdea(e.target.value)} placeholder="Describe your startup idea" />
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-lg shadow" disabled={loading}>{loading ? 'Validating...' : 'Validate'}</button>
            <button type="button" className="px-4 py-2 border rounded">Reset</button>
          </div>
        </form>

        <aside className="card">
          <div className="text-sm text-slate-500">Viability</div>
          <div className="mt-4 flex items-center justify-center">
            <Gauge value={result?.scores?.viability ?? 45} />
          </div>
        </aside>
      </div>

      {result && (
        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card md:col-span-2">
            <h3 className="font-semibold mb-2">Scores</h3>
            <ul className="space-y-1 text-sm text-slate-600">
              <li>Demand: {result.scores.demand}</li>
              <li>Competition: {result.scores.competition}</li>
              <li>Scalability: {result.scores.scalability}</li>
              <li>Monetization: {result.scores.monetization}</li>
              <li>Problem Clarity: {result.scores.problemClarity}</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-2">Suggestions</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600">
              {result.suggestions.map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  )
}
