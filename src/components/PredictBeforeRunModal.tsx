import React, { useState } from 'react';
import { Eye, Play, ArrowRight } from 'lucide-react';

interface PredictBeforeRunModalProps {
  codeToRun: string;
  onConfirmPrediction: (predictedOutput: string) => void;
}

export const PredictBeforeRunModal: React.FC<PredictBeforeRunModalProps> = ({
  codeToRun,
  onConfirmPrediction
}) => {
  const [prediction, setPrediction] = useState<string>('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
      <div className="w-full max-w-md rounded-3xl border border-amber-500/30 bg-slate-900 p-6 text-center shadow-2xl space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 text-3xl">
          🔮
        </div>

        <div>
          <h3 className="text-lg font-black text-white">Ishga tushirishdan oldin taxmin qiling!</h3>
          <p className="text-xs text-slate-300 mt-1">
            Sizningcha, quyidagi kod ishlaganda ekranga nima chiqadi?
          </p>
        </div>

        <pre className="rounded-xl bg-slate-950 p-3 text-left font-mono text-xs text-emerald-300 max-h-32 overflow-auto border border-slate-800">
          {codeToRun}
        </pre>

        <input
          type="text"
          value={prediction}
          onChange={(e) => setPrediction(e.target.value)}
          placeholder="Taxminiy natijangizni yozing..."
          className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-white outline-none focus:border-amber-500"
        />

        <button
          onClick={() => onConfirmPrediction(prediction)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 py-3 text-xs font-bold text-slate-950 shadow-lg hover:scale-105 transition-all"
        >
          <Play className="h-4 w-4 fill-slate-950" />
          <span>Taxmin bilan ishga tushirish</span>
        </button>
      </div>
    </div>
  );
};
