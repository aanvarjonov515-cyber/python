import { ExecutionResult } from '../types';

export interface CodeCheckResult {
  isCorrect: boolean;
  feedback: string;
  earnedXp: number;
  errorCategory?: 'SyntaxError' | 'IndentationError' | 'TypeError' | 'NameError' | 'LogicError' | 'WrongOutput' | 'Misconception';
  misconceptionKey?: string;
}

export function evaluateSubmission(
  userCode: string,
  executionResult: ExecutionResult,
  expectedOutput?: string,
  correctAnswer?: string | number | string[],
  baseXp: number = 20,
  hintsUsedCount: number = 0
): CodeCheckResult {
  // Pre-check code for common student misconceptions (#61 & #62)
  if (userCode.match(/\bif\b\s+[a-zA-Z0-9_]+\s*=\s*[^=]/)) {
    return {
      isCorrect: false,
      feedback: 'Deystviya deyarli to‘g‘ri, lekin mantiqiy xato bor 🤔\n\nSiz `if` shartida `=` ishlatdingiz. `=` biriktirish operatori xisoblanadi, qiymat tengligini tekshirish uchun `==` ishlatilishi kerak!',
      earnedXp: 0,
      errorCategory: 'Misconception',
      misconceptionKey: 'assignment_vs_comparison'
    };
  }

  // Check for string + number concat error
  if (userCode.match(/"[^"]*"\s*\+\s*\d+/) || userCode.match(/\d+\s*\+\s*"[^"]*"/)) {
    return {
      isCorrect: false,
      feedback: 'Matn (string) bilan son (integer) ni to‘g‘ridan-to‘g‘ri `+` orqali qo‘shib bo‘lmaydi. Sonni `str(son)` ga o‘tkazing yoki f-string `f"..."` ishlatib ko‘ring!',
      earnedXp: 0,
      errorCategory: 'Misconception',
      misconceptionKey: 'string_vs_integer'
    };
  }

  // If there was a runtime or syntax error
  if (executionResult.error) {
    let category: CodeCheckResult['errorCategory'] = 'SyntaxError';
    let friendlyFeedback = 'Hali to‘liq emas 🤔\n\nKodingizda xatolik yuz berdi. ';
    let misKey: string | undefined = undefined;

    if (executionResult.error.includes('SyntaxError')) {
      category = 'SyntaxError';
      friendlyFeedback += 'Sintaksis qoidasini ko‘rib chiqing. Qavslar yoki tirnoqlar to‘g‘ri yopilganiga va ikkita nuqta (:) esdan chiqmaganiga ishonch hosil qiling!';
      misKey = 'syntax_error';
    } else if (executionResult.error.includes('NameError')) {
      category = 'NameError';
      friendlyFeedback += 'Noma’lum o‘zgaruvchi yoki funksiya nomi ishlatildi. Nomi to‘g‘ri yozilganini va katta-kichik harflarni tekshiring!';
      misKey = 'wrong_variable_name';
    } else if (executionResult.error.includes('IndentationError')) {
      category = 'IndentationError';
      friendlyFeedback += 'Kod surilishi (probellar soni) buzilgan. If, for yoki def ostidagi kodlarni 4 ta probel surib yozishni unutmang!';
      misKey = 'indentation_error';
    } else if (executionResult.error.includes('TypeError')) {
      category = 'TypeError';
      friendlyFeedback += 'Ma’lumot turlari mos kelmadi (TypeError). Matn bilan son ustidagi amallarni tekshiring!';
      misKey = 'type_error';
    } else {
      friendlyFeedback += executionResult.error;
    }

    return {
      isCorrect: false,
      feedback: friendlyFeedback,
      earnedXp: 0,
      errorCategory: category,
      misconceptionKey: misKey
    };
  }

  // Calculate XP deduction for hints used (without being punitive)
  const xpPenalty = Math.min(hintsUsedCount * 5, Math.floor(baseXp * 0.4));
  const finalXp = Math.max(5, baseXp - xpPenalty);

  // Check expected output if provided
  if (expectedOutput !== undefined) {
    const cleanActual = executionResult.output.trim().replace(/\r\n/g, '\n');
    const cleanExpected = expectedOutput.trim().replace(/\r\n/g, '\n');

    if (cleanActual === cleanExpected) {
      return {
        isCorrect: true,
        feedback: 'Barakalla! Kod a’lo darajada va to‘liq to‘g‘ri ishladi! 🎉',
        earnedXp: finalXp
      };
    } else {
      let advice = 'Chiqgan natija kutilganiga to‘liq mos kelmadi 🤔\n\n';
      advice += `Sizning natija: "${cleanActual}"\n`;
      advice += `Kutilgan natija: "${cleanExpected}"\n\n`;
      advice += 'Ekranga chiqarilayotgan matn, probellar va harflar katta-kichikligini yana bir bor ko‘rib chiqing!';

      return {
        isCorrect: false,
        feedback: advice,
        earnedXp: 0,
        errorCategory: 'WrongOutput',
        misconceptionKey: 'wrong_output_formatting'
      };
    }
  }

  // If correct answer passed directly (e.g., for multiple choice or fill-code)
  if (correctAnswer !== undefined) {
    if (String(correctAnswer).trim() === userCode.trim()) {
      return {
        isCorrect: true,
        feedback: 'Juda to‘g‘ri javob! Olingan bilimlarni yaxshi egallabsiz! 🌟',
        earnedXp: finalXp
      };
    } else {
      return {
        isCorrect: false,
        feedback: 'Javob hali unchalik to‘g‘ri emas 🤔 O‘rgangan mavzuni va maslahatlarni bir ko‘rib chiqing!',
        earnedXp: 0,
        errorCategory: 'WrongOutput'
      };
    }
  }

  // Fallback: If code executed without errors and produced output
  if (executionResult.output.length > 0) {
    return {
      isCorrect: true,
      feedback: 'Ajoyib! Kodingiz xatosiz bajarildi! 🚀',
      earnedXp: finalXp
    };
  }

  return {
    isCorrect: false,
    feedback: 'Dastur hech qanday natija chiqarmadi. `print()` orqali natijani ekranga chiqarganingizga ishonch hosil qiling!',
    earnedXp: 0,
    errorCategory: 'LogicError'
  };
}
