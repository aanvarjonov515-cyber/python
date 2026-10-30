import React, { useState } from 'react';
import { UserProgress } from '../types';
import { LEVEL_LIST } from '../data/curriculum';
import { getExerciseForLevel } from '../services/exerciseGenerator';
import { ExerciseCard } from '../components/ExerciseCard';
import { Swords, RefreshCw, Sparkles } from 'lucide-react';

interface PracticeProps {
  progress: UserProgress;
  onSuccessExercise: (earnedXp: number, exerciseId: string) => void;
}

export const Practice: React.FC<PracticeProps> = ({ progress, onSuccessExercise }) => {
  const [selectedLevelId, setSelectedLevelId] = useState<number>(progress.currentLevel);
  const [exerciseSeed, setExerciseSeed] = useState<number>(0);

  const currentExercise = getExerciseForLevel(selectedLevelId, progress.completedExercises, 'Normal');

  const handleNextExercise = () => {
    setExerciseSeed(prev => prev + 1);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      <div className="rounded-3xl border border-sky-500/30 bg-slate-900/90 p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Swords className="h-5 w-5 text-amber-400" />
            <span>⚔️ Python Mashqlar Maydoni</span>
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Istalgan o‘rganilgan level bo‘yicha yangi va takrorlanmas mashqlarni bajarib XP yig‘ing!
          </p>
        </div>

        {/* Level selector dropdown */}
        <select
          value={selectedLevelId}
          onChange={(e) => setSelectedLevelId(Number(e.target.value))}
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-xs font-bold text-sky-400 outline-none focus:border-sky-500"
        >
          {LEVEL_LIST.filter(l => progress.unlockedLevels.includes(l.id)).map(lvl => (
            <option key={lvl.id} value={lvl.id}>
              {lvl.title}
            </option>
          ))}
        </select>
      </div>

      {/* Exercise Card Render */}
      <ExerciseCard
        key={`${selectedLevelId}_${exerciseSeed}`}
        exercise={currentExercise}
        onSuccess={(result) => {
          onSuccessExercise(result.earnedXp, currentExercise.id);
        }}
      />

      <div className="flex justify-center pt-2">
        <button
          onClick={handleNextExercise}
          className="flex items-center gap-2 rounded-2xl bg-slate-800 px-6 py-3 text-xs font-bold text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all"
        >
          <RefreshCw className="h-4 w-4 text-sky-400" />
          <span>Yangi Variant Generatsiya Qilish</span>
        </button>
      </div>
    </div>
  );
};
