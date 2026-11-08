import type {
  CommunicativeGoal,
  GrammarTopic,
  ReadingQuestion,
  SpeakingSentence,
  TopicPack,
  WritingSentence,
} from "../../types/grammar";

/**
 * Identity helper that infers goal ids from `goals` only, so a typo in a
 * reading/writing/speaking `goalId` is a compile error instead of silently
 * widening the union.
 */
export function defineTopic<const TGoalId extends string>(topic: {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly goals: readonly CommunicativeGoal<TGoalId>[];
  readonly reading: readonly ReadingQuestion<NoInfer<TGoalId>>[];
  readonly speaking: readonly SpeakingSentence<NoInfer<TGoalId>>[];
  readonly writing: readonly WritingSentence<NoInfer<TGoalId>>[];
}): GrammarTopic<TGoalId> {
  return topic;
}

/**
 * Declares extra exercises for an existing topic in a separate file.
 * `goalId`s must be goals of `topic`, otherwise it's a compile error.
 */
export function defineTopicPack<TGoalId extends string>(
  topic: GrammarTopic<TGoalId>,
  pack: Omit<TopicPack<NoInfer<TGoalId>>, "topicId">,
): TopicPack<TGoalId> {
  return { topicId: topic.id, ...pack };
}

/** Appends each pack's exercises to the topic whose id it targets. */
export function mergePacks(
  topics: readonly GrammarTopic[],
  packs: readonly TopicPack[],
): GrammarTopic[] {
  for (const pack of packs) {
    if (!topics.some((t) => t.id === pack.topicId)) {
      throw new Error(`Topic pack targets unknown topic "${pack.topicId}"`);
    }
  }
  return topics.map((topic) => {
    const own = packs.filter((p) => p.topicId === topic.id);
    if (own.length === 0) return topic;
    return {
      ...topic,
      reading: [...topic.reading, ...own.flatMap((p) => p.reading ?? [])],
      speaking: [...topic.speaking, ...own.flatMap((p) => p.speaking ?? [])],
      writing: [...topic.writing, ...own.flatMap((p) => p.writing ?? [])],
    };
  });
}
