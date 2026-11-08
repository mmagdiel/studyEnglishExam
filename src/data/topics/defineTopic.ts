import type {
  CommunicativeGoal,
  GrammarTopic,
  ReadingQuestion,
  SpeakingSentence,
  WritingSentence,
} from "../../types/grammar";

/**
 * Identity helper that infers goal ids from `goals` only, so a typo in a
 * writing/speaking `goalId` is a compile error instead of silently widening
 * the union.
 */
export function defineTopic<const TGoalId extends string>(topic: {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly goals: readonly CommunicativeGoal<TGoalId>[];
  readonly reading: readonly ReadingQuestion[];
  readonly speaking: readonly SpeakingSentence<NoInfer<TGoalId>>[];
  readonly writing: readonly WritingSentence<NoInfer<TGoalId>>[];
}): GrammarTopic<TGoalId> {
  return topic;
}
