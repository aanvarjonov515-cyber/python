import React from 'react';
import { UserProgress } from '../types';
import { getUserRank } from '../services/storage';
import { Flame, Star, Trophy, Search, User, Sparkles } from 'lucide-react';

interface HeaderProps {
  progress: UserProgress;
  onOpenSearch: () => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({ progress, onOpenSearch, onOpenProfile }) => {
  const rank = getUserRank(progress.xp);

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 backdrop-blur-md md:px-6">
      {/* Left: Search Trigger & App Brand Mobile */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 rounded-xl bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-700/80 hover:text-white transition-all border border-slate-700/50"
        >
          <Search className="h-4 w-4 text-slate-400" />
          <span className="hidden sm:inline">Qidirish... (Ctrl+K)</span>
          <span className="sm:hidden">Qidirish</span>
        </button>
      </div>

      {/* Right Stats Badges */}
      <div className="flex items-center gap-3">
        {/* Streak Counter */}
        <div className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-amber-400 border border-amber-500/20 font-bold text-xs sm:text-sm">
          <Flame className="h-4 w-4 fill-amber-500 text-amber-500 animate-pulse" />
          <span>{progress.streak} kun</span>
        </div>

        {/* XP Counter */}
        <div className="flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-indigo-300 border border-indigo-500/20 font-bold text-xs sm:text-sm">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{progress.xp} XP</span>
        </div>

        {/* Rank Badge */}
        <div className="hidden md:flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-300 border border-cyan-500/20 text-xs font-medium">
          <Trophy className="h-3.5 w-3.5 text-cyan-400" />
          <span>{rank.rankTitle.split('—')[1] || rank.rankTitle}</span>
        </div>

        {/* User Profile Button */}
        <button
          onClick={onOpenProfile}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 hover:scale-105 active:scale-95 transition-all"
          title="Profil va Sozlamalar"
        >
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};
