import type { GrammarTopic } from "../../types/grammar";
import { modalWould } from "./modal-would";

/**
 * Registry of all topics, in display order.
 * To add a topic: create `<topic-id>.ts` with `defineTopic(...)` and append it here.
 */
export const topics: readonly GrammarTopic[] = [modalWould];

export function getTopicById(id: string): GrammarTopic | undefined {
  return topics.find((topic) => topic.id === id);
}
