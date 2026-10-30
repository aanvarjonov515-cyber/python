import { LessonContent, LevelInfo } from '../types';

export const LEVEL_LIST: LevelInfo[] = [
  { id: 0, title: 'LEVEL 0 — Python Bilan Tanishuv', subtitle: 'Dasturlash dunyosiga birinchi qadam', category: 'Basics', xpRequired: 0 },
  { id: 1, title: 'LEVEL 1 — O‘zgaruvchilar (Variables)', subtitle: 'Ma’lumotlarni xotirada saqlash', category: 'Basics', xpRequired: 50 },
  { id: 2, title: 'LEVEL 2 — Ma’lumot Turlari (Data Types)', subtitle: 'int, float, str, bool, None va kolleksiyalar', category: 'Basics', xpRequired: 120 },
  { id: 3, title: 'LEVEL 3 — Input va Output', subtitle: 'Foydalanuvchi bilan muloqot qilish', category: 'Basics', xpRequired: 200 },
  { id: 4, title: 'LEVEL 4 — Type Conversion', subtitle: 'Ma’lumot turlarini bir-biriga o‘tkazish', category: 'Basics', xpRequired: 280 },
  { id: 5, title: 'LEVEL 5 — Operatorlar', subtitle: 'Arifmetik, Taqqoslash va Mantiqiy operatorlar', category: 'Basics', xpRequired: 380, isBossLevel: true },
  { id: 6, title: 'LEVEL 6 — Shart Operatorlari (If / Elif / Else)', subtitle: 'Dasturda qaror qabul qilish', category: 'Control Flow', xpRequired: 500 },
  { id: 7, title: 'LEVEL 7 — For Sikli', subtitle: 'Takrorlanuvchi jarayonlarni avtomatlashtirish', category: 'Control Flow', xpRequired: 620 },
  { id: 8, title: 'LEVEL 8 — While Sikli', subtitle: 'Shart bajarilgunicha takrorlash', category: 'Control Flow', xpRequired: 750 },
  { id: 9, title: 'LEVEL 9 — Break va Continue', subtitle: 'Siklni boshqarish va to‘xtatish', category: 'Control Flow', xpRequired: 900, isBossLevel: true },
  { id: 10, title: 'LEVEL 10 — String (Matnlar)', subtitle: 'Matnlar va metodlar bilan ishlash, f-string', category: 'Data Structures', xpRequired: 1050 },
  { id: 11, title: 'LEVEL 11 — List (Ro‘yxatlar)', subtitle: 'Bir nechta elementlarni tartibli saqlash', category: 'Data Structures', xpRequired: 1200 },
  { id: 12, title: 'LEVEL 12 — Tuple (O‘zgarmas ro‘yxat)', subtitle: 'O‘zgartirib bo‘lmaydigan elementlar to‘plami', category: 'Data Structures', xpRequired: 1350 },
  { id: 13, title: 'LEVEL 13 — Set (To‘plamlar)', subtitle: 'Takrorlanmas va tartibsiz elementlar', category: 'Data Structures', xpRequired: 1500 },
  { id: 14, title: 'LEVEL 14 — Dictionary (Lug‘atlar)', subtitle: 'Kalit va qiymat (Key-Value) juftliklari', category: 'Data Structures', xpRequired: 1700, isBossLevel: true },
  { id: 15, title: 'LEVEL 15 — Functions (Funksiyalar)', subtitle: 'Qayta ishlatiluvchi kod bloklari, def va return', category: 'Functions & Modules', xpRequired: 1950 },
  { id: 16, title: 'LEVEL 16 — Scope (Ko‘rinish sohasi)', subtitle: 'Local va Global o‘zgaruvchilar', category: 'Functions & Modules', xpRequired: 2200 },
  { id: 17, title: 'LEVEL 17 — Module va Import', subtitle: 'Kodni fayllarga bo‘lish va kutubxonalar', category: 'Functions & Modules', xpRequired: 2450 },
  { id: 18, title: 'LEVEL 18 — Random Moduli', subtitle: 'Tasodifiy sonlar va tanlovlar bilan ishlash', category: 'Functions & Modules', xpRequired: 2700, isBossLevel: true },
  { id: 19, title: 'LEVEL 19 — Exception (Xatolarni ushlash)', subtitle: 'Try, Except, Else, Finally bilan ishlash', category: 'Advanced', xpRequired: 3000 },
  { id: 20, title: 'LEVEL 20 — Filelar (Fayllar)', subtitle: 'TXT fayllarni o‘qish va yozish', category: 'Advanced', xpRequired: 3300 },
  { id: 21, title: 'LEVEL 21 — List Comprehension', subtitle: 'Ro‘yxatlarni ixcham va tez yozish', category: 'Advanced', xpRequired: 3600 },
  { id: 22, title: 'LEVEL 22 — Lambda Funksiyalar', subtitle: 'Nomsiz, qisqa bir qatorlik funksiyalar', category: 'Advanced', xpRequired: 3900 },
  { id: 23, title: 'LEVEL 23 — Map va Filter', subtitle: 'Elementlarni qayta ishlash va saralash', category: 'Advanced', xpRequired: 4200, isBossLevel: true },
  { id: 24, title: 'LEVEL 24 — OOP Boshlanishi', subtitle: 'Class, Object, Attribute va Method tushunchasi', category: 'OOP', xpRequired: 4500 },
  { id: 25, title: 'LEVEL 25 — OOP Davomi', subtitle: 'Constructor, Inheritance, Encapsulation, Polymorphism', category: 'OOP', xpRequired: 4900 },
  { id: 26, title: 'LEVEL 26 — Date va Time', subtitle: 'Sana va vaqt bilan ishlash', category: 'Advanced', xpRequired: 5300 },
  { id: 27, title: 'LEVEL 27 — JSON Ma’lumotlar', subtitle: 'Python Dictionary va JSON format o‘rtasida o‘tish', category: 'Advanced', xpRequired: 5700 },
  { id: 28, title: 'LEVEL 28 — PIP va Package', subtitle: 'Tashqi kutubxonalarni o‘rnatish', category: 'Advanced', xpRequired: 6100, isBossLevel: true },
  { id: 29, title: 'LEVEL 29 — Debugging', subtitle: 'Koddagi xatolarni izlash va tuzatish', category: 'Projects', xpRequired: 6500 },
  { id: 30, title: 'LEVEL 30 — Algoritmik Fikrlash', subtitle: 'Muammodan qadamlar va kodga o‘tish', category: 'Projects', xpRequired: 7000 },
  { id: 31, title: 'LEVEL 31 — Mini Projectlar', subtitle: 'Real amaliy loyihalar va masalalar', category: 'Projects', xpRequired: 7600 },
  { id: 32, title: 'LEVEL 32 — Final Python Challenge', subtitle: 'Mustaqil va mukammal yakuniy loyiha', category: 'Projects', xpRequired: 8300, isBossLevel: true }
];

