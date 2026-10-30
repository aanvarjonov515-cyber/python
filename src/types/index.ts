export type Difficulty = 'Easy' | 'Normal' | 'Hard' | 'Boss';

export type ExerciseType =
  | 'coding'
  | 'debug'
  | 'predict-output'
  | 'fill-code'
  | 'multiple-choice'
  | 'reorder-code'
  | 'real-life-problem'
  | 'code-prediction'
  | 'mini-challenge';

export interface Keyword {
  word: string;
  meaning: string;
}

export interface ComparisonTableRow {
  col1: string;
  col2: string;
  col3?: string;
  col4?: string;
}

export interface LessonContent {
  levelId: number;
  title: string;
  subtitle: string;
  readingTimeMinutes: number;
  theoryText: string;
  whyNeeded: string;
  realLifeExample: string;
  commonMistakes?: {
    wrong: string;
    right: string;
    explanation: string;
  }[];
  keywords: Keyword[];
  codeExamples: {
    title: string;
    code: string;
    howItWorks: string[];
  }[];
  comparisonTable: {
    headers: string[];
    rows: ComparisonTableRow[];
  };
  learningObjectives?: string[];
  prerequisites?: {
    levelId: number;
    title: string;
  }[];
  soloChallenge?: {
    title: string;
    instructions: string;
    starterCode: string;
    expectedOutput: string;
    solutionCode: string;
  };
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Exercise {
  id: string;
  levelId: number;
  type: ExerciseType;
  difficulty: Difficulty;
  concept: string;
  title: string;
  instructions: string;
  initialCode?: string;
  expectedOutput?: string;
  testVariables?: Record<string, any>;
  solutionCode?: string;
  hints: [string, string, string]; // 3-stage hint system
  xpReward: number;
  options?: string[]; // for multiple-choice or reorder
  correctAnswer?: string | number | string[];
}

export interface LevelInfo {
  id: number;
  title: string;
  subtitle: string;
  category: 'Basics' | 'Data Structures' | 'Control Flow' | 'Functions & Modules' | 'Advanced' | 'OOP' | 'Projects';
  xpRequired: number;
  isBossLevel?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  category: 'general' | 'streak' | 'mastery' | 'challenge';
}

export interface ExerciseHistoryItem {
  id: string;
  exerciseId: string;
  exerciseTitle: string;
  levelId: number;
  date: string;
  result: 'success' | 'fail';
  xpEarned: number;
  attempts: number;
  hintsUsed: number;
  submittedCode?: string;
}

export interface SavedCode {
  id: string;
  title: string;
  levelId: number;
  date: string;
  code: string;
}

export type ConfidenceRating = 'confused' | 'basic' | 'understood' | 'mastered';

export interface SpacedRepetitionItem {
  levelId: number;
  lastReviewedAt: string;
  reviewIntervalDays: number; // 1, 3, 7, 14, 30
  nextReviewDueAt: string;
}

export interface GradeWeights {
  quizWeight: number;       // Default 20%
  codingWeight: number;     // Default 35%
  debugWeight: number;      // Default 15%
  codeReadingWeight: number;// Default 10%
  projectWeight: number;    // Default 20%
}

export interface ProjectTask {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  starterCode: string;
  expectedOutputSubstring: string;
  hints: [string, string, string];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tier: 'starter' | 'intermediate' | 'advanced';
  unlockedAtLevel: number;
  requiredKnowledge: string[];
  goal: string;
  tasks: ProjectTask[];
  securityReviewQuestions?: string[];
  readmeTemplate?: string;
}

export interface PortfolioItem {
  id: string;
  projectId: string;
  title: string;
  completedAt: string;
  code: string;
  readmeText: string;
  tier: 'starter' | 'intermediate' | 'advanced';
}

export interface CyberLabChallenge {
  id: string;
  title: string;
  type: 'quiz' | 'vulnerability' | 'secure_code' | 'log_analysis' | 'password' | 'integrity';
  instructions: string;
  codeSnippet?: string;
  options?: string[];
  correctAnswer?: string;
  explanation: string;
}

export interface CyberLevel {
  id: number;
  title: string;
  subtitle: string;
  category: 'Basics' | 'Principles' | 'Authentication' | 'Cryptography' | 'Secure Coding' | 'Network & Web';
  theoryText: string;
  realWorldContext: string;
  ethicalRuleNotice: string;
  labChallenge: CyberLabChallenge;
  xpReward: number;
}

export interface UserProgress {
  userName: string;
  skillLevel: 'beginner' | 'intermediate' | 'basic';
  xp: number;
  currentLevel: number;
  unlockedLevels: number[];
  completedLessons: number[];
  completedExercises: string[];
  exerciseHistory: ExerciseHistoryItem[];
  achievements: string[];
  streak: number;
  lastVisit: string;
  weakTopics: Record<string, number>;
  codeHistory: SavedCode[];
  dailyChallengeLastCompleted?: string;
  dailyStreakCount: number;
  settings: {
    soundEnabled: boolean;
    autoRun: boolean;
    fontSize: number;
    theme: 'dark' | 'synthwave' | 'emerald';
  };
  onboardingCompleted: boolean;
  // Pedagogical Control System (#56 - #75)
  masteryScores: Record<number, number>; // levelId -> percentage (0-100)
  misconceptionCounts: Record<string, number>; // misconception key -> count
  confidenceRatings: Record<number, ConfidenceRating>;
  reflections: Record<number, string>;
  codeExplanations: Record<string, string>;
  spacedRepetitionList: SpacedRepetitionItem[];
  gradeWeights: GradeWeights;
  checkpointResults: Record<string, number>; // checkpoint key -> score

  // Dual Skill System (#76 - #130)
  cyberXp: number;
  unlockedCyberLevels: number[];
  completedCyberLevels: number[];
  completedProjects: string[];
  portfolio: PortfolioItem[];
  cyberBadges: string[];
}

export interface ExecutionResult {
  output: string;
  error?: string;
  executionTimeMs?: number;
}
