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
  /** The topic being practiced; the page header (title, back link) lives in the Astro page. */
  topic: GrammarTopic;
}

export default function GrammarMaster({ topic }: GrammarMasterProps) {
  const [activeTab, setActiveTab] = useState<Tab>("study");

  return (
    <div className="font-sans text-slate-800">
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

        {/* Keyed by tab so exercise progress resets when switching sections. */}
        <div key={activeTab} className="animate-fade-in-up">
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
