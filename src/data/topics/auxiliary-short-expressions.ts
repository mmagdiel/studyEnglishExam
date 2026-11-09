import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of the reply?";

export const auxiliaryShortExpressions = defineTopic({
  id: "auxiliary-short-expressions",
  title: "Auxiliary Verbs in Short Expressions",
  subtitle: "Reply Questions, So do I & Neither do I",
  goals: [
    {
      id: "interest",
      title: "Showing Polite Interest",
      translation: "Mostrar interés cortés en una conversación",
      description:
        "Use a reply question (auxiliary + pronoun?) to show you're listening and interested. Copy the auxiliary from the speaker's sentence (am, is, are, have, can, will, did…), or use do / does / did if there isn't one. Positive sentence → positive reply question: 'I live in Rome.' — 'Do you?' Negative → negative: 'I can't swim.' — 'Can't you?'. Add a comment to keep the conversation going: 'Have you? How was it?'",
      examples: [
        "A: I've just come back from Japan. B: Have you? How was it?",
        "A: My sister works for Google. B: Does she? That's interesting.",
        "A: I didn't sleep at all last night. B: Didn't you? Are you OK?",
      ],
    },
    {
      id: "agreement",
      title: "Expressing Agreement",
      translation: "Expresar acuerdo",
      description:
        "To say the same is true for you, use 'So + auxiliary + I' after a positive sentence and 'Neither / Nor + auxiliary + I' after a negative one. The auxiliary must match the tense: 'I love jazz.' — 'So do I.' / 'I can't dance.' — 'Neither can I.' Informal alternatives: 'Me too' / 'Me neither', or 'I do too' / 'I don't either'. ✗ 'So I do' / ✗ 'Me either' (in careful English).",
      examples: [
        "A: I'm really tired. B: So am I.",
        "A: I haven't seen that film. B: Neither have I.",
        "A: I went to bed late. B: So did I.",
      ],
    },
  ],
  reading: [
    // --- INTEREST ---
    {
      sentence: "A: I'm learning to play the violin. B: Are you? That's great!",
      question: INTENT_QUESTION,
      options: [
        "Showing polite interest",
        "Saying B is also learning the violin",
        "Disagreeing with A",
        "Asking A to repeat",
      ],
      correctIndex: 0,
      explanation:
        "'Are you?' is a reply question: B isn't really asking — B is showing interest.",
      goalId: "interest",
    },
    {
      sentence: "A: My brother lives in Australia. B: ___? Since when?",
      question: "Which reply question is correct?",
      options: ["Is he", "Does he", "Do he", "Lives he"],
      correctIndex: 1,
      explanation:
        "'lives' is present simple with no auxiliary → use 'does'. He → 'Does he?'",
      goalId: "interest",
    },
    {
      sentence: "A: I can't eat spicy food. B: ___? Not even a little?",
      question: "Which reply question is correct?",
      options: ["Can you", "Can't you", "Don't you", "Do you"],
      correctIndex: 1,
      explanation:
        "Negative sentence with 'can't' → negative reply question with 'can't': 'Can't you?'",
      goalId: "interest",
    },
    {
      sentence: "A: We went to the new restaurant on Friday. B: Did you? What was it like?",
      question: "Why does B add 'What was it like?'",
      options: [
        "To end the conversation",
        "To show real interest and keep the conversation going",
        "To disagree",
        "To say B went too",
      ],
      correctIndex: 1,
      explanation:
        "A reply question + a follow-up question sounds friendly and keeps the conversation alive.",
      goalId: "interest",
    },
    {
      sentence: "A: I've never been on a plane. B: Haven't you? Really?",
      question: "What does B's reply show?",
      options: [
        "Surprise and interest",
        "That B has never flown either",
        "That B is angry",
        "A request",
      ],
      correctIndex: 0,
      explanation:
        "'never' is negative, so the reply question is negative: 'Haven't you?'. With 'Really?', it shows surprise.",
      goalId: "interest",
    },
    {
      sentence: "A: Sara will be here at eight. B: ___?",
      question: "Which reply question is correct?",
      options: ["Is she", "Does she", "Will she", "Won't she"],
      correctIndex: 2,
      explanation: "Copy the auxiliary 'will' and replace 'Sara' with 'she': 'Will she?'",
      goalId: "interest",
    },

    // --- AGREEMENT ---
    {
      sentence: "A: I love chocolate. B: So do I!",
      question: INTENT_QUESTION,
      options: [
        "Showing interest only",
        "Saying the same is true for B",
        "Disagreeing",
        "Asking a question",
      ],
      correctIndex: 1,
      explanation:
        "'So do I' = 'I love chocolate too'. It expresses agreement / the same situation.",
      goalId: "agreement",
    },
    {
      sentence: "A: I don't like horror films. B: ___",
      question: "Which reply means 'I don't like them either'?",
      options: ["So do I.", "Neither do I.", "So don't I.", "Neither don't I."],
      correctIndex: 1,
      explanation:
        "After a negative sentence, use 'Neither + positive auxiliary + I'. ✗ 'Neither don't I'.",
      goalId: "agreement",
    },
    {
      sentence: "A: I was really nervous before the exam. B: ___",
      question: "Which reply agrees correctly?",
      options: ["So did I.", "So was I.", "So am I.", "So I was."],
      correctIndex: 1,
      explanation:
        "Copy the verb 'be' in the same tense: was → 'So was I'. Keep the inverted order (So + verb + I).",
      goalId: "agreement",
    },
    {
      sentence: "A: I've finished my homework. B: So have I.",
      question: "Why does B use 'have' and not 'do'?",
      options: [
        "Because A's sentence uses the auxiliary 'have'",
        "Because 'do' is too informal",
        "Because it's a negative sentence",
        "There's no reason — both are correct",
      ],
      correctIndex: 0,
      explanation:
        "Repeat the auxiliary from the first sentence: have finished → So have I.",
      goalId: "agreement",
    },
    {
      sentence: "A: I can't stand loud music. B: Me neither.",
      question: "Which formal reply means the same as 'Me neither'?",
      options: ["So can I.", "Neither can I.", "So can't I.", "Me too."],
      correctIndex: 1,
      explanation:
        "'Me neither' (informal) = 'Neither can I'. 'Me too' is for positive sentences.",
      goalId: "agreement",
    },
    {
      sentence: "A: I like jazz. B: Oh, I don't.",
      question: "What does B express?",
      options: [
        "Agreement",
        "Disagreement — the opposite is true for B",
        "Interest",
        "A request",
      ],
      correctIndex: 1,
      explanation:
        "To disagree, use subject + opposite auxiliary: 'I don't.' Compare with 'So do I' (agreement).",
      goalId: "agreement",
    },
  ],
  speaking: [
    {
      text: "Have you? How was it?",
      translation: "¿Ah, sí? ¿Qué tal estuvo?",
      phoneticFocus: "Rising intonation on 'Have you?' to sound interested",
      goalId: "interest",
    },
    {
      text: "Does she? That's amazing!",
      translation: "¿En serio? ¡Qué increíble!",
      phoneticFocus: "Linking 'Does she' → /ˈdʌʃʃiː/; enthusiastic rising-falling tone",
      goalId: "interest",
    },
    {
      text: "Didn't you? Why not?",
      translation: "¿No? ¿Por qué no?",
      phoneticFocus: "'Didn't you' → /ˈdɪdntʃuː/",
      goalId: "interest",
    },
    {
      text: "Are you? I didn't know that.",
      translation: "¿Ah, sí? No lo sabía.",
      phoneticFocus: "Rising tone on 'Are you?'; stress on KNOW",
      goalId: "interest",
    },
    {
      text: "Can't you? Not at all?",
      translation: "¿No puedes? ¿Para nada?",
      phoneticFocus: "'Can't you' → /ˈkɑːntʃuː/ — make the t clear",
      goalId: "interest",
    },
    {
      text: "So do I.",
      translation: "Yo también.",
      phoneticFocus: "Stress falls on I: 'so do I' /səʊ də ˈaɪ/",
      goalId: "agreement",
    },
    {
      text: "Neither have I.",
      translation: "Yo tampoco.",
      phoneticFocus: "'Neither' /ˈnaɪðə/ (UK) or /ˈniːðər/ (US) — both are correct",
      goalId: "agreement",
    },
    {
      text: "So was I.",
      translation: "Yo también (lo estaba).",
      phoneticFocus: "Weak 'was' /wəz/; stress on I",
      goalId: "agreement",
    },
    {
      text: "Neither can I.",
      translation: "Yo tampoco puedo.",
      phoneticFocus: "Weak 'can' /kən/; stress on I",
      goalId: "agreement",
    },
    {
      text: "Me too, actually.",
      translation: "Yo también, la verdad.",
      phoneticFocus: "AC-tu-al-ly /ˈæktʃuəli/ — the t sounds like 'ch'",
      goalId: "agreement",
    },
  ],
  writing: [
    {
      text: "Have you? Where did you go?",
      translation: "¿Ah, sí? ¿A dónde fuiste?",
      goalId: "interest",
    },
    {
      text: "Did she? That's great news!",
      translation: "¿De verdad? ¡Qué buena noticia!",
      goalId: "interest",
    },
    {
      text: "Isn't he? I thought he was coming.",
      translation: "¿No? Pensé que venía.",
      goalId: "interest",
    },
    {
      text: "Do they? I had no idea.",
      translation: "¿En serio? No tenía idea.",
      goalId: "interest",
    },
    {
      text: "So do I.",
      translation: "Yo también.",
      goalId: "agreement",
    },
    {
      text: "Neither did I.",
      translation: "Yo tampoco.",
      goalId: "agreement",
    },
    {
      text: "So am I, actually.",
      translation: "Yo también, la verdad.",
      goalId: "agreement",
    },
    {
      text: "Neither have we.",
      translation: "Nosotros tampoco.",
      goalId: "agreement",
    },
    {
      text: "I don't either.",
      translation: "Yo tampoco.",
      goalId: "agreement",
    },
  ],
});
