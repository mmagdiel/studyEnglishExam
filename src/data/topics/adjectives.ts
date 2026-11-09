import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const adjectives = defineTopic({
  id: "adjectives",
  title: "Adjectives",
  subtitle: "Mastering Adjectives",
  goals: [
    {
      id: "describe",
      title: "Describing People & Objects",
      translation: "Describir personas y objetos",
      description:
        "Adjectives go before the noun (a red car) or after linking verbs like be, look, seem, feel (You look tired). They never take a plural -s: two red cars, not ✗ two reds cars.",
      examples: [
        "My neighbour is a tall, friendly man.",
        "You look tired today.",
        "They have two big black dogs.",
      ],
    },
    {
      id: "extra-info",
      title: "Giving Extra Information",
      translation: "Dar información adicional",
      description:
        "Stack several adjectives to add detail, in this order: opinion → size → age → shape → colour → origin → material → purpose. Compound adjectives (number + singular noun) also add information: a ten-year-old boy, a three-hour flight.",
      examples: [
        "We stayed in a lovely old stone cottage.",
        "She has a ten-year-old son.",
        "It was a three-hour flight.",
      ],
    },
    {
      id: "opinion",
      title: "Giving Your Opinion",
      translation: "Dar tu opinión",
      description:
        "Use opinion adjectives (amazing, awful, fascinating) with 'I think…', 'I find + object + adjective' or superlatives. '-ing' adjectives describe what causes a feeling (a boring film); '-ed' adjectives describe how someone feels (I was bored).",
      examples: [
        "I think the new café is fantastic.",
        "I find this city really exciting.",
        "This is the best pizza in town.",
      ],
    },
    {
      id: "features",
      title: "Features & Abilities",
      translation: "Características y habilidades",
      description:
        "Describe what things and people can do with suffix adjectives (waterproof, portable, reusable, wireless), comparatives (faster than), 'too + adjective' (not possible) and 'adjective + enough' (possible).",
      examples: [
        "This jacket is waterproof.",
        "She's old enough to drive.",
        "The box is too heavy to carry.",
      ],
    },
    {
      id: "emphasis",
      title: "Emphasizing Your Opinion",
      translation: "Enfatizar tu opinión",
      description:
        "Use 'very/really' with normal adjectives and 'absolutely' with extreme adjectives (absolutely freezing, ✗ very freezing). Use 'so + adjective' and 'such (a/an) + adjective + noun' for strong emphasis.",
      examples: [
        "The view was absolutely amazing!",
        "She's such a talented singer.",
        "I was so tired that I fell asleep.",
      ],
    },
    {
      id: "impersonal",
      title: "Reasons, Possibility & Necessity",
      translation: "Razones, posibilidad, necesidad, importancia y frecuencia",
      description:
        "Use 'It + be + adjective + to + verb' or '… + that + clause' to talk about possibility, necessity, importance, frequency and reasons: It's important to…, It's possible that…, It's common for… to…, It's understandable that… Never drop 'It' (✗ Is important to…).",
      examples: [
        "It's important to drink water when you exercise.",
        "It's possible that the train will be late.",
        "It's unusual for him to arrive on time.",
      ],
    },
  ],
  reading: [
    // --- DESCRIBE ---
    {
      sentence: "My neighbour is a tall, friendly man with short grey hair.",
      question: INTENT_QUESTION,
      options: [
        "Describing a person",
        "Emphasizing an opinion",
        "Talking about a necessity",
        "Describing an ability",
      ],
      correctIndex: 0,
      explanation:
        "'tall', 'friendly', 'short' and 'grey' describe what the neighbour is like and looks like.",
      goalId: "describe",
    },
    {
      sentence: "You look tired. Did you sleep well?",
      question: "Why does the speaker say 'look tired' and not 'look tiredly'?",
      options: [
        "'look' is a linking verb here, so it's followed by an adjective",
        "Adjectives always go at the end of the sentence",
        "'tired' is an adverb",
        "Because it expresses a necessity",
      ],
      correctIndex: 0,
      explanation:
        "Linking verbs (be, look, seem, feel, sound) describe the subject, so they take adjectives, not -ly adverbs.",
      goalId: "describe",
    },
    {
      sentence: "There are two red cars parked outside the house.",
      question: "Why is it 'red cars' and not 'reds cars'?",
      options: [
        "Adjectives in English never take a plural -s",
        "Because there are only two cars",
        "'red' is a noun in this sentence",
        "Colours are always singular, but other adjectives aren't",
      ],
      correctIndex: 0,
      explanation:
        "Unlike Spanish (coches rojos), English adjectives never change for plural: red car → red cars.",
      goalId: "describe",
    },

    // --- EXTRA INFO ---
    {
      sentence: "We stayed in a lovely old stone cottage near the lake.",
      question: "What do the adjectives before 'cottage' do?",
      options: [
        "They add extra details about the cottage, in a fixed order",
        "They give the reason for staying there",
        "They emphasize a necessity",
        "They compare the cottage to other cottages",
      ],
      correctIndex: 0,
      explanation:
        "Opinion (lovely) → age (old) → material (stone) → noun. Each adjective adds information.",
      goalId: "extra-info",
    },
    {
      sentence: "She has a ten-year-old son who loves football.",
      question: "Why is it 'ten-year-old' and not 'ten-years-old'?",
      options: [
        "Compound adjectives before a noun use the singular form",
        "Because she only has one son",
        "Because 'year' is uncountable",
        "It's a mistake — both forms are correct here",
      ],
      correctIndex: 0,
      explanation:
        "In a compound adjective the noun stays singular: a ten-year-old son. Compare: 'My son is ten years old'.",
      goalId: "extra-info",
    },
    {
      sentence: "It was a three-hour flight, so we brought plenty of snacks.",
      question: INTENT_QUESTION,
      options: [
        "Giving extra information about the flight",
        "Emphasizing an opinion",
        "Talking about a possibility",
        "Describing an ability",
      ],
      correctIndex: 0,
      explanation:
        "'three-hour' is a compound adjective that tells us how long the flight was.",
      goalId: "extra-info",
    },

    // --- OPINION ---
    {
      sentence: "I think that series is boring — nothing ever happens!",
      question: INTENT_QUESTION,
      options: [
        "Describing a feature of the series",
        "Giving an opinion",
        "Talking about frequency",
        "Giving extra information",
      ],
      correctIndex: 1,
      explanation: "'I think + opinion adjective' gives the speaker's personal judgement.",
      goalId: "opinion",
    },
    {
      sentence: "The film was so boring that I felt really bored.",
      question: "What is the difference between 'boring' and 'bored'?",
      options: [
        "'boring' judges the film; 'bored' describes how I felt",
        "They mean exactly the same",
        "'bored' is for things and 'boring' is for people",
        "'boring' is the past tense of 'bored'",
      ],
      correctIndex: 0,
      explanation:
        "-ing adjectives describe what causes the feeling (the film); -ed adjectives describe the person who has the feeling.",
      goalId: "opinion",
    },
    {
      sentence: "In my opinion, this is the best pizza in town.",
      question: INTENT_QUESTION,
      options: [
        "Indicating where the pizza is",
        "Giving an opinion",
        "Talking about a necessity",
        "Describing an ability",
      ],
      correctIndex: 1,
      explanation:
        "'In my opinion' + a superlative (the best) gives a personal evaluation.",
      goalId: "opinion",
    },

    // --- FEATURES ---
    {
      sentence: "This jacket is waterproof and really lightweight.",
      question: INTENT_QUESTION,
      options: [
        "Describing the features of an object",
        "Giving extra information about a person",
        "Talking about a possibility",
        "Expressing a feeling",
      ],
      correctIndex: 0,
      explanation:
        "'waterproof' (water can't get in) and 'lightweight' describe what the jacket can do.",
      goalId: "features",
    },
    {
      sentence: "At 85, my grandmother is still capable of walking five kilometres a day.",
      question: INTENT_QUESTION,
      options: [
        "Describing someone's ability",
        "Giving an opinion about walking",
        "Talking about frequency",
        "Describing her appearance",
      ],
      correctIndex: 0,
      explanation: "'capable of + verb-ing' describes what someone is able to do.",
      goalId: "features",
    },
    {
      sentence: "This box is too heavy for me to carry.",
      question: "What does 'too heavy' tell us?",
      options: [
        "The box is so heavy that I can't carry it",
        "The box is heavy, but I can carry it",
        "I think the box is beautiful",
        "It's necessary to carry the box",
      ],
      correctIndex: 0,
      explanation:
        "'too + adjective' means 'more than possible': I am not able to carry it. Compare 'light enough to carry' (possible).",
      goalId: "features",
    },

    // --- EMPHASIS ---
    {
      sentence: "The view from the top of the mountain was absolutely amazing!",
      question: INTENT_QUESTION,
      options: [
        "Emphasizing an opinion",
        "Describing a location",
        "Talking about a possibility",
        "Giving a reason",
      ],
      correctIndex: 0,
      explanation:
        "'absolutely + extreme adjective' makes the opinion stronger.",
      goalId: "emphasis",
    },
    {
      sentence: "It's freezing outside — don't forget your coat!",
      question: "Why doesn't the speaker say 'very freezing'?",
      options: [
        "'freezing' is an extreme adjective that already means 'very cold'",
        "'very' can only be used with colours",
        "'freezing' is a verb here",
        "Because the sentence expresses a necessity",
      ],
      correctIndex: 0,
      explanation:
        "Extreme adjectives (freezing, huge, delicious, exhausted) use 'absolutely' or 'really', not 'very'.",
      goalId: "emphasis",
    },
    {
      sentence: "She's such a talented musician!",
      question: "Why does the speaker use 'such' and not 'so'?",
      options: [
        "'such (a/an)' goes before adjective + noun; 'so' goes before an adjective alone",
        "They are always interchangeable",
        "'such' is only used for negative opinions",
        "'so' always needs a noun after it",
      ],
      correctIndex: 0,
      explanation:
        "such a talented musician = she's so talented. Both emphasize, but the structure is different.",
      goalId: "emphasis",
    },

    // --- IMPERSONAL ---
    {
      sentence: "It's important to drink plenty of water when you exercise.",
      question: INTENT_QUESTION,
      options: [
        "Describing water",
        "Expressing importance",
        "Giving an opinion about sports",
        "Describing an ability",
      ],
      correctIndex: 1,
      explanation:
        "'It's important + to + verb' says something matters, without referring to a specific person.",
      goalId: "impersonal",
    },
    {
      sentence: "It's possible that the train will be late because of the snow.",
      question: INTENT_QUESTION,
      options: [
        "Talking about a possibility",
        "Describing the train",
        "Emphasizing an opinion",
        "Talking about a past habit",
      ],
      correctIndex: 0,
      explanation: "'It's possible that + clause' expresses that something may happen.",
      goalId: "impersonal",
    },
    {
      sentence: "It's unusual for him to arrive on time.",
      question: "What does this sentence express?",
      options: [
        "How often something happens (frequency)",
        "A physical description of him",
        "One of his abilities",
        "Extra information about his age",
      ],
      correctIndex: 0,
      explanation:
        "'It's unusual / common / rare for + person + to + verb' talks about frequency.",
      goalId: "impersonal",
    },
    {
      sentence: "It's understandable that you're nervous — it's your first interview.",
      question: INTENT_QUESTION,
      options: [
        "Explaining a reason",
        "Describing someone's appearance",
        "Comparing two interviews",
        "Describing a feature of an object",
      ],
      correctIndex: 0,
      explanation:
        "'It's understandable that…' justifies a feeling and gives the reason for it.",
      goalId: "impersonal",
    },
  ],
  speaking: [
    {
      text: "She has long curly black hair.",
      translation: "Tiene el pelo largo, rizado y negro.",
      phoneticFocus: "Stress every adjective: LONG CUR-ly BLACK hair",
      goalId: "describe",
    },
    {
      text: "You look really happy today.",
      translation: "Te ves muy feliz hoy.",
      phoneticFocus: "Stress on HAP-py; 'look really' flows together",
      goalId: "describe",
    },
    {
      text: "We had a lovely little picnic by the river.",
      translation: "Hicimos un pequeño picnic encantador junto al río.",
      phoneticFocus: "Linking 'had a' → 'ha-də'; 'little' → /ˈlɪtəl/, two short syllables",
      goalId: "extra-info",
    },
    {
      text: "He's a well-known Italian chef.",
      translation: "Es un chef italiano muy conocido.",
      phoneticFocus: "Compound adjective: well-KNOWN; i-TAL-ian (stress the second syllable)",
      goalId: "extra-info",
    },
    {
      text: "I think this book is fascinating.",
      translation: "Creo que este libro es fascinante.",
      phoneticFocus: "FAS-ci-nat-ing: stress the first syllable; 'sc' sounds like /s/",
      goalId: "opinion",
    },
    {
      text: "The trip was exhausting but amazing.",
      translation: "El viaje fue agotador pero increíble.",
      phoneticFocus: "ex-HAUST-ing: the 'h' is silent → /ɪɡˈzɔːstɪŋ/",
      goalId: "opinion",
    },
    {
      text: "This phone is waterproof and very light.",
      translation: "Este teléfono es resistente al agua y muy ligero.",
      phoneticFocus: "Compound: WA-ter-proof (stress the first part); 'light' — silent gh",
      goalId: "features",
    },
    {
      text: "She's good enough to play professionally.",
      translation: "Es lo suficientemente buena para jugar profesionalmente.",
      phoneticFocus: "'enough' → /ɪˈnʌf/: the 'gh' sounds like f",
      goalId: "features",
    },
    {
      text: "The food was absolutely delicious!",
      translation: "¡La comida estaba absolutamente deliciosa!",
      phoneticFocus: "AB-so-lute-ly: put strong stress here to show emphasis",
      goalId: "emphasis",
    },
    {
      text: "It's such a beautiful day!",
      translation: "¡Qué día tan bonito!",
      phoneticFocus: "Linking 'such a' → 'su-chə'; stress BEAU-ti-ful",
      goalId: "emphasis",
    },
    {
      text: "It's important to practise every day.",
      translation: "Es importante practicar todos los días.",
      phoneticFocus: "Linking 'It's important' → 'it-sim-POR-tant'; weak 'to' /tə/",
      goalId: "impersonal",
    },
    {
      text: "It's necessary to book a table in advance.",
      translation: "Es necesario reservar una mesa con antelación.",
      phoneticFocus: "NE-ces-sar-y: stress the first syllable; 'table in' links → 'ta-blin'",
      goalId: "impersonal",
    },
  ],
  writing: [
    {
      text: "My brother has short dark hair.",
      translation: "Mi hermano tiene el pelo corto y oscuro.",
      goalId: "describe",
    },
    {
      text: "The old house looks empty.",
      translation: "La casa vieja parece vacía.",
      goalId: "describe",
    },
    {
      text: "She bought a beautiful red silk dress.",
      translation: "Compró un hermoso vestido rojo de seda.",
      goalId: "extra-info",
    },
    {
      text: "It was a two-hour drive to the beach.",
      translation: "Fue un viaje de dos horas en coche hasta la playa.",
      goalId: "extra-info",
    },
    {
      text: "I think the museum is fascinating.",
      translation: "Creo que el museo es fascinante.",
      goalId: "opinion",
    },
    {
      text: "The lesson was really boring.",
      translation: "La clase fue muy aburrida.",
      goalId: "opinion",
    },
    {
      text: "This backpack is light and waterproof.",
      translation: "Esta mochila es ligera e impermeable.",
      goalId: "features",
    },
    {
      text: "He is not old enough to drive.",
      translation: "No tiene edad suficiente para conducir.",
      goalId: "features",
    },
    {
      text: "The concert was absolutely incredible.",
      translation: "El concierto fue absolutamente increíble.",
      goalId: "emphasis",
    },
    {
      text: "It was such a long day.",
      translation: "Fue un día tan largo.",
      goalId: "emphasis",
    },
    {
      text: "It is important to sleep eight hours.",
      translation: "Es importante dormir ocho horas.",
      goalId: "impersonal",
    },
    {
      text: "It is possible that it will rain.",
      translation: "Es posible que llueva.",
      goalId: "impersonal",
    },
  ],
});
