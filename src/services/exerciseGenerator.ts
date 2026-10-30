import { Exercise, ExerciseType, Difficulty } from '../types';
import { EXERCISES_POOL } from '../data/exercises';

export function getExerciseForLevel(
  levelId: number,
  completedIds: string[],
  userSkillLevel: Difficulty = 'Normal'
): Exercise {
  const pool = EXERCISES_POOL[levelId] || [];
  
  // Filter out exercises that user already completed
  const uncompleted = pool.filter(ex => !completedIds.includes(ex.id));

  if (uncompleted.length > 0) {
    // Return first uncompleted or random from uncompleted
    return uncompleted[Math.floor(Math.random() * uncompleted.length)];
  }

  // If all static pool exercises completed or level pool empty, generate a unique template exercise dynamically
  return generateDynamicUniqueExercise(levelId, completedIds, userSkillLevel);
}

function generateDynamicUniqueExercise(
  levelId: number,
  completedIds: string[],
  difficulty: Difficulty
): Exercise {
  const randomSalt = Math.floor(100 + Math.random() * 900);
  const uniqueId = `dynamic_level${levelId}_${randomSalt}_${Date.now()}`;

  // Ensure unique ID
  if (completedIds.includes(uniqueId)) {
    return generateDynamicUniqueExercise(levelId, completedIds, difficulty);
  }

  // Generate varied context scenarios
  const scenarios = [
    { name: 'Talaba stipendiyasi', varName: 'stipendiya', valA: 500000, valB: 700000 },
    { name: 'Avtomobil tezligi', varName: 'tezlik', valA: 70, valB: 120 },
    { name: 'Do‘kon narxlari', varName: 'narx', valA: 25000, valB: 40000 },
    { name: 'Kutubxona kitoblari', varName: 'kitob_soni', valA: 15, valB: 30 }
  ];

  const selectedScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

  return {
    id: uniqueId,
    levelId,
    type: 'coding',
    difficulty,
    concept: `level_${levelId}_concept`,
    title: `${selectedScenario.name} amaliy masalasi (#${randomSalt})`,
    instructions: `\`${selectedScenario.varName}\` nomli o‘zgaruvchiga \`${selectedScenario.valA}\` qiymatini tayinlang va ekranga chiqaring.`,
    initialCode: `# ${selectedScenario.name} uchun kod yozing\n${selectedScenario.varName} = ${selectedScenario.valA}\nprint(${selectedScenario.varName})`,
    expectedOutput: String(selectedScenario.valA),
    hints: [
      `\`${selectedScenario.varName}\` nomli o‘zgaruvchidan foydalaning.`,
      `Qiymat xuddi shunday \`${selectedScenario.valA}\` bo‘lishi kerak.`,
      `\`${selectedScenario.varName} = ${selectedScenario.valA}\` deb yozib, print qiling.`
    ],
    xpReward: difficulty === 'Boss' ? 100 : difficulty === 'Hard' ? 40 : 20
  };
}
