import { defineTopicPack } from "./defineTopic";
import { futurePerfectContinuous } from "./future-perfect-continuous";

/**
 * "Structures" exercises for the future perfect and future continuous:
 * identify the form, then its purpose. Grouped as contrast sets — finished
 * (will have done) vs. in progress (will be doing) at the same future moment.
 */
export const futurePerfectContinuousStructures = defineTopicPack(
  futurePerfectContinuous,
  {
    structures: [
      // --- Ali's movie story ---
      {
        sentence: "If he doesn't hurry, I'll have finished the movie by the time he gets here.",
        highlight: "If he doesn't hurry, I'll have finished",
        structure: "If + present simple, + will have + past participle",
        distractors: [
          "If + will + base verb, + will have + past participle",
          "If + present simple, + will + past participle",
          "If + past simple, + would have + past participle",
        ],
        goalId: "hypothetical",
        explanation:
          "A possible future condition + its imagined completed result. ✗ 'If he won't hurry'.",
      },
      {
        sentence: "I'll have finished the movie by the time he gets here.",
        highlight: "by the time he gets here",
        structure: "by the time + present simple",
        distractors: [
          "by the time + will + base verb",
          "by the time + will have + past participle",
          "by the time + present continuous",
        ],
        goalId: "completed",
        explanation:
          "After 'by the time' (and when, before, until), use the present simple even for the future.",
      },
      {
        sentence: "I think I'll be watching TV until midnight.",
        highlight: "I'll be watching TV until midnight",
        structure: "will be + verb-ing + until + time",
        distractors: [
          "will have + past participle + until + time",
          "will + verb-ing + until + time",
          "will be + past participle + until + time",
        ],
        goalId: "in-progress",
        explanation:
          "The future continuous describes an activity going on during a future period. ✗ 'I'll watching'.",
      },

      // --- same moment: finished vs. in progress ---
      {
        sentence: "At 9 p.m., I'll have done my homework.",
        highlight: "I'll have done",
        structure: "will have + past participle",
        distractors: [
          "will be + verb-ing",
          "will have + verb-ing",
          "will + past participle",
        ],
        goalId: "completed",
        explanation:
          "At 9 p.m. the homework will be finished. Compare with 'At 9 p.m., I'll be doing my homework' (in progress).",
      },
      {
        sentence: "At 9 p.m., I'll be doing my homework.",
        highlight: "I'll be doing",
        structure: "will be + verb-ing",
        distractors: [
          "will have + past participle",
          "will be + past participle",
          "will + verb-ing",
        ],
        goalId: "in-progress",
        explanation:
          "At 9 p.m. the homework will be in progress — started before, not finished yet.",
      },
      {
        sentence: "By 2030, they will have built the new airport.",
        highlight: "will have built",
        structure: "by + future time, + will have + past participle",
        distractors: [
          "by + future time, + will be + verb-ing",
          "by + future time, + will + base verb",
          "by + future time, + will have + base verb",
        ],
        goalId: "completed",
        explanation:
          "'by + time' = no later than that point. The construction will be complete.",
      },
      {
        sentence: "This time next year, I'll be living in Canada.",
        highlight: "This time next year, I'll be living",
        structure: "This time + future time, + will be + verb-ing",
        distractors: [
          "This time + future time, + will have + past participle",
          "This time + future time, + am + verb-ing",
          "This time + future time, + will + verb-ing",
        ],
        goalId: "in-progress",
        explanation:
          "'This time next year' places us in the middle of a future situation.",
      },

      // --- duration up to a future point ---
      {
        sentence: "Next June, I will have worked here for five years.",
        highlight: "will have worked here for five years",
        structure: "will have + past participle + for + period",
        distractors: [
          "will be + verb-ing + for + period",
          "will have + verb-ing + for + period",
          "have + past participle + for + period",
        ],
        goalId: "completed",
        explanation:
          "The future perfect looks back from a future point: by next June, five years will be complete.",
      },

      // --- hypothetical with continuous ---
      {
        sentence: "If you come at seven, we'll still be cooking.",
        highlight: "If you come at seven, we'll still be cooking",
        structure: "If + present simple, + will + still + be + verb-ing",
        distractors: [
          "If + will + base verb, + will be + verb-ing",
          "If + present simple, + will have + past participle",
          "If + present simple, + will + still + verb-ing",
        ],
        goalId: "hypothetical",
        explanation:
          "A possible future condition + an action that will be in progress then.",
      },
      {
        sentence: "If we don't leave now, the shop will have closed.",
        highlight: "the shop will have closed",
        structure: "If + present simple, + will have + past participle",
        distractors: [
          "If + present simple, + will be + verb-ing",
          "If + present simple, + will + past participle",
          "If + will + base verb, + will have + past participle",
        ],
        goalId: "hypothetical",
        explanation:
          "The imagined result: by the time we get there, the closing will be complete.",
      },

      // --- expected events / polite questions ---
      {
        sentence: "Will you be using the printer this afternoon?",
        highlight: "Will you be using",
        structure: "Will you be + verb-ing? (asking about plans)",
        distractors: [
          "Will you + base verb? (request)",
          "Will you have + past participle?",
          "Are you going to + base verb?",
        ],
        goalId: "expected",
        explanation:
          "A polite way to ask about plans, often before asking a favour. 'Will you use the printer?' sounds like a request.",
      },
      {
        sentence: "I'll be passing the post office anyway, so I'll send your letter.",
        highlight: "I'll be passing the post office anyway",
        structure: "will be + verb-ing + anyway (expected event)",
        distractors: [
          "will + base verb (instant decision)",
          "will have + past participle",
          "be going to + base verb (firm intention)",
        ],
        goalId: "expected",
        explanation:
          "The future continuous shows something that will happen in the normal course of events — 'anyway' is a typical signal.",
      },
    ],
  },
);
