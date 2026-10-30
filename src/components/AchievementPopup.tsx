import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Achievement } from '../types';
import { Trophy, X } from 'lucide-react';

interface AchievementPopupProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export const AchievementPopup: React.FC<AchievementPopupProps> = ({ achievement, onClose }) => {
  useEffect(() => {
    if (achievement) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [achievement]);

  if (!achievement) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex max-w-sm items-center gap-4 rounded-2xl border border-amber-500/40 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-md animate-bounce">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-500 text-2xl shadow-lg shadow-amber-500/20">
        {achievement.icon}
      </div>

      <div className="flex-1 pr-2">
        <span className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-amber-400 uppercase">
          <Trophy className="h-3 w-3" /> Yangi Achievement!
        </span>
        <h4 className="text-sm font-bold text-white">{achievement.title}</h4>
        <p className="text-xs text-slate-300 line-clamp-2">{achievement.description}</p>
      </div>

      <button
        onClick={onClose}
        className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
