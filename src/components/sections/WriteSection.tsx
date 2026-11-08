import { useState } from "react";
import { Check, ChevronRight, Edit3, RefreshCw, X } from "lucide-react";
import type { CommunicativeGoal, WritingSentence } from "../../types/grammar";
import { speakText } from "../../lib/speech";
import { shuffleArray } from "../../lib/text";
import EmptyState from "./EmptyState";

interface WriteSectionProps {
  sentences: readonly WritingSentence[];
  goals: readonly CommunicativeGoal[];
}

interface WordToken {
  id: string;
  word: string;
}

type Status = "idle" | "correct" | "incorrect";

const MAX_SHUFFLE_ATTEMPTS = 10;

function scramble(text: string): WordToken[] {
  const words = text.split(" ");
  let shuffled = shuffleArray(words);
  // Avoid handing the learner the answer already in order.
  for (
    let attempt = 0;
    words.length > 2 && shuffled.join(" ") === text && attempt < MAX_SHUFFLE_ATTEMPTS;
    attempt++
  ) {
    shuffled = shuffleArray(words);
  }
  return shuffled.map((word, id) => ({ id: `${word}-${id}`, word }));
}

export default function WriteSection({ sentences, goals }: WriteSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = sentences[currentIndex];
  if (!current) return <EmptyState skill="writing" />;

  const category = goals.find((g) => g.id === current.goalId)?.title ?? "";

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-indigo-900 flex items-center">
          <Edit3 className="mr-3 text-indigo-500" /> Sentence Builder
        </h2>
        <span className="text-slate-400 font-medium">
          {currentIndex + 1} / {sentences.length}
        </span>
      </div>

      {category && (
        <div className="mb-4">
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
            {category}
          </span>
        </div>
      )}

      {/* Keyed so each sentence starts from a fresh scramble. */}
      <SentenceBuilder
        key={currentIndex}
        text={current.text}
        onNext={() => setCurrentIndex((prev) => (prev + 1) % sentences.length)}
      />
    </div>
  );
}

interface SentenceBuilderProps {
  text: string;
  onNext: () => void;
}

function SentenceBuilder({ text, onNext }: SentenceBuilderProps) {
  const [availableWords, setAvailableWords] = useState<WordToken[]>(() =>
    scramble(text),
  );
  const [selectedWords, setSelectedWords] = useState<WordToken[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const handleSelectWord = (token: WordToken) => {
    if (status === "correct") return;
    setAvailableWords((prev) => prev.filter((w) => w.id !== token.id));
    setSelectedWords((prev) => [...prev, token]);
    setStatus("idle");
  };

  const handleDeselectWord = (token: WordToken) => {
    if (status === "correct") return;
    setSelectedWords((prev) => prev.filter((w) => w.id !== token.id));
    setAvailableWords((prev) => [...prev, token]);
    setStatus("idle");
  };

  const checkAnswer = () => {
    const attempt = selectedWords.map((w) => w.word).join(" ");
    if (attempt === text) {
      setStatus("correct");
      setTimeout(() => speakText(text), 300);
    } else {
      setStatus("incorrect");
    }
  };

  const clearSelection = () => {
    setAvailableWords((prev) => [...prev, ...selectedWords]);
    setSelectedWords([]);
    setStatus("idle");
  };

  return (
    <>
      <div
        className={`min-h-[120px] p-6 rounded-2xl border-2 border-dashed flex flex-wrap gap-2 items-center justify-center mb-8 transition-colors ${
          status === "correct"
            ? "border-green-400 bg-green-50"
            : status === "incorrect"
              ? "border-red-400 bg-red-50"
              : "border-slate-300 bg-slate-50"
        }`}
      >
        {selectedWords.length === 0 && status === "idle" && (
          <span className="text-slate-400 font-medium italic">
            Tap words below to build the sentence...
          </span>
        )}
        {selectedWords.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleDeselectWord(item)}
            className={`px-4 py-2 text-lg font-medium rounded-xl shadow-sm transition-transform transform active:scale-95 ${
              status === "correct"
                ? "bg-green-500 text-white"
                : status === "incorrect"
                  ? "bg-red-500 text-white"
                  : "bg-indigo-600 text-white hover:bg-indigo-500"
            }`}
          >
            {item.word}
          </button>
        ))}
      </div>

      {status === "correct" && (
        <div className="flex items-center justify-center space-x-2 text-green-600 mb-6 animate-bounce">
          <Check size={24} className="bg-green-100 rounded-full p-1" />
          <span className="font-bold text-lg">Perfect!</span>
        </div>
      )}
      {status === "incorrect" && (
        <div className="flex items-center justify-center space-x-2 text-red-500 mb-6">
          <X size={24} className="bg-red-100 rounded-full p-1" />
          <span className="font-bold text-lg">Not quite right, try again.</span>
        </div>
      )}

      <div className="flex flex-wrap gap-3 justify-center mb-10 min-h-[80px]">
        {availableWords.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleSelectWord(item)}
            className="px-5 py-2.5 bg-white border-2 border-slate-200 text-slate-700 text-lg font-medium rounded-xl shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-all transform active:scale-95"
          >
            {item.word}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 border-t border-slate-100 pt-6">
        <button
          type="button"
          onClick={clearSelection}
          disabled={selectedWords.length === 0 || status === "correct"}
          className="flex items-center px-6 py-3 rounded-xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <RefreshCw size={20} className="mr-2" /> Clear
        </button>

        {status !== "correct" ? (
          <button
            type="button"
            onClick={checkAnswer}
            disabled={availableWords.length > 0}
            className="flex items-center px-8 py-3 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
          >
            Check Answer <Check size={20} className="ml-2" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="flex items-center px-8 py-3 rounded-xl font-bold text-white bg-green-500 hover:bg-green-400 shadow-md shadow-green-200 transition-all transform active:scale-95 animate-pulse"
          >
            Next Sentence <ChevronRight size={20} className="ml-2" />
          </button>
        )}
      </div>
    </>
  );
}
