import React, { useState } from 'react';
import { UserProgress, PortfolioItem } from '../types';
import { FolderGit2, CheckCircle2, FileText, Github, Download, Copy, Check, ExternalLink } from 'lucide-react';

interface PortfolioProps {
  progress: UserProgress;
}

export const PortfolioPage: React.FC<PortfolioProps> = ({ progress }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(
    progress.portfolio.length > 0 ? progress.portfolio[0] : null
  );

  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyReadme = (readme: string) => {
    navigator.clipboard.writeText(readme);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header Banner */}
      <div className="rounded-3xl border border-sky-500/30 bg-slate-900/90 p-6 shadow-xl space-y-2">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <FolderGit2 className="h-6 w-6 text-sky-400" />
          <span>📁 My Portfolio & GitHub Readiness (#128 - #130)</span>
        </h2>
        <p className="text-xs text-slate-300">
          Siz muvaffaqiyatli yaratgan barcha real loyihalaringiz portfoliosi, avto-yaratilgan README fayllar hamda GitHub repo tayyorgarligi.
        </p>
      </div>

      {progress.portfolio.length === 0 ? (
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center space-y-3">
          <FolderGit2 className="h-12 w-12 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">Hali tayyor loyiha yo‘q</h3>
          <p className="text-xs text-slate-400">
            Real Projects bo‘limidan birinchi loyihangizni tugatishingiz bilan bu yerda portfolio va README avtomati paydo bo‘ladi!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Portfolio Item List */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Yaratilgan Loyihalar ({progress.portfolio.length})
            </h3>

            <div className="space-y-2">
              {progress.portfolio.map((item) => {
                const isSelected = selectedItem?.id === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`p-3.5 rounded-2xl border text-xs cursor-pointer transition-all ${
                      isSelected
                        ? 'border-sky-500 bg-sky-500/15 text-white font-bold shadow-lg shadow-sky-500/10'
                        : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sky-300 text-sm">{item.title}</span>
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div className="text-[10px] text-slate-400">{item.completedAt}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected Item View & README Inspector */}
          {selectedItem && (
            <div className="md:col-span-2 space-y-6">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <FileText className="h-5 w-5 text-amber-400" />
                    <span>README.md Generator & Preview</span>
                  </h3>

                  <button
                    onClick={() => handleCopyReadme(selectedItem.readmeText)}
                    className="flex items-center gap-1.5 rounded-xl bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-all"
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                    <span>README Copied</span>
                  </button>
                </div>

                <pre className="rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-emerald-300 leading-relaxed overflow-auto max-h-60">
                  {selectedItem.readmeText}
                </pre>
              </div>

              {/* GitHub Setup Guide (#130) */}
              <div className="rounded-3xl border border-indigo-500/30 bg-slate-900 p-6 space-y-3 shadow-xl">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Github className="h-5 w-5 text-indigo-400" />
                  <span>GitHub Repository Tayyorgarlik Yo‘riqnomasi (#130)</span>
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Ushbu loyihani GitHub hisobingizga yuklash uchun quyidagi ketma-ketlikdan foydalaning:
                </p>

                <div className="rounded-2xl bg-slate-950 p-4 font-mono text-xs text-sky-300 space-y-1.5 border border-slate-800">
                  <div>git init</div>
                  <div>git add .</div>
                  <div>git commit -m "feat: Add {selectedItem.title} project"</div>
                  <div>git remote add origin https://github.com/username/project.git</div>
                  <div>git push -u origin main</div>
                </div>

                <div className="rounded-xl bg-amber-500/10 p-3 border border-amber-500/30 text-amber-300 text-xs font-medium">
                  ⚠️ Xavfsizlik Eslatmasi: Kodingizda va `.env` faylida haqiqiy API key yoki parollarni GitHub-ga push qilmang! Ular uchun `.gitignore` ishlating.
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
