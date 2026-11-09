import { defineTopicPack } from "./defineTopic";
import { futureForms } from "./future-forms";

/**
 * "Structures" exercises for future forms: identify the form, then its
 * purpose. Grouped as contrast sets — the same situation expressed with
 * will / going to / present continuous / present simple.
 */
export const futureFormsStructures = defineTopicPack(futureForms, {
  structures: [
    // --- will vs. going to: decision now vs. decision before ---
    {
      sentence: "I know! I'll have a costume party for Fred.",
      highlight: "I'll have",
      structure: "will + base verb",
      distractors: [
        "be going to + base verb",
        "will + to + base verb",
        "present continuous + future time",
      ],
      goalId: "instant",
      explanation:
        "'I know!' signals an idea that comes now → will. ✗ 'I'll to have'. (We 'have' or 'throw' a party — ✗ 'make a party'.)",
    },
    {
      sentence: "I'm going to have a costume party for Fred. I decided last week.",
      highlight: "I'm going to have",
      structure: "be going to + base verb",
      distractors: [
        "will + base verb",
        "be going + base verb",
        "present simple + future time",
      ],
      goalId: "plans",
      explanation:
        "The decision was made before ('last week'), so 'going to'. Compare with 'I know! I'll have…'.",
    },
    {
      sentence: "I'm meeting Fred's friends at the café on Saturday.",
      highlight: "I'm meeting Fred's friends at the café on Saturday",
      structure: "present continuous + future time",
      distractors: [
        "present simple + future time",
        "will + base verb",
        "be going to + verb-ing",
      ],
      goalId: "plans",
      explanation:
        "An arrangement with other people, with a day and place agreed → present continuous.",
    },
    {
      sentence: "The party starts at eight, so don't be late.",
      highlight: "The party starts at eight",
      structure: "present simple + future time (timetable)",
      distractors: [
        "present continuous + future time",
        "will + base verb",
        "be going to + base verb",
      ],
      goalId: "plans",
      explanation:
        "Fixed schedules and timetables use the present simple for the future.",
    },

    // --- offers vs. requests ---
    {
      sentence: "Shall I make the cake?",
      highlight: "Shall I make",
      structure: "Shall I + base verb?",
      distractors: [
        "Will you + base verb?",
        "Shall I + to + base verb?",
        "Am I going to + base verb?",
      ],
      goalId: "offers",
      explanation:
        "'Shall I…?' offers your help. Compare with 'Will you make the cake?' (asking someone else).",
    },
    {
      sentence: "Will you make the cake?",
      highlight: "Will you make",
      structure: "Will you + base verb?",
      distractors: [
        "Shall I + base verb?",
        "Are you going to + base verb?",
        "Do you + base verb?",
      ],
      goalId: "requests",
      explanation:
        "'Will you + base verb?' asks the other person to do something.",
    },
    {
      sentence: "Leave the dishes — I'll wash them.",
      highlight: "I'll wash them",
      structure: "I'll + base verb (offer)",
      distractors: [
        "I'm going to + base verb (plan)",
        "Will you + base verb?",
        "I + present simple",
      ],
      goalId: "offers",
      explanation:
        "'I'll' + verb offers to do something right now. ✗ 'I wash them' (sounds like a habit).",
    },

    // --- predictions: evidence vs. opinion ---
    {
      sentence: "Look at those black clouds! It's going to rain.",
      highlight: "It's going to rain",
      structure: "be going to + base verb (present evidence)",
      distractors: [
        "will + base verb (opinion)",
        "present continuous + future time",
        "present simple + future time",
      ],
      goalId: "predictions",
      explanation:
        "We can see the evidence now (the clouds), so 'going to'.",
    },
    {
      sentence: "I think it will be sunny on Saturday.",
      highlight: "I think it will be",
      structure: "I think + will + base verb (opinion)",
      distractors: [
        "I think + be going to + base verb (present evidence)",
        "I think + present simple",
        "I think + will + to + base verb",
      ],
      goalId: "predictions",
      explanation:
        "'I think / I'm sure / probably + will' = a prediction based on opinion, not on what we see now.",
    },
    {
      sentence: "I don't think Fred will guess the surprise.",
      highlight: "I don't think Fred will guess",
      structure: "I don't think + will + base verb",
      distractors: [
        "I think + won't + base verb",
        "I don't think + is going + base verb",
        "I don't think + present continuous",
      ],
      goalId: "predictions",
      explanation:
        "English prefers 'I don't think… will' to 'I think… won't'. Both are correct, but the first is more natural.",
    },

    // --- firm intentions ---
    {
      sentence: "I'm not letting anyone in without a costume!",
      highlight: "I'm not letting",
      structure: "be + not + verb-ing (refusal)",
      distractors: [
        "will + not + base verb (prediction)",
        "present simple negative",
        "Shall I + base verb?",
      ],
      goalId: "intentions",
      explanation:
        "The negative present continuous can show a firm decision or refusal about the future.",
    },
    {
      sentence: "I'm going to finish this marathon, whatever happens.",
      highlight: "I'm going to finish",
      structure: "be going to + base verb (determination)",
      distractors: [
        "will + base verb (instant decision)",
        "present simple + future time",
        "Will you + base verb?",
      ],
      goalId: "intentions",
      explanation:
        "'going to' + 'whatever happens' shows strong determination.",
    },
    {
      sentence: "I won't tell anyone your secret, I promise.",
      highlight: "I won't tell",
      structure: "won't + base verb (promise / refusal)",
      distractors: [
        "don't + base verb",
        "am not going + base verb",
        "won't + to + base verb",
      ],
      goalId: "intentions",
      explanation:
        "'won't' expresses a firm intention not to do something — a promise or a refusal.",
    },
  ],
});
