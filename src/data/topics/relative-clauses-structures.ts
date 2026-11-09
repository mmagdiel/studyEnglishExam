import { defineTopicPack } from "./defineTopic";
import { relativeClauses } from "./relative-clauses";

/**
 * "Structures" exercises for relative clauses: identify the form, then its
 * purpose. Grouped as contrast sets — defining vs. non-defining, which vs.
 * what, whose vs. who's, where vs. which.
 */
export const relativeClausesStructures = defineTopicPack(relativeClauses, {
  structures: [
    // --- defining vs. non-defining ---
    {
      sentence: "My cousin who lives in Spain is a chef.",
      highlight: "who lives in Spain",
      structure: "noun + who/that + clause (no commas)",
      distractors: [
        "noun, + who + clause, (commas)",
        "noun + whose + noun + clause",
        "noun + what + clause",
      ],
      goalId: "identify",
      explanation:
        "No commas: the speaker has several cousins, and the clause identifies which one.",
    },
    {
      sentence: "My cousin, who lives in Spain, is a chef.",
      highlight: ", who lives in Spain,",
      structure: "noun, + who/which + clause, (commas)",
      distractors: [
        "noun + who/that + clause (no commas)",
        "noun, + that + clause,",
        "clause, + which + comment",
      ],
      goalId: "extra",
      explanation:
        "With commas: there's only one cousin, and the clause just adds extra information.",
    },
    {
      sentence: "The laptop I bought last week has stopped working.",
      highlight: "The laptop I bought",
      structure: "noun + (pronoun omitted) + subject + verb",
      distractors: [
        "noun, + which + clause,",
        "noun + what + subject + verb",
        "noun + whose + noun + verb",
      ],
      goalId: "identify",
      explanation:
        "When the relative pronoun is the object (I bought it), it can be omitted in defining clauses.",
    },
    {
      sentence: "The Nile, which flows through eleven countries, is very long.",
      highlight: ", which flows through eleven countries,",
      structure: "noun, + which + clause, (commas)",
      distractors: [
        "noun, + that + clause,",
        "noun + which + clause (no commas)",
        "noun, + what + clause,",
      ],
      goalId: "extra",
      explanation:
        "There's only one Nile, so the information is extra. ✗ ', that flows'.",
    },

    // --- joining ---
    {
      sentence: "I work with a woman who used to be a professional dancer.",
      highlight: "a woman who used to be",
      structure: "noun + who + verb (pronoun = subject)",
      distractors: [
        "noun + who + she + verb",
        "noun + which + verb",
        "noun + whose + verb",
      ],
      goalId: "join",
      explanation:
        "'who' replaces 'she' and joins the two sentences. ✗ 'a woman who she used to be'.",
    },

    // --- what vs. which/that ---
    {
      sentence: "What you need is a good night's sleep.",
      highlight: "What you need",
      structure: "What + subject + verb (= the thing that)",
      distractors: [
        "That + subject + verb",
        "Which + subject + verb",
        "The thing what + subject + verb",
      ],
      goalId: "what",
      explanation:
        "'What' contains the noun ('the thing that'). It can be the subject of the sentence.",
    },
    {
      sentence: "Everything that he said was true.",
      highlight: "Everything that he said",
      structure: "everything/something/all + that + clause",
      distractors: [
        "everything + what + clause",
        "everything + which + clause",
        "everything, + which + clause",
      ],
      goalId: "what",
      explanation:
        "After everything / something / anything / all, use 'that' (or nothing). ✗ 'Everything what he said'.",
    },

    // --- which for a whole situation vs. the fact that ---
    {
      sentence: "She got the job, which made her parents very proud.",
      highlight: ", which made her parents very proud",
      structure: "clause, + which + comment",
      distractors: [
        "clause, + what + comment",
        "clause + that + comment",
        "The fact that + clause + verb",
      ],
      goalId: "situation",
      explanation:
        "', which' refers back to the whole idea (getting the job), not just 'the job'.",
    },
    {
      sentence: "The fact that she got the job made her parents very proud.",
      highlight: "The fact that she got the job",
      structure: "The fact that + clause + verb",
      distractors: [
        "clause, + which + comment",
        "What + clause + verb",
        "The fact which + clause + verb",
      ],
      goalId: "fact",
      explanation:
        "Same idea, but here the situation becomes the subject of the sentence.",
    },

    // --- whose vs. who's ---
    {
      sentence: "We visited a family whose house was built in 1700.",
      highlight: "whose house",
      structure: "noun + whose + noun",
      distractors: [
        "noun + who's + noun",
        "noun + who + their + noun",
        "noun + which + noun",
      ],
      goalId: "possession",
      explanation:
        "'whose house' = their house. ✗ 'who's house' (who's = who is).",
    },

    // --- where / when / why vs. which ---
    {
      sentence: "That's the restaurant where we had our first date.",
      highlight: "where we had our first date",
      structure: "place + where + clause",
      distractors: [
        "place + which + clause (no preposition)",
        "place + what + clause",
        "place + whose + clause",
      ],
      goalId: "place-time-reason",
      explanation:
        "'where' = at which. Compare: 'the restaurant which we recommended' (object — no 'at').",
    },
    {
      sentence: "I'll never forget the moment when I saw the ocean for the first time.",
      highlight: "the moment when I saw",
      structure: "time + when + clause",
      distractors: [
        "time + where + clause",
        "time + which + clause",
        "time + what + clause",
      ],
      goalId: "place-time-reason",
      explanation: "'when' after a time noun = on/in/at which.",
    },
    {
      sentence: "That's the reason why I didn't call you.",
      highlight: "the reason why",
      structure: "the reason + why + clause",
      distractors: [
        "the reason + because + clause",
        "the reason + what + clause",
        "the reason + where + clause",
      ],
      goalId: "place-time-reason",
      explanation:
        "'the reason why' (or 'the reason that'). ✗ 'the reason because'.",
    },
  ],
});
