import { defineTopicPack } from "./defineTopic";
import { adverbs } from "./adverbs";

/**
 * "Structures" exercises for adverbs: identify the form, then its purpose.
 * Grouped as contrast sets — similar-looking forms that serve different goals.
 */
export const adverbsStructures = defineTopicPack(adverbs, {
  structures: [
    // --- manner: active vs. passive position ---
    {
      sentence: "She finished the exam quickly.",
      highlight: "finished the exam quickly",
      structure: "verb + object + adverb (-ly)",
      distractors: [
        "verb + adverb (-ly) + object",
        "adverb (-ly), + main clause",
        "have + already + past participle",
      ],
      goalId: "manner",
      explanation:
        "Manner adverbs go after the object, not between the verb and the object. ✗ 'She finished quickly the exam.'",
    },
    {
      sentence: "The report was carefully checked by the manager.",
      highlight: "was carefully checked",
      structure: "be + adverb (-ly) + past participle",
      distractors: [
        "be + past participle + adverb (-ly)",
        "adverb (-ly), + main clause",
        "verb + object + adverb (-ly)",
      ],
      goalId: "manner",
      explanation:
        "In the passive, the manner adverb usually sits before the participle: it tells us how the action was done.",
    },
    {
      sentence: "He works hard every day.",
      highlight: "works hard",
      structure: "verb + irregular adverb (same form as adjective)",
      distractors: [
        "verb + adverb (-ly)",
        "verb + adverb of place",
        "hardly + verb",
      ],
      goalId: "manner",
      explanation:
        "'hard', 'fast', 'late' and 'early' have no -ly form as manner adverbs. 'hardly' means 'almost not'.",
    },

    // --- time: definite vs. indefinite ---
    {
      sentence: "I met him three weeks ago.",
      highlight: "three weeks ago",
      structure: "period of time + ago",
      distractors: [
        "ago + period of time",
        "for + period of time",
        "have + already + past participle",
      ],
      goalId: "time",
      explanation:
        "'ago' comes after the period and goes with the past simple. ✗ 'ago three weeks' / ✗ 'I have met him three weeks ago'.",
    },
    {
      sentence: "We've already booked the tickets.",
      highlight: "'ve already booked",
      structure: "have + already + past participle",
      distractors: [
        "have + past participle + already + object",
        "have + past participle + yet",
        "adverb (-ly), + main clause",
      ],
      goalId: "time",
      explanation:
        "'already' goes between 'have' and the past participle in affirmative sentences.",
    },
    {
      sentence: "Has the parcel arrived yet?",
      highlight: "arrived yet",
      structure: "question / negative + yet (at the end)",
      distractors: [
        "have + yet + past participle",
        "have + already + past participle",
        "verb + adverb of place",
      ],
      goalId: "time",
      explanation:
        "'yet' is used in questions and negatives, normally at the end of the sentence.",
    },

    // --- place: no preposition before place adverbs ---
    {
      sentence: "We went home after the movie.",
      highlight: "went home",
      structure: "verb of movement + home (no 'to')",
      distractors: [
        "verb of movement + to + home",
        "verb + at + home",
        "verb + adverb (-ly)",
      ],
      goalId: "place",
      explanation:
        "'home', 'here', 'there' and 'abroad' are adverbs, so no 'to': go home, come here, travel abroad.",
    },
    {
      sentence: "Let's eat outside today.",
      highlight: "eat outside",
      structure: "verb + adverb of place",
      distractors: [
        "verb + adverb (-ly)",
        "verb + in + adverb of place",
        "period of time + ago",
      ],
      goalId: "place",
      explanation:
        "'outside' answers 'where?'. Place usually comes before time: 'eat outside today'.",
    },
    {
      sentence: "She has lived abroad for five years.",
      highlight: "lived abroad",
      structure: "verb + abroad (no preposition)",
      distractors: [
        "verb + in + abroad",
        "verb + to + abroad",
        "verb + object + adverb (-ly)",
      ],
      goalId: "place",
      explanation: "✗ 'lived in abroad' — 'abroad' already contains the idea of 'in another country'.",
    },

    // --- circumstance: comment, intention, company ---
    {
      sentence: "Fortunately, the bus was late too.",
      highlight: "Fortunately,",
      structure: "adverb (-ly), + main clause",
      distractors: [
        "verb + object + adverb (-ly)",
        "be + adverb (-ly) + past participle",
        "period of time + ago",
      ],
      goalId: "circumstance",
      explanation:
        "A comment adverb at the start, followed by a comma, gives the speaker's view of the whole situation — not how the bus moved.",
    },
    {
      sentence: "Honestly, I didn't do it on purpose.",
      highlight: "do it on purpose",
      structure: "verb + object + on purpose / by accident",
      distractors: [
        "verb + object + adverb of place",
        "verb + for + purpose",
        "have + already + past participle",
      ],
      goalId: "circumstance",
      explanation:
        "'on purpose' (deliberately) and 'by accident' (accidentally) describe the intention behind the action.",
    },
    {
      sentence: "My grandmother lives alone in a small flat.",
      highlight: "lives alone",
      structure: "verb + alone / together",
      distractors: [
        "verb + adverb (-ly)",
        "verb + lonely",
        "verb + adverb of place",
      ],
      goalId: "circumstance",
      explanation:
        "'alone' says nobody is with her (a circumstance). Don't confuse it with 'lonely', an adjective for a sad feeling.",
    },

    // --- same adverb, different job ---
    {
      sentence: "Sadly, he left the company.",
      highlight: "Sadly,",
      structure: "adverb (-ly), + main clause",
      distractors: [
        "verb + object + adverb (-ly)",
        "be + adverb (-ly) + past participle",
        "verb + alone / together",
      ],
      goalId: "circumstance",
      explanation:
        "At the start with a comma, 'Sadly' is the speaker's comment: it's a pity that he left.",
    },
    {
      sentence: "He looked at the photo sadly.",
      highlight: "looked at the photo sadly",
      structure: "verb + object + adverb (-ly)",
      distractors: [
        "adverb (-ly), + main clause",
        "verb + alone / together",
        "be + adverb (-ly) + past participle",
      ],
      goalId: "manner",
      explanation:
        "At the end, 'sadly' describes how he looked at it. Compare with 'Sadly, he left the company' (a comment on the situation).",
    },
  ],
});
