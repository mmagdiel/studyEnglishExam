import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of this sentence?";

export const modalVerbs2 = defineTopic({
  id: "modal-verbs-2",
  title: "Modal Verbs 2",
  subtitle: "Should, Should have & Had better",
  goals: [
    {
      id: "suggestions",
      title: "Making & Asking for Suggestions",
      translation: "Hacer o pedir sugerencias",
      description:
        "Use 'Should I / Should we + base verb?' to ask for or propose an idea, and 'What should we…?' to ask for suggestions. Use 'You / We should + base verb' to suggest a plan or something worth doing, often something enjoyable: 'You should try the paella here!'",
      examples: [
        "Should we order a pizza tonight?",
        "What should we do this weekend?",
        "You should visit Cusco — it's amazing!",
      ],
    },
    {
      id: "advice",
      title: "Giving & Asking for Advice",
      translation: "Dar o pedir consejos",
      description:
        "Use 'should / shouldn't + base verb' to say what's the right or best thing to do, usually about a problem. It's often softened with 'I think' or 'I don't think…should' (more natural than 'I think…shouldn't'). Ask for advice with 'Do you think I should…?' or 'What should I do?'. ✗ 'You should to rest.'",
      examples: [
        "You look tired. You should get some rest.",
        "I don't think you should lend him more money.",
        "Do you think I should tell her the truth?",
      ],
    },
    {
      id: "regrets",
      title: "Expressing Regrets",
      translation: "Expresar arrepentimiento",
      description:
        "Use 'should have + past participle' for something that was a good idea but you didn't do it, and 'shouldn't have + past participle' for something you did but regret. With 'you / he / she', it criticises someone's past action. In speech, 'should have' sounds like 'should've' (never write 'should of').",
      examples: [
        "I should have studied harder for the exam.",
        "I shouldn't have eaten so much — I feel sick.",
        "You should have told me you were coming!",
      ],
    },
    {
      id: "warnings",
      title: "Warning About Consequences",
      translation: "Advertir sobre una posible consecuencia negativa",
      description:
        "Use 'had better ('d better) + base verb' and 'had better not + base verb' for strong advice about a specific situation now, with a warning that something bad will happen if you don't follow it. It's stronger than 'should'. The negative is 'had better not' (✗ hadn't better). Even though 'had' looks past, it refers to now or the future.",
      examples: [
        "You'd better take an umbrella, or you'll get wet.",
        "We'd better hurry — the train leaves in five minutes.",
        "You'd better not be late again, or the boss will be angry.",
      ],
    },
  ],
  reading: [
    // --- SUGGESTIONS ---
    {
      sentence: "Should we go to the beach this Saturday?",
      question: INTENT_QUESTION,
      options: [
        "Making a suggestion",
        "Expressing a regret",
        "Giving a warning",
        "Criticising a past action",
      ],
      correctIndex: 0,
      explanation:
        "'Should we + base verb?' proposes an idea and asks if the others agree.",
      goalId: "suggestions",
    },
    {
      sentence: "We have a free afternoon. What should we do?",
      question: "What is the speaker asking for?",
      options: [
        "Permission",
        "Suggestions or ideas",
        "An apology",
        "A warning",
      ],
      correctIndex: 1,
      explanation: "'What should we do?' asks others for suggestions.",
      goalId: "suggestions",
    },
    {
      sentence: "You should come to our party on Friday — it'll be fun!",
      question: INTENT_QUESTION,
      options: [
        "Giving a strong warning",
        "Inviting / suggesting something enjoyable",
        "Expressing a regret",
        "Talking about an obligation",
      ],
      correctIndex: 1,
      explanation:
        "'You should…' can make an enthusiastic suggestion, not only advice about a problem.",
      goalId: "suggestions",
    },

    // --- ADVICE ---
    {
      sentence: "You have a bad cough. You should see a doctor.",
      question: INTENT_QUESTION,
      options: [
        "Giving advice about a problem",
        "Expressing a regret",
        "Making a past criticism",
        "Talking about ability",
      ],
      correctIndex: 0,
      explanation:
        "'should + base verb' recommends the best thing to do about a problem.",
      goalId: "advice",
    },
    {
      sentence: "I don't think you should drive after taking that medicine.",
      question: "Which sentence means the same and sounds equally natural?",
      options: [
        "I think you shouldn't to drive.",
        "I think you don't should drive.",
        "It isn't a good idea for you to drive.",
        "You should have driven.",
      ],
      correctIndex: 2,
      explanation:
        "'I don't think you should…' is soft negative advice. ✗ 'don't should', ✗ 'shouldn't to'.",
      goalId: "advice",
    },
    {
      sentence: "Do you think I should apply for the job in London?",
      question: "What is the speaker doing?",
      options: [
        "Giving advice",
        "Asking for advice",
        "Expressing regret",
        "Warning someone",
      ],
      correctIndex: 1,
      explanation:
        "'Do you think I should…?' asks someone else's opinion about what to do.",
      goalId: "advice",
    },
    {
      sentence: "You shouldn't spend so much time on your phone.",
      question: "What does 'shouldn't' express here?",
      options: [
        "It's impossible",
        "It's not a good idea",
        "It's not allowed by law",
        "It didn't happen",
      ],
      correctIndex: 1,
      explanation:
        "'shouldn't' = advice against something. For rules, we'd use 'mustn't' or 'can't'.",
      goalId: "advice",
    },

    // --- REGRETS ---
    {
      sentence: "I failed the test. I should have studied more.",
      question: INTENT_QUESTION,
      options: [
        "Giving advice for the future",
        "Expressing regret about the past",
        "Making a suggestion",
        "Giving a warning",
      ],
      correctIndex: 1,
      explanation:
        "'should have + past participle' = it was a good idea, but I didn't do it.",
      goalId: "regrets",
    },
    {
      sentence: "I shouldn't have said that to her. Now she's upset.",
      question: "Did the speaker say it?",
      options: [
        "No, they didn't say it",
        "Yes, and they regret it",
        "They're going to say it",
        "They should say it",
      ],
      correctIndex: 1,
      explanation:
        "'shouldn't have + past participle' = I did it, and it was a mistake.",
      goalId: "regrets",
    },
    {
      sentence: "You should have called me! I was waiting for hours.",
      question: "What is the speaker doing?",
      options: [
        "Asking for advice",
        "Criticising someone's past action",
        "Making a suggestion for tomorrow",
        "Warning about a danger",
      ],
      correctIndex: 1,
      explanation:
        "With 'you', 'should have' criticises: the listener didn't call, and that was wrong.",
      goalId: "regrets",
    },
    {
      sentence: "We should've left earlier — now we're stuck in traffic.",
      question: "What does 'should've' stand for?",
      options: ["should of", "should have", "should give", "should leave"],
      correctIndex: 1,
      explanation:
        "'should've' = should have. It sounds like 'should of', but never write it that way.",
      goalId: "regrets",
    },

    // --- WARNINGS ---
    {
      sentence: "You'd better leave now, or you'll miss the bus.",
      question: INTENT_QUESTION,
      options: [
        "A warning about a negative consequence",
        "A regret about the past",
        "A polite suggestion for fun",
        "A question asking for ideas",
      ],
      correctIndex: 0,
      explanation:
        "'had better' + 'or…' = strong advice now, with a bad consequence if ignored.",
      goalId: "warnings",
    },
    {
      sentence: "You'd better not touch that dog — it bites.",
      question: "What does 'You'd' stand for here?",
      options: ["You would", "You had", "You did", "You should"],
      correctIndex: 1,
      explanation:
        "In 'had better', 'd = had. (In 'I'd like', 'd = would.)",
      goalId: "warnings",
    },
    {
      sentence: "We'd better book a table. The restaurant is always full on Fridays.",
      question: "Why does the speaker use 'had better' instead of 'should'?",
      options: [
        "Because it's about the past",
        "Because there's a real risk if they don't (no table)",
        "Because it's a polite question",
        "Because it's a regret",
      ],
      correctIndex: 1,
      explanation:
        "'had better' is stronger and more urgent than 'should': there's a clear risk.",
      goalId: "warnings",
    },
  ],
  speaking: [
    {
      text: "Should we take a taxi?",
      translation: "¿Tomamos un taxi?",
      phoneticFocus: "Silent l in 'should' /ʃʊd/; rising intonation for the suggestion",
      goalId: "suggestions",
    },
    {
      text: "You should try the chocolate cake.",
      translation: "Deberías probar el pastel de chocolate.",
      phoneticFocus: "Weak 'should' /ʃəd/; stress on TRY and CHOC-o-late",
      goalId: "suggestions",
    },
    {
      text: "What should I wear to the wedding?",
      translation: "¿Qué debería ponerme para la boda?",
      phoneticFocus: "Linking 'should I' → /ʃʊdaɪ/; falling intonation on a wh- question",
      goalId: "suggestions",
    },
    {
      text: "You should drink more water.",
      translation: "Deberías tomar más agua.",
      phoneticFocus: "Linking 'should drink' — one d sound; stress on MORE",
      goalId: "advice",
    },
    {
      text: "I don't think you should go.",
      translation: "No creo que debas ir.",
      phoneticFocus: "'don't think' → the t of 'don't' almost disappears",
      goalId: "advice",
    },
    {
      text: "Do you think I should call him?",
      translation: "¿Crees que debería llamarlo?",
      phoneticFocus: "Weak 'Do you' → /də jə/; linking 'call him' → 'cal-lim' (weak h)",
      goalId: "advice",
    },
    {
      text: "I should have listened to you.",
      translation: "Debí haberte escuchado.",
      phoneticFocus: "'should have' → 'should've' /ˈʃʊdəv/; silent t in 'listened'",
      goalId: "regrets",
    },
    {
      text: "I shouldn't have eaten so much.",
      translation: "No debí haber comido tanto.",
      phoneticFocus: "'shouldn't have' → /ˈʃʊdntəv/; 'eaten' /ˈiːtn/",
      goalId: "regrets",
    },
    {
      text: "You'd better hurry up.",
      translation: "Más vale que te apures.",
      phoneticFocus: "'You'd' /juːd/ — the d is very short; linking 'hurry up' → 'hur-ri-yup'",
      goalId: "warnings",
    },
    {
      text: "We'd better not be late.",
      translation: "Más nos vale no llegar tarde.",
      phoneticFocus: "Stress on NOT and LATE to sound like a warning",
      goalId: "warnings",
    },
  ],
  writing: [
    {
      text: "Should we invite your parents?",
      translation: "¿Invitamos a tus padres?",
      goalId: "suggestions",
    },
    {
      text: "You should watch this series.",
      translation: "Deberías ver esta serie.",
      goalId: "suggestions",
    },
    {
      text: "You should talk to your teacher.",
      translation: "Deberías hablar con tu profesor.",
      goalId: "advice",
    },
    {
      text: "You shouldn't work so late.",
      translation: "No deberías trabajar hasta tan tarde.",
      goalId: "advice",
    },
    {
      text: "What do you think I should do?",
      translation: "¿Qué crees que debería hacer?",
      goalId: "advice",
    },
    {
      text: "I should have brought a jacket.",
      translation: "Debí haber traído una chaqueta.",
      goalId: "regrets",
    },
    {
      text: "She shouldn't have lied to her friend.",
      translation: "Ella no debió haberle mentido a su amiga.",
      goalId: "regrets",
    },
    {
      text: "You'd better save your work now.",
      translation: "Más vale que guardes tu trabajo ahora.",
      goalId: "warnings",
    },
    {
      text: "You had better not forget your passport.",
      translation: "Más vale que no olvides tu pasaporte.",
      goalId: "warnings",
    },
  ],
});
