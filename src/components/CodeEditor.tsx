import React, { useState } from 'react';
import { Play, RotateCcw, Sparkles, Wand2, Copy, Check } from 'lucide-react';

interface CodeEditorProps {
  code: string;
  onChange: (newCode: string) => void;
  onRun: () => void;
  onReset?: () => void;
  onShowHint?: () => void;
  isRunning?: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  onChange,
  onRun,
  onReset,
  onShowHint,
  isRunning = false
}) => {
  const [copied, setCopied] = useState(false);

  const lines = code.split('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormatCode = () => {
    // Simple Python beautifier: clean spaces, fix indentation
    const formatted = code
      .split('\n')
      .map((line) => line.trimEnd())
      .join('\n');
    onChange(formatted);
  };

  return (
    <div className="flex flex-col rounded-xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden font-mono">
      {/* Editor Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5 gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="flex h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="flex h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-semibold text-slate-300 font-sans">
            Python Code Editor
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onShowHint && (
            <button
              onClick={onShowHint}
              className="flex items-center gap-1 rounded-lg bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-300 hover:bg-amber-500/20 border border-amber-500/30 transition-all"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Hint</span>
            </button>
          )}

          <button
            onClick={handleFormatCode}
            className="flex items-center gap-1 rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700 transition-all"
            title="Kodni tartiblash"
          >
            <Wand2 className="h-3.5 w-3.5 text-sky-400" />
            <span className="hidden sm:inline">Format</span>
          </button>

          {onReset && (
            <button
              onClick={onReset}
              className="flex items-center gap-1 rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700 transition-all"
              title="Kodni qayta tiklash"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700 transition-all"
            title="Nusxalash"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          </button>

          <button
            onClick={onRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 disabled:opacity-50 transition-all"
          >
            <Play className="h-3.5 w-3.5 fill-white" />
            <span>{isRunning ? 'Ishlamoqda...' : '▶ Kodni ishga tushirish'}</span>
          </button>
        </div>
      </div>

      {/* Editor Body with Line Numbers */}
      <div className="relative flex min-h-[220px] max-h-[420px] overflow-auto bg-slate-950 p-3 text-sm leading-6">
        {/* Line Numbers */}
        <div className="select-none text-right font-mono text-xs text-slate-600 pr-4 border-r border-slate-800/80 min-w-[2.5rem]">
          {lines.map((_, idx) => (
            <div key={idx}>{idx + 1}</div>
          ))}
        </div>

        {/* Textarea Input */}
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
          className="flex-1 resize-none bg-transparent pl-4 font-mono text-emerald-300 placeholder-slate-600 outline-none selection:bg-emerald-500/30 leading-6"
          placeholder="# Python kodingizni bu yerga yozing..."
          rows={Math.max(8, lines.length)}
        />
      </div>
    </div>
  );
};
