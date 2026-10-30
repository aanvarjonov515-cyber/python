import React from 'react';
import { Terminal, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';
import { ExecutionResult } from '../types';

interface ConsoleProps {
  result: ExecutionResult | null;
  isRunning: boolean;
}

export const Console: React.FC<ConsoleProps> = ({ result, isRunning }) => {
  return (
    <div className="flex flex-col rounded-xl border border-slate-800 bg-slate-950 font-mono text-sm overflow-hidden shadow-2xl">
      {/* Console Header */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
          <Terminal className="h-4 w-4 text-emerald-400" />
          <span>Console / Natija</span>
        </div>
        {result && (
          <div className="flex items-center gap-3 text-xs">
            {result.executionTimeMs !== undefined && (
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="h-3.5 w-3.5 text-slate-500" />
                {result.executionTimeMs} ms
              </span>
            )}
            {result.error ? (
              <span className="flex items-center gap-1 font-semibold text-rose-400">
                <AlertTriangle className="h-3.5 w-3.5" /> Xatolik
              </span>
            ) : (
              <span className="flex items-center gap-1 font-semibold text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" /> Muvaffaqiyatli
              </span>
            )}
          </div>
        )}
      </div>

      {/* Console Body */}
      <div className="min-h-[140px] max-h-[260px] overflow-y-auto p-4 leading-relaxed">
        {isRunning ? (
          <div className="flex items-center gap-2 text-amber-400 animate-pulse py-4">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span>Python kodi ishga tushirilmoqda...</span>
          </div>
        ) : !result ? (
          <div className="text-slate-500 italic py-4">
            Kod natijasi bu yerda ko‘rinadi. [ ▶ Kodni ishga tushirish ] tugmasini bosing.
          </div>
        ) : (
          <div className="space-y-2">
            {result.output && (
              <pre className="whitespace-pre-wrap text-emerald-300 selection:bg-emerald-500/30">
                {result.output}
              </pre>
            )}

            {result.error && (
              <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-rose-300 text-xs leading-relaxed whitespace-pre-wrap font-sans">
                <div className="font-bold text-rose-400 mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4" /> Python Xatoligi (Error):
                </div>
                {result.error}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
