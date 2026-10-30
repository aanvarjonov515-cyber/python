import React, { useState } from 'react';
import { UserProgress, CyberLevel } from '../types';
import { CYBER_LEVELS, ETHICAL_RULE_NOTICE } from '../data/cyberCurriculum';
import { ShieldCheck, Lock, AlertTriangle, CheckCircle2, ArrowRight, Play, Terminal, Sparkles } from 'lucide-react';

interface CyberLabProps {
  progress: UserProgress;
  onCompleteCyberLevel: (cyberLevelId: number, earnedCyberXp: number) => void;
}

export const CyberLab: React.FC<CyberLabProps> = ({ progress, onCompleteCyberLevel }) => {
  const [selectedCyberLevel, setSelectedCyberLevel] = useState<CyberLevel>(CYBER_LEVELS[0]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const handleSelectOption = (opt: string) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    const correct = opt === selectedCyberLevel.labChallenge.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      onCompleteCyberLevel(selectedCyberLevel.id, selectedCyberLevel.xpReward);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header Banner */}
      <div className="rounded-3xl border border-emerald-500/30 bg-slate-900/90 p-6 shadow-xl space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-emerald-400" />
            <span>🛡️ Cybersecurity Fundamentals & Cyber Lab (#85 - #127)</span>
          </h2>
          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
            {progress.cyberXp} Cyber XP 🛡️
          </span>
        </div>
        <p className="text-xs text-slate-300">
          Kiberxavfsizlik va xavfsiz kod (Secure Coding) asoslarini mutlaqo xavfsiz va himoyalangan o‘quv sandboxida o‘rganing.
        </p>
      </div>

      {/* Mandatory Ethical Rule Banner (#86) */}
      <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-xs text-rose-200 space-y-1">
        <div className="font-bold flex items-center gap-2 text-rose-400">
          <AlertTriangle className="h-4 w-4 text-rose-400" />
          <span>ETHICAL BOUNDARY — MAJBURIY QOIDA (#86)</span>
        </div>
        <p className="leading-relaxed">{ETHICAL_RULE_NOTICE}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cyber Level Selector List */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Cyber Levels (Kiber Yo‘nalish)
          </h3>
          <div className="space-y-2">
            {CYBER_LEVELS.map((lvl) => {
              const isDone = progress.completedCyberLevels.includes(lvl.id);
              const isSelected = selectedCyberLevel.id === lvl.id;

              return (
                <button
                  key={lvl.id}
                  onClick={() => {
                    setSelectedCyberLevel(lvl);
                    setIsAnswered(false);
                    setSelectedOption(null);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl border text-xs text-left transition-all ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-500/20 text-white font-bold'
                      : isDone
                      ? 'border-emerald-500/30 bg-slate-900 text-emerald-300'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className={`h-4 w-4 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                    <div>
                      <div className="font-bold text-white text-[11px]">{lvl.title}</div>
                      <div className="text-[10px] text-slate-400">{lvl.category}</div>
                    </div>
                  </div>
                  {isDone && <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Cyber Level Workspace */}
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {selectedCyberLevel.category} • +{selectedCyberLevel.xpReward} Cyber XP
            </div>
            <h3 className="text-lg font-black text-white">{selectedCyberLevel.title}</h3>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-200 leading-relaxed whitespace-pre-wrap">
              {selectedCyberLevel.theoryText}
            </div>

            <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-3 text-xs text-sky-200">
              <span className="font-bold text-sky-400">Haqiqiy hayotiy misol: </span>
              {selectedCyberLevel.realWorldContext}
            </div>
          </div>

          {/* Safe Cyber Lab Challenge (#109 & #110) */}
          <div className="rounded-3xl border border-emerald-500/30 bg-slate-900 p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <Terminal className="h-4 w-4" />
              <span>Safe Cyber Lab — Simulyator Topshiriq</span>
            </div>

            <h4 className="text-sm font-bold text-white">{selectedCyberLevel.labChallenge.instructions}</h4>

            {selectedCyberLevel.labChallenge.codeSnippet && (
              <pre className="rounded-xl border border-slate-800 bg-slate-950 p-3 font-mono text-xs text-emerald-300">
                {selectedCyberLevel.labChallenge.codeSnippet}
              </pre>
            )}

            {selectedCyberLevel.labChallenge.options && (
              <div className="space-y-2">
                {selectedCyberLevel.labChallenge.options.map((opt, idx) => {
                  let stateStyle = 'border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-800/50';

                  if (isAnswered) {
                    if (opt === selectedCyberLevel.labChallenge.correctAnswer) {
                      stateStyle = 'border-emerald-500 bg-emerald-500/20 text-emerald-200 font-bold';
                    } else if (opt === selectedOption) {
                      stateStyle = 'border-rose-500 bg-rose-500/20 text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt)}
                      disabled={isAnswered}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs text-left transition-all ${stateStyle}`}
                    >
                      <span>{opt}</span>
                      {isAnswered && opt === selectedCyberLevel.labChallenge.correctAnswer && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {isAnswered && (
              <div className={`rounded-xl p-4 text-xs leading-relaxed space-y-2 ${
                isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-200' : 'bg-rose-500/10 border border-rose-500/30 text-rose-200'
              }`}>
                <div className="font-bold">{isCorrect ? 'Barakalla! To‘g‘ri tahlil va xavfsiz qaror! 🎉' : 'Hali unchalik emas 🤔'}</div>
                <p>{selectedCyberLevel.labChallenge.explanation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
