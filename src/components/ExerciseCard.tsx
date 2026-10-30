import React, { useState } from 'react';
import { Exercise, ExecutionResult } from '../types';
import { CodeEditor } from './CodeEditor';
import { Console } from './Console';
import { HintBox } from './HintBox';
import { executePythonCode } from '../services/pythonExecutor';
import { evaluateSubmission, CodeCheckResult } from '../services/codeChecker';
import { HelpCircle, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface ExerciseCardProps {
  exercise: Exercise;
  onSuccess: (result: CodeCheckResult) => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onSuccess }) => {
  const [userCode, setUserCode] = useState<string>(exercise.initialCode || '');
  const [mcqChoice, setMcqChoice] = useState<string>('');
  const [fillBlankInput, setFillBlankInput] = useState<string>('');
  const [execResult, setExecResult] = useState<ExecutionResult | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<CodeCheckResult | null>(null);
  const [showHintBox, setShowHintBox] = useState<boolean>(false);
  const [hintsCount, setHintsCount] = useState<number>(0);

  const handleRunAndCheck = async () => {
    setIsRunning(true);
    setFeedback(null);

    let codeToTest = userCode;

    if (exercise.type === 'fill-code') {
      codeToTest = exercise.initialCode ? exercise.initialCode.replace('____', fillBlankInput) : fillBlankInput;
    } else if (exercise.type === 'multiple-choice') {
      codeToTest = mcqChoice;
    }

    const res = await executePythonCode(codeToTest);
    setExecResult(res);
    setIsRunning(false);

    let checkResult: CodeCheckResult;

    if (exercise.type === 'multiple-choice') {
      checkResult = evaluateSubmission(
        mcqChoice,
        res,
        undefined,
        exercise.correctAnswer,
        exercise.xpReward,
        hintsCount
      );
    } else if (exercise.type === 'fill-code') {
      checkResult = evaluateSubmission(
        fillBlankInput,
        res,
        exercise.expectedOutput,
        exercise.correctAnswer,
        exercise.xpReward,
        hintsCount
      );
    } else {
      checkResult = evaluateSubmission(
        codeToTest,
        res,
        exercise.expectedOutput,
        undefined,
        exercise.xpReward,
        hintsCount
      );
    }

    setFeedback(checkResult);

    if (checkResult.isCorrect) {
      onSuccess(checkResult);
    }
  };

  return (
    <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl">
      {/* Exercise Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-sky-500/10 px-2.5 py-1 text-xs font-bold text-sky-400 border border-sky-500/20">
            {exercise.type.toUpperCase()}
          </span>
          <span className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
            exercise.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
            exercise.difficulty === 'Normal' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
            exercise.difficulty === 'Hard' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
            'bg-purple-500/10 text-purple-400 border border-purple-500/20 animate-pulse'
          }`}>
            {exercise.difficulty} (+{exercise.xpReward} XP)
          </span>
        </div>

        <button
          onClick={() => setShowHintBox(!showHintBox)}
          className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
        >
          <HelpCircle className="h-4 w-4" />
          <span>{showHintBox ? 'Hint-ni berkitish' : 'Hint olish (Yordam)'}</span>
        </button>
      </div>

      {/* Title & Instructions */}
      <div>
        <h3 className="text-base font-bold text-white mb-1">{exercise.title}</h3>
        <p className="text-xs text-slate-300 leading-relaxed">{exercise.instructions}</p>
      </div>

      {/* 3-Stage Hint Container */}
      {showHintBox && (
        <HintBox
          hints={exercise.hints}
          solutionCode={exercise.solutionCode}
          onHintUsed={(level) => setHintsCount(level)}
        />
      )}

      {/* Render input area based on exercise type */}
      {exercise.type === 'multiple-choice' || exercise.type === 'predict-output' ? (
        <div className="space-y-2 pt-2">
          {exercise.options?.map((opt, idx) => (
            <label
              key={idx}
              onClick={() => setMcqChoice(opt)}
              className={`flex items-center gap-3 rounded-xl border p-3.5 text-xs font-medium cursor-pointer transition-all ${
                mcqChoice === opt
                  ? 'border-sky-500 bg-sky-500/15 text-sky-200 shadow-md shadow-sky-500/10'
                  : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              <input
                type="radio"
                name={`mcq_${exercise.id}`}
                checked={mcqChoice === opt}
                onChange={() => setMcqChoice(opt)}
                className="accent-sky-400"
              />
              <span>{opt}</span>
            </label>
          ))}

          <button
            onClick={handleRunAndCheck}
            disabled={!mcqChoice || isRunning}
            className="w-full mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 py-2.5 text-xs font-bold text-white shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all"
          >
            <span>Javobni Tekshirish</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : exercise.type === 'fill-code' ? (
        <div className="space-y-3 pt-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-sm text-slate-200">
            {exercise.initialCode?.split('____')[0]}
            <input
              type="text"
              value={fillBlankInput}
              onChange={(e) => setFillBlankInput(e.target.value)}
              placeholder="bo‘sh joy"
              className="mx-2 rounded bg-slate-800 px-3 py-1 text-emerald-400 font-mono font-bold outline-none border border-sky-500/50"
            />
            {exercise.initialCode?.split('____')[1]}
          </div>

          <button
            onClick={handleRunAndCheck}
            disabled={!fillBlankInput || isRunning}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-2.5 text-xs font-bold text-white shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all"
          >
            <span>Tekshirish</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : (
        /* Standard Coding or Debug or Mini Challenge */
        <div className="space-y-4 pt-1">
          <CodeEditor
            code={userCode}
            onChange={setUserCode}
            onRun={handleRunAndCheck}
            onReset={() => setUserCode(exercise.initialCode || '')}
            isRunning={isRunning}
          />
          <Console result={execResult} isRunning={isRunning} />
        </div>
      )}

      {/* Encouraging Feedback Output Box */}
      {feedback && (
        <div className={`rounded-xl border p-4 text-xs leading-relaxed space-y-1.5 transition-all ${
          feedback.isCorrect
            ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
            : 'border-amber-500/40 bg-amber-500/10 text-amber-200'
        }`}>
          <div className="flex items-center gap-2 font-bold text-sm">
            {feedback.isCorrect ? (
              <CheckCircle className="h-5 w-5 text-emerald-400" />
            ) : (
              <AlertCircle className="h-5 w-5 text-amber-400" />
            )}
            <span>{feedback.isCorrect ? `To‘g‘ri! (+${feedback.earnedXp} XP)` : 'Hali to‘liq emas 🤔'}</span>
          </div>
          <div className="whitespace-pre-wrap">{feedback.feedback}</div>
        </div>
      )}
    </div>
  );
};
