import { Exercise, QuizQuestion } from '../types';

export const EXERCISES_POOL: Record<number, Exercise[]> = {
  0: [
    {
      id: 'level0_code_print_101',
      levelId: 0,
      type: 'coding',
      difficulty: 'Easy',
      concept: 'print',
      title: 'Ekranga salomlashuv chiqarish',
      instructions: '`print()` funksiyasi yordamida ekranga exactly `"Salom, Python!"` matnini chiqaring.',
      initialCode: '# Kodni shu yerga yozing\n',
      expectedOutput: 'Salom, Python!',
      hints: [
        'Ekranga chiqarish uchun `print(...)` funksiyasidan foydalaning.',
        'Matnni qozoqtirnoq (" ") ichida yozing.',
        '`print("Salom, Python!")` deb yozing.'
      ],
      xpReward: 10
    },
    {
      id: 'level0_fill_blank_102',
      levelId: 0,
      type: 'fill-code',
      difficulty: 'Easy',
      concept: 'print',
      title: 'Bo‘sh joyni to‘ldiring',
      instructions: 'Ekranga "PyQuest" so‘zini chiqarish uchun bo‘sh joyni to‘g‘ri funksiya bilan to‘ldiring.',
      initialCode: '____("PyQuest")',
      expectedOutput: 'PyQuest',
      hints: [
        'Python-da ekranga ma’lumot chiqaradigan 5 harfli funksiyani eslang.',
        'Kichik harflar bilan `print` deb yoziladi.',
        '`print`'
      ],
      xpReward: 10,
      correctAnswer: 'print'
    },
    {
      id: 'level0_multiple_103',
      levelId: 0,
      type: 'multiple-choice',
      difficulty: 'Normal',
      concept: 'comment',
      title: 'Python-da izoh (comment) qaysi belgi bilan yoziladi?',
      instructions: 'To‘g‘ri javob variantini tanlang.',
      options: ['// Bu izoh', '# Bu izoh', '/* Bu izoh */', '-- Bu izoh'],
      correctAnswer: '# Bu izoh',
      hints: [
        'Python-da izoh reshotka belgisi bilan boshlanadi.',
        'Reshotka belgisi `#`',
        'To‘g‘ri javob: `# Bu izoh`'
      ],
      xpReward: 20
    }
  ],
  1: [
    {
      id: 'level1_var_name_101',
      levelId: 1,
      type: 'coding',
      difficulty: 'Easy',
      concept: 'variables',
      title: 'Ismni o‘zgaruvchida saqlash',
      instructions: '`ism` nomli o‘zgaruvchi yarating va unga `"Ali"` matnini biriktiring. So‘ngra `print(ism)` orqali ekranga chiqaring.',
      initialCode: 'ism = "Ali"\nprint(ism)',
      expectedOutput: 'Ali',
      hints: [
        'O‘zgaruvchiga qiymat biriktirish uchun `=` belgisidan foydalaning.',
        '`ism = "Ali"`',
        '`ism = "Ali"` so‘ng `print(ism)`'
      ],
      xpReward: 10
    },
    {
      id: 'level1_debug_102',
      levelId: 1,
      type: 'debug',
      difficulty: 'Normal',
      concept: 'variables',
      title: 'Xatoni toping',
      instructions: 'Quyidagi koddagi imlo xatosini topib tuzating.',
      initialCode: 'yosh = 20\npritn(yosh)',
      expectedOutput: '20',
      hints: [
        '`pritn` so‘zida harf adashgan.',
        'To‘g‘ri funksiya nomi `print`.',
        'Koddagi `pritn` so‘zini `print` deb o‘zgartiring.'
      ],
      xpReward: 20
    }
  ],
  2: [
    {
      id: 'level2_type_check_101',
      levelId: 2,
      type: 'predict-output',
      difficulty: 'Normal',
      concept: 'data_types',
      title: 'Natijani taxmin qiling',
      instructions: 'Quyidagi kod ishlaganda ekranda nima paydo bo‘ladi?',
      initialCode: 'a = 15\nb = "5"\nprint(type(a) == int)',
      options: ['True', 'False', '15', 'Error'],
      correctAnswer: 'True',
      hints: [
        '`a` butun son (int) hisoblanadi.',
        '`type(a) == int` ifodasi True qaytaradi.',
        'To‘g‘ri javob: True'
      ],
      xpReward: 20
    }
  ],
  5: [
    {
      id: 'level5_boss_challenge_501',
      levelId: 5,
      type: 'mini-challenge',
      difficulty: 'Boss',
      concept: 'operators',
      title: '👑 Boss Challenge — Chegirma Hisoblagich',
      instructions: 'Xarid summasi (`xarid = 100`) va chegirma foizini (`chegirma = 20`) e’lon qiling. Yakuniy to‘lanadigan summani (`100 - (100 * 20 / 100)`) hisoblab ekranga chiqaring.',
      initialCode: 'xarid = 100\nchegirma = 20\n# kodingizni yozing\n',
      expectedOutput: '80.0',
      hints: [
        'Chegirma summasi = `xarid * (chegirma / 100)`',
        'Yakuniy summa = `xarid - chegirma_summasi`',
        '`yakuniy = xarid - (xarid * chegirma / 100)` so‘ng `print(yakuniy)`'
      ],
      xpReward: 100
    }
  ],
  6: [
    {
      id: 'level6_if_else_101',
      levelId: 6,
      type: 'coding',
      difficulty: 'Normal',
      concept: 'conditions',
      title: 'Haroratni tekshirish',
      instructions: '`harorat = 32` bo‘lganda, agar harorat 30 dan katta yoki teng bo‘lsa `"Havo issiq"`, aks holda `"Havo normal"` deb chiqaradigan dastur yozing.',
      initialCode: 'harorat = 32\nif harorat >= 30:\n    print("Havo issiq")\nelse:\n    print("Havo normal")',
      expectedOutput: 'Havo issiq',
      hints: [
        'Shart tekshirish uchun `if harorat >= 30:` deb yozing.',
        'Chiqariladigan matn: "Havo issiq".',
        'If kodi ostiga `print("Havo issiq")` qo‘ying.'
      ],
      xpReward: 20
    }
  ],
  7: [
    {
      id: 'level7_for_range_101',
      levelId: 7,
      type: 'coding',
      difficulty: 'Easy',
      concept: 'for_loop',
      title: '1 dan 3 gacha sanash',
      instructions: '`for` sikli va `range(1, 4)` yordamida 1, 2, 3 sonlarini alohida satrlarda ekranga chiqaring.',
      initialCode: 'for son in range(1, 4):\n    print(son)',
      expectedOutput: '1\n2\n3',
      hints: [
        '`range(1, 4)` 1, 2, 3 sonlarini beradi.',
        '`for son in range(1, 4):`',
        'Tanasida `print(son)` yozing.'
      ],
      xpReward: 10
    }
  ],
  8: [
    {
      id: 'level8_while_loop_101',
      levelId: 8,
      type: 'coding',
      difficulty: 'Normal',
      concept: 'while_loop',
      title: 'While sikli orqali hisoblash',
      instructions: '`son = 1` bilan boshlab, `while son <= 3:` sharti bilan 1, 2, 3 ni ekranga chiqaruvchi va har safar `son += 1` qiluvchi dastur yozing.',
      initialCode: 'son = 1\nwhile son <= 3:\n    print(son)\n    son += 1',
      expectedOutput: '1\n2\n3',
      hints: [
        '`while son <= 3:` shartini yozing.',
        'Sikl ichida `print(son)` va `son += 1` bajaring.',
        'Kod tayyor, Run bosing.'
      ],
      xpReward: 20
    }
  ]
};

