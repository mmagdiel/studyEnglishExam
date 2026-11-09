import { useState } from "react";
import { CheckCircle2, ChevronRight, ScanSearch, Volume2, XCircle } from "lucide-react";
import type { CommunicativeGoal, StructureExercise } from "../../types/grammar";
import { speakText } from "../../lib/speech";
import { shuffleArray } from "../../lib/text";
import EmptyState from "./EmptyState";

interface StructureSectionProps {
  exercises: readonly StructureExercise[];
  goals: readonly CommunicativeGoal[];
}

export default function StructureSection({
  exercises,
  goals,
}: StructureSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = exercises[currentIndex];
  if (!current) return <EmptyState skill="structure" />;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-indigo-900 flex items-center">
          <ScanSearch className="mr-3 text-indigo-500" /> Grammatical Structures
        </h2>
        <span className="text-slate-400 font-medium">
          {currentIndex + 1} / {exercises.length}
        </span>
      </div>

      {/* Keyed so the shuffled options and answers reset per exercise. */}
      <StructureAnalysis
        key={currentIndex}
        exercise={current}
        goals={goals}
        onNext={() => setCurrentIndex((prev) => (prev + 1) % exercises.length)}
      />
    </div>
  );
}

interface StructureAnalysisProps {
  exercise: StructureExercise;
  goals: readonly CommunicativeGoal[];
  /** Called once, after step 2; correct only if both steps are right. */
  onComplete?: (correct: boolean) => void;
  onNext: () => void;
  nextLabel?: string;
}

/** Two-step form + purpose analysis. Used by practice and by the test. */
export function StructureAnalysis({
  exercise,
  goals,
  onComplete,
  onNext,
  nextLabel = "Next Sentence",
}: StructureAnalysisProps) {
  const [formOptions] = useState(() =>
    shuffleArray([exercise.structure, ...exercise.distractors]),
  );
  const [formAnswer, setFormAnswer] = useState<string | null>(null);
  const [goalAnswer, setGoalAnswer] = useState<string | null>(null);

  const formDone = formAnswer !== null;
  const goalDone = goalAnswer !== null;
  const correctGoal = goals.find((g) => g.id === exercise.goalId);

  const answerGoal = (value: string) => {
    if (goalDone) return;
    setGoalAnswer(value);
    onComplete?.(
      formAnswer === exercise.structure && value === exercise.goalId,
    );
  };

  return (
    <>
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
        <p className="text-xl font-medium text-slate-800 text-center mb-2">
          "
          <HighlightedSentence
            sentence={exercise.sentence}
            highlight={exercise.highlight}
            active={goalDone}
          />
          "
        </p>
        <button
          type="button"
          aria-label="Listen to sentence"
          onClick={() => speakText(exercise.sentence)}
          className="mx-auto block text-indigo-500 hover:text-indigo-700 mt-2"
        >
          <Volume2 size={20} />
        </button>
      </div>

      <Step
        number={1}
        title="Which grammatical structure is used?"
        options={formOptions.map((f) => ({ value: f, label: f }))}
        correct={exercise.structure}
        answer={formAnswer}
        onAnswer={setFormAnswer}
        mono
      />

      {formDone && (
        <div className="mt-8 animate-fade-in-up">
          <Step
            number={2}
            title="What is its purpose?"
            options={goals.map((g) => ({
              value: g.id,
              label: `${g.title} (${g.translation})`,
            }))}
            correct={exercise.goalId}
            answer={goalAnswer}
            onAnswer={answerGoal}
          />
        </div>
      )}

      {goalDone && (
        <div className="mt-6 p-4 rounded-xl bg-indigo-50 text-indigo-900 text-sm space-y-2 animate-fade-in-up">
          <p>
            <span className="font-semibold">Form:</span>{" "}
            <code className="font-mono">{exercise.structure}</code>
            <br />
            <span className="font-semibold">Purpose:</span>{" "}
            {correctGoal?.title ?? exercise.goalId}
          </p>
          {exercise.explanation && <p>{exercise.explanation}</p>}
        </div>
      )}

      {goalDone && (
        <div className="mt-8 flex justify-center animate-fade-in-up">
          <button
            type="button"
            onClick={onNext}
            className="flex items-center px-8 py-3 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all active:scale-95"
          >
            {nextLabel} <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      )}
    </>
  );
}

interface StepProps {
  number: number;
  title: string;
  options: readonly { value: string; label: string }[];
  correct: string;
  answer: string | null;
  onAnswer: (value: string) => void;
  /** Render option labels in monospace (for structure formulas). */
  mono?: boolean;
}

function Step({ number, title, options, correct, answer, onAnswer, mono }: StepProps) {
  const answered = answer !== null;

  return (
    <div>
      <p className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
        <span className="mr-3 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
          {number}
        </span>
        {title}
        {answered &&
          (answer === correct ? (
            <CheckCircle2 size={20} className="ml-2 text-green-500" />
          ) : (
            <XCircle size={20} className="ml-2 text-red-500" />
          ))}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((opt) => {
          let cls =
            "w-full text-left px-5 py-3 rounded-xl border-2 transition-all font-medium text-slate-700 ";
          if (mono) cls += "font-mono text-sm ";
          if (!answered) {
            cls +=
              "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 active:scale-95";
          } else if (opt.value === correct) {
            cls += "border-green-500 bg-green-50 text-green-800";
          } else if (opt.value === answer) {
            cls += "border-red-500 bg-red-50 text-red-800";
          } else {
            cls += "border-slate-200 opacity-50";
          }
          return (
            <button
              key={opt.value}
              type="button"
              disabled={answered}
              onClick={() => onAnswer(opt.value)}
              className={cls}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface HighlightedSentenceProps {
  sentence: string;
  highlight: string;
  active: boolean;
}

function HighlightedSentence({ sentence, highlight, active }: HighlightedSentenceProps) {
  const start = active && highlight ? sentence.indexOf(highlight) : -1;
  if (start === -1) return <>{sentence}</>;

  const end = start + highlight.length;
  return (
    <>
      {sentence.slice(0, start)}
      <mark className="rounded bg-amber-200 px-1 text-slate-900">
        {sentence.slice(start, end)}
      </mark>
      {sentence.slice(end)}
    </>
  );
}
