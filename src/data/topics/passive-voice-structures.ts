import { defineTopicPack } from "./defineTopic";
import { passiveVoice } from "./passive-voice";

/**
 * "Structures" exercises for the passive voice: identify the form (tense of
 * "be" + past participle), then its purpose. Grouped as contrast sets —
 * active vs. passive, and passive with vs. without "by".
 */
export const passiveVoiceStructures = defineTopicPack(passiveVoice, {
  structures: [
    // --- active vs. passive, with vs. without agent ---
    {
      sentence: "My car window has been broken.",
      highlight: "has been broken",
      structure: "has/have been + past participle (present perfect passive)",
      distractors: [
        "has/have + past participle (active)",
        "was/were + past participle",
        "has/have being + past participle",
      ],
      goalId: "what-happens",
      explanation:
        "The doer is unknown, so the passive focuses on what happened (better than the active 'Someone has broken my car window'). ✗ 'has being broken'.",
    },
    {
      sentence: "This bridge was designed by a famous engineer.",
      highlight: "was designed by a famous engineer",
      structure: "was/were + past participle + by + agent",
      distractors: [
        "was/were + past participle + with + agent",
        "was/were + past participle (no agent)",
        "was/were + base verb + by + agent",
      ],
      goalId: "agent",
      explanation:
        "'by + agent' adds important information: who designed it.",
    },
    {
      sentence: "The window was opened with a knife.",
      highlight: "with a knife",
      structure: "passive + with + instrument",
      distractors: [
        "passive + by + instrument",
        "passive + by + agent",
        "passive + of + instrument",
      ],
      goalId: "agent",
      explanation:
        "'with' introduces the tool used; 'by' introduces the person or cause.",
    },

    // --- passive in different tenses ---
    {
      sentence: "Paper is made from wood.",
      highlight: "is made",
      structure: "am/is/are + past participle (present simple passive)",
      distractors: [
        "is + base verb",
        "is + being + past participle",
        "was + past participle",
      ],
      goalId: "what-happens",
      explanation:
        "General facts and processes: present simple passive.",
    },
    {
      sentence: "The rooms are being cleaned right now.",
      highlight: "are being cleaned",
      structure: "am/is/are + being + past participle",
      distractors: [
        "am/is/are + been + past participle",
        "am/is/are + past participle",
        "am/is/are + being + verb-ing",
      ],
      goalId: "done-to",
      explanation:
        "Present continuous passive: an action is being done to the rooms at this moment.",
    },
    {
      sentence: "The results will be announced tomorrow.",
      highlight: "will be announced",
      structure: "will + be + past participle",
      distractors: [
        "will + been + past participle",
        "will + past participle",
        "will + be + base verb",
      ],
      goalId: "what-happens",
      explanation: "Future passive: will + be + past participle.",
    },
    {
      sentence: "Your password should be changed every three months.",
      highlight: "should be changed",
      structure: "modal + be + past participle",
      distractors: [
        "modal + been + past participle",
        "modal + past participle",
        "modal + be + verb-ing",
      ],
      goalId: "done-to",
      explanation:
        "After any modal (can, must, should, might…): be + past participle.",
    },

    // --- people as receivers ---
    {
      sentence: "We were told the news by the manager.",
      highlight: "We were told",
      structure: "person + be + past participle + thing (two objects)",
      distractors: [
        "thing + be + past participle + to + person",
        "person + be + base verb + thing",
        "person + have + past participle + thing",
      ],
      goalId: "done-to",
      explanation:
        "With tell, give, send, show, offer… the person usually becomes the subject of the passive.",
    },
    {
      sentence: "He was asked to leave the room.",
      highlight: "was asked to leave",
      structure: "be + past participle + to + base verb",
      distractors: [
        "be + past participle + base verb",
        "be + past participle + verb-ing",
        "be + base verb + to + base verb",
      ],
      goalId: "done-to",
      explanation:
        "Passive + infinitive: was asked / told / allowed to do something.",
    },

    // --- receiver as topic: news, notices, processes ---
    {
      sentence: "A new vaccine has been developed by scientists in Oxford.",
      highlight: "A new vaccine has been developed",
      structure: "receiver (new topic) + has been + past participle",
      distractors: [
        "agent + has + past participle + receiver",
        "receiver + has + past participle",
        "receiver + is + verb-ing",
      ],
      goalId: "receiver",
      explanation:
        "In news, the receiver (the vaccine) is the headline, so it comes first.",
    },
    {
      sentence: "Photos must not be taken inside the museum.",
      highlight: "must not be taken",
      structure: "must not + be + past participle (formal notice)",
      distractors: [
        "must not + take + object",
        "must not + been + past participle",
        "don't must + be + past participle",
      ],
      goalId: "receiver",
      explanation:
        "Notices and rules use the passive to sound impersonal and formal.",
    },
    {
      sentence: "Then the water is heated until it boils.",
      highlight: "the water is heated",
      structure: "am/is/are + past participle (process)",
      distractors: [
        "is + heating",
        "was + past participle",
        "is + being + past participle",
      ],
      goalId: "receiver",
      explanation:
        "Describing the steps of a process: the material is the topic, not the worker.",
    },
  ],
});
