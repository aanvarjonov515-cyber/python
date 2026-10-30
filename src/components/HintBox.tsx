import React, { useState } from 'react';
import { HelpCircle, ChevronRight, Eye, KeyRound } from 'lucide-react';

interface HintBoxProps {
  hints: [string, string, string];
  solutionCode?: string;
  onHintUsed: (level: number) => void;
}

export const HintBox: React.FC<HintBoxProps> = ({ hints, solutionCode, onHintUsed }) => {
  const [currentHintIndex, setCurrentHintIndex] = useState<number>(0);
  const [showSolution, setShowSolution] = useState<boolean>(false);

  const handleNextHint = () => {
    if (currentHintIndex < 3) {
      const next = currentHintIndex + 1;
      setCurrentHintIndex(next);
      onHintUsed(next);
    }
  };

  return (
    <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
          <HelpCircle className="h-4 w-4" />
          <span>3-Bosqichli Yordam (Hint)</span>
        </div>
        <span className="text-xs text-amber-400/80 font-medium">
          Bosqich: {currentHintIndex} / 3
        </span>
      </div>

      {/* Hints List */}
      <div className="space-y-2 text-xs leading-relaxed">
        {currentHintIndex >= 1 && (
          <div className="rounded-lg bg-slate-900/80 p-3 border border-amber-500/30 text-amber-200">
            <span className="font-bold text-amber-400">1-Yo‘nalish: </span>
            {hints[0]}
          </div>
        )}

        {currentHintIndex >= 2 && (
          <div className="rounded-lg bg-slate-900/80 p-3 border border-amber-500/40 text-amber-200">
            <span className="font-bold text-amber-400">2-Python Elementi: </span>
            {hints[1]}
          </div>
        )}

        {currentHintIndex >= 3 && (
          <div className="rounded-lg bg-slate-900/80 p-3 border border-amber-500/50 text-amber-200 font-mono">
            <span className="font-bold text-amber-400 font-sans">3-Kod Namuna: </span>
            {hints[2]}
          </div>
        )}

        {showSolution && solutionCode && (
          <div className="rounded-lg bg-emerald-950/80 p-3 border border-emerald-500/50 text-emerald-300 font-mono">
            <span className="font-bold text-emerald-400 font-sans block mb-1">To‘liq Yechim Kod:</span>
            <pre className="whitespace-pre-wrap">{solutionCode}</pre>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        {currentHintIndex < 3 && (
          <button
            onClick={handleNextHint}
            className="flex items-center gap-1.5 rounded-lg bg-amber-500/20 px-3 py-1.5 text-xs font-semibold text-amber-300 hover:bg-amber-500/30 border border-amber-500/30 transition-all"
          >
            <span>{currentHintIndex === 0 ? 'Yordam olish (Hint 1)' : `Keyingi hint (${currentHintIndex + 1}-bosqich)`}</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        )}

        {currentHintIndex >= 3 && !showSolution && solutionCode && (
          <button
            onClick={() => setShowSolution(true)}
            className="flex items-center gap-1.5 rounded-lg bg-indigo-500/20 px-3 py-1.5 text-xs font-semibold text-indigo-300 hover:bg-indigo-500/30 border border-indigo-500/30 transition-all"
          >
            <KeyRound className="h-3.5 w-3.5" />
            <span>Yechimni ko‘rsat</span>
          </button>
        )}
      </div>
    </div>
  );
};
