import React from 'react';
import { UserProgress } from '../types';
import { ACHIEVEMENTS_LIST } from '../data/achievements';
import { Trophy, CheckCircle2, Lock } from 'lucide-react';

interface AchievementsProps {
  progress: UserProgress;
}

export const AchievementsPage: React.FC<AchievementsProps> = ({ progress }) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      <div className="rounded-3xl border border-amber-500/30 bg-slate-900/90 p-6 shadow-xl space-y-2">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <Trophy className="h-6 w-6 text-amber-400" />
          <span>🏆 Achievements va Badges</span>
        </h2>
        <p className="text-xs text-slate-300">
          O‘quv jarayonida qo‘lga kiritilgan barcha unvon va nishonlaringiz jamlanmasi.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ACHIEVEMENTS_LIST.map((ach) => {
          const isUnlocked = progress.achievements.includes(ach.id);

          return (
            <div
              key={ach.id}
              className={`rounded-2xl border p-5 flex flex-col justify-between space-y-3 transition-all ${
                isUnlocked
                  ? 'border-amber-500/40 bg-slate-900 text-amber-300 shadow-lg shadow-amber-500/10'
                  : 'border-slate-800 bg-slate-950/80 text-slate-600 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-3xl">
                  {ach.icon}
                </div>
                {isUnlocked ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                ) : (
                  <Lock className="h-5 w-5 text-slate-600" />
                )}
              </div>

              <div>
                <h4 className="font-bold text-white text-sm">{ach.title}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{ach.description}</p>
              </div>

              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                {isUnlocked ? 'Ochilgan 🎉' : 'Qulflangan 🔒'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
