/**
 * Domain types for grammar topics.
 *
 * Each topic is generic over its goal ids (`TGoalId`) so that exercises which
 * reference a goal (e.g. `WritingSentence.goalId`) are checked against the
 * goals actually declared in that topic. Use `defineTopic` from
 * `src/data/topics/defineTopic.ts` to get that inference for free.
 */

export type Skill = "reading" | "writing" | "speaking" | "listening";

/** A communicative function the grammar point serves (wish, offer, permission…). */
export interface CommunicativeGoal<TGoalId extends string = string> {
  readonly id: TGoalId;
  readonly title: string;
  /** Spanish gloss shown next to the title. */
  readonly translation: string;
  readonly description: string;
  readonly examples: readonly string[];
}

/** Multiple-choice question about the intent of a sentence. */
export interface ReadingQuestion {
  readonly sentence: string;
  readonly question: string;
  readonly options: readonly string[];
  /** Index into `options`. */
  readonly correctIndex: number;
}

/** Sentence used for listening + shadowing practice. */
export interface SpeakingSentence<TGoalId extends string = string> {
  readonly text: string;
  readonly goalId?: TGoalId;
}

/** Sentence the learner rebuilds from shuffled words. */
export interface WritingSentence<TGoalId extends string = string> {
  readonly text: string;
  readonly goalId: TGoalId;
}

export interface GrammarTopic<TGoalId extends string = string> {
  /** URL-safe unique id, matches the data file name (e.g. "modal-would"). */
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly goals: readonly CommunicativeGoal<TGoalId>[];
  readonly reading: readonly ReadingQuestion[];
  readonly speaking: readonly SpeakingSentence<TGoalId>[];
  readonly writing: readonly WritingSentence<TGoalId>[];
}
