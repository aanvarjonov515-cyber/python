import React from 'react';
import { AlertCircle, ArrowRight, BookOpen } from 'lucide-react';

interface PrerequisiteWarningProps {
  prerequisites: { levelId: number; title: string }[];
  onReviewPrerequisites: (levelId: number) => void;
  onContinueAnyway: () => void;
}

export const PrerequisiteWarning: React.FC<PrerequisiteWarningProps> = ({
  prerequisites,
  onReviewPrerequisites,
  onContinueAnyway
}) => {
  return (
    <div className="rounded-2xl border border-amber-500/40 bg-slate-900/95 p-5 shadow-2xl space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
          <AlertCircle className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Kerakli Oldingi Bilimlar (Prerequisites)</h3>
          <p className="text-xs text-slate-300">
            Ushbu darsni boshlashdan oldin quyidagi mavzularni yaxshi egallash tavsiya etiladi:
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {prerequisites.map((p) => (
          <div
            key={p.levelId}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-sky-400" />
              <span className="font-bold text-white">{p.title}</span>
            </div>
            <button
              onClick={() => onReviewPrerequisites(p.levelId)}
              className="rounded-lg bg-sky-500/20 px-3 py-1 text-[11px] font-bold text-sky-300 hover:bg-sky-500/30 transition-all"
            >
              Takrorlash
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          onClick={onContinueAnyway}
          className="flex items-center gap-1.5 rounded-xl bg-slate-800 px-4 py-2 text-xs font-bold text-slate-300 hover:bg-slate-700 transition-all"
        >
          <span>Baribir davom etish</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
