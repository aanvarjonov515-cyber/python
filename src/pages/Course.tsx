import React from 'react';
import { UserProgress } from '../types';
import { LEVEL_LIST } from '../data/curriculum';
import { CheckCircle2, Lock, Play, Crown, Trophy, Sparkles } from 'lucide-react';

interface CourseProps {
  progress: UserProgress;
  onSelectLevel: (levelId: number) => void;
  onOpenCertificate: () => void;
}

export const Course: React.FC<CourseProps> = ({ progress, onSelectLevel, onOpenCertificate }) => {
  const isFinalCompleted = progress.completedLessons.includes(32);

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      {/* Header Banner */}
      <div className="rounded-3xl border border-sky-500/30 bg-slate-900/90 p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <span>🗺️ Python O‘quv Yo‘li (Game Map)</span>
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Har bir levelni bosqichma-bosqich tugatib, keyingi darajalarni oching.
          </p>
        </div>

        {isFinalCompleted && (
          <button
            onClick={onOpenCertificate}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-2.5 text-xs font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
          >
            <Trophy className="h-4 w-4" />
            <span>Sertifikatni Ko‘rish</span>
          </button>
        )}
      </div>

      {/* Game Path Node List */}
      <div className="relative py-4 space-y-4">
        {/* Central connecting line */}
        <div className="absolute left-1/2 top-10 bottom-10 w-1 -translate-x-1/2 bg-slate-800 -z-10" />

        {LEVEL_LIST.map((lvl, index) => {
          const isCompleted = progress.completedLessons.includes(lvl.id);
          const isCurrent = progress.currentLevel === lvl.id;
          const isUnlocked = progress.unlockedLevels.includes(lvl.id);
          const isBoss = lvl.isBossLevel;

          // Alternate left / right styling for game path effect
          const isEven = index % 2 === 0;

          return (
            <div
              key={lvl.id}
              className={`flex items-center ${isEven ? 'justify-start md:pr-1/2' : 'justify-end md:pl-1/2'}`}
            >
              <div
                onClick={() => isUnlocked && onSelectLevel(lvl.id)}
                className={`group relative flex w-full max-w-md items-center gap-4 rounded-3xl border p-4 shadow-xl cursor-pointer transition-all ${
                  isCompleted
                    ? 'border-emerald-500/40 bg-slate-900/95 text-emerald-300 hover:border-emerald-400 hover:scale-[1.02]'
                    : isCurrent
                    ? 'border-sky-500 bg-slate-900 text-white shadow-sky-500/20 ring-2 ring-sky-400 animate-pulse hover:scale-[1.02]'
                    : isUnlocked
                    ? 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-sky-500 hover:scale-[1.02]'
                    : 'border-slate-800 bg-slate-950/80 text-slate-600 opacity-60 cursor-not-allowed'
                }`}
              >
                {/* Node Icon Circle */}
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl font-black text-sm shadow-md ${
                    isCompleted
                      ? 'bg-emerald-500 text-slate-950'
                      : isCurrent
                      ? 'bg-sky-500 text-slate-950 animate-bounce'
                      : isUnlocked
                      ? 'bg-slate-800 text-slate-300'
                      : 'bg-slate-900 text-slate-600'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-6 w-6 text-slate-950" />
                  ) : !isUnlocked ? (
                    <Lock className="h-5 w-5 text-slate-600" />
                  ) : isBoss ? (
                    <Crown className="h-6 w-6 text-amber-300" />
                  ) : (
                    <span>L{lvl.id}</span>
                  )}
                </div>

                {/* Level Title & Subtitle */}
                <div className="flex-1 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {lvl.category}
                    </span>
                    {isBoss && (
                      <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-bold text-amber-300 border border-amber-500/30">
                        👑 Boss Challenge
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    {lvl.title}
                  </h3>
                  <p className="text-xs text-slate-400 truncate mt-0.5">{lvl.subtitle}</p>
                </div>

                {/* Play / Lock Arrow */}
                <div className="flex-shrink-0">
                  {isUnlocked && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all">
                      <Play className="h-4 w-4 fill-current" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Final Completion Node */}
        <div className="flex justify-center pt-8">
          <div
            onClick={isFinalCompleted ? onOpenCertificate : undefined}
            className={`flex flex-col items-center justify-center p-8 rounded-3xl border-2 text-center max-w-sm transition-all ${
              isFinalCompleted
                ? 'border-amber-500 bg-slate-900/90 text-amber-300 shadow-2xl cursor-pointer hover:scale-105'
                : 'border-slate-800 bg-slate-950 text-slate-600 opacity-60'
            }`}
          >
            <div className="text-5xl mb-3">🏆</div>
            <h3 className="text-lg font-black text-white">FINAL CERTIFICATE</h3>
            <p className="text-xs text-slate-400 mt-1">
              Barcha 32 ta levelni muvaffaqiyatli yakunlaganingizda ushbu sertifikat ochiladi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
