import React, { useState } from 'react';
import { Code2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CodeExplainModalProps {
  userCode: string;
  onSubmit: (explanation: string) => void;
}

export const CodeExplainModal: React.FC<CodeExplainModalProps> = ({ userCode, onSubmit }) => {
  const [explanation, setExplanation] = useState<string>('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-3xl border border-sky-500/30 bg-slate-900 p-6 text-center shadow-2xl space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/20 text-3xl">
          🧠
        </div>

        <div>
          <h3 className="text-lg font-black text-white">Kodingizni Tushuntiring</h3>
          <p className="text-xs text-slate-300 mt-1">
            Yozgan kodingiz qanday ishlashini 1–2 jumlada tushuntiring:
          </p>
        </div>

        <pre className="rounded-xl bg-slate-950 p-3 text-left font-mono text-xs text-emerald-300 max-h-28 overflow-auto border border-slate-800">
          {userCode}
        </pre>

        <textarea
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
          placeholder="Masalan: 'Ushbu kod foydalanuvchidan yoshini oladi va if bilan 18 ga solishtirib xabar chiqaradi...'"
          rows={3}
          className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs text-slate-200 outline-none focus:border-sky-500"
        />

        <button
          onClick={() => onSubmit(explanation)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-500 py-3 text-xs font-bold text-slate-950 shadow-lg hover:scale-105 transition-all"
        >
          <span>Izohni Topshirish</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
