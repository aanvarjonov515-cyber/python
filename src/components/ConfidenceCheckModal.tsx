import React, { useState } from 'react';
import { ConfidenceRating } from '../types';
import { HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ConfidenceCheckModalProps {
  levelTitle: string;
  actualScorePercent: number;
  onSubmit: (rating: ConfidenceRating) => void;
}

export const ConfidenceCheckModal: React.FC<ConfidenceCheckModalProps> = ({
  levelTitle,
  actualScorePercent,
  onSubmit
}) => {
  const [selectedRating, setSelectedRating] = useState<ConfidenceRating | null>(null);

  const options: { id: ConfidenceRating; label: string; icon: string }[] = [
    { id: 'confused', label: '😕 Hali tushunmadim', icon: '😕' },
    { id: 'basic', label: '🙂 Biroz tushundim', icon: '🙂' },
    { id: 'understood', label: '😎 Tushundim', icon: '😎' },
    { id: 'mastered', label: '🔥 Boshqalarga ham tushuntira olaman', icon: '🔥' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center shadow-2xl space-y-5">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/20 text-3xl">
          🤔
        </div>

        <div>
          <h3 className="text-lg font-black text-white">Ishonch Tekshiruvi (Confidence Check)</h3>
          <p className="text-xs text-slate-300 mt-1">
            <span className="text-sky-400 font-bold">{levelTitle}</span> mavzusini qanchalik tushundingiz?
          </p>
        </div>

        <div className="space-y-2 text-left">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedRating(opt.id)}
              className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs transition-all ${
                selectedRating === opt.id
                  ? 'border-sky-500 bg-sky-500/15 text-sky-200 font-bold'
                  : 'border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              <span>{opt.label}</span>
              {selectedRating === opt.id && <CheckCircle2 className="h-4 w-4 text-sky-400" />}
            </button>
          ))}
        </div>

        <button
          onClick={() => selectedRating && onSubmit(selectedRating)}
          disabled={!selectedRating}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 py-3 text-xs font-bold text-white shadow-lg disabled:opacity-50 transition-all"
        >
          <span>Davom etish</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