export const LESSON_CONTENTS: Record<number, LessonContent> = {
  0: {
    levelId: 0,
    title: 'Python Bilan Tanishuv',
    subtitle: 'Dasturlash nima va birinchi kodingiz',
    readingTimeMinutes: 3,
    theoryText: `Dasturlash — kompyuterga aniq buyruqlar va ko'rsatmalar berish san'atidir.
Python esa dunyodagi eng mashhur, sodda va kuchli dasturlash tillaridan biridir.
U web-saytlar, sun'iy intellekt, mobil ilovalar va o'yinlar yaratishda keng qo'llaniladi.
Python sintaksisi (kod yozish qoidalari) juda ham sodda bo'lib, xuddi ingliz tilidagi oddiy jumlalarga o'xshaydi.`,
    whyNeeded: 'Kompyuter o‘zicha o‘ylay olmaydi. Unga biz xohlagan vazifani bajarishi uchun aniq Python tilida ko‘rsatma bera olamiz.',
    realLifeExample: 'Instagram, YouTube, Google va Netflix’ning katta qismi Python tilida yozilgan.',
    commonMistakes: [
      {
        wrong: 'Print("Salom")',
        right: 'print("Salom")',
        explanation: 'Python katta va kichik harflarga o‘ta ta’sirchan! `print` kichik harflar bilan yoziladi.'
      }
    ],
    keywords: [
      { word: 'print()', meaning: 'Ekranga matn yoki ma’lumot chiqaruvchi funksiya.' },
      { word: 'comment (#)', meaning: 'Kod ichidagi izoh (kompyuter buni bajarmaydi).' },
      { word: 'syntax', meaning: 'Kod yozishning qoidalari to‘plami.' }
    ],
    codeExamples: [
      {
        title: 'Birinchi dasturingiz',
        code: `# Ekranga salomlashuv matnini chiqaramiz
print("Salom, Python!")`,
        howItWorks: [
          '1. `# Ekranga...` — bu izoh (comment). Kompyuter buni o‘qimaydi.',
          '2. `print("Salom, Python!")` — ekranga "Salom, Python!" degan matnni chiqaradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Tushuncha', 'Misol', 'Vazifasi'],
      rows: [
        { col1: 'print()', col2: 'print("Salom")', col3: 'Natijani konsolga yozish' },
        { col1: '# comment', col2: '# bu izoh', col3: 'Dasturchi uchun eslatma' }
      ]
    }
  },
  1: {
    levelId: 1,
    title: 'O‘zgaruvchilar (Variables)',
    subtitle: 'Ma’lumotlarni xotirada saqlash va boshqarish',
    readingTimeMinutes: 4,
    theoryText: `O'zgaruvchi (variable) — bu kompyuter xotirasidagi ma'lum bir quti (konteynir) hisoblanadi.
Biz bu qutiga nom beramiz va uning ichiga xohlagan ma'lumotimizni (ism, yosh, baho) saqlab qo'yamiz.
Keyinchalik dasturimizda o'sha nom orqali quti ichidagi ma'lumotni olib ishlatishimiz mumkin.`,
    whyNeeded: 'Har safar talabaning ismini qayta-qayta yozib o‘tirmay, bitta `ism` nomli o‘zgaruvchiga saqlab qo‘yamiz.',
    realLifeExample: 'Telefonda kontakt saqlash: Ism -> "Devon", Telefon -> "+998901234567".',
    commonMistakes: [
      {
        wrong: '1ism = "Ali"',
        right: 'ism_1 = "Ali"',
        explanation: 'O‘zgaruvchi nomi raqam bilan boshlanishi mumkin emas!'
      }
    ],
    keywords: [
      { word: 'variable', meaning: 'Ma’lumot saqlovchi nomlangan quti.' },
      { word: '=', meaning: 'Tenglik belgisi — o‘zgaruvchiga qiymat biriktiradi.' },
      { word: 'qiymat', meaning: 'O‘zgaruvchi ichida saqlanayotgan ma’lumot.' }
    ],
    codeExamples: [
      {
        title: 'O‘zgaruvchi yaratish va ishlatish',
        code: `ism = "Ali"   # Talabaning ismini saqlaymiz
yosh = 18    # Yoshini saqlaymiz

print(ism)
print(yosh)`,
        howItWorks: [
          '1. `ism = "Ali"` — `ism` degan qutiga "Ali" matnini soladi.',
          '2. `yosh = 18` — `yosh` qutisiga 18 sonini soladi.',
          '3. `print(ism)` — ekranga "Ali" deb chiqaradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Xususiyat', 'Tog‘ri nomlash', 'Noto‘g‘ri nomlash'],
      rows: [
        { col1: 'Boshlanish', col2: 'yosh = 20', col3: '1yosh = 20 (Raqam bilan boshlanmaydi)' },
        { col1: 'Joy tashlash', col2: 'talaba_yoshi = 18', col3: 'talaba yoshi = 18 (Probel bo‘lmaydi)' }
      ]
    }
  },
  2: {
    levelId: 2,
    title: 'Ma’lumot Turlari (Data Types)',
    subtitle: 'Python dasturidagi asosiy va kolleksiya turlari',
    readingTimeMinutes: 5,
    theoryText: `Python’da har bir ma’lumot o‘z turiga (data type) ega.
Asosiy turlar:
- int: butun sonlar (10, 25, -5)
- float: o‘nlik kasr sonlar (3.14, 1.8)
- str: matnlar ("Salom", 'Python')
- bool: mantiqiy qiymat (True yoki False)
- None: bo‘shliq yoki yo‘q ma’lumot`,
    whyNeeded: 'Kompyuter matn bilan sonni chalkashtirib yubormasligi va to‘g‘ri hisob-kitob qilishi uchun kerak.',
    realLifeExample: 'Bank hisobingizdagi pul (float: 150000.50 so‘m), foydalanuvchi online-ligi (bool: True).',
    commonMistakes: [
      {
        wrong: 'yosh = "18" + 2',
        right: 'yosh = 18 + 2',
        explanation: 'Matn ("18") bilan sonni (2) qo‘shib bo‘lmaydi!'
      }
    ],
    keywords: [
      { word: 'int', meaning: 'Butun son turi.' },
      { word: 'float', meaning: 'O‘nlik kasr son turi.' },
      { word: 'str', meaning: 'Matn (string) turi.' },
      { word: 'bool', meaning: 'Mantiqiy tur (True/False).' }
    ],
    codeExamples: [
      {
        title: 'Turli ma’lumot turlari',
        code: `ism = "Vali"        # str (Matn)
yosh = 20          # int (Butun son)
baho = 4.8         # float (Kasr son)
talabami = True    # bool (Ha/Yo'q)`,
        howItWorks: [
          '1. `ism` matn ko‘rinishida qozoqtirnoq (" ") ichida saqlanadi.',
          '2. `yosh` va `baho` sonlar bo‘lgani uchun qozoqtirnoqsiz yoziladi.',
          '3. `talabami` faqat True (rost) yoki False (yolg‘on) qiymat oladi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Tip', 'Misol', 'Vazifasi'],
      rows: [
        { col1: 'int', col2: '25', col3: 'Butun son' },
        { col1: 'float', col2: '3.14', col3: 'O‘nlik kasr son' },
        { col1: 'str', col2: '"Salom"', col3: 'Matn' },
        { col1: 'bool', col2: 'True', col3: 'Ha/Yo‘q qiymat' }
      ]
    }
  },
  3: {
    levelId: 3,
    title: 'Input va Output',
    subtitle: 'Foydalanuvchidan ma’lumot olish va ko‘rsatish',
    readingTimeMinutes: 4,
    theoryText: `Dasturimiz foydalanuvchi bilan muloqot qilishi uchun ikkita asosiy vositaga ega:
1. \`print()\` — natijani foydalanuvchiga ko'rsatish (Output).
2. \`input()\` — foydalanuvchidan klaviatura orqali ma'lumot olish (Input).
Diqqat! \`input()\` orqali olingan har qanday ma'lumot har doim matn (string) ko'rinishida keladi.`,
    whyNeeded: 'Foydalanuvchi ismini, yoshini yoki parolini kiritganda dastur uni qabul qila olishi uchun.',
    realLifeExample: 'Kassada checkout qilayotganda kartangiz pin-kodini kiritishingiz.',
    commonMistakes: [
      {
        wrong: 'yosh = input("Yoshingiz: ")\nprint(yosh + 5)',
        right: 'yosh = int(input("Yoshingiz: "))\nprint(yosh + 5)',
        explanation: 'input() natijasi har doim matn bo‘ladi. Uni son ko‘rinishida ishlatish uchun int() ga o‘girish shart!'
      }
    ],
    keywords: [
      { word: 'input()', meaning: 'Foydalanuvchidan ma’lumot soraydi.' },
      { word: 'output', meaning: 'Dasturning ekranga chiqargan javobi.' }
    ],
    codeExamples: [
      {
        title: 'Muloqot dasturi',
        code: `ism = input("Ismingiz nima? ")
print("Salom,", ism)`,
        howItWorks: [
          '1. `input(...)` ekranda savol beradi va foydalanuvchi javob yozishini kutadi.',
          '2. Kiritilgan javob `ism` o‘zgaruvchisiga saqlanadi.',
          '3. `print("Salom,", ism)` salomlashuv xabarini ko‘rsatadi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Funksiya', 'Misol', 'Natija'],
      rows: [
        { col1: 'print()', col2: 'print("OK")', col3: 'Ekranda "OK" ko‘rinadi' },
        { col1: 'input()', col2: 'a = input("Nima?")', col3: 'Foydalanuvchidan matn oladi' }
      ]
    }
  },
  4: {
    levelId: 4,
    title: 'Type Conversion (Turlarni O‘zgartirish)',
    subtitle: 'Matnni songa, sonni matnga aylantirish',
    readingTimeMinutes: 4,
    theoryText: `Ba'zan biz bir turdagi ma'lumotni boshqa turga o'tkazishimiz kerak bo'ladi.
Buning uchun maxsus funksiyalar ishlatiladi:
- \`int()\`: matn yoki float sonni int ga o'tkazadi
- \`float()\`: matn yoki int ni float kasr songa o'tkazadi
- \`str()\`: har qanday ma'lumotni matnga o'tkazadi
- \`bool()\`: ma'lumotni True yoki False ga o'tkazadi`,
    whyNeeded: 'Foydalanuvchi input() orqali kiritgan yoshini matematik hisob-kitoblarda ishlatish uchun.',
    realLifeExample: 'Formadagi raqamli katakchadan matn shaklida kelgan qiymatni hisoblagichga o‘tkazish.',
    commonMistakes: [
      {
        wrong: 'int("Salom")',
        right: 'int("123")',
        explanation: 'Harf shaklidagi matnlarni songa aylantirib bo‘lmaydi! Faqat raqamli matnlarni o‘girsa bo‘ladi.'
      }
    ],
    keywords: [
      { word: 'int()', meaning: 'Songa aylantiradi.' },
      { word: 'str()', meaning: 'Matnga aylantiradi.' },
      { word: 'float()', meaning: 'Kasr songa aylantiradi.' }
    ],
    codeExamples: [
      {
        title: 'Yilni hisoblovchi dastur',
        code: `yosh_str = input("Yoshingizni kiriting: ")
yosh = int(yosh_str)  # Matnni butun songa o'tkazamiz

tugilgan_yil = 2026 - yosh
print("Tug'ilgan yilingiz:", tugilgan_yil)`,
        howItWorks: [
          '1. `input` orqali matn shaklida yosh olinadi (masalan, "20").',
          '2. `int(yosh_str)` matnli "20" ni 20 raqamiga o‘tkazadi.',
          '3. 2026 dan 20 ayirilib, tug‘ilgan yil hisoblanadi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Aylantiruvchi', 'Kiritilgan', 'Natija va Turi'],
      rows: [
        { col1: 'int()', col2: '"25"', col3: '25 (int)' },
        { col1: 'float()', col2: '"3.14"', col3: '3.14 (float)' },
        { col1: 'str()', col2: '100', col3: '"100" (str)' }
      ]
    }
  },
  5: {
    levelId: 5,
    title: 'Operatorlar',
    subtitle: 'Arifmetik, taqqoslash va mantiqiy amallar',
    readingTimeMinutes: 5,
    theoryText: `Operatorlar — ma'lumotlar ustida matematik yoki mantiqiy amallarni bajarish uchun ishlatiladigan belgilar.
1. Arifmetik: \`+\`, \`-\`, \`*\`, \`/\`, \`//\` (butun bo'lish), \`%\` (qoldiq), \`**\` (daraja)
2. Taqqoslash: \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`
3. Mantiqiy: \`and\` (va), \`or\` (yoki), \`not\` (emas)`,
    whyNeeded: 'Kalkulyator yaratish, narxlarni solishtirish va chegirmalarni hisoblash uchun.',
    realLifeExample: 'Do‘konda 2 ta ko‘ylak olsangiz narxini qo‘shish (+), aksiyadagi chegirma shartini solishtirish (>).',
    commonMistakes: [
      {
        wrong: 'a = 5\nif a = 5:',
        right: 'a = 5\nif a == 5:',
        explanation: '`=` biriktirish operatori (qiymat beradi), `==` esa tenglikni solishtirish operatori!'
      }
    ],
    keywords: [
      { word: '==', meaning: 'Ikkala qiymat tengligini tekshiradi.' },
      { word: '%', meaning: 'Bo‘lishdan qolgan qoldiqni beradi.' },
      { word: '//', meaning: 'Bo‘lishning faqat butun qismini oladi.' },
      { word: 'and', meaning: 'Barcha shartlar bir vaqtda True bo‘lishi kerak.' }
    ],
    codeExamples: [
      {
        title: 'Arifmetika va Solishtirish',
        code: `a = 10
b = 3

print(a + b)   # 13
print(a // b)  # 3 (butun qismi)
print(a % b)   # 1 (qoldiq)
print(a > b)   # True`,
        howItWorks: [
          '1. `a + b` yig‘indini beradi.',
          '2. `a // b` 10 ni 3 ga bo‘lgandagi butun qismini (3) beradi.',
          '3. `a % b` 10 ni 3 ga bo‘lgandagi qoldiqni (1) beradi.',
          '4. `a > b` solishtiradi va True qaytaradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Operator', 'Misol', 'Natija'],
      rows: [
        { col1: '+', col2: '5 + 3', col3: '8' },
        { col1: '%', col2: '7 % 3', col3: '1 (qoldiq)' },
        { col1: '==', col2: '5 == 5', col3: 'True' },
        { col1: '!=', col2: '5 != 3', col3: 'True' }
      ]
    }
  },
  6: {
    levelId: 6,
    title: 'Shart Operatorlari (If / Elif / Else)',
    subtitle: 'Dastur tarmoqlanishi va qaror qabul qilish',
    readingTimeMinutes: 5,
    theoryText: `Dastur ba'zan muayyan holatga qarab turli xil qarorlar qabul qilishi kerak.
Masalan: "Agar foydalanuvchi 18 yoshdan katta bo'lsa, kirishga ruxsat ber, aks holda taqiqla."
Python'da buning uchun \`if\`, \`elif\` (else if) va \`else\` ishlatiladi.
Muhim qoida: \`if\` va \`elif\` dan keyin keladigan kod bloklari 4 ta probel (indentation) surib yoziladi!`,
    whyNeeded: 'Tizimga kirishda parol to‘g‘ri yoki noto‘g‘riligini aniqlash kabi mantiqiy qarorlar uchun.',
    realLifeExample: 'Svetofor: yashil bo‘lsa yur, sariq bo‘lsa tayyorlan, qizil bo‘lsa to‘xta.',
    commonMistakes: [
      {
        wrong: 'if yosh >= 18:\nprint("Kirish")',
        right: 'if yosh >= 18:\n    print("Kirish")',
        explanation: '`if` ostidagi kod albata 4 ta probel surilishi (IndentationError) shart!'
      }
    ],
    keywords: [
      { word: 'if', meaning: 'Agar (shart tekshiradi).' },
      { word: 'elif', meaning: 'Aks holda, agar (qo‘shimcha shart).' },
      { word: 'else', meaning: 'Aks holda (hech qaysi shart bajarilmasa).' }
    ],
    codeExamples: [
      {
        title: 'Yoshni tekshiruvchi dastur',
        code: `yosh = 16  # Foydalanuvchi yoshi

if yosh >= 18:
    print("Kirish mumkin")
else:
    print("Kirish mumkin emas")`,
        howItWorks: [
          '1. `yosh` o‘zgaruvchisi solishtiriladi.',
          '2. 16 >= 18 yolg‘on (False) bo‘lgani uchun `if` bloki o‘tkazib yuboriladi.',
          '3. `else` bloki ishlaydi va "Kirish mumkin emas" chiqadi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Kalit so‘z', 'Vazifasi', 'Ishlash tartibi'],
      rows: [
        { col1: 'if', col2: 'Birinchi shartni tekshirish', col3: 'Har doim birinchi ishlaydi' },
        { col1: 'elif', col2: 'Qo‘shimcha shart', col3: 'if xato bo‘lsa tekshiriladi' },
        { col1: 'else', col2: 'Yakuniy variant', col3: 'Hech shart mos kelmasa ishlaydi' }
      ]
    }
  },
  7: {
    levelId: 7,
    title: 'For Sikli',
    subtitle: 'Takrorlanuvchi amallarni bajarish',
    readingTimeMinutes: 4,
    theoryText: `Biror amalni ma'lum bir necha marta takrorlash uchun sikllardan foydalanamiz.
\`for\` sikli ma'lum bir ketma-ketlik (masalan, \`range()\` funksiyasi orqali berilgan oraliq) bo'yicha har bir elementni bittadan olib beradi.
Eslatma: SECTION 4 qoidasiga ko'ra, nazariyada faqat 1 ta eng sodda kod misoli beriladi!`,
    whyNeeded: '1 dan 100 gacha bo‘lgan sonlarni yoki 1000 ta mijozga xabar yuborishni bittalab yozib o‘tirmaslik uchun.',
    realLifeExample: 'Sportchining 10 marta ketma-ket otjimaniye qilishi.',
    commonMistakes: [
      {
        wrong: 'for i in range(5):\nprint(i)',
        right: 'for i in range(5):\n    print(i)',
        explanation: 'Sikl tanasidagi kod ham ichkariga surilib yozilishi kerak!'
      }
    ],
    keywords: [
      { word: 'for', meaning: 'Sikl boshlash kalit so‘zi.' },
      { word: 'range(5)', meaning: '0 dan 4 gacha bo‘lgan 5 ta son ketma-ketligi.' },
      { word: 'iterator', meaning: 'Siklda navbati bilan almashadigan o‘zgaruvchi.' }
    ],
    codeExamples: [
      {
        title: 'Asosiy for sikli misoli',
        code: `for son in range(5):
    print(son)`,
        howItWorks: [
          '1. `range(5)` ketma-ket 0, 1, 2, 3, 4 sonlarini beradi.',
          '2. `son` o‘zgaruvchisi har bir qadamda yangi qiymat oladi.',
          '3. `print(son)` ekranga 0, 1, 2, 3, 4 ni chiqaradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['range() argumenti', 'Hosil bo‘ladigan ketma-ketlik'],
      rows: [
        { col1: 'range(5)', col2: '0, 1, 2, 3, 4' },
        { col1: 'range(1, 6)', col2: '1, 2, 3, 4, 5' }
      ]
    }
  },
  8: {
    levelId: 8,
    title: 'While Sikli',
    subtitle: 'Shart bajarilayotgan paytda takrorlash',
    readingTimeMinutes: 4,
    theoryText: `\`while\` sikli ko'rsatilgan shart True (rost) bo'lib turgan vaqtgacha tinimsiz takrorlanadi.
Agar shart shart o'zgarmay qolsa, sikl cheksiz aylanib qolishi mumkin. Shuning uchun sikl ichida hisoblagichni oshirib borish kerak!
Eslatma: SECTION 4 qoidasiga ko'ra, nazariyada faqat 1 ta eng sodda kod misoli beriladi!`,
    whyNeeded: 'Foydalanuvchi to‘g‘ri parol kiritmagunicha parolni qayta va qayta so‘rab turish uchun.',
    realLifeExample: 'Telefoningiz quvvati 100% bo‘lgunicha quvvatlanib turishi.',
    commonMistakes: [
      {
        wrong: 'son = 1\nwhile son <= 5:\n    print(son)',
        right: 'son = 1\nwhile son <= 5:\n    print(son)\n    son += 1',
        explanation: 'Hisoblagichni (`son += 1`) oshirish esdan chiqsa, cheksiz sikl yuzaga keladi!'
      }
    ],
    keywords: [
      { word: 'while', meaning: 'Modomiki ... bo‘lar ekan (shartli sikl).' },
      { word: '+= 1', meaning: 'O‘zgaruvchi qiymatini 1 ga oshirish.' }
    ],
    codeExamples: [
      {
        title: 'Asosiy while sikli misoli',
        code: `son = 1

while son <= 5:
    print(son)
    son += 1`,
        howItWorks: [
          '1. `son = 1` deb boshlang‘ich qiymat olinadi.',
          '2. `while son <= 5` shart tekshiriladi (1 <= 5 True).',
          '3. `print(son)` bajariladi va `son` 1 ga oshadi.',
          '4. `son` 6 bo‘lganda shart False bo‘lib sikl to‘xtaydi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Sikl turi', 'Qachon ishlatiladi?'],
      rows: [
        { col1: 'for', col2: 'Takrorlanishlar soni aniq bo‘lganda' },
        { col1: 'while', col2: 'Takrorlanish ma’lum shartga bog‘liq bo‘lganda' }
      ]
    }
  },
  9: {
    levelId: 9,
    title: 'Break va Continue',
    subtitle: 'Sikllarni majburiy to‘xtatish va sakrab o‘tish',
    readingTimeMinutes: 4,
    theoryText: `Sikl davomida ba'zi holatlarda siklni muddatidan oldin to'xtatish yoki ma'lum bir qadamni o'tkazib yuborish kerak bo'ladi:
1. \`break\` — siklni darhol butunlay to'xtatadi va undan chiqib ketadi.
2. \`continue\` — joriy qadamni o'tkazib yuboradi va keyingi qadamga o'tadi.`,
    whyNeeded: 'Qidirilayotgan element topilishi bilan siklni to‘xtatib resursni tejash uchun.',
    realLifeExample: 'Kitob sahifalaridan kerakli mavzuni topgach o‘qishni to‘xtatish (`break`).',
    commonMistakes: [
      {
        wrong: 'continue dan keyin yozilgan kodlar ham ishlaydi deb o‘ylash',
        right: 'continue dan keyingi kodlar joriy qadamda tashlab ketiladi',
        explanation: 'Continue buyrug‘idan pastda yozilgan satrlar o‘sha qadamda bajarilmaydi!'
      }
    ],
    keywords: [
      { word: 'break', meaning: 'Siklni darhol sindirish (to‘xtatish).' },
      { word: 'continue', meaning: 'Ushbu qadamni o‘tkazib yuborish.' }
    ],
    codeExamples: [
      {
        title: 'Break va Continue farqi',
        code: `for son in range(1, 6):
    if son == 3:
        continue  # 3 ni tashlab o'tadi
    if son == 5:
        break     # 5 ga kelganda sikl to'xtaydi
    print(son)`,
        howItWorks: [
          '1. `son = 3` bo‘lganda `continue` ishlaydi va 3 ekranga chiqmaydi.',
          '2. `son = 5` bo‘lganda `break` ishlaydi va sikl tugaydi.',
          '3. Ekranda faqat 1, 2, 4 chiqadi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Buyruq', 'Harakat', 'Natija'],
      rows: [
        { col1: 'break', col2: 'Sikldan butunlay chiqadi', col3: 'Sikl to‘xtaydi' },
        { col1: 'continue', col2: 'Keyingi aylanaga o‘tadi', col3: 'Joriy qadam tashlanadi' }
      ]
    }
  },
  10: {
    levelId: 10,
    title: 'String (Matnlar) va Metodlar',
    subtitle: 'Matnlar ustida amallar va f-string',
    readingTimeMinutes: 5,
    theoryText: `Python’da matnlar \`str\` turi hisoblanib, tirnoqlar ichida yoziladi.
Matnlar bilan ishlash uchun juda ko'p qulay metodlar mavjud:
- \`len()\`: matn uzunligini o'lchash
- \`lower()\`, \`upper()\`, \`title()\`: harflar kattaligini o'zgartirish
- \`strip()\`: ikkala tomondagi probellarni olib tashlash
- \`replace()\`: matn qismini almashtirish
- \`f-string\`: matn ichiga o'zgaruvchilarni qulay joylashtirish (\`f"Salom {ism}"\`)`,
    whyNeeded: 'Foydalanuvchi kiritgan ismini chiroyli formatlash va xabarlarni dinamik tuzish uchun.',
    realLifeExample: 'Saytda foydalanuvchining loginini har doim kichik harflarga o‘tkazib saqlash (`lower()`).',
    commonMistakes: [
      {
        wrong: 'print("Salom" + yosh)',
        right: 'print(f"Salom {yosh}")',
        explanation: 'Matn bilan sonni f-string yordamida birlashtirish eng to‘g‘ri va xavfsiz yo‘ldir.'
      }
    ],
    keywords: [
      { word: 'f-string', meaning: 'Matn ichiga {o‘zgaruvchi} larni qo‘yish usuli.' },
      { word: 'upper()', meaning: 'Barcha harflarni katta qiladi.' },
      { word: 'lower()', meaning: 'Barcha harflarni kichik qiladi.' },
      { word: 'len()', meaning: 'Matndagi belgilar sonini qaytaradi.' }
    ],
    codeExamples: [
      {
        title: 'String metodlari va f-string',
        code: `ism = "  ali  "
ism_toza = ism.strip().title() # Probelni olib, bosh harfni katta qiladi
yosh = 18

xabar = f"Salom, {ism_toza}! Yoshingiz: {yosh}"
print(xabar)`,
        howItWorks: [
          '1. `strip()` chetdagi probellarni yo‘qotadi.',
          '2. `title()` "ali" ni "Ali" ga aylantiradi.',
          '3. `f"..."` yordamida ism va yosh matnga qulay joylashtiriladi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Metod', 'Kiritilgan', 'Natija'],
      rows: [
        { col1: 'upper()', col2: '"python"', col3: '"PYTHON"' },
        { col1: 'strip()', col2: '" hello "', col3: '"hello"' },
        { col1: 'replace()', col2: '"olma".replace("o", "a")', col3: '"alma"' }
      ]
    }
  },
  11: {
    levelId: 11,
    title: 'List (Ro‘yxatlar)',
    subtitle: 'Bir nechta elementlarni bitta o‘zgaruvchida saqlash',
    readingTimeMinutes: 5,
    theoryText: `Ro'yxat (list) — bir nechta qiymatni tartiblangan holda bir joyda saqlash uchun ishlatiladi.
Ro'yxatlar to'rtburchak qavslar \`[]\` ichida yoziladi va elementlar vergul bilan ajratiladi.
Elementlarga ularning indeksi (0 dan boshlanadi) orqali murojaat qilinadi.
Metodlar: \`append()\`, \`insert()\`, \`remove()\`, \`pop()\`, \`sort()\`, \`len()\`.`,
    whyNeeded: '100 ta talabaning ismini 100 ta alohida o‘zgaruvchida emas, bitta `talabalar` ro‘yxatida saqlash uchun.',
    realLifeExample: 'Xaridlar savatchasidagi mahsulotlar ro‘yxati.',
    commonMistakes: [
      {
        wrong: 'mevalar = ["olma", "banan"]\nprint(mevalar[2])',
        right: 'print(mevalar[1])',
        explanation: 'Index 0 dan boshlanadi! 2-element indeksi 1 bo‘ladi. (IndexError)'
      }
    ],
    keywords: [
      { word: 'list', meaning: 'Tartiblangan ro‘yxat to‘plami.' },
      { word: 'index', meaning: 'Elementning ro‘yxatdagi tartib raqami (0 dan boshlanadi).' },
      { word: 'append()', meaning: 'Ro‘yxat oxiriga yangi element qo‘shish.' }
    ],
    codeExamples: [
      {
        title: 'List bilan ishlash',
        code: `mevalar = ["olma", "banan", "shaftoli"]

mevalar.append("uzum") # Oxiriga qo'shadi
print(mevalar[0])      # "olma"
print(len(mevalar))    # 4 (elementlar soni)`,
        howItWorks: [
          '1. `mevalar` ro‘yxati yaratiladi.',
          '2. `append("uzum")` ro‘yxat oxiriga "uzum" ni qo‘shadi.',
          '3. `mevalar[0]` birinchi element bo‘lgan "olma" ni beradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Metod', 'Vazifasi', 'Misol'],
      rows: [
        { col1: 'append(x)', col2: 'Oxiriga x ni qo‘shadi', col3: 'l.append(5)' },
        { col1: 'remove(x)', col2: 'x qiymatni o‘chiradi', col3: 'l.remove("olma")' },
        { col1: 'pop()', col2: 'Oxirgi elementni sug‘urib oladi', col3: 'l.pop()' }
      ]
    }
  },
  12: {
    levelId: 12,
    title: 'Tuple (O‘zgarmas Ro‘yxat)',
    subtitle: 'O‘zgartirib bo‘lmaydigan ma’lumotlar to‘plami',
    readingTimeMinutes: 4,
    theoryText: `Tuple (Kortej) — xuddi ro'yxatga o'xshaydi, lekin uni yaratgandan so'ng ichidagi elementlarni o'zgartirib, yangi element qo'shib yoki o'chirib bo'lmaydi (immutable).
Tuple oddiy qavslar \`()\` ichida yoziladi.
Chunki o'zgarmaydi, u kompyuter xotirasida kamroq joy egallaydi va tezroq ishlaydi.`,
    whyNeeded: 'Hafta kunlari, GPS koordinatalar kabi o‘zgarmas konstantalarni xavfsiz saqlash uchun.',
    realLifeExample: 'Tug‘ilgan sana (yil, oy, kun) — buni keyinchalik o‘zgartirib bo‘lmaydi.',
    commonMistakes: [
      {
        wrong: 'kunlar = ("Dushanba", "Seshansa")\nkunlar[0] = "Chorshanba"',
        right: 'Tuple elementlarini o‘zgartirib bo‘lmaydi!',
        explanation: 'Tuple o‘zgarmas bo‘lgani uchun unga yangi qiymat tayinlab bo‘lmaydi (TypeError).'
      }
    ],
    keywords: [
      { word: 'tuple', meaning: 'O‘zgarmas (immutable) ro‘yxat.' },
      { word: 'immutable', meaning: 'O‘zgartirib bo‘lmaydigan qiymat.' }
    ],
    codeExamples: [
      {
        title: 'Tuple misoli',
        code: `koordinata = (41.2995, 69.2401) # Toshkent koordinatasi

print("Kenglik:", koordinata[0])
print("Uzunlik:", koordinata[1])`,
        howItWorks: [
          '1. `koordinata` nomli o‘zgarmas tuple yaratiladi.',
          '2. `koordinata[0]` birinchi qiymatni ko‘rsatadi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Xususiyat', 'List []', 'Tuple ()'],
      rows: [
        { col1: 'O‘zgaruvchanlik', col2: 'Ha (Mutable)', col3: 'Yo‘q (Immutable)' },
        { col1: 'Tezlik', col2: 'Nisbatan sekinroq', col3: 'Juda tez' },
        { col1: 'Qavs turi', col2: '[ ]', col3: '( )' }
      ]
    }
  },
  13: {
    levelId: 13,
    title: 'Set (To‘plamlar)',
    subtitle: 'Takrorlanmas va tartibsiz elementlar',
    readingTimeMinutes: 4,
    theoryText: `Set (To'plam) — takrorlanmaydigan (unikal) va tartibsiz elementlar to'plami.
Set jingalak qavslar \`{}\` ichida yoziladi.
Agar set ichiga bir xil elementni bir necha marta qo'shsangiz ham, u faqat bitta nusxasini saqlab qoladi.
Metodlar: \`add()\`, \`remove()\`, \`discard()\`, \`union()\`, \`intersection()\`.`,
    whyNeeded: 'Foydalanuvchilar kiritgan ro‘yxat ichidan takrorlangan elementlarni tezda tozalash uchun.',
    realLifeExample: 'Saytdagi unikal tashrif buyuruvchilar IP manzillari to‘plami.',
    commonMistakes: [
      {
        wrong: 's = {1, 2, 3}\nprint(s[0])',
        right: 'Set tartibsiz bo‘lgani uchun index ishlatib bo‘lmaydi',
        explanation: 'Set elementlarining indeksi bo‘lmaydi (TypeError).'
      }
    ],
    keywords: [
      { word: 'set', meaning: 'Unikal elementlar to‘plami.' },
      { word: 'add()', meaning: 'Set-ga element qo‘shish.' },
      { word: 'unique', meaning: 'Takrorlanmas yagona qiymat.' }
    ],
    codeExamples: [
      {
        title: 'Takrorlanishlarni tozalash',
        code: `sonlar = [1, 2, 2, 3, 4, 4, 5]
unikal_sonlar = set(sonlar) # Ro'yxatni set-ga o'tkazamiz

print(unikal_sonlar) # {1, 2, 3, 4, 5}`,
        howItWorks: [
          '1. `sonlar` ro‘yxatida 2 va 4 qaytarilgan.',
          '2. `set(sonlar)` barcha takrorlangan elementlarni olib tashlaydi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['To‘plam', 'Qavs', 'Takrorlanish', 'Tartib'],
      rows: [
        { col1: 'List', col2: '[ ]', col3: 'Ruxsat beriladi', col4: 'Tartibli' },
        { col1: 'Set', col2: '{ }', col3: 'Taqiqlanadi (Unikal)', col4: 'Tartibsiz' }
      ]
    }
  },
  14: {
    levelId: 14,
    title: 'Dictionary (Lug‘atlar)',
    subtitle: 'Kalit va qiymat (Key-Value) juftliklari',
    readingTimeMinutes: 5,
    theoryText: `Dictionary (Lug'at) — ma'lumotlarni "Kalit: Qiymat" (Key: Value) juftligi shaklida saqlaydi.
Lug'atlar jingalak qavslar \`{}\` ichida yoziladi.
Har bir kalit unikal bo'lishi kerak va unga indeks o'rniga aynan o'sha kalit nomi orqali murojaat qilinadi.
Metodlar: \`get()\`, \`keys()\`, \`values()\`, \`items()\`, \`update()\`, \`pop()\`.`,
    whyNeeded: 'Bitta obyekt (masalan, talaba yoki mahsulot) haqidagi barcha ma’lumotlarni bir joyga jamlash uchun.',
    realLifeExample: 'Foydalanuvchi profili: {"ism": "Ali", "yosh": 18, "email": "ali@mail.uz"}.',
    commonMistakes: [
      {
        wrong: 'talaba["familiya"] (agar kalit yo‘q bo‘lsa)',
        right: 'talaba.get("familiya", "Topilmadi")',
        explanation: 'Mavjud bo‘lmagan kalitni to‘g‘ridan-to‘g‘ri chaqirish KeyError beradi. `get()` xavfsizroq!'
      }
    ],
    keywords: [
      { word: 'dict', meaning: 'Key-Value lug‘at struktura.' },
      { word: 'key', meaning: 'Kalit (unikal nom).' },
      { word: 'value', meaning: 'Kalitga mos keluvchi qiymat.' }
    ],
    codeExamples: [
      {
        title: 'Talaba profili yaratish',
        code: `talaba = {
    "ism": "Ali",
    "yosh": 18,
    "kurs": 2
}

print(talaba["ism"])               # Ali
print(talaba.get("baho", "Yo'q"))  # Yo'q`,
        howItWorks: [
          '1. `talaba` lug‘atida `ism`, `yosh`, `kurs` kalitlari bor.',
          '2. `talaba["ism"]` orqali "Ali" olinadi.',
          '3. `get("baho")` kalit bo‘lmasa xatolik bermay "Yo\'q" qaytaradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Metod', 'Vazifasi'],
      rows: [
        { col1: 'keys()', col2: 'Barcha kalitlarni ro‘yxat qilib beradi' },
        { col1: 'values()', col2: 'Barcha qiymatlarni beradi' },
        { col1: 'items()', col2: 'Kalit va qiymat juftligini beradi' }
      ]
    }
  },
  15: {
    levelId: 15,
    title: 'Functions (Funksiyalar)',
    subtitle: 'Kodni qayta ishlatiluvchi bloklarga ajratish',
    readingTimeMinutes: 5,
    theoryText: `Funksiya — muayyan bir vazifani bajaruvchi va qayta-qayta ishlatilishi mumkin bo'lgan kod blokidir.
Funksiya \`def\` kalit so'zi orqali yaratiladi.
U o'ziga parametrlar (ma'lumotlar) qabul qilishi va \`return\` orqali natija qaytarishi mumkin.`,
    whyNeeded: 'Bir xil hisoblash kodini 20 joyda qayta yozib o‘tirmay, bitta funksiya chaqirib qo‘yish uchun.',
    realLifeExample: 'Kalkulyatordagi hisoblash tugmalari — har biri ma’lum funksiyani chaqiradi.',
    commonMistakes: [
      {
        wrong: 'def qoshish(a, b):\n    a + b\n\nprint(qoshish(2,3))',
        right: 'def qoshish(a, b):\n    return a + b',
        explanation: 'Natijani qaytarish uchun `return` yozish kerak, aks holda None qaytadi!'
      }
    ],
    keywords: [
      { word: 'def', meaning: 'Funksiya e’lon qilish (define).' },
      { word: 'return', meaning: 'Funksiyadan natija qaytarish.' },
      { word: 'parametr', meaning: 'Funksiya qabul qiladigan o‘zgaruvchilar.' }
    ],
    codeExamples: [
      {
        title: 'Funksiya yaratish va chaqirish',
        code: `def qoshish(a, b):
    return a + b

natija = qoshish(5, 10)
print(natija)  # 15`,
        howItWorks: [
          '1. `def qoshish(a, b):` funksiya e’lon qiladi.',
          '2. `return a + b` yig‘indini qaytaradi.',
          '3. `qoshish(5, 10)` chaqirilib, 15 olinadi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Tushuncha', 'Ta’rif', 'Misol'],
      rows: [
        { col1: 'Parametr', col2: 'Funksiya ta’rifidagi nom', col3: 'def salom(ism):' },
        { col1: 'Argument', col2: 'Chaqirilganda berilgan qiymat', col3: 'salom("Ali")' }
      ]
    }
  },
  16: {
    levelId: 16,
    title: 'Scope (O‘zgaruvchilar Sohasi)',
    subtitle: 'Local va Global o‘zgaruvchilar',
    readingTimeMinutes: 4,
    theoryText: `O'zgaruvchi qayerda yaratilganiga qarab uning ko'rinish sohasi (scope) turlicha bo'ladi:
1. Local (mahalliy) — funksiya ichida yaratilgan o'zgaruvchi. U faqat o'sha funksiya ichida mavjud.
2. Global (umumiy) — funksiyalardan tashqarida yaratilgan o'zgaruvchi. Dasturning hamma joyida ko'rinadi.`,
    whyNeeded: 'Funksiya ichidagi vaqtincha hisob-kitoblar tashqi koddagi boshqa o‘zgaruvchilarga xalaqit bermasligi uchun.',
    realLifeExample: 'O‘quv xonasidagi doska (Local) va maktab foyesidagi e’lonlar taxtasi (Global).',
    commonMistakes: [
      {
        wrong: 'def test():\n    x = 10\ntest()\nprint(x)',
        right: 'Funksiya ichidagi local x o‘zgaruvchisini tashqaridan ishlatib bo‘lmaydi!',
        explanation: 'Local o‘zgaruvchiga funksiyadan tashqarida murojaat qilsangiz NameError beradi.'
      }
    ],
    keywords: [
      { word: 'local', meaning: 'Faqat funksiya ichida amal qiladigan o‘zgaruvchi.' },
      { word: 'global', meaning: 'Butun dasturda amal qiluvchi o‘zgaruvchi.' }
    ],
    codeExamples: [
      {
        title: 'Local va Global farqi',
        code: `x = "Global xabar"  # Global

def mening_funksiyam():
    y = "Local xabar" # Local
    print(x) # Global ko'rinadi

mening_funksiyam()`,
        howItWorks: [
          '1. `x` funksiyadan tashqarida bo‘lgani uchun global hisoblanadi.',
          '2. `y` funksiya ichida bo‘lgani uchun local bo‘ladi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Tur', 'Qayerda yaratiladi?', 'Qayerda ishlatish mumkin?'],
      rows: [
        { col1: 'Local', col2: 'Funksiya ichida', col3: 'Faqat o‘sha funksiyada' },
        { col1: 'Global', col2: 'Tashqarida', col3: 'Dasturning hamma joyida' }
      ]
    }
  },
  17: {
    levelId: 17,
    title: 'Module va Import',
    subtitle: 'Tayyor kodlar va kutubxonalardan foydalanish',
    readingTimeMinutes: 4,
    theoryText: `Modul — tayyor funksiyalar va o'zgaruvchilarni o'z ichiga olgan alohida Python fayli.
Python’da juda ko'p tayyor modullar bor (masalan, \`math\`, \`random\`, \`datetime\`).
Ulardan foydalanish uchun \`import\` kalit so'zi ishlatiladi.`,
    whyNeeded: 'Murakkab matematik formulalarni noldan yozmay, tayyor `math` modulidan foydalanish uchun.',
    realLifeExample: 'Asboblar qutisidan tayyor kalit yoki omburni olib ishlatish.',
    commonMistakes: [
      {
        wrong: 'import math\nprint(sqrt(16))',
        right: 'import math\nprint(math.sqrt(16))',
        explanation: 'Modul chaqirilganda funksiya oldidan `modul_nomi.` yozilishi kerak!'
      }
    ],
    keywords: [
      { word: 'import', meaning: 'Modulni ulab olish.' },
      { word: 'from', meaning: 'Modul ichidan muayyan funksiyani ajratib olish.' },
      { word: 'as', meaning: 'Modulga qisqa taxallus berish.' }
    ],
    codeExamples: [
      {
        title: 'Math modulidan foydalanish',
        code: `import math

ildiz = math.sqrt(25) # 25 ning kvadrat ildizi
print("Ildiz:", ildiz) # 5.0`,
        howItWorks: [
          '1. `import math` matematik modulni ulaydi.',
          '2. `math.sqrt(25)` funksiyasi 25 ning ildizini hisoblab 5.0 qaytaradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Sintaksis', 'Vazifasi'],
      rows: [
        { col1: 'import math', col2: 'Butun math modulini yuklaydi' },
        { col1: 'from math import sqrt', col2: 'Faqat sqrt funksiyasini yuklaydi' }
      ]
    }
  },
  18: {
    levelId: 18,
    title: 'Random Moduli va O‘yinlar',
    subtitle: 'Tasodifiy sonlar generatori',
    readingTimeMinutes: 4,
    theoryText: `\`random\` moduli dasturlarda tasodifiy sonlar generatsiya qilish va o'yinlar yaratish uchun ishlatiladi.
Asosiy funksiyalar:
- \`random.randint(a, b)\`: a va b oralig'ida tasodifiy butun son tanlaydi.
- \`random.choice(ro'yxat)\`: ro'yxatdan tasodifiy 1 ta element tanlaydi.
- \`random.shuffle(ro'yxat)\`: ro'yxat elementlarini tasodifiy aralashtiradi.`,
    whyNeeded: 'Son topish o‘yini, tasodifiy lotereya va o‘yin kartalarini aralashtirish uchun.',
    realLifeExample: 'O‘yinda oshiq (zarkut) tashlash (1 dan 6 gacha tasodifiy son).',
    commonMistakes: [
      {
        wrong: 'random.randint(1, 10) (import qilmasdan)',
        right: 'import random\nrandom.randint(1, 10)',
        explanation: 'Random modulini ishlatishdan oldin `import random` deb yozish shart!'
      }
    ],
    keywords: [
      { word: 'randint(a,b)', meaning: 'a va b orasida tasodifiy son beradi.' },
      { word: 'choice()', meaning: 'Ro‘yxatdan omadli tanlov qiladi.' }
    ],
    codeExamples: [
      {
        title: 'Zarkut (Oshiq) tashlash',
        code: `import random

zarkut = random.randint(1, 6)
print(f"Tushgan son: {zarkut}")`,
        howItWorks: [
          '1. `random` moduli ulanadi.',
          '2. `random.randint(1, 6)` 1, 2, 3, 4, 5 yoki 6 dan birini tasodifiy tanlaydi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Funksiya', 'Natija'],
      rows: [
        { col1: 'randint(1, 10)', col2: '1 va 10 orasida tasodifiy son' },
        { col1: 'choice(["A", "B"])', col2: '"A" yoki "B" tanlanadi' }
      ]
    }
  },
  19: {
    levelId: 19,
    title: 'Exception (Xatolarni Ushtalash)',
    subtitle: 'Try / Except yordamida dasturni to‘xtab qolishdan saqlash',
    readingTimeMinutes: 5,
    theoryText: `Dastur ishlash davomida kutilmagan xatolar (masalan, sonni 0 ga bo'lish yoki matnni songa o'girish) yuz berishi mumkin.
Bunday xatolar dasturni darhol to'xtatib qo'yadi.
Dastur to'xtab qolmasligi uchun \`try\` va \`except\` bloklaridan foydalanamiz.
- \`try\`: xato berishi mumkin bo'lgan kod yoziladi.
- \`except\`: xato yuz berganda bajariladigan kod yoziladi.
- \`finally\`: xato bo'lsa ham, bo'lmasa ham har doim ishlaydi.`,
    whyNeeded: 'Foydalanuvchi noto‘g‘ri ma’lumot kiritganda dastur crash (xato bilan yopilishi) bo‘lib ketmasligi uchun.',
    realLifeExample: 'Bankomatda xato parol kiritilganda dastur o‘chib qolmay, xabar ko‘rsatishi.',
    commonMistakes: [
      {
        wrong: 'try ko‘p kod yozib xatoning turini ajratmaslik',
        right: 'Aniq xato turini ushlash (except ValueError, except ZeroDivisionError)',
        explanation: 'Xato turini aniq ko‘rsatish xatoni to‘g‘ri diagnosis qilishga yordam beradi.'
      }
    ],
    keywords: [
      { word: 'try', meaning: 'Sinab ko‘rish (xato chiqishi mumkin bo‘lgan blok).' },
      { word: 'except', meaning: 'Xato yuz berganda ushlab qolish.' },
      { word: 'finally', meaning: 'Har qanday holatda bajariluvchi yakuniy blok.' }
    ],
    codeExamples: [
      {
        title: 'Nolga bo‘lish xatosini ushlash',
        code: `try:
    son = int(input("Son kiriting: "))
    natija = 100 / son
    print("Natija:", natija)
except ZeroDivisionError:
    print("Xato: Sonni 0 ga bo'lib bo'lmaydi!")
except ValueError:
    print("Xato: Iltimos faqat raqam kiriting!")`,
        howItWorks: [
          '1. `try` ichidagi kod bajariladi.',
          '2. Agar foydalanuvchi 0 kiritsa, `ZeroDivisionError` bloki ishlaydi va chiroyli ogohlantirish beradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Blok', 'Bajarilish vaqti'],
      rows: [
        { col1: 'try', col2: 'Doim birinchi sinab ko‘riladi' },
        { col1: 'except', col2: 'Faqat xatoli holat ro‘y berganda' },
        { col1: 'finally', col2: 'Har doim eng oxirida' }
      ]
    }
  },
  20: {
    levelId: 20,
    title: 'Filelar (Fayllar bilan ishlash)',
    subtitle: 'TXT fayllarga ma’lumot yozish va o‘qish',
    readingTimeMinutes: 5,
    theoryText: `Dastur yopilganda undagi barcha o'zgaruvchilar o'chib ketadi.
Ma'lumotlarni doimiy saqlab qolish uchun ularni fayllarga (masalan, .txt faylga) yozib qo'yamiz.
Python’da fayllar bilan ishlash uchun \`open()\` funksiyasi ishlatiladi.
Eng xavfsiz va zamonaviy usul: \`with open(...) as f:\` — bu usul faylni avtomati yopib beradi.`,
    whyNeeded: 'O‘yin natijalarini, foydalanuvchilar ro‘yxatini kompyuter diskida saqlab qo‘yish uchun.',
    realLifeExample: 'Bloknot dasturida matnni saqlash (Ctrl + S).',
    commonMistakes: [
      {
        wrong: 'faylni open qilgandan so‘ng close() qilishni unutish',
        right: 'with open(...) konstruksiyasidan foydalanish',
        explanation: '`with` bloki tugagach fayl avtomati yopiladi.'
      }
    ],
    keywords: [
      { word: 'open()', meaning: 'Faylni ochish.' },
      { word: 'w mode', meaning: 'Yozish rejasi (Write - eski ma’lumotni o‘chirib yangilaydi).' },
      { word: 'a mode', meaning: 'Qo‘shish rejasi (Append - oxiriga qo‘shadi).' },
      { word: 'r mode', meaning: 'O‘qish rejasi (Read).' }
    ],
    codeExamples: [
      {
        title: 'Faylga yozish va o‘qish',
        code: `# Faylga yozish
with open("natija.txt", "w") as fayl:
    fayl.write("PyQuest Academy - Python kursi!")

# Fayldan o'qish
with open("natija.txt", "r") as fayl:
    matn = fayl.read()
    print(matn)`,
        howItWorks: [
          '1. `open("natija.txt", "w")` faylni yozish uchun ochadi.',
          '2. `fayl.write(...)` matnni ichiga yozadi.',
          '3. `"r"` rejimida `fayl.read()` fayl ichidagi matnni o‘qib beradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Rejim (Mode)', 'Vazifasi'],
      rows: [
        { col1: '"r"', col2: 'Faylni o‘qish' },
        { col1: '"w"', col2: 'Faylga yangidan yozish (ustiga o‘chirib yozadi)' },
        { col1: '"a"', col2: 'Fayl oxiriga yangi ma’lumot qo‘shish' }
      ]
    }
  },
  21: {
    levelId: 21,
    title: 'List Comprehension',
    subtitle: 'Ro‘yxat yaratishning ixcham va tezkor usuli',
    readingTimeMinutes: 4,
    theoryText: `List Comprehension — mavjud ro'yxat asosida yangi ro'yxat yaratishning bir qatorlik qisqa va chiroylik usulidir.
Oddiy \`for\` sikli bilan 4-5 satrda yoziladigan kodni List Comprehension yordamida atigi 1 satrda yozish mumkin.`,
    whyNeeded: 'Kodni toza, ixcham va o‘qish uchun qulay qilish uchun.',
    realLifeExample: '1 dan 100 gacha bo‘lgan juft sonlarni bir satrda ajratib olish.',
    commonMistakes: [
      {
        wrong: 'Haddan tashqari murakkab 3 talik ichma-ich List Comprehension yozish',
        right: 'Faqat tushunarli va sodda shartlar uchun ishlatish',
        explanation: 'Murakkab mantiq uchun oddiy `for` sikli tushunarliroq bo‘ladi.'
      }
    ],
    keywords: [
      { word: 'comprehension', meaning: 'Ro‘yxatni ixcham generatsiya qilish.' }
    ],
    codeExamples: [
      {
        title: 'Kvadratlar ro‘yxati',
        code: `# Oddiy usul:
kvadratlar = []
for x in range(1, 6):
    kvadratlar.append(x ** 2)

# List Comprehension usuli:
kvadratlar_qisqa = [x ** 2 for x in range(1, 6)]
print(kvadratlar_qisqa) # [1, 4, 9, 16, 25]`,
        howItWorks: [
          '1. `[x ** 2 for x in range(1, 6)]` har bir x ni darajaga oshirib ro‘yxatga soladi.',
          '2. Natijada `[1, 4, 9, 16, 25]` hosil bo‘ladi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Usul', 'Satrlar soni', 'Misol'],
      rows: [
        { col1: 'Oddiy For', col2: '4 satr', col3: 'l = []; for x in r: l.append(x)' },
        { col1: 'Comprehension', col2: '1 satr', col3: 'l = [x for x in r]' }
      ]
    }
  },
  22: {
    levelId: 22,
    title: 'Lambda Funksiyalar',
    subtitle: 'Nomsiz va qisqa bir qatorlik funksiyalar',
    readingTimeMinutes: 4,
    theoryText: `Lambda — bu nomi yo'q, bir qatordan iborat vaqtincha funksiyadir.
U \`def\` bilan uzoq funksiya e'lon qilib o'tirmasdan, kichik amallarni bajarish uchun ishlatiladi.
Sintaksis: \`lambda parametrlar: ifoda\``,
    whyNeeded: 'Ro‘yxatlarni saralashda va bir martalik kichik amallarda foydalanish uchun.',
    realLifeExample: 'Ro‘yxatdagi mahsulotlarni narxiga qarab bir martalik saralash.',
    commonMistakes: [
      {
        wrong: 'lambda ichida return yozishga urinish',
        right: 'lambda parametlar: natija',
        explanation: 'Lambda o‘zi avtomati natijani qaytaradi, `return` so‘zi yozilmaydi!'
      }
    ],
    keywords: [
      { word: 'lambda', meaning: 'Bir qatorlik nomsiz funksiya.' }
    ],
    codeExamples: [
      {
        title: 'Kvadrat oshiruvchi lambda',
        code: `# Oddiy funksiya
def kvadrat(x):
    return x * x

# Lambda funksiya
kvadrat_lambda = lambda x: x * x

print(kvadrat_lambda(5)) # 25`,
        howItWorks: [
          '1. `lambda x: x * x` argument x ni qabul qilib x*x qaytaradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Xususiyat', 'def funksiya', 'lambda funksiya'],
      rows: [
        { col1: 'Nomi', col2: 'Mavjud', col3: 'Nomsiz (Anonymous)' },
        { col1: 'Uzunligi', col2: 'Ko‘p satrli bo‘lishi mumkin', col3: 'Faqat 1 satr' }
      ]
    }
  },
  23: {
    levelId: 23,
    title: 'Map va Filter Funksiyalari',
    subtitle: 'Kolleksiya elementlarini o‘zgartirish va saralash',
    readingTimeMinutes: 5,
    theoryText: `1. \`map(funksiya, ro'yxat)\`: ro'yxatning har bir elementiga berilgan funksiyani qo'llaydi va yangi qiymatlarni qaytaradi.
2. \`filter(funksiya, ro'yxat)\`: ro'yxat elementlarini mantiqiy shart bo'yicha saralab, faqat shartga mos (True) kelganlarini saqlab qoladi.`,
    whyNeeded: 'Ro‘yxatdagi barcha narxlarga 10% soliq qo‘shish (`map`) yoki faqat musbat sonlarni ajratib olish (`filter`).',
    realLifeExample: 'Online do‘konda faqat 100$ dan arzon mahsulotlarni filtash.',
    commonMistakes: [
      {
        wrong: 'print(map(func, list)) deb o‘ylash',
        right: 'print(list(map(func, list)))',
        explanation: 'Map va Filter generator ob’yekt qaytaradi. Uni ko‘rish uchun `list()` ga o‘tkazish kerak.'
      }
    ],
    keywords: [
      { word: 'map()', meaning: 'Har bir elementni o‘zgartirish.' },
      { word: 'filter()', meaning: 'Shart bo‘yicha elementlarni saralash.' }
    ],
    codeExamples: [
      {
        title: 'Map va Filter amaliyoti',
        code: `sonlar = [1, 2, 3, 4, 5, 6]

# Faqat juft sonlarni filtrlash
juftlar = list(filter(lambda x: x % 2 == 0, sonlar))
print("Juft sonlar:", juftlar) # [2, 4, 6]`,
        howItWorks: [
          '1. `filter` har bir sonni 2 ga bo‘lib qoldig‘ini tekshiradi.',
          '2. Faqat juft sonlar `[2, 4, 6]` ro‘yxat shaklida ajratiladi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Funksiya', 'Vazifasi', 'Natija uzunligi'],
      rows: [
        { col1: 'map()', col2: 'Elementlarni transformatsiya qilish', col3: 'Asl ro‘yxat bilan bir xil' },
        { col1: 'filter()', col2: 'Shartga moslarini tanlash', col3: 'Teng yoki kamroq' }
      ]
    }
  },
  24: {
    levelId: 24,
    title: 'OOP Boshlanishi (Object-Oriented Programming)',
    subtitle: 'Class, Object, Attribute va Method tushunchasi',
    readingTimeMinutes: 5,
    theoryText: `Ob'yektga Yo'naltirilgan Dasturlash (OOP) — dasturni real dunyo obyektlari modelida qurish usulidir.
- Class (Sinf): ob'yektning umumiy nusxasi yoki qolipi (masalan, "Talaba" qolipi).
- Object (Ob'yekt): shu qolipdan yaratilgan aniq buyum (masalan, "Ali" ismli talaba).
- Attribute (Xususiyat): ob'yektning ma'lumotlari (ism, yosh).
- Method (Metod): ob'yekt bajarishi mumkin bo'lgan harakatlar (gapirish, o'qish).`,
    whyNeeded: 'Yirik va murakkab dasturlarni tartibli va strukturaviy boshqarish uchun.',
    realLifeExample: 'Moshina chizmasi (Class) va shu chizma bo‘yicha ishlab chiqarilgan "Gentra" moshinasi (Object).',
    commonMistakes: [
      {
        wrong: '__init__ da self parametrini yozmaslik',
        right: 'def __init__(self, ism): self.ism = ism',
        explanation: '`self` joriy yaratilayotgan ob’yektning o‘ziga ishora qiladi.'
      }
    ],
    keywords: [
      { word: 'class', meaning: 'Sinf / Qolip e’lon qilish.' },
      { word: 'object', meaning: 'Class-dan yaratilgan obyekt.' },
      { word: '__init__', meaning: 'Constructor metod (obyekt yaratilishida ishlaydi).' },
      { word: 'self', meaning: 'Obyektning o‘ziga murojaat.' }
    ],
    codeExamples: [
      {
        title: 'Birinchi Class va Object',
        code: `class Talaba:
    def __init__(self, ism, yosh):
        self.ism = ism    # Attribute
        self.yosh = yosh  # Attribute

    def salomlash(self):  # Method
        print(f"Salom, men {self.ism}man!")

# Object yaratamiz
talaba1 = Talaba("Ali", 19)
talaba1.salomlash()`,
        howItWorks: [
          '1. `class Talaba:` yangi qolip yaratadi.',
          '2. `__init__` constructor talaba yaratilganda ismi va yoshini biriktiradi.',
          '3. `talaba1.salomlash()` metodi "Salom, men Aliman!" deb chiqaradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Tushuncha', 'Hayotiy Analogiya', 'Python kodi'],
      rows: [
        { col1: 'Class', col2: 'Uychining chizmasi', col3: 'class Uy:' },
        { col1: 'Object', col2: 'Qurilgan tayyor uy', col3: 'mening_uyim = Uy()' }
      ]
    }
  },
  25: {
    levelId: 25,
    title: 'OOP Davomi (Merosхo‘rlik va Inkapsulatsiya)',
    subtitle: 'Inheritance, Encapsulation va Polymorphism',
    readingTimeMinutes: 6,
    theoryText: `1. Inheritance (Merosxo'rlik): bir sinf boshqa sinfning xususiyat va metodlarini o'ziga qabul qilishi.
2. Encapsulation (Inkapsulatsiya): ma'lumotlarni tashqi ta'sirlardan yashirish (private \`__variable\`).
3. Polymorphism (Polimorfizm): turli sinflarda bir xil nomli metodlarning har xil ishlashi.`,
    whyNeeded: 'Kodni qayta yozmaslik va ma’lumotlar xavfsizligini ta’minlash uchun.',
    realLifeExample: 'Ota-onaning xususiyatlari (soch rangi, bo‘yi) farzandga meros o‘tishi.',
    commonMistakes: [
      {
        wrong: 'Private xususiyatga (__narx) tashqaridan to‘g‘ridan-to‘g‘ri kirishga urinish',
        right: 'Getter va Setter metodlaridan foydalanish',
        explanation: 'Ikkita pastki chiziq bilan boshlangan __xususiyatlar private yashirin bo‘ladi.'
      }
    ],
    keywords: [
      { word: 'inheritance', meaning: 'Merosxo‘rlik (ota sinf xususiyatlarini olish).' },
      { word: 'encapsulation', meaning: 'Ma’lumotlarni yashirish.' }
    ],
    codeExamples: [
      {
        title: 'Inheritance (Merosxo‘rlik) misoli',
        code: `class Shaxs:
    def __init__(self, ism):
        self.ism = ism

class Talaba(Shaxs): # Shaxs sinfidan meros oladi
    def __init__(self, ism, bosqich):
        super().__init__(ism)
        self.bosqich = bosqich

t = Talaba("Vali", 2)
print(t.ism, t.bosqich)`,
        howItWorks: [
          '1. `Talaba` sinfi `Shaxs` sinfidan `ism` xususiyatini meros oladi.',
          '2. `super().__init__(ism)` ota sinf constructorini chaqiradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Ustun', 'Ota Sinf (Parent)', 'Bala Sinf (Child)'],
      rows: [
        { col1: 'Meros', col2: 'Xususiyatlarni beradi', col3: 'Xususiyatlarni qabul qiladi' }
      ]
    }
  },
  26: {
    levelId: 26,
    title: 'Date va Time (Sana va Vaqt)',
    subtitle: 'Datetime moduli bilan ishlash',
    readingTimeMinutes: 4,
    theoryText: `Python’da sana va vaqt bilan ishlash uchun \`datetime\` moduli ishlatiladi.
U yordamida hozirgi vaqtni olish, sanalarni formatlash va ikkita sana o'rtasidagi farqni hisoblash mumkin.`,
    whyNeeded: 'Tizimda foydalanuvchi qachon ro‘yxatdan o‘tganini va aksiyagacha qancha vaqt qolganini hisoblash uchun.',
    realLifeExample: 'Taymer va soat ilovalari.',
    commonMistakes: [
      {
        wrong: 'Sanalarni matn sifatida ayirishga urinish',
        right: 'datetime ob’yektlarining farqini hisoblash (timedelta)',
        explanation: 'Sanalarni faqat datetime ob’yektlari ko‘rinishida ayirish mumkin.'
      }
    ],
    keywords: [
      { word: 'datetime.now()', meaning: 'Hozirgi sana va vaqtni beradi.' },
      { word: 'strftime()', meaning: 'Sanani chiroyli matn ko‘rinishiga o‘tkazish.' }
    ],
    codeExamples: [
      {
        title: 'Bugungi sana',
        code: `from datetime import datetime

hozir = datetime.now()
print("Bugun:", hozir.strftime("%Y-%m-%d %H:%M"))`,
        howItWorks: [
          '1. `datetime.now()` joriy vaqtni oladi.',
          '2. `strftime("%Y-%m-%d")` sanani "YIL-OY-KUN" formatida ko‘rsatadi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Format belgisi', 'Ma’nosi'],
      rows: [
        { col1: '%Y', col2: 'To‘liq yil (masalan, 2026)' },
        { col1: '%m', col2: 'Oy raqami (01 - 12)' },
        { col1: '%d', col2: 'Kun raqami (01 - 31)' }
      ]
    }
  },
  27: {
    levelId: 27,
    title: 'JSON Ma’lumotlar',
    subtitle: 'Python Dictionary va JSON o‘rtasida ma’lumot almashinuvi',
    readingTimeMinutes: 4,
    theoryText: `JSON (JavaScript Object Notation) — serverlar va web-saytlar o'rtasida ma'lumot almashish uchun eng ommabop matnli format.
Python \`json\` moduli orqali:
- \`json.dumps()\`: Dictionary-ni JSON matniga o'tkazadi.
- \`json.loads()\`: JSON matnini Dictionary-ga o'tkazadi.`,
    whyNeeded: 'Internetdan (API orqali) ma’lumotlarni qabul qilish va saqlash uchun.',
    realLifeExample: 'Ob-havo serveridan keladigan ma’lumotlar JSON formatida bo‘ladi.',
    commonMistakes: [
      {
        wrong: 'JSON matnidagi kalitlarni bir tirnoq (\' \') bilan yozish',
        right: 'JSON standartida har doim qozoqtirnoq (" ") ishlatilishi shart',
        explanation: 'JSON sintaksisida faqat va faqat qozoqtirnoq ruxsat etiladi.'
      }
    ],
    keywords: [
      { word: 'json.dumps()', meaning: 'Dict-ni JSON matniga aylantiradi.' },
      { word: 'json.loads()', meaning: 'JSON matnini Dict-ga aylantiradi.' }
    ],
    codeExamples: [
      {
        title: 'Dict va JSON o‘tkazish',
        code: `import json

talaba_dict = {"ism": "Ali", "yosh": 20}
json_matn = json.dumps(talaba_dict)

print(json_matn) # {"ism": "Ali", "yosh": 20}`,
        howItWorks: [
          '1. `json.dumps()` Python dictionary-sini rasmiy JSON matniga o‘giradi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Python', 'JSON'],
      rows: [
        { col1: 'dict', col2: 'Object {}' },
        { col1: 'list', col2: 'Array []' },
        { col1: 'True / False', col2: 'true / false' }
      ]
    }
  },
  28: {
    levelId: 28,
    title: 'PIP va Package',
    subtitle: 'Tashqi kutubxonalar bilan ishlash',
    readingTimeMinutes: 4,
    theoryText: `Dunyodagi minglab dasturchilar Python uchun tayyor kutubxonalar (packages) yozib qo'ygan.
\`pip\` — bu Python paket menejeri bo'lib, terminal orqali istalgan kutubxonani o'rnatib beradi.
Buyruq: \`pip install paket_nomi\``,
    whyNeeded: 'Telegram bot yaratish (telebot), sun’iy intellekt ishlatish uchun tayyor paketlarni o‘rnatish.',
    realLifeExample: 'Smartfonga Play Market-dan yangi ilova yuklab olish.',
    commonMistakes: [
      {
        wrong: 'pip install buyrug‘ini Python kodi ichiga yozish',
        right: 'pip buyrug‘i har doim Terminal / Cmd oyna ichida run qilinadi',
        explanation: 'Pip Python kodi emas, buyruqlar satri vositasidir.'
      }
    ],
    keywords: [
      { word: 'pip', meaning: 'Python paket yuklovchi menejeri.' },
      { word: 'package', meaning: 'Tayyor kutubxona paketi.' }
    ],
    codeExamples: [
      {
        title: 'Paket tushunchasi',
        code: `# Terminalda: pip install requests
import requests # Internetdan ma'lumot oluvchi kutubxona

# response = requests.get("https://api.github.com")`,
        howItWorks: [
          '1. Terminal orqali paket o‘rnatilgach, kod ichida `import` qilib ishlatiladi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Tushuncha', 'Farqi'],
      rows: [
        { col1: 'Module', col2: 'Bitta .py fayli' },
        { col1: 'Package', col2: 'Bir nechta modullar jild to‘plami' },
        { col1: 'Library', col2: 'Yirik funksional kutubxona' }
      ]
    }
  },
  29: {
    levelId: 29,
    title: 'Debugging (Xatolarni Topish)',
    subtitle: 'Koddagi xatolar va ularni to‘g‘rilash amaliyoti',
    readingTimeMinutes: 5,
    theoryText: `Har qanday senior dasturchi ham kod yozganda xato qiladi.
Muvaffaqiyatli dasturchining eng muhim ko'nikmasi — koddagi xatoni (bug) tezda topish va tuzatishdir.
Xatolar 3 turga bo'linadi:
1. SyntaxError — imlo va sintaksis xatosi.
2. TypeError / NameError — noto'g'ri o'zgaruvchi yoki ma'lumot turi.
3. Logical Error — kod xatosiz ishlaydi, lekin natija noto'g'ri chiqadi.`,
    whyNeeded: 'Dastur xato ishlaganda uni diagnostika qilib muammoni bartaraf etish uchun.',
    realLifeExample: 'Shifokorning kasallik alomatlariga qarab tashxis qo‘yishi.',
    commonMistakes: [
      {
        wrong: 'Xatolik xabarini o‘qimay koddan ko‘r-ko‘rona xato izlash',
        right: 'Python bergan xato qator raqami va xabar turini diqqat bilan o‘qish',
        explanation: 'Python xatolik berganida aynan qaysi satrda va qanday xato bo‘lganini aytadi.'
      }
    ],
    keywords: [
      { word: 'bug', meaning: 'Koddagi xatolik.' },
      { word: 'debug', meaning: 'Xatoliklarni qidirish va to‘g‘rilash jarayoni.' }
    ],
    codeExamples: [
      {
        title: 'Xatoni tuzatish namuna',
        code: `# Xatoli kod:
# ism = "Ali"
# pritn(ism)  <-- NameError: name 'pritn' is not defined

# Tuzatilgan kod:
ism = "Ali"
print(ism)`,
        howItWorks: [
          '1. `pritn` so‘zida harf adashgan.',
          '2. U `print` deb tuzatilgach dastur muvaffaqiyatli ishlaydi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Xato turi', 'Sababi', 'Misol'],
      rows: [
        { col1: 'SyntaxError', col2: 'Qoidaga amal qilinmagan', col3: 'if x == 5 (ikkituk yo‘q)' },
        { col1: 'NameError', col2: 'Noma’lum o‘zgaruvchi', col3: 'print(yoq_var)' }
      ]
    }
  },
  30: {
    levelId: 30,
    title: 'Algoritmik Fikrlash',
    subtitle: 'Muammodan mantiqiy qadamlar va kodga o‘tish',
    readingTimeMinutes: 5,
    theoryText: `Algoritm — berilgan muammoni hal qilish uchun ketma-ket bajariladigan aniq ko'rsatmalar ketma-ketligidir.
Dasturlash siri — darhol kod yozishda emas, avval muammoni qadamlarga bo'lib olishda!
Qadamlar:
1. Masalani tushunish
2. Kirish (Input) va Chiqish (Output) ni aniqlash
3. Ketma-ket mantiqiy qadamlarni yozish (Psevdo-kod)
4. Python kodi shakliga o'tkazish`,
    whyNeeded: 'Har qanday murakkab biznes va hayotiy masalalarni dasturiy mantiqqa aylantirish uchun.',
    realLifeExample: 'Oshpazning taom tayyorlash retsepti qadamlari.',
    commonMistakes: [
      {
        wrong: 'Masalani to‘liq tushunmay turib darhol kod yozishni boshlash',
        right: 'Avval qog‘ozda qadamlarni tartiblab olish',
        explanation: 'Mantiqiy rejasiz yozilgan kod tartibsiz va xatoli bo‘ladi.'
      }
    ],
    keywords: [
      { word: 'algoritm', meaning: 'Muammoni yechish qadamlari ketma-ketligi.' },
      { word: 'psevdo-kod', meaning: 'Inson tilidagi qadamlar rejasi.' }
    ],
    codeExamples: [
      {
        title: 'Kattasini topish algoritmi',
        code: `# 1. Ikki son olamiz
a = 15
b = 20

# 2. Solishtiramiz
if a > b:
    kattasi = a
else:
    kattasi = b

# 3. Chiqaramiz
print("Katta son:", kattasi)`,
        howItWorks: [
          '1. Kiruvchi ma’lumotlar `a` va `b` olindi.',
          '2. Shart bilan kattasi aniqlandi va ekranga chiqarildi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Bosqich', 'Bajariladigan ish'],
      rows: [
        { col1: '1. Input', col2: 'Ma’lumotlarni qabul qilish' },
        { col1: '2. Process', col2: 'Hisob-kitob va solishtirish' },
        { col1: '3. Output', col2: 'Natijani taqdim etish' }
      ]
    }
  },
  31: {
    levelId: 31,
    title: 'Mini Projectlar',
    subtitle: 'Amaliy dasturlar va real loyihalar',
    readingTimeMinutes: 5,
    theoryText: `Tabriklaymiz! Siz Python tilining barcha asosiy va ilg'or mavzularini o'rganib chiqdingiz.
Endi bilimingizni real amaliy loyihalarda sinab ko'rish vaqti keldi.
Keling, 10 ta real mini loyihalardan birini bosqichma-bosqich birga yaratamiz!
Loyihalar: Kalkulyator, Son topish o'yini, Parol generatori, To-do list va h.k.`,
    whyNeeded: 'Nazariy bilimlarni bir joyga jamlab, real portfollio yaratish uchun.',
    realLifeExample: 'Ishga kirishda ko‘rsatiladigan shaxsiy Python loyihalari.',
    commonMistakes: [
      {
        wrong: 'Tayyor kodni ko‘chirib qo‘ya qolish',
        right: 'Har bir bosqichni mustaqil ravishda tushunib yozib chiqish',
        explanation: 'O‘zingiz yozgan har bir satr kod tajribangizni oshiradi.'
      }
    ],
    keywords: [
      { word: 'project', meaning: 'Katta yoki kichik amaliy loyiha.' }
    ],
    codeExamples: [
      {
        title: 'Parol Generatori Loyihasi',
        code: `import random

belgilar = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%"
parol = ""

for i in range(8):
    parol += random.choice(belgilar)

print("Yangi xavfsiz parol:", parol)`,
        howItWorks: [
          '1. Random moduli orqali 8 belgili tasodifiy parol generatsiya qilinadi.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Loyiha nomi', 'Ishlatiladigan bilimlaringiz'],
      rows: [
        { col1: 'Kalkulyator', col2: 'Functions, Operators, Input' },
        { col1: 'Son topish', col2: 'Random, While loop, If/Else' },
        { col1: 'To-do List', col2: 'List, Dict, Filelar' }
      ]
    }
  },
  32: {
    levelId: 32,
    title: 'Final Python Challenge',
    subtitle: 'Barcha bilimlaringizni birlashtirgan yakuniy sinov',
    readingTimeMinutes: 5,
    theoryText: `Siz PyQuest Academy platformasining eng cho'qqisiga yetib keldingiz!
Ushbu Final Challenge o'z ichiga o'zgaruvchilar, shartlar, sikllar, funksiyalar, fayllar, exceptionlar va OOP elementlarini qamrab oladi.
Ushbu bosqichni muvaffaqiyatli yakunlaganingizdan so'ng, siz rasmiy PYQUEST ACADEMY PYTHON CERTIFICATE sertifikatiga ega bo'lasiz!`,
    whyNeeded: 'Python dasturchisi sifatidagi bilimingizni tasdiqlash va sertifikat olish uchun.',
    realLifeExample: 'Universitet yoki kollejdagi yakuniy imtihon va diplom loyihasi.',
    commonMistakes: [
      {
        wrong: 'Shoshilib chala topshirish',
        right: 'Kodni diqqat bilan yozib, barcha holatlar bo‘yicha sinab ko‘rish',
        explanation: 'Sinov natijasi sizning yakuniy ball va XP ingizni belgilaydi.'
      }
    ],
    keywords: [
      { word: 'certificate', meaning: 'Kursni muvaffaqiyatli bitirganlik haqida rasmiy sertifikat.' }
    ],
    codeExamples: [
      {
        title: 'Talabalar Boshqaruv Tizimi (Final)',
        code: `class Akademia:
    def __init__(self, nom):
        self.nom = nom
        self.talabalar = []

    def talaba_qoshish(self, ism):
        self.talabalar.append(ism)
        print(f"{ism} muvaffaqiyatli ro'yxatga olindi!")

pyquest = Akademia("PyQuest Academy")
pyquest.talaba_qoshish("Siz - Python Master! 👑")`,
        howItWorks: [
          '1. OOP, list va metodlar yordamida haqiqiy boshqaruv kodi namoyish etilgan.'
        ]
      }
    ],
    comparisonTable: {
      headers: ['Bosqich', 'Natija'],
      rows: [
        { col1: 'Level 0 -> 32', col2: '100% Python Asoslari' },
        { col1: 'Yakuniy Status', col2: 'Python Developer / Master 👑' }
      ]
    }
  }
};

export function getLessonContent(levelId: number): LessonContent & {
  learningObjectives: string[];
  prerequisites: { levelId: number; title: string }[];
} {
  const raw = LESSON_CONTENTS[levelId] || LESSON_CONTENTS[0];
  const levelInfo = LEVEL_LIST.find(l => l.id === levelId) || LEVEL_LIST[0];

  let prerequisites = raw.prerequisites || [];
  if (!prerequisites.length && levelId > 0) {
    if (levelId === 6) { // IF
      prerequisites = [
        { levelId: 1, title: 'O‘zgaruvchilar (Variables)' },
        { levelId: 2, title: 'Ma’lumot Turlari (Data Types)' },
        { levelId: 5, title: 'Operatorlar' }
      ];
    } else if (levelId === 7 || levelId === 8) { // LOOPS
      prerequisites = [
        { levelId: 1, title: 'O‘zgaruvchilar' },
        { levelId: 5, title: 'Operatorlar' },
        { levelId: 6, title: 'Shart Operatorlari (If/Else)' }
      ];
    } else {
      const prevLvl = LEVEL_LIST.find(l => l.id === levelId - 1);
      if (prevLvl) {
        prerequisites = [{ levelId: prevLvl.id, title: prevLvl.title }];
      }
    }
  }

  let learningObjectives = raw.learningObjectives || [
    `${raw.title} nima ekanligini o‘z so‘zingiz bilan tushuntira olish`,
    `Asosiy sintaksis va kalit so‘zlardan to‘g‘ri foydalanish`,
    `Mavzuga oid amaliy masalalarni mustaqil va xatosiz yechish`
  ];

  let soloChallenge = raw.soloChallenge || {
    title: `Level ${levelId} — Solo Challenge (Yordamsiz Rejim)`,
    instructions: `Ushbu rejimda tayyor shablon va birinchi bosqich hint yo‘q. ${raw.title} mavzusi bo‘yicha bilimlaringizni mustaqil ravishda namoyish eting.`,
    starterCode: `# Level ${levelId} Solo Challenge\n# Kodingizni bu yerga yozing\n`,
    expectedOutput: '',
    solutionCode: raw.codeExamples[0]?.code || ''
  };

  return {
    ...raw,
    learningObjectives,
    prerequisites,
    soloChallenge
  };
}
