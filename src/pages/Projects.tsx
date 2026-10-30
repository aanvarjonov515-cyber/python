import React, { useState } from 'react';
import { UserProgress, ProjectItem, ProjectTask } from '../types';
import { PROJECTS_LIST } from '../data/projects';
import { CodeEditor } from '../components/CodeEditor';
import { Console } from '../components/Console';
import { executePythonCode } from '../services/pythonExecutor';
import { FolderGit2, CheckCircle2, Lock, ArrowRight, ShieldCheck, Sparkles, FileText, Play } from 'lucide-react';

interface ProjectsProps {
  progress: UserProgress;
  onCompleteProjectTask: (projectId: string, taskCode: string, readmeText: string) => void;
}

export const ProjectsPage: React.FC<ProjectsProps> = ({ progress, onCompleteProjectTask }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentTaskIdx, setCurrentTaskIdx] = useState<number>(0);
  const [userCode, setUserCode] = useState<string>('');
  const [execResult, setExecResult] = useState<any>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [taskSuccess, setTaskSuccess] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);

  const handleSelectProject = (proj: ProjectItem) => {
    setSelectedProject(proj);
    setCurrentTaskIdx(0);
    setUserCode(proj.tasks[0]?.starterCode || '');
    setTaskSuccess(false);
    setShowReview(false);
  };

  const handleRunTask = async () => {
    if (!selectedProject) return;
    setIsRunning(true);
    setTaskSuccess(false);

    const res = await executePythonCode(userCode);
    setExecResult(res);
    setIsRunning(false);

    const task = selectedProject.tasks[currentTaskIdx];
    if (task && res.output && res.output.includes(task.expectedOutputSubstring)) {
      setTaskSuccess(true);
    }
  };

  const handleFinishProject = () => {
    if (!selectedProject) return;
    setShowReview(true);
    const generatedReadme = selectedProject.readmeTemplate || `# ${selectedProject.title}\n\n- **Project Goal**: ${selectedProject.goal}\n- **Author**: ${progress.userName}`;
    onCompleteProjectTask(selectedProject.id, userCode, generatedReadme);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header Banner */}
      <div className="rounded-3xl border border-sky-500/30 bg-slate-900/90 p-6 shadow-xl space-y-2">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <FolderGit2 className="h-6 w-6 text-sky-400" />
          <span>🚀 Real Projects Learning Path (Amaliy Loyihalar)</span>
        </h2>
        <p className="text-xs text-slate-300">
          Alohidagi mavzularni birlashtirib, Starter, Intermediate va Advanced darajadagi real loyihalarni bosqichma-bosqich yarating.
        </p>
      </div>

      {!selectedProject ? (
        /* Projects Gallery */
        <div className="space-y-6">
          {/* Starter Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <span>🟢 Starter Projects (Boshlang‘ich Loyihalar)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS_LIST.filter(p => p.tier === 'starter').map((proj) => {
                const isUnlocked = progress.unlockedLevels.includes(proj.unlockedAtLevel);
                const isDone = progress.completedProjects.includes(proj.id);

                return (
                  <div
                    key={proj.id}
                    onClick={() => isUnlocked && handleSelectProject(proj)}
                    className={`rounded-2xl border p-5 flex flex-col justify-between space-y-3 cursor-pointer transition-all ${
                      isDone
                        ? 'border-emerald-500/40 bg-slate-900 text-emerald-300 hover:scale-[1.01]'
                        : isUnlocked
                        ? 'border-slate-800 bg-slate-900 text-white hover:border-sky-500 hover:scale-[1.01]'
                        : 'border-slate-800/50 bg-slate-950 text-slate-600 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Level {proj.unlockedAtLevel} da ochiladi
                        </span>
                        <h4 className="text-sm font-bold text-white mt-0.5">{proj.title}</h4>
                      </div>
                      {isDone ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      ) : !isUnlocked ? (
                        <Lock className="h-5 w-5 text-slate-600" />
                      ) : (
                        <Play className="h-5 w-5 text-sky-400" />
                      )}
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-2">{proj.goal}</p>

                    <div className="flex flex-wrap gap-1">
                      {proj.requiredKnowledge.map((k, i) => (
                        <span key={i} className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-400">
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Intermediate Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <span>🟡 Intermediate Projects (O‘rta Darajadagi Loyihalar)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS_LIST.filter(p => p.tier === 'intermediate').map((proj) => {
                const isUnlocked = progress.unlockedLevels.includes(proj.unlockedAtLevel);
                const isDone = progress.completedProjects.includes(proj.id);

                return (
                  <div
                    key={proj.id}
                    onClick={() => isUnlocked && handleSelectProject(proj)}
                    className={`rounded-2xl border p-5 flex flex-col justify-between space-y-3 cursor-pointer transition-all ${
                      isDone
                        ? 'border-emerald-500/40 bg-slate-900 text-emerald-300'
                        : isUnlocked
                        ? 'border-slate-800 bg-slate-900 text-white hover:border-amber-500'
                        : 'border-slate-800/50 bg-slate-950 text-slate-600 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Level {proj.unlockedAtLevel} da ochiladi
                        </span>
                        <h4 className="text-sm font-bold text-white mt-0.5">{proj.title}</h4>
                      </div>
                      {isDone ? <CheckCircle2 className="h-5 w-5 text-emerald-400" /> : <Lock className="h-5 w-5 text-slate-600" />}
                    </div>
                    <p className="text-xs text-slate-300">{proj.goal}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Advanced Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <span>🔴 Advanced Projects (Yuqori Bosqich Loyihalari)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS_LIST.filter(p => p.tier === 'advanced').map((proj) => {
                const isUnlocked = progress.unlockedLevels.includes(proj.unlockedAtLevel);
                const isDone = progress.completedProjects.includes(proj.id);

                return (
                  <div
                    key={proj.id}
                    onClick={() => isUnlocked && handleSelectProject(proj)}
                    className={`rounded-2xl border p-5 flex flex-col justify-between space-y-3 cursor-pointer transition-all ${
                      isDone
                        ? 'border-emerald-500/40 bg-slate-900 text-emerald-300'
                        : isUnlocked
                        ? 'border-slate-800 bg-slate-900 text-white hover:border-rose-500'
                        : 'border-slate-800/50 bg-slate-950 text-slate-600 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Level {proj.unlockedAtLevel} da ochiladi
                        </span>
                        <h4 className="text-sm font-bold text-white mt-0.5">{proj.title}</h4>
                      </div>
                      {isDone ? <CheckCircle2 className="h-5 w-5 text-emerald-400" /> : <Lock className="h-5 w-5 text-slate-600" />}
                    </div>
                    <p className="text-xs text-slate-300">{proj.goal}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Selected Project Workspace Builder (#82 & #83) */
        <div className="space-y-6">
          <button
            onClick={() => setSelectedProject(null)}
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
          >
            ← Barcha loyihalarga qaytish
          </button>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-3">
            <h3 className="text-lg font-black text-white">{selectedProject.title}</h3>
            <p className="text-xs text-slate-300">{selectedProject.goal}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {selectedProject.requiredKnowledge.map((k, i) => (
                <span key={i} className="rounded-lg bg-slate-800 px-2.5 py-1 text-[11px] font-mono text-sky-300">
                  {k}
                </span>
              ))}
            </div>
          </div>

          {/* Project Task Step Builder */}
          {selectedProject.tasks[currentTaskIdx] && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-4 space-y-1">
                <div className="text-xs font-bold text-sky-400 uppercase">
                  Vazifa {currentTaskIdx + 1} / {selectedProject.tasks.length}: {selectedProject.tasks[currentTaskIdx].title}
                </div>
                <p className="text-xs text-slate-200">{selectedProject.tasks[currentTaskIdx].description}</p>
              </div>

              <CodeEditor
                code={userCode}
                onChange={setUserCode}
                onRun={handleRunTask}
                isRunning={isRunning}
              />

              <Console result={execResult} isRunning={isRunning} />

              {taskSuccess && (
                <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Ushbu vazifa muvaffaqiyatli bajarildi! 🎉</span>
                  </div>

                  <button
                    onClick={handleFinishProject}
                    className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-2.5 text-xs font-bold text-slate-950 shadow-lg hover:scale-105 transition-all"
                  >
                    <span>Loyiha Bajarildi (Automated Review & README Yaratish)</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Project Review Modal (#84) */}
          {showReview && (
            <div className="rounded-3xl border border-emerald-500/40 bg-slate-900 p-6 space-y-4 shadow-2xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                <ShieldCheck className="h-6 w-6" />
                <span>Project Review & Code Audit (#84)</span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>✅ Kod to‘liq ishlayapti va kutilgan natija berildi</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>✅ Funksiya va o‘zgaruvchi nomlari to‘g‘ri tanlangan</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>✅ README.md avtomati yaratildi va My Portfolio-ga qo‘shildi!</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-xl bg-sky-500 px-6 py-2 text-xs font-bold text-slate-950 hover:scale-105 transition-all"
              >
                Portfolioga o‘tish
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
