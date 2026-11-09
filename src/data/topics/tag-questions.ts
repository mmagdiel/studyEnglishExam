import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const tagQuestions = defineTopic({
  id: "tag-questions",
  title: "Tag Questions",
  subtitle: "Confirming, Agreeing, Inviting & Asking",
  goals: [
    {
      id: "confirm",
      title: "Confirming Information",
      translation: "Confirmar información",
      description:
        "Add a short question at the end to check something you think is true. Positive sentence → negative tag; negative sentence → positive tag. Repeat the auxiliary (be, have, can, will…) or use do/does/did. Rising intonation ↗ = you're not sure and want to check. Special cases: I'm…, aren't I? / There's…, isn't there? / Nobody…, did they?",
      examples: [
        "You're Ana's brother, aren't you? ↗",
        "The meeting starts at ten, doesn't it? ↗",
        "You haven't seen my keys, have you? ↗",
      ],
    },
    {
      id: "agreement",
      title: "Asking for Agreement",
      translation: "Preguntar si alguien está de acuerdo",
      description:
        "Use a tag with falling intonation ↘ when you're sure and simply expect the other person to agree — it's more like a comment than a real question. Typical for opinions, weather and shared experiences. The listener agrees ('Yes, it is!') or disagrees politely ('Well, actually, I don't think so').",
      examples: [
        "It's a beautiful day, isn't it? ↘",
        "That film was amazing, wasn't it? ↘",
        "She sings really well, doesn't she? ↘",
      ],
    },
    {
      id: "invitations",
      title: "Making Invitations & Suggestions",
      translation: "Hacer invitaciones",
      description:
        "Tags make invitations, offers and suggestions sound friendly. Use 'Let's…, shall we?' for suggestions; 'You'll come…, won't you?' to invite warmly; 'Have a seat, won't you?' with an imperative; and a negative sentence + positive tag for a very polite invitation: 'You wouldn't like to join us, would you?'",
      examples: [
        "Let's go for a walk, shall we?",
        "You'll come to my party, won't you?",
        "You wouldn't like a cup of tea, would you?",
      ],
    },
    {
      id: "requests",
      title: "Asking Somebody to Do Something",
      translation: "Pedirle a alguien que haga algo",
      description:
        "Add 'will you? / would you? / could you? / can you?' after an imperative to ask someone to do something. 'will you?' can sound impatient; 'would you?' and 'could you?' are softer. For a very polite request, use a negative sentence + positive tag: 'You couldn't lend me five dollars, could you?'",
      examples: [
        "Close the door, will you?",
        "Pass me the salt, would you?",
        "You couldn't help me with this box, could you?",
      ],
    },
  ],
  reading: [
    // --- CONFIRM ---
    {
      sentence: "You're coming to class tomorrow, aren't you?",
      question: INTENT_QUESTION,
      options: [
        "Checking information the speaker isn't sure about",
        "Giving an order",
        "Making an invitation",
        "Expressing a regret",
      ],
      correctIndex: 0,
      explanation:
        "The speaker isn't sure about a fact (the plan for tomorrow), so the tag is a real question. Say it with rising intonation ↗.",
      goalId: "confirm",
    },
    {
      sentence: "She lives in Madrid, ___?",
      question: "Which tag is correct?",
      options: ["isn't she", "doesn't she", "don't she", "does she"],
      correctIndex: 1,
      explanation:
        "No auxiliary in a present simple sentence → use do/does. Positive sentence → negative tag: doesn't she?",
      goalId: "confirm",
    },
    {
      sentence: "I'm late again, ___?",
      question: "Which tag is correct?",
      options: ["amn't I", "aren't I", "isn't I", "am I"],
      correctIndex: 1,
      explanation: "The special tag for 'I am' is 'aren't I?'. ✗ 'amn't I'.",
      goalId: "confirm",
    },
    {
      sentence: "You didn't lock the car, did you?",
      question: "What does the speaker probably think?",
      options: [
        "The car is definitely locked",
        "The car probably isn't locked, and they want to check",
        "The car was stolen",
        "They want to invite someone",
      ],
      correctIndex: 1,
      explanation:
        "Negative sentence + positive tag: the speaker expects 'No, I didn't'.",
      goalId: "confirm",
    },

    // --- AGREEMENT ---
    {
      sentence: "It's really hot today, isn't it?",
      question: INTENT_QUESTION,
      options: [
        "Asking for information they don't know",
        "Making a comment and expecting agreement",
        "Asking someone to do something",
        "Making an invitation",
      ],
      correctIndex: 1,
      explanation:
        "Everyone can feel the heat, so it's a comment, not a real question. Say it with falling intonation ↘ to invite agreement.",
      goalId: "agreement",
    },
    {
      sentence: "That was a great concert, wasn't it? — Yes, it was fantastic!",
      question: "How does the listener respond?",
      options: [
        "They disagree",
        "They agree",
        "They ask for more information",
        "They refuse an invitation",
      ],
      correctIndex: 1,
      explanation:
        "The listener agrees with a short answer + comment: 'Yes, it was fantastic!'",
      goalId: "agreement",
    },
    {
      sentence: "The new teacher is very strict, isn't she? — Hmm, I don't think so, actually.",
      question: "What does the listener do?",
      options: [
        "Agrees completely",
        "Disagrees politely",
        "Accepts an invitation",
        "Makes a request",
      ],
      correctIndex: 1,
      explanation:
        "'I don't think so, actually' is a polite way to disagree with a tag question.",
      goalId: "agreement",
    },
    {
      sentence: "There's too much traffic in this city, ___?",
      question: "Which tag is correct?",
      options: ["isn't it", "isn't there", "doesn't there", "is there"],
      correctIndex: 1,
      explanation:
        "With 'there is / there are', the tag repeats 'there': isn't there? / aren't there?",
      goalId: "agreement",
    },

    // --- INVITATIONS ---
    {
      sentence: "Let's order Chinese food tonight, shall we?",
      question: INTENT_QUESTION,
      options: [
        "Making a suggestion",
        "Confirming information",
        "Expressing disagreement",
        "Asking about the past",
      ],
      correctIndex: 0,
      explanation:
        "'Let's…, shall we?' turns a suggestion into a friendly question.",
      goalId: "invitations",
    },
    {
      sentence: "You'll stay for dinner, won't you?",
      question: "What is the speaker doing?",
      options: [
        "Warmly inviting the listener",
        "Checking a timetable",
        "Complaining",
        "Asking about a past event",
      ],
      correctIndex: 0,
      explanation:
        "'You'll…, won't you?' is a friendly, insistent invitation.",
      goalId: "invitations",
    },
    {
      sentence: "You wouldn't like to come to the cinema with us, would you?",
      question: "Why does the speaker use a negative sentence?",
      options: [
        "They don't want the listener to come",
        "To make the invitation very polite and easy to refuse",
        "Because it's about the past",
        "Because it's a rule",
      ],
      correctIndex: 1,
      explanation:
        "Negative sentence + positive tag sounds tentative and very polite.",
      goalId: "invitations",
    },

    // --- REQUESTS ---
    {
      sentence: "Turn the TV down, will you?",
      question: INTENT_QUESTION,
      options: [
        "Asking someone to do something",
        "Making an invitation",
        "Confirming information",
        "Asking for agreement",
      ],
      correctIndex: 0,
      explanation:
        "Imperative + 'will you?' = a request (sometimes impatient).",
      goalId: "requests",
    },
    {
      sentence: "You couldn't lend me your charger, could you?",
      question: "How polite is this request?",
      options: [
        "Rude",
        "Very polite and tentative",
        "It's not a request",
        "It's an order",
      ],
      correctIndex: 1,
      explanation:
        "Negative sentence + positive tag makes the request very soft and polite.",
      goalId: "requests",
    },
    {
      sentence: "Give me a hand with these bags, ___?",
      question: "Which tag is NOT possible after this imperative?",
      options: ["will you", "would you", "could you", "don't you"],
      correctIndex: 3,
      explanation:
        "After an imperative, use will / would / can / could you? — not 'don't you?'.",
      goalId: "requests",
    },
  ],
  speaking: [
    {
      text: "You're from Peru, aren't you?",
      translation: "Eres de Perú, ¿verdad?",
      phoneticFocus: "Rising ↗ on 'aren't you' — you're checking; linking 'aren't you' → /ˈɑːntʃuː/",
      goalId: "confirm",
    },
    {
      text: "You haven't finished yet, have you?",
      translation: "Todavía no has terminado, ¿verdad?",
      phoneticFocus: "Linking 'have you' → /ˈhævjuː/; rising intonation",
      goalId: "confirm",
    },
    {
      text: "The shop closes at eight, doesn't it?",
      translation: "La tienda cierra a las ocho, ¿no?",
      phoneticFocus: "Linking 'doesn't it' → 'duz-nit'",
      goalId: "confirm",
    },
    {
      text: "It's a lovely day, isn't it?",
      translation: "Qué día tan bonito, ¿verdad?",
      phoneticFocus: "Falling ↘ on 'isn't it' — you expect agreement; 'isn't it' → 'iz-nit'",
      goalId: "agreement",
    },
    {
      text: "The food was delicious, wasn't it?",
      translation: "La comida estaba deliciosa, ¿no?",
      phoneticFocus: "Falling ↘ intonation; 'wasn't it' → 'woz-nit'",
      goalId: "agreement",
    },
    {
      text: "Let's take a break, shall we?",
      translation: "Tomemos un descanso, ¿te parece?",
      phoneticFocus: "Linking 'take a break' → 'tay-ka-break'; weak 'shall' /ʃəl/",
      goalId: "invitations",
    },
    {
      text: "You'll come to the wedding, won't you?",
      translation: "Vendrás a la boda, ¿verdad?",
      phoneticFocus: "'won't you' → /ˈwəʊntʃuː/ ('wone-chu')",
      goalId: "invitations",
    },
    {
      text: "Have some more cake, won't you?",
      translation: "Come un poco más de pastel, ¿sí?",
      phoneticFocus: "Warm, rising-falling tone to sound inviting",
      goalId: "invitations",
    },
    {
      text: "Open the window, would you?",
      translation: "Abre la ventana, ¿quieres?",
      phoneticFocus: "Linking 'would you' → /ˈwʊdʒuː/ ('wood-ju')",
      goalId: "requests",
    },
    {
      text: "You couldn't help me, could you?",
      translation: "¿No podrías ayudarme, por favor?",
      phoneticFocus: "Linking 'could you' → /ˈkʊdʒuː/; soft, rising tone to sound polite",
      goalId: "requests",
    },
  ],
  writing: [
    {
      text: "You can speak French, can't you?",
      translation: "Sabes hablar francés, ¿verdad?",
      goalId: "confirm",
    },
    {
      text: "He didn't call you, did he?",
      translation: "Él no te llamó, ¿verdad?",
      goalId: "confirm",
    },
    {
      text: "I'm right, aren't I?",
      translation: "Tengo razón, ¿no?",
      goalId: "confirm",
    },
    {
      text: "The weather is terrible, isn't it?",
      translation: "El clima está horrible, ¿verdad?",
      goalId: "agreement",
    },
    {
      text: "They played really well, didn't they?",
      translation: "Jugaron muy bien, ¿no?",
      goalId: "agreement",
    },
    {
      text: "Let's go to the park, shall we?",
      translation: "Vamos al parque, ¿te parece?",
      goalId: "invitations",
    },
    {
      text: "You'll join us for lunch, won't you?",
      translation: "Almorzarás con nosotros, ¿verdad?",
      goalId: "invitations",
    },
    {
      text: "Wait for me here, will you?",
      translation: "Espérame aquí, ¿quieres?",
      goalId: "requests",
    },
    {
      text: "You couldn't give me a lift, could you?",
      translation: "¿No podrías llevarme en el carro?",
      goalId: "requests",
    },
  ],
});
