import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const modalVerbs3 = defineTopic({
  id: "modal-verbs-3",
  title: "Modal Verbs 3",
  subtitle: "Must, Have to, Can't & Must have",
  goals: [
    {
      id: "obligation",
      title: "Obligation",
      translation: "Expresar que algo es una obligación",
      description:
        "Use 'must + base verb' when the speaker personally feels something is necessary or important (I must call my mum). In written rules and notices, 'must' is also common (Passengers must wear seat belts). 'must' has no past or future form, so use 'had to' / 'will have to'. 'don't have to' means it's not necessary — it is NOT a prohibition.",
      examples: [
        "I must remember to buy milk on the way home.",
        "You must try this cake — it's delicious!",
        "You don't have to come if you're busy.",
      ],
    },
    {
      id: "external",
      title: "Facts Beyond Our Control",
      translation: "Referirse a hechos fuera de nuestro control",
      description:
        "Use 'have to / has to + base verb' for obligations that come from outside: rules, laws, jobs, schedules or circumstances we can't control. Past: had to. Future: will have to. Questions and negatives use do/does/did: 'Do you have to…?', 'She doesn't have to…'.",
      examples: [
        "I have to wear a uniform at work.",
        "We had to cancel the trip because of the storm.",
        "Do you have to get a visa to visit Canada?",
      ],
    },
    {
      id: "prohibition",
      title: "Prohibitions & Impossibilities",
      translation: "Expresar prohibiciones e imposibilidades",
      description:
        "Use 'mustn't' or 'can't + base verb' for something that is not allowed (You can't park here / You mustn't smoke inside). Use 'can't be' for something you're sure is impossible or untrue now (That can't be Ana — she's in Rome). ✗ 'mustn't be' isn't used for impossibility.",
      examples: [
        "You mustn't use your phone during the exam.",
        "You can't park here — it's a fire exit.",
        "He can't be hungry. He's just had a huge lunch.",
      ],
    },
    {
      id: "deduction",
      title: "Logical Deductions",
      translation: "Expresar deducciones o conclusiones lógicas",
      description:
        "Use 'must + base verb' (often 'must be') when you're almost sure something is true now, based on evidence. The opposite is 'can't be' (sure it's not true). Use 'must be + verb-ing' for actions in progress: 'They must be sleeping'.",
      examples: [
        "You've been travelling all day. You must be exhausted.",
        "The lights are on. Someone must be at home.",
        "The house is so quiet. The kids must be sleeping.",
      ],
    },
    {
      id: "past-impossibility",
      title: "Impossibilities in the Past",
      translation: "Expresar imposibilidades en el pasado",
      description:
        "Use 'can't have / couldn't have + past participle' when you're sure something did NOT happen in the past, based on evidence. ✗ 'mustn't have' is not used for this.",
      examples: [
        "She can't have seen me — she wasn't wearing her glasses.",
        "He couldn't have stolen the money; he was with me all night.",
        "They can't have finished already — they only started ten minutes ago.",
      ],
    },
    {
      id: "past-deduction",
      title: "Deductions About the Past",
      translation: "Expresar deducciones sobre situaciones pasadas",
      description:
        "Use 'must have + past participle' when you're almost sure something happened in the past, based on present evidence. In speech, 'must have' sounds like 'must've' (never write 'must of').",
      examples: [
        "The streets are wet. It must have rained last night.",
        "I can't find my keys. I must have left them at the office.",
        "He looks happy. He must have passed the exam.",
      ],
    },
  ],
  reading: [
    // --- OBLIGATION ---
    {
      sentence: "I must call my grandmother — it's her birthday today.",
      question: INTENT_QUESTION,
      options: [
        "A personal obligation the speaker feels",
        "A logical deduction",
        "A prohibition",
        "A deduction about the past",
      ],
      correctIndex: 0,
      explanation:
        "'must + base verb' = the speaker personally feels it's necessary.",
      goalId: "obligation",
    },
    {
      sentence: "You don't have to bring anything to the party. We have plenty of food.",
      question: "What does 'don't have to' mean here?",
      options: [
        "You're not allowed to bring anything",
        "It's not necessary to bring anything",
        "You must bring something",
        "You can't bring food",
      ],
      correctIndex: 1,
      explanation:
        "'don't have to' = no obligation. Compare: 'You mustn't bring anything' = it's prohibited.",
      goalId: "obligation",
    },
    {
      sentence: "All visitors must sign in at reception.",
      question: "Where would you probably see this sentence?",
      options: [
        "In a love letter",
        "On an official notice or rule",
        "In a weather forecast",
        "In a history book",
      ],
      correctIndex: 1,
      explanation:
        "'must' is typical in written rules and formal notices.",
      goalId: "obligation",
    },

    // --- EXTERNAL ---
    {
      sentence: "Nurses have to work at night sometimes.",
      question: INTENT_QUESTION,
      options: [
        "A personal wish",
        "An obligation imposed by the job",
        "A deduction",
        "A prohibition",
      ],
      correctIndex: 1,
      explanation:
        "'have to' = the obligation comes from outside (the job), not from the speaker.",
      goalId: "external",
    },
    {
      sentence: "Our flight was cancelled, so we had to stay at the airport hotel.",
      question: "Why is 'had to' used?",
      options: [
        "It's a past obligation caused by circumstances",
        "It's a deduction about the past",
        "It's a prohibition",
        "It's advice",
      ],
      correctIndex: 0,
      explanation:
        "'had to' is the past of both 'must' and 'have to'. Here the cause was beyond their control.",
      goalId: "external",
    },
    {
      sentence: "Does your brother have to wear a suit at work?",
      question: "Which is the correct negative answer?",
      options: [
        "No, he hasn't to.",
        "No, he doesn't.",
        "No, he mustn't.",
        "No, he can't have.",
      ],
      correctIndex: 1,
      explanation:
        "'have to' works like a normal verb: Does he have to…? — No, he doesn't.",
      goalId: "external",
    },

    // --- PROHIBITION ---
    {
      sentence: "You mustn't touch the paintings in the museum.",
      question: INTENT_QUESTION,
      options: [
        "It's not necessary",
        "It's prohibited",
        "It's a deduction",
        "It's a past regret",
      ],
      correctIndex: 1,
      explanation: "'mustn't' = it's not allowed.",
      goalId: "prohibition",
    },
    {
      sentence: "That can't be Tom's car. He sold it last year.",
      question: "What does 'can't be' express here?",
      options: [
        "The speaker isn't able to see the car",
        "The speaker is sure it's impossible",
        "The speaker isn't allowed to look",
        "The speaker regrets something",
      ],
      correctIndex: 1,
      explanation:
        "'can't be' = I'm sure it isn't true — based on evidence (he sold it).",
      goalId: "prohibition",
    },
    {
      sentence: "Sorry, you can't take photos in here.",
      question: INTENT_QUESTION,
      options: [
        "Expressing a prohibition",
        "Expressing an inability",
        "Making a deduction",
        "Making a suggestion",
      ],
      correctIndex: 0,
      explanation:
        "'can't' here means it's not allowed — common and less formal than 'mustn't'.",
      goalId: "prohibition",
    },

    // --- DEDUCTION ---
    {
      sentence: "You've been working for twelve hours. You must be tired.",
      question: INTENT_QUESTION,
      options: [
        "An obligation",
        "A logical conclusion based on evidence",
        "A prohibition",
        "A regret",
      ],
      correctIndex: 1,
      explanation:
        "'must be' = I'm almost sure it's true. It's a deduction, not an obligation.",
      goalId: "deduction",
    },
    {
      sentence: "Listen to that noise next door. They must be having a party.",
      question: "What does 'must be having' express?",
      options: [
        "They are obliged to have a party",
        "The speaker is almost sure a party is happening now",
        "The party is prohibited",
        "The party happened yesterday",
      ],
      correctIndex: 1,
      explanation:
        "'must be + verb-ing' = deduction about something in progress now.",
      goalId: "deduction",
    },

    // --- PAST IMPOSSIBILITY ---
    {
      sentence: "He can't have taken the bus — there are no buses after midnight.",
      question: INTENT_QUESTION,
      options: [
        "He was not allowed to take the bus",
        "The speaker is sure he didn't take the bus",
        "He should have taken the bus",
        "He will take the bus",
      ],
      correctIndex: 1,
      explanation:
        "'can't have + past participle' = I'm sure it didn't happen.",
      goalId: "past-impossibility",
    },
    {
      sentence: "She couldn't have written this email. She doesn't speak German.",
      question: "Which sentence means the same?",
      options: [
        "She must have written this email.",
        "It's impossible that she wrote this email.",
        "She wasn't allowed to write this email.",
        "She should have written this email.",
      ],
      correctIndex: 1,
      explanation:
        "'couldn't have' and 'can't have' both express past impossibility.",
      goalId: "past-impossibility",
    },

    // --- PAST DEDUCTION ---
    {
      sentence: "The grass is wet. It must have rained during the night.",
      question: INTENT_QUESTION,
      options: [
        "A deduction about the past based on evidence",
        "An obligation in the past",
        "A past prohibition",
        "A future prediction",
      ],
      correctIndex: 0,
      explanation:
        "'must have + past participle' = I'm almost sure it happened.",
      goalId: "past-deduction",
    },
    {
      sentence: "I had my wallet at the café. I must have left it there.",
      question: "How sure is the speaker?",
      options: [
        "Not sure at all",
        "Almost sure — it's the logical conclusion",
        "Sure it didn't happen",
        "They were obliged to leave it",
      ],
      correctIndex: 1,
      explanation:
        "'must have' = a strong, logical conclusion about a past event.",
      goalId: "past-deduction",
    },
    {
      sentence: "Ana had to leave early yesterday.",
      question: "Is this a deduction about the past?",
      options: [
        "Yes — 'had to' means 'must have'",
        "No — 'had to' expresses a past obligation",
        "Yes — the speaker is guessing",
        "No — it's a prohibition",
      ],
      correctIndex: 1,
      explanation:
        "Careful: 'had to' = past obligation. For past deduction, use 'must have + past participle' (She must have left early).",
      goalId: "past-deduction",
    },
  ],
  speaking: [
    {
      text: "I must finish this today.",
      translation: "Tengo que terminar esto hoy.",
      phoneticFocus: "'must' /mʌst/ — in fast speech the t disappears before 'finish': /mʌs ˈfɪnɪʃ/",
      goalId: "obligation",
    },
    {
      text: "You don't have to wait for me.",
      translation: "No tienes que esperarme.",
      phoneticFocus: "'have to' → /ˈhæftə/ ('haf-tuh') — the v becomes f",
      goalId: "obligation",
    },
    {
      text: "I have to get up at six.",
      translation: "Tengo que levantarme a las seis.",
      phoneticFocus: "'have to' /ˈhæftə/; linking 'get up' → 'ge-tup'",
      goalId: "external",
    },
    {
      text: "We had to wait for two hours.",
      translation: "Tuvimos que esperar dos horas.",
      phoneticFocus: "'had to' → /ˈhættə/ ('hat-tuh'); weak 'for' /fə/",
      goalId: "external",
    },
    {
      text: "You mustn't smoke in here.",
      translation: "No debes fumar aquí.",
      phoneticFocus: "'mustn't' /ˈmʌsnt/ — the first t is silent",
      goalId: "prohibition",
    },
    {
      text: "That can't be true!",
      translation: "¡Eso no puede ser cierto!",
      phoneticFocus: "Stress on CAN'T and TRUE; 'can't' /kɑːnt/ with a clear t",
      goalId: "prohibition",
    },
    {
      text: "You must be joking!",
      translation: "¡Debes estar bromeando!",
      phoneticFocus: "Linking 'must be' → /mʌs bi/; stress on JOK-ing",
      goalId: "deduction",
    },
    {
      text: "She must be at work.",
      translation: "Ella debe estar en el trabajo.",
      phoneticFocus: "Linking 'be at' → 'bee-yat'; falling intonation shows certainty",
      goalId: "deduction",
    },
    {
      text: "He can't have forgotten.",
      translation: "No puede haberlo olvidado.",
      phoneticFocus: "'can't have' → /ˈkɑːntəv/ ('cant-uv')",
      goalId: "past-impossibility",
    },
    {
      text: "You must have been worried.",
      translation: "Debiste estar preocupado.",
      phoneticFocus: "'must have' → 'must've' /ˈmʌstəv/; never write 'must of'",
      goalId: "past-deduction",
    },
    {
      text: "I must have dropped it.",
      translation: "Se me debe haber caído.",
      phoneticFocus: "'must've' /ˈmʌstəv/; 'dropped' /drɒpt/ — one syllable",
      goalId: "past-deduction",
    },
  ],
  writing: [
    {
      text: "I must stop eating so much chocolate.",
      translation: "Debo dejar de comer tanto chocolate.",
      goalId: "obligation",
    },
    {
      text: "You don't have to pay for the tickets.",
      translation: "No tienes que pagar por las entradas.",
      goalId: "obligation",
    },
    {
      text: "She has to work on Saturdays.",
      translation: "Ella tiene que trabajar los sábados.",
      goalId: "external",
    },
    {
      text: "We had to walk home in the rain.",
      translation: "Tuvimos que caminar a casa bajo la lluvia.",
      goalId: "external",
    },
    {
      text: "You mustn't tell anyone.",
      translation: "No debes decírselo a nadie.",
      goalId: "prohibition",
    },
    {
      text: "It can't be midnight already!",
      translation: "¡No puede ser medianoche ya!",
      goalId: "prohibition",
    },
    {
      text: "They must be very proud of you.",
      translation: "Deben estar muy orgullosos de ti.",
      goalId: "deduction",
    },
    {
      text: "You must be Ana's brother.",
      translation: "Tú debes ser el hermano de Ana.",
      goalId: "deduction",
    },
    {
      text: "She can't have left without saying goodbye.",
      translation: "No puede haberse ido sin despedirse.",
      goalId: "past-impossibility",
    },
    {
      text: "Someone must have opened the window.",
      translation: "Alguien debe haber abierto la ventana.",
      goalId: "past-deduction",
    },
    {
      text: "The concert must have been amazing.",
      translation: "El concierto debe haber sido increíble.",
      goalId: "past-deduction",
    },
  ],
});
