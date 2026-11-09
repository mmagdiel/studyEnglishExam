import { defineTopicPack } from "./defineTopic";
import { emphaticDoObjectQuestions } from "./emphatic-do-object-questions";

/**
 * "Structures" exercises for emphatic do and object questions: identify the
 * form, then its purpose. Object questions are contrasted with subject
 * questions (no do/does/did), the most common confusion.
 */
export const emphaticDoObjectQuestionsStructures = defineTopicPack(
  emphaticDoObjectQuestions,
  {
    structures: [
      // --- emphatic do: form ---
      {
        sentence: "A: You don't like my cooking. B: I do like it! It's delicious.",
        highlight: "I do like it",
        structure: "do / does / did + base verb (emphatic)",
        distractors: [
          "do / does / did + verb-s / past form",
          "Do + subject + base verb?",
          "Do + imperative",
        ],
        goalId: "contrast",
        explanation:
          "B contradicts A: 'do like' insists that the opposite is true.",
      },
      {
        sentence: "She seems shy, but she does talk a lot with her friends.",
        highlight: "she does talk",
        structure: "does + base verb (emphatic)",
        distractors: [
          "does + verb-s",
          "is + verb-ing",
          "Does + subject + base verb?",
        ],
        goalId: "contrast",
        explanation:
          "Appearance (seems shy) vs. reality (talks a lot). ✗ 'does talks'.",
      },
      {
        sentence: "Nobody believed him, but he did finish the marathon.",
        highlight: "he did finish",
        structure: "did + base verb (emphatic)",
        distractors: [
          "did + past form",
          "has + past participle",
          "Did + subject + base verb?",
        ],
        goalId: "expectation",
        explanation:
          "The expectation (he wouldn't) vs. what happened. ✗ 'did finished'.",
      },
      {
        sentence: "I do apologise for the delay.",
        highlight: "I do apologise",
        structure: "do + base verb (stronger expression)",
        distractors: [
          "Do + imperative",
          "do + verb-ing",
          "Do + subject + base verb?",
        ],
        goalId: "stronger",
        explanation:
          "Emphatic 'do' makes apologies, thanks and feelings sound more sincere.",
      },

      // --- emphatic imperatives ---
      {
        sentence: "Do make yourself at home.",
        highlight: "Do make",
        structure: "Do + imperative",
        distractors: [
          "do + base verb (emphatic statement)",
          "Do + subject + base verb?",
          "Don't + imperative",
        ],
        goalId: "imperatives",
        explanation:
          "No subject: 'Do' + imperative = a warm, insistent invitation.",
      },
      {
        sentence: "Do stop shouting — the baby's asleep!",
        highlight: "Do stop",
        structure: "Do + imperative",
        distractors: [
          "do + base verb (emphatic statement)",
          "Who + did + subject + base verb?",
          "Do + subject + base verb?",
        ],
        goalId: "imperatives",
        explanation: "Here 'Do' makes the order more insistent and impatient.",
      },

      // --- who: object vs. subject ---
      {
        sentence: "Who did Tom invite to dinner?",
        highlight: "Who did Tom invite",
        structure: "Who + did + subject + base verb? (object question)",
        distractors: [
          "Who + past verb? (subject question)",
          "Who + did + subject + past form?",
          "Who + subject + past verb?",
        ],
        goalId: "who-object",
        explanation:
          "Tom did the inviting; 'who' is the receiver. Compare 'Who invited Tom?' (who did the inviting).",
      },
      {
        sentence: "Who does Sara live with?",
        highlight: "Who does Sara live with",
        structure: "Who + does + subject + base verb + preposition?",
        distractors: [
          "With who + Sara lives?",
          "Who + lives + with + subject?",
          "Who + does + subject + verb-s + preposition?",
        ],
        goalId: "who-object",
        explanation:
          "In conversation the preposition goes at the end: 'Who does she live with?'.",
      },

      // --- what: object vs. subject ---
      {
        sentence: "What did you have for breakfast?",
        highlight: "What did you have",
        structure: "What + did + subject + base verb? (object question)",
        distractors: [
          "What + past verb? (subject question)",
          "What + subject + past verb?",
          "What + did + subject + past form?",
        ],
        goalId: "what-object",
        explanation:
          "'you' is the subject; 'what' asks about the thing you had. ✗ 'What you had?'",
      },
      {
        sentence: "What is your sister studying at university?",
        highlight: "What is your sister studying",
        structure: "What + be + subject + verb-ing? (object question)",
        distractors: [
          "What + is + verb-ing + subject?",
          "What + subject + is + verb-ing?",
          "What + does + subject + verb-ing?",
        ],
        goalId: "what-object",
        explanation:
          "Object questions work with every auxiliary, not only do/does/did.",
      },
      {
        sentence: "What has the company decided?",
        highlight: "What has the company decided",
        structure: "What + have/has + subject + past participle?",
        distractors: [
          "What + subject + has + past participle?",
          "What + has + past participle + subject?",
          "What + did + subject + past participle?",
        ],
        goalId: "what-object",
        explanation: "Same pattern with the present perfect: auxiliary before the subject.",
      },

      // --- which: object vs. subject ---
      {
        sentence: "Which song did they play first?",
        highlight: "Which song did they play",
        structure: "Which + noun + did + subject + base verb?",
        distractors: [
          "Which + noun + past verb? (subject question)",
          "Which + noun + subject + past verb?",
          "Which + did + noun + subject + base verb?",
        ],
        goalId: "which-object",
        explanation:
          "'they' played the song; 'which song' is the object chosen from a limited set.",
      },
      {
        sentence: "Which of these photos do you like best?",
        highlight: "Which of these photos do you like",
        structure: "Which of + noun + do + subject + base verb?",
        distractors: [
          "Which of + noun + likes + subject?",
          "Which of + noun + subject + like?",
          "Which of + noun + does + subject + likes?",
        ],
        goalId: "which-object",
        explanation:
          "'Which of these…' limits the options. The subject 'you' comes after 'do'.",
      },
      {
        sentence: "Which bus did you take to get here?",
        highlight: "Which bus did you take",
        structure: "Which + noun + did + subject + base verb?",
        distractors: [
          "Which + noun + took + subject?",
          "Which + noun + subject + took?",
          "Which + noun + did + subject + took?",
        ],
        goalId: "which-object",
        explanation:
          "Compare 'Which bus goes to the centre?' (subject question — no 'do').",
      },
    ],
  },
);
