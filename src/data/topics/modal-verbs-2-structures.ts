import { defineTopicPack } from "./defineTopic";
import { modalVerbs2 } from "./modal-verbs-2";

/**
 * "Structures" exercises for modal verbs 2: identify the form, then its
 * purpose. Grouped as contrast sets — should vs. should have vs. had better.
 */
export const modalVerbs2Structures = defineTopicPack(modalVerbs2, {
  structures: [
    // --- same situation: advice, regret, warning ---
    {
      sentence: "You should study for the exam.",
      highlight: "should study",
      structure: "should + base verb",
      distractors: [
        "should + to + base verb",
        "should have + past participle",
        "had better + base verb",
      ],
      goalId: "advice",
      explanation:
        "Advice about the present or future. ✗ 'should to study'.",
    },
    {
      sentence: "I should have studied for the exam.",
      highlight: "should have studied",
      structure: "should have + past participle",
      distractors: [
        "should + past participle",
        "should have + base verb",
        "had better + past participle",
      ],
      goalId: "regrets",
      explanation:
        "The exam is over: it was a good idea to study, but I didn't. That's a regret.",
    },
    {
      sentence: "You'd better study for the exam, or you'll fail.",
      highlight: "You'd better study",
      structure: "had better + base verb",
      distractors: [
        "had better + to + base verb",
        "would better + base verb",
        "should have + past participle",
      ],
      goalId: "warnings",
      explanation:
        "Strong advice with a warning ('or you'll fail'). 'd = had. ✗ 'You'd better to study'.",
    },

    // --- negatives ---
    {
      sentence: "You shouldn't eat so much sugar.",
      highlight: "shouldn't eat",
      structure: "shouldn't + base verb",
      distractors: [
        "don't should + base verb",
        "shouldn't have + past participle",
        "had better not + base verb",
      ],
      goalId: "advice",
      explanation: "General advice against something.",
    },
    {
      sentence: "I shouldn't have eaten that last piece of cake.",
      highlight: "shouldn't have eaten",
      structure: "shouldn't have + past participle",
      distractors: [
        "shouldn't + base verb",
        "didn't should + base verb",
        "hadn't better + past participle",
      ],
      goalId: "regrets",
      explanation: "I ate it, and now I regret it.",
    },
    {
      sentence: "You'd better not eat that — it's been in the fridge for two weeks.",
      highlight: "You'd better not eat",
      structure: "had better not + base verb",
      distractors: [
        "hadn't better + base verb",
        "had not better + base verb",
        "shouldn't have + past participle",
      ],
      goalId: "warnings",
      explanation:
        "Warning: if you eat it, you might get sick. The negative is 'had better not' (✗ hadn't better).",
    },

    // --- questions: suggestions vs. advice ---
    {
      sentence: "Should we watch a movie tonight?",
      highlight: "Should we watch",
      structure: "Should + we + base verb?",
      distractors: [
        "Do we should + base verb?",
        "Had we better + base verb?",
        "Should + we + to + base verb?",
      ],
      goalId: "suggestions",
      explanation:
        "'Should we…?' proposes a plan and asks for agreement. ✗ 'Do we should…?'",
    },
    {
      sentence: "Where should we go for dinner?",
      highlight: "Where should we go",
      structure: "Wh- + should + subject + base verb?",
      distractors: [
        "Wh- + do + subject + should + base verb?",
        "Wh- + should + subject + to + base verb?",
        "Wh- + had + subject + better + base verb?",
      ],
      goalId: "suggestions",
      explanation: "A wh- question with 'should' asks for suggestions.",
    },
    {
      sentence: "Do you think I should change jobs?",
      highlight: "Do you think I should change",
      structure: "Do you think + subject + should + base verb?",
      distractors: [
        "Do you think + subject + should + to + base verb?",
        "Should + you + think + base verb?",
        "Do you think + subject + had better + past participle?",
      ],
      goalId: "advice",
      explanation:
        "A softer, very common way to ask for advice about a personal decision.",
    },

    // --- opinion: I don't think … should ---
    {
      sentence: "I don't think you should buy that car.",
      highlight: "I don't think you should buy",
      structure: "I don't think + subject + should + base verb",
      distractors: [
        "I think + subject + don't should + base verb",
        "I don't think + subject + should have + past participle",
        "I don't think + subject + had better + base verb",
      ],
      goalId: "advice",
      explanation:
        "English prefers 'I don't think you should…' to 'I think you shouldn't…'.",
    },

    // --- criticism of others ---
    {
      sentence: "He should have asked before taking my car.",
      highlight: "should have asked",
      structure: "should have + past participle (criticism)",
      distractors: [
        "should + base verb (advice)",
        "had better + base verb (warning)",
        "should + past participle",
      ],
      goalId: "regrets",
      explanation:
        "With he/she/you, 'should have' criticises someone's past behaviour: he didn't ask.",
    },

    // --- suggestion: enjoyable recommendation ---
    {
      sentence: "You should come with us to the concert — it'll be great!",
      highlight: "You should come",
      structure: "You should + base verb (enthusiastic suggestion)",
      distractors: [
        "You had better + base verb (warning)",
        "You should have + past participle (criticism)",
        "You should + to + base verb",
      ],
      goalId: "suggestions",
      explanation:
        "Here 'should' recommends something fun — no problem to solve, no danger.",
    },

    // --- warning with consequence ---
    {
      sentence: "We'd better leave now, or we'll miss the last train.",
      highlight: "We'd better leave now, or we'll miss",
      structure: "had better + base verb, + or + will + base verb",
      distractors: [
        "should have + past participle, + or + will + base verb",
        "had better + base verb, + if + will + base verb",
        "would better + base verb, + or + will + base verb",
      ],
      goalId: "warnings",
      explanation:
        "'had better…, or…' names the negative consequence directly.",
    },
  ],
});
