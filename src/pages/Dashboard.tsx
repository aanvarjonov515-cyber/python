import React from 'react';
import { UserProgress } from '../types';
import { getUserRank } from '../services/storage';
import { LEVEL_LIST } from '../data/curriculum';
import { Play, Flame, Star, Trophy, Sparkles, BrainCircuit, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

interface DashboardProps {
  progress: UserProgress;
  onNavigateTab: (tab: any) => void;
  onSelectLevel: (levelId: number) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ progress, onNavigateTab, onSelectLevel }) => {
  const rank = getUserRank(progress.xp);
  const currentLvlInfo = LEVEL_LIST.find(l => l.id === progress.currentLevel) || LEVEL_LIST[0];
  const progressPercent = Math.round((progress.completedLessons.length / LEVEL_LIST.length) * 100);

  // Determine weak topics recommendation if any
  const weakTopicsEntries = Object.entries(progress.weakTopics);
  const topWeakTopic = weakTopicsEntries.sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-r from-sky-950 via-slate-900 to-indigo-950 p-6 md:p-8 shadow-2xl">
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3 py-1 text-xs font-bold text-sky-300 border border-sky-500/30">
            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
            <span>PyQuest Academy • Dasturlashni 0 dan o‘rganish</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white">
            Salom, {progress.userName}! 👋
          </h1>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Hozirda siz <span className="text-amber-300 font-bold">{currentLvlInfo.title}</span> bosqichidasiz. 
            Xatolardan qo‘rqmang — har bir xato yangi tajriba va XP degani!
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectLevel(progress.currentLevel)}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-600 to-amber-500 px-6 py-3 text-sm font-black text-white shadow-xl shadow-sky-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              <Play className="h-4 w-4 fill-white" />
              <span>Darsni Davom Ettirish</span>
            </button>

            <button
              onClick={() => onNavigateTab('daily')}
              className="flex items-center gap-2 rounded-2xl bg-amber-500/10 px-5 py-3 text-xs font-bold text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-all"
            >
              <Flame className="h-4 w-4 text-amber-400" />
              <span>Bugungi Challenge</span>
            </button>
          </div>
        </div>

        {/* Decorative Graphic */}
        <div className="absolute right-4 bottom-4 hidden md:block opacity-20 pointer-events-none text-9xl font-black select-none text-sky-400">
          🐍
        </div>
      </div>

      {/* Primary Overview Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Streak Card */}
        <div className="rounded-2xl border border-amber-500/20 bg-slate-900/80 p-5 shadow-lg space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">Ketma-ketlik (Streak)</span>
            <div className="rounded-xl bg-amber-500/10 p-2 text-amber-400">
              <Flame className="h-5 w-5 fill-amber-400" />
            </div>
          </div>
          <div className="text-2xl font-black text-amber-300">{progress.streak} KUN</div>
          <p className="text-[11px] text-slate-400">Har kuni kamida 1 ta mashq bajaring!</p>
        </div>

        {/* XP & Rank Card */}
        <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-5 shadow-lg space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">XP va Rank Unvoni</span>
            <div className="rounded-xl bg-indigo-500/10 p-2 text-indigo-400">
              <Star className="h-5 w-5 fill-indigo-400" />
            </div>
          </div>
          <div className="text-2xl font-black text-indigo-300">{progress.xp} XP</div>
          <p className="text-[11px] text-slate-400">{rank.rankTitle}</p>
        </div>

        {/* Progress Card */}
        <div className="rounded-2xl border border-sky-500/20 bg-slate-900/80 p-5 shadow-lg space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">Kurs Progressi</span>
            <div className="rounded-xl bg-sky-500/10 p-2 text-sky-400">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-sky-300">{progressPercent}%</div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400">{progress.completedLessons.length} / 32 Level tugatildi</p>
        </div>

        {/* Achievements Card */}
        <div className="rounded-2xl border border-amber-500/20 bg-slate-900/80 p-5 shadow-lg space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">Achievements</span>
            <div className="rounded-xl bg-amber-500/10 p-2 text-amber-400">
              <Trophy className="h-5 w-5 text-amber-400" />
            </div>
          </div>
          <div className="text-2xl font-black text-amber-300">{progress.achievements.length} ta Badges</div>
          <p className="text-[11px] text-slate-400">Yangi unvonlarni qulfdan chiqaring</p>
        </div>
      </div>

      {/* Weak Topic Recommendation Card */}
      {topWeakTopic && (
        <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-5 shadow-lg flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
              <BrainCircuit className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-purple-200">
                🧠 Bugun {topWeakTopic[0]} mavzusini yana bir bor mashq qilib ko‘ramizmi?
              </h4>
              <p className="text-xs text-purple-300/80">
                Ushbu mavzuda ko‘proq urinish bo‘lgan. Qayta takrorlash bilimni mustahkamlaydi!
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigateTab('review')}
            className="flex items-center gap-1.5 rounded-xl bg-purple-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:scale-105 transition-all"
          >
            <span>Takrorlash</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Course Game Map Quick View */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-base font-bold text-white">Kurs Xaritasi (Bosqichlar)</h3>
            <p className="text-xs text-slate-400">32 ta interaktiv Python level-lari</p>
          </div>
          <button
            onClick={() => onNavigateTab('course')}
            className="flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300"
          >
            <span>To‘liq xarita</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
          {LEVEL_LIST.slice(0, 16).map(lvl => {
            const isCompleted = progress.completedLessons.includes(lvl.id);
            const isCurrent = progress.currentLevel === lvl.id;
            const isUnlocked = progress.unlockedLevels.includes(lvl.id);

            return (
              <button
                key={lvl.id}
                onClick={() => isUnlocked && onSelectLevel(lvl.id)}
                disabled={!isUnlocked}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                  isCompleted
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:scale-105'
                    : isCurrent
                    ? 'border-sky-500 bg-sky-500/20 text-white font-bold ring-2 ring-sky-400 animate-pulse'
                    : isUnlocked
                    ? 'border-slate-700 bg-slate-800/80 text-slate-300 hover:scale-105'
                    : 'border-slate-800 bg-slate-950 text-slate-600 opacity-50 cursor-not-allowed'
                }`}
              >
                <span className="text-xs font-bold mb-1">LVL {lvl.id}</span>
                <span className="text-[10px] truncate max-w-[80px] font-medium">{lvl.title.split('—')[1] || lvl.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
