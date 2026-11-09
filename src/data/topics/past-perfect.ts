import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

/**
 * All four goals serve one communicative purpose: going back to an earlier
 * moment when you are already telling a story in the past.
 */
export const pastPerfect = defineTopic({
  id: "past-perfect",
  title: "Past Perfect Simple & Continuous",
  subtitle: "Going Further Back in the Past",
  goals: [
    {
      id: "earlier",
      title: "An Earlier Past Action",
      translation: "Recordar un momento anterior cuando ya se habla en pasado",
      description:
        "When you're already telling a story in the past simple, use had + past participle to go back to something that happened before. It's common with when, by the time, already, before and after. Compare: 'When I arrived, he left' (I arrived, then he left) vs. 'When I arrived, he had left' (he left first).",
      examples: [
        "Ali and I agreed to meet at 6:00 p.m. to go to a bar.",
        "I was a little late, so when I arrived at his house, he had already left.",
        "By the time the police came, the thief had escaped.",
      ],
    },
    {
      id: "experience",
      title: "Experiences Up to a Past Moment",
      translation: "Experiencias hasta un momento del pasado",
      description:
        "Use had (never / ever) + past participle for experiences up to a point in the past — the 'past version' of 'I've never…'. Typical patterns: 'It was the first time I had…', 'I had never… before', 'Had you ever… before?'",
      examples: [
        "I had never seen snow before I moved to Canada.",
        "It was the first time she had flown on a plane.",
        "Had you ever met him before the party?",
      ],
    },
    {
      id: "duration",
      title: "How Long Something Had Been Going On",
      translation: "Cuánto tiempo llevaba algo ocurriendo",
      description:
        "Use had been + verb-ing (past perfect continuous) for an activity that was in progress up to a moment in the past, often with for, since or how long. It's the past version of 'I've been waiting'. State verbs use the simple form: 'I had known him for years' (✗ had been knowing).",
      examples: [
        "I had been waiting for an hour when Ali finally called.",
        "They had been living in Lima for ten years before they moved.",
        "How long had you been studying when the lights went out?",
      ],
    },
    {
      id: "cause",
      title: "Explaining a Past Situation",
      translation: "Explicar una situación pasada por algo anterior",
      description:
        "Use the past perfect to explain the reason for a past situation: something earlier caused it. Use the simple form for a completed cause (I had lost my keys) and the continuous for a long activity whose effects were visible (She was tired because she had been running).",
      examples: [
        "When I got to the bar, I realised I hadn't brought my wallet, so I had to go back home.",
        "He was angry because he had been waiting all afternoon.",
        "The streets were wet because it had been raining.",
      ],
    },
  ],
  reading: [
    // --- EARLIER ---
    {
      sentence: "When I arrived at Ali's house, he had already left.",
      question: "What happened first?",
      options: [
        "I arrived, then Ali left",
        "Ali left, then I arrived",
        "Both happened at the same time",
        "Ali was leaving when I arrived",
      ],
      correctIndex: 1,
      explanation:
        "'had already left' goes back to an earlier moment: Ali left before the speaker arrived.",
      goalId: "earlier",
    },
    {
      sentence: "When I arrived at the station, the train left.",
      question: "Did the speaker catch the train?",
      options: [
        "No — the train had gone before they arrived",
        "Probably yes — the train left just as / after they arrived",
        "The sentence doesn't talk about a train",
        "They missed it by an hour",
      ],
      correctIndex: 1,
      explanation:
        "Two past simple verbs show actions in order: arrive → then the train left. Compare: 'the train had left' (it was already gone).",
      goalId: "earlier",
    },
    {
      sentence: "By the time we got to the cinema, the film had started.",
      question: INTENT_QUESTION,
      options: [
        "Saying the film started after they arrived",
        "Going back to an action that happened before their arrival",
        "Describing a habit",
        "Describing a future plan",
      ],
      correctIndex: 1,
      explanation:
        "'By the time' + past simple, + past perfect: the film started before they got there.",
      goalId: "earlier",
    },
    {
      sentence: "She told me she had finished the project the week before.",
      question: "Why is 'had finished' used?",
      options: [
        "The project was finished before she told me",
        "The project is still in progress",
        "She will finish the project",
        "It's a habit",
      ],
      correctIndex: 0,
      explanation:
        "In reported stories, the past perfect shows an action earlier than the moment of telling ('told').",
      goalId: "earlier",
    },

    // --- EXPERIENCE ---
    {
      sentence: "I had never eaten sushi before I went to Japan.",
      question: INTENT_QUESTION,
      options: [
        "Talking about experiences up to a past moment",
        "Talking about a habit in Japan",
        "Talking about an action in progress",
        "Talking about a future plan",
      ],
      correctIndex: 0,
      explanation:
        "'had never + past participle' describes experiences up to a point in the past (the trip).",
      goalId: "experience",
    },
    {
      sentence: "It was the first time he had driven a car on the left.",
      question: "Which pattern is used after 'It was the first time'?",
      options: [
        "past simple",
        "present perfect",
        "past perfect",
        "past continuous",
      ],
      correctIndex: 2,
      explanation:
        "After 'It was the first time', use the past perfect. (After 'It's the first time', use the present perfect.)",
      goalId: "experience",
    },
    {
      sentence: "Had you ever travelled alone before that trip?",
      question: "What is the speaker asking about?",
      options: [
        "Experiences at any time before a past trip",
        "Plans for a future trip",
        "Something happening right now",
        "A habit during the trip",
      ],
      correctIndex: 0,
      explanation:
        "'Had you ever…before…?' asks about experiences up to a past moment.",
      goalId: "experience",
    },

    // --- DURATION ---
    {
      sentence: "I had been waiting for an hour when Ali finally called.",
      question: INTENT_QUESTION,
      options: [
        "Saying how long an activity had been going on before a past moment",
        "Saying the waiting started after the call",
        "Describing a daily habit",
        "Describing a completed quantity",
      ],
      correctIndex: 0,
      explanation:
        "'had been + verb-ing + for' = duration up to a past moment (the call).",
      goalId: "duration",
    },
    {
      sentence: "They had been dating for five years before they got married.",
      question: "What does 'had been dating for five years' emphasise?",
      options: [
        "The duration of the relationship before the wedding",
        "That they dated after the wedding",
        "That they dated only once",
        "That they will date in the future",
      ],
      correctIndex: 0,
      explanation:
        "The past perfect continuous emphasises the length of an activity before another past event.",
      goalId: "duration",
    },
    {
      sentence: "I had known Ali for years when we finally became business partners.",
      question: "Why isn't it 'I had been knowing Ali'?",
      options: [
        "Because 'know' is a state verb",
        "Because the friendship ended",
        "Because 'for' can't go with the continuous",
        "Both are correct",
      ],
      correctIndex: 0,
      explanation:
        "State verbs (know, like, have = own, believe) use 'had + past participle' even to talk about duration.",
      goalId: "duration",
    },

    // --- CAUSE ---
    {
      sentence: "When I got to the bar, I realised I hadn't brought my wallet, so I had to go back home.",
      question: INTENT_QUESTION,
      options: [
        "Explaining a past problem with something that happened earlier",
        "Describing a habit",
        "Saying what was happening at the same time",
        "Talking about a future plan",
      ],
      correctIndex: 0,
      explanation:
        "Not bringing the wallet happened before the realisation, and it caused the problem.",
      goalId: "cause",
    },
    {
      sentence: "Her eyes were red because she had been crying.",
      question: "Why is the continuous ('had been crying') used?",
      options: [
        "A long activity had visible effects at a past moment",
        "The crying happened after her eyes were red",
        "It's a completed single action",
        "It's a future action",
      ],
      correctIndex: 0,
      explanation:
        "The past perfect continuous explains a past situation (red eyes) with an earlier, longer activity.",
      goalId: "cause",
    },
    {
      sentence: "I couldn't get into the house because I had lost my keys.",
      question: "What is the cause of the problem?",
      options: [
        "I couldn't get into the house",
        "I had lost my keys",
        "Both happened at the same time",
        "There's no cause in the sentence",
      ],
      correctIndex: 1,
      explanation:
        "The earlier completed action ('had lost') explains the later past situation.",
      goalId: "cause",
    },
    {
      sentence: "The ground was wet. It had been raining all night.",
      question: INTENT_QUESTION,
      options: [
        "Explaining a past situation with an earlier long activity",
        "Saying it's raining now",
        "Describing a future forecast",
        "Describing a life experience",
      ],
      correctIndex: 0,
      explanation:
        "The wet ground (past situation) is explained by a long activity before it.",
      goalId: "cause",
    },
  ],
  speaking: [
    {
      text: "When I arrived, he had already left.",
      translation: "Cuando llegué, él ya se había ido.",
      phoneticFocus: "Weak 'had' /həd/; stress on al-READ-y and LEFT",
      goalId: "earlier",
    },
    {
      text: "By the time we got there, the shop had closed.",
      translation: "Para cuando llegamos, la tienda ya había cerrado.",
      phoneticFocus: "Linking 'got there' → 'go-there' (the t is barely released); 'closed' /kləʊzd/",
      goalId: "earlier",
    },
    {
      text: "She'd finished dinner before I called.",
      translation: "Ella había terminado de cenar antes de que yo llamara.",
      phoneticFocus: "'She'd' = she had /ʃiːd/ — don't confuse it with 'she would'",
      goalId: "earlier",
    },
    {
      text: "I'd never seen the sea before.",
      translation: "Nunca había visto el mar antes.",
      phoneticFocus: "'I'd' /aɪd/ — the d is short and links to 'never'",
      goalId: "experience",
    },
    {
      text: "It was the first time I'd been abroad.",
      translation: "Era la primera vez que salía del país.",
      phoneticFocus: "Linking 'first time' → 'firs-time'; 'I'd been' /aɪd bɪn/",
      goalId: "experience",
    },
    {
      text: "I'd been waiting for an hour when he called.",
      translation: "Llevaba una hora esperando cuando llamó.",
      phoneticFocus: "'I'd been' /aɪd bɪn/; linking 'for an hour' → 'fo-ra-nour' (silent h)",
      goalId: "duration",
    },
    {
      text: "They'd been living there for years.",
      translation: "Llevaban años viviendo allí.",
      phoneticFocus: "'They'd' /ðeɪd/; stress on LIV-ing and YEARS",
      goalId: "duration",
    },
    {
      text: "I realised I hadn't brought my wallet.",
      translation: "Me di cuenta de que no había traído mi billetera.",
      phoneticFocus: "'hadn't' /ˈhædnt/; 'brought' /brɔːt/ — the gh is silent",
      goalId: "cause",
    },
    {
      text: "He was tired because he'd been running.",
      translation: "Estaba cansado porque había estado corriendo.",
      phoneticFocus: "'he'd been' /hiːd bɪn/; stress on TIRED and RUN-ning",
      goalId: "cause",
    },
  ],
  writing: [
    {
      text: "When I arrived at his house, he had already left.",
      translation: "Cuando llegué a su casa, él ya se había ido.",
      goalId: "earlier",
    },
    {
      text: "By the time the doctor arrived, the patient had died.",
      translation: "Para cuando llegó el médico, el paciente había muerto.",
      goalId: "earlier",
    },
    {
      text: "After she had finished work, she went to the gym.",
      translation: "Después de terminar el trabajo, fue al gimnasio.",
      goalId: "earlier",
    },
    {
      text: "I had never tried Thai food before.",
      translation: "Nunca había probado la comida tailandesa antes.",
      goalId: "experience",
    },
    {
      text: "It was the first time we had seen a whale.",
      translation: "Era la primera vez que veíamos una ballena.",
      goalId: "experience",
    },
    {
      text: "I had been waiting for an hour when he called.",
      translation: "Llevaba una hora esperando cuando llamó.",
      goalId: "duration",
    },
    {
      text: "How long had you been working there?",
      translation: "¿Cuánto tiempo llevabas trabajando allí?",
      goalId: "duration",
    },
    {
      text: "I realised I hadn't brought my wallet.",
      translation: "Me di cuenta de que no había traído mi billetera.",
      goalId: "cause",
    },
    {
      text: "She was exhausted because she had been working all night.",
      translation: "Estaba agotada porque había estado trabajando toda la noche.",
      goalId: "cause",
    },
  ],
});
