import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const pastSimpleContinuous = defineTopic({
  id: "past-simple-continuous",
  title: "Past Simple & Continuous",
  subtitle: "Mastering the Past",
  goals: [
    {
      id: "completed",
      title: "Completed Actions",
      translation: "Acciones terminadas en el pasado",
      description:
        "Use the past simple for actions that started and finished in the past, often with a finished time expression (yesterday, last week, in 2019, two days ago). Regular verbs add -ed; irregular verbs have their own form (go → went, see → saw). Use did/didn't + base verb for questions and negatives (✗ I didn't went).",
      examples: [
        "I visited my grandparents last weekend.",
        "She bought a new car two months ago.",
        "We didn't see the end of the film.",
      ],
    },
    {
      id: "progress",
      title: "Actions in Progress in the Past",
      translation: "Acciones en progreso en un momento del pasado",
      description:
        "Use the past continuous (was/were + verb-ing) for an action that was happening at a specific moment in the past. The action started before that moment and continued after it. Typical signals: at 8 p.m. yesterday, at that moment, this time last year, all morning.",
      examples: [
        "At nine o'clock last night, I was watching TV.",
        "This time last year, we were living in Rome.",
        "What were you doing at midnight?",
      ],
    },
    {
      id: "interruption",
      title: "Interrupted Actions",
      translation: "Interrupción de una acción larga por una corta",
      description:
        "Combine both tenses when a short action (past simple) interrupts a longer one (past continuous). Use 'when' before the short action and 'while' before the long one: 'I was cooking when the phone rang' / 'While I was cooking, the phone rang'.",
      examples: [
        "I was having a shower when the doorbell rang.",
        "While she was crossing the street, she dropped her phone.",
        "We were sleeping when the alarm went off.",
      ],
    },
    {
      id: "background",
      title: "Background vs. Main Events",
      translation: "Contrastar el contexto con los eventos principales",
      description:
        "In stories, use the past continuous to set the scene (weather, what people were doing, the atmosphere) and the past simple for the main events that move the story forward. Several past simple verbs in a row show actions in sequence.",
      examples: [
        "The sun was shining and the birds were singing. Suddenly, a man appeared.",
        "It was raining heavily, so we stayed inside and played cards.",
        "People were dancing everywhere. Then the lights went out.",
      ],
    },
  ],
  reading: [
    // --- COMPLETED ---
    {
      sentence: "I finished my homework at six and went to bed early.",
      question: INTENT_QUESTION,
      options: [
        "Describing completed actions in the past",
        "Describing an action in progress at a past moment",
        "Setting the scene of a story",
        "Describing an interrupted action",
      ],
      correctIndex: 0,
      explanation:
        "Past simple ('finished', 'went') for actions that started and finished in the past, one after the other.",
      goalId: "completed",
    },
    {
      sentence: "Shakespeare wrote Hamlet around 1600.",
      question: "Why is the past simple used?",
      options: [
        "The action was in progress at a specific moment",
        "The action is finished and happened at a past time",
        "The action was interrupted",
        "It describes the background of a story",
      ],
      correctIndex: 1,
      explanation:
        "A finished action at a finished time ('around 1600') takes the past simple.",
      goalId: "completed",
    },
    {
      sentence: "Did you go to the party last night?",
      question: "Which form is correct for the past simple question?",
      options: [
        "Did + subject + past form (went)",
        "Did + subject + base verb (go)",
        "Was + subject + base verb (go)",
        "Were + subject + verb-ing (going)",
      ],
      correctIndex: 1,
      explanation:
        "After 'did', always use the base verb. ✗ 'Did you went…?'",
      goalId: "completed",
    },
    {
      sentence: "She lived in Paris for three years, then moved to Berlin.",
      question: INTENT_QUESTION,
      options: [
        "A situation that is still true",
        "A completed period and a finished action in the past",
        "An action in progress at a specific time",
        "A repeated annoying habit",
      ],
      correctIndex: 1,
      explanation:
        "Even with 'for three years', the past simple shows that period is finished — she doesn't live there now.",
      goalId: "completed",
    },

    // --- PROGRESS ---
    {
      sentence: "At 10 p.m. yesterday, I was studying for my exam.",
      question: INTENT_QUESTION,
      options: [
        "A completed action",
        "An action in progress at a specific past moment",
        "An interruption",
        "A main event in a story",
      ],
      correctIndex: 1,
      explanation:
        "Past continuous + specific time: at 10 p.m. the studying had started and hadn't finished.",
      goalId: "progress",
    },
    {
      sentence: "What were you doing at this time last Sunday?",
      question: "What is the speaker asking about?",
      options: [
        "A finished action",
        "An activity in progress at a particular past moment",
        "A habit",
        "A future plan",
      ],
      correctIndex: 1,
      explanation:
        "'What were you doing at…?' asks what was in progress at that exact moment.",
      goalId: "progress",
    },
    {
      sentence: "This time last year, we were travelling around South America.",
      question: "Was the trip finished 'this time last year'?",
      options: [
        "Yes, it was already over",
        "No, it was in progress at that time",
        "It hadn't started yet",
        "The sentence doesn't say anything about time",
      ],
      correctIndex: 1,
      explanation:
        "The past continuous places us in the middle of the trip at that moment.",
      goalId: "progress",
    },
    {
      sentence: "I was working all morning, so I didn't see your message.",
      question: "What does 'was working all morning' emphasise?",
      options: [
        "The duration of an activity in progress",
        "A short, sudden action",
        "A future plan",
        "A permanent situation",
      ],
      correctIndex: 0,
      explanation:
        "The continuous emphasises that the activity was ongoing during the whole period.",
      goalId: "progress",
    },

    // --- INTERRUPTION ---
    {
      sentence: "I was walking home when I saw an old friend.",
      question: INTENT_QUESTION,
      options: [
        "Two completed actions in sequence",
        "A long action interrupted by a short one",
        "Two actions happening at the same time for a long period",
        "A habit in the past",
      ],
      correctIndex: 1,
      explanation:
        "'was walking' (long action in progress) is interrupted by 'saw' (short action).",
      goalId: "interruption",
    },
    {
      sentence: "While I was cooking, I cut my finger.",
      question: "Which action is the interruption?",
      options: [
        "I was cooking",
        "I cut my finger",
        "Both actions are interruptions",
        "Neither — they're completely separate",
      ],
      correctIndex: 1,
      explanation:
        "The short action in the past simple ('cut') happens in the middle of the longer one ('was cooking').",
      goalId: "interruption",
    },
    {
      sentence: "We were watching the final when the TV suddenly stopped working.",
      question: "Which word introduces the short action?",
      options: ["were", "watching", "when", "suddenly"],
      correctIndex: 2,
      explanation:
        "'when' usually introduces the short, interrupting action; 'while' usually introduces the long one.",
      goalId: "interruption",
    },
    {
      sentence: "When the teacher came in, the students were talking loudly.",
      question: "What happened first?",
      options: [
        "The teacher came in, then the students started talking",
        "The students were already talking when the teacher came in",
        "Both started at exactly the same time",
        "The students stopped talking, then the teacher came in",
      ],
      correctIndex: 1,
      explanation:
        "The talking was already in progress. Compare: 'When the teacher came in, the students stopped talking' (one after the other).",
      goalId: "interruption",
    },

    // --- BACKGROUND ---
    {
      sentence: "It was snowing and everyone was sitting by the fire. Suddenly, someone knocked at the door.",
      question: "What is the role of 'It was snowing and everyone was sitting by the fire'?",
      options: [
        "It's the main event of the story",
        "It sets the scene — the background",
        "It's the result of the knock",
        "It's an instruction",
      ],
      correctIndex: 1,
      explanation:
        "The past continuous describes the atmosphere; the past simple ('knocked') is the main event.",
      goalId: "background",
    },
    {
      sentence: "The music was playing and people were laughing. Then the police arrived.",
      question: "Which verb moves the story forward?",
      options: ["was playing", "were laughing", "arrived", "None of them"],
      correctIndex: 2,
      explanation:
        "The past simple ('arrived') is the main event; the past continuous verbs describe the background.",
      goalId: "background",
    },
    {
      sentence: "The sun was setting as we reached the top of the mountain.",
      question: INTENT_QUESTION,
      options: [
        "Contrasting the scene with the main event",
        "Describing two habits",
        "Describing something that happens every day",
        "Giving directions to the mountain",
      ],
      correctIndex: 0,
      explanation:
        "'was setting' paints the scene; 'reached' is the key event of the story.",
      goalId: "background",
    },
    {
      sentence: "It was a cold night. The wind was blowing hard. I locked the door and turned off the lights.",
      question: "What do 'locked' and 'turned off' show?",
      options: [
        "Background actions in progress",
        "Main actions in sequence",
        "Interrupted actions",
        "Repeated habits",
      ],
      correctIndex: 1,
      explanation:
        "Several past simple verbs in a row show the main events, one after another.",
      goalId: "background",
    },
  ],
  speaking: [
    {
      text: "I watched a great film yesterday.",
      translation: "Ayer vi una película genial.",
      phoneticFocus: "-ed after /tʃ/ sounds like /t/: 'watched' /wɒtʃt/ — one syllable",
      goalId: "completed",
    },
    {
      text: "We visited Rome two years ago.",
      translation: "Visitamos Roma hace dos años.",
      phoneticFocus: "-ed after /t/ adds a syllable: 'visited' /ˈvɪzɪtɪd/",
      goalId: "completed",
    },
    {
      text: "She didn't call me last night.",
      translation: "Ella no me llamó anoche.",
      phoneticFocus: "'didn't' /ˈdɪdnt/ — the second d is almost silent",
      goalId: "completed",
    },
    {
      text: "At eight o'clock, I was having dinner.",
      translation: "A las ocho, estaba cenando.",
      phoneticFocus: "Weak 'was' /wəz/; linking 'eight o'clock' → 'ei-to-clock'",
      goalId: "progress",
    },
    {
      text: "What were you doing at midnight?",
      translation: "¿Qué estabas haciendo a medianoche?",
      phoneticFocus: "Weak 'were you' → /wə jə/; falling intonation on a wh- question",
      goalId: "progress",
    },
    {
      text: "They were playing football all afternoon.",
      translation: "Estuvieron jugando fútbol toda la tarde.",
      phoneticFocus: "Weak 'were' /wə/; stress on FOOT-ball and af-ter-NOON",
      goalId: "progress",
    },
    {
      text: "I was sleeping when the phone rang.",
      translation: "Estaba durmiendo cuando sonó el teléfono.",
      phoneticFocus: "Short pause before 'when'; stress the short action: phone RANG",
      goalId: "interruption",
    },
    {
      text: "While I was driving, it started to rain.",
      translation: "Mientras manejaba, empezó a llover.",
      phoneticFocus: "Rising tone on 'driving', falling on 'rain'; 'started' /ˈstɑːtɪd/",
      goalId: "interruption",
    },
    {
      text: "She was reading when the lights went out.",
      translation: "Estaba leyendo cuando se fue la luz.",
      phoneticFocus: "Linking 'went out' → 'wen-tout'",
      goalId: "interruption",
    },
    {
      text: "It was raining and the streets were empty.",
      translation: "Estaba lloviendo y las calles estaban vacías.",
      phoneticFocus: "Linking 'streets were empty' → 'streets-wer-REMP-ty'",
      goalId: "background",
    },
    {
      text: "The birds were singing. Suddenly, a dog barked.",
      translation: "Los pájaros cantaban. De repente, un perro ladró.",
      phoneticFocus: "Pause after 'Suddenly'; 'barked' /bɑːkt/ — one syllable",
      goalId: "background",
    },
    {
      text: "Everyone was dancing, so I joined them.",
      translation: "Todos estaban bailando, así que me uní a ellos.",
      phoneticFocus: "'joined' /dʒɔɪnd/ — -ed sounds like /d/; linking 'joined them'",
      goalId: "background",
    },
  ],
  writing: [
    {
      text: "We went to the beach last summer.",
      translation: "Fuimos a la playa el verano pasado.",
      goalId: "completed",
    },
    {
      text: "Did you enjoy the concert?",
      translation: "¿Disfrutaste el concierto?",
      goalId: "completed",
    },
    {
      text: "He didn't answer my email.",
      translation: "No respondió mi correo.",
      goalId: "completed",
    },
    {
      text: "At noon, I was waiting for the bus.",
      translation: "Al mediodía, estaba esperando el autobús.",
      goalId: "progress",
    },
    {
      text: "What were you doing last night at ten?",
      translation: "¿Qué estabas haciendo anoche a las diez?",
      goalId: "progress",
    },
    {
      text: "This time last year, I was living in London.",
      translation: "Hace exactamente un año, vivía en Londres.",
      goalId: "progress",
    },
    {
      text: "I was having a shower when the doorbell rang.",
      translation: "Me estaba duchando cuando sonó el timbre.",
      goalId: "interruption",
    },
    {
      text: "While we were eating, the lights went out.",
      translation: "Mientras comíamos, se fue la luz.",
      goalId: "interruption",
    },
    {
      text: "She fell while she was running.",
      translation: "Se cayó mientras corría.",
      goalId: "interruption",
    },
    {
      text: "It was raining, so we stayed at home.",
      translation: "Estaba lloviendo, así que nos quedamos en casa.",
      goalId: "background",
    },
    {
      text: "The sun was shining when we arrived.",
      translation: "Brillaba el sol cuando llegamos.",
      goalId: "background",
    },
    {
      text: "Suddenly, a strange man opened the door.",
      translation: "De repente, un hombre extraño abrió la puerta.",
      goalId: "background",
    },
  ],
});
