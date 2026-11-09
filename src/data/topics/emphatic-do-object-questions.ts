import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const emphaticDoObjectQuestions = defineTopic({
  id: "emphatic-do-object-questions",
  title: "Emphatic Do & Object Questions",
  subtitle: "Adding Emphasis & Asking About the Receiver",
  goals: [
    {
      id: "contrast",
      title: "False vs. True, Appearance vs. Reality",
      translation: "Contrastar lo falso y lo verdadero, la apariencia y la realidad",
      description:
        "Add do / does / did + base verb to an affirmative sentence to insist that something is true when someone thinks it isn't, or when it looks different from reality. Stress the auxiliary in speech: 'I DID call you!' With 'be' and other auxiliaries, just stress them: 'I AM listening!'",
      examples: [
        "A: You never call me. B: That's not true — I do call you!",
        "He looks unfriendly, but he does have a good heart.",
        "I know it seems easy, but it does take a lot of practice.",
      ],
    },
    {
      id: "expectation",
      title: "Expected vs. What Actually Happened",
      translation: "Comparar lo esperado con lo que realmente ocurre",
      description:
        "Use emphatic do / does / did to contrast an expectation (or a doubt) with what really happened. It's common after 'I thought…', 'but', 'although' and 'in the end': 'I didn't think she'd come, but she did come!'",
      examples: [
        "I didn't expect to like the film, but I did enjoy it.",
        "Everyone said he would fail, but he did pass in the end.",
        "We thought it would rain, and it did rain — all day.",
      ],
    },
    {
      id: "stronger",
      title: "Making an Expression Stronger",
      translation: "Hacer que una expresión suene más fuerte",
      description:
        "Use emphatic do / does / did to make a positive statement sound more intense or sincere — especially with feelings, thanks, apologies and compliments: 'I do love this song!', 'I do apologise.' It only works in affirmative sentences in the present simple or past simple.",
      examples: [
        "I do love your new haircut!",
        "We do appreciate your help.",
        "She does work hard, doesn't she?",
      ],
    },
    {
      id: "imperatives",
      title: "Emphatic Imperatives",
      translation: "Hacer imperativos enfáticos",
      description:
        "Put 'do' before an imperative to make it more insistent, warmer or more polite: 'Do sit down', 'Do come again!'. It often sounds friendly and a little formal. For negatives, use 'Don't' + base verb, stressing it: 'DON'T touch that!'",
      examples: [
        "Do sit down and make yourself at home.",
        "Do come and visit us again soon!",
        "Do be careful on the roads tonight.",
      ],
    },
    {
      id: "who-object",
      title: "Asking WHO Receives the Action",
      translation: "Preguntar QUIÉN recibe la acción de otra persona",
      description:
        "To ask about the person who receives the action (the object), use 'Who + auxiliary (do/does/did…) + subject + base verb?'. Compare: 'Who called Ana?' (subject question — who did the calling?) vs. 'Who did Ana call?' (object question — who received the call?). Formal English uses 'Whom', but 'Who' is normal in conversation.",
      examples: [
        "Who did you invite to the party?",
        "Who is she talking to?",
        "Who does your brother work for?",
      ],
    },
    {
      id: "what-object",
      title: "Asking WHAT Receives the Action",
      translation: "Preguntar QUÉ recibe la acción de otra persona",
      description:
        "To ask about the thing that receives the action, use 'What + auxiliary + subject + base verb?'. Compare: 'What broke the window?' (subject — what caused it?) vs. 'What did the ball break?' (object — what was damaged?).",
      examples: [
        "What did you buy at the market?",
        "What are you cooking? It smells great.",
        "What has the storm damaged?",
      ],
    },
    {
      id: "which-object",
      title: "Asking WHICH Thing Receives the Action",
      translation: "Preguntar CUÁL cosa recibe la acción",
      description:
        "Use 'Which (+ noun) + auxiliary + subject + base verb?' when the answer is one from a limited group of options. Compare: 'Which car hit the bike?' (subject) vs. 'Which car did the bike hit?' (object).",
      examples: [
        "Which dress did she choose in the end?",
        "Which countries have you visited?",
        "Which file did the virus delete?",
      ],
    },
  ],
  reading: [
    // --- CONTRAST ---
    {
      sentence: "A: You didn't lock the door. B: I did lock it! I remember doing it.",
      question: INTENT_QUESTION,
      options: [
        "Insisting something is true when someone thinks it's false",
        "Asking who locked the door",
        "Giving an order",
        "Making a polite invitation",
      ],
      correctIndex: 0,
      explanation:
        "'did lock' (instead of 'locked') contradicts A and insists on the truth.",
      goalId: "contrast",
    },
    {
      sentence: "The restaurant looks cheap, but it does serve excellent food.",
      question: "Why does the speaker say 'does serve' instead of 'serves'?",
      options: [
        "It's a question",
        "To contrast appearance (looks cheap) with reality (excellent food)",
        "Because it's in the past",
        "Because it's a negative sentence",
      ],
      correctIndex: 1,
      explanation:
        "Emphatic 'does' highlights the reality, which is different from the appearance.",
      goalId: "contrast",
    },

    // --- EXPECTATION ---
    {
      sentence: "I didn't think he would remember my birthday, but he did send me a card.",
      question: INTENT_QUESTION,
      options: [
        "Contrasting an expectation with what actually happened",
        "Asking what he sent",
        "Making an invitation",
        "Giving advice",
      ],
      correctIndex: 0,
      explanation:
        "The expectation (he'd forget) is contrasted with reality (he did send a card).",
      goalId: "expectation",
    },
    {
      sentence: "The exam was hard, but I did manage to finish it on time.",
      question: "What does 'did manage' emphasise?",
      options: [
        "That finishing was a surprise considering the difficulty",
        "That the speaker didn't finish",
        "That it's a question",
        "That it's an order",
      ],
      correctIndex: 0,
      explanation:
        "'did' stresses that, against the difficulty, the result really happened.",
      goalId: "expectation",
    },

    // --- STRONGER ---
    {
      sentence: "I do hope you'll come to our wedding.",
      question: INTENT_QUESTION,
      options: [
        "Making the wish sound stronger and more sincere",
        "Asking a question",
        "Contradicting someone",
        "Asking who will come",
      ],
      correctIndex: 0,
      explanation:
        "'do hope' is stronger and warmer than 'hope'.",
      goalId: "stronger",
    },
    {
      sentence: "She does sing beautifully!",
      question: "Which sentence is a correct emphatic form?",
      options: [
        "She does sings beautifully!",
        "She does sing beautifully!",
        "She do sing beautifully!",
        "She did sang beautifully!",
      ],
      correctIndex: 1,
      explanation:
        "do / does / did + BASE verb. The -s or past form goes on the auxiliary only.",
      goalId: "stronger",
    },

    // --- IMPERATIVES ---
    {
      sentence: "Do help yourself to some more cake.",
      question: INTENT_QUESTION,
      options: [
        "A friendly, emphatic invitation",
        "A question about cake",
        "A contradiction",
        "A complaint",
      ],
      correctIndex: 0,
      explanation:
        "'Do + imperative' sounds warm and insistent — the host really wants you to take more.",
      goalId: "imperatives",
    },
    {
      sentence: "Do be quiet! I'm trying to concentrate.",
      question: "What does 'Do be quiet' express?",
      options: [
        "A polite question",
        "A stronger, more insistent order",
        "A past action",
        "Agreement",
      ],
      correctIndex: 1,
      explanation:
        "'Do' + imperative can also show impatience: it makes the order stronger.",
      goalId: "imperatives",
    },

    // --- WHO (object) ---
    {
      sentence: "Who did Maria call last night?",
      question: "What is the speaker asking?",
      options: [
        "The person who called Maria",
        "The person Maria called",
        "Whether Maria called",
        "When Maria called",
      ],
      correctIndex: 1,
      explanation:
        "'Who did Maria call?' asks about the receiver (object). 'Who called Maria?' would ask about the caller.",
      goalId: "who-object",
    },
    {
      sentence: "Who are you waiting for?",
      question: INTENT_QUESTION,
      options: [
        "Asking who is waiting",
        "Asking which person receives the waiting",
        "Making an invitation",
        "Insisting on the truth",
      ],
      correctIndex: 1,
      explanation:
        "The subject is 'you'; 'who' is the object of 'wait for'. The preposition stays at the end.",
      goalId: "who-object",
    },

    // --- WHAT (object) ---
    {
      sentence: "What did the children break?",
      question: "What is the speaker asking about?",
      options: [
        "The thing that was broken",
        "The person who broke something",
        "Why they broke it",
        "When it broke",
      ],
      correctIndex: 0,
      explanation:
        "'What + did + subject + verb?' asks about the object — the thing that received the action.",
      goalId: "what-object",
    },
    {
      sentence: "What happened at the meeting? / What did they decide at the meeting?",
      question: "Which question asks about the OBJECT of an action?",
      options: [
        "What happened at the meeting?",
        "What did they decide at the meeting?",
        "Both",
        "Neither",
      ],
      correctIndex: 1,
      explanation:
        "In 'What happened?', 'what' is the subject (no 'did'). In 'What did they decide?', 'what' is the object.",
      goalId: "what-object",
    },

    // --- WHICH (object) ---
    {
      sentence: "Which flavour did you choose — chocolate or vanilla?",
      question: INTENT_QUESTION,
      options: [
        "Asking about one option from a limited group",
        "Asking an open question with unlimited answers",
        "Asking who chose the flavour",
        "Insisting on a fact",
      ],
      correctIndex: 0,
      explanation:
        "'Which' is used when the answer comes from a limited set of options.",
      goalId: "which-object",
    },
    {
      sentence: "Which window did the ball hit?",
      question: "What is the speaker asking?",
      options: [
        "Which window hit the ball",
        "Which window received the hit",
        "Who threw the ball",
        "Why the ball hit the window",
      ],
      correctIndex: 1,
      explanation:
        "'Which window did the ball hit?' — the window is the object. 'Which window broke?' would be a subject question.",
      goalId: "which-object",
    },
  ],
  speaking: [
    {
      text: "I did tell you!",
      translation: "¡Sí te lo dije!",
      phoneticFocus: "Strong stress on DID /dɪd/ — it carries the whole meaning",
      goalId: "contrast",
    },
    {
      text: "It does look difficult, but it's easy.",
      translation: "Parece difícil, pero es fácil.",
      phoneticFocus: "Stress DOES /dʌz/ (full vowel, not weak /dəz/)",
      goalId: "contrast",
    },
    {
      text: "I didn't expect it, but she did come.",
      translation: "No lo esperaba, pero sí vino.",
      phoneticFocus: "Contrast stress: DIDN'T … DID",
      goalId: "expectation",
    },
    {
      text: "I do love this song!",
      translation: "¡Me encanta esta canción!",
      phoneticFocus: "Stress DO /duː/ and LOVE; rising-falling tone for enthusiasm",
      goalId: "stronger",
    },
    {
      text: "We do appreciate your help.",
      translation: "De verdad agradecemos tu ayuda.",
      phoneticFocus: "ap-PRE-ci-ate /əˈpriːʃieɪt/; stress DO",
      goalId: "stronger",
    },
    {
      text: "Do sit down, please.",
      translation: "Siéntese, por favor.",
      phoneticFocus: "Stress DO and SIT; warm, falling tone",
      goalId: "imperatives",
    },
    {
      text: "Do come again soon!",
      translation: "¡Vuelve pronto!",
      phoneticFocus: "Linking 'come again' → 'cu-ma-gain'",
      goalId: "imperatives",
    },
    {
      text: "Who did you see at the party?",
      translation: "¿A quién viste en la fiesta?",
      phoneticFocus: "Weak 'did you' → /dɪdʒə/; stress on SEE and PAR-ty",
      goalId: "who-object",
    },
    {
      text: "Who are you talking to?",
      translation: "¿Con quién estás hablando?",
      phoneticFocus: "Weak 'are you' → /ə jə/; 'to' at the end is full /tuː/",
      goalId: "who-object",
    },
    {
      text: "What did you buy?",
      translation: "¿Qué compraste?",
      phoneticFocus: "Linking 'What did you' → /wɒt dɪdʒə/; falling intonation",
      goalId: "what-object",
    },
    {
      text: "Which one did you choose?",
      translation: "¿Cuál elegiste?",
      phoneticFocus: "Linking 'did you' → /dɪdʒə/; stress on WHICH and CHOOSE",
      goalId: "which-object",
    },
  ],
  writing: [
    {
      text: "I did send you the email!",
      translation: "¡Sí te envié el correo!",
      goalId: "contrast",
    },
    {
      text: "He does look tired, doesn't he?",
      translation: "Sí que se ve cansado, ¿verdad?",
      goalId: "contrast",
    },
    {
      text: "I didn't think I would win, but I did win!",
      translation: "No pensé que ganaría, ¡pero sí gané!",
      goalId: "expectation",
    },
    {
      text: "I do like your new car.",
      translation: "De verdad me gusta tu carro nuevo.",
      goalId: "stronger",
    },
    {
      text: "She does speak English very well.",
      translation: "Ella sí que habla inglés muy bien.",
      goalId: "stronger",
    },
    {
      text: "Do take a seat.",
      translation: "Toma asiento, por favor.",
      goalId: "imperatives",
    },
    {
      text: "Do call me when you arrive.",
      translation: "Llámame cuando llegues, de verdad.",
      goalId: "imperatives",
    },
    {
      text: "Who did you meet yesterday?",
      translation: "¿A quién conociste ayer?",
      goalId: "who-object",
    },
    {
      text: "Who is he writing to?",
      translation: "¿A quién le está escribiendo?",
      goalId: "who-object",
    },
    {
      text: "What did the dog eat?",
      translation: "¿Qué se comió el perro?",
      goalId: "what-object",
    },
    {
      text: "Which book are you reading?",
      translation: "¿Qué libro estás leyendo?",
      goalId: "which-object",
    },
  ],
});
