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

interface SpeakSectionProps {
  sentences: readonly SpeakingSentence[];
}

export default function SpeakSection({ sentences }: SpeakSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [transcript, setTranscript] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const target = sentences[currentIndex];
  // Read by the recognizer's callbacks so it can be created once per mount.
  const targetTextRef = useRef("");

  useEffect(() => {
    targetTextRef.current = target?.text ?? "";
  }, [target]);

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
      setTranscript(text);
      setScore(calculateSimilarity(targetTextRef.current, text));
    };
    recognition.onerror = (event) => {
      setErrorMsg("Microphone error: " + event.error);
      setIsRecording(false);
    };
    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
    return () => {
      recognition.abort();
      recognitionRef.current = null;
    };
  }, []);

  if (!target) return <EmptyState skill="speaking" />;

  const toggleRecording = () => {
    const recognition = recognitionRef.current;
    if (!recognition) return;
    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  const nextSentence = () => {
    recognitionRef.current?.abort();
    setCurrentIndex((prev) => (prev + 1) % sentences.length);
    setTranscript("");
    setScore(null);
    if (isSupported) setErrorMsg("");
  };

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

      <div className="text-center mb-8">
        <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide font-bold">
          Target Sentence
        </p>
        <p className="text-2xl font-medium text-slate-800">"{target.text}"</p>
        {target.translation && (
          <p className="mt-2 text-slate-500 italic">{target.translation}</p>
        )}
        {target.phoneticFocus && (
          <p className="mt-3 text-sm text-indigo-700 bg-indigo-50 inline-block px-3 py-1 rounded-lg">
            {target.phoneticFocus}
          </p>
        )}
        <br />
        <button
          type="button"
          onClick={() => speakText(target.text)}
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
          disabled={!isSupported}
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
          {isRecording ? "Listening..." : "Tap to Speak"}
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
                  className={`text-2xl font-bold mb-2 ${score >= 80 ? "text-green-500" : score >= 50 ? "text-amber-500" : "text-red-500"}`}
                >
                  Accuracy: {score}%
                </div>
                {score >= 80 ? (
                  <div className="text-green-600 flex items-center">
                    <Check size={20} className="mr-1" /> Excellent
                    pronunciation!
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

        <div className="mt-8 w-full flex justify-end">
          <button
            type="button"
            onClick={nextSentence}
            className="flex items-center px-6 py-2.5 rounded-xl font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
          >
            Next Phrase <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
