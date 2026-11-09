import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const presentSimpleContinuous = defineTopic({
  id: "present-simple-continuous",
  title: "Present Simple & Continuous",
  subtitle: "Mastering the Present",
  goals: [
    {
      id: "routines",
      title: "Routines, Habits & Permanent Situations",
      translation: "Rutinas, hábitos y situaciones permanentes",
      description:
        "Use the present simple for things you do regularly and for situations that are true in general or for a long time. Add -s/-es with he/she/it, and use do/does for questions and negatives. Frequency adverbs (always, usually, often, never) go before the main verb but after 'be'.",
      examples: [
        "I get up at seven every morning.",
        "My parents live in a small town near the coast.",
        "She doesn't drink coffee.",
      ],
    },
    {
      id: "feelings",
      title: "Feelings & Thoughts",
      translation: "Expresar sentimientos y pensamientos",
      description:
        "State verbs describe feelings, opinions and mental states, not actions: like, love, hate, want, need, prefer, think (= opinion), believe, know, understand, remember, mean. They normally use the present simple, even right now (✗ I'm knowing the answer). Some change meaning: 'I think it's great' (opinion) vs. 'I'm thinking about it' (process).",
      examples: [
        "I love this song.",
        "I don't understand what you mean.",
        "I think she's right.",
      ],
    },
    {
      id: "repeated",
      title: "Repeated Situations",
      translation: "Situaciones que ocurren repetidamente",
      description:
        "Use the present simple with frequency expressions (every week, twice a month, on Mondays) and for timetables that repeat (The train leaves at 8). Use 'always / constantly + present continuous' for repeated actions that annoy or surprise you.",
      examples: [
        "The bus leaves every twenty minutes.",
        "We visit my grandparents twice a month.",
        "He's always losing his keys!",
      ],
    },
    {
      id: "progress",
      title: "Situations in Progress",
      translation: "Situaciones en progreso",
      description:
        "Use the present continuous (am/is/are + verb-ing) for actions in progress around now — they started and haven't finished, even if you're not doing them at this exact second. Common time expressions: these days, at the moment, this month, currently.",
      examples: [
        "I'm reading a great book about Japan.",
        "She's studying medicine at university.",
        "We're currently working on a new project.",
      ],
    },
    {
      id: "now",
      title: "Happening Right Now",
      translation: "Lo que está pasando en este momento",
      description:
        "Use the present continuous for actions happening at the moment of speaking. Typical signals: now, right now, at the moment, Look!, Listen!",
      examples: [
        "Look! It's snowing.",
        "Be quiet — the baby is sleeping.",
        "I can't talk now, I'm driving.",
      ],
    },
    {
      id: "instructions",
      title: "Giving Instructions",
      translation: "Dar instrucciones",
      description:
        "Use the present simple (often with 'you') to give directions, explain how something works or describe the steps of a process. It sounds friendlier than a list of imperatives. Combine with sequencers: first, then, after that.",
      examples: [
        "You take the second street on the left.",
        "First you press this button, and then the screen turns on.",
        "You add the eggs and mix everything together.",
      ],
    },
    {
      id: "temporary",
      title: "Temporary Situations",
      translation: "Situaciones temporales",
      description:
        "Use the present continuous for situations that are true only for a limited period. Compare: 'I live in Lima' (permanent, present simple) vs. 'I'm living in Lima this year' (temporary, present continuous).",
      examples: [
        "I'm staying with a friend until I find a flat.",
        "He usually works in Madrid, but this week he's working from home.",
        "We're using my dad's car while ours is at the garage.",
      ],
    },
    {
      id: "changing",
      title: "Changing Situations",
      translation: "Situaciones que están cambiando",
      description:
        "Use the present continuous for situations that are developing or changing, often with get, become, grow, increase, rise, change, improve. Comparatives are common: 'getting better', 'more and more expensive'.",
      examples: [
        "Your English is getting better and better.",
        "Prices are going up every month.",
        "The climate is changing fast.",
      ],
    },
  ],
  reading: [
    // --- ROUTINES ---
    {
      sentence: "My brother goes to the gym three times a week.",
      question: INTENT_QUESTION,
      options: [
        "Describing a habit",
        "Describing something happening right now",
        "Describing a temporary situation",
        "Describing a change",
      ],
      correctIndex: 0,
      explanation:
        "Present simple + frequency expression ('three times a week') describes a habit or routine.",
      goalId: "routines",
    },
    {
      sentence: "Water boils at 100 degrees Celsius.",
      question: "Why is the present simple used here?",
      options: [
        "Because it's happening now",
        "Because it's a permanent fact that is always true",
        "Because it's temporary",
        "Because it's an instruction",
      ],
      correctIndex: 1,
      explanation:
        "General truths and facts that don't change use the present simple.",
      goalId: "routines",
    },

    // --- FEELINGS ---
    {
      sentence: "I really want a cup of tea right now.",
      question: "Why is it 'I want' and not 'I'm wanting', even with 'right now'?",
      options: [
        "Because it's a habit",
        "Because 'want' is a state verb that expresses a feeling",
        "Because it's an instruction",
        "Because it's a permanent situation",
      ],
      correctIndex: 1,
      explanation:
        "State verbs (want, like, know, need…) express feelings and thoughts and stay in the present simple, even for 'now'.",
      goalId: "feelings",
    },
    {
      sentence: "I don't believe he's telling the truth.",
      question: INTENT_QUESTION,
      options: [
        "Expressing an opinion or thought",
        "Describing a daily routine",
        "Giving directions",
        "Describing a change",
      ],
      correctIndex: 0,
      explanation:
        "'believe' is a mental-state verb. The speaker is expressing what they think.",
      goalId: "feelings",
    },

    // --- REPEATED ---
    {
      sentence: "The museum opens at nine and closes at six every day.",
      question: INTENT_QUESTION,
      options: [
        "Something happening at this moment",
        "A schedule that repeats",
        "A changing situation",
        "A temporary situation",
      ],
      correctIndex: 1,
      explanation:
        "Timetables and schedules that repeat use the present simple.",
      goalId: "repeated",
    },
    {
      sentence: "My roommate is always leaving dirty dishes in the sink!",
      question: "What does 'is always leaving' express?",
      options: [
        "An action happening right now",
        "A repeated action that annoys the speaker",
        "A temporary situation",
        "A feeling of love",
      ],
      correctIndex: 1,
      explanation:
        "'always + present continuous' describes a repeated action, usually with irritation.",
      goalId: "repeated",
    },

    // --- PROGRESS ---
    {
      sentence: "I'm learning to play the guitar, but I'm still not very good.",
      question: INTENT_QUESTION,
      options: [
        "An action in progress over a period around now",
        "A permanent fact",
        "A timetable",
        "An instruction",
      ],
      correctIndex: 0,
      explanation:
        "The learning process has started and isn't finished. The speaker isn't necessarily playing at this second.",
      goalId: "progress",
    },
    {
      sentence: "Our company is currently developing a new app.",
      question: "Are they working on it at this exact moment?",
      options: [
        "Yes, exactly at this second",
        "Not necessarily — it's an ongoing project around now",
        "No, it's a habit",
        "No, it's already finished",
      ],
      correctIndex: 1,
      explanation:
        "Present continuous + 'currently' describes an activity in progress over a period, not only this second.",
      goalId: "progress",
    },

    // --- NOW ---
    {
      sentence: "Shh! The baby is sleeping.",
      question: INTENT_QUESTION,
      options: [
        "A daily habit",
        "Something happening at the moment of speaking",
        "A permanent situation",
        "A change",
      ],
      correctIndex: 1,
      explanation:
        "The present continuous describes what is happening right now. 'Shh!' is a typical signal.",
      goalId: "now",
    },
    {
      sentence: "Look! Someone is trying to open your car.",
      question: "Which word signals that the action is happening now?",
      options: ["Someone", "Look!", "your", "open"],
      correctIndex: 1,
      explanation:
        "'Look!' and 'Listen!' draw attention to something happening at this moment.",
      goalId: "now",
    },

    // --- INSTRUCTIONS ---
    {
      sentence: "You go straight on, then you turn right at the traffic lights.",
      question: INTENT_QUESTION,
      options: [
        "Describing the speaker's routine",
        "Giving directions",
        "Describing what is happening now",
        "Describing a change",
      ],
      correctIndex: 1,
      explanation:
        "'You + present simple' + sequencers is a friendly way to give directions or instructions.",
      goalId: "instructions",
    },
    {
      sentence: "You put the coin in here, and the machine gives you a ticket.",
      question: INTENT_QUESTION,
      options: [
        "Explaining how something works",
        "Describing an annoying habit",
        "Describing a temporary situation",
        "Expressing a feeling",
      ],
      correctIndex: 0,
      explanation:
        "The present simple explains the steps of a process: do X, and Y happens.",
      goalId: "instructions",
    },

    // --- TEMPORARY ---
    {
      sentence: "I normally take the bus, but this week I'm cycling to work.",
      question: "Why does the speaker change from 'take' to 'I'm cycling'?",
      options: [
        "Cycling is a permanent habit",
        "Cycling is only for a limited period",
        "Cycling is happening at this second",
        "Cycling is an instruction",
      ],
      correctIndex: 1,
      explanation:
        "Present simple = normal routine; present continuous + 'this week' = temporary situation.",
      goalId: "temporary",
    },
    {
      sentence: "She's living with her aunt while her parents are abroad.",
      question: INTENT_QUESTION,
      options: [
        "A permanent situation",
        "A temporary situation",
        "A general fact",
        "A schedule",
      ],
      correctIndex: 1,
      explanation:
        "'while her parents are abroad' shows it's only for a limited time. Compare: 'She lives with her aunt' (permanent).",
      goalId: "temporary",
    },

    // --- CHANGING ---
    {
      sentence: "It's getting dark — let's go home.",
      question: INTENT_QUESTION,
      options: [
        "A situation that is changing",
        "A daily routine",
        "A permanent fact",
        "An instruction",
      ],
      correctIndex: 0,
      explanation:
        "'get + adjective' in the present continuous describes a gradual change.",
      goalId: "changing",
    },
    {
      sentence: "More and more people are working from home.",
      question: "What does 'more and more… are working' express?",
      options: [
        "A habit of the speaker",
        "A trend that is developing",
        "A timetable",
        "An action at this exact moment",
      ],
      correctIndex: 1,
      explanation:
        "'more and more' + present continuous describes a trend: a situation that is changing over time.",
      goalId: "changing",
    },
  ],
  speaking: [
    {
      text: "I usually have breakfast at eight.",
      translation: "Normalmente desayuno a las ocho.",
      phoneticFocus: "USU-al-ly /ˈjuːʒuəli/ — the 's' sounds like /ʒ/",
      goalId: "routines",
    },
    {
      text: "She works in a hospital.",
      translation: "Ella trabaja en un hospital.",
      phoneticFocus: "Third-person -s: 'works' /wɜːks/; linking 'works in a' → 'wor-ksi-nə'",
      goalId: "routines",
    },
    {
      text: "I don't know what to say.",
      translation: "No sé qué decir.",
      phoneticFocus: "'don't know' → /dəʊn nəʊ/ — the t disappears",
      goalId: "feelings",
    },
    {
      text: "I prefer tea to coffee.",
      translation: "Prefiero el té al café.",
      phoneticFocus: "pre-FER /prɪˈfɜː/ — stress on the second syllable",
      goalId: "feelings",
    },
    {
      text: "The train leaves at half past six.",
      translation: "El tren sale a las seis y media.",
      phoneticFocus: "Linking 'leaves at' → 'lea-vzat'; 'half past' → /hɑːf pɑːst/",
      goalId: "repeated",
    },
    {
      text: "He's always complaining about the weather.",
      translation: "Siempre se está quejando del clima.",
      phoneticFocus: "Stress ALWAYS to show annoyance; linking 'complaining about' → 'com-plai-ning-a-bout'",
      goalId: "repeated",
    },
    {
      text: "I'm reading a really good book.",
      translation: "Estoy leyendo un libro muy bueno.",
      phoneticFocus: "Contraction 'I'm' /aɪm/; linking 'reading a' → 'rea-ding-a'",
      goalId: "progress",
    },
    {
      text: "She's studying for her final exams.",
      translation: "Está estudiando para sus exámenes finales.",
      phoneticFocus: "'She's' /ʃiːz/; weak 'for her' → /fər ə/",
      goalId: "progress",
    },
    {
      text: "Listen! Someone's knocking at the door.",
      translation: "¡Escucha! Alguien está tocando la puerta.",
      phoneticFocus: "Silent t in 'Listen' /ˈlɪsn/; silent k in 'knocking' /ˈnɒkɪŋ/",
      goalId: "now",
    },
    {
      text: "I can't talk now, I'm driving.",
      translation: "No puedo hablar ahora, estoy manejando.",
      phoneticFocus: "'can't' /kɑːnt/ (UK) or /kænt/ (US) — stress it to avoid confusion with 'can'",
      goalId: "now",
    },
    {
      text: "You turn left at the end of the street.",
      translation: "Gira a la izquierda al final de la calle.",
      phoneticFocus: "Linking 'end of the' → 'en-dov-the'; stress on LEFT and END",
      goalId: "instructions",
    },
    {
      text: "First you add the rice, then you stir it.",
      translation: "Primero agregas el arroz, luego lo revuelves.",
      phoneticFocus: "Linking 'add the' and 'stir it' → 'stir-rit'",
      goalId: "instructions",
    },
    {
      text: "I'm staying at a hotel this week.",
      translation: "Me estoy quedando en un hotel esta semana.",
      phoneticFocus: "Linking 'staying at a' → 'stay-ing-a-tə'; stress on ho-TEL",
      goalId: "temporary",
    },
    {
      text: "He's working from home today.",
      translation: "Hoy está trabajando desde casa.",
      phoneticFocus: "'He's' /hiːz/; 'from' is weak /frəm/",
      goalId: "temporary",
    },
    {
      text: "Your English is getting better.",
      translation: "Tu inglés está mejorando.",
      phoneticFocus: "Linking 'English is' → 'En-gli-shiz'; flap t in 'getting better' (US)",
      goalId: "changing",
    },
    {
      text: "Prices are going up again.",
      translation: "Los precios están subiendo otra vez.",
      phoneticFocus: "Linking 'going up again' → 'go-ing-u-pa-gain'",
      goalId: "changing",
    },
  ],
  writing: [
    {
      text: "We always go to the beach in summer.",
      translation: "Siempre vamos a la playa en verano.",
      goalId: "routines",
    },
    {
      text: "My father doesn't eat meat.",
      translation: "Mi padre no come carne.",
      goalId: "routines",
    },
    {
      text: "I don't like horror movies.",
      translation: "No me gustan las películas de terror.",
      goalId: "feelings",
    },
    {
      text: "Do you remember her name?",
      translation: "¿Recuerdas su nombre?",
      goalId: "feelings",
    },
    {
      text: "The class starts at nine every Monday.",
      translation: "La clase empieza a las nueve todos los lunes.",
      goalId: "repeated",
    },
    {
      text: "She's always borrowing my clothes!",
      translation: "¡Siempre me está tomando prestada la ropa!",
      goalId: "repeated",
    },
    {
      text: "I'm writing a novel about my childhood.",
      translation: "Estoy escribiendo una novela sobre mi infancia.",
      goalId: "progress",
    },
    {
      text: "They're building a new hospital in my town.",
      translation: "Están construyendo un nuevo hospital en mi pueblo.",
      goalId: "progress",
    },
    {
      text: "Look! It's raining again.",
      translation: "¡Mira! Está lloviendo otra vez.",
      goalId: "now",
    },
    {
      text: "What are you doing right now?",
      translation: "¿Qué estás haciendo ahora mismo?",
      goalId: "now",
    },
    {
      text: "You take the second street on the right.",
      translation: "Tomas la segunda calle a la derecha.",
      goalId: "instructions",
    },
    {
      text: "Then you press the green button.",
      translation: "Luego presionas el botón verde.",
      goalId: "instructions",
    },
    {
      text: "I'm sleeping on the sofa this week.",
      translation: "Esta semana estoy durmiendo en el sofá.",
      goalId: "temporary",
    },
    {
      text: "My sister is living in Canada this year.",
      translation: "Mi hermana está viviendo en Canadá este año.",
      goalId: "temporary",
    },
    {
      text: "The weather is getting colder.",
      translation: "El clima se está poniendo más frío.",
      goalId: "changing",
    },
    {
      text: "More people are learning English online.",
      translation: "Más personas están aprendiendo inglés en línea.",
      goalId: "changing",
    },
  ],
});
