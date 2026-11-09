import { defineTopicPack } from "./defineTopic";
import { presentPerfectContinuous } from "./present-perfect-continuous";

/**
 * "Structures" exercises for the present perfect continuous: identify the
 * form, then its purpose. Grouped as contrast sets — mainly against the
 * present perfect simple, the most common confusion.
 */
export const presentPerfectContinuousStructures = defineTopicPack(
  presentPerfectContinuous,
  {
    structures: [
      // --- form ---
      {
        sentence: "I've been learning to play the piano this year.",
        highlight: "'ve been learning",
        structure: "have/has + been + verb-ing",
        distractors: [
          "have/has + being + verb-ing",
          "have/has + been + past participle",
          "am/is/are + been + verb-ing",
        ],
        goalId: "continuing",
        explanation:
          "The form is have/has + been + verb-ing. ✗ 'I've being learning'. The learning is still going on.",
      },
      {
        sentence: "Has she been feeling ill lately?",
        highlight: "Has she been feeling",
        structure: "Have/Has + subject + been + verb-ing?",
        distractors: [
          "Has + been + subject + verb-ing?",
          "Is + subject + been + verb-ing?",
          "Did + subject + been + verb-ing?",
        ],
        goalId: "continuing",
        explanation:
          "Questions invert the subject and have/has. 'lately' signals a situation continuing up to now.",
      },
      {
        sentence: "I haven't been sleeping well recently.",
        highlight: "haven't been sleeping",
        structure: "haven't/hasn't + been + verb-ing",
        distractors: [
          "haven't/hasn't + being + verb-ing",
          "haven't/hasn't + been + base verb",
          "don't + been + verb-ing",
        ],
        goalId: "continuing",
        explanation:
          "Negative: haven't/hasn't + been + verb-ing. The bad sleep is an ongoing situation.",
      },

      // --- duration: for / since / how long ---
      {
        sentence: "I've been waiting here for forty minutes.",
        highlight: "'ve been waiting here for forty minutes",
        structure: "have/has + been + verb-ing + for + period",
        distractors: [
          "have/has + been + verb-ing + since + period",
          "am/is/are + verb-ing + for + period",
          "have/has + past participle + ago",
        ],
        goalId: "duration",
        explanation:
          "'for' + a length of time. ✗ 'I'm waiting here for forty minutes.'",
      },
      {
        sentence: "They've been playing since two o'clock.",
        highlight: "'ve been playing since two o'clock",
        structure: "have/has + been + verb-ing + since + starting point",
        distractors: [
          "have/has + been + verb-ing + for + starting point",
          "past continuous + since + starting point",
          "have/has + been + verb-ing + ago",
        ],
        goalId: "duration",
        explanation: "'since' + the moment the activity started.",
      },
      {
        sentence: "How long have you been living in this flat?",
        highlight: "How long have you been living",
        structure: "How long + have/has + subject + been + verb-ing?",
        distractors: [
          "How long + are + subject + verb-ing?",
          "How long + have/has + subject + verb-ing?",
          "How much + have/has + subject + past participle?",
        ],
        goalId: "duration",
        explanation:
          "This question asks about duration up to now. ✗ 'How long are you living here?'",
      },

      // --- how long vs. how many (simple vs. continuous) ---
      {
        sentence: "I've been painting the house all week.",
        highlight: "'ve been painting the house all week",
        structure: "have/has + been + verb-ing + time period (how long)",
        distractors: [
          "have/has + past participle + quantity (how many)",
          "past simple + time period",
          "am/is/are + verb-ing + time period",
        ],
        goalId: "duration",
        explanation:
          "The continuous focuses on how long the activity has gone on — the house may not be finished.",
      },
      {
        sentence: "I've painted three rooms so far.",
        highlight: "'ve painted three rooms",
        structure: "have/has + past participle + quantity (how many)",
        distractors: [
          "have/has + been + verb-ing + time period (how long)",
          "have/has + been + verb-ing + quantity",
          "past simple + quantity",
        ],
        goalId: "duration",
        explanation:
          "With a number (how many / how much), use the present perfect simple: it shows a completed amount so far. ✗ 'I've been painting three rooms.'",
      },

      // --- state verbs ---
      {
        sentence: "We've known each other for twenty years.",
        highlight: "'ve known",
        structure: "state verb: have/has + past participle",
        distractors: [
          "state verb: have/has + been + verb-ing",
          "present simple + for + period",
          "am/is/are + verb-ing + for + period",
        ],
        goalId: "duration",
        explanation:
          "'know' is a state verb, so it uses the simple form even for duration. ✗ 'We've been knowing each other.'",
      },

      // --- recently finished, with present evidence ---
      {
        sentence: "Your shoes are muddy. Have you been walking in the park?",
        highlight: "Have you been walking",
        structure: "present evidence + have/has + been + verb-ing",
        distractors: [
          "present evidence + did + subject + base verb",
          "present evidence + are + subject + verb-ing",
          "have/has + been + verb-ing + for + period",
        ],
        goalId: "recent",
        explanation:
          "The muddy shoes are the visible result of an activity that has just finished.",
      },
      {
        sentence: "I'm out of breath because I've been running.",
        highlight: "because I've been running",
        structure: "result now + because + have/has + been + verb-ing",
        distractors: [
          "result now + because + am/is/are + verb-ing",
          "result now + because + have/has + past participle",
          "have/has + been + verb-ing + since + starting point",
        ],
        goalId: "recent",
        explanation:
          "The present state (out of breath) is explained by a long activity that recently stopped.",
      },
      {
        sentence: "You've been eating my chocolates! There are only two left.",
        highlight: "You've been eating",
        structure: "have/has + been + verb-ing (repeated action)",
        distractors: [
          "have/has + past participle (single completed action)",
          "past continuous (background)",
          "have/has + been + verb-ing + for + period",
        ],
        goalId: "recent",
        explanation:
          "The continuous suggests a repeated action over a period (eating one after another), often with a complaint.",
      },
      {
        sentence: "Someone has eaten all my chocolates! The box is empty.",
        highlight: "has eaten all my chocolates",
        structure: "have/has + past participle (single completed action)",
        distractors: [
          "have/has + been + verb-ing (repeated action)",
          "have/has + been + verb-ing + for + period",
          "past simple + finished time",
        ],
        goalId: "recent",
        explanation:
          "The simple form shows the action is complete — all the chocolates are gone. Compare with 'You've been eating my chocolates' (some are left).",
      },
    ],
  },
);
