import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const futureForms = defineTopic({
  id: "future-forms",
  title: "Future Forms",
  subtitle: "Will, Going to, Present Continuous & Present Simple",
  goals: [
    {
      id: "instant",
      title: "Decisions Made in the Moment",
      translation: "Expresar decisiones tomadas en el momento",
      description:
        "Use will ('ll) + base verb for a decision you make at the moment of speaking — you hadn't planned it before. Typical signals: 'I know!', 'OK, then…', 'In that case…'. Compare: 'I'll have a costume party!' (deciding now) vs. 'I'm going to have a costume party' (already decided).",
      examples: [
        "I don't know how to celebrate Fred's birthday... I know! I'll have a costume party.",
        "It's cold in here. I'll close the window.",
        "OK, I'll have the chicken, please.",
      ],
    },
    {
      id: "offers",
      title: "Offering to Do Something",
      translation: "Ofrecerse a hacer algo",
      description:
        "Use 'I'll + base verb' to offer help, and 'Shall I / Shall we + base verb?' to offer in question form. ✗ 'I help you with that' (no future auxiliary) sounds wrong.",
      examples: [
        "Those bags look heavy. I'll carry one for you.",
        "Shall I bring some drinks to the party?",
        "Don't worry, I'll pick you up from the airport.",
      ],
    },
    {
      id: "requests",
      title: "Asking Somebody to Do Something",
      translation: "Pedirle a alguien que haga algo",
      description:
        "Use 'Will you + base verb?' to ask someone to do something. 'Will you…?' is direct and informal; 'Would you…?' is more polite. You can add 'please' to soften it.",
      examples: [
        "Will you help me decorate the house?",
        "Will you turn the music down, please?",
        "Will you tell Fred's friends about the party?",
      ],
    },
    {
      id: "predictions",
      title: "Predicting the Future",
      translation: "Predecir el futuro (con y sin evidencia en el presente)",
      description:
        "Use 'going to' when there is evidence now (Look at those clouds — it's going to rain). Use 'will' for predictions based on opinion, belief or experience, often with I think, I'm sure, probably, I hope (I think he'll love it).",
      examples: [
        "I think Fred's going to like it because he loves parties.",
        "Look at those clouds! It's going to rain.",
        "I'm sure you'll pass the exam.",
      ],
    },
    {
      id: "plans",
      title: "Decisions Made Beforehand",
      translation: "Expresar decisiones tomadas de antemano",
      description:
        "Use 'be going to + base verb' for plans and decisions already made. Use the present continuous for fixed arrangements with other people (time and place agreed). Use the present simple for timetables and schedules (The party starts at 8; The train leaves at 6).",
      examples: [
        "I'm going to invite all of Fred's friends.",
        "I'm meeting his best friend tomorrow to organise everything.",
        "The party starts at eight o'clock on Saturday.",
      ],
    },
    {
      id: "intentions",
      title: "Firm Intentions",
      translation: "Hablar de intenciones firmes",
      description:
        "Use 'be going to' or the present continuous (often negative) to show strong determination or a refusal: 'I'm not letting anyone in without a costume!' / 'I'm going to finish this today, no matter what.' 'won't' also expresses a strong refusal: 'I won't do it!'",
      examples: [
        "I'm not letting anyone who isn't wearing a costume into the party!",
        "I'm going to stop eating sugar — I've decided.",
        "I won't lend him money again!",
      ],
    },
  ],
  reading: [
    // --- INSTANT ---
    {
      sentence: "I don't know how to celebrate Fred's birthday... I know! I'll have a costume party.",
      question: INTENT_QUESTION,
      options: [
        "A decision made at the moment of speaking",
        "A plan made weeks ago",
        "A prediction based on evidence",
        "A timetable",
      ],
      correctIndex: 0,
      explanation:
        "'I know!' shows the idea comes right now, so 'I'll' (will) expresses an instant decision.",
      goalId: "instant",
    },
    {
      sentence: "A: The phone's ringing. B: I'll get it!",
      question: "Why does B use 'will'?",
      options: [
        "B planned to answer the phone yesterday",
        "B decides at the moment of speaking",
        "B is predicting the future",
        "It's a fixed arrangement",
      ],
      correctIndex: 1,
      explanation:
        "B reacts to the situation and decides instantly — that's 'will'.",
      goalId: "instant",
    },

    // --- OFFERS ---
    {
      sentence: "You look tired. I'll cook dinner tonight.",
      question: INTENT_QUESTION,
      options: [
        "Offering to do something",
        "Asking someone to cook",
        "Predicting the future",
        "Talking about a timetable",
      ],
      correctIndex: 0,
      explanation:
        "'I'll + base verb' is a common way to offer help.",
      goalId: "offers",
    },
    {
      sentence: "Shall I open the window for you?",
      question: "What is the speaker doing?",
      options: [
        "Giving an order",
        "Offering to help",
        "Making a prediction",
        "Talking about a plan made yesterday",
      ],
      correctIndex: 1,
      explanation:
        "'Shall I + base verb?' is a polite offer: 'Do you want me to…?'",
      goalId: "offers",
    },

    // --- REQUESTS ---
    {
      sentence: "Will you help me carry these boxes?",
      question: INTENT_QUESTION,
      options: [
        "Offering to help",
        "Asking someone to do something",
        "Predicting the future",
        "Expressing a firm intention",
      ],
      correctIndex: 1,
      explanation:
        "'Will you + base verb?' is a request — the speaker wants the listener to act.",
      goalId: "requests",
    },
    {
      sentence: "Will you please stop making that noise?",
      question: "What tone does this request have?",
      options: [
        "Very polite and formal",
        "Direct, and a bit impatient",
        "It's an offer, not a request",
        "It's a prediction",
      ],
      correctIndex: 1,
      explanation:
        "'Will you…?' is direct. With 'please stop', it sounds impatient. 'Would you mind…?' is more polite.",
      goalId: "requests",
    },

    // --- PREDICTIONS ---
    {
      sentence: "I think Fred's going to like it because he loves parties.",
      question: "What is the prediction based on?",
      options: [
        "Nothing — it's a pure guess",
        "Present evidence: Fred loves parties",
        "A timetable",
        "A fixed arrangement",
      ],
      correctIndex: 1,
      explanation:
        "'going to' is common when there's a reason in the present for the prediction (he loves parties).",
      goalId: "predictions",
    },
    {
      sentence: "Watch out! That glass is going to fall!",
      question: "Why is 'going to' used instead of 'will'?",
      options: [
        "Because we can see it's about to happen",
        "Because it's an offer",
        "Because it's a timetable",
        "Because it was decided before",
      ],
      correctIndex: 0,
      explanation:
        "There's visible evidence now (the glass is at the edge), so 'going to'.",
      goalId: "predictions",
    },
    {
      sentence: "In fifty years, people will probably live on Mars.",
      question: INTENT_QUESTION,
      options: [
        "A prediction based on opinion, without present evidence",
        "A plan made beforehand",
        "A request",
        "A fixed schedule",
      ],
      correctIndex: 0,
      explanation:
        "'will' + 'probably' is a typical prediction based on belief or opinion.",
      goalId: "predictions",
    },

    // --- PLANS ---
    {
      sentence: "I'm going to invite all of Fred's friends — I decided last night.",
      question: INTENT_QUESTION,
      options: [
        "A decision made at the moment",
        "A decision made beforehand",
        "An offer",
        "A request",
      ],
      correctIndex: 1,
      explanation:
        "'going to' expresses a plan already decided ('I decided last night').",
      goalId: "plans",
    },
    {
      sentence: "I'm meeting Fred's best friend at the café tomorrow at five.",
      question: "Why is the present continuous used for the future here?",
      options: [
        "It's happening right now",
        "It's a fixed arrangement with another person",
        "It's a prediction",
        "It's a sudden decision",
      ],
      correctIndex: 1,
      explanation:
        "Present continuous + future time = an arrangement already agreed (who, when, where).",
      goalId: "plans",
    },
    {
      sentence: "Hurry up! The film starts at 7:30.",
      question: "Why is the present simple used here?",
      options: [
        "It's a habit",
        "It's a fixed timetable or schedule",
        "It's an instant decision",
        "It's an offer",
      ],
      correctIndex: 1,
      explanation:
        "Timetables (films, trains, classes) use the present simple even for the future.",
      goalId: "plans",
    },

    // --- INTENTIONS ---
    {
      sentence: "I'm not letting anyone who isn't wearing a costume into the party!",
      question: INTENT_QUESTION,
      options: [
        "A firm intention / refusal",
        "An action happening right now",
        "A polite request",
        "A prediction with evidence",
      ],
      correctIndex: 0,
      explanation:
        "The negative present continuous here shows strong determination about the future.",
      goalId: "intentions",
    },
    {
      sentence: "I'm going to pass this exam, whatever it takes!",
      question: "What does the speaker express?",
      options: [
        "A guess about the future",
        "A strong determination",
        "An offer",
        "A timetable",
      ],
      correctIndex: 1,
      explanation:
        "'going to' + 'whatever it takes' shows a firm intention.",
      goalId: "intentions",
    },
    {
      sentence: "I won't work late again this week — I need to rest.",
      question: "What does 'won't' express here?",
      options: [
        "A refusal / firm decision not to do something",
        "An instant offer",
        "A timetable",
        "A request",
      ],
      correctIndex: 0,
      explanation:
        "'won't' (will not) can express a strong refusal or firm intention not to do something.",
      goalId: "intentions",
    },
  ],
  speaking: [
    {
      text: "I know! I'll have a costume party.",
      translation: "¡Ya sé! Haré una fiesta de disfraces.",
      phoneticFocus: "'I'll' /aɪl/ — a dark l; stress on COS-tume PAR-ty",
      goalId: "instant",
    },
    {
      text: "OK, I'll take the blue one.",
      translation: "Bueno, me llevo el azul.",
      phoneticFocus: "Linking 'take the' — the k is barely released",
      goalId: "instant",
    },
    {
      text: "Don't worry, I'll help you.",
      translation: "No te preocupes, te ayudaré.",
      phoneticFocus: "Linking 'help you' → 'hel-pyou'",
      goalId: "offers",
    },
    {
      text: "Shall I bring something to drink?",
      translation: "¿Llevo algo de tomar?",
      phoneticFocus: "Weak 'Shall' /ʃəl/; rising intonation for the offer",
      goalId: "offers",
    },
    {
      text: "Will you lend me your pen?",
      translation: "¿Me prestas tu bolígrafo?",
      phoneticFocus: "Linking 'Will you' → /wɪljə/; rising intonation",
      goalId: "requests",
    },
    {
      text: "Will you close the door, please?",
      translation: "¿Cierras la puerta, por favor?",
      phoneticFocus: "Pause before 'please'; 'close' /kləʊz/ with a /z/ sound",
      goalId: "requests",
    },
    {
      text: "Look at the sky. It's going to snow.",
      translation: "Mira el cielo. Va a nevar.",
      phoneticFocus: "'going to' → 'gonna' /ˈɡənə/ in fast, informal speech",
      goalId: "predictions",
    },
    {
      text: "I'm sure you'll love it.",
      translation: "Estoy seguro de que te encantará.",
      phoneticFocus: "'you'll' /jʊəl/ or /jəl/; stress on SURE and LOVE",
      goalId: "predictions",
    },
    {
      text: "I'm going to invite all his friends.",
      translation: "Voy a invitar a todos sus amigos.",
      phoneticFocus: "'I'm going to' → 'I'm gonna' /aɪm ˈɡənə/",
      goalId: "plans",
    },
    {
      text: "We're having dinner with Fred on Friday.",
      translation: "Vamos a cenar con Fred el viernes.",
      phoneticFocus: "'We're' /wɪə/; linking 'dinner with' → 'din-ner-with'",
      goalId: "plans",
    },
    {
      text: "I'm not letting anyone in without a costume!",
      translation: "¡No voy a dejar entrar a nadie sin disfraz!",
      phoneticFocus: "Stress NOT and AN-y-one to sound determined",
      goalId: "intentions",
    },
    {
      text: "I won't make the same mistake again.",
      translation: "No cometeré el mismo error otra vez.",
      phoneticFocus: "'won't' /wəʊnt/ — different from 'want' /wɒnt/",
      goalId: "intentions",
    },
  ],
  writing: [
    {
      text: "OK, I'll open the window.",
      translation: "Está bien, abriré la ventana.",
      goalId: "instant",
    },
    {
      text: "I'll have a coffee, please.",
      translation: "Tomaré un café, por favor.",
      goalId: "instant",
    },
    {
      text: "Shall I carry your bag?",
      translation: "¿Te llevo la bolsa?",
      goalId: "offers",
    },
    {
      text: "I'll drive you to the station.",
      translation: "Te llevaré a la estación.",
      goalId: "offers",
    },
    {
      text: "Will you help me with my homework?",
      translation: "¿Me ayudas con mi tarea?",
      goalId: "requests",
    },
    {
      text: "Will you call me when you arrive?",
      translation: "¿Me llamas cuando llegues?",
      goalId: "requests",
    },
    {
      text: "I think it will be a great party.",
      translation: "Creo que será una gran fiesta.",
      goalId: "predictions",
    },
    {
      text: "Careful, you're going to fall!",
      translation: "¡Cuidado, te vas a caer!",
      goalId: "predictions",
    },
    {
      text: "We are going to buy a new house.",
      translation: "Vamos a comprar una casa nueva.",
      goalId: "plans",
    },
    {
      text: "My flight leaves at six tomorrow morning.",
      translation: "Mi vuelo sale a las seis mañana por la mañana.",
      goalId: "plans",
    },
    {
      text: "I'm going to learn to swim this year.",
      translation: "Voy a aprender a nadar este año.",
      goalId: "intentions",
    },
    {
      text: "I'm not giving up now!",
      translation: "¡No me voy a rendir ahora!",
      goalId: "intentions",
    },
  ],
});
