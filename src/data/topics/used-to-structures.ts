import { defineTopicPack } from "./defineTopic";
import { usedTo } from "./used-to";

/**
 * "Structures" exercises for used to / be used to / get used to: identify the
 * form, then its purpose. Grouped as contrast sets — the three forms look
 * alike but mean different things.
 */
export const usedToStructures = defineTopicPack(usedTo, {
  structures: [
    // --- same activity, three forms ---
    {
      sentence: "I used to get up at 5 a.m. when I worked at the bakery.",
      highlight: "used to get up",
      structure: "used to + base verb",
      distractors: [
        "be used to + verb-ing",
        "get used to + verb-ing",
        "used to + verb-ing",
      ],
      goalId: "past-habits",
      explanation:
        "A regular past habit that has stopped. Compare: 'I'm used to getting up at 5' (it's normal for me now).",
    },
    {
      sentence: "I'm used to getting up at 5 a.m. — it's not a problem.",
      highlight: "I'm used to getting up",
      structure: "be used to + verb-ing",
      distractors: [
        "be used to + base verb",
        "used to + base verb",
        "get used to + verb-ing",
      ],
      goalId: "familiar",
      explanation:
        "'be used to' + verb-ing = it's familiar and normal for me. ✗ 'I'm used to get up'.",
    },
    {
      sentence: "I'm getting used to getting up at 5 a.m., but it's still hard.",
      highlight: "I'm getting used to getting up",
      structure: "be getting used to + verb-ing",
      distractors: [
        "be used to + verb-ing",
        "used to + base verb",
        "be getting used to + base verb",
      ],
      goalId: "adapting",
      explanation:
        "The process of adapting is still in progress — 'still hard' shows it isn't complete.",
    },

    // --- used to: negatives and questions ---
    {
      sentence: "He didn't use to like vegetables.",
      highlight: "didn't use to like",
      structure: "didn't + use to + base verb",
      distractors: [
        "didn't + used to + base verb",
        "wasn't + used to + base verb",
        "didn't + use to + verb-ing",
      ],
      goalId: "past-habits",
      explanation:
        "After 'didn't', use the base form 'use to'. ✗ 'didn't used to'.",
    },
    {
      sentence: "Did your parents use to read you stories?",
      highlight: "Did your parents use to read",
      structure: "Did + subject + use to + base verb?",
      distractors: [
        "Were + subject + used to + base verb?",
        "Did + subject + used to + verb-ing?",
        "Do + subject + use to + base verb?",
      ],
      goalId: "past-habits",
      explanation: "Questions about past habits: Did + subject + use to + base verb?",
    },

    // --- be used to: noun / -ing / tenses ---
    {
      sentence: "Firefighters are used to danger.",
      highlight: "are used to danger",
      structure: "be used to + noun",
      distractors: [
        "used to + noun",
        "get used to + base verb",
        "be used to + base verb",
      ],
      goalId: "familiar",
      explanation:
        "'be used to' can be followed by a noun: danger is familiar to them.",
    },
    {
      sentence: "When I moved to Japan, I wasn't used to eating with chopsticks.",
      highlight: "wasn't used to eating",
      structure: "wasn't/weren't used to + verb-ing",
      distractors: [
        "didn't use to + base verb",
        "wasn't/weren't used to + base verb",
        "didn't get used to + verb-ing",
      ],
      goalId: "familiar",
      explanation:
        "'be used to' in the past: at that time, chopsticks weren't familiar. Compare: 'I didn't use to eat with chopsticks' (it wasn't my habit).",
    },
    {
      sentence: "I didn't use to eat with chopsticks, but now I do every day.",
      highlight: "didn't use to eat",
      structure: "didn't + use to + base verb",
      distractors: [
        "wasn't/weren't used to + verb-ing",
        "didn't + used to + base verb",
        "didn't get used to + verb-ing",
      ],
      goalId: "past-habits",
      explanation:
        "This is about a past habit (or lack of one), not about familiarity.",
    },

    // --- get used to: process in different tenses ---
    {
      sentence: "Don't worry, you'll soon get used to the new system.",
      highlight: "you'll soon get used to",
      structure: "will + get used to + noun",
      distractors: [
        "will + be used to + base verb",
        "will + used to + noun",
        "will + get use to + noun",
      ],
      goalId: "adapting",
      explanation:
        "The adapting will happen in the future — it's not familiar yet.",
    },
    {
      sentence: "I can't get used to living in such a big city.",
      highlight: "can't get used to living",
      structure: "can't + get used to + verb-ing",
      distractors: [
        "can't + be used to + base verb",
        "can't + used to + base verb",
        "can't + get used to + base verb",
      ],
      goalId: "adapting",
      explanation:
        "'can't get used to' = the adapting process is difficult and hasn't finished.",
    },
    {
      sentence: "It took her a while, but she has got used to her new boss.",
      highlight: "has got used to",
      structure: "have/has + got used to + noun",
      distractors: [
        "have/has + used to + noun",
        "have/has + be used to + noun",
        "have/has + get used to + noun",
      ],
      goalId: "adapting",
      explanation:
        "The present perfect shows the adapting process is complete (US English: 'has gotten used to').",
    },
  ],
});
