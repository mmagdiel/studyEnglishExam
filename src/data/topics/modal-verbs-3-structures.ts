import { defineTopicPack } from "./defineTopic";
import { modalVerbs3 } from "./modal-verbs-3";

/**
 * "Structures" exercises for modal verbs 3: identify the form, then its
 * purpose. Grouped as contrast sets — "must" for obligation vs. deduction,
 * mustn't vs. don't have to, and present vs. past deductions.
 */
export const modalVerbs3Structures = defineTopicPack(modalVerbs3, {
  structures: [
    // --- must: obligation vs. deduction ---
    {
      sentence: "I must be at the airport by six.",
      highlight: "must be at the airport by six",
      structure: "must + base verb (obligation)",
      distractors: [
        "must + be (deduction)",
        "must + to + base verb",
        "must have + past participle",
      ],
      goalId: "obligation",
      explanation:
        "The speaker is talking about their own necessity: it's important to be there. Compare with 'He must be at the airport by now' (deduction).",
    },
    {
      sentence: "He left two hours ago. He must be at the airport by now.",
      highlight: "He must be at the airport by now",
      structure: "must + be (deduction)",
      distractors: [
        "must + base verb (obligation)",
        "have to + base verb",
        "must have + past participle",
      ],
      goalId: "deduction",
      explanation:
        "Evidence (he left two hours ago) + 'must be' = I'm almost sure he's there.",
    },

    // --- must vs. have to ---
    {
      sentence: "In my school, students have to wear a uniform.",
      highlight: "have to wear",
      structure: "have to + base verb (external rule)",
      distractors: [
        "must + to + base verb",
        "have + base verb",
        "must have + past participle",
      ],
      goalId: "external",
      explanation:
        "The rule comes from the school — an obligation beyond the students' control.",
    },
    {
      sentence: "The road was closed, so we had to take a different route.",
      highlight: "had to take",
      structure: "had to + base verb (past obligation)",
      distractors: [
        "must have + past participle",
        "musted + base verb",
        "must + base verb",
      ],
      goalId: "external",
      explanation:
        "'must' has no past form, so use 'had to'. The circumstance (closed road) forced them.",
    },
    {
      sentence: "You'll have to show your passport at the border.",
      highlight: "'ll have to show",
      structure: "will have to + base verb",
      distractors: [
        "will must + base verb",
        "will has to + base verb",
        "will have + past participle",
      ],
      goalId: "external",
      explanation:
        "Future obligation from rules: 'will have to'. ✗ 'will must'.",
    },

    // --- mustn't vs. don't have to ---
    {
      sentence: "You mustn't open this door — the alarm will go off.",
      highlight: "mustn't open",
      structure: "mustn't + base verb (prohibition)",
      distractors: [
        "don't have to + base verb (no obligation)",
        "can't have + past participle",
        "mustn't + to + base verb",
      ],
      goalId: "prohibition",
      explanation:
        "'mustn't' = it's not allowed. Compare with 'You don't have to open it' (not necessary).",
    },
    {
      sentence: "You don't have to open the door — it opens automatically.",
      highlight: "don't have to open",
      structure: "don't have to + base verb (no obligation)",
      distractors: [
        "mustn't + base verb (prohibition)",
        "haven't to + base verb",
        "can't + base verb",
      ],
      goalId: "obligation",
      explanation:
        "'don't have to' = it's not necessary, but you can if you want.",
    },

    // --- can't: prohibition vs. impossibility ---
    {
      sentence: "You can't use your phone while driving.",
      highlight: "can't use",
      structure: "can't + base verb (prohibition)",
      distractors: [
        "can't + be (impossibility)",
        "can't have + past participle",
        "don't have to + base verb",
      ],
      goalId: "prohibition",
      explanation: "'can't' here = it's not allowed (by law).",
    },
    {
      sentence: "That can't be the right address — the house is empty.",
      highlight: "can't be",
      structure: "can't + be (impossibility)",
      distractors: [
        "mustn't + be",
        "can't + base verb (prohibition)",
        "must + be (deduction)",
      ],
      goalId: "prohibition",
      explanation:
        "'can't be' = I'm sure it isn't true. It's the opposite of 'must be'. ✗ 'mustn't be'.",
    },

    // --- present vs. past deduction ---
    {
      sentence: "Her eyes are red. She must be very upset.",
      highlight: "must be very upset",
      structure: "must + be + adjective (present deduction)",
      distractors: [
        "must have + past participle (past deduction)",
        "has to + be + adjective",
        "can't + be + adjective",
      ],
      goalId: "deduction",
      explanation: "A conclusion about how she feels now.",
    },
    {
      sentence: "Her eyes are red. She must have been crying.",
      highlight: "must have been crying",
      structure: "must have + been + verb-ing (past deduction)",
      distractors: [
        "must + be + verb-ing (present deduction)",
        "had to + be + verb-ing",
        "must have + verb-ing",
      ],
      goalId: "past-deduction",
      explanation:
        "A conclusion about what happened before now, based on present evidence.",
    },
    {
      sentence: "The door is open. Someone must have forgotten to lock it.",
      highlight: "must have forgotten",
      structure: "must have + past participle",
      distractors: [
        "had to + base verb",
        "must have + base verb",
        "must + past participle",
      ],
      goalId: "past-deduction",
      explanation:
        "✗ 'must have forget' / ✗ 'must of forgotten'. 'had to forget' would mean an obligation.",
    },

    // --- past impossibility ---
    {
      sentence: "You can't have finished the book already — it's 800 pages!",
      highlight: "can't have finished",
      structure: "can't have + past participle",
      distractors: [
        "mustn't have + past participle",
        "can't + past participle",
        "must have + past participle",
      ],
      goalId: "past-impossibility",
      explanation:
        "I'm sure you didn't finish it. ✗ 'mustn't have' isn't used for past impossibility.",
    },
    {
      sentence: "He couldn't have broken the vase. He wasn't even home.",
      highlight: "couldn't have broken",
      structure: "couldn't have + past participle",
      distractors: [
        "didn't have to + base verb",
        "couldn't + past participle",
        "must have + past participle",
      ],
      goalId: "past-impossibility",
      explanation:
        "'couldn't have' = same meaning as 'can't have': it's impossible that it happened.",
    },
  ],
});
