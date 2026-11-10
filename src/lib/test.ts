import type {
  CommunicativeGoal,
  GrammarTopic,
  ReadingQuestion,
  SpeakingSentence,
  StructureExercise,
  WritingSentence,
} from "../types/grammar";
import { shuffleArray } from "./text";

/** Number of exercises in one test. */
export const TEST_LENGTH = 12;
/** Mistakes allowed before the test fails: the test ends when hearts reach 0. */
export const MAX_HEARTS = 3;

export type TestItem =
  | { readonly kind: "read"; readonly question: ReadingQuestion }
  | {
      readonly kind: "structure";
      readonly exercise: StructureExercise;
      /** The source topic's goals, used as the purpose options. */
      readonly goals: readonly CommunicativeGoal[];
    }
  | { readonly kind: "write"; readonly sentence: WritingSentence }
  | { readonly kind: "speak"; readonly sentence: SpeakingSentence };

/** Every exercise of every topic, flattened. Topic identity is dropped on purpose: the test doesn't reveal it. */
export function buildPool(topics: readonly GrammarTopic[]): TestItem[] {
  return topics.flatMap((topic): TestItem[] => [
    ...topic.reading.map((question) => ({ kind: "read" as const, question })),
    ...topic.structures.map((exercise) => ({
      kind: "structure" as const,
      exercise,
      goals: topic.goals,
    })),
    ...topic.writing.map((sentence) => ({ kind: "write" as const, sentence })),
    ...topic.speaking.map((sentence) => ({ kind: "speak" as const, sentence })),
  ]);
}

/** Picks `count` distinct items at random. */
export function pickItems(pool: readonly TestItem[], count: number): TestItem[] {
  return shuffleArray(pool).slice(0, count);
}

// --- Persisted score -------------------------------------------------------

const STATS_KEY = "grammar-master:test-stats";

/** Fired on `window` after a test is recorded, so the header score updates live. */
export const TEST_STATS_EVENT = "grammar-master:test-stats";

export interface TestStats {
  /** Tests completed with hearts left — this is the overall score. */
  readonly passed: number;
  /** Every finished test, passed or failed (starts at 0, +1 per test). */
  readonly completed: number;
}

const EMPTY_STATS: TestStats = { passed: 0, completed: 0 };

const count = (value: unknown) => (Number.isFinite(value) ? Number(value) : 0);

/** Reads the score from this browser. Storage can be missing or blocked, so this never throws. */
export function loadTestStats(): TestStats {
  try {
    const raw = window.localStorage.getItem(STATS_KEY);
    if (!raw) return EMPTY_STATS;
    // `attempted` is the field's earlier name; keep counts saved before the rename.
    const parsed = JSON.parse(raw) as Partial<TestStats> & { attempted?: number };
    return {
      passed: count(parsed.passed),
      completed: count(parsed.completed ?? parsed.attempted),
    };
  } catch {
    return EMPTY_STATS;
  }
}

/** Records one finished test and returns the updated score. */
export function recordTestResult(passed: boolean): TestStats {
  const prev = loadTestStats();
  const next: TestStats = {
    passed: prev.passed + (passed ? 1 : 0),
    completed: prev.completed + 1,
  };
  try {
    window.localStorage.setItem(STATS_KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable (private mode, blocked): the score just isn't kept.
  }
  window.dispatchEvent(new CustomEvent<TestStats>(TEST_STATS_EVENT, { detail: next }));
  return next;
}
