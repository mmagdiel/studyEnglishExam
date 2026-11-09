import { defineTopicPack } from "./defineTopic";
import { pastSimpleContinuous } from "./past-simple-continuous";

/**
 * "Structures" exercises for past simple vs. continuous: identify the form,
 * then its purpose. Grouped as contrast sets — similar-looking sentences
 * where the tense choice changes the meaning.
 */
export const pastSimpleContinuousStructures = defineTopicPack(
  pastSimpleContinuous,
  {
    structures: [
      // --- completed vs. in progress at a time ---
      {
        sentence: "I watched TV at eight o'clock.",
        highlight: "watched TV at eight o'clock",
        structure: "past simple + specific time",
        distractors: [
          "was/were + verb-ing + specific time",
          "did + subject + past form",
          "was/were + verb-ing + when + past simple",
        ],
        goalId: "completed",
        explanation:
          "Past simple: the watching started at eight. Compare with 'I was watching TV at eight' (already in progress).",
      },
      {
        sentence: "I was watching TV at eight o'clock.",
        highlight: "was watching TV at eight o'clock",
        structure: "was/were + verb-ing + specific time",
        distractors: [
          "past simple + specific time",
          "was/were + past participle + specific time",
          "while + past simple, + past continuous",
        ],
        goalId: "progress",
        explanation:
          "Past continuous: at eight, the action had already started and was still going on.",
      },
      {
        sentence: "We didn't go out last night.",
        highlight: "didn't go",
        structure: "didn't + base verb",
        distractors: [
          "didn't + past form",
          "wasn't/weren't + base verb",
          "wasn't/weren't + verb-ing",
        ],
        goalId: "completed",
        explanation:
          "Negatives in the past simple: didn't + base verb. ✗ 'We didn't went out.'",
      },
      {
        sentence: "Where were you going when I saw you?",
        highlight: "were you going",
        structure: "wh- + was/were + subject + verb-ing",
        distractors: [
          "wh- + did + subject + verb-ing",
          "wh- + was/were + subject + base verb",
          "wh- + did + subject + past form",
        ],
        goalId: "interruption",
        explanation:
          "The continuous question asks about the longer action that was in progress when the short one ('saw') happened.",
      },

      // --- when vs. while ---
      {
        sentence: "I was walking to work when it started to rain.",
        highlight: "was walking to work when it started",
        structure: "past continuous + when + past simple",
        distractors: [
          "past simple + when + past simple",
          "past continuous + while + past continuous",
          "past simple + while + past simple",
        ],
        goalId: "interruption",
        explanation:
          "'when' introduces the short action that interrupts the longer one.",
      },
      {
        sentence: "While she was talking on the phone, the baby woke up.",
        highlight: "While she was talking on the phone, the baby woke up",
        structure: "While + past continuous, + past simple",
        distractors: [
          "While + past simple, + past continuous",
          "When + past continuous, + past continuous",
          "past simple + specific time",
        ],
        goalId: "interruption",
        explanation:
          "'while' introduces the long background action; the main clause has the short action.",
      },
      {
        sentence: "When the bell rang, the students left the classroom.",
        highlight: "When the bell rang, the students left",
        structure: "When + past simple, + past simple",
        distractors: [
          "While + past continuous, + past simple",
          "When + past simple, + past continuous",
          "past continuous + when + past simple",
        ],
        goalId: "completed",
        explanation:
          "Two past simple verbs = one action after the other: first the bell rang, then they left. Compare: 'When the bell rang, the students were leaving' (already in progress).",
      },
      {
        sentence: "When the bell rang, the students were leaving the classroom.",
        highlight: "When the bell rang, the students were leaving",
        structure: "When + past simple, + past continuous",
        distractors: [
          "When + past simple, + past simple",
          "While + past simple, + past simple",
          "past simple + specific time",
        ],
        goalId: "interruption",
        explanation:
          "The leaving was already in progress when the short action (the bell) happened.",
      },

      // --- background vs. main events ---
      {
        sentence: "It was getting dark and the wind was blowing.",
        highlight: "was getting dark and the wind was blowing",
        structure: "past continuous + and + past continuous",
        distractors: [
          "past simple + and + past simple",
          "past continuous + when + past simple",
          "didn't + base verb",
        ],
        goalId: "background",
        explanation:
          "Two past continuous verbs describe the scene of a story — the atmosphere, not the events.",
      },
      {
        sentence: "She opened the door, turned on the light and screamed.",
        highlight: "opened the door, turned on the light and screamed",
        structure: "past simple, + past simple + and + past simple",
        distractors: [
          "past continuous + and + past continuous",
          "While + past continuous, + past simple",
          "was/were + verb-ing + specific time",
        ],
        goalId: "background",
        explanation:
          "A chain of past simple verbs shows the main events in order — what moves the story forward.",
      },
      {
        sentence: "People were shouting everywhere. Then a car stopped in front of us.",
        highlight: "Then a car stopped",
        structure: "sequencer + past simple (main event)",
        distractors: [
          "sequencer + past continuous (background)",
          "past continuous + when + past simple",
          "didn't + base verb",
        ],
        goalId: "background",
        explanation:
          "After the background ('were shouting'), the past simple introduces the main event.",
      },
      {
        sentence: "The children were playing in the garden while their parents were cooking.",
        highlight: "were playing in the garden while their parents were cooking",
        structure: "past continuous + while + past continuous",
        distractors: [
          "past continuous + when + past simple",
          "past simple + while + past simple",
          "While + past simple, + past continuous",
        ],
        goalId: "background",
        explanation:
          "Two long actions in progress at the same time describe a scene — nothing interrupts anything.",
      },

      // --- state verbs ---
      {
        sentence: "I knew the answer, but I was too nervous to speak.",
        highlight: "knew the answer",
        structure: "state verb + past simple",
        distractors: [
          "state verb + was/were + verb-ing",
          "didn't + base verb",
          "past continuous + when + past simple",
        ],
        goalId: "completed",
        explanation:
          "State verbs (know, want, believe, like) don't normally use the continuous. ✗ 'I was knowing the answer.'",
      },
      {
        sentence: "At midnight, they were still dancing.",
        highlight: "were still dancing",
        structure: "was/were + still + verb-ing",
        distractors: [
          "past simple + still",
          "still + was/were + base verb",
          "didn't + still + base verb",
        ],
        goalId: "progress",
        explanation:
          "'still' + past continuous stresses that the action continued past that moment.",
      },
    ],
  },
);
