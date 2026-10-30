import React from 'react';
import {
  LayoutDashboard,
  Map,
  Swords,
  Flame,
  BrainCircuit,
  Trophy,
  BarChart3,
  History,
  FileCode2,
  Settings,
  Sparkles,
  BookOpen,
  ShieldCheck,
  GraduationCap,
  FolderGit2
} from 'lucide-react';

export type PageTab =
  | 'dashboard'
  | 'course'
  | 'projects'
  | 'cyberlab'
  | 'portfolio'
  | 'practice'
  | 'daily'
  | 'review'
  | 'checkpoint'
  | 'achievements'
  | 'progress'
  | 'history'
  | 'cheatsheet'
  | 'teacher'
  | 'settings';

interface SidebarProps {
  activeTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onSelectTab }) => {
  const menuItems: { id: PageTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
    { id: 'course', label: 'Kurs Xaritasi', icon: <Map className="h-5 w-5" /> },
    { id: 'projects', label: 'Real Projects', icon: <FolderGit2 className="h-5 w-5 text-sky-400" />, badge: 'Real' },
    { id: 'cyberlab', label: 'Cyber Lab', icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />, badge: 'Security' },
    { id: 'portfolio', label: 'My Portfolio', icon: <FolderGit2 className="h-5 w-5 text-amber-400" /> },
    { id: 'practice', label: 'Mashqlar', icon: <Swords className="h-5 w-5" /> },
    { id: 'daily', label: 'Daily Challenge', icon: <Flame className="h-5 w-5 text-amber-400" />, badge: 'Kunlik' },
    { id: 'review', label: 'Review', icon: <BrainCircuit className="h-5 w-5" /> },
    { id: 'checkpoint', label: 'Checkpoint', icon: <ShieldCheck className="h-5 w-5 text-sky-400" /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy className="h-5 w-5" /> },
    { id: 'progress', label: 'Progress', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'history', label: 'Tarix', icon: <History className="h-5 w-5" /> },
    { id: 'cheatsheet', label: 'Cheat Sheet', icon: <FileCode2 className="h-5 w-5" /> },
    { id: 'teacher', label: 'Teacher Mode', icon: <GraduationCap className="h-5 w-5 text-indigo-400" />, badge: 'Analytics' },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-slate-800 bg-slate-900/95 p-4 text-slate-300 select-none">
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-3 py-4 mb-4 border-b border-slate-800">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-sky-500 to-indigo-600 shadow-lg shadow-sky-500/20 text-2xl font-black">
            🐍
          </div>
          <div>
            <h1 className="text-lg font-black tracking-wider text-white bg-gradient-to-r from-sky-400 to-amber-300 bg-clip-text text-transparent">
              PyQuest
            </h1>
            <p className="text-[10px] font-medium text-slate-400">Python Academy 0-100</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`group flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30 font-semibold shadow-inner'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`transition-transform duration-200 ${isActive ? 'scale-110 text-sky-400' : 'group-hover:scale-110'}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-500/30">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer info */}
        <div className="mt-auto border-t border-slate-800/80 pt-3 px-2 text-center text-[11px] text-slate-500">
          PyQuest Academy v1.0 • O‘zbekcha
        </div>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-around border-t border-slate-800 bg-slate-900/95 px-2 backdrop-blur-md lg:hidden">
        {menuItems.slice(0, 5).map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-col items-center justify-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium transition-all ${
                isActive ? 'text-sky-400 font-bold scale-105' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={isActive ? 'text-sky-400' : ''}>{item.icon}</div>
              <span className="truncate max-w-[64px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
