import React from 'react';
import { UserProgress } from '../types';
import { getUserRank } from '../services/storage';
import { LEVEL_LIST } from '../data/curriculum';
import { BarChart3, Star, Flame, Trophy, CheckCircle2, Award } from 'lucide-react';

interface ProgressProps {
  progress: UserProgress;
}

export const Progress: React.FC<ProgressProps> = ({ progress }) => {
  const rank = getUserRank(progress.xp);
  const totalLevels = LEVEL_LIST.length;
  const completedCount = progress.completedLessons.length;
  const percent = Math.round((completedCount / totalLevels) * 100);

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      <div className="rounded-3xl border border-sky-500/30 bg-slate-900/90 p-6 shadow-xl space-y-2">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-sky-400" />
          <span>📊 Kurs va O‘quvchi Progressi</span>
        </h2>
        <p className="text-xs text-slate-300">
          Sizning umumiy natijalaringiz, to‘plangan XP va bosqichlar tahlili.
        </p>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-sky-500/20 bg-slate-900/80 p-5 space-y-1">
          <span className="text-xs font-bold text-slate-400">Umumiy Natija</span>
          <div className="text-2xl font-black text-sky-300">{percent}%</div>
          <p className="text-[11px] text-slate-400">{completedCount} / {totalLevels} level</p>
        </div>

        <div className="rounded-2xl border border-amber-500/20 bg-slate-900/80 p-5 space-y-1">
          <span className="text-xs font-bold text-slate-400">Streak</span>
          <div className="text-2xl font-black text-amber-300">{progress.streak} Kun</div>
          <p className="text-[11px] text-slate-400">Davomiylik</p>
        </div>

        <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-5 space-y-1">
          <span className="text-xs font-bold text-slate-400">To‘plangan XP</span>
          <div className="text-2xl font-black text-indigo-300">{progress.xp} XP</div>
          <p className="text-[11px] text-slate-400">{rank.rankTitle}</p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-slate-900/80 p-5 space-y-1">
          <span className="text-xs font-bold text-slate-400">Bajarilgan Mashqlar</span>
          <div className="text-2xl font-black text-emerald-300">{progress.completedExercises.length} ta</div>
          <p className="text-[11px] text-slate-400">Unikal mashqlar</p>
        </div>
      </div>

      {/* Level Completion Breakdown List */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 space-y-4">
        <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
          Level-lar Bo‘yicha Progress Breakdown
        </h3>

        <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
          {LEVEL_LIST.map((lvl) => {
            const isDone = progress.completedLessons.includes(lvl.id);
            const isUnlocked = progress.unlockedLevels.includes(lvl.id);

            return (
              <div
                key={lvl.id}
                className={`flex items-center justify-between p-3.5 rounded-2xl border text-xs transition-all ${
                  isDone
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                    : isUnlocked
                    ? 'border-slate-800 bg-slate-950 text-slate-200'
                    : 'border-slate-800/50 bg-slate-950/50 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold font-mono">LVL {lvl.id}</span>
                  <div>
                    <div className="font-bold text-white">{lvl.title}</div>
                    <div className="text-[11px] text-slate-400">{lvl.subtitle}</div>
                  </div>
                </div>

                <div className="font-bold">
                  {isDone ? (
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" /> Bajarildi
                    </span>
                  ) : isUnlocked ? (
                    <span className="text-sky-400">Ochilgan</span>
                  ) : (
                    <span className="text-slate-600">Qulflangan</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
