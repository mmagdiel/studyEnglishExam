import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  Check,
  ChevronRight,
  Mic,
  Play,
  RefreshCw,
} from "lucide-react";
import type { SpeakingSentence } from "../../types/grammar";
import {
  createSpeechRecognition,
  speakText,
  type SpeechRecognitionInstance,
} from "../../lib/speech";
import { calculateSimilarity } from "../../lib/text";
import EmptyState from "./EmptyState";

/** Minimum accuracy (%) for a spoken sentence to count as correct. */
export const SPEAKING_PASS_SCORE = 80;

/** Recognition errors that mean the microphone can't be used at all (vs. "no-speech", which is retryable). */
const FATAL_MIC_ERRORS = new Set([
  "not-allowed",
  "service-not-allowed",
  "audio-capture",
]);

interface SpeakSectionProps {
  sentences: readonly SpeakingSentence[];
}

export default function SpeakSection({ sentences }: SpeakSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const target = sentences[currentIndex];
  if (!target) return <EmptyState skill="speaking" />;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-indigo-900 flex items-center">
          <Mic className="mr-3 text-indigo-500" /> Shadowing Practice
        </h2>
        <span className="text-slate-400 font-medium">
          {currentIndex + 1} / {sentences.length}
        </span>
      </div>

      {/* Keyed so each sentence gets a fresh recognizer and transcript. */}
      <ShadowingExercise
        key={currentIndex}
        sentence={target}
        onNext={() => setCurrentIndex((prev) => (prev + 1) % sentences.length)}
      />
    </div>
  );
}

interface ShadowingExerciseProps {
  sentence: SpeakingSentence;
  /**
   * Test mode: the first recognized attempt is final, and "Next" only
   * appears after it. Practice mode allows unlimited retries.
   */
  singleAttempt?: boolean;
  /** Called once per graded attempt (once in total in single-attempt mode). */
  onComplete?: (correct: boolean) => void;
  /** Called when the microphone can't be used at all (permission denied, no device, unsupported). */
  onUnavailable?: () => void;
  onNext: () => void;
  nextLabel?: string;
}

/** Listen-and-repeat for one sentence. Used by practice and by the test. */
export function ShadowingExercise({
  sentence,
  singleAttempt = false,
  onComplete,
  onUnavailable,
  onNext,
  nextLabel = "Next Phrase",
}: ShadowingExerciseProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [micBlocked, setMicBlocked] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  // Read by the recognizer's callbacks, which are created once per mount.
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const graded = score !== null;
  const locked = singleAttempt && graded;

  useEffect(() => {
    const recognition = createSpeechRecognition();
    if (!recognition) {
      setIsSupported(false);
      setErrorMsg(
        "Your browser does not support Speech Recognition. Try Chrome or Edge.",
      );
      return;
    }

    recognition.onstart = () => {
      setIsRecording(true);
      setErrorMsg("");
      setTranscript("");
      setScore(null);
    };
    recognition.onresult = (event) => {
      const text = event.results[0]?.[0]?.transcript ?? "";
      const result = calculateSimilarity(sentence.text, text);
      setTranscript(text);
      setScore(result);
      onCompleteRef.current?.(result >= SPEAKING_PASS_SCORE);
    };
    recognition.onerror = (event) => {
      setErrorMsg("Microphone error: " + event.error);
      setIsRecording(false);
      if (FATAL_MIC_ERRORS.has(event.error)) setMicBlocked(true);
    };
    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
    return () => {
      recognition.abort();
      recognitionRef.current = null;
    };
  }, [sentence.text]);

  const toggleRecording = () => {
    const recognition = recognitionRef.current;
    if (!recognition || locked) return;
    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  const goNext = () => {
    recognitionRef.current?.abort();
    onNext();
  };

  const showNext = !singleAttempt || graded;
  const canSkipUnavailable =
    singleAttempt && !graded && (!isSupported || micBlocked) && onUnavailable;

  return (
    <>
      <div className="text-center mb-8">
        <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide font-bold">
          Target Sentence
        </p>
        <p className="text-2xl font-medium text-slate-800">"{sentence.text}"</p>
        {sentence.translation && (
          <p className="mt-2 text-slate-500 italic">{sentence.translation}</p>
        )}
        {sentence.phoneticFocus && (
          <p className="mt-3 text-sm text-indigo-700 bg-indigo-50 inline-block px-3 py-1 rounded-lg">
            {sentence.phoneticFocus}
          </p>
        )}
        <br />
        <button
          type="button"
          onClick={() => speakText(sentence.text)}
          className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold hover:bg-indigo-200 transition-colors"
        >
          <Play size={16} className="mr-2" fill="currentColor" /> Listen
        </button>
      </div>

      <div className="border-t border-slate-100 pt-8 flex flex-col items-center">
        {errorMsg && (
          <div className="flex items-center text-red-500 mb-4 bg-red-50 px-4 py-2 rounded-lg">
            <AlertCircle size={18} className="mr-2" />{" "}
            <span className="text-sm font-medium">{errorMsg}</span>
          </div>
        )}

        <button
          type="button"
          aria-label={isRecording ? "Stop recording" : "Start recording"}
          onClick={toggleRecording}
          disabled={!isSupported || locked}
          className={`relative flex items-center justify-center w-20 h-20 rounded-full text-white shadow-lg transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
            isRecording
              ? "bg-red-500 animate-pulse"
              : "bg-indigo-600 hover:bg-indigo-500"
          }`}
        >
          <Mic size={32} />
          {isRecording && (
            <span className="absolute -inset-2 rounded-full border-4 border-red-500 opacity-20 animate-ping"></span>
          )}
        </button>
        <p className="mt-3 text-slate-500 font-medium">
          {isRecording
            ? "Listening..."
            : locked
              ? "Attempt recorded"
              : singleAttempt
                ? "Tap to Speak — one attempt"
                : "Tap to Speak"}
        </p>

        {transcript && (
          <div className="w-full mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <p className="text-sm text-slate-500 mb-1 uppercase tracking-wide font-bold">
              You said:
            </p>
            <p className="text-lg text-slate-700 italic mb-4">"{transcript}"</p>

            {score !== null && (
              <div className="flex flex-col items-center animate-fade-in-up">
                <div
                  className={`text-2xl font-bold mb-2 ${score >= SPEAKING_PASS_SCORE ? "text-green-500" : score >= 50 ? "text-amber-500" : "text-red-500"}`}
                >
                  Accuracy: {score}%
                </div>
                {score >= SPEAKING_PASS_SCORE ? (
                  <div className="text-green-600 flex items-center">
                    <Check size={20} className="mr-1" /> Excellent
                    pronunciation!
                  </div>
                ) : singleAttempt ? (
                  <div className="text-red-600 flex items-center">
                    You needed {SPEAKING_PASS_SCORE}% or more.
                  </div>
                ) : (
                  <div className="text-amber-600 flex items-center">
                    <RefreshCw size={20} className="mr-1" /> Good try! Listen
                    again and retry.
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {canSkipUnavailable && (
          <button
            type="button"
            onClick={onUnavailable}
            className="mt-6 px-6 py-2.5 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Can't use the microphone? Swap for another exercise
          </button>
        )}

        {showNext && (
          <div className="mt-8 w-full flex justify-end">
            <button
              type="button"
              onClick={goNext}
              className="flex items-center px-6 py-2.5 rounded-xl font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
            >
              {nextLabel} <ChevronRight size={18} className="ml-1" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
