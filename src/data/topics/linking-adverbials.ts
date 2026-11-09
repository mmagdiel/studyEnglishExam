import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What idea does the linking word add?";

export const linkingAdverbials = defineTopic({
  id: "linking-adverbials",
  title: "Linking Adverbials & Linking Verbs",
  subtitle: "Connecting Ideas",
  goals: [
    {
      id: "addition",
      title: "Adding Information",
      translation: "Agregar información al tema",
      description:
        "Use 'also', 'too', 'as well', 'in addition', 'moreover', 'furthermore', 'besides' and 'what's more' to add another point on the same topic. 'In addition', 'Moreover' and 'Furthermore' usually start a new sentence followed by a comma; 'too' and 'as well' go at the end; 'also' goes before the main verb (after 'be').",
      examples: [
        "The flat is big. In addition, it's very cheap.",
        "She speaks French, and she speaks German too.",
        "The hotel looked modern. Moreover, the staff seemed really friendly.",
      ],
    },
    {
      id: "parallel",
      title: "Parallel Ideas",
      translation: "Agregar una idea con significado paralelo",
      description:
        "Use 'similarly', 'likewise', 'in the same way', 'equally' and 'correspondingly' to add an idea that works the same way as the previous one — a parallel, not just one more fact.",
      examples: [
        "Children need sleep to grow. Similarly, adults need sleep to stay healthy.",
        "He was polite to me. Likewise, I tried to be kind to him.",
        "Plants need sunlight. In the same way, people need fresh air.",
      ],
    },
    {
      id: "contrast",
      title: "Contrast",
      translation: "Agregar una idea de contraste",
      description:
        "Use 'however', 'nevertheless', 'on the other hand', 'in contrast', 'even so', 'still' and 'yet' to add an idea that goes against what you said before. 'However' and 'Nevertheless' start a new sentence or follow a semicolon, with a comma after them. ✗ 'It was cold, however we went out.'",
      examples: [
        "The test was hard. However, most students passed.",
        "The city is noisy. On the other hand, it's never boring.",
        "He felt tired. Nevertheless, he kept working.",
      ],
    },
    {
      id: "result",
      title: "Results",
      translation: "Agregar una idea que expresa resultados",
      description:
        "Use 'so', 'therefore', 'as a result', 'consequently', 'as a consequence' and 'thus' to add the result of the previous idea. 'So' joins two clauses; 'Therefore', 'As a result' and 'Consequently' usually start a new sentence.",
      examples: [
        "It rained all day. As a result, the match was cancelled.",
        "I missed the bus, so I was late.",
        "He didn't study. Consequently, he failed the exam.",
      ],
    },
    {
      id: "sequence",
      title: "Sequence",
      translation: "Agregar una idea que muestra secuencia",
      description:
        "Use 'first / firstly', 'then', 'next', 'after that', 'afterwards', 'later', 'eventually' and 'finally / in the end' to put actions or ideas in order. 'Eventually' and 'In the end' mean 'after a long time or a lot of effort'.",
      examples: [
        "First, wash the vegetables. Then, cut them into small pieces.",
        "We had dinner. After that, we went to the cinema.",
        "She tried for years. Eventually, she became a doctor.",
      ],
    },
    {
      id: "simultaneous",
      title: "Before & At the Same Time",
      translation: "Agregar una idea anterior o simultánea",
      description:
        "Use 'before that', 'previously', 'earlier' and 'beforehand' for something that happened before. Use 'meanwhile', 'in the meantime', 'at the same time' and 'simultaneously' for something that happens during the same period.",
      examples: [
        "She works as a lawyer now. Previously, she was a teacher.",
        "I cooked dinner. Meanwhile, my brother set the table.",
        "He was driving and, at the same time, talking on the phone.",
      ],
    },
  ],
  reading: [
    // --- ADDITION ---
    {
      sentence: "The new phone has a great camera. In addition, the battery lasts two days.",
      question: INTENT_QUESTION,
      options: [
        "A contrast with the camera",
        "Another positive point about the phone",
        "A result of having a great camera",
        "Something that happened earlier",
      ],
      correctIndex: 1,
      explanation:
        "'In addition' adds one more piece of information on the same topic (the phone).",
      goalId: "addition",
    },
    {
      sentence: "This restaurant is expensive. What's more, the food tastes awful.",
      question: INTENT_QUESTION,
      options: [
        "A second negative point that adds to the first",
        "A contrast: the food is good",
        "The result of the high price",
        "Something happening at the same time",
      ],
      correctIndex: 0,
      explanation:
        "'What's more' adds a stronger point in the same direction. Note the linking verb: 'tastes awful' (adjective, not adverb).",
      goalId: "addition",
    },

    // --- PARALLEL ---
    {
      sentence: "Athletes need rest after training. Similarly, students need breaks after studying.",
      question: INTENT_QUESTION,
      options: [
        "A contrast between athletes and students",
        "A parallel idea that works the same way",
        "The result of training",
        "The next step in a process",
      ],
      correctIndex: 1,
      explanation:
        "'Similarly' shows the second idea is parallel to the first: same logic, different situation.",
      goalId: "parallel",
    },
    {
      sentence: "My father never gave up. Likewise, my brother stays calm when things get difficult.",
      question: "What does 'Likewise' tell us?",
      options: [
        "The brother is different from the father",
        "The brother behaves in a similar way to the father",
        "The brother's behaviour is a result of the father's",
        "The brother acted before the father",
      ],
      correctIndex: 1,
      explanation:
        "'Likewise' = in the same way. It connects two parallel attitudes.",
      goalId: "parallel",
    },

    // --- CONTRAST ---
    {
      sentence: "The hotel looked old from outside. However, the rooms were modern and clean.",
      question: INTENT_QUESTION,
      options: [
        "More information in the same direction",
        "A contrast with what was said before",
        "The result of the hotel being old",
        "What happened after that",
      ],
      correctIndex: 1,
      explanation:
        "'However' introduces an idea that goes against the first one: old outside ↔ modern inside.",
      goalId: "contrast",
    },
    {
      sentence: "She felt nervous before the interview. Nevertheless, she answered every question confidently.",
      question: "Which word could replace 'Nevertheless' without changing the meaning?",
      options: ["Therefore", "Meanwhile", "Even so", "Similarly"],
      correctIndex: 2,
      explanation:
        "'Nevertheless' and 'Even so' both mean 'in spite of that'. 'Therefore' would express a result.",
      goalId: "contrast",
    },
    {
      sentence: "Living in the city is exciting. On the other hand, it can get very stressful.",
      question: INTENT_QUESTION,
      options: [
        "A contrasting point of view",
        "An extra advantage",
        "A sequence of events",
        "Something that happened previously",
      ],
      correctIndex: 0,
      explanation:
        "'On the other hand' presents the opposite side of the topic. Note the linking verb 'get + adjective' (get stressful).",
      goalId: "contrast",
    },

    // --- RESULT ---
    {
      sentence: "There was a lot of traffic. As a result, we arrived an hour late.",
      question: INTENT_QUESTION,
      options: [
        "A contrast with the traffic",
        "A parallel situation",
        "The consequence of the traffic",
        "Something that happened at the same time",
      ],
      correctIndex: 2,
      explanation:
        "'As a result' introduces the effect of the previous situation.",
      goalId: "result",
    },
    {
      sentence: "He didn't drink any water all day. Consequently, he felt dizzy.",
      question: "What is the relationship between the two sentences?",
      options: [
        "Cause → effect",
        "Effect → cause",
        "Two parallel ideas",
        "Two contrasting ideas",
      ],
      correctIndex: 0,
      explanation:
        "The first sentence is the cause, and 'Consequently' introduces the effect. 'felt dizzy' uses the linking verb 'feel'.",
      goalId: "result",
    },
    {
      sentence: "The tickets sold out in minutes; therefore, many fans were disappointed.",
      question: INTENT_QUESTION,
      options: [
        "Adding a new topic",
        "Expressing a result",
        "Ordering steps",
        "Showing contrast",
      ],
      correctIndex: 1,
      explanation:
        "'therefore' after a semicolon introduces the logical result of the first clause.",
      goalId: "result",
    },

    // --- SEQUENCE ---
    {
      sentence: "First, mix the flour and the eggs. Then, add the milk slowly.",
      question: INTENT_QUESTION,
      options: [
        "Steps in order",
        "A contrast between ingredients",
        "Actions happening at the same time",
        "The result of mixing",
      ],
      correctIndex: 0,
      explanation: "'First' and 'Then' put the steps of the recipe in order.",
      goalId: "sequence",
    },
    {
      sentence: "He applied for dozens of jobs. Eventually, he became a manager at a bank.",
      question: "What does 'Eventually' suggest?",
      options: [
        "It happened immediately",
        "It happened after a long time or a lot of effort",
        "It happened at the same time",
        "It happened before he applied",
      ],
      correctIndex: 1,
      explanation:
        "'Eventually' = in the end, after a long process. ✗ It does NOT mean 'eventualmente' (possibly). 'became a manager' uses the linking verb 'become'.",
      goalId: "sequence",
    },

    // --- PREVIOUS / SIMULTANEOUS ---
    {
      sentence: "I was cooking dinner. Meanwhile, the kids were doing their homework.",
      question: INTENT_QUESTION,
      options: [
        "The kids did their homework after dinner",
        "Both actions happened during the same time",
        "The homework was a result of cooking",
        "A contrast between cooking and homework",
      ],
      correctIndex: 1,
      explanation:
        "'Meanwhile' = during the same period of time, while the first action was happening.",
      goalId: "simultaneous",
    },
    {
      sentence: "She is a famous writer now. Previously, she worked as a nurse.",
      question: "When did she work as a nurse?",
      options: [
        "At the same time as writing",
        "Before becoming a writer",
        "After becoming a writer",
        "As a result of writing",
      ],
      correctIndex: 1,
      explanation: "'Previously' = before that, at an earlier time.",
      goalId: "simultaneous",
    },
    {
      sentence: "The speaker was talking and, at the same time, showing slides on the screen.",
      question: INTENT_QUESTION,
      options: [
        "Two actions happening together",
        "One action after the other",
        "A contrast between two actions",
        "A parallel between two people",
      ],
      correctIndex: 0,
      explanation:
        "'at the same time' shows simultaneous actions. (It can also mean 'however', but here it's about time.)",
      goalId: "simultaneous",
    },
  ],
  speaking: [
    {
      text: "The flat is small. In addition, it's quite noisy.",
      translation: "El piso es pequeño. Además, es bastante ruidoso.",
      phoneticFocus: "Linking 'In addition' → 'i-na-DI-shən'; pause after the comma",
      goalId: "addition",
    },
    {
      text: "She sings well, and she plays the piano as well.",
      translation: "Canta bien y también toca el piano.",
      phoneticFocus: "Linking 'as well' → /əz wel/; stress on the final WELL",
      goalId: "addition",
    },
    {
      text: "Similarly, adults need time to relax.",
      translation: "De manera similar, los adultos necesitan tiempo para relajarse.",
      phoneticFocus: "SIM-i-lar-ly /ˈsɪmələli/ — stress on the first syllable",
      goalId: "parallel",
    },
    {
      text: "Likewise, I was very happy to see him.",
      translation: "Del mismo modo, yo estaba muy feliz de verlo.",
      phoneticFocus: "LIKE-wise /ˈlaɪkwaɪz/ — final /z/, not /s/",
      goalId: "parallel",
    },
    {
      text: "However, the food tasted delicious.",
      translation: "Sin embargo, la comida estaba deliciosa.",
      phoneticFocus: "how-EV-er /haʊˈevə/; 'tasted' has two syllables /ˈteɪstɪd/",
      goalId: "contrast",
    },
    {
      text: "On the other hand, it seems a bit expensive.",
      translation: "Por otro lado, parece un poco caro.",
      phoneticFocus: "Linking 'other hand' → 'u-ther-HAND'; 'a bit' → /ə bɪt/",
      goalId: "contrast",
    },
    {
      text: "As a result, the roads became dangerous.",
      translation: "Como resultado, las carreteras se volvieron peligrosas.",
      phoneticFocus: "Linking 'As a result' → 'a-zə-ri-ZULT'",
      goalId: "result",
    },
    {
      text: "Therefore, we decided to stay at home.",
      translation: "Por lo tanto, decidimos quedarnos en casa.",
      phoneticFocus: "THERE-fore /ˈðeəfɔː/ — voiced /ð/ at the start",
      goalId: "result",
    },
    {
      text: "First, turn off the computer. Then, unplug it.",
      translation: "Primero, apaga la computadora. Luego, desenchúfala.",
      phoneticFocus: "Linking 'turn off' → 'tur-noff'; 'unplug it' → 'un-plu-git'",
      goalId: "sequence",
    },
    {
      text: "After that, we went for a walk.",
      translation: "Después de eso, fuimos a dar un paseo.",
      phoneticFocus: "Linking 'After that' — the t of 'after' is soft; weak 'for a' /fər ə/",
      goalId: "sequence",
    },
    {
      text: "Meanwhile, my sister was getting ready.",
      translation: "Mientras tanto, mi hermana se estaba preparando.",
      phoneticFocus: "MEAN-while /ˈmiːnwaɪl/; 'getting' with a flap t in American English",
      goalId: "simultaneous",
    },
    {
      text: "Previously, he worked as a chef.",
      translation: "Anteriormente, trabajó como chef.",
      phoneticFocus: "PRE-vi-ous-ly /ˈpriːviəsli/ — four syllables, stress on the first",
      goalId: "simultaneous",
    },
  ],
  writing: [
    {
      text: "In addition, the hotel has a beautiful pool.",
      translation: "Además, el hotel tiene una piscina hermosa.",
      goalId: "addition",
    },
    {
      text: "Moreover, the new teacher seems very friendly.",
      translation: "Además, el nuevo profesor parece muy amable.",
      goalId: "addition",
    },
    {
      text: "Similarly, my brother loves cooking.",
      translation: "De manera similar, a mi hermano le encanta cocinar.",
      goalId: "parallel",
    },
    {
      text: "In the same way, plants need water to grow.",
      translation: "Del mismo modo, las plantas necesitan agua para crecer.",
      goalId: "parallel",
    },
    {
      text: "However, the weather stayed warm all week.",
      translation: "Sin embargo, el clima se mantuvo cálido toda la semana.",
      goalId: "contrast",
    },
    {
      text: "The exam was hard; nevertheless, she passed it.",
      translation: "El examen era difícil; sin embargo, lo aprobó.",
      goalId: "contrast",
    },
    {
      text: "As a result, the streets became very quiet.",
      translation: "Como resultado, las calles se volvieron muy tranquilas.",
      goalId: "result",
    },
    {
      text: "Consequently, the meeting was cancelled.",
      translation: "En consecuencia, la reunión fue cancelada.",
      goalId: "result",
    },
    {
      text: "Then, put the cake in the oven.",
      translation: "Luego, pon el pastel en el horno.",
      goalId: "sequence",
    },
    {
      text: "Finally, she got the job she wanted.",
      translation: "Finalmente, consiguió el trabajo que quería.",
      goalId: "sequence",
    },
    {
      text: "Meanwhile, the guests were waiting outside.",
      translation: "Mientras tanto, los invitados esperaban afuera.",
      goalId: "simultaneous",
    },
    {
      text: "Before that, he lived in Mexico.",
      translation: "Antes de eso, vivía en México.",
      goalId: "simultaneous",
    },
  ],
});
