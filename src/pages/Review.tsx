import React from 'react';
import { UserProgress } from '../types';
import { getExerciseForLevel } from '../services/exerciseGenerator';
import { ExerciseCard } from '../components/ExerciseCard';
import { BrainCircuit, CheckCircle2, Sparkles } from 'lucide-react';

interface ReviewProps {
  progress: UserProgress;
  onSuccessReview: (earnedXp: number, exerciseId: string) => void;
}

export const Review: React.FC<ReviewProps> = ({ progress, onSuccessReview }) => {
  const weakEntries = Object.entries(progress.weakTopics);

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      <div className="rounded-3xl border border-purple-500/30 bg-slate-900/90 p-6 shadow-xl space-y-2">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <BrainCircuit className="h-6 w-6 text-purple-400" />
          <span>🧠 Aqlli Takrorlash Tizimi (Review System)</span>
        </h2>
        <p className="text-xs text-slate-300">
          Ushbu sahifada ilgarigi darslarda ko‘proq xato qilingan mavzular qayta ishlanadi va xotirada mustahkamlanadi.
        </p>
      </div>

      {weakEntries.length === 0 ? (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center space-y-3">
          <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto" />
          <h3 className="text-base font-bold text-white">Sizda hali qiynalgan mavzu yo‘q!</h3>
          <p className="text-xs text-slate-400">
            Darslar va mashqlarni davom ettiring. Tizim avtomati zaifroq joylarni aniqlab shu yerga takrorlash uchun qo‘shadi.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {weakEntries.map(([topic, count], idx) => (
              <div key={idx} className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm capitalize">{topic}</h4>
                  <p className="text-[11px] text-purple-300">{count} marta mashq qilingan</p>
                </div>
                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-bold text-purple-300 border border-purple-500/30">
                  Takrorlash
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <h3 className="text-sm font-bold text-white mb-3">Tavsiya Etilayotgan Takrorlash Mashqi:</h3>
            <ExerciseCard
              exercise={getExerciseForLevel(progress.currentLevel, progress.completedExercises, 'Normal')}
              onSuccess={(result) => onSuccessReview(result.earnedXp, 'review_ex')}
            />
          </div>
        </div>
      )}
    </div>
  );
};
