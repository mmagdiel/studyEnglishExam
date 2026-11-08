import type { GrammarTopic } from "../../types/grammar";
import { mergePacks } from "./defineTopic";
import { modalWould } from "./modal-would";
import { modalWould2 } from "./modal-would-2";

/**
 * Registry of all topics, in display order.
 *
 * - New topic: create `<topic-id>.ts` with `defineTopic(...)` and add it to `baseTopics`.
 * - More exercises for an existing topic: create a file with
 *   `defineTopicPack(baseTopic, {...})` and add it to `packs`.
 */
const baseTopics: readonly GrammarTopic[] = [modalWould];
const packs = [modalWould2];

export const topics: readonly GrammarTopic[] = mergePacks(baseTopics, packs);

export function getTopicById(id: string): GrammarTopic | undefined {
  return topics.find((topic) => topic.id === id);
}
