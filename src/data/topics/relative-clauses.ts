import { defineTopic } from "./defineTopic";

const INTENT_QUESTION = "What is the communicative intent of the relative clause?";

export const relativeClauses = defineTopic({
  id: "relative-clauses",
  title: "Relative Clauses",
  subtitle: "Who, Which, That, Whose, Where, When, Why & What",
  goals: [
    {
      id: "identify",
      title: "Identifying Which Person or Thing",
      translation: "Identificar de qué PERSONA o COSA hablamos",
      description:
        "A defining relative clause tells us exactly which person or thing we mean — without it, the sentence is incomplete. Use 'who' or 'that' for people, 'which' or 'that' for things. No commas. If the relative pronoun is the object of the clause, you can leave it out: 'The book (that) I bought'.",
      examples: [
        "The woman who lives next door is a doctor.",
        "Is this the bus that goes to the airport?",
        "The film (that) we watched last night was brilliant.",
      ],
    },
    {
      id: "join",
      title: "Joining Ideas",
      translation: "UNIR ideas",
      description:
        "Use a relative pronoun to join two sentences that share a person or thing, instead of repeating it. The pronoun replaces the repeated word — don't repeat it again (✗ The man who I met him). 'I have a friend. She speaks five languages.' → 'I have a friend who speaks five languages.'",
      examples: [
        "I met a man who knows your brother.",
        "She bought a phone that takes amazing photos.",
        "We stayed in a hotel which had a rooftop pool.",
      ],
    },
    {
      id: "extra",
      title: "Giving Extra Information",
      translation: "Dar INFORMACIÓN ADICIONAL",
      description:
        "A non-defining relative clause adds extra information about someone or something already identified. It goes between commas, and you can remove it without losing the main meaning. Use 'who' or 'which' — never 'that' — and you can't omit the pronoun.",
      examples: [
        "My brother, who lives in Canada, is visiting us next week.",
        "The Amazon, which is the largest rainforest in the world, is in danger.",
        "Our teacher, who is from Ireland, speaks with a lovely accent.",
      ],
    },
    {
      id: "what",
      title: "Saying 'The Things That…'",
      translation: "Decir LAS COSAS QUE…",
      description:
        "Use 'what' to mean 'the thing(s) that'. It doesn't follow a noun — it contains the noun itself. ✗ 'The thing what I need' / ✗ 'Everything what he said'. It's common at the start of a sentence for emphasis: 'What I really need is a holiday.'",
      examples: [
        "What I need is a long holiday.",
        "I didn't understand what she said.",
        "Show me what you bought.",
      ],
    },
    {
      id: "situation",
      title: "Referring to a Whole Situation",
      translation: "Referirse a COSAS O SITUACIONES",
      description:
        "Use ', which' to refer back to the whole previous idea, not just one noun. It always comes after a comma and usually expresses a comment or reaction. ✗ ', what' / ✗ ', that' in this position.",
      examples: [
        "He passed all his exams, which surprised everyone.",
        "It rained all weekend, which was a pity.",
        "She offered to help, which was very kind of her.",
      ],
    },
    {
      id: "fact",
      title: "Saying 'The Fact That…'",
      translation: "Decir EL HECHO DE QUE…",
      description:
        "Use 'the fact that + clause' to turn a whole situation into a noun, so it can be the subject or object of a sentence. Compare: 'The fact that he lied upset me' (focus on the situation as a topic) vs. 'He lied, which upset me' (a comment added after).",
      examples: [
        "The fact that he lied to me really hurt.",
        "I'm worried about the fact that she hasn't called.",
        "Despite the fact that it was raining, we went out.",
      ],
    },
    {
      id: "possession",
      title: "Possession",
      translation: "Referirse a POSESIÓN",
      description:
        "Use 'whose + noun' to show possession — it replaces his, her, its or their. It works for people and things. Don't confuse it with 'who's' (= who is / who has).",
      examples: [
        "That's the man whose car was stolen.",
        "I have a friend whose father is a famous chef.",
        "It's a company whose products are sold worldwide.",
      ],
    },
    {
      id: "place-time-reason",
      title: "Place, Time & Reason",
      translation: "Dar información sobre LUGAR, TIEMPO y RAZÓN",
      description:
        "Use 'where' for places (= in/at which), 'when' for times (= on/in which), and 'why' after 'the reason' (= for which). Compare: 'the house where I grew up' (I grew up there) vs. 'the house which I bought' (which = object, no preposition needed).",
      examples: [
        "This is the café where we first met.",
        "I'll never forget the day when I got my first job.",
        "That's the reason why I left.",
      ],
    },
  ],
  reading: [
    // --- IDENTIFY ---
    {
      sentence: "The girl who won the competition is only twelve.",
      question: INTENT_QUESTION,
      options: [
        "Identifying which girl we mean",
        "Adding extra, non-essential information",
        "Commenting on a whole situation",
        "Showing possession",
      ],
      correctIndex: 0,
      explanation:
        "Without 'who won the competition', we wouldn't know which girl. It's a defining clause — no commas.",
      goalId: "identify",
    },
    {
      sentence: "The cake I made yesterday was delicious.",
      question: "Which relative pronoun has been left out?",
      options: ["who", "that / which", "whose", "where"],
      correctIndex: 1,
      explanation:
        "'The cake (that/which) I made' — the pronoun is the object of 'made', so it can be omitted.",
      goalId: "identify",
    },

    // --- JOIN ---
    {
      sentence: "I have a neighbour who plays the drums every night.",
      question: "Which two sentences were joined?",
      options: [
        "I have a neighbour. He plays the drums every night.",
        "I have the drums. My neighbour plays every night.",
        "A neighbour has me. I play the drums.",
        "I play the drums. My neighbour has them.",
      ],
      correctIndex: 0,
      explanation:
        "'who' replaces 'He' and joins the two ideas into one sentence.",
      goalId: "join",
    },
    {
      sentence: "This is the jacket that I bought it in Rome.",
      question: "What's wrong with this sentence?",
      options: [
        "Nothing, it's correct",
        "'it' repeats the object already replaced by 'that'",
        "'that' should be 'who'",
        "It needs commas",
      ],
      correctIndex: 1,
      explanation:
        "The relative pronoun replaces the object. ✗ 'that I bought it' → ✓ 'that I bought'.",
      goalId: "join",
    },

    // --- EXTRA ---
    {
      sentence: "My grandmother, who is 95, still goes swimming every day.",
      question: INTENT_QUESTION,
      options: [
        "Identifying which grandmother",
        "Adding extra information about someone already identified",
        "Showing possession",
        "Talking about a place",
      ],
      correctIndex: 1,
      explanation:
        "We know who 'my grandmother' is; 'who is 95' is extra information between commas.",
      goalId: "extra",
    },
    {
      sentence: "Paris, ___ is the capital of France, is famous for its museums.",
      question: "Which word completes the sentence?",
      options: ["that", "which", "what", "where"],
      correctIndex: 1,
      explanation:
        "Non-defining clauses (with commas) use 'which' for things — never 'that'.",
      goalId: "extra",
    },

    // --- WHAT ---
    {
      sentence: "What I love about this city is the food.",
      question: "What does 'What' mean here?",
      options: ["Which", "The thing that", "Who", "Why"],
      correctIndex: 1,
      explanation:
        "'What' = 'the thing that'. It introduces the topic for emphasis.",
      goalId: "what",
    },
    {
      sentence: "I can't believe ___ he told me.",
      question: "Which word completes the sentence?",
      options: ["that what", "which", "what", "the thing what"],
      correctIndex: 2,
      explanation:
        "There's no noun before the gap, so use 'what' (= the things that).",
      goalId: "what",
    },

    // --- SITUATION ---
    {
      sentence: "The train was two hours late, which made me miss my meeting.",
      question: "What does 'which' refer to?",
      options: [
        "The train",
        "The whole situation: the train being two hours late",
        "The meeting",
        "Two hours",
      ],
      correctIndex: 1,
      explanation:
        "', which' after a full clause refers to the whole previous idea.",
      goalId: "situation",
    },
    {
      sentence: "She didn't say goodbye, ___ was a bit rude.",
      question: "Which word completes the sentence?",
      options: ["what", "that", "which", "who"],
      correctIndex: 2,
      explanation:
        "To comment on a whole situation, use ', which'. ✗ ', what' / ✗ ', that'.",
      goalId: "situation",
    },

    // --- FACT ---
    {
      sentence: "The fact that she never apologised made me angry.",
      question: INTENT_QUESTION,
      options: [
        "Turning a whole situation into the subject of the sentence",
        "Identifying which person",
        "Talking about a place",
        "Showing possession",
      ],
      correctIndex: 0,
      explanation:
        "'The fact that + clause' works like a noun: here it's the subject of 'made'.",
      goalId: "fact",
    },
    {
      sentence: "Despite the fact that he was tired, he finished the race.",
      question: "Which is correct after 'Despite'?",
      options: [
        "Despite he was tired",
        "Despite the fact that he was tired",
        "Despite of he was tired",
        "Despite which he was tired",
      ],
      correctIndex: 1,
      explanation:
        "'Despite' needs a noun, so use 'despite the fact that + clause'. ✗ 'Despite he was…'",
      goalId: "fact",
    },

    // --- POSSESSION ---
    {
      sentence: "That's the student whose essay won the prize.",
      question: INTENT_QUESTION,
      options: [
        "Showing possession",
        "Talking about a place",
        "Commenting on a situation",
        "Giving a reason",
      ],
      correctIndex: 0,
      explanation:
        "'whose essay' = 'his/her essay'. 'whose' shows possession.",
      goalId: "possession",
    },
    {
      sentence: "I know a woman ___ son plays for the national team.",
      question: "Which word completes the sentence?",
      options: ["who's", "whose", "who", "which"],
      correctIndex: 1,
      explanation:
        "'whose son' = her son. 'who's' = who is / who has.",
      goalId: "possession",
    },

    // --- PLACE / TIME / REASON ---
    {
      sentence: "Do you remember the summer when we went to Greece?",
      question: INTENT_QUESTION,
      options: [
        "Giving information about time",
        "Giving information about a place",
        "Showing possession",
        "Giving extra information with commas",
      ],
      correctIndex: 0,
      explanation: "'when' after a time noun (the summer) = in which.",
      goalId: "place-time-reason",
    },
    {
      sentence: "This is the town where my parents were born.",
      question: "Why 'where' and not 'which'?",
      options: [
        "Because 'where' = 'in which' — they were born IN the town",
        "Because 'town' is a person",
        "Because it has commas",
        "Both are always correct",
      ],
      correctIndex: 0,
      explanation:
        "'where' replaces a preposition + place. Compare: 'the town which I visited' (no 'in' needed).",
      goalId: "place-time-reason",
    },
    {
      sentence: "Nobody knows the reason why she quit her job.",
      question: "What does 'why' introduce?",
      options: ["A place", "A time", "A reason", "A possession"],
      correctIndex: 2,
      explanation: "'the reason why' = the reason for which.",
      goalId: "place-time-reason",
    },
  ],
  speaking: [
    {
      text: "The man who called you is here.",
      translation: "El hombre que te llamó está aquí.",
      phoneticFocus: "No pauses — a defining clause flows as one unit: 'the-man-who-called-you'",
      goalId: "identify",
    },
    {
      text: "I've got a friend who can help you.",
      translation: "Tengo un amigo que te puede ayudar.",
      phoneticFocus: "Weak 'who' /hu/; linking 'friend who' — the d is barely heard",
      goalId: "join",
    },
    {
      text: "My sister, who's a nurse, works nights.",
      translation: "Mi hermana, que es enfermera, trabaja de noche.",
      phoneticFocus: "Short pauses at both commas; lower pitch for the extra information",
      goalId: "extra",
    },
    {
      text: "What I need is a cup of coffee.",
      translation: "Lo que necesito es una taza de café.",
      phoneticFocus: "Stress NEED and COF-fee; 'cup of' → /kʌpəv/",
      goalId: "what",
    },
    {
      text: "He forgot my birthday, which really upset me.",
      translation: "Olvidó mi cumpleaños, lo cual me molestó mucho.",
      phoneticFocus: "Pause before ', which'; stress REAL-ly and up-SET",
      goalId: "situation",
    },
    {
      text: "The fact that you came means a lot.",
      translation: "El hecho de que vinieras significa mucho.",
      phoneticFocus: "Weak 'that' /ðət/; stress FACT, CAME and LOT",
      goalId: "fact",
    },
    {
      text: "That's the boy whose dog bit me.",
      translation: "Ese es el chico cuyo perro me mordió.",
      phoneticFocus: "'whose' /huːz/ sounds exactly like 'who's'",
      goalId: "possession",
    },
    {
      text: "This is the place where we met.",
      translation: "Este es el lugar donde nos conocimos.",
      phoneticFocus: "'where' /weə/ — silent h; linking 'place where' with no pause",
      goalId: "place-time-reason",
    },
    {
      text: "That's the reason why I'm late.",
      translation: "Esa es la razón por la que llego tarde.",
      phoneticFocus: "'reason' /ˈriːzn/ — two syllables; stress REA-son",
      goalId: "place-time-reason",
    },
  ],
  writing: [
    {
      text: "The book that you lent me was amazing.",
      translation: "El libro que me prestaste era increíble.",
      goalId: "identify",
    },
    {
      text: "She's the teacher who helped me most.",
      translation: "Ella es la profesora que más me ayudó.",
      goalId: "identify",
    },
    {
      text: "I know a shop that sells cheap shoes.",
      translation: "Conozco una tienda que vende zapatos baratos.",
      goalId: "join",
    },
    {
      text: "My car, which is very old, broke down again.",
      translation: "Mi carro, que es muy viejo, se averió otra vez.",
      goalId: "extra",
    },
    {
      text: "I don't understand what you mean.",
      translation: "No entiendo lo que quieres decir.",
      goalId: "what",
    },
    {
      text: "He arrived late, which annoyed the teacher.",
      translation: "Llegó tarde, lo cual molestó al profesor.",
      goalId: "situation",
    },
    {
      text: "The fact that he lied surprised me.",
      translation: "El hecho de que mintiera me sorprendió.",
      goalId: "fact",
    },
    {
      text: "I have a friend whose mother is a pilot.",
      translation: "Tengo un amigo cuya madre es piloto.",
      goalId: "possession",
    },
    {
      text: "That's the hospital where I was born.",
      translation: "Ese es el hospital donde nací.",
      goalId: "place-time-reason",
    },
    {
      text: "Monday is the day when I'm busiest.",
      translation: "El lunes es el día en que estoy más ocupado.",
      goalId: "place-time-reason",
    },
  ],
});
