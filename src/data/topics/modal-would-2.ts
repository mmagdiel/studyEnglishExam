import { defineTopicPack } from "./defineTopic";
import { modalWould } from "./modal-would";

export const modalWould2 = defineTopicPack(modalWould, {
  reading: [
    // --- OFFERINGS ---
    {
      sentence: "Would you like another slice of homemade cheesecake before I pack it away?",
      question: "What is the primary communicative goal of the speaker?",
      options: [
        "To express a strong personal preference",
        "To make a hospitable offering to the listener",
        "To describe an annoying past habit",
        "To ask for formal permission"
      ],
      correctIndex: 1,
      explanation: "'Would you like + noun' is the standard polite structure used to offer something to someone.",
      goalId: "offerings"
    },
    {
      sentence: "Would you care for a cup of herbal tea while you wait in the lobby?",
      question: "Identify the communicative function of this question:",
      options: [
        "Asking about hypothetical wishes",
        "Making a formal offer",
        "Describing a typical behavior from the past",
        "Refusing an invitation"
      ],
      correctIndex: 1,
      explanation: "'Would you care for...' is a formal variant of 'Would you like...', used specifically for making offers.",
      goalId: "offerings"
    },
    {
      sentence: "We'd be delighted to give you a ride to the airport if your taxi doesn't arrive.",
      question: "What is the speaker communicating in this context?",
      options: [
        "Making an offering / assistance",
        "Asking for permission to drive",
        "Complaining about past habits",
        "Expressing a hypothetical regret"
      ],
      correctIndex: 0,
      explanation: "'We'd be delighted / happy to...' serves as a warm, proactive offer of assistance.",
      goalId: "offerings"
    },

    // --- PERMISSION & REQUESTS ---
    {
      sentence: "Would you mind lowering the volume just a bit while I take this conference call?",
      question: "What is the speaker asking for?",
      options: [
        "Offering to adjust the audio settings",
        "Expressing a preference between two activities",
        "Making a polite request for someone to do something",
        "Narrating a past routine"
      ],
      correctIndex: 2,
      explanation: "'Would you mind + verb-ing' is a polite request asking the other person to modify an action.",
      goalId: "permission"
    },
    {
      sentence: "Would it be all right if I borrowed your laptop charger until tomorrow morning?",
      question: "What communicative purpose does this sentence fulfill?",
      options: [
        "Asking for permission",
        "Offering tech equipment",
        "Expressing an unfulfilled wish",
        "Stating an everyday routine"
      ],
      correctIndex: 0,
      explanation: "'Would it be all right / okay if I + past simple' is a diplomatic formula to ask for permission.",
      goalId: "permission"
    },
    {
      sentence: "Would you mind if I left the office thirty minutes early this afternoon?",
      question: "Which goal does this question target?",
      options: [
        "Asking for permission",
        "Expressing a past habit",
        "Making an offer to leave early",
        "Expressing a general preference"
      ],
      correctIndex: 0,
      explanation: "Notice the difference: 'Would you mind if I + past verb' explicitly requests permission for the speaker's own action.",
      goalId: "permission"
    },

    // --- PREFERENCES ---
    {
      sentence: "I'd rather prepare dinner at home tonight than dine at that noisy bistro downtown.",
      question: "What intention is reflected in this statement?",
      options: [
        "Asking for permission to cook",
        "Offering to buy food for everyone",
        "Expressing a clear preference",
        "Describing a nostalgic past behavior"
      ],
      correctIndex: 2,
      explanation: "'Would rather + bare infinitive + than' explicitly weighs two alternatives to declare a personal preference.",
      goalId: "preferences"
    },
    {
      sentence: "Between living in a busy metropolis and a quiet coastal village, she would prefer the latter.",
      question: "The speaker is:",
      options: [
        "Expressing a preference",
        "Inviting someone to relocate",
        "Remembering a childhood habit",
        "Demanding permission to move"
      ],
      correctIndex: 0,
      explanation: "'Would prefer + noun / to infinitive' denotes preference, often contrasting two distinct choices.",
      goalId: "preferences"
    },
    {
      sentence: "I'd sooner resign from the board than compromise my moral principles.",
      question: "What does 'I'd sooner...' indicate in English?",
      options: [
        "A scheduled appointment in the future",
        "An emphatic preference or boundary",
        "A repetitive past habit",
        "A casual polite offer"
      ],
      correctIndex: 1,
      explanation: "'Would sooner' works identically to 'would rather', expressing an emphatic preference.",
      goalId: "preferences"
    },

    // --- WISHES & HYPOTHETICAL DESIRES ---
    {
      sentence: "I really wish you would stop tapping your pen on the desk during team briefings.",
      question: "What is the primary communicative goal here?",
      options: [
        "Offering a new pen to a coworker",
        "Expressing dissatisfaction and wishing for a behavior change",
        "Describing how meetings used to be in the past",
        "Asking for permission to write notes"
      ],
      correctIndex: 1,
      explanation: "'Wish + subject + would' expresses annoyance or a wish for someone else's annoying behavior to cease.",
      goalId: "wishes"
    },
    {
      sentence: "I would love to spend an entire semester studying Renaissance art in Florence.",
      question: "What is this sentence conveying?",
      options: [
        "A past habit that no longer happens",
        "A polite request for a grant",
        "An expression of a strong wish or aspiration",
        "An offering of art courses"
      ],
      correctIndex: 2,
      explanation: "'Would love / like to' expresses sincere wishes and personal aspirations.",
      goalId: "wishes"
    },

    // --- PAST BEHAVIORS & HABITS ---
    {
      sentence: "Every summer vacation, our grandfather would take us fishing at the crack of dawn.",
      question: "In this sentence, 'would' is utilized to:",
      options: [
        "Express a hypothetical future wish",
        "Refer to a repeated, typical behavior from the past",
        "Make an offer to go fishing",
        "Ask for permission to fish in the lake"
      ],
      correctIndex: 1,
      explanation: "When combined with past time references, 'would + base verb' describes habitual past actions (synonymous with 'used to').",
      goalId: "past-habits"
    },
    {
      sentence: "Whenever the code failed to compile, the senior engineer would pace nervously around the office.",
      question: "What does 'would pace' represent?",
      options: [
        "A typical, predictable past behavior under certain conditions",
        "A request for office peace",
        "A current preference of the programmer",
        "A polite offer to fix the bug"
      ],
      correctIndex: 0,
      explanation: "'Would' expresses characteristic or predictable behaviors in past contexts.",
      goalId: "past-habits"
    }
  ],

  speaking: [
    // Offerings
    {
      text: "Would you like a glass of sparkling water?",
      translation: "¿Te gustaría un vaso de agua con gas?",
      phoneticFocus: "Linking: 'Would you' sounds like /wʊdʒuː/",
      goalId: "offerings"
    },
    {
      text: "We'd be glad to show you around the campus.",
      translation: "Estaríamos encantados de mostrarte el campus.",
      phoneticFocus: "Contraction: 'We'd' /wiːd/ with quick release into /b/",
      goalId: "offerings"
    },
    {
      text: "Would you care to join us for dinner tonight?",
      translation: "¿Le apetecería acompañarnos a cenar esta noche?",
      phoneticFocus: "Rhythm and polite rising intonation at the end",
      goalId: "offerings"
    },

    // Permission & Requests
    {
      text: "Would you mind closing the window, please?",
      translation: "¿Te importaría cerrar la ventana, por favor?",
      phoneticFocus: "Elision: 'mind closing' connects smoothly without pause",
      goalId: "permission"
    },
    {
      text: "Would it be okay if I parked my car here?",
      translation: "¿Estaría bien si estacionara mi auto aquí?",
      phoneticFocus: "Linking vowel: 'Would it be' /wʊdɪtbiː/",
      goalId: "permission"
    },
    {
      text: "Could and would you please sign this document?",
      translation: "¿Podría y sería tan amable de firmar este documento?",
      phoneticFocus: "Silent 'l' in both 'could' /kʊd/ and 'would' /wʊd/",
      goalId: "permission"
    },

    // Preferences
    {
      text: "I'd rather stay home and read a book.",
      translation: "Preferiría quedarme en casa y leer un libro.",
      phoneticFocus: "Flap T in 'rather' and fast contraction 'I'd' /aɪd/",
      goalId: "preferences"
    },
    {
      text: "They would prefer not to discuss financial matters.",
      translation: "Ellos preferirían no discutir asuntos financieros.",
      phoneticFocus: "Negative infinitive stress: 'prefer NOT to'",
      goalId: "preferences"
    },

    // Wishes
    {
      text: "I wish it would stop raining so heavily.",
      translation: "Ojalá dejara de llover tan fuerte.",
      phoneticFocus: "Stress on 'stop' to emphasize the desire for change",
      goalId: "wishes"
    },
    {
      text: "I'd love to visit Kyoto during the cherry blossom season.",
      translation: "Me encantaría visitar Kioto durante la temporada de cerezos en flor.",
      phoneticFocus: "Smooth link: 'love to visit' /lʌvtə vɪzɪt/",
      goalId: "wishes"
    },

    // Past Habits
    {
      text: "My grandmother would always bake fresh bread on Sundays.",
      translation: "Mi abuela siempre horneaba pan fresco los domingos.",
      phoneticFocus: "Past habit marker: 'would always' creates rhythmic cadence",
      goalId: "past-habits"
    },
    {
      text: "We would sit by the fireplace and talk for hours.",
      translation: "Nos sentábamos junto a la chimenea y hablábamos durante horas.",
      phoneticFocus: "Linking: 'sit by the' and 'talk for hours' /tɔːkfər aʊərz/",
      goalId: "past-habits"
    }
  ],

  writing: [
    // Offerings
    {
      text: "Would you like something hot to drink?",
      translation: "¿Te gustaría algo caliente para tomar?",
      goalId: "offerings"
    },
    {
      text: "I would gladly assist you with that presentation.",
      translation: "Con gusto te ayudaría con esa presentación.",
      goalId: "offerings"
    },

    // Permission & Requests
    {
      text: "Would you mind sending me the updated invoice?",
      translation: "¿Te importaría enviarme la factura actualizada?",
      goalId: "permission"
    },
    {
      text: "Would it be possible to reschedule our appointment?",
      translation: "¿Sería posible reprogramar nuestra cita?",
      goalId: "permission"
    },
    {
      text: "Would you please turn down the air conditioner?",
      translation: "¿Podrías por favor bajar el aire acondicionado?",
      goalId: "permission"
    },

    // Preferences
    {
      text: "I would rather take the train than drive in rush hour.",
      translation: "Preferiría tomar el tren antes que conducir en hora pico.",
      goalId: "preferences"
    },
    {
      text: "She'd prefer to postpone the final decision until Monday.",
      translation: "Ella preferiría posponer la decisión final hasta el lunes.",
      goalId: "preferences"
    },

    // Wishes
    {
      text: "I wish they would notify us earlier about schedule changes.",
      translation: "Desearía que nos avisaran antes sobre los cambios de horario.",
      goalId: "wishes"
    },
    {
      text: "He would really love to study software engineering abroad.",
      translation: "A él realmente le encantaría estudiar ingeniería de software en el extranjero.",
      goalId: "wishes"
    },

    // Past Habits
    {
      text: "As children we would spend whole afternoons building treehouses.",
      translation: "De niños solíamos pasar tardes enteras construyendo casas en los árboles.",
      goalId: "past-habits"
    },
    {
      text: "Our old dog would wait patiently by the front door every evening.",
      translation: "Nuestro viejo perro esperaba pacientemente junto a la puerta principal todas las tardes.",
      goalId: "past-habits"
    }
  ],
});
