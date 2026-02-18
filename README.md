Inkubator AI
AI-Powered Startup Idea Validator

Inkubator AI is an intelligent validation platform that helps founders evaluate startup ideas before investing time and money.

It analyzes competition, market demand, and feasibility — then gives a viability score with actionable improvement suggestions.

🌍 Live Demo

Coming Soon (Deploy on Vercel)

🧠 What It Does

Enter your startup idea → Inkubator AI:

🔎 Analyzes market competition

📈 Estimates search demand

🎯 Calculates viability score (0–100)

🧩 Suggests improvements

💡 Identifies strengths & weaknesses

🛠 Tech Stack

Frontend: Next.js 14 (App Router)

Backend: Next.js API Routes

Styling: Tailwind CSS

AI Engine: OpenAI API

Deployment: Vercel

Language: TypeScript

🏗 Architecture Overview
User Input (Dashboard)
        ↓
/api/validate
        ↓
OpenAI Processing
        ↓
Scoring + Suggestions
        ↓
Results Dashboard


Fully serverless and optimized for Vercel deployment.

📦 Installation

Clone the repository:

git clone https://github.com/khushalshaarma/Inkubator-AI.git
cd Inkubator-AI


Install dependencies:

npm install


Create .env.local file:

OPENAI_API_KEY=your_api_key_here


Run development server:

npm run dev


Visit:

http://localhost:3000
