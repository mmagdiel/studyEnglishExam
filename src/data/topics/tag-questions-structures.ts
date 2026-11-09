import { defineTopicPack } from "./defineTopic";
import { tagQuestions } from "./tag-questions";

/**
 * "Structures" exercises for tag questions: identify the form, then its
 * purpose. Grouped as contrast sets — tag formation rules, plus how the
 * sentence type (statement / Let's / imperative / negative) changes the goal.
 */
export const tagQuestionsStructures = defineTopicPack(tagQuestions, {
  structures: [
    // --- formation rules: confirming information ---
    {
      sentence: "You work at the bank, don't you?",
      highlight: "don't you?",
      structure: "positive (present simple) + don't/doesn't + subject?",
      distractors: [
        "positive (present simple) + aren't + subject?",
        "positive (present simple) + do + subject?",
        "positive (present simple) + won't + subject?",
      ],
      goalId: "confirm",
      explanation:
        "No auxiliary in the sentence → use do/does in the tag. Positive → negative.",
    },
    {
      sentence: "They haven't arrived yet, have they?",
      highlight: "have they?",
      structure: "negative + positive auxiliary + subject?",
      distractors: [
        "negative + negative auxiliary + subject?",
        "negative + do + subject?",
        "negative + positive auxiliary + it?",
      ],
      goalId: "confirm",
      explanation:
        "Negative sentence → positive tag, repeating the same auxiliary (have).",
    },
    {
      sentence: "Nobody called while I was out, did they?",
      highlight: "did they?",
      structure: "Nobody / Everyone… + auxiliary + they?",
      distractors: [
        "Nobody… + didn't + they?",
        "Nobody… + did + he?",
        "Nobody… + did + nobody?",
      ],
      goalId: "confirm",
      explanation:
        "'Nobody' is negative, so the tag is positive. Use 'they' for nobody / somebody / everyone.",
    },
    {
      sentence: "I'm invited to the party, aren't I?",
      highlight: "aren't I?",
      structure: "I am… + aren't I?",
      distractors: [
        "I am… + amn't I?",
        "I am… + isn't I?",
        "I am… + don't I?",
      ],
      goalId: "confirm",
      explanation: "The only irregular form: 'I am' → 'aren't I?'.",
    },

    // --- agreement ---
    {
      sentence: "This coffee is really good, isn't it?",
      highlight: "isn't it?",
      structure: "positive opinion + negative tag (falling ↘)",
      distractors: [
        "positive opinion + positive tag",
        "imperative + will you?",
        "Let's… + shall we?",
      ],
      goalId: "agreement",
      explanation:
        "An opinion + falling intonation: the speaker expects agreement, not information.",
    },
    {
      sentence: "There are too many people here, aren't there?",
      highlight: "aren't there?",
      structure: "There is/are… + isn't/aren't + there?",
      distractors: [
        "There are… + aren't + they?",
        "There are… + isn't + it?",
        "There are… + don't + there?",
      ],
      goalId: "agreement",
      explanation: "With 'there is / there are', the tag repeats 'there'.",
    },
    {
      sentence: "We had a great time last night, didn't we?",
      highlight: "didn't we?",
      structure: "positive (past simple) + didn't + subject?",
      distractors: [
        "positive (past simple) + hadn't + subject?",
        "positive (past simple) + weren't + subject?",
        "positive (past simple) + don't + subject?",
      ],
      goalId: "agreement",
      explanation:
        "Here 'had' is the main verb (had a great time), so the tag uses 'did'. A shared experience → expecting agreement.",
    },

    // --- invitations & suggestions ---
    {
      sentence: "Let's eat out tonight, shall we?",
      highlight: "shall we?",
      structure: "Let's + base verb… + shall we?",
      distractors: [
        "Let's + base verb… + don't we?",
        "Let's + base verb… + will you?",
        "Let's + base verb… + aren't we?",
      ],
      goalId: "invitations",
      explanation: "The tag for 'Let's' is always 'shall we?'.",
    },
    {
      sentence: "You'll come to my graduation, won't you?",
      highlight: "won't you?",
      structure: "You'll + base verb… + won't you?",
      distractors: [
        "You'll + base verb… + will you?",
        "You'll + base verb… + don't you?",
        "You'll + base verb… + shall we?",
      ],
      goalId: "invitations",
      explanation:
        "'will' → 'won't' in the tag. It sounds like a warm, insistent invitation.",
    },
    {
      sentence: "You wouldn't like to join our book club, would you?",
      highlight: "You wouldn't like to join our book club, would you?",
      structure: "You wouldn't like… + would you? (tentative invitation)",
      distractors: [
        "You would like… + would you?",
        "You wouldn't like… + wouldn't you?",
        "imperative + will you?",
      ],
      goalId: "invitations",
      explanation:
        "Negative sentence + positive tag makes the invitation very polite and easy to refuse.",
    },

    // --- requests ---
    {
      sentence: "Help me carry this, will you?",
      highlight: "will you?",
      structure: "imperative + will / would / could you?",
      distractors: [
        "imperative + don't you?",
        "imperative + shall we?",
        "imperative + do you?",
      ],
      goalId: "requests",
      explanation:
        "After an imperative, use will / would / can / could you? to make a request.",
    },
    {
      sentence: "Don't forget to call me, will you?",
      highlight: "will you?",
      structure: "negative imperative + will you?",
      distractors: [
        "negative imperative + won't you?",
        "negative imperative + do you?",
        "negative imperative + shall we?",
      ],
      goalId: "requests",
      explanation: "After a negative imperative (Don't…), the tag is always 'will you?'.",
    },
    {
      sentence: "You couldn't turn the music down, could you?",
      highlight: "You couldn't turn the music down, could you?",
      structure: "You couldn't… + could you? (very polite request)",
      distractors: [
        "You could… + could you?",
        "You couldn't… + couldn't you?",
        "Let's… + shall we?",
      ],
      goalId: "requests",
      explanation:
        "Negative sentence + positive tag = a very polite, tentative request.",
    },
  ],
});
