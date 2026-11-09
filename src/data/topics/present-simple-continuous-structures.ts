import { defineTopicPack } from "./defineTopic";
import { presentSimpleContinuous } from "./present-simple-continuous";

/**
 * "Structures" exercises for present simple vs. continuous: identify the form,
 * then its purpose. Grouped as contrast sets — the same verb in both tenses,
 * serving different goals.
 */
export const presentSimpleContinuousStructures = defineTopicPack(
  presentSimpleContinuous,
  {
    structures: [
      // --- live: permanent vs. temporary ---
      {
        sentence: "My parents live in a small town near the coast.",
        highlight: "live",
        structure: "subject + present simple",
        distractors: [
          "subject + am/is/are + verb-ing",
          "subject + always + am/is/are + verb-ing",
          "subject + am/is/are + getting + comparative",
        ],
        goalId: "routines",
        explanation:
          "Present simple = a permanent situation. Compare with 'I'm living with my cousin this month' (temporary).",
      },
      {
        sentence: "I'm living with my cousin this month.",
        highlight: "I'm living with my cousin this month",
        structure: "am/is/are + verb-ing + limited time expression",
        distractors: [
          "subject + present simple",
          "subject + frequency adverb + present simple",
          "You + present simple + sequencer",
        ],
        goalId: "temporary",
        explanation:
          "'this month' limits the situation in time, so we use the present continuous.",
      },

      // --- work: routine vs. in progress vs. temporary ---
      {
        sentence: "She usually works from nine to five.",
        highlight: "usually works",
        structure: "subject + frequency adverb + present simple",
        distractors: [
          "subject + am/is/are + verb-ing",
          "subject + always + am/is/are + verb-ing",
          "frequency adverb + am/is/are + verb-ing",
        ],
        goalId: "routines",
        explanation:
          "Frequency adverbs go before the main verb: 'usually works'. It describes her routine.",
      },
      {
        sentence: "She's working on a big report for her boss.",
        highlight: "'s working on a big report",
        structure: "am/is/are + verb-ing (around now)",
        distractors: [
          "subject + present simple",
          "subject + frequency adverb + present simple",
          "subject + always + am/is/are + verb-ing",
        ],
        goalId: "progress",
        explanation:
          "The report is an unfinished task around now — not necessarily at this exact second.",
      },

      // --- always: habit vs. annoying repetition ---
      {
        sentence: "He always arrives on time.",
        highlight: "always arrives",
        structure: "subject + frequency adverb + present simple",
        distractors: [
          "subject + always + am/is/are + verb-ing",
          "am/is/are + verb-ing + limited time expression",
          "You + present simple + sequencer",
        ],
        goalId: "routines",
        explanation:
          "'always + present simple' is a neutral habit. Compare with 'He's always arriving late!' (annoying).",
      },
      {
        sentence: "He's always arriving late to meetings!",
        highlight: "'s always arriving",
        structure: "subject + always + am/is/are + verb-ing",
        distractors: [
          "subject + frequency adverb + present simple",
          "am/is/are + verb-ing (right now)",
          "subject + am/is/are + getting + comparative",
        ],
        goalId: "repeated",
        explanation:
          "'always + present continuous' stresses that an action is repeated again and again — usually with annoyance.",
      },
      {
        sentence: "The ferry leaves every two hours.",
        highlight: "leaves every two hours",
        structure: "present simple + every + period",
        distractors: [
          "am/is/are + verb-ing + every + period",
          "subject + always + am/is/are + verb-ing",
          "am/is/are + verb-ing (right now)",
        ],
        goalId: "repeated",
        explanation:
          "Timetables and events that repeat at regular intervals use the present simple.",
      },

      // --- think: opinion vs. mental process ---
      {
        sentence: "I think this restaurant is too expensive.",
        highlight: "I think",
        structure: "state verb + present simple",
        distractors: [
          "state verb + am/is/are + verb-ing",
          "subject + frequency adverb + present simple",
          "You + present simple + sequencer",
        ],
        goalId: "feelings",
        explanation:
          "'think' = have an opinion. As a state verb, it stays in the present simple.",
      },
      {
        sentence: "Be quiet, please. I'm thinking about the answer.",
        highlight: "I'm thinking about",
        structure: "am/is/are + verb-ing (right now)",
        distractors: [
          "state verb + present simple",
          "subject + always + am/is/are + verb-ing",
          "am/is/are + verb-ing + limited time expression",
        ],
        goalId: "now",
        explanation:
          "'think about' = the mental process happening now, so the continuous is possible. Compare with 'I think…' (opinion).",
      },
      {
        sentence: "This soup tastes amazing!",
        highlight: "tastes amazing",
        structure: "state verb + present simple",
        distractors: [
          "state verb + am/is/are + verb-ing",
          "am/is/are + verb-ing (right now)",
          "subject + am/is/are + getting + comparative",
        ],
        goalId: "feelings",
        explanation:
          "Sense verbs (taste, smell, sound, look) describing a quality are state verbs. ✗ 'This soup is tasting amazing.'",
      },

      // --- right now vs. instructions ---
      {
        sentence: "Look! The dog is chasing a cat.",
        highlight: "is chasing",
        structure: "am/is/are + verb-ing (right now)",
        distractors: [
          "subject + present simple",
          "subject + always + am/is/are + verb-ing",
          "You + present simple + sequencer",
        ],
        goalId: "now",
        explanation: "'Look!' shows the action is happening at the moment of speaking.",
      },
      {
        sentence: "First you open the lid, then you pour in the water.",
        highlight: "then you pour",
        structure: "You + present simple + sequencer",
        distractors: [
          "You + am/is/are + verb-ing",
          "subject + frequency adverb + present simple",
          "am/is/are + verb-ing (right now)",
        ],
        goalId: "instructions",
        explanation:
          "'you + present simple' with 'first / then' describes the steps of a process.",
      },
      {
        sentence: "When you get to the bank, you turn left.",
        highlight: "you turn left",
        structure: "You + present simple + sequencer",
        distractors: [
          "You + am/is/are + verb-ing",
          "subject + present simple",
          "state verb + present simple",
        ],
        goalId: "instructions",
        explanation:
          "Directions often use 'when you + present simple, you + present simple'.",
      },

      // --- change ---
      {
        sentence: "The days are getting longer.",
        highlight: "are getting longer",
        structure: "subject + am/is/are + getting + comparative",
        distractors: [
          "subject + gets + comparative",
          "am/is/are + verb-ing + limited time expression",
          "state verb + present simple",
        ],
        goalId: "changing",
        explanation:
          "'getting + comparative' describes a gradual change happening over a period of time.",
      },
      {
        sentence: "The number of electric cars is rising quickly.",
        highlight: "is rising",
        structure: "am/is/are + verb of change + -ing",
        distractors: [
          "subject + present simple",
          "subject + always + am/is/are + verb-ing",
          "You + present simple + sequencer",
        ],
        goalId: "changing",
        explanation:
          "Verbs like rise, grow, increase, improve and change in the continuous describe trends.",
      },
    ],
  },
);
