import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const presentPerfectContinuous = defineTopic({
  id: "present-perfect-continuous",
  title: "Present Perfect Continuous",
  subtitle: "Actions Up to Now",
  goals: [
    {
      id: "continuing",
      title: "Situations Continuing Up to Now",
      translation: "Situaciones que continúan hasta el momento",
      description:
        "Use have/has + been + verb-ing for an activity that started in the past and is still going on now (and may continue). It focuses on the activity itself, not on the result. Typical signals: recently, lately, all day, this week. State verbs (know, like, have = possess, believe) don't use this form: ✗ I've been knowing her for years.",
      examples: [
        "I've been learning Japanese this year.",
        "It's been raining all morning.",
        "She's been working on her thesis lately.",
      ],
    },
    {
      id: "duration",
      title: "How Long Something Has Gone On",
      translation: "Decir cuánto tiempo lleva algo",
      description:
        "Use the present perfect continuous with 'for' (+ period) and 'since' (+ starting point) to say how long an activity has been happening, and 'How long have you been + verb-ing?' to ask. Use the present perfect simple (not continuous) for how much / how many: 'I've been reading for two hours' vs. 'I've read 50 pages'.",
      examples: [
        "I've been waiting for you for forty minutes!",
        "They've been playing tennis since ten o'clock.",
        "How long have you been studying English?",
      ],
    },
    {
      id: "recent",
      title: "Recently Finished Long or Repeated Actions",
      translation: "Acciones largas o repetidas que terminaron recientemente",
      description:
        "Use the present perfect continuous for a long or repeated activity that has just stopped, especially when we can see the effects now (tired, wet, dirty, red eyes). It also expresses irritation about a repeated action: 'I've been calling you all day!'",
      examples: [
        "I'm exhausted — I've been running.",
        "Why are your hands so dirty? — I've been fixing the car.",
        "I've been trying to call you all afternoon!",
      ],
    },
  ],
  reading: [
    // --- CONTINUING ---
    {
      sentence: "I've been reading a really interesting book about the ocean.",
      question: "Has the speaker finished the book?",
      options: [
        "Yes, they finished it yesterday",
        "No, the reading is still going on",
        "They haven't started it",
        "They read it a long time ago",
      ],
      correctIndex: 1,
      explanation:
        "The continuous focuses on an activity still in progress. Compare: 'I've read a book about the ocean' (finished).",
      goalId: "continuing",
    },
    {
      sentence: "Lately, my neighbours have been making a lot of noise.",
      question: INTENT_QUESTION,
      options: [
        "A finished action at a specific time",
        "A situation that has been going on up to now",
        "A life experience",
        "A future plan",
      ],
      correctIndex: 1,
      explanation:
        "'Lately' + present perfect continuous describes an activity that has been happening recently and continues.",
      goalId: "continuing",
    },
    {
      sentence: "It's been snowing since we woke up.",
      question: "What does 'It's' stand for here?",
      options: ["It is", "It has", "It was", "It will"],
      correctIndex: 1,
      explanation:
        "'It's been' = 'It has been'. The snowing started in the morning and is still going on.",
      goalId: "continuing",
    },
    {
      sentence: "I've known Sarah since we were children.",
      question: "Why isn't it 'I've been knowing Sarah'?",
      options: [
        "Because 'know' is a state verb",
        "Because the friendship is over",
        "Because 'since' doesn't go with the continuous",
        "Both forms are correct",
      ],
      correctIndex: 0,
      explanation:
        "State verbs (know, like, own, believe) use the present perfect simple even for continuing situations.",
      goalId: "continuing",
    },

    // --- DURATION ---
    {
      sentence: "We've been waiting for the bus for half an hour.",
      question: INTENT_QUESTION,
      options: [
        "Saying how long an activity has been going on",
        "Saying how many buses passed",
        "Describing a daily habit",
        "Describing a finished trip",
      ],
      correctIndex: 0,
      explanation:
        "'for half an hour' + present perfect continuous emphasises the duration up to now.",
      goalId: "duration",
    },
    {
      sentence: "How long have you been working here?",
      question: "What is the speaker asking about?",
      options: [
        "When you will start working here",
        "The length of time you have worked here up to now",
        "How much work you have finished",
        "If you worked here in the past",
      ],
      correctIndex: 1,
      explanation:
        "'How long have you been + verb-ing?' asks about duration up to the present. ✗ 'How long are you working here?'",
      goalId: "duration",
    },
    {
      sentence: "She's been writing emails all morning. She's written thirty so far.",
      question: "Why does the second sentence use the simple form ('has written')?",
      options: [
        "Because it says how many — a completed quantity",
        "Because it's a state verb",
        "Because it's in the past",
        "It's a mistake",
      ],
      correctIndex: 0,
      explanation:
        "Continuous = how long (the activity). Simple = how much / how many (the result).",
      goalId: "duration",
    },
    {
      sentence: "They've been living in Canada since 2019.",
      question: "Which time expression gives the starting point?",
      options: ["They've", "been living", "in Canada", "since 2019"],
      correctIndex: 3,
      explanation:
        "'since' + starting point; 'for' + period (for five years).",
      goalId: "duration",
    },

    // --- RECENT ---
    {
      sentence: "Your eyes are red. Have you been crying?",
      question: INTENT_QUESTION,
      options: [
        "Asking about a long activity that recently stopped, based on visible evidence",
        "Asking about a life experience",
        "Asking about a future plan",
        "Asking about a habit",
      ],
      correctIndex: 0,
      explanation:
        "The red eyes are the present evidence of an activity that has just finished.",
      goalId: "recent",
    },
    {
      sentence: "Sorry I'm so sweaty — I've been playing basketball.",
      question: "Is the speaker playing basketball right now?",
      options: [
        "Yes, they're in the middle of a game",
        "No, they've just stopped, and we can see the effect",
        "No, they played years ago",
        "They're going to play later",
      ],
      correctIndex: 1,
      explanation:
        "The activity has recently finished; 'sweaty' is the visible result.",
      goalId: "recent",
    },
    {
      sentence: "I've been calling you all day! Why didn't you answer?",
      question: "What feeling does the continuous add here?",
      options: [
        "Happiness",
        "Irritation about a repeated action",
        "Surprise about a single action",
        "Indifference",
      ],
      correctIndex: 1,
      explanation:
        "The continuous stresses the repeated, long effort — and the speaker's annoyance.",
      goalId: "recent",
    },
    {
      sentence: "The ground is wet. It's been raining.",
      question: "What can we say about the rain?",
      options: [
        "It's going to rain soon",
        "It rained last year",
        "It was raining until very recently — the ground shows it",
        "It never rains here",
      ],
      correctIndex: 2,
      explanation:
        "The wet ground is evidence of rain that has just stopped (or has nearly stopped).",
      goalId: "recent",
    },
  ],
  speaking: [
    {
      text: "I've been learning to cook lately.",
      translation: "Últimamente he estado aprendiendo a cocinar.",
      phoneticFocus: "'I've been' → /aɪv bɪn/ — 'been' is weak and short",
      goalId: "continuing",
    },
    {
      text: "It's been raining all day.",
      translation: "Ha estado lloviendo todo el día.",
      phoneticFocus: "'It's been' → /ɪts bɪn/; stress on RAIN and DAY",
      goalId: "continuing",
    },
    {
      text: "She's been feeling much better recently.",
      translation: "Se ha estado sintiendo mucho mejor últimamente.",
      phoneticFocus: "'She's' = she has; RE-cent-ly /ˈriːsntli/ — three syllables",
      goalId: "continuing",
    },
    {
      text: "How long have you been waiting?",
      translation: "¿Cuánto tiempo llevas esperando?",
      phoneticFocus: "Weak 'have you been' → /əv jə bɪn/; falling intonation",
      goalId: "duration",
    },
    {
      text: "I've been working here for six months.",
      translation: "Llevo seis meses trabajando aquí.",
      phoneticFocus: "Weak 'for' /fə/; 'months' /mʌnθs/ — try not to drop the th",
      goalId: "duration",
    },
    {
      text: "We've been driving since five in the morning.",
      translation: "Llevamos manejando desde las cinco de la mañana.",
      phoneticFocus: "'We've been' /wiːv bɪn/; linking 'five in the' → 'fi-vin-the'",
      goalId: "duration",
    },
    {
      text: "I'm tired because I've been running.",
      translation: "Estoy cansado porque he estado corriendo.",
      phoneticFocus: "be-CAUSE /bɪˈkɒz/; linking 'I'm tired' → 'aim-tired'",
      goalId: "recent",
    },
    {
      text: "Have you been crying?",
      translation: "¿Has estado llorando?",
      phoneticFocus: "Rising intonation; 'crying' /ˈkraɪɪŋ/",
      goalId: "recent",
    },
    {
      text: "I've been trying to call you all afternoon!",
      translation: "¡He estado intentando llamarte toda la tarde!",
      phoneticFocus: "Stress ALL af-ter-NOON to show irritation",
      goalId: "recent",
    },
  ],
  writing: [
    {
      text: "I have been studying a lot this week.",
      translation: "He estado estudiando mucho esta semana.",
      goalId: "continuing",
    },
    {
      text: "My brother has been looking for a job.",
      translation: "Mi hermano ha estado buscando trabajo.",
      goalId: "continuing",
    },
    {
      text: "It has been raining since Monday.",
      translation: "Ha estado lloviendo desde el lunes.",
      goalId: "continuing",
    },
    {
      text: "How long have you been learning French?",
      translation: "¿Cuánto tiempo llevas aprendiendo francés?",
      goalId: "duration",
    },
    {
      text: "We have been waiting for two hours.",
      translation: "Llevamos dos horas esperando.",
      goalId: "duration",
    },
    {
      text: "She has been teaching since 2010.",
      translation: "Ella enseña desde 2010.",
      goalId: "duration",
    },
    {
      text: "Have you been swimming in the lake?",
      translation: "¿Has estado nadando en el lago?",
      goalId: "recent",
    },
    {
      text: "I have been cleaning the kitchen.",
      translation: "He estado limpiando la cocina.",
      goalId: "recent",
    },
    {
      text: "They have been arguing again.",
      translation: "Han estado discutiendo otra vez.",
      goalId: "recent",
    },
  ],
});
