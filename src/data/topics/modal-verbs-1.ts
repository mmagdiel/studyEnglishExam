import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const modalVerbs1 = defineTopic({
  id: "modal-verbs-1",
  title: "Modal Verbs 1",
  subtitle: "Can, Could, Be able to, May, Might & Could have",
  goals: [
    {
      id: "ability",
      title: "Ability",
      translation: "Decir (o preguntar) si alguien tiene o tenía la habilidad de hacer algo",
      description:
        "Use can / can't for present ability and could / couldn't for general ability in the past. Use 'be able to' where 'can' has no form: future (will be able to), present perfect (have been able to), after other modals (might be able to) and in the infinitive (to be able to). For one specific success in the past, use 'was able to' or 'managed to', not 'could' (✗ I could pass the exam yesterday).",
      examples: [
        "Can you swim? — Yes, I can, but I can't dive.",
        "When I was five, I could already read.",
        "The exam was hard, but I was able to finish it.",
      ],
    },
    {
      id: "requests",
      title: "Making Requests",
      translation: "Hacer peticiones",
      description:
        "Use 'Can I / Could I / May I + base verb?' to ask for permission, and 'Can you / Could you + base verb?' to ask someone to do something. 'Could' is more polite than 'can'; 'May I' is the most formal. Answer with 'Yes, of course' / 'Sure' — not ✗ 'Yes, you could'.",
      examples: [
        "Can I borrow your pen?",
        "Could you open the window, please?",
        "May I come in?",
      ],
    },
    {
      id: "possibility",
      title: "Possibility",
      translation: "Indicar la posibilidad de un evento",
      description:
        "Use may, might or could + base verb to say something is possible now or in the future (about 50% or less). The negatives 'may not' and 'might not' mean 'possibly not'; 'can't' means it's impossible. Use 'can' for general possibility: 'It can be very cold here in winter.'",
      examples: [
        "Take an umbrella — it might rain later.",
        "She may be at home; her car is outside.",
        "That can't be Tom — he's in Paris.",
      ],
    },
    {
      id: "suggestions",
      title: "Making Suggestions",
      translation: "Hacer sugerencias",
      description:
        "Use 'could + base verb' to make a suggestion or offer an idea, often with 'We / You could…' or 'You could always…'. Use 'might' for a softer, more polite suggestion: 'You might want to…'. 'Can' also appears in informal suggestions: 'We can take a taxi if you're tired.'",
      examples: [
        "We could go to the cinema tonight.",
        "You could always ask your teacher for help.",
        "You might want to check the address before you go.",
      ],
    },
    {
      id: "past-possibility",
      title: "Possibility in the Past",
      translation: "Expresar la posibilidad en situaciones pasadas",
      description:
        "Use may / might / could + have + past participle to guess about the past (It might have been Ali). Use 'could have + past participle' for something that was possible but didn't happen (You could have hurt yourself!). Use 'couldn't have' for something impossible in the past.",
      examples: [
        "I can't find my keys. I might have left them at work.",
        "Be careful! You could have fallen.",
        "He couldn't have stolen it — he was with me all day.",
      ],
    },
  ],
  reading: [
    // --- ABILITY ---
    {
      sentence: "My little sister can speak three languages.",
      question: INTENT_QUESTION,
      options: [
        "Talking about ability",
        "Making a request",
        "Making a suggestion",
        "Guessing about the past",
      ],
      correctIndex: 0,
      explanation: "'can + base verb' describes a present ability.",
      goalId: "ability",
    },
    {
      sentence: "When I was young, I could run for hours without getting tired.",
      question: "What does 'could' express here?",
      options: [
        "A polite request",
        "A general ability in the past",
        "A suggestion",
        "A future possibility",
      ],
      correctIndex: 1,
      explanation:
        "'could' is the past of 'can' for general abilities over a period of time.",
      goalId: "ability",
    },
    {
      sentence: "The fire was big, but everyone was able to escape.",
      question: "Why is 'was able to' used instead of 'could'?",
      options: [
        "It describes a single, specific success in the past",
        "It's a general ability",
        "It's a request",
        "It's more informal",
      ],
      correctIndex: 0,
      explanation:
        "For one specific achievement in the past, use 'was able to' or 'managed to'. 'Couldn't' is fine in the negative.",
      goalId: "ability",
    },
    {
      sentence: "After this course, you'll be able to write a professional email.",
      question: "Why isn't it 'you'll can write'?",
      options: [
        "'can' has no future form, so we use 'will be able to'",
        "'can' is only for the past",
        "Both forms are correct",
        "Because it's a request",
      ],
      correctIndex: 0,
      explanation:
        "Two modals can't go together (✗ will can). Use 'will be able to' for future ability.",
      goalId: "ability",
    },

    // --- REQUESTS ---
    {
      sentence: "Could you send me the report by Friday, please?",
      question: INTENT_QUESTION,
      options: [
        "Asking about past ability",
        "Making a polite request",
        "Guessing about the future",
        "Making a suggestion",
      ],
      correctIndex: 1,
      explanation:
        "'Could you + base verb?' is a polite way to ask someone to do something.",
      goalId: "requests",
    },
    {
      sentence: "May I use your phone?",
      question: "How formal is this request?",
      options: [
        "Very informal",
        "Formal and polite",
        "Rude",
        "It's not a request — it's a prediction",
      ],
      correctIndex: 1,
      explanation:
        "'May I…?' is the most formal way to ask for permission. 'Can I…?' is informal.",
      goalId: "requests",
    },
    {
      sentence: "A: Could I sit here? B: ___",
      question: "Which is the most natural answer?",
      options: [
        "Yes, you could.",
        "Yes, of course.",
        "Yes, you might.",
        "Yes, you could have.",
      ],
      correctIndex: 1,
      explanation:
        "In requests, 'could' is just polite, not past. Answer with 'Yes, of course' / 'Sure' / 'Yes, you can'.",
      goalId: "requests",
    },

    // --- POSSIBILITY ---
    {
      sentence: "Take a jacket. It might get cold later.",
      question: INTENT_QUESTION,
      options: [
        "Saying something is possible in the future",
        "Saying someone has an ability",
        "Making a request",
        "Talking about a past situation",
      ],
      correctIndex: 0,
      explanation:
        "'might + base verb' = it's possible, but not certain.",
      goalId: "possibility",
    },
    {
      sentence: "Don't call her now — she may be asleep.",
      question: "How sure is the speaker?",
      options: [
        "100% sure she's asleep",
        "It's possible she's asleep",
        "Sure she's not asleep",
        "She was asleep yesterday",
      ],
      correctIndex: 1,
      explanation:
        "'may be' (two words, modal + verb) = perhaps she is. Don't confuse with 'maybe' (adverb).",
      goalId: "possibility",
    },
    {
      sentence: "That can't be the right answer — it's too easy.",
      question: "What does 'can't be' mean here?",
      options: [
        "It's possible",
        "It's impossible, in the speaker's opinion",
        "It's not allowed",
        "The speaker isn't able to answer",
      ],
      correctIndex: 1,
      explanation:
        "'can't be' = I'm sure it isn't. 'might not be' would mean 'possibly not'.",
      goalId: "possibility",
    },

    // --- SUGGESTIONS ---
    {
      sentence: "If you're bored, we could play a board game.",
      question: INTENT_QUESTION,
      options: [
        "Talking about past ability",
        "Making a suggestion",
        "Asking for permission",
        "Guessing about the past",
      ],
      correctIndex: 1,
      explanation:
        "'We could + base verb' offers an idea — it's a suggestion, not past ability.",
      goalId: "suggestions",
    },
    {
      sentence: "You might want to bring some cash; they don't accept cards.",
      question: "What is the speaker doing?",
      options: [
        "Giving a strong order",
        "Making a polite suggestion",
        "Talking about the past",
        "Asking a question",
      ],
      correctIndex: 1,
      explanation:
        "'You might want to…' is a soft, polite way to give advice.",
      goalId: "suggestions",
    },

    // --- PAST POSSIBILITY ---
    {
      sentence: "Ali isn't answering. He might have gone to bed early.",
      question: INTENT_QUESTION,
      options: [
        "Guessing about a possible past action",
        "Talking about future plans",
        "Making a suggestion",
        "Talking about ability",
      ],
      correctIndex: 0,
      explanation:
        "'might have + past participle' = it's possible that this happened.",
      goalId: "past-possibility",
    },
    {
      sentence: "You were driving too fast! You could have had an accident.",
      question: "Did the person have an accident?",
      options: [
        "Yes, they did",
        "No — it was possible, but it didn't happen",
        "They will have one",
        "We don't know anything about it",
      ],
      correctIndex: 1,
      explanation:
        "'could have + past participle' often describes something that was possible but didn't happen.",
      goalId: "past-possibility",
    },
    {
      sentence: "I could have gone to university, but I decided to work instead.",
      question: "What does 'could have gone' express?",
      options: [
        "A real past action",
        "A past opportunity that wasn't taken",
        "A present ability",
        "A request",
      ],
      correctIndex: 1,
      explanation:
        "'could have + past participle' = it was possible, but I didn't do it.",
      goalId: "past-possibility",
    },
    {
      sentence: "She couldn't have seen me — I was hiding behind the door.",
      question: "What does 'couldn't have seen' mean?",
      options: [
        "It's possible that she saw me",
        "It's impossible that she saw me",
        "She wasn't allowed to see me",
        "She will see me later",
      ],
      correctIndex: 1,
      explanation:
        "'couldn't have + past participle' = the speaker is sure it didn't happen.",
      goalId: "past-possibility",
    },
  ],
  speaking: [
    {
      text: "I can't swim very well.",
      translation: "No sé nadar muy bien.",
      phoneticFocus: "Stress 'can't' /kɑːnt/ — the weak 'can' /kən/ is never stressed",
      goalId: "ability",
    },
    {
      text: "Will you be able to come tomorrow?",
      translation: "¿Podrás venir mañana?",
      phoneticFocus: "Linking 'be able' → 'bee-yable'; weak 'to' /tə/",
      goalId: "ability",
    },
    {
      text: "Could you help me with this?",
      translation: "¿Podrías ayudarme con esto?",
      phoneticFocus: "Linking 'Could you' → /ˈkʊdʒə/ ('coo-juh')",
      goalId: "requests",
    },
    {
      text: "Can I ask you a question?",
      translation: "¿Puedo hacerte una pregunta?",
      phoneticFocus: "Weak 'Can I' /kən aɪ/; linking 'ask you a' → 'as-kyu-wa'",
      goalId: "requests",
    },
    {
      text: "May I leave early today?",
      translation: "¿Puedo salir temprano hoy?",
      phoneticFocus: "Linking 'May I' → 'may-yai'; rising intonation",
      goalId: "requests",
    },
    {
      text: "It might rain this afternoon.",
      translation: "Puede que llueva esta tarde.",
      phoneticFocus: "'might' /maɪt/ — the t links into 'rain' and is barely released",
      goalId: "possibility",
    },
    {
      text: "She may be late tonight.",
      translation: "Puede que ella llegue tarde esta noche.",
      phoneticFocus: "'may be' — two clear words with equal stress, unlike 'MAY-be'",
      goalId: "possibility",
    },
    {
      text: "We could go for a walk.",
      translation: "Podríamos ir a caminar.",
      phoneticFocus: "Weak 'could' /kəd/; linking 'for a walk' → /fər ə wɔːk/ (silent l)",
      goalId: "suggestions",
    },
    {
      text: "You might want to call first.",
      translation: "Quizás quieras llamar primero.",
      phoneticFocus: "'want to' → 'wanna' /ˈwɒnə/ in informal speech",
      goalId: "suggestions",
    },
    {
      text: "He might have missed the bus.",
      translation: "Puede que haya perdido el autobús.",
      phoneticFocus: "'might have' → /ˈmaɪtəv/ ('might-uv'); never write 'might of'",
      goalId: "past-possibility",
    },
    {
      text: "You could have told me!",
      translation: "¡Me lo podrías haber dicho!",
      phoneticFocus: "'could have' → /ˈkʊdəv/ ('could-uv'); stress on TOLD to show annoyance",
      goalId: "past-possibility",
    },
  ],
  writing: [
    {
      text: "I can play the guitar.",
      translation: "Sé tocar la guitarra.",
      goalId: "ability",
    },
    {
      text: "She couldn't speak English when she was a child.",
      translation: "Ella no sabía hablar inglés cuando era niña.",
      goalId: "ability",
    },
    {
      text: "I haven't been able to sleep well lately.",
      translation: "Últimamente no he podido dormir bien.",
      goalId: "ability",
    },
    {
      text: "Could you repeat that, please?",
      translation: "¿Podrías repetir eso, por favor?",
      goalId: "requests",
    },
    {
      text: "May I see the menu?",
      translation: "¿Puedo ver el menú?",
      goalId: "requests",
    },
    {
      text: "The shop might be closed on Sunday.",
      translation: "Puede que la tienda esté cerrada el domingo.",
      goalId: "possibility",
    },
    {
      text: "That can't be true!",
      translation: "¡Eso no puede ser verdad!",
      goalId: "possibility",
    },
    {
      text: "We could order a pizza tonight.",
      translation: "Podríamos pedir una pizza esta noche.",
      goalId: "suggestions",
    },
    {
      text: "You could always take the train.",
      translation: "Siempre podrías tomar el tren.",
      goalId: "suggestions",
    },
    {
      text: "She may have forgotten our meeting.",
      translation: "Puede que haya olvidado nuestra reunión.",
      goalId: "past-possibility",
    },
    {
      text: "You could have hurt yourself!",
      translation: "¡Te podrías haber hecho daño!",
      goalId: "past-possibility",
    },
  ],
});
