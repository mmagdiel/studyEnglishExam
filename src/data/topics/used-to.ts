import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const usedTo = defineTopic({
  id: "used-to",
  title: "Used to, Be used to & Get used to",
  subtitle: "Past Habits & Familiarity",
  goals: [
    {
      id: "past-habits",
      title: "Past Habits & Situations",
      translation: "Describir situaciones que pasaban regularmente en el pasado",
      description:
        "Use 'used to + base verb' for habits and states that were true in the past but aren't now. Negative: didn't use to (✗ didn't used to). Question: Did you use to…? There's no present form (✗ I use to get up early) — for present habits use 'usually'.",
      examples: [
        "I used to play football every Saturday when I was a kid.",
        "She didn't use to like coffee, but now she drinks three cups a day.",
        "Did you use to live in Madrid?",
      ],
    },
    {
      id: "familiar",
      title: "Being Familiar with a Situation",
      translation: "Describir una situación con la que uno está familiarizado",
      description:
        "Use 'be used to + noun / verb-ing' to say something is normal and familiar for you — it isn't strange or difficult anymore. The 'to' is a preposition, so it's followed by -ing, not the base verb (✗ I'm used to get up early). It works in any tense: I'm used to, I wasn't used to, I'll be used to.",
      examples: [
        "I'm used to getting up early — I've done it for years.",
        "She's used to the cold weather because she's from Norway.",
        "We aren't used to driving on the left.",
      ],
    },
    {
      id: "adapting",
      title: "Becoming Familiar with a Situation",
      translation: "Describir una situación a la que uno se está acostumbrando",
      description:
        "Use 'get used to + noun / verb-ing' for the process of becoming familiar with something new. It's often in the present continuous (I'm getting used to…), with 'still' or 'can't' (I can't get used to…), or in the present perfect when the process is complete (I've got used to…).",
      examples: [
        "I'm slowly getting used to my new job.",
        "It took me months to get used to the food here.",
        "I can't get used to working at night.",
      ],
    },
  ],
  reading: [
    // --- PAST HABITS ---
    {
      sentence: "When I was a child, I used to walk to school every day.",
      question: INTENT_QUESTION,
      options: [
        "A regular habit in the past that no longer happens",
        "A situation the speaker is familiar with now",
        "A situation the speaker is getting used to",
        "A future plan",
      ],
      correctIndex: 0,
      explanation:
        "'used to + base verb' describes a repeated past action that isn't true now.",
      goalId: "past-habits",
    },
    {
      sentence: "My grandfather used to have a beard, but he shaved it off.",
      question: "Does the grandfather have a beard now?",
      options: [
        "Yes, he's always had one",
        "No — 'used to' shows it was true in the past only",
        "He's getting used to having a beard",
        "He's going to grow one",
      ],
      correctIndex: 1,
      explanation:
        "'used to' works for past states too (have, be, live, like) — and implies it's no longer true.",
      goalId: "past-habits",
    },
    {
      sentence: "Did you use to play any sports at school?",
      question: "Why is it 'use to' and not 'used to' here?",
      options: [
        "It's a spelling mistake",
        "After 'did', the verb goes in the base form",
        "Because it's about the present",
        "Because it's a 'be used to' sentence",
      ],
      correctIndex: 1,
      explanation:
        "With did / didn't, use the base form: Did you use to…? / I didn't use to…",
      goalId: "past-habits",
    },
    {
      sentence: "We didn't use to have a car, so we went everywhere by bike.",
      question: INTENT_QUESTION,
      options: [
        "A past situation that has changed",
        "A situation they're getting used to",
        "A situation they're familiar with now",
        "A sudden decision",
      ],
      correctIndex: 0,
      explanation:
        "'didn't use to' = it wasn't true in the past (but probably is now).",
      goalId: "past-habits",
    },

    // --- FAMILIAR ---
    {
      sentence: "I'm a nurse, so I'm used to working night shifts.",
      question: INTENT_QUESTION,
      options: [
        "A past habit",
        "A situation that's normal and familiar for the speaker",
        "A situation the speaker is still adapting to",
        "A future plan",
      ],
      correctIndex: 1,
      explanation:
        "'be used to + verb-ing' = it's normal for me, it's not difficult anymore.",
      goalId: "familiar",
    },
    {
      sentence: "She's from Canada, so she's used to the cold.",
      question: "What does 'she's used to the cold' mean?",
      options: [
        "She used the cold in the past",
        "The cold isn't strange or difficult for her",
        "She is starting to like the cold",
        "She hates the cold",
      ],
      correctIndex: 1,
      explanation:
        "'be used to + noun' = familiar with it. Here 'used' is pronounced /juːst/.",
      goalId: "familiar",
    },
    {
      sentence: "I wasn't used to speaking English all day, so I was exhausted at first.",
      question: "What does 'wasn't used to' tell us?",
      options: [
        "It was a past habit",
        "At that time, speaking English all day was new and unfamiliar",
        "The speaker never speaks English",
        "The speaker is used to it now and always was",
      ],
      correctIndex: 1,
      explanation:
        "'be used to' changes tense with 'be': wasn't used to = it wasn't familiar at that time.",
      goalId: "familiar",
    },
    {
      sentence: "I'm a farmer, so I'm used to ___ up before sunrise.",
      question: "Which form completes the sentence?",
      options: ["get", "getting", "got", "to get"],
      correctIndex: 1,
      explanation:
        "In 'be used to', 'to' is a preposition, so it's followed by verb-ing or a noun.",
      goalId: "familiar",
    },

    // --- ADAPTING ---
    {
      sentence: "I've just moved to London and I'm still getting used to the traffic.",
      question: INTENT_QUESTION,
      options: [
        "A past habit",
        "A situation the speaker is completely familiar with",
        "A situation the speaker is becoming familiar with",
        "A future plan",
      ],
      correctIndex: 2,
      explanation:
        "'getting used to' = in the process of adapting — not completely familiar yet.",
      goalId: "adapting",
    },
    {
      sentence: "It took me a few weeks to get used to wearing glasses.",
      question: "What does the sentence describe?",
      options: [
        "The process of adapting to something new",
        "A habit the speaker had as a child",
        "Something the speaker did only once",
        "Something the speaker will never accept",
      ],
      correctIndex: 0,
      explanation:
        "'get used to + verb-ing' = become familiar with. 'took me a few weeks' shows the process.",
      goalId: "adapting",
    },
    {
      sentence: "I don't think I'll ever get used to eating dinner at 10 p.m.",
      question: "How does the speaker feel?",
      options: [
        "Totally comfortable with it",
        "It still feels strange, and they doubt it'll become normal",
        "They used to do it as a child",
        "They're excited to do it",
      ],
      correctIndex: 1,
      explanation:
        "'never get used to' expresses doubt that something will ever feel familiar.",
      goalId: "adapting",
    },
    {
      sentence: "At first the new keyboard was hard to use, but I've got used to it now.",
      question: "Is the speaker familiar with the keyboard now?",
      options: [
        "No, not at all",
        "Yes — the process of adapting is complete",
        "They used it in the past only",
        "They're going to buy another one",
      ],
      correctIndex: 1,
      explanation:
        "'have got used to' = the adapting process is finished, so now they're used to it.",
      goalId: "adapting",
    },
  ],
  speaking: [
    {
      text: "I used to live near the beach.",
      translation: "Antes vivía cerca de la playa.",
      phoneticFocus: "'used to' → /ˈjuːstə/ — sounds like 'yoos-tuh'; the d is silent",
      goalId: "past-habits",
    },
    {
      text: "We used to play outside all day.",
      translation: "Solíamos jugar afuera todo el día.",
      phoneticFocus: "/ˈjuːstə/; linking 'play outside' → 'play-yout-side'",
      goalId: "past-habits",
    },
    {
      text: "Did you use to have long hair?",
      translation: "¿Tenías el pelo largo antes?",
      phoneticFocus: "'use to' sounds exactly like 'used to' /ˈjuːstə/; rising intonation",
      goalId: "past-habits",
    },
    {
      text: "I'm used to working from home.",
      translation: "Estoy acostumbrado a trabajar desde casa.",
      phoneticFocus: "'I'm used to' /aɪm ˈjuːstə/; stress on WORK-ing and HOME",
      goalId: "familiar",
    },
    {
      text: "She isn't used to the noise yet.",
      translation: "Ella todavía no está acostumbrada al ruido.",
      phoneticFocus: "Linking 'isn't used' → 'izn-tused'; 'noise' /nɔɪz/",
      goalId: "familiar",
    },
    {
      text: "He's used to spicy food.",
      translation: "Él está acostumbrado a la comida picante.",
      phoneticFocus: "'He's' = he is /hiːz/; stress on SPI-cy",
      goalId: "familiar",
    },
    {
      text: "I'm getting used to the cold.",
      translation: "Me estoy acostumbrando al frío.",
      phoneticFocus: "'getting' — flap t in American English /ˈɡedɪŋ/",
      goalId: "adapting",
    },
    {
      text: "You'll get used to it.",
      translation: "Te acostumbrarás.",
      phoneticFocus: "Linking 'get used to it' → 'ge-tyoos-tə-wit'",
      goalId: "adapting",
    },
    {
      text: "I can't get used to waking up so early.",
      translation: "No logro acostumbrarme a despertar tan temprano.",
      phoneticFocus: "Stress on CAN'T to show difficulty; 'waking up' → 'wa-king-up'",
      goalId: "adapting",
    },
  ],
  writing: [
    {
      text: "I used to go swimming every summer.",
      translation: "Solía ir a nadar todos los veranos.",
      goalId: "past-habits",
    },
    {
      text: "She didn't use to wear glasses.",
      translation: "Antes ella no usaba lentes.",
      goalId: "past-habits",
    },
    {
      text: "Where did you use to live?",
      translation: "¿Dónde vivías antes?",
      goalId: "past-habits",
    },
    {
      text: "I am used to cooking for myself.",
      translation: "Estoy acostumbrado a cocinar para mí mismo.",
      goalId: "familiar",
    },
    {
      text: "They aren't used to the hot weather.",
      translation: "No están acostumbrados al clima caluroso.",
      goalId: "familiar",
    },
    {
      text: "Are you used to living alone?",
      translation: "¿Estás acostumbrado a vivir solo?",
      goalId: "familiar",
    },
    {
      text: "I am getting used to my new school.",
      translation: "Me estoy acostumbrando a mi nueva escuela.",
      goalId: "adapting",
    },
    {
      text: "It took me a year to get used to the food.",
      translation: "Me tomó un año acostumbrarme a la comida.",
      goalId: "adapting",
    },
    {
      text: "Have you got used to your new phone?",
      translation: "¿Ya te acostumbraste a tu nuevo teléfono?",
      goalId: "adapting",
    },
  ],
});
