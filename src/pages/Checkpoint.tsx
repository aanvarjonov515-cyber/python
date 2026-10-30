import React, { useState } from 'react';
import { UserProgress, QuizQuestion } from '../types';
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

interface CheckpointProps {
  progress: UserProgress;
  checkpointNumber: number; // 1 (L1-5), 2 (L6-10), 3 (L11-15), 4 (L16-20), 5 (L21-25), 6 (L26-30), 7 (Diagnostic)
  onCompleteCheckpoint: (checkpointKey: string, scorePercent: number) => void;
}

export const CheckpointPage: React.FC<CheckpointProps> = ({
  progress,
  checkpointNumber,
  onCompleteCheckpoint
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  // Generate cumulative questions for this checkpoint
  const sampleQuestions: QuizQuestion[] = [
    {
      id: 'cp_q1',
      question: 'Python’da foydalanuvchidan ma’lumot oladigan funksiya qaysi va u qaysi turda qaytaradi?',
      options: ['print() - int', 'input() - string', 'get() - list', 'read() - float'],
      correctIndex: 1,
      explanation: 'input() funksiyasi foydalanuvchidan ma’lumot oladi va har doim string (matn) turida qaytaradi.'
    },
    {
      id: 'cp_q2',
      question: 'Quyidagi kodda xatolik turi qaysi: `if yosh > 18 print("OK")`?',
      options: ['IndentationError', 'SyntaxError (Ikkita nuqta : yo‘q)', 'TypeError', 'NameError'],
      correctIndex: 1,
      explanation: 'If shartidan keyin ikkita nuqta `:` qo‘yilmaganligi uchun SyntaxError xatosi yuz beradi.'
    },
    {
      id: 'cp_q3',
      question: '`x = 5` va `x == 5` o‘rtasidagi asosiy farq nima?',
      options: ['Hech qanday farq yo‘q', 'x = 5 tenglikni tekshiradi, x == 5 biriktiradi', 'x = 5 qiymat biriktiradi, x == 5 tenglikni solishtiradi', 'Ikkalasi ham xatoli'],
      correctIndex: 2,
      explanation: '`=` biriktirish operatori, `==` esa solishtirish operatori hisoblanadi.'
    },
    {
      id: 'cp_q4',
      question: '`range(1, 5)` ketma-ketligida qaysi sonlar hosil bo‘ladi?',
      options: ['1, 2, 3, 4, 5', '1, 2, 3, 4', '0, 1, 2, 3, 4', '2, 3, 4, 5'],
      correctIndex: 1,
      explanation: 'range(start, stop) oxirgi stop qiymatini o‘z ichiga olmaydi (1, 2, 3, 4).'
    }
  ];

  const currentQ = sampleQuestions[currentIdx];

  const handleSelect = (idx: number) => {
    setSelectedOpt(idx);
  };

  const handleNext = () => {
    if (selectedOpt === null) return;
    const nextAnswers = [...userAnswers, selectedOpt];
    setUserAnswers(nextAnswers);
    setSelectedOpt(null);

    if (currentIdx + 1 < sampleQuestions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Finished
      let correctCount = 0;
      nextAnswers.forEach((ans, i) => {
        if (ans === sampleQuestions[i].correctIndex) correctCount++;
      });
      const percent = Math.round((correctCount / sampleQuestions.length) * 100);
      setCompleted(true);
      onCompleteCheckpoint(`checkpoint_${checkpointNumber}`, percent);
    }
  };

  const totalScorePercent = completed
    ? Math.round(
        (userAnswers.filter((ans, i) => ans === sampleQuestions[i].correctIndex).length /
          sampleQuestions.length) *
          100
      )
    : 0;

  return (
    <div className="space-y-6 max-w-2xl mx-auto pb-16">
      <div className="rounded-3xl border border-sky-500/30 bg-slate-900/90 p-6 shadow-xl space-y-2">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-sky-400" />
          <span>
            {checkpointNumber === 7 ? '🔍 Final Diagnostic Test' : `Checkpoint ${checkpointNumber} Tekshiruvi`}
          </span>
        </h2>
        <p className="text-xs text-slate-300">
          O‘rganilgan barcha o‘tgan mavzular bo‘yicha bilimlaringizni jamlovchi va baholovchi sinov.
        </p>
      </div>

      {!completed ? (
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
            <span className="font-bold text-sky-400">
              Savol {currentIdx + 1} / {sampleQuestions.length}
            </span>
            <span className="text-slate-400">Kumulyativ Sinov</span>
          </div>

          <h3 className="text-sm font-bold text-white leading-relaxed">{currentQ.question}</h3>

          <div className="space-y-2">
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs font-medium transition-all ${
                  selectedOpt === idx
                    ? 'border-sky-500 bg-sky-500/20 text-sky-200 font-bold'
                    : 'border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={selectedOpt === null}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-500 py-3 text-xs font-bold text-slate-950 shadow-lg disabled:opacity-50 transition-all"
          >
            <span>{currentIdx + 1 < sampleQuestions.length ? 'Keyingi Savol' : 'Sinovni Yakunlash'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center space-y-5 shadow-2xl">
          <div className="text-5xl">
            {totalScorePercent >= 70 ? '🎉' : '🔁'}
          </div>

          <h3 className="text-2xl font-black text-white">
            Natija: {totalScorePercent}%
          </h3>

          {totalScorePercent >= 70 ? (
            <div className="rounded-2xl bg-emerald-500/10 p-4 border border-emerald-500/30 text-emerald-300 text-xs space-y-1">
              <div className="font-bold text-sm">✅ Checkpoint Muvaffaqiyatli O‘tildi!</div>
              <p>Siz o‘tilgan mavzularni yaxshi egallabsiz. Keyingi bosqichlarga o‘tishingiz mumkin!</p>
            </div>
          ) : (
            <div className="rounded-2xl bg-amber-500/10 p-4 border border-amber-500/30 text-amber-300 text-xs space-y-1">
              <div className="font-bold text-sm">🔁 Takrorlash Tavsiya Etiladi (Natija &lt; 70%)</div>
              <p>Darslarga qaytib bir marta takrorlash va Review mashqlarini bajarish tavsiya qilinadi.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
