// Placeholder: attempt to call Google Trends API; fallback to heuristic
export async function assessDemand(idea: string): Promise<number> {
  const words = idea.split(/\s+/).length
  return Math.min(9, Math.max(1, Math.round(words / 1.5)))
}
