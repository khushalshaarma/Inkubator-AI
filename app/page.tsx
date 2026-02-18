import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-between mb-12">
        <h1 className="text-3xl font-bold">Startup Idea Validator AI</h1>
        <nav className="space-x-4">
          <Link href="/login" className="text-sm text-slate-600">Login</Link>
          <Link href="/dashboard" className="text-sm font-medium">Dashboard</Link>
        </nav>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Validate your startup idea in seconds</h2>
          <p className="text-slate-600 mb-6">AI-driven scoring, market signals, and actionable suggestions to improve your idea.</p>
          <Link href="/dashboard" className="inline-block bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-5 py-3 rounded-lg shadow">Try it now</Link>
        </div>
        <div className="card glass">
          <h3 className="font-medium mb-2">How it works</h3>
          <ol className="list-decimal pl-5 text-slate-600">
            <li>Enter your idea</li>
            <li>AI evaluates competition, demand, monetization</li>
            <li>Receive a viability score and suggestions</li>
          </ol>
        </div>
      </section>
    </main>
  )
}
