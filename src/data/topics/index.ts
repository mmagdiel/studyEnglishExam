import type { GrammarTopic } from "../../types/grammar";
import { mergePacks } from "./defineTopic";
import { modalWould } from "./modal-would";
import { modalWould2 } from "./modal-would-2";
import { modalWouldStructures } from "./modal-would-structures";
import { prepositions } from "./prepositions";
import { prepositionsStructures } from "./prepositions-structures";
import { adjectives } from "./adjectives";
import { adjectivesStructures } from "./adjectives-structures";

/**
 * Registry of all topics, in display order.
 *
 * - New topic: create `<topic-id>.ts` with `defineTopic(...)` and add it to `baseTopics`.
 * - More exercises for an existing topic: create a file with
 *   `defineTopicPack(baseTopic, {...})` and add it to `packs`.
 */
const baseTopics: readonly GrammarTopic[] = [modalWould, prepositions, adjectives];
const packs = [
  modalWould2,
  modalWouldStructures,
  prepositionsStructures,
  adjectivesStructures,
];

export const topics: readonly GrammarTopic[] = mergePacks(baseTopics, packs);

export function getTopicById(id: string): GrammarTopic | undefined {
  return topics.find((topic) => topic.id === id);
}
