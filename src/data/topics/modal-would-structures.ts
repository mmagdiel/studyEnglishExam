import { defineTopicPack } from "./defineTopic";
import { modalWould } from "./modal-would";

/**
 * "Structures" exercises for 'would': identify the form, then its purpose.
 * Grouped as contrast sets — near-identical forms that serve different goals.
 */
export const modalWouldStructures = defineTopicPack(modalWould, {
  structures: [
    // --- "Would you mind...?": permission vs. request ---
    {
      sentence: "Would you mind if I opened the window?",
      highlight: "Would you mind if I opened",
      structure: "Would you mind if + I + past simple",
      distractors: [
        "Would you mind + verb-ing",
        "Would you like + to-infinitive",
        "would + base verb (past routine)",
      ],
      goalId: "permission",
      explanation:
        "'Would you mind if I…' asks permission: the speaker (I) is the one who will act. Note the past simple 'opened' even though it refers to now.",
    },
    {
      sentence: "Would you mind opening the window?",
      highlight: "Would you mind opening",
      structure: "Would you mind + verb-ing",
      distractors: [
        "Would you mind if + I + past simple",
        "would rather + base verb",
        "Would you care for + noun",
      ],
      goalId: "requests",
      explanation:
        "'Would you mind + -ing' is a request: the listener is asked to do the action. Compare with 'Would you mind if I opened…', where the speaker acts (permission).",
    },

    // --- "Would you like...?": offer vs. wish ---
    {
      sentence: "Would you like a glass of water?",
      highlight: "Would you like a glass of water",
      structure: "Would you like + noun",
      distractors: [
        "I would like + noun",
        "Would you + base verb",
        "would prefer + to-infinitive",
      ],
      goalId: "offerings",
      explanation:
        "A question with 'Would you like + noun' offers something to the listener.",
    },
    {
      sentence: "I would like a glass of water, please.",
      highlight: "I would like a glass of water",
      structure: "I would like + noun",
      distractors: [
        "Would you like + noun",
        "would rather + base verb",
        "wish + subject + would",
      ],
      goalId: "wishes",
      explanation:
        "In a statement, 'I would like + noun' politely says what the speaker wants. It's the same words as the offer, but the speaker is now the one who wants it.",
    },

    // --- "Would you + verb": request vs. offer ---
    {
      sentence: "Would you pass me the salt, please?",
      highlight: "Would you pass",
      structure: "Would you + base verb",
      distractors: [
        "Would you like + to-infinitive",
        "Would you mind if + I + past simple",
        "would + base verb (past routine)",
      ],
      goalId: "requests",
      explanation:
        "'Would you + base verb (+ please)' asks the listener to do something for the speaker.",
    },
    {
      sentence: "Would you like to join us for dinner tonight?",
      highlight: "Would you like to join",
      structure: "Would you like + to-infinitive",
      distractors: [
        "Would you + base verb",
        "would rather + base verb",
        "Would you mind + verb-ing",
      ],
      goalId: "offerings",
      explanation:
        "'Would you like + to-infinitive' is an invitation or offer: it's for the listener's benefit, not the speaker's.",
    },

    // --- Preferences: rather vs. prefer ---
    {
      sentence: "I would rather walk than take the bus.",
      highlight: "would rather walk than",
      structure: "would rather + base verb + than",
      distractors: [
        "would prefer + to-infinitive",
        "would like + noun",
        "would + base verb (past routine)",
      ],
      goalId: "preferences",
      explanation:
        "'Would rather' takes a bare infinitive (no 'to'), and 'than' introduces the rejected option.",
    },
    {
      sentence: "She would prefer to work from home on Fridays.",
      highlight: "would prefer to work",
      structure: "would prefer + to-infinitive",
      distractors: [
        "would rather + base verb + than",
        "Would you like + to-infinitive",
        "said + subject + would + base verb",
      ],
      goalId: "preferences",
      explanation:
        "'Would prefer' takes 'to + verb', unlike 'would rather', which takes the bare verb.",
    },
    {
      sentence: "I'd rather you didn't smoke in here.",
      highlight: "I'd rather you didn't smoke",
      structure: "would rather + subject + past simple",
      distractors: [
        "would rather + base verb + than",
        "wish + subject + would",
        "Would you mind + verb-ing",
      ],
      goalId: "preferences",
      explanation:
        "When the preference is about someone else's action, 'would rather' is followed by a new subject and the past simple. It often works as a soft request too.",
    },

    // --- Same form, different time: past habit vs. intention ---
    {
      sentence: "Every summer, we would spend hours fishing at the lake.",
      highlight: "we would spend",
      structure: "would + base verb (past routine)",
      distractors: [
        "said + subject + would + base verb",
        "would rather + base verb + than",
        "I would like + noun",
      ],
      goalId: "past-habits",
      explanation:
        "A past time frame ('every summer') plus 'would + verb' describes a repeated action in the past, like 'used to'.",
    },
    {
      sentence: "She said she would call me after the meeting.",
      highlight: "she would call",
      structure: "said + subject + would + base verb",
      distractors: [
        "would + base verb (past routine)",
        "Would you + base verb",
        "wish + subject + would",
      ],
      goalId: "intentions",
      explanation:
        "Here 'would' is the past of 'will' in reported speech. She said: 'I will call you.' It reports a single intention or promise, not a habit.",
    },
    {
      sentence: "He promised he would never be late again.",
      highlight: "he would never be",
      structure: "said + subject + would + base verb",
      distractors: [
        "would + base verb (past routine)",
        "would rather + base verb + than",
        "Would you like + to-infinitive",
      ],
      goalId: "intentions",
      explanation:
        "After reporting verbs like 'promise', 'say' or 'tell', 'would' carries a past intention or promise ('I will never be late again').",
    },

    // --- Wish + would ---
    {
      sentence: "I wish my neighbours would stop making so much noise.",
      highlight: "wish my neighbours would stop",
      structure: "wish + subject + would",
      distractors: [
        "I would like + noun",
        "would rather + subject + past simple",
        "Would you mind + verb-ing",
      ],
      goalId: "wishes",
      explanation:
        "'Wish + someone + would' expresses a wish for someone else's behaviour to change, often with a tone of annoyance.",
    },
  ],
});
