import { defineTopicPack } from "./defineTopic";
import { adjectives } from "./adjectives";

/**
 * "Structures" exercises for adjectives: identify the form, then its purpose.
 * Grouped as contrast sets — similar-looking forms that serve different goals.
 */
export const adjectivesStructures = defineTopicPack(adjectives, {
  structures: [
    // --- -ing vs -ed: opinion vs. describing a person's state ---
    {
      sentence: "The lesson was boring.",
      highlight: "was boring",
      structure: "be + -ing adjective (what causes the feeling)",
      distractors: [
        "be + -ed adjective (how someone feels)",
        "be + absolutely + extreme adjective",
        "It + be + adjective + to + verb",
      ],
      goalId: "opinion",
      explanation:
        "'-ing' adjectives judge the thing that causes the feeling: it's your opinion of the lesson.",
    },
    {
      sentence: "The students were bored.",
      highlight: "were bored",
      structure: "be + -ed adjective (how someone feels)",
      distractors: [
        "be + -ing adjective (what causes the feeling)",
        "be + too + adjective + to + verb",
        "adjective + adjective + noun",
      ],
      goalId: "describe",
      explanation:
        "'-ed' adjectives describe the state of the people who have the feeling. ✗ 'The students were boring' would mean they made others bored!",
    },

    // --- Position: before nouns / after linking verbs ---
    {
      sentence: "You look tired.",
      highlight: "look tired",
      structure: "linking verb + adjective",
      distractors: [
        "linking verb + adverb (-ly)",
        "be + -ing adjective",
        "too + adjective",
      ],
      goalId: "describe",
      explanation:
        "After linking verbs (look, seem, feel, sound) use an adjective, not an adverb: ✗ 'You look tiredly'.",
    },
    {
      sentence: "They have two big black dogs.",
      highlight: "big black dogs",
      structure: "size + colour + plural noun",
      distractors: [
        "adjective + -s + plural noun",
        "noun + adjective + adjective",
        "colour + size + noun",
      ],
      goalId: "describe",
      explanation:
        "Adjectives go before the noun and never take -s (✗ bigs blacks dogs). Size comes before colour.",
    },

    // --- Order & compound adjectives: extra information ---
    {
      sentence: "She bought a beautiful old Italian table.",
      highlight: "beautiful old Italian table",
      structure: "opinion + age + origin + noun",
      distractors: [
        "origin + age + opinion + noun",
        "age + opinion + origin + noun",
        "noun + opinion + age + origin",
      ],
      goalId: "extra-info",
      explanation:
        "Order: opinion → size → age → shape → colour → origin → material → purpose → noun.",
    },
    {
      sentence: "He's a twenty-year-old student.",
      highlight: "twenty-year-old student",
      structure: "number-noun-adjective (compound) + noun",
      distractors: [
        "number + plural noun + old + noun",
        "noun + adjective (after the noun)",
        "-ed adjective + noun",
      ],
      goalId: "extra-info",
      explanation:
        "In compound adjectives the noun stays singular and words are joined with hyphens: ✗ 'twenty-years-old student'.",
    },

    // --- Opinion ---
    {
      sentence: "I find the city really exciting.",
      highlight: "find the city really exciting",
      structure: "find + object + adjective",
      distractors: [
        "find + object + adverb",
        "It + be + adjective + to + verb",
        "too + adjective + to + verb",
      ],
      goalId: "opinion",
      explanation:
        "'find + something + adjective' is a natural way to give your opinion based on experience.",
    },
    {
      sentence: "In my opinion, this is the best restaurant in town.",
      highlight: "the best restaurant",
      structure: "the + superlative + noun",
      distractors: [
        "the + more + good + noun",
        "the + better + noun",
        "adjective + enough + noun",
      ],
      goalId: "opinion",
      explanation: "'good → better → the best'. A superlative is a strong way to rate something.",
    },

    // --- Emphasis: absolutely / so / such ---
    {
      sentence: "The soup is absolutely delicious.",
      highlight: "absolutely delicious",
      structure: "absolutely + extreme adjective",
      distractors: [
        "very + extreme adjective",
        "too + adjective",
        "adjective + enough",
      ],
      goalId: "emphasis",
      explanation:
        "Extreme adjectives (delicious, freezing, huge) go with 'absolutely' or 'really', not 'very'.",
    },
    {
      sentence: "She was so tired that she fell asleep on the bus.",
      highlight: "so tired that",
      structure: "so + adjective + that + clause",
      distractors: [
        "such + adjective + that + clause",
        "It + be + adjective + that + clause",
        "too + adjective + to + verb",
      ],
      goalId: "emphasis",
      explanation:
        "'so + adjective + that' emphasizes the adjective and shows its result. Compare 'It's likely that…' (possibility).",
    },
    {
      sentence: "It was such a long journey.",
      highlight: "such a long journey",
      structure: "such + a/an + adjective + noun",
      distractors: [
        "so + a/an + adjective + noun",
        "so + adjective + that + clause",
        "very + extreme adjective",
      ],
      goalId: "emphasis",
      explanation:
        "Use 'such a' when a noun follows (such a long journey) and 'so' when it doesn't (the journey was so long).",
    },

    // --- Features: too / enough / comparatives / suffixes ---
    {
      sentence: "The suitcase is too heavy to lift.",
      highlight: "too heavy to lift",
      structure: "too + adjective + to + verb",
      distractors: [
        "adjective + enough + to + verb",
        "so + adjective + that + clause",
        "It + be + adjective + to + verb",
      ],
      goalId: "features",
      explanation:
        "'too + adjective + to' means the action is not possible: nobody can lift it.",
    },
    {
      sentence: "He is tall enough to reach the top shelf.",
      highlight: "tall enough to reach",
      structure: "adjective + enough + to + verb",
      distractors: [
        "enough + adjective + to + verb",
        "too + adjective + to + verb",
        "such + a/an + adjective + noun",
      ],
      goalId: "features",
      explanation:
        "'enough' goes after the adjective (✗ enough tall) and means the action is possible.",
    },
    {
      sentence: "Smartphones are faster than old computers.",
      highlight: "faster than",
      structure: "adjective-er + than",
      distractors: [
        "more + adjective-er + than",
        "as + adjective + than",
        "the + adjective-est",
      ],
      goalId: "features",
      explanation:
        "Short adjectives add -er + than to compare features. ✗ 'more faster' doubles the comparison.",
    },
    {
      sentence: "These coffee cups are reusable.",
      highlight: "reusable",
      structure: "verb + -able (can be done)",
      distractors: [
        "noun + -less (without)",
        "noun + -ful (full of)",
        "-ed adjective (a feeling)",
      ],
      goalId: "features",
      explanation:
        "'-able' adjectives describe what can be done with something: reusable = can be used again.",
    },

    // --- Impersonal: It + be + adjective ---
    {
      sentence: "It's important to arrive early.",
      highlight: "It's important to arrive",
      structure: "It + be + adjective + to + base verb",
      distractors: [
        "Is + adjective + to + base verb",
        "be + -ing adjective",
        "adjective + enough + to + verb",
      ],
      goalId: "impersonal",
      explanation:
        "English needs the subject 'It'. ✗ 'Is important to arrive early' is a common mistake for Spanish speakers.",
    },
    {
      sentence: "It's likely that prices will go up next year.",
      highlight: "It's likely that",
      structure: "It + be + adjective + that + clause",
      distractors: [
        "It + be + adjective + to + base verb",
        "so + adjective + that + clause",
        "be + -ed adjective",
      ],
      goalId: "impersonal",
      explanation:
        "'It's likely/possible that + clause' talks about possibility. Compare 'so tired that…', which emphasizes.",
    },
    {
      sentence: "It's common for teenagers to sleep late at the weekend.",
      highlight: "It's common for teenagers to sleep",
      structure: "It + be + adjective + for + person + to + verb",
      distractors: [
        "It + be + adjective + that + clause",
        "too + adjective + for + person",
        "adjective + enough + to + verb",
      ],
      goalId: "impersonal",
      explanation:
        "'It's common/usual/rare for + person + to + verb' talks about how often something happens.",
    },
  ],
});
