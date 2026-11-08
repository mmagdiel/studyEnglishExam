import { useState } from "react";
import { BookText, ChevronRight, Volume2 } from "lucide-react";
import type { ReadingQuestion } from "../../types/grammar";
import { speakText } from "../../lib/speech";
import EmptyState from "./EmptyState";

interface ReadSectionProps {
  questions: readonly ReadingQuestion[];
}

export default function ReadSection({ questions }: ReadSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQ = questions[currentIndex];
  if (!currentQ) return <EmptyState skill="reading" />;

  const hasAnswered = selectedOption !== null;

  const handleOptionClick = (index: number) => {
    if (hasAnswered) return;
    setSelectedOption(index);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-indigo-900 flex items-center">
          <BookText className="mr-3 text-indigo-500" /> Reading Intent
        </h2>
        <span className="text-slate-400 font-medium">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
        <p className="text-xl font-medium text-slate-800 text-center mb-2">
          "{currentQ.sentence}"
        </p>
        <button
          type="button"
          aria-label="Listen to sentence"
          onClick={() => speakText(currentQ.sentence)}
          className="mx-auto block text-indigo-500 hover:text-indigo-700 mt-2"
        >
          <Volume2 size={20} />
        </button>
      </div>

      <p className="text-lg font-semibold text-slate-700 mb-4">
        {currentQ.question}
      </p>

      <div className="space-y-3">
        {currentQ.options.map((opt, i) => {
          let btnClass =
            "w-full text-left px-6 py-4 rounded-xl border-2 transition-all font-medium text-slate-700 ";

          if (!hasAnswered) {
            btnClass +=
              "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 active:scale-95";
          } else if (i === currentQ.correctIndex) {
            btnClass += "border-green-500 bg-green-50 text-green-800";
          } else if (i === selectedOption) {
            btnClass += "border-red-500 bg-red-50 text-red-800";
          } else {
            btnClass += "border-slate-200 opacity-50";
          }

          return (
            <button
              key={opt}
              type="button"
              disabled={hasAnswered}
              onClick={() => handleOptionClick(i)}
              className={btnClass}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {hasAnswered && (
        <div className="mt-8 flex justify-center animate-fade-in-up">
          <button
            type="button"
            onClick={nextQuestion}
            className="flex items-center px-8 py-3 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all active:scale-95"
          >
            Next Question <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      )}
    </div>
  );
}
