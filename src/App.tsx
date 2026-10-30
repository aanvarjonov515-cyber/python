import React, { useState, useEffect } from 'react';
import { UserProgress, Achievement, ExerciseHistoryItem, ConfidenceRating, GradeWeights } from './types';
import { getStoredProgress, saveProgress } from './services/storage';
import { ACHIEVEMENTS_LIST } from './data/achievements';
import { Header } from './components/Header';
import { Sidebar, PageTab } from './components/Sidebar';
import { OnboardingModal } from './components/OnboardingModal';
import { SearchModal } from './components/SearchModal';
import { AchievementPopup } from './components/AchievementPopup';
import { CertificateModal } from './components/CertificateModal';

import { Dashboard } from './pages/Dashboard';
import { Course } from './pages/Course';
import { Lesson } from './pages/Lesson';
import { Practice } from './pages/Practice';
import { DailyChallenge } from './pages/DailyChallenge';
import { Review } from './pages/Review';
import { Progress } from './pages/Progress';
import { HistoryPage } from './pages/History';
import { AchievementsPage } from './pages/Achievements';
import { CheatSheetPage } from './pages/CheatSheet';
import { SettingsPage } from './pages/Settings';
import { CheckpointPage } from './pages/Checkpoint';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { ProjectsPage } from './pages/Projects';
import { CyberLab } from './pages/CyberLab';
import { PortfolioPage } from './pages/Portfolio';

