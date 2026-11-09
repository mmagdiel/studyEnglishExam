import { defineTopicPack } from "./defineTopic";
import { pastPerfect } from "./past-perfect";

/**
 * "Structures" exercises for the past perfect simple and continuous: identify
 * the form, then its purpose. Grouped as contrast sets — past simple vs. past
 * perfect, and simple vs. continuous.
 */
export const pastPerfectStructures = defineTopicPack(pastPerfect, {
  structures: [
    // --- the story from the goal ---
    {
      sentence: "I was a little late, so when I arrived at his house, he had already left.",
      highlight: "he had already left",
      structure: "had + already + past participle",
      distractors: [
        "had + past participle + already + object",
        "was + already + verb-ing",
        "past simple + already",
      ],
      goalId: "earlier",
      explanation:
        "'already' goes between 'had' and the past participle. Ali left before the speaker arrived. (Note: 'arrive at' a place — ✗ 'arrive to'.)",
    },
    {
      sentence: "When I got to the bar, I realised I hadn't brought my wallet.",
      highlight: "hadn't brought",
      structure: "hadn't + past participle",
      distractors: [
        "didn't + past participle",
        "hadn't + base verb",
        "wasn't + verb-ing",
      ],
      goalId: "cause",
      explanation:
        "The forgotten wallet happened earlier and explains the problem at the bar.",
    },

    // --- past simple vs. past perfect ---
    {
      sentence: "When we got to the party, Maria left.",
      highlight: "When we got to the party, Maria left",
      structure: "When + past simple, + past simple",
      distractors: [
        "When + past simple, + had + past participle",
        "When + had + past participle, + past simple",
        "When + past simple, + had been + verb-ing",
      ],
      goalId: "earlier",
      explanation:
        "Two past simple verbs = sequence: we arrived, then Maria left (maybe because we arrived!). Compare with 'Maria had left' (she was already gone).",
    },
    {
      sentence: "When we got to the party, Maria had left.",
      highlight: "Maria had left",
      structure: "When + past simple, + had + past participle",
      distractors: [
        "When + past simple, + past simple",
        "When + past simple, + was + verb-ing",
        "When + past simple, + have + past participle",
      ],
      goalId: "earlier",
      explanation:
        "The past perfect sends us back: Maria left before we got there.",
    },
    {
      sentence: "By the time the ambulance arrived, the man had stopped breathing.",
      highlight: "By the time the ambulance arrived, the man had stopped",
      structure: "By the time + past simple, + had + past participle",
      distractors: [
        "By the time + had + past participle, + past simple",
        "By the time + past simple, + past simple",
        "By the time + past simple, + have + past participle",
      ],
      goalId: "earlier",
      explanation:
        "'By the time' + past simple marks the later moment; the past perfect shows what was already complete.",
    },
    {
      sentence: "After I had paid the bill, I left the restaurant.",
      highlight: "After I had paid the bill",
      structure: "After + had + past participle, + past simple",
      distractors: [
        "After + past simple, + had + past participle",
        "After + had been + past participle, + past simple",
        "After + was + verb-ing, + past simple",
      ],
      goalId: "earlier",
      explanation:
        "With 'after', the past perfect is optional ('After I paid…' is also fine) but it stresses that the first action was complete.",
    },

    // --- experience ---
    {
      sentence: "I had never been on a plane before that trip.",
      highlight: "had never been",
      structure: "had + never + past participle + before",
      distractors: [
        "hadn't + never + past participle",
        "have + never + past participle",
        "had + never + past simple",
      ],
      goalId: "experience",
      explanation:
        "The past version of 'I've never…': experiences up to a past moment. ✗ 'I hadn't never'.",
    },
    {
      sentence: "It was the first time I had tasted mango.",
      highlight: "It was the first time I had tasted",
      structure: "It was the first time + had + past participle",
      distractors: [
        "It was the first time + past simple",
        "It was the first time + have + past participle",
        "It's the first time + had + past participle",
      ],
      goalId: "experience",
      explanation:
        "'It was the first time' → past perfect. 'It's the first time' → present perfect.",
    },

    // --- duration: continuous vs. state verbs ---
    {
      sentence: "We had been driving for six hours when the car broke down.",
      highlight: "had been driving for six hours",
      structure: "had been + verb-ing + for + period",
      distractors: [
        "had + verb-ing + for + period",
        "have been + verb-ing + for + period",
        "was + been + verb-ing + for + period",
      ],
      goalId: "duration",
      explanation:
        "had been + verb-ing = an activity in progress up to a past moment (the breakdown).",
    },
    {
      sentence: "She had been working at the bank since 2010 when she got promoted.",
      highlight: "had been working at the bank since 2010",
      structure: "had been + verb-ing + since + starting point",
      distractors: [
        "had been + verb-ing + for + starting point",
        "has been + verb-ing + since + starting point",
        "was + verb-ing + since + starting point",
      ],
      goalId: "duration",
      explanation: "'since' + the starting point of an activity that lasted until a past moment.",
    },
    {
      sentence: "I had known her for ten years when we got married.",
      highlight: "had known her for ten years",
      structure: "state verb: had + past participle + for + period",
      distractors: [
        "state verb: had been + verb-ing + for + period",
        "past simple + for + period",
        "have + past participle + for + period",
      ],
      goalId: "duration",
      explanation:
        "'know' is a state verb, so no continuous form. ✗ 'I had been knowing her'.",
    },

    // --- cause: simple (completed) vs. continuous (long activity) ---
    {
      sentence: "His clothes were dirty because he had been playing in the mud.",
      highlight: "because he had been playing",
      structure: "past result + because + had been + verb-ing",
      distractors: [
        "past result + because + had + past participle",
        "past result + because + was + verb-ing",
        "had been + verb-ing + for + period",
      ],
      goalId: "cause",
      explanation:
        "A long activity before a past moment explains its visible effect (dirty clothes).",
    },
    {
      sentence: "She was upset because she had failed her driving test.",
      highlight: "because she had failed",
      structure: "past result + because + had + past participle",
      distractors: [
        "past result + because + had been + verb-ing",
        "past result + because + past continuous",
        "had + never + past participle + before",
      ],
      goalId: "cause",
      explanation:
        "A single completed action (failing the test) explains her past feeling — so the simple form.",
    },
    {
      sentence: "I had been reading for hours, and I had read half the book.",
      highlight: "had read half the book",
      structure: "had + past participle + quantity (how much)",
      distractors: [
        "had been + verb-ing + quantity",
        "had been + verb-ing + for + period",
        "past simple + quantity",
      ],
      goalId: "duration",
      explanation:
        "Continuous = how long (for hours). Simple = how much was completed (half the book).",
    },
  ],
});
