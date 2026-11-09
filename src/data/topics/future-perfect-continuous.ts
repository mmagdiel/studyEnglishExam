import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const futurePerfectContinuous = defineTopic({
  id: "future-perfect-continuous",
  title: "Future Perfect & Future Continuous",
  subtitle: "Looking Back and Ahead from the Future",
  goals: [
    {
      id: "hypothetical",
      title: "Hypothetical Future Situations",
      translation: "Referirse a situaciones hipotéticas en el futuro",
      description:
        "Combine 'If + present simple' with 'will have + past participle' or 'will be + verb-ing' to imagine a possible future situation and its consequence. Never use 'will' in the if-clause (✗ If he won't hurry). The same rule applies after when, by the time, before and until.",
      examples: [
        "If he doesn't hurry, I'll have finished the movie by the time he gets here.",
        "If you call me at nine, I'll be having dinner.",
        "If we don't leave now, the shops will have closed.",
      ],
    },
    {
      id: "completed",
      title: "Completed Before a Future Time",
      translation: "Algo que habrá terminado antes de cierto momento futuro",
      description:
        "Use will have + past participle (future perfect) to say that something will be finished before a certain point in the future. Typical signals: by + time (by 10 p.m., by Friday, by next year), by the time + present simple, before, in two years' time.",
      examples: [
        "By the time Ali arrives, I'll have watched half the movie.",
        "I'll have finished the report by Friday.",
        "By 2030, she will have lived here for twenty years.",
      ],
    },
    {
      id: "in-progress",
      title: "In Progress at a Future Moment",
      translation: "Algo que estará pasando en cierto momento futuro",
      description:
        "Use will be + verb-ing (future continuous) for an action that will be in progress at a specific moment in the future. It started before that moment and will continue after it. Typical signals: at this time tomorrow, at 8 p.m. tonight, until midnight, all day.",
      examples: [
        "I think I'll be watching TV until midnight.",
        "This time next week, we'll be lying on the beach.",
        "Don't call at eight — I'll be driving home.",
      ],
    },
    {
      id: "expected",
      title: "Plans & Expected Future Events",
      translation: "Hablar de planes o eventos futuros esperados",
      description:
        "Use will be + verb-ing for things that will happen as part of the normal course of events or a fixed plan — not a new decision. It's also a polite way to ask about someone's plans without sounding like a request: 'Will you be using the car tonight?'",
      examples: [
        "I'll be seeing Ali tomorrow anyway, so I'll give him the book.",
        "The train will be arriving at platform 2 in five minutes.",
        "Will you be coming to the meeting on Monday?",
      ],
    },
  ],
  reading: [
    // --- HYPOTHETICAL ---
    {
      sentence: "If he doesn't hurry, I'll have finished the movie by the time he gets here.",
      question: INTENT_QUESTION,
      options: [
        "Imagining a possible future situation and its result",
        "Describing a habit",
        "Talking about something happening now",
        "Talking about a finished past event",
      ],
      correctIndex: 0,
      explanation:
        "'If + present simple' sets up a possible future condition; 'will have finished' is the imagined result.",
      goalId: "hypothetical",
    },
    {
      sentence: "If you come at 7, we'll still be eating.",
      question: "What will happen if the listener comes at 7?",
      options: [
        "Dinner will be over",
        "Dinner will be in progress",
        "Dinner won't have started",
        "There won't be any dinner",
      ],
      correctIndex: 1,
      explanation:
        "'will be eating' = in progress at that future moment. Compare: 'we'll have eaten' (finished).",
      goalId: "hypothetical",
    },
    {
      sentence: "By the time you ___ home, I'll have cooked dinner.",
      question: "Which verb form completes the sentence?",
      options: ["will get", "get", "will have got", "are getting"],
      correctIndex: 1,
      explanation:
        "After 'by the time', 'when', 'if' and 'before', use the present simple for the future. ✗ 'By the time you will get home'.",
      goalId: "hypothetical",
    },

    // --- COMPLETED ---
    {
      sentence: "I'll have finished all my exams by the end of June.",
      question: INTENT_QUESTION,
      options: [
        "Something will be completed before a future time",
        "Something will be in progress at a future time",
        "A decision made at the moment",
        "A past habit",
      ],
      correctIndex: 0,
      explanation:
        "'will have + past participle' + 'by…' = completed before that point in the future.",
      goalId: "completed",
    },
    {
      sentence: "By next month, we will have been married for ten years.",
      question: "What does the speaker mean?",
      options: [
        "They will get married next month",
        "Next month marks ten completed years of marriage",
        "They will be getting married for ten years",
        "They were married ten years ago and divorced",
      ],
      correctIndex: 1,
      explanation:
        "The future perfect looks back from a future point: by then, ten years will be complete.",
      goalId: "completed",
    },
    {
      sentence: "Don't worry, the paint will have dried before the guests arrive.",
      question: "When will the paint dry?",
      options: [
        "After the guests arrive",
        "At the same time the guests arrive",
        "Before the guests arrive",
        "It won't dry",
      ],
      correctIndex: 2,
      explanation:
        "'will have dried' = completed before the future event (the guests' arrival).",
      goalId: "completed",
    },

    // --- IN PROGRESS ---
    {
      sentence: "I think I'll be watching TV until midnight.",
      question: INTENT_QUESTION,
      options: [
        "An action in progress during a future period",
        "An action completed before midnight",
        "A past habit",
        "An instant decision",
      ],
      correctIndex: 0,
      explanation:
        "'will be + verb-ing' + 'until midnight' = the activity will be in progress during that time.",
      goalId: "in-progress",
    },
    {
      sentence: "This time tomorrow, I'll be flying to Tokyo.",
      question: "Where will the speaker be at this time tomorrow?",
      options: [
        "Already in Tokyo",
        "In the middle of the flight",
        "At home, packing",
        "Back from Tokyo",
      ],
      correctIndex: 1,
      explanation:
        "The future continuous places us in the middle of the action at that moment.",
      goalId: "in-progress",
    },
    {
      sentence: "Don't call me at 10 — I'll be having a job interview.",
      question: "Why does the speaker use 'will be having'?",
      options: [
        "The interview will be in progress at 10",
        "The interview will be finished at 10",
        "It's an offer",
        "It's a past event",
      ],
      correctIndex: 0,
      explanation:
        "At 10 o'clock, the interview will be happening — so the speaker can't answer the phone.",
      goalId: "in-progress",
    },

    // --- EXPECTED ---
    {
      sentence: "I'll be seeing Ali at work tomorrow anyway, so I can give him the keys.",
      question: INTENT_QUESTION,
      options: [
        "A future event expected as part of the normal routine",
        "A sudden decision",
        "A hypothetical situation",
        "Something completed before a time",
      ],
      correctIndex: 0,
      explanation:
        "'anyway' shows the meeting will happen naturally — not because of a new decision.",
      goalId: "expected",
    },
    {
      sentence: "Will you be using your laptop this afternoon?",
      question: "What is the speaker probably doing?",
      options: [
        "Ordering the listener to use the laptop",
        "Politely asking about plans, maybe to borrow it",
        "Predicting the laptop will break",
        "Offering to buy a laptop",
      ],
      correctIndex: 1,
      explanation:
        "'Will you be + verb-ing?' asks about plans politely. 'Will you use…?' could sound like a request.",
      goalId: "expected",
    },
    {
      sentence: "The plane will be landing in twenty minutes.",
      question: INTENT_QUESTION,
      options: [
        "An expected event in the normal course of things",
        "A hypothetical situation",
        "A completed action",
        "A refusal",
      ],
      correctIndex: 0,
      explanation:
        "Announcements often use the future continuous for events that are scheduled or expected.",
      goalId: "expected",
    },
  ],
  speaking: [
    {
      text: "If he doesn't hurry, I'll have finished the movie.",
      translation: "Si no se apura, habré terminado la película.",
      phoneticFocus: "'I'll have' → /aɪl əv/ — 'have' is weak; pause at the comma",
      goalId: "hypothetical",
    },
    {
      text: "If you call at nine, I'll be sleeping.",
      translation: "Si llamas a las nueve, estaré durmiendo.",
      phoneticFocus: "'I'll be' /aɪl bi/; stress on NINE and SLEEP-ing",
      goalId: "hypothetical",
    },
    {
      text: "I'll have finished by Friday.",
      translation: "Habré terminado para el viernes.",
      phoneticFocus: "'I'll have' → 'I'll've' /aɪləv/ in fast speech",
      goalId: "completed",
    },
    {
      text: "By then, she'll have left.",
      translation: "Para entonces, ella ya se habrá ido.",
      phoneticFocus: "'she'll have' → /ʃiːl əv/; stress on THEN and LEFT",
      goalId: "completed",
    },
    {
      text: "This time tomorrow, I'll be flying to Lima.",
      translation: "Mañana a esta hora, estaré volando a Lima.",
      phoneticFocus: "Linking 'this time' — one /s/ sound into the t",
      goalId: "in-progress",
    },
    {
      text: "I'll be watching TV until midnight.",
      translation: "Estaré viendo la tele hasta la medianoche.",
      phoneticFocus: "un-TIL /ənˈtɪl/; MID-night with stress on the first syllable",
      goalId: "in-progress",
    },
    {
      text: "I'll be seeing him tomorrow anyway.",
      translation: "De todas formas lo veré mañana.",
      phoneticFocus: "AN-y-way /ˈeniweɪ/; linking 'seeing him' → 'see-in-im' (weak h)",
      goalId: "expected",
    },
    {
      text: "Will you be coming to the party?",
      translation: "¿Vas a venir a la fiesta?",
      phoneticFocus: "Linking 'Will you' → /wɪljə/; rising intonation",
      goalId: "expected",
    },
  ],
  writing: [
    {
      text: "If we don't hurry, the film will have started.",
      translation: "Si no nos apuramos, la película habrá empezado.",
      goalId: "hypothetical",
    },
    {
      text: "If you visit in July, I'll be working.",
      translation: "Si visitas en julio, estaré trabajando.",
      goalId: "hypothetical",
    },
    {
      text: "I will have finished the book by Sunday.",
      translation: "Habré terminado el libro para el domingo.",
      goalId: "completed",
    },
    {
      text: "By the time he arrives, we will have eaten.",
      translation: "Para cuando él llegue, ya habremos comido.",
      goalId: "completed",
    },
    {
      text: "At eight tonight, I will be studying.",
      translation: "A las ocho esta noche, estaré estudiando.",
      goalId: "in-progress",
    },
    {
      text: "This time next week, we will be travelling.",
      translation: "La semana que viene a esta hora, estaremos viajando.",
      goalId: "in-progress",
    },
    {
      text: "Will you be using the car tonight?",
      translation: "¿Vas a usar el carro esta noche?",
      goalId: "expected",
    },
    {
      text: "The bus will be leaving in five minutes.",
      translation: "El autobús saldrá en cinco minutos.",
      goalId: "expected",
    },
  ],
});