export function App() {
  const [progress, setProgress] = useState<UserProgress>(() => getStoredProgress());
  const [activeTab, setActiveTab] = useState<PageTab | 'lesson'>('dashboard');
  const [selectedLevelId, setSelectedLevelId] = useState<number>(0);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [unlockedAchievement, setUnlockedAchievement] = useState<Achievement | null>(null);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // Keyboard shortcut Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearch(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOnboardingComplete = (skillLevel: 'beginner' | 'intermediate' | 'basic', name: string) => {
    const initialUnlocked = skillLevel === 'beginner' ? [0] : [0, 1, 2];
    const updated: UserProgress = {
      ...progress,
      userName: name || 'Talaba',
      skillLevel,
      unlockedLevels: initialUnlocked,
      currentLevel: skillLevel === 'beginner' ? 0 : 1,
      onboardingCompleted: true
    };
    setProgress(updated);
  };

  const checkAchievementUnlocks = (updatedProg: UserProgress) => {
    const newlyUnlocked: string[] = [];

    if (!updatedProg.achievements.includes('first_code') && updatedProg.completedExercises.length >= 1) {
      newlyUnlocked.push('first_code');
    }
    if (!updatedProg.achievements.includes('streak_7') && updatedProg.streak >= 7) {
      newlyUnlocked.push('streak_7');
    }
    if (!updatedProg.achievements.includes('python_explorer') && updatedProg.completedLessons.length >= 15) {
      newlyUnlocked.push('python_explorer');
    }
    if (!updatedProg.achievements.includes('python_master') && updatedProg.completedLessons.length >= 32) {
      newlyUnlocked.push('python_master');
    }

    if (newlyUnlocked.length > 0) {
      const ach = ACHIEVEMENTS_LIST.find(a => a.id === newlyUnlocked[0]);
      if (ach) setUnlockedAchievement(ach);

      return {
        ...updatedProg,
        achievements: [...updatedProg.achievements, ...newlyUnlocked]
      };
    }

    return updatedProg;
  };

  const handleCompleteLesson = (levelId: number, xpEarned: number, masteryPercent: number = 80) => {
    const nextLevel = levelId < 32 ? levelId + 1 : levelId;
    const newUnlocked = Array.from(new Set([...progress.unlockedLevels, nextLevel]));
    const newCompletedLessons = Array.from(new Set([...progress.completedLessons, levelId]));

    let updatedProg: UserProgress = {
      ...progress,
      xp: progress.xp + xpEarned,
      currentLevel: nextLevel,
      unlockedLevels: newUnlocked,
      completedLessons: newCompletedLessons,
      masteryScores: {
        ...progress.masteryScores,
        [levelId]: masteryPercent
      }
    };

    updatedProg = checkAchievementUnlocks(updatedProg);
    setProgress(updatedProg);
  };

  const handleExerciseSuccess = (earnedXp: number, exerciseId: string) => {
    const today = new Date().toLocaleDateString('uz-UZ');

    const historyItem: ExerciseHistoryItem = {
      id: String(Date.now()),
      exerciseId,
      exerciseTitle: `Level ${progress.currentLevel} Mashqi`,
      levelId: progress.currentLevel,
      date: today,
      result: 'success',
      xpEarned: earnedXp,
      attempts: 1,
      hintsUsed: 0
    };

    let updatedProg: UserProgress = {
      ...progress,
      xp: progress.xp + earnedXp,
      completedExercises: Array.from(new Set([...progress.completedExercises, exerciseId])),
      exerciseHistory: [historyItem, ...progress.exerciseHistory]
    };

    updatedProg = checkAchievementUnlocks(updatedProg);
    setProgress(updatedProg);
  };

  const handleSelectLevel = (levelId: number) => {
    setSelectedLevelId(levelId);
    setActiveTab('lesson');
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-950 font-sans text-slate-100 selection:bg-sky-500/30 selection:text-white">
      {/* Onboarding Modal for First Visit */}
      {!progress.onboardingCompleted && (
        <OnboardingModal onComplete={handleOnboardingComplete} />
      )}

      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab === 'lesson' ? 'course' : activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header Bar */}
        <Header
          progress={progress}
          onOpenSearch={() => setShowSearch(true)}
          onOpenProfile={() => setActiveTab('settings')}
        />

        {/* Scrollable View Container */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {activeTab === 'dashboard' && (
            <Dashboard
              progress={progress}
              onNavigateTab={(tab) => setActiveTab(tab)}
              onSelectLevel={handleSelectLevel}
            />
          )}

          {activeTab === 'course' && (
            <Course
              progress={progress}
              onSelectLevel={handleSelectLevel}
              onOpenCertificate={() => setShowCertificate(true)}
            />
          )}

          {activeTab === 'projects' && (
            <ProjectsPage
              progress={progress}
              onCompleteProjectTask={(projectId, taskCode, readmeText) => {
                const todayStr = new Date().toLocaleDateString('uz-UZ');
                const portfolioEntry = {
                  id: String(Date.now()),
                  projectId,
                  title: `Real Project #${projectId}`,
                  completedAt: todayStr,
                  code: taskCode,
                  readmeText,
                  tier: 'starter' as const
                };
                setProgress({
                  ...progress,
                  xp: progress.xp + 100,
                  completedProjects: Array.from(new Set([...progress.completedProjects, projectId])),
                  portfolio: [portfolioEntry, ...progress.portfolio]
                });
              }}
            />
          )}

          {activeTab === 'cyberlab' && (
            <CyberLab
              progress={progress}
              onCompleteCyberLevel={(cyberLvlId, earnedCyberXp) => {
                const nextCyberLvl = cyberLvlId + 1;
                setProgress({
                  ...progress,
                  cyberXp: progress.cyberXp + earnedCyberXp,
                  completedCyberLevels: Array.from(new Set([...progress.completedCyberLevels, cyberLvlId])),
                  unlockedCyberLevels: Array.from(new Set([...progress.unlockedCyberLevels, nextCyberLvl]))
                });
              }}
            />
          )}

          {activeTab === 'portfolio' && (
            <PortfolioPage progress={progress} />
          )}

          {activeTab === 'lesson' && (
            <Lesson
              levelId={selectedLevelId}
              progress={progress}
              onCompleteLesson={handleCompleteLesson}
              onNavigateLevel={(lvl) => setSelectedLevelId(lvl)}
              onBackToCourse={() => setActiveTab('course')}
              onUpdateConfidence={(lvl, rating) => {
                setProgress({
                  ...progress,
                  confidenceRatings: { ...progress.confidenceRatings, [lvl]: rating }
                });
              }}
              onUpdateReflection={(lvl, text) => {
                setProgress({
                  ...progress,
                  reflections: { ...progress.reflections, [lvl]: text }
                });
              }}
            />
          )}

          {activeTab === 'practice' && (
            <Practice
              progress={progress}
              onSuccessExercise={handleExerciseSuccess}
            />
          )}

          {activeTab === 'daily' && (
            <DailyChallenge
              progress={progress}
              onSuccessDaily={(earnedXp, exId) => {
                const todayStr = new Date().toISOString().split('T')[0];
                const updated: UserProgress = {
                  ...progress,
                  dailyChallengeLastCompleted: todayStr,
                  streak: progress.streak + 1
                };
                setProgress(updated);
                handleExerciseSuccess(earnedXp, exId);
              }}
            />
          )}

          {activeTab === 'review' && (
            <Review
              progress={progress}
              onSuccessReview={handleExerciseSuccess}
            />
          )}

          {activeTab === 'checkpoint' && (
            <CheckpointPage
              progress={progress}
              checkpointNumber={1}
              onCompleteCheckpoint={(cpKey, score) => {
                setProgress({
                  ...progress,
                  checkpointResults: { ...progress.checkpointResults, [cpKey]: score }
                });
              }}
            />
          )}

          {activeTab === 'progress' && (
            <Progress progress={progress} />
          )}

          {activeTab === 'history' && (
            <HistoryPage progress={progress} />
          )}

          {activeTab === 'achievements' && (
            <AchievementsPage progress={progress} />
          )}

          {activeTab === 'cheatsheet' && (
            <CheatSheetPage />
          )}

          {activeTab === 'teacher' && (
            <TeacherDashboard
              progress={progress}
              onUpdateWeights={(weights) => {
                setProgress({
                  ...progress,
                  gradeWeights: weights
                });
              }}
            />
          )}

          {activeTab === 'settings' && (
            <SettingsPage
              progress={progress}
              onUpdateProgress={setProgress}
            />
          )}
        </main>
      </div>

      {/* Search Modal */}
      {showSearch && (
        <SearchModal
          onClose={() => setShowSearch(false)}
          onSelectLevel={handleSelectLevel}
          onSelectCheatSheet={() => setActiveTab('cheatsheet')}
        />
      )}

      {/* Official Certificate Modal */}
      {showCertificate && (
        <CertificateModal
          progress={progress}
          onClose={() => setShowCertificate(false)}
        />
      )}

      {/* Achievement Unlocked Celebration Popup */}
      <AchievementPopup
        achievement={unlockedAchievement}
        onClose={() => setUnlockedAchievement(null)}
      />
    </div>
  );
}

export default App;
