import { useState, type ReactNode } from "react";
import { BookOpen, BookText, Edit3, Mic, ScanSearch } from "lucide-react";
import type { GrammarTopic } from "../types/grammar";
import StudySection from "./sections/StudySection";
import ReadSection from "./sections/ReadSection";
import SpeakSection from "./sections/SpeakSection";
import WriteSection from "./sections/WriteSection";
import StructureSection from "./sections/StructureSection";

type Tab = "study" | "read" | "structures" | "speak" | "write";

const TABS: readonly { id: Tab; label: string; icon: ReactNode }[] = [
  { id: "study", label: "Study", icon: <BookOpen size={18} /> },
  { id: "read", label: "Read", icon: <BookText size={18} /> },
  { id: "structures", label: "Structures", icon: <ScanSearch size={18} /> },
  { id: "speak", label: "Speak", icon: <Mic size={18} /> },
  { id: "write", label: "Write", icon: <Edit3 size={18} /> },
];

export interface GrammarMasterProps {
  topics: readonly GrammarTopic[];
  /** Topic selected on first render; defaults to the first topic. */
  initialTopicId?: string;
}

export default function GrammarMaster({
  topics,
  initialTopicId,
}: GrammarMasterProps) {
  const [activeTab, setActiveTab] = useState<Tab>("study");
  const [activeTopicId, setActiveTopicId] = useState(
    () => initialTopicId ?? topics[0]?.id ?? "",
  );

  const topic = topics.find((t) => t.id === activeTopicId) ?? topics[0];

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        No topics available.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 shadow-md rounded-b-3xl mb-6 max-w-md mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-5xl flex flex-col items-center">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          Grammar Master
        </h1>
        <p className="text-indigo-100 font-medium">{topic.subtitle}</p>
        {topics.length > 1 && (
          <TopicSelector
            topics={topics}
            value={topic.id}
            onChange={setActiveTopicId}
          />
        )}
      </header>

      {/* Main Content Area */}
      <main className="max-w-md mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-5xl px-4 pb-32 sm:pb-24">
        {/* Navigation Tabs: fixed bottom bar on mobile (thumb reach), inline pill bar from sm up. */}
        <nav
          aria-label="Sections"
          className="fixed inset-x-0 bottom-0 z-20 flex justify-around gap-1 border-t border-slate-200 bg-white/95 px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-2px_10px_rgba(0,0,0,0.05)] backdrop-blur sm:static sm:z-auto sm:mb-8 sm:justify-center sm:gap-2 sm:rounded-full sm:border sm:border-slate-100 sm:bg-white sm:p-2 sm:shadow-sm sm:backdrop-blur-none"
        >
          {TABS.map((tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              icon={tab.icon}
              label={tab.label}
            />
          ))}
        </nav>

        {/* Keyed by topic + tab so exercise progress resets when either changes. */}
        <div key={`${topic.id}-${activeTab}`} className="animate-fade-in-up">
          {activeTab === "study" && <StudySection goals={topic.goals} />}
          {activeTab === "read" && <ReadSection questions={topic.reading} />}
          {activeTab === "structures" && (
            <StructureSection
              exercises={topic.structures}
              goals={topic.goals}
            />
          )}
          {activeTab === "speak" && (
            <SpeakSection sentences={topic.speaking} />
          )}
          {activeTab === "write" && (
            <WriteSection sentences={topic.writing} goals={topic.goals} />
          )}
        </div>
      </main>
    </div>
  );
}

// --- SUBCOMPONENTS ---

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}

function TabButton({ active, onClick, icon, label }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-1 py-1.5 font-semibold transition-all duration-300 sm:flex-none sm:flex-row sm:gap-2 sm:rounded-full sm:px-5 sm:py-2.5 ${
        active
          ? "bg-indigo-600 text-white shadow-md sm:scale-105"
          : "bg-transparent text-slate-500 hover:bg-indigo-50 hover:text-indigo-600"
      }`}
    >
      {icon}
      <span className="max-w-full truncate text-[11px] leading-none sm:text-base sm:leading-normal">
        {label}
      </span>
    </button>
  );
}

interface TopicSelectorProps {
  topics: readonly GrammarTopic[];
  value: string;
  onChange: (topicId: string) => void;
}

function TopicSelector({ topics, value, onChange }: TopicSelectorProps) {
  return (
    <label className="mt-4 flex items-center gap-2 text-sm text-indigo-100">
      <span className="font-semibold">Topic</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white outline-none focus:ring-2 focus:ring-white/60 [&>option]:text-slate-800"
      >
        {topics.map((t) => (
          <option key={t.id} value={t.id}>
            {t.title}
          </option>
        ))}
      </select>
    </label>
  );
}
