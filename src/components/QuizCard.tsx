import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { HelpCircle, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface QuizCardProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const currentQ = questions[currentIndex];

  if (!currentQ) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-300">
        <h4 className="text-lg font-bold mb-2">Quiz yakunlandi! 🎉</h4>
        <p className="text-xs mb-4">Siz {questions.length} ta savoldan {score} tasiga to‘g‘ri javob berdingiz.</p>
        <button
          onClick={() => onComplete(score)}
          className="rounded-xl bg-emerald-500 px-6 py-2.5 text-xs font-bold text-slate-950 shadow-lg hover:scale-105 transition-all"
        >
          Darsni yakunlash
        </button>
      </div>
    );
  }

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOpt(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setIsAnswered(false);
    setSelectedOpt(null);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <span className="text-xs font-bold text-sky-400">
          Mini Quiz • Savol {currentIndex + 1} / {questions.length}
        </span>
        <span className="text-xs font-semibold text-amber-400">Ball: {score}</span>
      </div>

      <h4 className="text-sm font-bold text-white">{currentQ.question}</h4>

      <div className="space-y-2">
        {currentQ.options.map((opt, idx) => {
          let stateStyle = 'border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-800/50';

          if (isAnswered) {
            if (idx === currentQ.correctIndex) {
              stateStyle = 'border-emerald-500 bg-emerald-500/20 text-emerald-200 font-semibold';
            } else if (idx === selectedOpt) {
              stateStyle = 'border-rose-500 bg-rose-500/20 text-rose-200';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={`w-full flex items-center justify-between rounded-xl border p-3.5 text-xs text-left transition-all ${stateStyle}`}
            >
              <span>{opt}</span>
              {isAnswered && idx === currentQ.correctIndex && (
                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              )}
              {isAnswered && idx === selectedOpt && idx !== currentQ.correctIndex && (
                <XCircle className="h-4 w-4 text-rose-400 flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="rounded-xl bg-slate-950 p-3 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2">
          <p><span className="font-bold text-sky-400">Izoh: </span>{currentQ.explanation}</p>
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 rounded-lg bg-sky-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:scale-105 transition-all"
          >
            <span>{currentIndex + 1 < questions.length ? 'Keyingi savol' : 'Natijani ko‘rish'}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
