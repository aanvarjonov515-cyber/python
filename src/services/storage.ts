import { UserProgress, ExerciseHistoryItem, SavedCode } from '../types';

const STORAGE_KEY = 'pyquest_user_progress_v1';

export const initialProgress: UserProgress = {
  userName: 'Talaba',
  skillLevel: 'beginner',
  xp: 0,
  currentLevel: 0,
  unlockedLevels: [0],
  completedLessons: [],
  completedExercises: [],
  exerciseHistory: [],
  achievements: [],
  streak: 1,
  lastVisit: new Date().toISOString(),
  weakTopics: {},
  codeHistory: [],
  dailyStreakCount: 1,
  settings: {
    soundEnabled: true,
    autoRun: false,
    fontSize: 14,
    theme: 'dark'
  },
  onboardingCompleted: false,
  masteryScores: {},
  misconceptionCounts: {},
  confidenceRatings: {},
  reflections: {},
  codeExplanations: {},
  spacedRepetitionList: [],
  gradeWeights: {
    quizWeight: 20,
    codingWeight: 35,
    debugWeight: 15,
    codeReadingWeight: 10,
    projectWeight: 20
  },
  checkpointResults: {},
  cyberXp: 0,
  unlockedCyberLevels: [0],
  completedCyberLevels: [],
  completedProjects: [],
  portfolio: [],
  cyberBadges: []
};

export function getStoredProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialProgress;
    const parsed = JSON.parse(raw);
    
    // Check and update streak
    const now = new Date();
    const lastVisit = parsed.lastVisit ? new Date(parsed.lastVisit) : new Date();
    const diffDays = Math.floor((now.getTime() - lastVisit.getTime()) / (1000 * 3600 * 24));
    
    let newStreak = parsed.streak || 1;
    if (diffDays === 1) {
      newStreak += 1;
    } else if (diffDays > 1) {
      newStreak = 1;
    }

    const updated: UserProgress = {
      ...initialProgress,
      ...parsed,
      streak: newStreak,
      lastVisit: now.toISOString()
    };

    saveProgress(updated);
    return updated;
  } catch (e) {
    console.error('Failed to load progress from localStorage', e);
    return initialProgress;
  }
}

export function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
}

export function resetProgress(): UserProgress {
  const fresh = { ...initialProgress, lastVisit: new Date().toISOString() };
  saveProgress(fresh);
  return fresh;
}

export function getUserRank(xp: number): { rankTitle: string; levelNumber: number; nextXp: number } {
  if (xp < 100) return { rankTitle: 'Level 1 — Python Rookie', levelNumber: 1, nextXp: 100 };
  if (xp < 300) return { rankTitle: 'Level 2 — Code Explorer', levelNumber: 2, nextXp: 300 };
  if (xp < 600) return { rankTitle: 'Level 3 — Logic Builder', levelNumber: 3, nextXp: 600 };
  if (xp < 1000) return { rankTitle: 'Level 4 — Python Coder', levelNumber: 4, nextXp: 1000 };
  if (xp < 1600) return { rankTitle: 'Level 5 — Problem Solver', levelNumber: 5, nextXp: 1600 };
  if (xp < 2500) return { rankTitle: 'Level 6 — Python Developer', levelNumber: 6, nextXp: 2500 };
  return { rankTitle: 'Level 7 — Python Master 👑', levelNumber: 7, nextXp: 5000 };
}
