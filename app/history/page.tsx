"use client"
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function HistoryPage() {
  const { data } = useSWR('/api/history', fetcher)

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4">History</h1>
      <ul className="space-y-3">
        {data?.data?.map((item: any) => (
          <li key={item._id} className="card">
            <div className="text-sm text-slate-500">{new Date(item.createdAt).toLocaleString()}</div>
            <div className="font-medium mt-1">{item.idea}</div>
            <div className="text-xs mt-2 text-slate-600">Viability: {item.scores?.viability}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}
