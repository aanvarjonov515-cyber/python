import React, { useState } from 'react';
import { CHEAT_SHEET_ITEMS } from '../data/cheatsheet';
import { FileCode2, Copy, Check, Search } from 'lucide-react';

export const CheatSheetPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('Barchasi');
  const [query, setQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['Barchasi', 'Asosiy (Basics)', 'String (Matn)', 'Shartlar (Conditions)', 'Sikllar (Loops)', 'Kolleksiyalar', 'Funksiyalar', 'Ilg‘or (Advanced)', 'OOP'];

  const filteredItems = CHEAT_SHEET_ITEMS.filter(item => {
    const matchesCat = filter === 'Barchasi' || item.category === filter;
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) ||
                         item.description.toLowerCase().includes(query.toLowerCase()) ||
                         item.example.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      <div className="rounded-3xl border border-sky-500/30 bg-slate-900/90 p-6 shadow-xl space-y-2">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <FileCode2 className="h-6 w-6 text-amber-400" />
          <span>📝 Python Cheat Sheet (Tezkor Eslatmalar)</span>
        </h2>
        <p className="text-xs text-slate-300">
          Tayyor kodlar bazasi emas, sintaksis va metodlarni tezda eslab olish uchun qisqa va qulay qo‘llanma.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cheat sheet ichidan izlash..."
            className="w-full rounded-2xl border border-slate-800 bg-slate-900 pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-sky-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cheat Sheet Items List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-3 shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-mono font-bold text-sky-400 text-sm">{item.title}</h3>
              <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400 font-semibold">
                {item.category}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>

            {/* Example Code Block */}
            <div className="relative rounded-xl border border-slate-800 bg-slate-950 p-3 font-mono text-xs text-emerald-300">
              <pre className="whitespace-pre-wrap">{item.example}</pre>
              <button
                onClick={() => handleCopy(item.id, item.example)}
                className="absolute top-2 right-2 rounded-lg p-1 bg-slate-800/80 text-slate-400 hover:text-white"
                title="Nusxalash"
              >
                {copiedId === item.id ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
