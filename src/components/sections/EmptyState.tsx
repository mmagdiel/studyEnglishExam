import { AlertCircle } from "lucide-react";
import type { Skill } from "../../types/grammar";

interface EmptyStateProps {
  skill: Skill;
}

/** Shown while a topic has no exercises yet for a given skill. */
export default function EmptyState({ skill }: EmptyStateProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 shadow-sm border border-slate-200 flex flex-col items-center text-center text-slate-500">
      <AlertCircle size={32} className="mb-3 text-indigo-400" />
      <p className="font-medium">
        No {skill} exercises for this topic yet.
      </p>
    </div>
  );
}
