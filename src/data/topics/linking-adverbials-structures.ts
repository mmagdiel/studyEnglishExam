import { defineTopicPack } from "./defineTopic";
import { linkingAdverbials } from "./linking-adverbials";

/**
 * "Structures" exercises for linking adverbials and linking verbs:
 * identify the form, then the idea it adds.
 * Grouped as contrast sets — similar-looking forms that serve different goals.
 */
export const linkingAdverbialsStructures = defineTopicPack(linkingAdverbials, {
  structures: [
    // --- position of linking adverbials ---
    {
      sentence: "The flat is cheap. In addition, it's close to the station.",
      highlight: "In addition,",
      structure: "Sentence. + Linking adverbial, + clause",
      distractors: [
        "clause, + linking adverbial + clause (comma splice)",
        "clause + too / as well",
        "Linking adverbial + clause (no comma)",
      ],
      goalId: "addition",
      explanation:
        "'In addition' starts a new sentence and is followed by a comma. It adds another point.",
    },
    {
      sentence: "She plays tennis, and she swims as well.",
      highlight: "swims as well",
      structure: "clause + too / as well",
      distractors: [
        "Sentence. + Linking adverbial, + clause",
        "also + clause (at the start)",
        "clause; + however, + clause",
      ],
      goalId: "addition",
      explanation:
        "'too' and 'as well' go at the end of the clause. ✗ 'As well, she swims.'",
    },
    {
      sentence: "Dogs need exercise. Likewise, cats need time to play.",
      highlight: "Likewise,",
      structure: "Sentence. + Linking adverbial, + clause",
      distractors: [
        "clause + too / as well",
        "clause, + so + clause",
        "while + clause, + clause",
      ],
      goalId: "parallel",
      explanation:
        "Same position as 'In addition', but 'Likewise' adds an idea that works in the same way — a parallel.",
    },
    {
      sentence: "It was raining; however, we went to the beach.",
      highlight: "; however,",
      structure: "clause; + however, + clause",
      distractors: [
        "clause, + however + clause",
        "clause + however.",
        "clause, + so + clause",
      ],
      goalId: "contrast",
      explanation:
        "'however' can join two clauses only with a semicolon (or a full stop). ✗ 'It was raining, however we went…'",
    },
    {
      sentence: "It was raining, so we stayed inside.",
      highlight: ", so",
      structure: "clause, + so + clause",
      distractors: [
        "clause; + however, + clause",
        "Sentence. + So, + clause",
        "clause + too / as well",
      ],
      goalId: "result",
      explanation:
        "'so' is a conjunction: it joins two clauses directly with a comma and introduces the result. Compare with the contrast in '…; however, we went to the beach'.",
    },
    {
      sentence: "The bridge was closed. Therefore, we had to take another road.",
      highlight: "Therefore,",
      structure: "Sentence. + Linking adverbial, + clause",
      distractors: [
        "clause, + therefore + clause",
        "clause + too / as well",
        "while + clause, + clause",
      ],
      goalId: "result",
      explanation:
        "'Therefore' is more formal than 'so' and usually starts a new sentence.",
    },
    {
      sentence: "First, open the app. Next, choose your language.",
      highlight: "Next,",
      structure: "Sequencer, + imperative",
      distractors: [
        "clause; + however, + clause",
        "clause + too / as well",
        "clause, + so + clause",
      ],
      goalId: "sequence",
      explanation:
        "'First', 'Next', 'Then', 'After that', 'Finally' order the steps of a process.",
    },
    {
      sentence: "While I was cleaning, my dad was cooking.",
      highlight: "While I was cleaning,",
      structure: "while + clause, + clause",
      distractors: [
        "Sequencer, + imperative",
        "clause, + so + clause",
        "Sentence. + Linking adverbial, + clause",
      ],
      goalId: "simultaneous",
      explanation:
        "'while' joins two actions happening at the same time. With separate sentences, use 'Meanwhile,'.",
    },
    {
      sentence: "She studies law now. Previously, she worked in a shop.",
      highlight: "Previously,",
      structure: "Sentence. + Linking adverbial, + clause",
      distractors: [
        "while + clause, + clause",
        "clause + too / as well",
        "Sequencer, + imperative",
      ],
      goalId: "simultaneous",
      explanation:
        "'Previously' refers back to an earlier time, before the situation in the first sentence.",
    },

    // --- linking verbs: subject + linking verb + adjective/noun ---
    {
      sentence: "The film had bad reviews. However, it seemed interesting to me.",
      highlight: "seemed interesting",
      structure: "linking verb + adjective",
      distractors: [
        "linking verb + adverb (-ly)",
        "action verb + object + adverb (-ly)",
        "linking verb + to + base verb",
      ],
      goalId: "contrast",
      explanation:
        "'seem', 'look', 'sound', 'feel', 'taste', 'smell' describe the subject, so they take an adjective. ✗ 'seemed interestingly'.",
    },
    {
      sentence: "She practised every day. As a result, she became a great pianist.",
      highlight: "became a great pianist",
      structure: "linking verb + noun phrase",
      distractors: [
        "linking verb + adverb (-ly)",
        "action verb + object + adverb (-ly)",
        "become + to + noun",
      ],
      goalId: "result",
      explanation:
        "'become' and 'be' can link the subject to a noun: she = a great pianist. Here it's the result of practising.",
    },
    {
      sentence: "The weather got colder. At the same time, the days grew shorter.",
      highlight: "grew shorter",
      structure: "linking verb of change + adjective",
      distractors: [
        "linking verb + adverb (-ly)",
        "grow + object + adjective",
        "clause + too / as well",
      ],
      goalId: "simultaneous",
      explanation:
        "'get', 'grow', 'turn' and 'become' express a change of state + adjective. Both changes happened during the same period.",
    },
    {
      sentence: "The soup smelled great. Moreover, it tasted delicious.",
      highlight: "tasted delicious",
      structure: "linking verb + adjective",
      distractors: [
        "linking verb + adverb (-ly)",
        "action verb + object + adverb (-ly)",
        "linking verb of change + noun",
      ],
      goalId: "addition",
      explanation:
        "Sense verbs used as linking verbs take adjectives: tasted delicious (✗ deliciously). 'Moreover' adds a second positive point.",
    },
    {
      sentence: "Children feel safe with routines. Similarly, adults stay calm when life is organised.",
      highlight: "stay calm",
      structure: "linking verb + adjective",
      distractors: [
        "linking verb + adverb (-ly)",
        "action verb + object + adverb (-ly)",
        "while + clause, + clause",
      ],
      goalId: "parallel",
      explanation:
        "'stay' and 'remain' are linking verbs meaning 'continue to be' + adjective. 'Similarly' draws the parallel between children and adults.",
    },
  ],
});
