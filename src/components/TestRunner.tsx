import { useRef, useState, type ReactNode } from "react";
import {
  BookText,
  Edit3,
  Heart,
  HeartCrack,
  Mic,
  RotateCcw,
  ScanSearch,
  Trophy,
} from "lucide-react";
import { topics } from "../data/topics";
import { isSpeechRecognitionSupported } from "../lib/speech";
import {
  MAX_HEARTS,
  TEST_LENGTH,
  buildPool,
  loadTestStats,
  pickItems,
  recordTestResult,
  type TestItem,
  type TestStats,
} from "../lib/test";
import { ReadingExercise } from "./sections/ReadSection";
import { StructureAnalysis } from "./sections/StructureSection";
import { SentenceBuilder } from "./sections/WriteSection";
import { ShadowingExercise } from "./sections/SpeakSection";

type Phase = "running" | "passed" | "failed";

const KIND_META: Record<TestItem["kind"], { label: string; icon: ReactNode }> = {
  read: { label: "Reading Intent", icon: <BookText className="mr-3 text-indigo-500" /> },
  structure: {
    label: "Grammatical Structures",
    icon: <ScanSearch className="mr-3 text-indigo-500" />,
  },
  write: { label: "Sentence Builder", icon: <Edit3 className="mr-3 text-indigo-500" /> },
  speak: { label: "Shadowing", icon: <Mic className="mr-3 text-indigo-500" /> },
};

function itemKey(item: TestItem): string {
  switch (item.kind) {
    case "read":
      return `read:${item.question.sentence}:${item.question.question}`;
    case "structure":
      return `structure:${item.exercise.sentence}`;
    case "write":
      return `write:${item.sentence.text}`;
    case "speak":
      return `speak:${item.sentence.text}`;
  }
}

/** Builds a fresh test. Speaking is left out when the browser can't do speech recognition. */
function newTest(allowSpeaking: boolean): TestItem[] {
  const pool = buildPool(topics).filter(
    (item) => allowSpeaking || item.kind !== "speak",
  );
  return pickItems(pool, TEST_LENGTH);
}

export default function TestRunner() {
  const [allowSpeaking, setAllowSpeaking] = useState(isSpeechRecognitionSupported);
  const [items, setItems] = useState(() => newTest(allowSpeaking));
  const [index, setIndex] = useState(0);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [answered, setAnswered] = useState(false);
  const [phase, setPhase] = useState<Phase>("running");
  const [stats, setStats] = useState<TestStats>(loadTestStats);
  // Exercises can report more than once (e.g. retries); only the first report per exercise counts.
  const gradedIndexRef = useRef(-1);

  const current = items[index];
  const isLast = index === items.length - 1;

  const handleComplete = (correct: boolean) => {
    if (gradedIndexRef.current === index) return;
    gradedIndexRef.current = index;
    setAnswered(true);
    if (!correct) setHearts((h) => Math.max(0, h - 1));
  };

  const finish = (passed: boolean) => {
    setStats(recordTestResult(passed));
    setPhase(passed ? "passed" : "failed");
  };

  const handleNext = () => {
    if (hearts === 0) return finish(false);
    if (isLast) return finish(true);
    setIndex((i) => i + 1);
    setAnswered(false);
  };

  /** The mic turned out to be unusable: swap the current and remaining speaking items. */
  const handleSpeakingUnavailable = () => {
    setAllowSpeaking(false);
    setItems((prev) => {
      const used = new Set(prev.map(itemKey));
      const spare = buildPool(topics).filter(
        (item) => item.kind !== "speak" && !used.has(itemKey(item)),
      );
      const replacements = pickItems(spare, prev.length);
      let r = 0;
      return prev.map((item, i) =>
        i >= index && item.kind === "speak" ? (replacements[r++] ?? item) : item,
      );
    });
  };

  const restart = () => {
    setItems(newTest(allowSpeaking));
    setIndex(0);
    setHearts(MAX_HEARTS);
    setAnswered(false);
    setPhase("running");
    gradedIndexRef.current = -1;
  };

  if (phase !== "running") {
    return (
      <Results
        passed={phase === "passed"}
        mistakes={MAX_HEARTS - hearts}
        reached={index + 1}
        stats={stats}
        onRestart={restart}
      />
    );
  }

  if (!current) {
    return (
      <Card>
        <p className="text-center text-slate-500">
          There aren't enough exercises to build a test yet.
        </p>
      </Card>
    );
  }

  const nextLabel = hearts === 0 ? "See results" : isLast ? "Finish test" : "Next";
  const meta = KIND_META[current.kind];

  return (
    <main className="max-w-md mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-5xl px-4 pb-16">
      <Card>
        <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
          <h2 className="text-2xl font-bold text-indigo-900 flex items-center">
            {meta.icon} {meta.label}
          </h2>
          <Hearts hearts={hearts} />
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-slate-400 mb-1">
            <span>
              Exercise {index + 1} / {items.length}
            </span>
          </div>
          <div
            className="h-2 rounded-full bg-slate-100 overflow-hidden"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={items.length}
            aria-valuenow={index + (answered ? 1 : 0)}
          >
            <div
              className="h-full bg-indigo-500 transition-all duration-500"
              style={{ width: `${((index + (answered ? 1 : 0)) / items.length) * 100}%` }}
            />
          </div>
        </div>

        {hearts === 0 && answered && (
          <p className="mb-6 p-4 rounded-xl bg-red-50 text-red-700 font-semibold text-center">
            You're out of hearts. Review the answer, then see your results.
          </p>
        )}

        {/* Keyed so every exercise starts from a clean state. */}
        <div key={`${index}:${itemKey(current)}`} className="animate-fade-in-up">
          <Exercise
            item={current}
            onComplete={handleComplete}
            onSpeakingUnavailable={handleSpeakingUnavailable}
            onNext={handleNext}
            nextLabel={nextLabel}
          />
        </div>
      </Card>
    </main>
  );
}

