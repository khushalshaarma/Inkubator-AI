import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'

export const metadata = {
  title: 'Startup Idea Validator AI',
  description: 'Validate startup ideas with AI-driven scoring and insights',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
          <Header />
          <div className="app-container">{children}</div>
        </div>
      </body>
    </html>
  )
}
