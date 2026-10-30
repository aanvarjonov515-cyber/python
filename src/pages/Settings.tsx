import React, { useState } from 'react';
import { UserProgress } from '../types';
import { resetProgress } from '../services/storage';
import { Settings as SettingsIcon, Save, RotateCcw, Volume2, VolumeX, User, Sparkles } from 'lucide-react';

interface SettingsProps {
  progress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
}

export const SettingsPage: React.FC<SettingsProps> = ({ progress, onUpdateProgress }) => {
  const [userName, setUserName] = useState<string>(progress.userName);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(progress.settings.soundEnabled);
  const [savedMsg, setSavedMsg] = useState<boolean>(false);

  const handleSave = () => {
    const updated: UserProgress = {
      ...progress,
      userName,
      settings: {
        ...progress.settings,
        soundEnabled
      }
    };
    onUpdateProgress(updated);
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2500);
  };

  const handleReset = () => {
    if (window.confirm('Barcha progress va to‘plangan XP-ni nollashni xohlaysizmi? Bu amalni ortga qaytarib bo‘lmaydi!')) {
      const fresh = resetProgress();
      onUpdateProgress(fresh);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto pb-16">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl space-y-2">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <SettingsIcon className="h-6 w-6 text-sky-400" />
          <span>⚙ Sozlamalar (Settings)</span>
        </h2>
        <p className="text-xs text-slate-300">
          Profil va dastur parametrlarini sozlash.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 space-y-5 shadow-xl">
        {/* Name Input */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
            <User className="h-4 w-4 text-sky-400" />
            <span>Talaba Ismi:</span>
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm font-bold text-white outline-none focus:border-sky-500 transition-all"
          />
        </div>

        {/* Sound toggle */}
        <div className="flex items-center justify-between border-t border-b border-slate-800 py-4">
          <div className="flex items-center gap-3">
            {soundEnabled ? <Volume2 className="h-5 w-5 text-emerald-400" /> : <VolumeX className="h-5 w-5 text-slate-500" />}
            <div>
              <div className="text-sm font-bold text-white">Ovoz va Effektlar</div>
              <div className="text-[11px] text-slate-400">Level complete va confetti tovushlari</div>
            </div>
          </div>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`h-6 w-11 rounded-full transition-all p-1 ${soundEnabled ? 'bg-emerald-500' : 'bg-slate-800'}`}
          >
            <div className={`h-4 w-4 rounded-full bg-white transition-all ${soundEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

        {savedMsg && (
          <div className="rounded-xl bg-emerald-500/20 p-3 border border-emerald-500/30 text-emerald-300 text-xs font-bold text-center">
            Sozlamalar saqlandi! ✅
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-2.5 text-xs font-bold text-slate-950 shadow-md hover:scale-105 transition-all"
          >
            <Save className="h-4 w-4" />
            <span>Saqlash</span>
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 rounded-xl bg-rose-500/10 px-4 py-2.5 text-xs font-bold text-rose-400 border border-rose-500/30 hover:bg-rose-500/20 transition-all"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Progressni Nollash (Reset)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