// --- SUBCOMPONENTS ---

interface ExerciseProps {
  item: TestItem;
  onComplete: (correct: boolean) => void;
  onSpeakingUnavailable: () => void;
  onNext: () => void;
  nextLabel: string;
}

function Exercise({
  item,
  onComplete,
  onSpeakingUnavailable,
  onNext,
  nextLabel,
}: ExerciseProps) {
  switch (item.kind) {
    case "read":
      return (
        <ReadingExercise
          question={item.question}
          onComplete={onComplete}
          onNext={onNext}
          nextLabel={nextLabel}
        />
      );
    case "structure":
      return (
        <StructureAnalysis
          exercise={item.exercise}
          goals={item.goals}
          onComplete={onComplete}
          onNext={onNext}
          nextLabel={nextLabel}
        />
      );
    case "write":
      return (
        <>
          {item.sentence.translation && (
            <p className="mb-4 text-slate-500 italic">{item.sentence.translation}</p>
          )}
          <SentenceBuilder
            text={item.sentence.text}
            singleAttempt
            onComplete={onComplete}
            onNext={onNext}
            nextLabel={nextLabel}
          />
        </>
      );
    case "speak":
      return (
        <ShadowingExercise
          sentence={item.sentence}
          singleAttempt
          onComplete={onComplete}
          onUnavailable={onSpeakingUnavailable}
          onNext={onNext}
          nextLabel={nextLabel}
        />
      );
  }
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200">
      {children}
    </div>
  );
}

function Hearts({ hearts }: { hearts: number }) {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`${hearts} of ${MAX_HEARTS} hearts left`}
    >
      {Array.from({ length: MAX_HEARTS }, (_, i) => (
        <Heart
          key={i}
          size={26}
          className={`transition-all duration-300 ${
            i < hearts ? "text-red-500 fill-red-500" : "text-slate-300 scale-90"
          }`}
        />
      ))}
    </div>
  );
}

interface ResultsProps {
  passed: boolean;
  mistakes: number;
  /** Number of exercises the learner got to. */
  reached: number;
  stats: TestStats;
  onRestart: () => void;
}

const ordinal = (n: number) => {
  const tens = n % 100;
  const suffix =
    tens >= 11 && tens <= 13 ? "th" : ({ 1: "st", 2: "nd", 3: "rd" } as Record<number, string>)[n % 10] ?? "th";
  return `${n}${suffix}`;
};

/** A cheer for finishing a test, whatever the result. */
const completedMessage = (completed: number) =>
  completed === 1
    ? "🎉 Your first test is done. Keep it up!"
    : `🔥 That's your ${ordinal(completed)} test completed. Keep going!`;

function Results({ passed, mistakes, reached, stats, onRestart }: ResultsProps) {
  return (
    <main className="max-w-md mx-auto sm:max-w-2xl px-4 pb-16">
      <Card>
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          {passed ? (
            <Trophy size={56} className="text-amber-500 mb-4" />
          ) : (
            <HeartCrack size={56} className="text-red-500 mb-4" />
          )}
          <h2 className="text-3xl font-extrabold text-indigo-900 mb-2">
            {passed ? "Test passed!" : "Out of hearts"}
          </h2>
          <p className="text-slate-600 mb-6">
            {passed
              ? `You completed all ${TEST_LENGTH} exercises with ${mistakes} ${
                  mistakes === 1 ? "mistake" : "mistakes"
                }.`
              : `You reached exercise ${reached} of ${TEST_LENGTH}. This test doesn't count toward your score.`}
          </p>

          <p className="mb-4 font-semibold text-indigo-700">{completedMessage(stats.completed)}</p>

          <div className="w-full grid grid-cols-2 gap-3 mb-8">
            <div className="rounded-2xl bg-indigo-50 p-4">
              <p className="text-3xl font-extrabold text-indigo-700">{stats.passed}</p>
              <p className="text-sm font-semibold text-indigo-900">Tests passed</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-3xl font-extrabold text-slate-700">{stats.completed}</p>
              <p className="text-sm font-semibold text-slate-600">Tests completed</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={onRestart}
              className="flex items-center px-8 py-3 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all active:scale-95"
            >
              <RotateCcw size={20} className="mr-2" /> Take another test
            </button>
            <a
              href="/"
              className="flex items-center px-8 py-3 rounded-xl font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
            >
              Back to topics
            </a>
          </div>
        </div>
      </Card>
    </main>
  );
}