export const LEVEL_QUIZZES: Record<number, QuizQuestion[]> = {
  0: [
    {
      id: 'q0_1',
      question: 'Python dasturlash tilida ekranga matn chiqaruvchi asosiy funksiya qaysi?',
      options: ['echo()', 'print()', 'console.log()', 'write()'],
      correctIndex: 1,
      explanation: 'Python’da ekranga matn va ma’lumot chiqarish uchun `print()` funksiyasi ishlatiladi.'
    },
    {
      id: 'q0_2',
      question: 'Python-da izohlar (comment) qaysi belgi bilan boshlanadi?',
      options: ['//', '/*', '#', '--'],
      correctIndex: 2,
      explanation: 'Python-da reshotka `#` belgisi bilan bir qatorli izoh yoziladi.'
    }
  ],
  1: [
    {
      id: 'q1_1',
      question: 'Quyidagilardan qaysi biri to‘g‘ri o‘zgaruvchi nomi hisoblanadi?',
      options: ['1yosh = 20', 'talaba_yoshi = 20', 'talaba yoshi = 20', 'class = 20'],
      correctIndex: 1,
      explanation: 'O‘zgaruvchi nomida probel va raqam bilan boshlanish taqiqlanadi. `talaba_yoshi` standart nomlashdir.'
    }
  ]
};
