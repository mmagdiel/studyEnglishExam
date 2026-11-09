import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const prepositions = defineTopic({
  id: "prepositions",
  title: "Prepositions",
  subtitle: "Mastering Prepositions",
  goals: [
    {
      id: "purpose",
      title: "Purpose of an Action",
      translation: "Intención de una acción",
      description:
        "Use 'to + base verb' to say why you do something, and 'for + noun' when the purpose is a thing. Use 'for + verb-ing' to describe what an object is used for. Never say 'for + base verb' (✗ I came for see you).",
      examples: [
        "I called to invite him to play soccer with me.",
        "We stopped at a café for a coffee.",
        "This brush is for cleaning the keyboard.",
      ],
    },
    {
      id: "location",
      title: "Location",
      translation: "Ubicación",
      description:
        "Use 'at' for a specific point, 'in' for an enclosed space or area, and 'on' for a surface. Use 'next to', 'between', 'under', 'behind' and 'opposite' to place things in relation to others.",
      examples: [
        "I'll meet you at the bus stop.",
        "The keys are on the table next to the lamp.",
        "The pharmacy is between the bank and the school.",
      ],
    },
    {
      id: "feelings",
      title: "Feelings & Reactions",
      translation: "Sentimientos y reacciones",
      description:
        "Many adjectives of feeling take a fixed preposition: afraid of, proud of, tired of, interested in, worried about, excited about, angry with (a person), surprised at/by, disappointed with. After the preposition, use a noun or verb-ing.",
      examples: [
        "I'm worried about the exam.",
        "She's afraid of flying.",
        "We were surprised by the news.",
      ],
    },
    {
      id: "similarity",
      title: "Similarities",
      translation: "Establecer similitudes",
      description:
        "Use 'like + noun' to say something resembles something else (it isn't really that thing). Also use 'similar to' and 'the same as'.",
      examples: [
        "Your house looks like a castle!",
        "My phone is similar to yours.",
        "Her answer was the same as mine.",
      ],
    },
    {
      id: "identity",
      title: "What Something Really Is",
      translation: "Decir lo que algo realmente fue o es",
      description:
        "Use 'as + noun' to say the real role, job or function of someone or something. Compare: 'She speaks like a teacher' (she isn't one) vs. 'She works as a teacher' (she really is one).",
      examples: [
        "She works as a nurse.",
        "As your teacher, I have to be honest with you.",
        "We used an old door as a table.",
      ],
    },
  ],
  reading: [
    // --- PURPOSE ---
    {
      sentence: "I called Tom to invite him to play soccer with me.",
      question: INTENT_QUESTION,
      options: [
        "Indicating where something is",
        "Explaining the purpose of an action",
        "Comparing two people",
        "Describing a feeling",
      ],
      correctIndex: 1,
      explanation:
        "'to + base verb' (to invite) after an action explains why you did it — the reason for calling.",
      goalId: "purpose",
    },
    {
      sentence: "We stopped at a little café for a quick coffee.",
      question: "Why does the speaker use 'for a quick coffee'?",
      options: [
        "To say where the café is",
        "To say what the café really is",
        "To give the purpose of stopping",
        "To express a reaction",
      ],
      correctIndex: 2,
      explanation:
        "'for + noun' gives the purpose when what you want is a thing (a coffee), not an action.",
      goalId: "purpose",
    },
    {
      sentence: "This small brush is for cleaning the keyboard.",
      question: INTENT_QUESTION,
      options: [
        "Describing what an object is used for",
        "Saying where the brush is",
        "Comparing the brush to something else",
        "Talking about a feeling",
      ],
      correctIndex: 0,
      explanation:
        "'be + for + verb-ing' describes the function or purpose of an object.",
      goalId: "purpose",
    },

    // --- LOCATION ---
    {
      sentence: "The keys are on the table, next to the lamp.",
      question: INTENT_QUESTION,
      options: [
        "Expressing a purpose",
        "Indicating location",
        "Establishing a similarity",
        "Describing a reaction",
      ],
      correctIndex: 1,
      explanation:
        "'on' (surface) and 'next to' (beside) tell us exactly where the keys are.",
      goalId: "location",
    },
    {
      sentence: "Let's meet at the bus stop opposite the bank.",
      question: "What does 'opposite the bank' tell us?",
      options: [
        "The reason for meeting",
        "That the bus stop looks like a bank",
        "The position of the bus stop in relation to the bank",
        "How the speaker feels about the bank",
      ],
      correctIndex: 2,
      explanation:
        "'opposite' means 'on the other side, facing'. It locates the bus stop relative to the bank.",
      goalId: "location",
    },
    {
      sentence: "My cat is hiding under the bed again.",
      question: INTENT_QUESTION,
      options: [
        "Indicating location",
        "Saying what the cat really is",
        "Explaining why the cat hides",
        "Expressing a feeling about cats",
      ],
      correctIndex: 0,
      explanation: "'under' places the cat below the bed: it's a preposition of place.",
      goalId: "location",
    },

    // --- FEELINGS ---
    {
      sentence: "I'm really worried about tomorrow's exam.",
      question: INTENT_QUESTION,
      options: [
        "Indicating where the exam is",
        "Explaining the purpose of the exam",
        "Talking about a feeling",
        "Establishing a similarity",
      ],
      correctIndex: 2,
      explanation:
        "'worried about + noun' expresses an emotion and what causes it.",
      goalId: "feelings",
    },
    {
      sentence: "Everyone was surprised at how quickly she finished the race.",
      question: INTENT_QUESTION,
      options: [
        "Describing a reaction",
        "Saying where the race was",
        "Comparing two runners",
        "Saying what she really is",
      ],
      correctIndex: 0,
      explanation:
        "'surprised at/by' describes people's reaction to something unexpected.",
      goalId: "feelings",
    },
    {
      sentence: "My little brother is terrified of spiders.",
      question: "Which preposition pattern expresses the feeling here?",
      options: [
        "terrified + to + noun",
        "terrified + of + noun",
        "terrified + with + noun",
        "terrified + for + noun",
      ],
      correctIndex: 1,
      explanation:
        "Fear adjectives (afraid, scared, terrified) take 'of': terrified of spiders.",
      goalId: "feelings",
    },

    // --- SIMILARITY ---
    {
      sentence: "Your new house looks like a castle!",
      question: "What does 'like a castle' mean here?",
      options: [
        "The house really is a castle",
        "The house resembles a castle",
        "The house is next to a castle",
        "The house was built to be a castle",
      ],
      correctIndex: 1,
      explanation:
        "'look like + noun' compares: the house isn't a castle, it just resembles one.",
      goalId: "similarity",
    },
    {
      sentence: "My phone is similar to yours, but it's a bit older.",
      question: INTENT_QUESTION,
      options: [
        "Expressing a purpose",
        "Indicating location",
        "Establishing a similarity",
        "Describing a feeling",
      ],
      correctIndex: 2,
      explanation:
        "'similar to' (not 'similar of') compares two things that share features.",
      goalId: "similarity",
    },
    {
      sentence: "She sings like a professional.",
      question: "Is she a professional singer?",
      options: [
        "Yes, that's her real job",
        "Not necessarily — she just sings very well",
        "No, she's afraid of singing",
        "She sings in order to become a professional",
      ],
      correctIndex: 1,
      explanation:
        "'like' only compares. To say it's her real job you would say 'She works as a professional singer'.",
      goalId: "similarity",
    },

    // --- IDENTITY ---
    {
      sentence: "She works as a nurse at the city hospital.",
      question: "What does 'as a nurse' tell us?",
      options: [
        "She behaves similarly to a nurse",
        "She really is a nurse — that's her job",
        "She is next to a nurse",
        "She wants to become a nurse",
      ],
      correctIndex: 1,
      explanation:
        "'work as + job' states someone's real role. Compare: 'She acts like a nurse' (she isn't one).",
      goalId: "identity",
    },
    {
      sentence: "As your teacher, I have to tell you the truth about your grades.",
      question: INTENT_QUESTION,
      options: [
        "Comparing the speaker to a teacher",
        "Saying the speaker's real role",
        "Explaining where the teacher is",
        "Describing a reaction to grades",
      ],
      correctIndex: 1,
      explanation:
        "'As + role' means 'in my real position as…'. The speaker really is the teacher.",
      goalId: "identity",
    },
    {
      sentence: "At the party, we used an old wooden door as a table.",
      question: INTENT_QUESTION,
      options: [
        "Saying what the door actually served as",
        "Saying the door looked like a table",
        "Indicating where the door was",
        "Expressing a feeling about the party",
      ],
      correctIndex: 0,
      explanation:
        "'use + object + as + noun' states the real function the object had: it really worked as a table.",
      goalId: "identity",
    },
  ],
  speaking: [
    {
      text: "I called to invite him to play soccer with me.",
      translation: "Lo llamé para invitarlo a jugar fútbol conmigo.",
      phoneticFocus: "Weak 'to' /tə/: 'called to invite' → /kɔːld tə ɪnˈvaɪt/",
      goalId: "purpose",
    },
    {
      text: "We went to the market to buy some fresh fruit.",
      translation: "Fuimos al mercado a comprar fruta fresca.",
      phoneticFocus: "Both 'to's are unstressed /tə/; stress falls on MAR-ket and BUY",
      goalId: "purpose",
    },
    {
      text: "This box is for keeping old photos.",
      translation: "Esta caja es para guardar fotos viejas.",
      phoneticFocus: "Weak 'for' /fə/: 'is for keeping' → /ɪz fə ˈkiːpɪŋ/",
      goalId: "purpose",
    },
    {
      text: "The bakery is next to the bank.",
      translation: "La panadería está al lado del banco.",
      phoneticFocus: "'next to' → /nekstə/; the t of 'next' almost disappears",
      goalId: "location",
    },
    {
      text: "I'll wait for you at the entrance.",
      translation: "Te esperaré en la entrada.",
      phoneticFocus: "Linking 'wait for you' → /weɪt fə jə/; weak 'at the' /ət ðə/",
      goalId: "location",
    },
    {
      text: "Your phone is under the pillow.",
      translation: "Tu teléfono está debajo de la almohada.",
      phoneticFocus: "Linking 'phone is' → 'pho-nis'; stress on UN-der",
      goalId: "location",
    },
    {
      text: "I'm really excited about the trip.",
      translation: "Estoy muy emocionado por el viaje.",
      phoneticFocus: "Linking 'excited about' → 'ex-ci-ted-a-bout'",
      goalId: "feelings",
    },
    {
      text: "She's tired of waiting for the bus.",
      translation: "Está cansada de esperar el autobús.",
      phoneticFocus: "Weak 'of' /əv/: 'tired of' → /ˈtaɪəd əv/",
      goalId: "feelings",
    },
    {
      text: "You look just like your father.",
      translation: "Te pareces mucho a tu padre.",
      phoneticFocus: "Linking 'just like' — the t is barely released: 'jus-like'",
      goalId: "similarity",
    },
    {
      text: "This city is similar to Madrid.",
      translation: "Esta ciudad es parecida a Madrid.",
      phoneticFocus: "Stress on SIM: /ˈsɪmələ tə/; 'to' is weak",
      goalId: "similarity",
    },
    {
      text: "He works as a tour guide in Rome.",
      translation: "Trabaja como guía turístico en Roma.",
      phoneticFocus: "Linking 'works as a' → 'wor-ksa-zə'",
      goalId: "identity",
    },
    {
      text: "As a child, I lived near the sea.",
      translation: "De niño, vivía cerca del mar.",
      phoneticFocus: "Weak 'As a' → /əz ə/; pause briefly after 'child'",
      goalId: "identity",
    },
  ],
  writing: [
    {
      text: "I called to invite him to play soccer with me.",
      translation: "Lo llamé para invitarlo a jugar fútbol conmigo.",
      goalId: "purpose",
    },
    {
      text: "She went to the library to return a book.",
      translation: "Fue a la biblioteca a devolver un libro.",
      goalId: "purpose",
    },
    {
      text: "We need a bag for the groceries.",
      translation: "Necesitamos una bolsa para las compras.",
      goalId: "purpose",
    },
    {
      text: "The cat is sleeping under the table.",
      translation: "El gato está durmiendo debajo de la mesa.",
      goalId: "location",
    },
    {
      text: "There is a pharmacy between the bank and the school.",
      translation: "Hay una farmacia entre el banco y la escuela.",
      goalId: "location",
    },
    {
      text: "I am very proud of my little sister.",
      translation: "Estoy muy orgulloso de mi hermanita.",
      goalId: "feelings",
    },
    {
      text: "Are you interested in modern art?",
      translation: "¿Te interesa el arte moderno?",
      goalId: "feelings",
    },
    {
      text: "They were disappointed with the results.",
      translation: "Estaban decepcionados con los resultados.",
      goalId: "feelings",
    },
    {
      text: "Her laugh sounds like music.",
      translation: "Su risa suena como música.",
      goalId: "similarity",
    },
    {
      text: "My opinion is the same as yours.",
      translation: "Mi opinión es la misma que la tuya.",
      goalId: "similarity",
    },
    {
      text: "My mother worked as a nurse for twenty years.",
      translation: "Mi madre trabajó como enfermera durante veinte años.",
      goalId: "identity",
    },
    {
      text: "He used his jacket as a pillow.",
      translation: "Usó su chaqueta como almohada.",
      goalId: "identity",
    },
  ],
});
