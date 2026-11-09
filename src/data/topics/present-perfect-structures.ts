import { defineTopicPack } from "./defineTopic";
import { presentPerfect } from "./present-perfect";

/**
 * "Structures" exercises for the present perfect simple: identify the form,
 * then its purpose. Grouped as contrast sets — including present perfect vs.
 * past simple, the most common source of errors.
 */
export const presentPerfectStructures = defineTopicPack(presentPerfect, {
  structures: [
    // --- experiences: ever / never / been vs. gone ---
    {
      sentence: "Have you ever been to Brazil?",
      highlight: "Have you ever been",
      structure: "Have + subject + ever + past participle?",
      distractors: [
        "Did + subject + ever + past participle?",
        "Have + subject + past participle + yet?",
        "Have + subject + ever + past simple?",
      ],
      goalId: "experiences",
      explanation:
        "'Have you ever + past participle?' asks about life experience at any time up to now.",
    },
    {
      sentence: "I've never driven a truck.",
      highlight: "'ve never driven",
      structure: "have + never + past participle",
      distractors: [
        "haven't + never + past participle",
        "have + past participle + never",
        "didn't + never + base verb",
      ],
      goalId: "experiences",
      explanation:
        "'never' already has a negative meaning, so the verb stays affirmative. ✗ 'I haven't never driven'.",
    },
    {
      sentence: "Tom isn't here. He's gone to the supermarket.",
      highlight: "He's gone to",
      structure: "has + gone + to + place",
      distractors: [
        "has + been + to + place",
        "has + went + to + place",
        "is + gone + to + place",
      ],
      goalId: "unspecified",
      explanation:
        "'has gone' = went and hasn't come back — the result is he's not here now. Compare 'He's been to the supermarket' (went and returned).",
    },

    // --- unfinished: for vs. since vs. past simple ---
    {
      sentence: "I've lived in Lima for six years.",
      highlight: "'ve lived in Lima for six years",
      structure: "have + past participle + for + period",
      distractors: [
        "have + past participle + since + period",
        "present simple + for + period",
        "past simple + for + period",
      ],
      goalId: "unfinished",
      explanation:
        "Present perfect + 'for' = still true now. Compare 'I lived in Lima for six years' (I don't live there anymore).",
    },
    {
      sentence: "She has been a teacher since 2015.",
      highlight: "has been a teacher since 2015",
      structure: "have + past participle + since + starting point",
      distractors: [
        "have + past participle + for + starting point",
        "is + since + starting point",
        "past simple + since + starting point",
      ],
      goalId: "unfinished",
      explanation:
        "'since' + the moment it started. ✗ 'She is a teacher since 2015.'",
    },
    {
      sentence: "How long have you had your dog?",
      highlight: "How long have you had",
      structure: "How long + have + subject + past participle?",
      distractors: [
        "How long + do + subject + base verb?",
        "How long + did + subject + past participle?",
        "How long + have + subject + base verb?",
      ],
      goalId: "unfinished",
      explanation:
        "'How long have you…?' asks about a situation that continues now. ✗ 'How long do you have your dog?'",
    },
    {
      sentence: "My grandfather worked as a miner for thirty years.",
      highlight: "worked as a miner for thirty years",
      structure: "past simple + for + period",
      distractors: [
        "have + past participle + for + period",
        "have + past participle + since + starting point",
        "present simple + for + period",
      ],
      goalId: "experiences",
      explanation:
        "The past simple shows the period is finished — he doesn't work as a miner now. It's part of his life story, told as a finished experience.",
    },

    // --- unspecified: result now vs. finished time ---
    {
      sentence: "I've broken my leg, so I can't play on Saturday.",
      highlight: "'ve broken my leg",
      structure: "have + past participle (no time)",
      distractors: [
        "have + past participle + finished time",
        "past simple (no time)",
        "have + past participle + for + period",
      ],
      goalId: "unspecified",
      explanation:
        "No time is given; what matters is the present result (the speaker can't play).",
    },
    {
      sentence: "I broke my leg last year, but it's fine now.",
      highlight: "broke my leg last year",
      structure: "past simple + finished time",
      distractors: [
        "have + past participle + finished time",
        "have + past participle (no time)",
        "have + just + past participle",
      ],
      goalId: "experiences",
      explanation:
        "With a finished time ('last year') use the past simple. ✗ 'I've broken my leg last year.'",
    },
    {
      sentence: "Look! Someone has painted the door red.",
      highlight: "has painted",
      structure: "have + past participle (no time)",
      distractors: [
        "past simple + finished time",
        "have + already + past participle",
        "have + past participle + since + starting point",
      ],
      goalId: "unspecified",
      explanation:
        "We see the result now; when it happened isn't important.",
    },

    // --- time words: just / already / yet ---
    {
      sentence: "Your brother has just left.",
      highlight: "has just left",
      structure: "have + just + past participle",
      distractors: [
        "have + past participle + just",
        "just + have + past participle",
        "have + yet + past participle",
      ],
      goalId: "time-words",
      explanation:
        "'just' (very recently) goes between have/has and the past participle.",
    },
    {
      sentence: "We've already seen this film.",
      highlight: "'ve already seen",
      structure: "have + already + past participle",
      distractors: [
        "have + past participle + already + object",
        "have + yet + past participle",
        "have + ever + past participle",
      ],
      goalId: "time-words",
      explanation:
        "'already' (sooner than expected / done) goes between have and the past participle.",
    },
    {
      sentence: "I haven't packed my suitcase yet.",
      highlight: "haven't packed my suitcase yet",
      structure: "haven't + past participle + … + yet",
      distractors: [
        "haven't + yet + past participle",
        "have + already + past participle",
        "have + past participle + yet (affirmative)",
      ],
      goalId: "time-words",
      explanation:
        "'yet' goes at the end of negatives and questions: the action is expected but hasn't happened.",
    },
    {
      sentence: "I haven't seen him for ages.",
      highlight: "for ages",
      structure: "haven't + past participle + for + period",
      distractors: [
        "haven't + past participle + since + period",
        "haven't + past participle + ago",
        "haven't + yet + past participle",
      ],
      goalId: "time-words",
      explanation:
        "'ages' is a period of time, so 'for'. Don't use 'ago' with the present perfect.",
    },
  ],
});
