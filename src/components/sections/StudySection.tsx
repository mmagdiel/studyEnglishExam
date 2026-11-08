import { BookOpen, ChevronRight } from "lucide-react";
import type { CommunicativeGoal } from "../../types/grammar";

interface StudySectionProps {
  goals: readonly CommunicativeGoal[];
}

export default function StudySection({ goals }: StudySectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6 px-2">
        <BookOpen className="text-indigo-600" size={28} />
        <h2 className="text-2xl font-bold text-indigo-900">Grammar Notes</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              {goal.title} ({goal.translation})
            </h3>
            <p className="text-slate-600 mb-4 text-sm md:text-base">
              {goal.description}
            </p>
            <div className="bg-indigo-50 p-4 rounded-xl space-y-2 border border-indigo-100">
              {goal.examples.map((ex) => (
                <div key={ex} className="flex items-start">
                  <ChevronRight
                    size={18}
                    className="text-indigo-400 mt-1 mr-2 flex-shrink-0"
                  />
                  <p className="font-medium text-slate-700 italic text-sm md:text-base">
                    "{ex}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
