import React, { useState } from 'react';
import { Search, X, BookOpen, FileCode2, ArrowRight } from 'lucide-react';
import { LEVEL_LIST } from '../data/curriculum';
import { CHEAT_SHEET_ITEMS } from '../data/cheatsheet';

interface SearchModalProps {
  onClose: () => void;
  onSelectLevel: (levelId: number) => void;
  onSelectCheatSheet: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  onClose,
  onSelectLevel,
  onSelectCheatSheet
}) => {
  const [query, setQuery] = useState<string>('');

  const filteredLevels = LEVEL_LIST.filter(
    l => l.title.toLowerCase().includes(query.toLowerCase()) ||
         l.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCheatSheet = CHEAT_SHEET_ITEMS.filter(
    c => c.title.toLowerCase().includes(query.toLowerCase()) ||
         c.description.toLowerCase().includes(query.toLowerCase()) ||
         c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-slate-950/80 p-4 backdrop-blur-md">
      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-2xl space-y-4">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <Search className="h-5 w-5 text-sky-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Mavzu, funksiya, metod yoki kalit so‘zni qidiring... (masalan: list, print, loop)"
            autoFocus
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none"
          />
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search Results list */}
        <div className="max-h-[380px] overflow-y-auto space-y-4 text-xs pr-1">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-500">
              Qidiruv uchun so‘z kiriting...
            </div>
          ) : (
            <>
              {/* Level Results */}
              <div>
                <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-2">
                  Darslar va Level-lar ({filteredLevels.length})
                </h4>
                {filteredLevels.length === 0 ? (
                  <p className="text-slate-500 italic">Mos dars topilmadi.</p>
                ) : (
                  <div className="space-y-1.5">
                    {filteredLevels.slice(0, 5).map(lvl => (
                      <button
                        key={lvl.id}
                        onClick={() => {
                          onSelectLevel(lvl.id);
                          onClose();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/50 transition-all text-left"
                      >
                        <div className="flex items-center gap-2.5">
                          <BookOpen className="h-4 w-4 text-sky-400 flex-shrink-0" />
                          <div>
                            <div className="font-bold text-white">{lvl.title}</div>
                            <div className="text-[11px] text-slate-400">{lvl.subtitle}</div>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-500" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Cheat Sheet Results */}
              <div>
                <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-2">
                  Cheat Sheet & Sintaksis ({filteredCheatSheet.length})
                </h4>
                {filteredCheatSheet.length === 0 ? (
                  <p className="text-slate-500 italic">Cheat sheet-da mos element topilmadi.</p>
                ) : (
                  <div className="space-y-1.5">
                    {filteredCheatSheet.slice(0, 5).map(item => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onSelectCheatSheet();
                          onClose();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/50 transition-all text-left"
                      >
                        <div className="flex items-center gap-2.5">
                          <FileCode2 className="h-4 w-4 text-amber-400 flex-shrink-0" />
                          <div>
                            <div className="font-bold text-amber-300 font-mono">{item.title}</div>
                            <div className="text-[11px] text-slate-400">{item.description}</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                          {item.category}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
