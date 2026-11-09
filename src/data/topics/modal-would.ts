import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const modalWould = defineTopic({
  id: "modal-would",
  title: "Modal Verbs: 'Would'",
  subtitle: "Mastering Modal Verbs: 'Would'",
  goals: [
    {
      id: "wishes",
      title: "Wishes",
      translation: "Deseos",
      description:
        "Use 'would like' to politely express something you want, or 'wish + would' for things you want to change.",
      examples: [
        "I would like a cup of tea, please.",
        "I wish it would stop raining.",
      ],
    },
    {
      id: "offerings",
      title: "Offerings",
      translation: "Ofrecimientos",
      description: "Use 'would' to offer something to someone politely.",
      examples: [
        "Would you like some help with your bags?",
        "Would you care for another dessert?",
      ],
    },
    {
      id: "permission",
      title: "Permission",
      translation: "Permiso",
      description:
        "Use 'would' to ask for permission politely, often with 'mind'.",
      examples: [
        "Would it be okay if I left a bit early?",
        "Would you mind if I opened the window?",
      ],
    },
    {
      id: "requests",
      title: "Requests",
      translation: "Peticiones",
      description:
        "Use 'Would you + verb' or 'Would you mind + verb-ing' to politely ask someone else to do something. Unlike permission, the listener is the one who acts.",
      examples: [
        "Would you close the door, please?",
        "Would you mind turning the music down?",
      ],
    },
    {
      id: "preferences",
      title: "Preferences",
      translation: "Preferencias",
      description:
        "Use 'would rather' or 'would prefer' to say what you want more than something else.",
      examples: [
        "I would rather stay home tonight than go out.",
        "She would prefer to eat Italian food.",
      ],
    },
    {
      id: "past-habits",
      title: "Past Habits",
      translation: "Hábitos en el pasado",
      description:
        "Use 'would' to talk about things you did regularly in the past, similar to 'used to'.",
      examples: [
        "When we were kids, we would play outside until dark.",
        "My grandfather would always tell us fascinating stories.",
      ],
    },
    {
      id: "intentions",
      title: "Intentions & Promises",
      translation: "Intenciones y promesas",
      description:
        "Use 'would' as the past of 'will' to report what someone intended, promised or was willing to do.",
      examples: [
        "He promised he would help me move.",
        "I told her I would be there by six.",
      ],
    },
  ],
  reading: [
    {
      sentence: "Would you like some tea or coffee?",
      question: INTENT_QUESTION,
      options: [
        "Expressing a wish",
        "Making an offer",
        "Asking for permission",
        "Talking about a past habit",
      ],
      correctIndex: 1,
    },
    {
      sentence: "Would you mind if I borrowed your pen for a second?",
      question: INTENT_QUESTION,
      options: [
        "Asking for permission",
        "Making an offer",
        "Expressing a preference",
        "Stating a condition",
      ],
      correctIndex: 0,
    },
    {
      sentence: "I would rather go to the beach than the mountains.",
      question: INTENT_QUESTION,
      options: [
        "Making an offer",
        "Talking about the past",
        "Expressing a preference",
        "Asking for permission",
      ],
      correctIndex: 2,
    },
    {
      sentence:
        "On Sundays, my grandmother would bake the most delicious pies.",
      question: INTENT_QUESTION,
      options: [
        "Expressing a wish",
        "Talking about a past habit",
        "Making a polite request",
        "Expressing a preference",
      ],
      correctIndex: 1,
    },
  ],
  speaking: [
    { text: "I would like a cup of coffee please", goalId: "wishes" },
    { text: "Would you mind if I opened the window", goalId: "permission" },
    {
      text: "When I was young I would ride my bike every day",
      goalId: "past-habits",
    },
    { text: "I would rather stay home tonight", goalId: "preferences" },
  ],
  writing: [
    { text: "I would like a cup of tea", goalId: "wishes" },
    { text: "Would you like some help", goalId: "offerings" },
    { text: "Would you mind if I opened the window", goalId: "permission" },
    { text: "I would rather stay home tonight", goalId: "preferences" },
    { text: "When we were kids we would play outside", goalId: "past-habits" },
  ],
});
