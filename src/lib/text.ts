export function shuffleArray<T>(array: readonly T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
  }
  return shuffled;
}

const normalize = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .trim();

/** Rough similarity percentage between two strings (bag-of-words approach). */
export function calculateSimilarity(str1: string, str2: string): number {
  const words1 = normalize(str1).split(/\s+/).filter(Boolean);
  const words2 = normalize(str2).split(/\s+/).filter(Boolean);

  if (words1.length === 0 || words2.length === 0) return 0;

  let matchCount = 0;
  const usedWords2 = new Set<number>();

  for (const w1 of words1) {
    const index2 = words2.findIndex((w2, i) => w1 === w2 && !usedWords2.has(i));
    if (index2 !== -1) {
      matchCount++;
      usedWords2.add(index2);
    }
  }

  const maxWords = Math.max(words1.length, words2.length);
  return Math.round((matchCount / maxWords) * 100);
}
