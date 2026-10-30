import React, { useState } from 'react';
import { UserProgress, ExerciseHistoryItem, SavedCode } from '../types';
import { History as HistoryIcon, Code2, CheckCircle2, XCircle, Clock, FileCode } from 'lucide-react';

interface HistoryProps {
  progress: UserProgress;
}

export const HistoryPage: React.FC<HistoryProps> = ({ progress }) => {
  const [activeTab, setActiveTab] = useState<'exercises' | 'code'>('exercises');
  const [selectedCode, setSelectedCode] = useState<SavedCode | null>(null);

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      <div className="rounded-3xl border border-sky-500/30 bg-slate-900/90 p-6 shadow-xl space-y-2">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <HistoryIcon className="h-6 w-6 text-sky-400" />
          <span>🕐 Natijalar va Kodlar Tarixi</span>
        </h2>
        <p className="text-xs text-slate-300">
          Siz bajargan topshiriqlar jurnali hamda saqlangan Python kodlaringiz.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('exercises')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeTab === 'exercises'
              ? 'bg-sky-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-white'
          }`}
        >
          <HistoryIcon className="h-4 w-4" />
          <span>Topshiriqlar Jurnali ({progress.exerciseHistory.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeTab === 'code'
              ? 'bg-sky-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-white'
          }`}
        >
          <FileCode className="h-4 w-4" />
          <span>Saqlangan Kodlar ({progress.codeHistory.length})</span>
        </button>
      </div>

      {/* Exercises Log Table */}
      {activeTab === 'exercises' && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-xl">
          {progress.exerciseHistory.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs italic">
              Hali topshiriqlar tarixi mavjud emas. Birinchi mashqingizni bajaring!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5 font-bold">Sana</th>
                    <th className="p-3.5 font-bold">Level</th>
                    <th className="p-3.5 font-bold">Topshiriq</th>
                    <th className="p-3.5 font-bold">Natija</th>
                    <th className="p-3.5 font-bold">XP</th>
                    <th className="p-3.5 font-bold">Urinish</th>
                    <th className="p-3.5 font-bold">Hint</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-200">
                  {progress.exerciseHistory.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-3.5 text-slate-400">{item.date}</td>
                      <td className="p-3.5 font-bold font-mono text-sky-400">LVL {item.levelId}</td>
                      <td className="p-3.5 font-medium">{item.exerciseTitle}</td>
                      <td className="p-3.5 font-bold">
                        {item.result === 'success' ? (
                          <span className="flex items-center gap-1 text-emerald-400">
                            <CheckCircle2 className="h-4 w-4" /> Bajarildi
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-rose-400">
                            <XCircle className="h-4 w-4" /> Xato
                          </span>
                        )}
                      </td>
                      <td className="p-3.5 font-bold text-amber-400">+{item.xpEarned} XP</td>
                      <td className="p-3.5 font-mono">{item.attempts}</td>
                      <td className="p-3.5 font-mono">{item.hintsUsed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Code History Tab */}
      {activeTab === 'code' && (
        <div className="space-y-4">
          {progress.codeHistory.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center text-slate-500 text-xs italic">
              Saqlangan kodlar yo‘q.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {progress.codeHistory.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedCode(item)}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-4 space-y-2 cursor-pointer hover:border-sky-500 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{item.title}</span>
                    <span className="text-[10px] text-slate-400">{item.date}</span>
                  </div>
                  <pre className="rounded-xl bg-slate-950 p-3 font-mono text-xs text-emerald-300 max-h-24 overflow-hidden">
                    {item.code}
                  </pre>
                </div>
              ))}
            </div>
          )}

          {selectedCode && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
              <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white">{selectedCode.title}</h3>
                  <button
                    onClick={() => setSelectedCode(null)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Yopish
                  </button>
                </div>
                <pre className="rounded-2xl bg-slate-950 p-4 font-mono text-xs text-emerald-300 overflow-auto max-h-80">
                  {selectedCode.code}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
