import { defineTopicPack } from "./defineTopic";
import { prepositions } from "./prepositions";

/**
 * "Structures" exercises for prepositions: identify the form, then its purpose.
 * Grouped as contrast sets — similar-looking forms that serve different goals.
 */
export const prepositionsStructures = defineTopicPack(prepositions, {
  structures: [
    // --- "like" vs "as": similarity vs. real identity ---
    {
      sentence: "She talks like a teacher.",
      highlight: "talks like a teacher",
      structure: "verb + like + noun",
      distractors: [
        "verb + as + noun",
        "verb + to + base verb",
        "adjective + of + noun",
      ],
      goalId: "similarity",
      explanation:
        "'like + noun' compares: she sounds similar to a teacher, but she probably isn't one.",
    },
    {
      sentence: "She works as a teacher.",
      highlight: "works as a teacher",
      structure: "verb + as + noun",
      distractors: [
        "verb + like + noun",
        "verb + for + noun",
        "at + place",
      ],
      goalId: "identity",
      explanation:
        "'as + noun' gives the real role: teaching is actually her job. Compare with 'She talks like a teacher'.",
    },
    {
      sentence: "As a doctor, I can tell you this is serious.",
      highlight: "As a doctor",
      structure: "As + a/an + noun, + main clause",
      distractors: [
        "Like + a/an + noun, + main clause",
        "To + base verb, + main clause",
        "In + place, + main clause",
      ],
      goalId: "identity",
      explanation:
        "Starting with 'As + role' means the speaker speaks from their real position: they are a doctor.",
    },
    {
      sentence: "We used the sofa as a bed.",
      highlight: "used the sofa as a bed",
      structure: "use + object + as + noun",
      distractors: [
        "use + object + like + noun",
        "use + object + for + base verb",
        "use + object + to + noun",
      ],
      goalId: "identity",
      explanation:
        "'use X as Y' says what X actually served as: the sofa really functioned as a bed that night.",
    },

    // --- "to" vs "for": purpose ---
    {
      sentence: "I called to invite him to play soccer with me.",
      highlight: "called to invite",
      structure: "verb + to + base verb",
      distractors: [
        "verb + for + base verb",
        "verb + for + noun",
        "verb + like + noun",
      ],
      goalId: "purpose",
      explanation:
        "The infinitive of purpose ('to invite') explains why you did the action. ✗ 'I called for invite him' is a common mistake.",
    },
    {
      sentence: "We went out for dinner last night.",
      highlight: "for dinner",
      structure: "for + noun",
      distractors: [
        "to + base verb",
        "for + verb-ing",
        "at + place",
      ],
      goalId: "purpose",
      explanation:
        "When the purpose is a thing (dinner) rather than an action, use 'for + noun'.",
    },
    {
      sentence: "This knife is for cutting bread.",
      highlight: "is for cutting",
      structure: "be + for + verb-ing",
      distractors: [
        "be + to + base verb",
        "be + for + base verb",
        "be + as + noun",
      ],
      goalId: "purpose",
      explanation:
        "'be for + verb-ing' describes an object's function: what the knife is used for.",
    },

    // --- at / in / on / between: location ---
    {
      sentence: "I'll meet you at the station.",
      highlight: "at the station",
      structure: "at + specific point",
      distractors: [
        "in + enclosed space",
        "on + surface",
        "to + base verb",
      ],
      goalId: "location",
      explanation:
        "'at' marks a specific meeting point. 'in the station' would mean inside the building.",
    },
    {
      sentence: "The milk is in the fridge.",
      highlight: "in the fridge",
      structure: "in + enclosed space",
      distractors: [
        "at + specific point",
        "on + surface",
        "for + noun",
      ],
      goalId: "location",
      explanation: "'in' is used for things inside a container or closed space.",
    },
    {
      sentence: "The bakery is between the bank and the post office.",
      highlight: "between the bank and the post office",
      structure: "between + A + and + B",
      distractors: [
        "among + A + and + B",
        "next to + A + and + B",
        "similar to + A + and + B",
      ],
      goalId: "location",
      explanation:
        "'between' places something in the middle of two clearly separate things.",
    },

    // --- adjective + preposition: feelings ---
    {
      sentence: "I'm afraid of flying.",
      highlight: "afraid of flying",
      structure: "adjective + of + verb-ing",
      distractors: [
        "adjective + to + verb-ing",
        "adjective + for + base verb",
        "like + verb-ing",
      ],
      goalId: "feelings",
      explanation:
        "Fear adjectives take 'of', and after a preposition the verb goes in -ing form: afraid of flying.",
    },
    {
      sentence: "He's interested in learning Japanese.",
      highlight: "interested in learning",
      structure: "adjective + in + verb-ing",
      distractors: [
        "adjective + on + verb-ing",
        "adjective + to + base verb",
        "verb + as + noun",
      ],
      goalId: "feelings",
      explanation:
        "'interested' always takes 'in'. ✗ 'interested on' is a common mistake.",
    },
    {
      sentence: "We were shocked by the news.",
      highlight: "shocked by the news",
      structure: "adjective (-ed) + by + noun",
      distractors: [
        "adjective (-ed) + of + noun",
        "be + for + noun",
        "verb + like + noun",
      ],
      goalId: "feelings",
      explanation:
        "'-ed adjective + by' describes a reaction and what caused it.",
    },

    // --- similar to / the same as: similarity ---
    {
      sentence: "Your bag is similar to mine.",
      highlight: "similar to mine",
      structure: "similar to + noun/pronoun",
      distractors: [
        "similar of + noun/pronoun",
        "similar than + noun/pronoun",
        "as + noun",
      ],
      goalId: "similarity",
      explanation: "'similar' always takes 'to'. ✗ 'similar of' / 'similar than'.",
    },
    {
      sentence: "My answer was the same as yours.",
      highlight: "the same as yours",
      structure: "the same as + noun/pronoun",
      distractors: [
        "the same than + noun/pronoun",
        "the same that + noun/pronoun",
        "verb + as + noun",
      ],
      goalId: "similarity",
      explanation:
        "'the same as' compares two things. Here 'as' compares — it doesn't give a role like in 'She works as a teacher'.",
    },
  ],
});
