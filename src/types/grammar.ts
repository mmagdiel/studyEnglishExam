/**
 * Domain types for grammar topics.
 *
 * Each topic is generic over its goal ids (`TGoalId`) so that exercises which
 * reference a goal (e.g. `WritingSentence.goalId`) are checked against the
 * goals actually declared in that topic. Use `defineTopic` from
 * `src/data/topics/defineTopic.ts` to get that inference for free.
 */

export type Skill =
  | "reading"
  | "writing"
  | "speaking"
  | "listening"
  | "structure";

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
export interface ReadingQuestion<TGoalId extends string = string> {
  readonly sentence: string;
  readonly question: string;
  readonly options: readonly string[];
  /** Index into `options`. */
  readonly correctIndex: number;
  /** Shown after the learner answers. */
  readonly explanation?: string;
  readonly goalId?: TGoalId;
}

/** Sentence used for listening + shadowing practice. */
export interface SpeakingSentence<TGoalId extends string = string> {
  readonly text: string;
  readonly goalId?: TGoalId;
  /** Spanish translation. */
  readonly translation?: string;
  /** Pronunciation tip (linking, stress, contractions…). */
  readonly phoneticFocus?: string;
}

/** Sentence the learner rebuilds from shuffled words. */
export interface WritingSentence<TGoalId extends string = string> {
  /** Scrambled by splitting on spaces, so punctuation stays attached to words. */
  readonly text: string;
  readonly goalId: TGoalId;
  /** Spanish translation, shown as a hint. */
  readonly translation?: string;
}

/**
 * Two-step analysis: identify the grammatical structure (form), then the
 * communicative purpose it serves (function). The purpose options are the
 * topic's goals, so the same form can be contrasted across purposes.
 */
export interface StructureExercise<TGoalId extends string = string> {
  readonly sentence: string;
  /** Exact substring of `sentence` that carries the structure; highlighted after answering. */
  readonly highlight: string;
  /** The correct form, e.g. "would rather + base verb + than". */
  readonly structure: string;
  /** Plausible but wrong forms, shown shuffled with `structure`. */
  readonly distractors: readonly string[];
  /** The purpose; must be one of the topic's goals. */
  readonly goalId: TGoalId;
  /** Shown after both steps are answered. */
  readonly explanation?: string;
}

export interface GrammarTopic<TGoalId extends string = string> {
  /** URL-safe unique id, matches the data file name (e.g. "modal-would"). */
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly goals: readonly CommunicativeGoal<TGoalId>[];
  readonly reading: readonly ReadingQuestion<TGoalId>[];
  readonly speaking: readonly SpeakingSentence<TGoalId>[];
  readonly writing: readonly WritingSentence<TGoalId>[];
  readonly structures: readonly StructureExercise<TGoalId>[];
}

/**
 * Extra exercises for an existing topic, kept in their own file.
 * Goal ids are checked against the base topic's goals.
 */
export interface TopicPack<TGoalId extends string = string> {
  readonly topicId: string;
  readonly reading?: readonly ReadingQuestion<TGoalId>[];
  readonly speaking?: readonly SpeakingSentence<TGoalId>[];
  readonly writing?: readonly WritingSentence<TGoalId>[];
  readonly structures?: readonly StructureExercise<TGoalId>[];
}
