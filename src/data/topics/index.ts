import type { GrammarTopic } from "../../types/grammar";
import { mergePacks } from "./defineTopic";
import { modalWould } from "./modal-would";
import { modalWould2 } from "./modal-would-2";
import { modalWouldStructures } from "./modal-would-structures";
import { prepositions } from "./prepositions";
import { prepositionsStructures } from "./prepositions-structures";
import { adjectives } from "./adjectives";
import { adjectivesStructures } from "./adjectives-structures";
import { adverbs } from "./adverbs";
import { adverbsStructures } from "./adverbs-structures";
import { linkingAdverbials } from "./linking-adverbials";
import { linkingAdverbialsStructures } from "./linking-adverbials-structures";
import { presentSimpleContinuous } from "./present-simple-continuous";
import { presentSimpleContinuousStructures } from "./present-simple-continuous-structures";
import { pastSimpleContinuous } from "./past-simple-continuous";
import { pastSimpleContinuousStructures } from "./past-simple-continuous-structures";

/**
 * Registry of all topics, in display order.
 *
 * - New topic: create `<topic-id>.ts` with `defineTopic(...)` and add it to `baseTopics`.
 * - More exercises for an existing topic: create a file with
 *   `defineTopicPack(baseTopic, {...})` and add it to `packs`.
 */
const baseTopics: readonly GrammarTopic[] = [
  modalWould,
  prepositions,
  adjectives,
  adverbs,
  linkingAdverbials,
  presentSimpleContinuous,
  pastSimpleContinuous,
];
const packs = [
  modalWould2,
  modalWouldStructures,
  prepositionsStructures,
  adjectivesStructures,
  adverbsStructures,
  linkingAdverbialsStructures,
  presentSimpleContinuousStructures,
  pastSimpleContinuousStructures,
];

export const topics: readonly GrammarTopic[] = mergePacks(baseTopics, packs);

export function getTopicById(id: string): GrammarTopic | undefined {
  return topics.find((topic) => topic.id === id);
}
