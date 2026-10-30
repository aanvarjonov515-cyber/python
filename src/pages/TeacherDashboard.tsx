import React, { useState } from 'react';
import { UserProgress, GradeWeights } from '../types';
import { Users, GraduationCap, BarChart3, AlertCircle, Save, Sliders, CheckCircle2 } from 'lucide-react';

interface TeacherDashboardProps {
  progress: UserProgress;
  onUpdateWeights: (weights: GradeWeights) => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ progress, onUpdateWeights }) => {
  const [weights, setWeights] = useState<GradeWeights>(progress.gradeWeights || {
    quizWeight: 20,
    codingWeight: 35,
    debugWeight: 15,
    codeReadingWeight: 10,
    projectWeight: 20
  });

  const [savedMsg, setSavedMsg] = useState<boolean>(false);

  // Calculate Weighted Grade based on user progress stats
  const totalCompleted = progress.completedLessons.length;
  const quizScore = Math.min(100, Math.round((totalCompleted / 32) * 100));
  const codingScore = Math.min(100, Math.round((progress.completedExercises.length / 50) * 100));
  const debugScore = Math.min(100, Math.round((progress.xp / 2000) * 100));
  const codeReadingScore = Math.min(100, Math.round((progress.completedLessons.length / 32) * 90));
  const projectScore = Math.min(100, Math.round((progress.completedLessons.length / 32) * 85));

  const weightedTotal = Math.round(
    (quizScore * weights.quizWeight +
      codingScore * weights.codingWeight +
      debugScore * weights.debugWeight +
      codeReadingScore * weights.codeReadingWeight +
      projectScore * weights.projectWeight) /
      100
  );

  const handleSaveWeights = () => {
    onUpdateWeights(weights);
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      <div className="rounded-3xl border border-indigo-500/30 bg-slate-900/90 p-6 shadow-xl space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-indigo-400" />
            <span>👩‍🏫 O‘qituvchi va Analytics Paneli (Teacher Dashboard)</span>
          </h2>
          <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-bold text-indigo-300 border border-indigo-500/30">
            Teacher Mode #73
          </span>
        </div>
        <p className="text-xs text-slate-300">
          Talabalarning umumiy natijalari, o‘rtacha progress, eng ko‘p uchraydigan xatolar va baholash salmog‘ini sozlash.
        </p>
      </div>

      {/* Cohort Summary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Aktiv Talabalar</span>
          <div className="text-2xl font-black text-white">1 ta (Shaxsiy)</div>
          <p className="text-[10px] text-slate-500">Guruh bo‘yicha statistika</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">O‘rtacha Progress</span>
          <div className="text-2xl font-black text-sky-400">
            {Math.round((progress.completedLessons.length / 32) * 100)}%
          </div>
          <p className="text-[10px] text-slate-500">Kurs bo‘yicha o‘zlashtirish</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Yakuniy Ball</span>
          <div className="text-2xl font-black text-emerald-400">{weightedTotal} / 100</div>
          <p className="text-[10px] text-slate-500">Baholash tizimi bo‘yicha</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Uchragan Xatolar</span>
          <div className="text-2xl font-black text-rose-400">
            {Object.keys(progress.misconceptionCounts).length} turdagi
          </div>
          <p className="text-[10px] text-slate-500">Diagnostika va review</p>
        </div>
      </div>

      {/* Weighted Grade Distribution Settings (#74) */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sliders className="h-4 w-4 text-sky-400" />
              <span>Baholash Mezonlari va Salmog‘i (Weighted Grading)</span>
            </h3>
            <p className="text-xs text-slate-400">O‘qituvchi baholash foizlarini guruh uchun sozlashi mumkin:</p>
          </div>
          <button
            onClick={handleSaveWeights}
            className="flex items-center gap-1.5 rounded-xl bg-sky-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:scale-105 transition-all"
          >
            <Save className="h-4 w-4" />
            <span>Saqlash</span>
          </button>
        </div>

        {savedMsg && (
          <div className="rounded-xl bg-emerald-500/20 p-3 text-emerald-300 text-xs font-bold text-center border border-emerald-500/30">
            Baholash salmog‘i saqlandi! ✅
          </div>
        )}

        <div className="space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-300 font-medium">Quiz (Savol-Javoblar): {weights.quizWeight}%</span>
            <input
              type="range"
              min="0"
              max="50"
              value={weights.quizWeight}
              onChange={(e) => setWeights({ ...weights, quizWeight: Number(e.target.value) })}
              className="w-48 accent-sky-400"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-300 font-medium">Coding Exercises (Kod yozish): {weights.codingWeight}%</span>
            <input
              type="range"
              min="0"
              max="60"
              value={weights.codingWeight}
              onChange={(e) => setWeights({ ...weights, codingWeight: Number(e.target.value) })}
              className="w-48 accent-emerald-400"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-300 font-medium">Debugging (Xatoni topish): {weights.debugWeight}%</span>
            <input
              type="range"
              min="0"
              max="30"
              value={weights.debugWeight}
              onChange={(e) => setWeights({ ...weights, debugWeight: Number(e.target.value) })}
              className="w-48 accent-amber-400"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-300 font-medium">Code Reading (Kodni tushunish): {weights.codeReadingWeight}%</span>
            <input
              type="range"
              min="0"
              max="30"
              value={weights.codeReadingWeight}
              onChange={(e) => setWeights({ ...weights, codeReadingWeight: Number(e.target.value) })}
              className="w-48 accent-purple-400"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-300 font-medium">Projects (Amaliy loyihalar): {weights.projectWeight}%</span>
            <input
              type="range"
              min="0"
              max="50"
              value={weights.projectWeight}
              onChange={(e) => setWeights({ ...weights, projectWeight: Number(e.target.value) })}
              className="w-48 accent-indigo-400"
            />
          </div>
        </div>
      </div>

      {/* Misconception Analytics */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-3 shadow-xl">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-amber-400" />
          <span>Eng Ko‘p Uchraydigan Xatolar (Misconceptions)</span>
        </h3>

        {Object.keys(progress.misconceptionCounts).length === 0 ? (
          <p className="text-xs text-slate-500 italic">Hali statistikada xatolar ro‘yxatdan o‘tmadi.</p>
        ) : (
          <div className="space-y-2">
            {Object.entries(progress.misconceptionCounts).map(([key, count], idx) => (
              <div key={idx} className="flex items-center justify-between rounded-xl bg-slate-950 p-3 text-xs border border-slate-800">
                <span className="font-mono text-amber-300">{key}</span>
                <span className="font-bold text-slate-400">{count} marta qaytarilgan</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
