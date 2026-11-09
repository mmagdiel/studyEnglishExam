import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const passiveVoice = defineTopic({
  id: "passive-voice",
  title: "Passive Voice",
  subtitle: "Focusing on the Action & the Receiver",
  goals: [
    {
      id: "what-happens",
      title: "What Happens, Not Who Does It",
      translation: "Hablar de LO QUE PASA, no de QUIÉN lo hace",
      description:
        "Use be + past participle when the doer is unknown, unimportant or obvious, and the action is what matters. Don't add 'by…' in these cases (✗ My bike was stolen by someone). The tense is shown by 'be': is made, was made, has been made, will be made, is being made.",
      examples: [
        "My bike has been stolen!",
        "Coffee is grown in Colombia.",
        "The road will be closed tomorrow.",
      ],
    },
    {
      id: "done-to",
      title: "What Is Done to Someone or Something",
      translation: "Hablar de lo que SE LE HACE a la persona o cosa que nos interesa",
      description:
        "Use the passive to describe what is done to a person or thing we're talking about. With verbs that have two objects (give, send, tell, show, offer, ask), the person usually becomes the subject: 'I was given a prize' (more natural than 'A prize was given to me'). Modals: must be done, can be fixed, should be checked.",
      examples: [
        "I was given a medal after the race.",
        "The patient is being examined by the doctor right now.",
        "Your phone can be repaired in an hour.",
      ],
    },
    {
      id: "receiver",
      title: "Focusing on the Receiver",
      translation: "Centrar la atención en quien recibe la acción",
      description:
        "Put the receiver at the start of the sentence to make it the topic — very common in news, reports, science, processes and formal notices. It also helps keep the same topic across sentences: 'This is our new library. It was opened last year.'",
      examples: [
        "A man has been arrested after a robbery in the city centre.",
        "The eggs are mixed with sugar, and then the flour is added.",
        "Smoking is not permitted in this building.",
      ],
    },
    {
      id: "agent",
      title: "Saying Who Did It or What Caused It",
      translation: "Decir quién hizo o qué causó la acción",
      description:
        "Add 'by + agent' when the doer or cause is new, important or surprising information — it goes at the end, where English puts the key information. Use 'with' for the instrument: 'The door was opened with a key' (by a person, with a tool).",
      examples: [
        "Hamlet was written by Shakespeare.",
        "The fire was caused by a cigarette.",
        "Our house was designed by my grandmother.",
      ],
    },
  ],
  reading: [
    // --- WHAT HAPPENS ---
    {
      sentence: "My wallet was stolen on the bus yesterday.",
      question: INTENT_QUESTION,
      options: [
        "Focusing on what happened because the thief is unknown",
        "Saying exactly who stole the wallet",
        "Giving an instruction",
        "Describing a habit",
      ],
      correctIndex: 0,
      explanation:
        "The doer is unknown, so the passive focuses on the action: 'was stolen'.",
      goalId: "what-happens",
    },
    {
      sentence: "English is spoken in many countries.",
      question: "Why is there no 'by…' in this sentence?",
      options: [
        "Because the doer (people in general) is obvious",
        "Because it's a mistake",
        "Because it's in the past",
        "Because English can't be the subject",
      ],
      correctIndex: 0,
      explanation:
        "When the doer is 'people in general', we don't mention it. ✗ 'by people'.",
      goalId: "what-happens",
    },
    {
      sentence: "The new bridge will be finished next year.",
      question: "Which tense is this passive?",
      options: [
        "Present simple",
        "Past simple",
        "Future with will",
        "Present perfect",
      ],
      correctIndex: 2,
      explanation:
        "will + be + past participle = future passive. The tense is always in 'be'.",
      goalId: "what-happens",
    },
    {
      sentence: "The match has been cancelled because of the rain.",
      question: INTENT_QUESTION,
      options: [
        "Focusing on the action and its result now",
        "Saying who cancelled the match",
        "Making a suggestion",
        "Asking a question",
      ],
      correctIndex: 0,
      explanation:
        "Present perfect passive (has been + past participle): what matters is the news, not who decided.",
      goalId: "what-happens",
    },

    // --- DONE TO ---
    {
      sentence: "I was offered a job in London last week!",
      question: INTENT_QUESTION,
      options: [
        "Describing what was done to the speaker",
        "Saying the speaker offered someone a job",
        "Asking about a job",
        "Describing a future plan",
      ],
      correctIndex: 0,
      explanation:
        "The speaker is the receiver of the offer. With 'offer, give, send, tell…' the person usually becomes the subject.",
      goalId: "done-to",
    },
    {
      sentence: "Your car is being washed at the moment.",
      question: "What is happening to the car?",
      options: [
        "It was washed yesterday",
        "Someone is washing it right now",
        "It will be washed tomorrow",
        "It is washing something",
      ],
      correctIndex: 1,
      explanation:
        "is/are being + past participle = present continuous passive: the action is in progress now.",
      goalId: "done-to",
    },
    {
      sentence: "These forms must be signed before Friday.",
      question: INTENT_QUESTION,
      options: [
        "Saying what must be done to the forms",
        "Saying who signed the forms",
        "Making a deduction",
        "Describing a past action",
      ],
      correctIndex: 0,
      explanation: "Modal + be + past participle: must be signed, can be done, should be checked.",
      goalId: "done-to",
    },
    {
      sentence: "I was given a present by my aunt.",
      question: "Which other version is also correct, but sounds less natural?",
      options: [
        "To me was given a present by my aunt.",
        "A present was given to me by my aunt.",
        "I was gave a present by my aunt.",
        "I was given by my aunt a present.",
      ],
      correctIndex: 1,
      explanation:
        "With two objects, English prefers the person as subject: 'I was given…'. ✗ 'was gave' (use the past participle).",
      goalId: "done-to",
    },

    // --- RECEIVER ---
    {
      sentence: "Two men have been arrested after the bank robbery.",
      question: "Where would you probably read this?",
      options: [
        "In a news report",
        "In a love letter",
        "In a recipe",
        "In a personal diary about a holiday",
      ],
      correctIndex: 0,
      explanation:
        "News reports often start with the receiver (the men) — they're the story.",
      goalId: "receiver",
    },
    {
      sentence: "First the grapes are picked, then they are crushed.",
      question: INTENT_QUESTION,
      options: [
        "Describing a process, focusing on what happens to the grapes",
        "Saying who picks the grapes",
        "Giving an opinion",
        "Talking about the past",
      ],
      correctIndex: 0,
      explanation:
        "Processes often use the present simple passive: the focus is on the material, not the workers.",
      goalId: "receiver",
    },
    {
      sentence: "This is the Eiffel Tower. It was built in 1889.",
      question: "Why does the second sentence use the passive?",
      options: [
        "To keep the same topic (the tower) as the subject",
        "Because the builder is the main topic",
        "Because it's a question",
        "Because it's the future",
      ],
      correctIndex: 0,
      explanation:
        "The tower is the topic, so it stays as the subject: 'It was built…'.",
      goalId: "receiver",
    },

    // --- AGENT ---
    {
      sentence: "The Mona Lisa was painted by Leonardo da Vinci.",
      question: INTENT_QUESTION,
      options: [
        "Saying who did the action — important information",
        "Hiding who did the action",
        "Describing a process",
        "Making a request",
      ],
      correctIndex: 0,
      explanation:
        "'by + agent' gives important information: who painted it.",
      goalId: "agent",
    },
    {
      sentence: "The accident was caused by ice on the road.",
      question: "What does 'by ice on the road' tell us?",
      options: [
        "The cause of the accident",
        "Where the accident was",
        "When the accident happened",
        "Who was hurt",
      ],
      correctIndex: 0,
      explanation:
        "'by' can introduce a cause, not only a person.",
      goalId: "agent",
    },
    {
      sentence: "The letter was written ___ a pencil ___ a young girl.",
      question: "Which prepositions complete the sentence?",
      options: ["by / with", "with / by", "by / by", "with / with"],
      correctIndex: 1,
      explanation:
        "'with' + instrument (a pencil), 'by' + agent (the girl who wrote it).",
      goalId: "agent",
    },
  ],
  speaking: [
    {
      text: "My phone has been stolen!",
      translation: "¡Me han robado el teléfono!",
      phoneticFocus: "Weak 'has been' /əz bɪn/; stress on PHONE and STOL-en",
      goalId: "what-happens",
    },
    {
      text: "Rice is grown in many parts of Asia.",
      translation: "El arroz se cultiva en muchas partes de Asia.",
      phoneticFocus: "Linking 'Rice is' → 'ri-siz'; 'grown' /ɡrəʊn/",
      goalId: "what-happens",
    },
    {
      text: "The meeting was cancelled.",
      translation: "La reunión fue cancelada.",
      phoneticFocus: "'cancelled' /ˈkænsld/ — two syllables",
      goalId: "what-happens",
    },
    {
      text: "I was told to wait here.",
      translation: "Me dijeron que esperara aquí.",
      phoneticFocus: "Weak 'was' /wəz/; linking 'told to' — one t sound",
      goalId: "done-to",
    },
    {
      text: "Your car is being repaired.",
      translation: "Están reparando tu carro.",
      phoneticFocus: "'being' /ˈbiːɪŋ/ — two syllables; stress on re-PAIRED",
      goalId: "done-to",
    },
    {
      text: "This can be done online.",
      translation: "Esto se puede hacer en línea.",
      phoneticFocus: "Weak 'can be' /kən bi/; stress on DONE and on-LINE",
      goalId: "done-to",
    },
    {
      text: "A man has been arrested.",
      translation: "Un hombre ha sido arrestado.",
      phoneticFocus: "'arrested' /əˈrestɪd/ — -ed adds a syllable after t",
      goalId: "receiver",
    },
    {
      text: "Smoking is not allowed here.",
      translation: "No se permite fumar aquí.",
      phoneticFocus: "'allowed' /əˈlaʊd/ — sounds like 'aloud'",
      goalId: "receiver",
    },
    {
      text: "It was written by my grandfather.",
      translation: "Fue escrito por mi abuelo.",
      phoneticFocus: "'written' /ˈrɪtn/ — silent w; weak 'by' stays clear /baɪ/",
      goalId: "agent",
    },
    {
      text: "The fire was caused by a candle.",
      translation: "El incendio fue causado por una vela.",
      phoneticFocus: "'caused' /kɔːzd/ — one syllable",
      goalId: "agent",
    },
  ],
  writing: [
    {
      text: "The window was broken last night.",
      translation: "La ventana fue rota anoche.",
      goalId: "what-happens",
    },
    {
      text: "Spanish is spoken in Mexico.",
      translation: "En México se habla español.",
      goalId: "what-happens",
    },
    {
      text: "The concert has been postponed.",
      translation: "El concierto ha sido pospuesto.",
      goalId: "what-happens",
    },
    {
      text: "She was given a second chance.",
      translation: "Le dieron una segunda oportunidad.",
      goalId: "done-to",
    },
    {
      text: "The house is being painted this week.",
      translation: "Están pintando la casa esta semana.",
      goalId: "done-to",
    },
    {
      text: "Mobile phones must be switched off.",
      translation: "Los teléfonos móviles deben apagarse.",
      goalId: "receiver",
    },
    {
      text: "The museum was opened in 1995.",
      translation: "El museo fue inaugurado en 1995.",
      goalId: "receiver",
    },
    {
      text: "This song was written by my brother.",
      translation: "Esta canción fue escrita por mi hermano.",
      goalId: "agent",
    },
    {
      text: "The town was destroyed by an earthquake.",
      translation: "El pueblo fue destruido por un terremoto.",
      goalId: "agent",
    },
  ],
});
