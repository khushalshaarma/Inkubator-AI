// Placeholder: in future call SERP API or other sources. Provide mock logic when missing.
export async function assessCompetition(idea: string): Promise<number> {
  // returns 0-10 (higher = more competition)
  const keywords = idea.split(/\s+/).length
  return Math.min(9, Math.max(1, Math.round(keywords / 2)))
}
