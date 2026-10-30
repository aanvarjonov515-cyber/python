import React from 'react';
import { UserProgress } from '../types';
import { Award, CheckCircle2, Download, X, Sparkles } from 'lucide-react';

interface CertificateModalProps {
  progress: UserProgress;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ progress, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl border-2 border-amber-500/40 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-8 text-center shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-xl p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Certificate Outer Frame */}
        <div className="rounded-2xl border-4 border-amber-500/30 bg-slate-950/80 p-8 space-y-6 shadow-inner print:p-0">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-400 via-yellow-500 to-amber-600 shadow-xl shadow-amber-500/20 text-3xl">
              🐍
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-wider text-amber-400 uppercase">
              PYQUEST ACADEMY
            </h2>
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mt-1">
              Certificate of Completion
            </p>
          </div>

          <p className="text-xs text-slate-300">
            Ushbu rasmiy sertifikat bilan tasdiqlanadi:
          </p>

          <div className="py-2">
            <h3 className="text-2xl font-black text-white border-b-2 border-amber-500/40 inline-block px-8 py-1">
              {progress.userName || 'Talaba'}
            </h3>
          </div>

          <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
            Python dasturlash tilini 0 dan boshlab barcha 32 ta darajadagi interaktiv darslar, amaliy topshiriqlar va final loyihani muvaffaqiyatli yakunladi.
          </p>

          {/* Stats Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs">
            <div className="rounded-xl bg-slate-900 px-4 py-2 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Jami To‘plangan XP</span>
              <span className="font-bold text-yellow-400">{progress.xp} XP</span>
            </div>
            <div className="rounded-xl bg-slate-900 px-4 py-2 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Bajargan Topshiriqlar</span>
              <span className="font-bold text-sky-400">{progress.completedExercises.length} ta</span>
            </div>
            <div className="rounded-xl bg-slate-900 px-4 py-2 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Berilgan sana</span>
              <span className="font-bold text-emerald-400">{new Date().toLocaleDateString('uz-UZ')}</span>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-amber-400 font-bold text-xs">
            <Award className="h-4 w-4" />
            <span>Rasmiy Python Master Status • PyQuest Academy</span>
          </div>
        </div>

        {/* Print / Download Button */}
        <div className="flex justify-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 px-6 py-2.5 text-xs font-bold text-slate-950 shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <Download className="h-4 w-4" />
            <span>Sertifikatni Yuklab Olish (Chop etish)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
