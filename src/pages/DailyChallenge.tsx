import React, { useState } from 'react';
import { UserProgress } from '../types';
import { getExerciseForLevel } from '../services/exerciseGenerator';
import { ExerciseCard } from '../components/ExerciseCard';
import { Flame, CheckCircle2, Award } from 'lucide-react';

interface DailyChallengeProps {
  progress: UserProgress;
  onSuccessDaily: (earnedXp: number, exerciseId: string) => void;
}

export const DailyChallenge: React.FC<DailyChallengeProps> = ({ progress, onSuccessDaily }) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const isAlreadyDoneToday = progress.dailyChallengeLastCompleted === todayStr;

  const [challengeDone, setChallengeDone] = useState<boolean>(isAlreadyDoneToday);

  // Generate challenge based on highest unlocked level
  const targetLevel = Math.max(0, ...progress.unlockedLevels);
  const dailyExercise = getExerciseForLevel(targetLevel, progress.completedExercises, 'Hard');

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            <Flame className="h-4 w-4 fill-amber-400" />
            <span>Kunlik Maxsus Topshiriq</span>
          </div>
          <h2 className="text-xl font-black text-white">🔥 Bugungi Python Challenge</h2>
          <p className="text-xs text-slate-300 mt-1">
            Siz hozirgacha o‘rgangan Level {targetLevel} mavzulari bo‘yicha bugungi challenge (+50 Bonus XP)
          </p>
        </div>

        <div className="rounded-2xl bg-amber-500/10 px-4 py-2 border border-amber-500/30 text-amber-300 text-xs font-bold">
          {progress.streak} Kunlik Streak 🔥
        </div>
      </div>

      {challengeDone ? (
        <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center space-y-4">
          <CheckCircle2 className="h-16 w-16 text-emerald-400 mx-auto animate-bounce" />
          <h3 className="text-xl font-black text-white">Bugungi Challenge Bajarildi! 🎉</h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Ajoyib! Bugungi streak va +50 Bonus XP hisobingizga qo‘shildi. Ertaga yangi topshiriq bilan davom etamiz!
          </p>
        </div>
      ) : (
        <ExerciseCard
          exercise={dailyExercise}
          onSuccess={(result) => {
            setChallengeDone(true);
            onSuccessDaily(result.earnedXp + 30, dailyExercise.id);
          }}
        />
      )}
    </div>
  );
};
