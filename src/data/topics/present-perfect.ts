import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const presentPerfect = defineTopic({
  id: "present-perfect",
  title: "Present Perfect Simple",
  subtitle: "Connecting Past & Present",
  goals: [
    {
      id: "experiences",
      title: "Life Experiences",
      translation: "Hablar de experiencias sin decir cuándo",
      description:
        "Use have/has + past participle to talk about experiences in your life up to now, without saying when they happened. Use 'ever' in questions (Have you ever…?) and 'never' for 'not at any time'. If you say when, switch to the past simple: 'I've been to Japan. I went there in 2019.'",
      examples: [
        "I've been to Mexico three times.",
        "Have you ever eaten sushi?",
        "She has never seen the sea.",
      ],
    },
    {
      id: "unfinished",
      title: "Unfinished Situations",
      translation: "Acciones que empezaron en el pasado y continúan",
      description:
        "Use the present perfect with 'for' and 'since' for situations that started in the past and are still true now. 'for' + a period of time (for two years, for ages); 'since' + the starting point (since 2020, since Monday, since I was a child). ✗ 'I live here for five years' — in English the present simple doesn't work here.",
      examples: [
        "I've lived in this city for ten years.",
        "We've known each other since primary school.",
        "How long have you had your car?",
      ],
    },
    {
      id: "unspecified",
      title: "Unspecified Time Before Now",
      translation: "Acciones en un momento no especificado antes de ahora",
      description:
        "Use the present perfect for a past action when the time isn't important or isn't mentioned — especially when the result matters now (I've lost my keys = I can't open the door). With a finished time (yesterday, last week, in 2010, ago), use the past simple instead (✗ I've lost my keys yesterday).",
      examples: [
        "I've lost my wallet. Can you lend me some money?",
        "Someone has broken the window.",
        "They've bought a new house.",
      ],
    },
    {
      id: "time-words",
      title: "Ever, Never, Already, Yet, Just, Since & For",
      translation: "Usar ever, never, already, yet, just, since y for correctamente",
      description:
        "'just' = very recently (between have and the participle). 'already' = sooner than expected (between have and the participle). 'yet' = up to now, only in questions and negatives, at the end. 'ever' in questions, 'never' in affirmative sentences with a negative meaning (✗ I haven't never). 'for' + period, 'since' + starting point.",
      examples: [
        "I've just finished my homework.",
        "Have you sent the email yet? — Yes, I've already sent it.",
        "I haven't seen him since Christmas.",
      ],
    },
  ],
  reading: [
    // --- EXPERIENCES ---
    {
      sentence: "I've travelled to more than twenty countries.",
      question: INTENT_QUESTION,
      options: [
        "Talking about a life experience without saying when",
        "Describing a finished action at a specific time",
        "Describing an action in progress",
        "Describing a future plan",
      ],
      correctIndex: 0,
      explanation:
        "The present perfect focuses on the experience, not on when each trip happened.",
      goalId: "experiences",
    },
    {
      sentence: "Have you ever tried skydiving?",
      question: "What is the speaker asking?",
      options: [
        "If you're skydiving right now",
        "If you've had this experience at any time in your life",
        "When you went skydiving",
        "If you're planning to go skydiving",
      ],
      correctIndex: 1,
      explanation:
        "'Have you ever…?' asks about experiences at any time up to now.",
      goalId: "experiences",
    },
    {
      sentence: "I've been to Paris, but I've never been to Rome.",
      question: "Why does the speaker use 'been' and not 'gone'?",
      options: [
        "'been' = went and came back; 'gone' = went and is still there",
        "There's no difference",
        "'gone' is only for the past simple",
        "'been' is more formal",
      ],
      correctIndex: 0,
      explanation:
        "For experiences, use 'been to'. 'She has gone to Paris' means she's in Paris now.",
      goalId: "experiences",
    },

    // --- UNFINISHED ---
    {
      sentence: "We've lived in this house for fifteen years.",
      question: "Do they still live in the house?",
      options: [
        "Yes, the situation continues now",
        "No, they moved out fifteen years ago",
        "No, they lived there in the past",
        "They're planning to live there",
      ],
      correctIndex: 0,
      explanation:
        "Present perfect + 'for' = it started in the past and is still true. Compare: 'We lived there for fifteen years' (finished).",
      goalId: "unfinished",
    },
    {
      sentence: "She has worked at the hospital since 2018.",
      question: INTENT_QUESTION,
      options: [
        "A completed job in the past",
        "A situation that started in the past and continues now",
        "A one-time experience",
        "A future plan",
      ],
      correctIndex: 1,
      explanation:
        "'since 2018' gives the starting point of a situation that's still true.",
      goalId: "unfinished",
    },
    {
      sentence: "How long have you known your best friend?",
      question: "What is the speaker asking about?",
      options: [
        "When they met for the first time only",
        "The duration of a friendship that still continues",
        "If the friendship has finished",
        "How often they see each other",
      ],
      correctIndex: 1,
      explanation:
        "'How long have you…?' asks about the duration up to now. ✗ 'How long do you know…?'",
      goalId: "unfinished",
    },

    // --- UNSPECIFIED ---
    {
      sentence: "Oh no! I've left my phone at home.",
      question: INTENT_QUESTION,
      options: [
        "A past action whose result matters now",
        "A life experience",
        "An action in progress",
        "A daily habit",
      ],
      correctIndex: 0,
      explanation:
        "The time isn't important; the result is: the speaker doesn't have the phone now.",
      goalId: "unspecified",
    },
    {
      sentence: "Somebody has eaten all the cookies!",
      question: "Why isn't the time mentioned?",
      options: [
        "Because the action is still happening",
        "Because the result (no cookies) matters, not when it happened",
        "Because it's a habit",
        "Because it's a future action",
      ],
      correctIndex: 1,
      explanation:
        "The present perfect is used for unspecified past actions with a present result.",
      goalId: "unspecified",
    },
    {
      sentence: "I've lost my keys. I lost them on the bus yesterday.",
      question: "Why does the second sentence change to the past simple?",
      options: [
        "Because it's more polite",
        "Because it gives a specific finished time ('yesterday')",
        "Because the keys were found",
        "It's a mistake — both should be present perfect",
      ],
      correctIndex: 1,
      explanation:
        "First sentence: news, no time (present perfect). Second: details with a finished time (past simple).",
      goalId: "unspecified",
    },

    // --- TIME WORDS ---
    {
      sentence: "I've just spoken to the manager.",
      question: "What does 'just' mean here?",
      options: ["A long time ago", "Very recently", "Not yet", "Never"],
      correctIndex: 1,
      explanation:
        "'just' = a very short time ago. It goes between 'have' and the past participle.",
      goalId: "time-words",
    },
    {
      sentence: "Have you finished the report yet?",
      question: "Where does 'yet' usually go?",
      options: [
        "Between 'have' and the past participle",
        "At the end of questions and negative sentences",
        "At the beginning of affirmative sentences",
        "Only after 'since'",
      ],
      correctIndex: 1,
      explanation:
        "'yet' appears in questions and negatives, normally at the end.",
      goalId: "time-words",
    },
    {
      sentence: "You don't need to buy bread — I've already bought some.",
      question: "What does 'already' express?",
      options: [
        "The action happened earlier than expected",
        "The action hasn't happened",
        "The action happens every day",
        "The action will happen soon",
      ],
      correctIndex: 0,
      explanation:
        "'already' shows the action is done, often sooner than the listener expected.",
      goalId: "time-words",
    },
    {
      sentence: "I haven't seen her ___ last summer.",
      question: "Which word completes the sentence?",
      options: ["for", "since", "yet", "ago"],
      correctIndex: 1,
      explanation:
        "'last summer' is a starting point, so use 'since'. Use 'for' with a period (for three months).",
      goalId: "time-words",
    },
    {
      sentence: "I've never ridden a horse.",
      question: "Which sentence means the same?",
      options: [
        "I haven't never ridden a horse.",
        "I haven't ever ridden a horse.",
        "I've ever ridden a horse.",
        "I didn't ride a horse yesterday.",
      ],
      correctIndex: 1,
      explanation:
        "'never' = 'not ever'. Don't use a double negative: ✗ 'I haven't never'.",
      goalId: "time-words",
    },
  ],
  speaking: [
    {
      text: "I've been to London twice.",
      translation: "He estado en Londres dos veces.",
      phoneticFocus: "'I've been' → /aɪv bɪn/ — the v links into 'been'; weak 'to' /tə/",
      goalId: "experiences",
    },
    {
      text: "Have you ever been on TV?",
      translation: "¿Alguna vez has salido en la tele?",
      phoneticFocus: "Weak 'Have you' → /həv jə/; rising intonation at the end",
      goalId: "experiences",
    },
    {
      text: "She's never seen snow.",
      translation: "Ella nunca ha visto la nieve.",
      phoneticFocus: "'She's' = she has /ʃiːz/; stress on NEV-er",
      goalId: "experiences",
    },
    {
      text: "I've worked here for five years.",
      translation: "Trabajo aquí desde hace cinco años.",
      phoneticFocus: "'worked' /wɜːkt/ — one syllable; weak 'for' /fə/",
      goalId: "unfinished",
    },
    {
      text: "We've known each other since school.",
      translation: "Nos conocemos desde la escuela.",
      phoneticFocus: "'known' /nəʊn/ — silent k; linking 'each other' → 'ea-chother'",
      goalId: "unfinished",
    },
    {
      text: "How long have you lived here?",
      translation: "¿Cuánto tiempo llevas viviendo aquí?",
      phoneticFocus: "Weak 'have you' → /əv jə/; falling intonation on a wh- question",
      goalId: "unfinished",
    },
    {
      text: "I've lost my glasses.",
      translation: "He perdido mis lentes.",
      phoneticFocus: "'lost my' — the t is barely released: 'los-my'",
      goalId: "unspecified",
    },
    {
      text: "Someone has taken my seat.",
      translation: "Alguien ha tomado mi asiento.",
      phoneticFocus: "Weak 'has' /həz/; 'taken' /ˈteɪkən/",
      goalId: "unspecified",
    },
    {
      text: "They've bought a new car.",
      translation: "Han comprado un auto nuevo.",
      phoneticFocus: "'They've' /ðeɪv/; linking 'bought a' → 'bou-ta'",
      goalId: "unspecified",
    },
    {
      text: "I've just arrived at the station.",
      translation: "Acabo de llegar a la estación.",
      phoneticFocus: "Linking 'just arrived' → 'jus-ta-rrived'; 'arrived' /əˈraɪvd/",
      goalId: "time-words",
    },
    {
      text: "Have you finished yet?",
      translation: "¿Ya terminaste?",
      phoneticFocus: "'finished yet' → /ˈfɪnɪʃt jet/; rising intonation",
      goalId: "time-words",
    },
    {
      text: "I've already told you twice.",
      translation: "Ya te lo he dicho dos veces.",
      phoneticFocus: "al-READ-y; linking 'told you' → /təʊldʒuː/",
      goalId: "time-words",
    },
  ],
  writing: [
    {
      text: "I have never eaten Indian food.",
      translation: "Nunca he comido comida india.",
      goalId: "experiences",
    },
    {
      text: "Have you ever met a famous person?",
      translation: "¿Alguna vez has conocido a una persona famosa?",
      goalId: "experiences",
    },
    {
      text: "She has visited Peru three times.",
      translation: "Ella ha visitado Perú tres veces.",
      goalId: "experiences",
    },
    {
      text: "They have been married for twenty years.",
      translation: "Llevan veinte años casados.",
      goalId: "unfinished",
    },
    {
      text: "I have had this phone since 2021.",
      translation: "Tengo este teléfono desde 2021.",
      goalId: "unfinished",
    },
    {
      text: "How long have you studied English?",
      translation: "¿Cuánto tiempo llevas estudiando inglés?",
      goalId: "unfinished",
    },
    {
      text: "I have forgotten my password.",
      translation: "He olvidado mi contraseña.",
      goalId: "unspecified",
    },
    {
      text: "Somebody has stolen my bike!",
      translation: "¡Alguien ha robado mi bicicleta!",
      goalId: "unspecified",
    },
    {
      text: "The prices have gone up.",
      translation: "Los precios han subido.",
      goalId: "unspecified",
    },
    {
      text: "We have just had lunch.",
      translation: "Acabamos de almorzar.",
      goalId: "time-words",
    },
    {
      text: "He hasn't called me yet.",
      translation: "Todavía no me ha llamado.",
      goalId: "time-words",
    },
    {
      text: "I have already done the shopping.",
      translation: "Ya hice las compras.",
      goalId: "time-words",
    },
  ],
});
