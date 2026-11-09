import { defineTopicPack } from "./defineTopic";
import { modalVerbs1 } from "./modal-verbs-1";

/**
 * "Structures" exercises for modal verbs 1: identify the form, then its
 * purpose. Grouped as contrast sets — especially "could", which serves
 * almost every goal in this topic.
 */
export const modalVerbs1Structures = defineTopicPack(modalVerbs1, {
  structures: [
    // --- the many faces of "could" ---
    {
      sentence: "When I was ten, I could ride a bike with no hands.",
      highlight: "I could ride",
      structure: "could + base verb (general past ability)",
      distractors: [
        "Could you + base verb? (request)",
        "could have + past participle",
        "could + to + base verb",
      ],
      goalId: "ability",
      explanation:
        "'When I was ten' places 'could' in the past: a general ability at that time.",
    },
    {
      sentence: "Could you pass me the salt?",
      highlight: "Could you pass",
      structure: "Could you + base verb? (request)",
      distractors: [
        "could + base verb (general past ability)",
        "We could + base verb (suggestion)",
        "Could you + to + base verb?",
      ],
      goalId: "requests",
      explanation:
        "In a question with 'you', 'could' is a polite request — not past tense.",
    },
    {
      sentence: "It's a nice day. We could have lunch in the park.",
      highlight: "We could have lunch",
      structure: "We could + base verb (suggestion)",
      distractors: [
        "could have + past participle",
        "Could you + base verb? (request)",
        "could + base verb (general past ability)",
      ],
      goalId: "suggestions",
      explanation:
        "Careful: here 'have' is the main verb (have lunch), not 'could have + participle'. It's a suggestion.",
    },
    {
      sentence: "Don't touch that cable — it could be dangerous.",
      highlight: "it could be dangerous",
      structure: "could + base verb (possibility)",
      distractors: [
        "could + base verb (general past ability)",
        "could have + past participle",
        "Could you + base verb? (request)",
      ],
      goalId: "possibility",
      explanation: "'could be' = it's possible that it is dangerous now.",
    },
    {
      sentence: "We could have won the match if we had played better.",
      highlight: "could have won",
      structure: "could have + past participle",
      distractors: [
        "could + base verb (general past ability)",
        "could have + base verb",
        "could + past participle",
      ],
      goalId: "past-possibility",
      explanation:
        "Winning was possible in the past, but it didn't happen. ✗ 'could have win' / ✗ 'could of won'.",
    },

    // --- ability: can / could / be able to ---
    {
      sentence: "I've never been able to understand physics.",
      highlight: "'ve never been able to understand",
      structure: "have + been able to + base verb",
      distractors: [
        "have + could + base verb",
        "have + can + base verb",
        "have + been able + base verb",
      ],
      goalId: "ability",
      explanation:
        "'can' has no perfect form, so use 'have been able to'. ✗ 'I've never could'.",
    },
    {
      sentence: "The door was locked, but we managed to get in through a window.",
      highlight: "managed to get in",
      structure: "managed to / was able to + base verb (specific success)",
      distractors: [
        "could + base verb (general past ability)",
        "could have + past participle",
        "might + base verb",
      ],
      goalId: "ability",
      explanation:
        "For a single difficult success in the past, use 'managed to' or 'was able to'. ✗ 'we could get in' sounds wrong here.",
    },
    {
      sentence: "I might be able to help you tomorrow.",
      highlight: "might be able to help",
      structure: "modal + be able to + base verb",
      distractors: [
        "might + can + base verb",
        "might + could + base verb",
        "might + able to + base verb",
      ],
      goalId: "ability",
      explanation:
        "Two modals can't go together, so use 'be able to' after 'might', 'will', 'should'…",
    },

    // --- requests: can / could / may ---
    {
      sentence: "May I ask you a personal question?",
      highlight: "May I ask",
      structure: "May I + base verb? (formal permission)",
      distractors: [
        "May you + base verb?",
        "might + base verb (possibility)",
        "May I + to + base verb?",
      ],
      goalId: "requests",
      explanation:
        "'May I…?' asks for permission formally. ✗ 'May you…?' — ask others with 'Could you…?'.",
    },

    // --- possibility: may / might / can't ---
    {
      sentence: "She might not come to the party; she's very busy.",
      highlight: "might not come",
      structure: "might not + base verb",
      distractors: [
        "can't + base verb",
        "might not + to + base verb",
        "don't might + base verb",
      ],
      goalId: "possibility",
      explanation:
        "'might not' = possibly not. 'She can't come' would mean she's unable or it's certain.",
    },
    {
      sentence: "You can't be hungry — you've just eaten!",
      highlight: "can't be hungry",
      structure: "can't + be (impossibility)",
      distractors: [
        "might not + be (weak possibility)",
        "couldn't have + past participle",
        "can't + base verb (inability)",
      ],
      goalId: "possibility",
      explanation:
        "'can't be' here = I'm sure it isn't true. It's a deduction, not inability.",
    },

    // --- past possibility: may / might have, couldn't have ---
    {
      sentence: "I can't find my wallet. I may have dropped it in the taxi.",
      highlight: "may have dropped",
      structure: "may / might have + past participle",
      distractors: [
        "may / might + past participle",
        "may / might have + base verb",
        "can have + past participle",
      ],
      goalId: "past-possibility",
      explanation:
        "A guess about something that possibly happened in the past.",
    },
    {
      sentence: "He couldn't have written this — he doesn't speak French.",
      highlight: "couldn't have written",
      structure: "couldn't have + past participle",
      distractors: [
        "might not have + past participle",
        "couldn't + base verb (past inability)",
        "couldn't have + past simple",
      ],
      goalId: "past-possibility",
      explanation:
        "'couldn't have' = I'm sure it didn't happen. 'might not have' = maybe it didn't.",
    },

    // --- suggestion with might ---
    {
      sentence: "You might want to save your work before the update.",
      highlight: "You might want to save",
      structure: "You might want to + base verb (polite suggestion)",
      distractors: [
        "might + base verb (possibility)",
        "might have + past participle",
        "May I + base verb?",
      ],
      goalId: "suggestions",
      explanation:
        "'You might want to…' is a soft, indirect way to suggest something.",
    },
  ],
});
