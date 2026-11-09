import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const adverbs = defineTopic({
  id: "adverbs",
  title: "Adverbs",
  subtitle: "Mastering Adverbs",
  goals: [
    {
      id: "manner",
      title: "How Something Happened",
      translation: "Cómo pasó o cómo se hizo algo",
      description:
        "Adverbs of manner answer 'how?'. Most are adjective + -ly (quick → quickly, careful → carefully, easy → easily). Watch the irregulars: good → well, fast → fast, hard → hard (✗ hardly means 'almost not'). They usually go after the verb or after the object (✗ She speaks very well English). In the passive they go before the past participle: 'The room was beautifully decorated.'",
      examples: [
        "She closed the door quietly.",
        "He plays the guitar really well.",
        "The cake was beautifully decorated.",
      ],
    },
    {
      id: "time",
      title: "When Something Happened",
      translation: "Cuándo pasó o cuándo se hizo algo",
      description:
        "Adverbs of time answer 'when?': yesterday, today, tonight, tomorrow, now, then, soon, later, recently, already, yet, still, ago. Definite times (yesterday, last week, two days ago) usually go at the end. 'Already' goes before the main verb, 'yet' at the end of questions and negatives, 'just' between have and the participle.",
      examples: [
        "I saw her yesterday.",
        "The package was delivered two days ago.",
        "Have you finished your homework yet?",
      ],
    },
    {
      id: "place",
      title: "Where Something Happened",
      translation: "Dónde pasó o dónde se hizo algo",
      description:
        "Adverbs of place answer 'where?': here, there, everywhere, somewhere, nowhere, inside, outside, upstairs, downstairs, abroad, nearby, home, away. They usually go after the verb or object. Don't use 'to' before 'home', 'here', 'there' or 'abroad' (✗ I went to home).",
      examples: [
        "The children are playing outside.",
        "I looked everywhere for my keys.",
        "She went home early.",
      ],
    },
    {
      id: "circumstance",
      title: "Circumstances",
      translation: "En qué circunstancias pasó o se hizo algo",
      description:
        "Some adverbs describe the circumstances around an action: luck or attitude (luckily, unfortunately, surprisingly, apparently), intention (accidentally, deliberately, on purpose), company (alone, together) or order (first, finally, suddenly). Comment adverbs like 'luckily' usually go at the start, followed by a comma.",
      examples: [
        "Luckily, nobody was hurt in the accident.",
        "I accidentally deleted the file.",
        "We travelled together to Paris.",
      ],
    },
  ],
  reading: [
    // --- MANNER ---
    {
      sentence: "She opened the letter carefully, trying not to tear it.",
      question: INTENT_QUESTION,
      options: [
        "Saying when she opened the letter",
        "Saying how she opened the letter",
        "Saying where she opened the letter",
        "Giving her opinion about the letter",
      ],
      correctIndex: 1,
      explanation:
        "'carefully' (careful + -ly) is an adverb of manner: it answers 'how did she open it?'.",
      goalId: "manner",
    },
    {
      sentence: "He speaks English very well.",
      question: "Which word describes how he speaks?",
      options: ["speaks", "English", "very", "well"],
      correctIndex: 3,
      explanation:
        "'well' is the adverb of 'good'. ✗ 'He speaks English very good.' ('very' only intensifies 'well'.)",
      goalId: "manner",
    },
    {
      sentence: "The bridge was badly damaged by the storm.",
      question: INTENT_QUESTION,
      options: [
        "Saying how the bridge was damaged",
        "Saying when the storm happened",
        "Saying where the bridge is",
        "Saying the damage was a lucky accident",
      ],
      correctIndex: 0,
      explanation:
        "In the passive, the manner adverb goes before the past participle: 'was badly damaged' tells us how the damage was done.",
      goalId: "manner",
    },
    {
      sentence: "I've been working hard, but I hardly slept last night.",
      question: "What's the difference between 'hard' and 'hardly' here?",
      options: [
        "They mean the same thing",
        "'hard' = with a lot of effort; 'hardly' = almost not",
        "'hard' = almost not; 'hardly' = with a lot of effort",
        "'hardly' is just the formal version of 'hard'",
      ],
      correctIndex: 1,
      explanation:
        "'hard' is both adjective and adverb (work hard). 'hardly' is a different word meaning 'almost not'.",
      goalId: "manner",
    },

    // --- TIME ---
    {
      sentence: "We moved to this city three years ago.",
      question: INTENT_QUESTION,
      options: [
        "Saying how they moved",
        "Saying where the city is",
        "Saying when they moved",
        "Saying they moved by accident",
      ],
      correctIndex: 2,
      explanation:
        "'three years ago' places the action at a definite point in the past. It answers 'when?'.",
      goalId: "time",
    },
    {
      sentence: "Don't worry, the report has already been sent.",
      question: "What does 'already' tell us?",
      options: [
        "The report was sent earlier than expected / before now",
        "The report was sent carefully",
        "The report was sent to another place",
        "The report will be sent later",
      ],
      correctIndex: 0,
      explanation:
        "'already' says the action happened before now. It goes between the auxiliary and the main verb.",
      goalId: "time",
    },
    {
      sentence: "Is she still living in London, or has she moved?",
      question: INTENT_QUESTION,
      options: [
        "Asking where London is",
        "Asking if a situation continues at this time",
        "Asking how she lives",
        "Asking whether she was lucky",
      ],
      correctIndex: 1,
      explanation:
        "'still' asks whether something that was true before is true now — it's about time.",
      goalId: "time",
    },
    {
      sentence: "I'll call you back later — I'm driving now.",
      question: "Which words give information about time?",
      options: [
        "call / back",
        "back / driving",
        "later / now",
        "I'll / I'm",
      ],
      correctIndex: 2,
      explanation:
        "'later' and 'now' answer 'when?'. 'back' here is part of the phrasal verb 'call back'.",
      goalId: "time",
    },

    // --- PLACE ---
    {
      sentence: "It's raining, so the kids are playing upstairs.",
      question: INTENT_QUESTION,
      options: [
        "Saying how the kids are playing",
        "Saying where the kids are playing",
        "Saying when the kids are playing",
        "Saying the kids are playing alone",
      ],
      correctIndex: 1,
      explanation: "'upstairs' is an adverb of place: it answers 'where?'.",
      goalId: "place",
    },
    {
      sentence: "After the party, she went home by taxi.",
      question: "Why is there no 'to' before 'home'?",
      options: [
        "Because 'home' is an adverb of place here",
        "Because it's a past sentence",
        "Because 'taxi' already has 'by'",
        "It's a mistake — it should be 'went to home'",
      ],
      correctIndex: 0,
      explanation:
        "After movement verbs, 'home' works as an adverb: go home, come home, get home. ✗ 'went to home'.",
      goalId: "place",
    },
    {
      sentence: "I've looked everywhere, but I can't find my glasses.",
      question: INTENT_QUESTION,
      options: [
        "Saying how carefully they looked",
        "Saying when they looked",
        "Saying where they looked",
        "Saying they looked on purpose",
      ],
      correctIndex: 2,
      explanation: "'everywhere' = in all places. It's an adverb of place.",
      goalId: "place",
    },
    {
      sentence: "My brother lives abroad, so we rarely see him.",
      question: "What does 'abroad' mean?",
      options: [
        "In a large house",
        "In another country",
        "Alone",
        "A long time ago",
      ],
      correctIndex: 1,
      explanation:
        "'abroad' is an adverb of place meaning 'in or to another country'. ✗ 'lives in abroad'.",
      goalId: "place",
    },

    // --- CIRCUMSTANCE ---
    {
      sentence: "Unfortunately, the concert was cancelled because of the rain.",
      question: INTENT_QUESTION,
      options: [
        "Saying how the concert was cancelled",
        "Saying where the concert was",
        "Commenting on the circumstances — it was bad news",
        "Saying when the concert was cancelled",
      ],
      correctIndex: 2,
      explanation:
        "'Unfortunately,' at the start comments on the whole situation: the speaker sees it as bad luck.",
      goalId: "circumstance",
    },
    {
      sentence: "Sorry! I didn't break the vase on purpose — I accidentally hit it.",
      question: "What do 'on purpose' and 'accidentally' describe?",
      options: [
        "Whether the action was intentional or not",
        "Where the vase was",
        "When the vase broke",
        "How fast the speaker moved",
      ],
      correctIndex: 0,
      explanation:
        "These adverbs describe the circumstance of intention: 'on purpose' = deliberately, 'accidentally' = by accident.",
      goalId: "circumstance",
    },
    {
      sentence: "Surprisingly, the youngest player won the tournament.",
      question: INTENT_QUESTION,
      options: [
        "Saying how the player played",
        "Saying the result was unexpected",
        "Saying where the tournament was",
        "Saying when the tournament ended",
      ],
      correctIndex: 1,
      explanation:
        "'Surprisingly,' frames the whole event: nobody expected that result.",
      goalId: "circumstance",
    },
    {
      sentence: "She prefers to travel alone rather than in a group.",
      question: "What does 'alone' tell us about the action?",
      options: [
        "Where she travels",
        "When she travels",
        "The circumstances — without other people",
        "That she travels quickly",
      ],
      correctIndex: 2,
      explanation:
        "'alone' and 'together' describe who is with you — the circumstances of the action.",
      goalId: "circumstance",
    },
  ],
  speaking: [
    {
      text: "She closed the door quietly.",
      translation: "Ella cerró la puerta en silencio.",
      phoneticFocus: "Stress on QUI: /ˈkwaɪətli/ — three syllables, not 'qui-et-ly' with equal stress",
      goalId: "manner",
    },
    {
      text: "He plays the guitar really well.",
      translation: "Él toca la guitarra muy bien.",
      phoneticFocus: "'really' /ˈrɪəli/ — two syllables; dark l at the end of 'well'",
      goalId: "manner",
    },
    {
      text: "The house was beautifully decorated.",
      translation: "La casa estaba bellamente decorada.",
      phoneticFocus: "BEAU-ti-ful-ly /ˈbjuːtɪfli/ — the 'ful' almost disappears",
      goalId: "manner",
    },
    {
      text: "I saw her two days ago.",
      translation: "La vi hace dos días.",
      phoneticFocus: "Linking 'days ago' → 'day-za-go'; stress on GO",
      goalId: "time",
    },
    {
      text: "Have you finished yet?",
      translation: "¿Ya terminaste?",
      phoneticFocus: "Rising intonation; linking 'finished yet' → /ˈfɪnɪʃ jet/ (the t of -ed blends)",
      goalId: "time",
    },
    {
      text: "I've already eaten, thanks.",
      translation: "Ya comí, gracias.",
      phoneticFocus: "al-READ-y /ɔːlˈredi/; linking 'I've already' → 'I-val-ready'",
      goalId: "time",
    },
    {
      text: "The kids are playing outside.",
      translation: "Los niños están jugando afuera.",
      phoneticFocus: "out-SIDE: stress on the second syllable",
      goalId: "place",
    },
    {
      text: "Let's go home early tonight.",
      translation: "Vamos a casa temprano esta noche.",
      phoneticFocus: "No 'to' before 'home'; linking 'home early' → 'ho-mear-ly'",
      goalId: "place",
    },
    {
      text: "I've looked everywhere for my keys.",
      translation: "He buscado mis llaves por todas partes.",
      phoneticFocus: "EV-ery-where /ˈevriweə/ — three syllables, not four",
      goalId: "place",
    },
    {
      text: "Luckily, nobody was hurt.",
      translation: "Por suerte, nadie salió herido.",
      phoneticFocus: "Short pause after 'Luckily'; falling intonation on HURT",
      goalId: "circumstance",
    },
    {
      text: "I accidentally deleted the file.",
      translation: "Borré el archivo sin querer.",
      phoneticFocus: "ac-ci-DEN-tal-ly /ˌæksɪˈdentli/ — the 'al' is usually dropped",
      goalId: "circumstance",
    },
    {
      text: "We usually study together on Fridays.",
      translation: "Normalmente estudiamos juntos los viernes.",
      phoneticFocus: "to-GETH-er /təˈɡeðə/ — voiced 'th' /ð/",
      goalId: "circumstance",
    },
  ],
  writing: [
    {
      text: "She answered the question correctly.",
      translation: "Ella respondió la pregunta correctamente.",
      goalId: "manner",
    },
    {
      text: "My sister drives very carefully.",
      translation: "Mi hermana maneja con mucho cuidado.",
      goalId: "manner",
    },
    {
      text: "The letter was written by hand.",
      translation: "La carta fue escrita a mano.",
      goalId: "manner",
    },
    {
      text: "We arrived at the hotel yesterday.",
      translation: "Llegamos al hotel ayer.",
      goalId: "time",
    },
    {
      text: "I have just finished my homework.",
      translation: "Acabo de terminar mi tarea.",
      goalId: "time",
    },
    {
      text: "He hasn't called me yet.",
      translation: "Todavía no me ha llamado.",
      goalId: "time",
    },
    {
      text: "Please wait for me downstairs.",
      translation: "Por favor, espérame abajo.",
      goalId: "place",
    },
    {
      text: "They want to study abroad next year.",
      translation: "Quieren estudiar en el extranjero el próximo año.",
      goalId: "place",
    },
    {
      text: "Is there a pharmacy nearby?",
      translation: "¿Hay una farmacia cerca?",
      goalId: "place",
    },
    {
      text: "Unfortunately, we missed the last train.",
      translation: "Lamentablemente, perdimos el último tren.",
      goalId: "circumstance",
    },
    {
      text: "He broke the window on purpose.",
      translation: "Rompió la ventana a propósito.",
      goalId: "circumstance",
    },
    {
      text: "Suddenly, all the lights went out.",
      translation: "De repente, se apagaron todas las luces.",
      goalId: "circumstance",
    },
  ],
});
