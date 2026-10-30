import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface OnboardingModalProps {
  onComplete: (levelChoice: 'beginner' | 'intermediate' | 'basic', userName: string) => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>('Talaba');
  const [selectedSkill, setSelectedSkill] = useState<'beginner' | 'intermediate' | 'basic'>('beginner');

  const handleNext = () => {
    if (step < 4) {
      setStep(prev => prev + 1);
    } else {
      onComplete(selectedSkill, name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center shadow-2xl space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-400 to-indigo-600 text-3xl shadow-lg shadow-sky-500/20">
              🐍
            </div>
            <div>
              <h2 className="text-xl font-black text-white">PyQuest Academy-ga Xush Kelibsiz!</h2>
              <p className="text-xs text-slate-400 mt-1">Ismingizni kiriting:</p>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ismingiz"
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white outline-none focus:border-sky-500 transition-all"
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20 text-3xl">
              🌱
            </div>
            <div>
              <h2 className="text-xl font-black text-white">Python’ni bilish darajangiz qanday?</h2>
              <p className="text-xs text-slate-400 mt-1">Sizga mos o‘quv rejasi tanlanadi:</p>
            </div>
            <div className="space-y-2 text-left">
              {[
                { id: 'beginner', label: '🌱 Umuman bilmayman', desc: 'Kurs mutlaqo 0 darajadan Level 0 bilan boshlanadi.' },
                { id: 'intermediate', label: '🐣 Biroz bilaman', desc: 'Sintaksisni bilasiz, mashqlar va takrorlash bilan davom etasiz.' },
                { id: 'basic', label: '🐍 Asoslarni bilaman', desc: 'Asosiy tushunchalar bor, mantiq va loyihalarga o‘tasiz.' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedSkill(opt.id as any)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all ${
                    selectedSkill === opt.id
                      ? 'border-sky-500 bg-sky-500/15 text-sky-200 font-semibold'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="font-bold text-sm text-white mb-0.5">{opt.label}</div>
                  <div className="text-[11px] text-slate-400">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-3xl">
              ⚔️
            </div>
            <h2 className="text-xl font-black text-white">Platforma Imkoniyatlari</h2>
            <div className="space-y-3 text-xs text-slate-300 text-left">
              <div className="flex items-center gap-3 rounded-xl bg-slate-950 p-3 border border-slate-800">
                <span className="text-xl">🐍</span>
                <div>
                  <div className="font-bold text-white">1. Python'ni o‘rganing</div>
                  <p className="text-[11px] text-slate-400">Sodda va qiziqarli nazariya, real kodlar bilan.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-slate-950 p-3 border border-slate-800">
                <span className="text-xl">⚔️</span>
                <div>
                  <div className="font-bold text-white">2. Mashqlar bajaring</div>
                  <p className="text-[11px] text-slate-400">Interaktiv Python editor, hint va kod tekshirgich.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-slate-950 p-3 border border-slate-800">
                <span className="text-xl">🏆</span>
                <div>
                  <div className="font-bold text-white">3. Level oshiring</div>
                  <p className="text-[11px] text-slate-400">XP yig‘ing, streak tuting va certifikatga ega bo‘ling.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4 py-2">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-indigo-600 text-4xl shadow-xl shadow-amber-500/20 animate-pulse">
              🚀
            </div>
            <h2 className="text-2xl font-black text-white">Sayohatga Tayyormisiz?</h2>
            <p className="text-xs text-slate-300">
              {name}, siz birinchi topshiriqni bajarib, Python Rookie unvoniga ega bo‘lishga tayyorsiz!
            </p>
          </div>
        )}

        <button
          onClick={handleNext}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-amber-500 py-3 text-sm font-black text-white shadow-lg hover:scale-105 transition-all"
        >
          <span>{step === 4 ? 'Boshlash 🚀' : 'Keyingisi'}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
