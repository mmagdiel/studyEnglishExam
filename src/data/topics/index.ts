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
import { presentPerfect } from "./present-perfect";
import { presentPerfectStructures } from "./present-perfect-structures";
import { presentPerfectContinuous } from "./present-perfect-continuous";
import { presentPerfectContinuousStructures } from "./present-perfect-continuous-structures";
import { pastPerfect } from "./past-perfect";
import { pastPerfectStructures } from "./past-perfect-structures";
import { futureForms } from "./future-forms";
import { futureFormsStructures } from "./future-forms-structures";
import { futurePerfectContinuous } from "./future-perfect-continuous";
import { futurePerfectContinuousStructures } from "./future-perfect-continuous-structures";
import { usedTo } from "./used-to";
import { usedToStructures } from "./used-to-structures";
import { modalVerbs1 } from "./modal-verbs-1";
import { modalVerbs1Structures } from "./modal-verbs-1-structures";
import { modalVerbs2 } from "./modal-verbs-2";
import { modalVerbs2Structures } from "./modal-verbs-2-structures";
import { modalVerbs3 } from "./modal-verbs-3";
import { modalVerbs3Structures } from "./modal-verbs-3-structures";
import { tagQuestions } from "./tag-questions";
import { tagQuestionsStructures } from "./tag-questions-structures";

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
  presentPerfect,
  presentPerfectContinuous,
  pastPerfect,
  futureForms,
  futurePerfectContinuous,
  usedTo,
  modalVerbs1,
  modalVerbs2,
  modalVerbs3,
  tagQuestions,
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
  presentPerfectStructures,
  presentPerfectContinuousStructures,
  pastPerfectStructures,
  futureFormsStructures,
  futurePerfectContinuousStructures,
  usedToStructures,
  modalVerbs1Structures,
  modalVerbs2Structures,
  modalVerbs3Structures,
  tagQuestionsStructures,
];

export const topics: readonly GrammarTopic[] = mergePacks(baseTopics, packs);

export function getTopicById(id: string): GrammarTopic | undefined {
  return topics.find((topic) => topic.id === id);
}
