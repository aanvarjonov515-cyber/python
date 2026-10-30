import { CyberLevel } from '../types';

export const ETHICAL_RULE_NOTICE = `⚠️ MAJBURIY XAVFSILIK QOIDASI (ETHICAL BOUNDARY):
Cybersecurity bilimlari faqat:
- o‘z shaxsiy tizimingizda;
- ruxsat berilgan laboratoriyada;
- platformaning xavfsiz sandbox muhitida ishlatiladi.

Begona akkaunt, server, sayt, Wi-Fi yoki tarmoqlar ustida ruxsatsiz tajriba o‘tkazish taqiqlanadi!`;

export const CYBER_LEVELS: CyberLevel[] = [
  {
    id: 0,
    title: 'CYBER LEVEL 0 — Security Nima va CIA Triad',
    subtitle: 'Kiberxavfsizlik asoslari va uch ustun',
    category: 'Basics',
    theoryText: `Kiberxavfsizlik (Cybersecurity) — ma'lumotlar va axborot tizimlarini ruxsatsiz kirish, o'zgartirish va buzilishlardan himoya qilish sohasidir.
Har qanday xavfsizlik tizimi 3 ta asosiy ustun ustiga quriladi (CIA Triad):
1. Confidentiality (Maxfiylik): Ma'lumotni faqat ruxsati bor odam ko'rishi kerak.
2. Integrity (Yaxlitlik): Ma'lumot yo'lda yoki saqlashda noqonuniy o'zgarmasligi kerak.
3. Availability (Mavjudlik): Ma'lumot kerakli paytda ruxsati bor foydalanuvchiga tayyor turishi kerak.`,
    realWorldContext: 'Talabaning baholari: begona ko‘rmasligi -> Maxfiylik; o‘zgartirib yuborilmasligi -> Yaxlitlik; kerak paytda ochilishi -> Mavjudlik.',
    ethicalRuleNotice: ETHICAL_RULE_NOTICE,
    xpReward: 20,
    labChallenge: {
      id: 'cl0_quiz',
      title: 'CIA Triad Savoli',
      type: 'quiz',
      instructions: 'Talabaning bahosini do‘sti noqonuniy o‘zgartirib qo‘ysa, CIA Triad-ning qaysi ustuni buzilgan bo‘ladi?',
      options: ['Confidentiality (Maxfiylik)', 'Integrity (Yaxlitlik)', 'Availability (Mavjudlik)', 'Hech qaysisi'],
      correctAnswer: 'Integrity (Yaxlitlik)',
      explanation: 'Ma’lumotning o‘zgartirib yuborilishi Yaxlitlik (Integrity) tamoyilining buzilishidir.'
    }
  },
  {
    id: 1,
    title: 'CYBER LEVEL 1 — Password Security va MFA',
    subtitle: 'Kuchli parollar va ko‘p bosqichli autentifikatsiya',
    category: 'Principles',
    theoryText: `Parol — tizimga kirish uchun eng birinchi kalit hisoblanadi.
Kuchli parol qoidalari:
- Uzunligi kamida 12-16 belgi bo'lishi kerak.
- Katta, kichik harflar, raqamlar va maxsus belgilar (!@#$) qatnashishi kerak.
- Bir xil parolni turli saytlarda qayta ishlatmaslik kerak.
Multi-Factor Authentication (MFA) — parolga qo'shimcha ravishda telefonga keladigan SMS yoki Authenticator kodi orqali kirishni himoyalaydi.`,
    realWorldContext: 'Telegram yoki Gmail-ga kirganda SMS kod so‘ralishi -> MFA.',
    ethicalRuleNotice: ETHICAL_RULE_NOTICE,
    xpReward: 20,
    labChallenge: {
      id: 'cl1_password',
      title: 'Xavfsiz Parolni Aniqang',
      type: 'password',
      instructions: 'Quyidagilardan qaysi biri eng xavfsiz va kuchli parol hisoblanadi?',
      options: ['12345678', 'password2026', 'P@ssw0rd2026!', 'K9#mQ!9$xP2L#vR7'],
      correctAnswer: 'K9#mQ!9$xP2L#vR7',
      explanation: 'Uzun va tasodifiy harf/belgilardan iborat parollarni buzish eng qiyin hisoblanadi.'
    }
  },
  {
    id: 2,
    title: 'CYBER LEVEL 2 — Hashing va Hashlib',
    subtitle: 'SHA-256 va ma’lumot raqamli barmog‘i',
    category: 'Cryptography',
    theoryText: `Hash funksiya — har qanday hajmga ega matnni bir tomonga o'tuvchi (one-way) va doimiy uzunlikdagi unikal matnga (fingerprint) o'tkazib beradi.
Hashing va Encryption (shifrlash) bir xil emas!
- Hash-ni orqaga qaytarib bo'lmaydi (de-hash qilib bo'lmaydi).
- Python'da \`import hashlib\` orqali SHA-256 hash hisoblanadi.
Parollarni ma'lumotlar bazasida ochiq matn (plain text) ko'rinishida saqlash qat'iyan taqiqlanadi! Ularning faqat hash qiymati saqlanadi.`,
    realWorldContext: 'Fayl yuklab olganda uning o‘zgarmaganini SHA-256 checksum orqali tekshirish.',
    ethicalRuleNotice: ETHICAL_RULE_NOTICE,
    xpReward: 30,
    labChallenge: {
      id: 'cl2_integrity',
      title: 'Hashlib Kodini Tekshirish',
      type: 'integrity',
      instructions: 'SHA-256 hash orqali matn yaxlitligini hisoblaydigan Python kodi.',
      codeSnippet: `import hashlib
matn = "PyQuest"
hash_val = hashlib.sha256(matn.encode()).hexdigest()
print(hash_val[:8])`,
      options: ['Hash bir tomonlama va orqaga qaytmas', 'Hash-dan asl matnni osongina tiklash mumkin'],
      correctAnswer: 'Hash bir tomonlama va orqaga qaytmas',
      explanation: 'Hash funksiyalar bir tomonlama matematik amaldadir.'
    }
  },
  {
    id: 3,
    title: 'CYBER LEVEL 3 — Authentication va Authorization',
    subtitle: '"Siz kimsiz?" va "Sizga nima qilish mumkin?"',
    category: 'Authentication',
    theoryText: `1. Authentication (Autentifikatsiya): "Siz kimsiz?" — Foydalanuvchining shaxsini tasdiqlash (masalan, Login va Parol kiritish).
2. Authorization (Avtorizatsiya): "Sizga nima qilish mumkin?" — Foydalanuvchining tizimdagi huquq va vakolatlarini tekshirish (masalan, Student faqat o'z bahosini ko'radi, Admin esa o'chirishi ham mumkin).`,
    realWorldContext: 'Universitetga pasport ko‘rsatib kirish -> Authentication. Dekanat xonasiga kirish huquqi -> Authorization.',
    ethicalRuleNotice: ETHICAL_RULE_NOTICE,
    xpReward: 30,
    labChallenge: {
      id: 'cl3_quiz',
      title: 'Huquqlarni Ajratish',
      type: 'quiz',
      instructions: 'Talaba tizimga kirdi, lekin boshqa talabaning bahosini o‘zgartirmoqchi bo‘lganda "Ruxsat berilmadi" xabari chiqdi. Bu nimaning natijasi?',
      options: ['Authentication buzilishi', 'Authorization (Ruxsatlar nazorati)', 'Network xatoligi'],
      correctAnswer: 'Authorization (Ruxsatlar nazorati)',
      explanation: 'Tizim foydalanuvchini tanidi (AuthN), lekin unga o‘sha amalni bajarishga ruxsat bermadi (AuthZ).'
    }
  },
  {
    id: 4,
    title: 'CYBER LEVEL 4 — Secure Coding va Input Validation',
    subtitle: 'Noma’lum kiritmalarni xavfsiz filtrlash',
    category: 'Secure Coding',
    theoryText: `Secure Coding (Xavfsiz Dasturlash) — kod yozish jarayonidanoq xavfsizlik va zaifliklarni hisobga olish amaliyotidir.
Oltin qoida: "Hech qachon foydalanuvchi kiritgan ma'lumotga (Input) ko'r-ko'rona ishonmang!"
Input Validation — foydalanuvchi kiritgan qiymat kutilgan tip, uzunlik va formatga mosligini tekshirishdir (masalan, yosh o'rniga harf kiritilsa xato ushlash).`,
    realWorldContext: 'Formadagi "Yosh" katagiga "ABC" yozilganda dastur buzilmay, chiroyli ogohlantirish berishi.',
    ethicalRuleNotice: ETHICAL_RULE_NOTICE,
    xpReward: 30,
    labChallenge: {
      id: 'cl4_secure',
      title: 'Input Validation Mashqi',
      type: 'secure_code',
      instructions: 'Xavfsiz input olish kodi:',
      codeSnippet: `try:
    yosh = int(input("Yoshingiz: "))
except ValueError:
    print("Xato: Faqat raqam kiriting!")`,
      options: ['Kod xavfsiz va xatoni ushlaydi', 'Kod buzilib to‘xtaydi'],
      correctAnswer: 'Kod xavfsiz va xatoni ushlaydi',
      explanation: 'try/except ValueError foydalanuvchining noto‘g‘ri kiritmalaridan ilovani asraydi.'
    }
  }
];
