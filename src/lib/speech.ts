/**
 * Thin wrappers around the Web Speech API (synthesis + recognition).
 * Browser-only: callers must run on the client (the app is mounted with
 * `client:only="react"`).
 */

const LANG = "en-US";

export function speakText(text: string): void {
  if (!("speechSynthesis" in window)) {
    alert("Sorry, your browser doesn't support text to speech.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = LANG;
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

// SpeechRecognition is not in TypeScript's DOM lib, so we declare the subset we use.
export interface SpeechRecognitionResultEvent extends Event {
  readonly results: ArrayLike<ArrayLike<{ readonly transcript: string }>>;
}

export interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
}

export interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: (() => void) | null;
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

interface SpeechRecognitionWindow {
  SpeechRecognition?: SpeechRecognitionConstructor;
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
}

export function isSpeechRecognitionSupported(): boolean {
  const w = window as unknown as SpeechRecognitionWindow;
  return Boolean(w.SpeechRecognition ?? w.webkitSpeechRecognition);
}

/** Returns a configured recognizer, or `null` if the browser lacks support. */
export function createSpeechRecognition(): SpeechRecognitionInstance | null {
  const w = window as unknown as SpeechRecognitionWindow;
  const Ctor = w.SpeechRecognition ?? w.webkitSpeechRecognition;
  if (!Ctor) return null;

  const recognition = new Ctor();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = LANG;
  return recognition;
}
