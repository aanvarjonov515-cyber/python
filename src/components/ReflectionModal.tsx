import React, { useState } from 'react';
import { Brain, ArrowRight } from 'lucide-react';

interface ReflectionModalProps {
  levelTitle: string;
  onSubmit: (reflectionText: string) => void;
}

export const ReflectionModal: React.FC<ReflectionModalProps> = ({ levelTitle, onSubmit }) => {
  const [text, setText] = useState<string>('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
      <div className="w-full max-w-md rounded-3xl border border-purple-500/30 bg-slate-900 p-6 text-center shadow-2xl space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-3xl">
          💭
        </div>

        <div>
          <h3 className="text-lg font-black text-white">Xulosa va Fikrlash (Reflection)</h3>
          <p className="text-xs text-slate-300 mt-1">
            Bugun <span className="text-purple-300 font-bold">{levelTitle}</span> mavzusida o‘rgangan eng muhim narsangiz nima bo‘ldi?
          </p>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="O‘z so‘zingiz bilan qisqa 1-2 jumla yozing..."
          rows={3}
          className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs text-slate-200 outline-none focus:border-purple-500"
        />

        <button
          onClick={() => onSubmit(text)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-purple-500 py-3 text-xs font-bold text-slate-950 shadow-lg hover:scale-105 transition-all"
        >
          <span>Topshirish</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
