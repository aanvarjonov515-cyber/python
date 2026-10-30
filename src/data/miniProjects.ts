export interface MiniProjectStep {
  stepNumber: number;
  title: string;
  description: string;
  starterCode: string;
  expectedOutputSubstring: string;
  hints: [string, string, string];
}

export interface MiniProject {
  id: string;
  title: string;
  subtitle: string;
  difficulty: 'Normal' | 'Hard';
  description: string;
  steps: MiniProjectStep[];
}

export const MINI_PROJECTS: MiniProject[] = [
  {
    id: 'calculator',
    title: '1. Oddiy Kalkulyator',
    subtitle: 'Arifmetik operatorlar va funksiyalar bilan ishlash',
    difficulty: 'Normal',
    description: 'Foydalanuvchidan 2 ta son va amalni (+, -, *, /) olib, natijani hisoblovchi dastur yozing.',
    steps: [
      {
        stepNumber: 1,
        title: 'Qo‘shish funksiyasini yozing',
        description: 'Ikkita sonni qabul qilib, ularning yig‘indisini qaytaradigan qoshish(a, b) funksiyasini yozing va print(qoshish(10, 20)) ni chaqiring.',
        starterCode: `def qoshish(a, b):
    # kodingizni bu yerga yozing
    pass

print(qoshish(10, 20))`,
        expectedOutputSubstring: '30',
        hints: [
          'a va b ni qo‘shish uchun + operatoridan foydalaning.',
          'Natijani qaytarish uchun return a + b deb yozing.',
          'return a + b'
        ]
      }
    ]
  },
  {
    id: 'guess_number',
    title: '2. Son Topish O‘yini',
    subtitle: 'Random va While siklida o‘yin mantiqini tuzish',
    difficulty: 'Normal',
    description: 'Kompyuter 1 dan 10 gacha tasodifiy son o‘ylaydi. Siz uni topishga harakat qilasiz.',
    steps: [
      {
        stepNumber: 1,
        title: 'Tasodifiy son va tekshiruv',
        description: 'random.randint(1, 10) orqali 5 sonini topish imkonini beruvchi kodni to‘ldiring.',
        starterCode: `import random

sirli_son = 5 # sinov uchun
taxmin = 5

if taxmin == sirli_son:
    print("Tabriklayman, topdingiz!")`,
        expectedOutputSubstring: 'topdingiz',
        hints: [
          'if sharti bilan taxmin va sirli_son tengligini solishtiring.',
          'print(...) orqali xabarni chiqaring.',
          'if taxmin == sirli_son: print("Tabriklayman, topdingiz!")'
        ]
      }
    ]
  },
  {
    id: 'password_generator',
    title: '3. Parol Generatori',
    subtitle: 'Random.choice va String metodlari amaliyoti',
    difficulty: 'Normal',
    description: 'Tasodifiy harf va raqamlardan iborat xavfsiz 8 belgili parol yaratuvchi dastur.',
    steps: [
      {
        stepNumber: 1,
        title: 'Parol shakllantirish',
        description: 'random.choice yordamida 8 ta belgini birlashtirib, ekranga chiqaring.',
        starterCode: `import random
belgilar = "abc123XYZ"
parol = ""
for i in range(8):
    parol += random.choice(belgilar)
print("Parol uzunligi:", len(parol))`,
        expectedOutputSubstring: '8',
        hints: [
          'Sikl 8 marta takrorlanadi.',
          'Har bir qadamda random.choice(belgilar) parolga qo‘shiladi.',
          'print("Parol uzunligi:", len(parol))'
        ]
      }
    ]
  },
  {
    id: 'todo_app',
    title: '4. To-Do List (Vazifalar Ro‘yxati)',
    subtitle: 'List metodlari va faylga saqlash',
    difficulty: 'Hard',
    description: 'Kunlik bajariladigan ishlar ro‘yxatini shakllantiring.',
    steps: [
      {
        stepNumber: 1,
        title: 'Vazifa qo‘shish va ko‘rsatish',
        description: 'vazifalar ro‘yxatiga "Python o‘rganish" ni qo‘shing va ro‘yxatni chop eting.',
        starterCode: `vazifalar = []
vazifalar.append("Python o'rganish")
for item in vazifalar:
    print("Vazifa:", item)`,
        expectedOutputSubstring: 'Python o\'rganish',
        hints: [
          'append() metodi orqali ro‘yxatga element qo‘shing.',
          'for sikli orqali har birini chop eting.',
          'vazifalar.append("Python o\'rganish")'
        ]
      }
    ]
  },
  {
    id: 'bank_account',
    title: '5. Oddiy Bank Hisobi',
    subtitle: 'OOP Class va Method lar bilan bank balansini boshqarish',
    difficulty: 'Hard',
    description: 'BankHisobi sinfini yaratib, hisobga pul qo‘shish va yechib olish metodlarini yozing.',
    steps: [
      {
        stepNumber: 1,
        title: 'BankHisobi sinfi',
        description: 'BankHisobi sinfida hisobga pul qo‘shish va balansni ko‘rishni yozing.',
        starterCode: `class BankHisobi:
    def __init__(self, egar):
        self.egar = egar
        self.balans = 1000

    def pul_qoshish(self, summa):
        self.balans += summa
        return self.balans

h = BankHisobi("Ali")
print("Balans:", h.pul_qoshish(500))`,
        expectedOutputSubstring: '1500',
        hints: [
          'self.balans += summa deb hisobni oshiring.',
          'Chiqish 1500 bo‘lishi kerak.',
          'return self.balans'
        ]
      }
    ]
  }
];
