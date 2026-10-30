import React, { useState } from 'react';
import { UserProgress, ConfidenceRating } from '../types';
import { getLessonContent, LEVEL_LIST } from '../data/curriculum';
import { LEVEL_QUIZZES } from '../data/exercises';
import { getExerciseForLevel } from '../services/exerciseGenerator';
import { ExerciseCard } from '../components/ExerciseCard';
import { QuizCard } from '../components/QuizCard';
import { PrerequisiteWarning } from '../components/PrerequisiteWarning';
import { ConfidenceCheckModal } from '../components/ConfidenceCheckModal';
import { ReflectionModal } from '../components/ReflectionModal';
import { CodeExplainModal } from '../components/CodeExplainModal';
import {
  BookOpen,
  Code2,
  Table,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Globe,
  Target,
  Crown,
  Lock,
  Award
} from 'lucide-react';

interface LessonProps {
  levelId: number;
  progress: UserProgress;
  onCompleteLesson: (levelId: number, xpEarned: number, masteryPercent: number) => void;
  onNavigateLevel: (levelId: number) => void;
  onBackToCourse: () => void;
  onUpdateConfidence: (levelId: number, rating: ConfidenceRating) => void;
  onUpdateReflection: (levelId: number, text: string) => void;
}

export const Lesson: React.FC<LessonProps> = ({
  levelId,
  progress,
  onCompleteLesson,
  onNavigateLevel,
  onBackToCourse,
  onUpdateConfidence,
  onUpdateReflection
}) => {
  const lessonData = getLessonContent(levelId);
  const levelInfo = LEVEL_LIST.find(l => l.id === levelId) || LEVEL_LIST[0];
  const quizzes = LEVEL_QUIZZES[levelId] || [];

  const [activeTab, setActiveTab] = useState<'theory' | 'code' | 'table' | 'exercise' | 'solo' | 'quiz'>('theory');
  const [exerciseDone, setExerciseDone] = useState<boolean>(false);
  const [soloDone, setSoloDone] = useState<boolean>(false);
  const [quizDone, setQuizDone] = useState<boolean>(false);
  const [earnedXp, setEarnedXp] = useState<number>(0);
  const [showPrereqWarning, setShowPrereqWarning] = useState<boolean>(
    lessonData.prerequisites.length > 0 &&
    !lessonData.prerequisites.every(p => progress.completedLessons.includes(p.levelId))
  );

  const [showConfidenceModal, setShowConfidenceModal] = useState<boolean>(false);
  const [showReflectionModal, setShowReflectionModal] = useState<boolean>(false);
  const [showExplainModal, setShowExplainModal] = useState<boolean>(false);
  const [lastUserCode, setLastUserCode] = useState<string>('');

  const currentExercise = getExerciseForLevel(levelId, progress.completedExercises, 'Normal');

  const handleExerciseSuccess = (result: any) => {
    setExerciseDone(true);
    setEarnedXp(prev => prev + result.earnedXp);

    // For intermediate levels (level >= 6), trigger Code Explanation (#65)
    if (levelId >= 6 && result.submittedCode) {
      setLastUserCode(result.submittedCode);
      setShowExplainModal(true);
    }
  };

  const handleSoloSuccess = (result: any) => {
    setSoloDone(true);
    setEarnedXp(prev => prev + result.earnedXp + 20); // Extra bonus for Solo Challenge
  };

  const handleQuizComplete = (score: number) => {
    setQuizDone(true);
    setEarnedXp(prev => prev + score * 10);
  };

  const handleFinishStep1 = () => {
    // Check mastery score calculation (#57)
    // 0-49% -> Mavzuni qayta ko'rish, 50-69% -> Yana mashq qilish, 70-84% -> O'zlashtirilgan, 85-100% -> Yaxshi
    const calculatedMastery = Math.min(100, Math.max(70, Math.round((earnedXp / 80) * 100)));

    if (calculatedMastery < 70) {
      alert('Natijangiz 70% dan kam bo‘ldi. Keyingi levelga o‘tish uchun mashqlarni yana bir marta takrorlang!');
      return;
    }

    setShowConfidenceModal(true);
  };

  const handleConfidenceSubmit = (rating: ConfidenceRating) => {
    onUpdateConfidence(levelId, rating);
    setShowConfidenceModal(false);
    setShowReflectionModal(true);
  };

  const handleReflectionSubmit = (text: string) => {
    onUpdateReflection(levelId, text);
    setShowReflectionModal(false);

    const calculatedMastery = Math.min(100, Math.max(70, Math.round((earnedXp / 80) * 100)));
    onCompleteLesson(levelId, earnedXp || 40, calculatedMastery);

    if (levelId < 32) {
      onNavigateLevel(levelId + 1);
    } else {
      onBackToCourse();
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      {/* Top Navigation & Prerequisite Notice */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToCourse}
          className="flex items-center gap-1.5 rounded-xl bg-slate-800/80 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kurs Xaritasiga qaytish</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>{lessonData.readingTimeMinutes} daqiqa o‘qish</span>
        </div>
      </div>

      {/* Prerequisite Warning Card if needed */}
      {showPrereqWarning && (
        <PrerequisiteWarning
          prerequisites={lessonData.prerequisites}
          onReviewPrerequisites={(prereqLvl) => onNavigateLevel(prereqLvl)}
          onContinueAnyway={() => setShowPrereqWarning(false)}
        />
      )}

      {/* Main Title Banner */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
          LEVEL {levelId} — {levelInfo.category}
        </div>
        <h1 className="text-2xl font-black text-white">{lessonData.title}</h1>
        <p className="text-xs text-slate-300">{lessonData.subtitle}</p>
      </div>

      {/* Mandatory Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('theory')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeTab === 'theory'
              ? 'bg-sky-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-white'
          }`}
        >
          <BookOpen className="h-4 w-4" />
          <span>1. Qisqa Nazariya</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeTab === 'code'
              ? 'bg-sky-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-white'
          }`}
        >
          <Code2 className="h-4 w-4" />
          <span>2. Kod Misollari</span>
        </button>

        <button
          onClick={() => setActiveTab('table')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeTab === 'table'
              ? 'bg-sky-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-white'
          }`}
        >
          <Table className="h-4 w-4" />
          <span>3. Taqqoslash Jadvali</span>
        </button>

        <button
          onClick={() => setActiveTab('exercise')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeTab === 'exercise'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-amber-400 hover:bg-slate-800'
          }`}
        >
          <HelpCircle className="h-4 w-4" />
          <span>4. Mashq Bajarish</span>
          {exerciseDone && <CheckCircle2 className="h-3.5 w-3.5 text-slate-950" />}
        </button>

        <button
          onClick={() => setActiveTab('solo')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            activeTab === 'solo'
              ? 'bg-purple-500 text-white shadow-md'
              : 'bg-slate-900 text-purple-400 hover:bg-slate-800'
          }`}
        >
          <Crown className="h-4 w-4" />
          <span>5. Solo Challenge (#69)</span>
          {soloDone && <CheckCircle2 className="h-3.5 w-3.5 text-white" />}
        </button>

        {quizzes.length > 0 && (
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              activeTab === 'quiz'
                ? 'bg-indigo-500 text-white shadow-md'
                : 'bg-slate-900 text-indigo-400 hover:bg-slate-800'
            }`}
          >
            <span>6. Mini Quiz</span>
            {quizDone && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />}
          </button>
        )}
      </div>

      {/* Tab 1: Qisqa Nazariya */}
      {activeTab === 'theory' && (
        <div className="space-y-6">
          {/* Learning Objectives Box (#56) */}
          <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-5 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sky-400 text-xs uppercase tracking-wider">
              <Target className="h-4 w-4" />
              <span>Dars maqsadi (Learning Objective)</span>
            </div>
            <p className="text-xs text-slate-300">Dars oxirida talaba quyidagilarni bilishi kerak:</p>
            <ul className="space-y-1 text-xs text-sky-200 list-disc list-inside font-medium">
              {lessonData.learningObjectives.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          </div>

          {/* Theory Main Text */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 text-sm leading-relaxed text-slate-200 whitespace-pre-wrap">
            {lessonData.theoryText}
          </div>

          {/* Keywords Cards */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Kalit so‘zlar (Keywords)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {lessonData.keywords.map((kw, idx) => (
                <div key={idx} className="rounded-xl border border-sky-500/20 bg-slate-900/80 p-3.5 space-y-1">
                  <div className="font-mono font-bold text-sky-400 text-xs">{kw.word}</div>
                  <div className="text-[11px] text-slate-300">{kw.meaning}</div>
                </div>
              ))}
            </div>
          </div>

          {/* "Nega bu kerak?" & "Haqiqiy hayotda" Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <Lightbulb className="h-4 w-4" />
                <span>Nega bu kerak?</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{lessonData.whyNeeded}</p>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Globe className="h-4 w-4" />
                <span>Haqiqiy hayotda</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{lessonData.realLifeExample}</p>
            </div>
          </div>

          {/* Common Mistakes */}
          {lessonData.commonMistakes && lessonData.commonMistakes.length > 0 && (
            <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-5 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="h-4 w-4" />
                <span>Ko‘p uchraydigan xato</span>
              </div>
              {lessonData.commonMistakes.map((m, idx) => (
                <div key={idx} className="space-y-1.5 text-xs">
                  <div className="text-rose-300 font-mono font-semibold">❌ Noto‘g‘ri: {m.wrong}</div>
                  <div className="text-emerald-300 font-mono font-semibold">✅ To‘g‘ri: {m.right}</div>
                  <p className="text-slate-300 text-[11px] mt-1">{m.explanation}</p>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => setActiveTab('code')}
            className="flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-xs font-bold text-slate-950 shadow-lg hover:scale-105 transition-all"
          >
            <span>Keyingisi: Kod Misollari</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Tab 2: Kod Misollari */}
      {activeTab === 'code' && (
        <div className="space-y-6">
          {lessonData.codeExamples.map((ex, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
              <h3 className="text-sm font-bold text-white">{ex.title}</h3>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-emerald-300 leading-relaxed overflow-x-auto">
                <pre>{ex.code}</pre>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  Kod qanday ishlaydi?
                </h4>
                <ul className="space-y-1 text-xs text-slate-300 leading-relaxed">
                  {ex.howItWorks.map((stepStr, sIdx) => (
                    <li key={sIdx}>{stepStr}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <button
            onClick={() => setActiveTab('table')}
            className="flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-xs font-bold text-slate-950 shadow-lg hover:scale-105 transition-all"
          >
            <span>Keyingisi: Taqqoslash Jadvali</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Tab 3: Taqqoslash Jadvali */}
      {activeTab === 'table' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 uppercase tracking-wider">
                <tr>
                  {lessonData.comparisonTable.headers.map((h, idx) => (
                    <th key={idx} className="p-3.5 font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-200">
                {lessonData.comparisonTable.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-3.5 font-mono font-bold text-sky-300">{row.col1}</td>
                    <td className="p-3.5 font-mono text-emerald-300">{row.col2}</td>
                    {row.col3 && <td className="p-3.5 text-slate-300">{row.col3}</td>}
                    {row.col4 && <td className="p-3.5 text-slate-300">{row.col4}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={() => setActiveTab('exercise')}
            className="flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 text-xs font-bold text-slate-950 shadow-lg hover:scale-105 transition-all"
          >
            <span>Mashq Bajarishga O‘tish</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Tab 4: Mashq Bajarish */}
      {activeTab === 'exercise' && (
        <div className="space-y-6">
          <ExerciseCard
            exercise={currentExercise}
            onSuccess={handleExerciseSuccess}
          />

          {exerciseDone && (
            <div className="flex justify-end">
              <button
                onClick={() => setActiveTab('solo')}
                className="flex items-center gap-2 rounded-2xl bg-purple-500 px-6 py-3 text-xs font-bold text-white shadow-xl hover:scale-105 transition-all"
              >
                <span>Solo Challenge-ga o‘tish (#69)</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tab 5: Solo Challenge (#69) */}
      {activeTab === 'solo' && lessonData.soloChallenge && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-5 space-y-2">
            <div className="flex items-center gap-2 text-purple-300 font-bold text-xs uppercase tracking-wider">
              <Crown className="h-4 w-4 text-purple-400" />
              <span>{lessonData.soloChallenge.title}</span>
            </div>
            <p className="text-xs text-slate-300">{lessonData.soloChallenge.instructions}</p>
          </div>

          <ExerciseCard
            exercise={{
              id: `solo_lvl${levelId}`,
              levelId,
              type: 'coding',
              difficulty: 'Hard',
              concept: 'solo_challenge',
              title: lessonData.soloChallenge.title,
              instructions: lessonData.soloChallenge.instructions,
              initialCode: lessonData.soloChallenge.starterCode,
              expectedOutput: lessonData.soloChallenge.expectedOutput,
              solutionCode: lessonData.soloChallenge.solutionCode,
              hints: [
                'Ushbu rejimda yordam minimal beriladi.',
                'O‘tgan darslardagi bilimlaringizni ishga soling.',
                'Kodni xatosiz mantiq bilan yozing.'
              ],
              xpReward: 50
            }}
            onSuccess={handleSoloSuccess}
          />

          {soloDone && (
            <div className="flex justify-end">
              <button
                onClick={() => quizzes.length > 0 ? setActiveTab('quiz') : handleFinishStep1()}
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-xs font-bold text-white shadow-xl hover:scale-105 transition-all"
              >
                <span>{quizzes.length > 0 ? 'Mini Quiz-ga o‘tish' : 'Darsni Tugatish ✅'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tab 6: Mini Quiz */}
      {activeTab === 'quiz' && quizzes.length > 0 && (
        <div className="space-y-6">
          <QuizCard
            questions={quizzes}
            onComplete={handleQuizComplete}
          />

          {quizDone && (
            <div className="flex justify-end">
              <button
                onClick={handleFinishStep1}
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 px-8 py-3.5 text-sm font-black text-white shadow-xl hover:scale-105 transition-all"
              >
                <span>Darsni va Levelni Tugatish ✅</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Modals for Pedagogical Checks */}
      {showExplainModal && (
        <CodeExplainModal
          userCode={lastUserCode}
          onSubmit={(exp) => {
            setShowExplainModal(false);
          }}
        />
      )}

      {showConfidenceModal && (
        <ConfidenceCheckModal
          levelTitle={lessonData.title}
          actualScorePercent={85}
          onSubmit={handleConfidenceSubmit}
        />
      )}

      {showReflectionModal && (
        <ReflectionModal
          levelTitle={lessonData.title}
          onSubmit={handleReflectionSubmit}
        />
      )}
    </div>
  );
};
