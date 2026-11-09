import { defineTopicPack } from "./defineTopic";
import { auxiliaryShortExpressions } from "./auxiliary-short-expressions";

/**
 * "Structures" exercises for auxiliaries in short expressions: identify the
 * form, then its purpose. Grouped as contrast sets — the same statement
 * answered with a reply question (interest) or So/Neither (agreement).
 */
export const auxiliaryShortExpressionsStructures = defineTopicPack(
  auxiliaryShortExpressions,
  {
    structures: [
      // --- same statement, two replies ---
      {
        sentence: "A: I play the guitar. B: Do you? Since when?",
        highlight: "Do you?",
        structure: "auxiliary + pronoun? (reply question)",
        distractors: [
          "So + auxiliary + I",
          "Neither + auxiliary + I",
          "auxiliary + pronoun + not?",
        ],
        goalId: "interest",
        explanation:
          "B shows interest in A's news. Compare with 'So do I' (B plays too).",
      },
      {
        sentence: "A: I play the guitar. B: So do I! Let's play together.",
        highlight: "So do I",
        structure: "So + auxiliary + I",
        distractors: [
          "So + I + auxiliary",
          "auxiliary + pronoun? (reply question)",
          "Neither + auxiliary + I",
        ],
        goalId: "agreement",
        explanation:
          "'So do I' = the same is true for me. ✗ 'So I do'.",
      },
      {
        sentence: "A: I haven't been to Paris. B: Haven't you? You'd love it.",
        highlight: "Haven't you?",
        structure: "negative auxiliary + pronoun? (reply question)",
        distractors: [
          "Neither + auxiliary + I",
          "positive auxiliary + pronoun?",
          "So + auxiliary + I",
        ],
        goalId: "interest",
        explanation:
          "Negative statement → negative reply question. B is interested / surprised.",
      },
      {
        sentence: "A: I haven't been to Paris. B: Neither have I.",
        highlight: "Neither have I",
        structure: "Neither + auxiliary + I",
        distractors: [
          "Neither + negative auxiliary + I",
          "So + auxiliary + I",
          "negative auxiliary + pronoun? (reply question)",
        ],
        goalId: "agreement",
        explanation:
          "'Neither' is already negative, so the auxiliary is positive. ✗ 'Neither haven't I'.",
      },

      // --- choosing the right auxiliary ---
      {
        sentence: "A: My parents met in Brazil. B: Did they? How romantic!",
        highlight: "Did they?",
        structure: "did + pronoun? (no auxiliary in past simple)",
        distractors: [
          "were + pronoun?",
          "met + pronoun?",
          "have + pronoun?",
        ],
        goalId: "interest",
        explanation:
          "Past simple has no auxiliary in the statement, so use 'did'. 'My parents' → 'they'.",
      },
      {
        sentence: "A: Tom's going to quit his job. B: Is he? Why?",
        highlight: "Is he?",
        structure: "be + pronoun? (copy the auxiliary)",
        distractors: [
          "does + pronoun?",
          "will + pronoun?",
          "has + pronoun?",
        ],
        goalId: "interest",
        explanation:
          "'Tom's going to' = Tom is going to → copy 'is': 'Is he?'",
      },
      {
        sentence: "A: I'd love to visit Iceland. B: So would I.",
        highlight: "So would I",
        structure: "So + would + I",
        distractors: [
          "So + had + I",
          "So + do + I",
          "So + I + would",
        ],
        goalId: "agreement",
        explanation:
          "Here 'I'd' = I would (I'd love to), so the reply is 'So would I'.",
      },
      {
        sentence: "A: I was born in March. B: So was I!",
        highlight: "So was I",
        structure: "So + was/were + I",
        distractors: [
          "So + did + I",
          "So + am + I",
          "So + I + was",
        ],
        goalId: "agreement",
        explanation:
          "Copy 'be' in the same tense: was → So was I.",
      },
      {
        sentence: "A: My friends didn't enjoy the film. B: Neither did mine.",
        highlight: "Neither did mine",
        structure: "Neither + auxiliary + noun/pronoun",
        distractors: [
          "Neither + mine + did",
          "So + did + mine",
          "Neither + didn't + mine",
        ],
        goalId: "agreement",
        explanation:
          "The subject doesn't have to be 'I': 'Neither did mine', 'So does my brother'.",
      },

      // --- informal alternatives ---
      {
        sentence: "A: I'm not hungry. B: I'm not either.",
        highlight: "I'm not either",
        structure: "subject + negative auxiliary + either",
        distractors: [
          "subject + negative auxiliary + too",
          "subject + positive auxiliary + either",
          "So + auxiliary + I",
        ],
        goalId: "agreement",
        explanation:
          "Same meaning as 'Neither am I', with normal word order. Use 'either' (not 'too') in negatives.",
      },
      {
        sentence: "A: I'm starving. B: I am too.",
        highlight: "I am too",
        structure: "subject + auxiliary + too",
        distractors: [
          "subject + auxiliary + either",
          "Neither + auxiliary + I",
          "auxiliary + pronoun? (reply question)",
        ],
        goalId: "agreement",
        explanation:
          "Same meaning as 'So am I'. Don't contract at the end: ✗ 'I'm too'.",
      },
      {
        sentence: "A: I've got a new puppy. B: Have you? What's its name?",
        highlight: "Have you?",
        structure: "auxiliary + pronoun? (reply question)",
        distractors: [
          "Do + pronoun?",
          "So + auxiliary + I",
          "Got + pronoun?",
        ],
        goalId: "interest",
        explanation:
          "'have got' uses 'have' as the auxiliary: 'Have you?'. With 'I have a puppy', you'd say 'Do you?'",
      },
    ],
  },
);
