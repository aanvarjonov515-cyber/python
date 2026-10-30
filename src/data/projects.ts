import { ProjectItem } from '../types';

export const PROJECTS_LIST: ProjectItem[] = [
  // 🟢 STARTER PROJECTS
  {
    id: 'student_profile',
    title: '1. Talaba Profili',
    subtitle: 'Variables + Input + Print imkoniyatlaridan foydalanish',
    tier: 'starter',
    unlockedAtLevel: 1,
    requiredKnowledge: ['Variables', 'Input', 'Print', 'String concatenation'],
    goal: 'Foydalanuvchidan ism, yosh va yo‘nalishni olib, chiroyli shaklda vizual profil karta yaratish.',
    tasks: [
      {
        id: 'sp_t1',
        stepNumber: 1,
        title: 'Foydalanuvchi ma’lumotlarini input() orqali oling',
        description: '`ism` va `yosh` o‘zgaruvchilariga input() orqali qiymat biriktiring va ekranga `print(ism)` qiling.',
        starterCode: `ism = input("Ismingiz: ")
yosh = input("Yoshingiz: ")
print("Talaba:", ism)`,
        expectedOutputSubstring: 'Talaba:',
        hints: [
          'input() funksiyasidan foydalaning.',
          'ism = input("Ismingiz: ")',
          'print("Talaba:", ism)'
        ]
      }
    ],
    securityReviewQuestions: [
      'Foydalanuvchi kiritgan ma’lumotda xavfsizlik va input validation mavjudmi?'
    ],
    readmeTemplate: `# Talaba Profili Loyihasi\n\n- **Maqsad**: Python o'zgaruvchilari va input() orqali talaba kartasini yaratish.\n- **Texnologiyalar**: Python 3, Input, Output`
  },
  {
    id: 'password_strength_checker',
    title: '2. Password Strength Checker (Parol Kuchini Tekshirgich)',
    subtitle: 'String, Len, If/Else va Boolean amallari (#90)',
    tier: 'starter',
    unlockedAtLevel: 10,
    requiredKnowledge: ['String Methods', 'Len()', 'If/Else', 'Boolean Operators'],
    goal: 'Lokal kiritilgan demo parol matnining uzunligi, katta-kichik harflari hamda raqamlarini tekshirib, uning xavfsizlik darajasini aniqlash.',
    tasks: [
      {
        id: 'psc_t1',
        stepNumber: 1,
        title: 'Parol uzunligini va xavfsizligini tekshirish',
        description: '`parol = "Secret123!"` kiritilganda, agar uzunligi >= 8 bo‘lsa `"Xavfsiz parol"`, aks holda `"Kuchsiz parol"` deb chiqaring.',
        starterCode: `parol = "Secret123!"
if len(parol) >= 8:
    print("Xavfsiz parol")
else:
    print("Kuchsiz parol")`,
        expectedOutputSubstring: 'Xavfsiz parol',
        hints: [
          'len(parol) >= 8 shartidan foydalaning.',
          'if len(parol) >= 8: print("Xavfsiz parol")',
          'Kod tayyor, Run bosing.'
        ]
      }
    ],
    securityReviewQuestions: [
      'Kod ichida haqiqiy foydalanuvchi paroli saqlanmaganmi? (Faqat demo matnlar ishlatilishi shart!)'
    ],
    readmeTemplate: `# Password Strength Checker\n\n- **Maqsad**: Parol xavfsizligini uzunlik va belgilar bo'yicha baholash.\n- **Ishlatilgan**: Python String, len(), If/Else.`
  },
  {
    id: 'expense_tracker_starter',
    title: '3. Xarajat Hisoblagich (Expense Tracker)',
    subtitle: 'List, Dict va Arithmetic Operatorlar (#82)',
    tier: 'starter',
    unlockedAtLevel: 11,
    requiredKnowledge: ['Lists', 'Dictionaries', 'For Loop', 'Sum'],
    goal: 'Xarajatlar ro‘yxatini dict va list yordamida saqlash va umumiy summani hisoblash.',
    tasks: [
      {
        id: 'et_t1',
        stepNumber: 1,
        title: 'Xarajatlarni hisoblash',
        description: 'Xarajatlar lug‘atidagi barcha summalarni yig‘ib ekranga chiqaring.',
        starterCode: `xarajatlar = [
    {"nomi": "Tushlik", "summa": 25000},
    {"nomi": "Yo'l kira", "summa": 5000}
]
jami = sum(item["summa"] for item in xarajatlar)
print("Jami xarajat:", jami)`,
        expectedOutputSubstring: '30000',
        hints: [
          'xarajatlar ro‘yxati bo‘yicha for sikli yuritib summani qo‘shing.',
          'sum(item["summa"] for item in xarajatlar)',
          'print("Jami xarajat:", jami)'
        ]
      }
    ],
    readmeTemplate: `# Expense Tracker\n\n- **Maqsad**: Kunlik xarajatlarni hisoblash va boshqarish.\n- **Texnologiya**: Python List, Dict, Sum.`
  },

  // 🟡 INTERMEDIATE PROJECTS
  {
    id: 'file_integrity_checker',
    title: '4. File Integrity Checker (Fayl Yaxlitligini Tekshirgich)',
    subtitle: 'File handling + Hashlib (SHA-256) (#92)',
    tier: 'intermediate',
    unlockedAtLevel: 20,
    requiredKnowledge: ['File Open', 'Hashlib', 'SHA-256', 'Functions'],
    goal: 'Test faylining SHA-256 hash qiymatini hisoblab, uning o‘zgarmaganligini (integrity) tekshiruvchi xavfsiz vosita yaratish.',
    tasks: [
      {
        id: 'fic_t1',
        stepNumber: 1,
        title: 'Faylning SHA-256 hash-ini hisoblash',
        description: '`hashlib.sha256()` yordamida `"PyQuest Text"` matnining hash qiymatini hisoblang.',
        starterCode: `import hashlib
matn = b"PyQuest Text"
hash_val = hashlib.sha256(matn).hexdigest()
print("SHA-256 Hash:", hash_val[:10])`,
        expectedOutputSubstring: 'SHA-256 Hash:',
        hints: [
          'import hashlib qiling.',
          'hashlib.sha256(matn).hexdigest() orqali hash hisoblang.',
          'hexdigest() natijasini chop eting.'
        ]
      }
    ],
    securityReviewQuestions: [
      'Fayl yaxlitligi (Integrity) buzilganida dastur xabar bera oladimi?'
    ],
    readmeTemplate: `# File Integrity Checker\n\n- **Maqsad**: Fayllar o'zgarganini SHA-256 hash orqali aniqlash.\n- **Kutubxona**: hashlib, os.`
  },
  {
    id: 'security_log_analyzer',
    title: '5. Security Log Analyzer (Xavfsizlik Log Analizatori)',
    subtitle: 'File Reading + String Analysis + Logging (#99)',
    tier: 'intermediate',
    unlockedAtLevel: 20,
    requiredKnowledge: ['File Reading', 'String Analysis', 'Dict Counter'],
    goal: 'Demo xavfsizlik log faylini tahlil qilib, INFO, WARNING va ERROR hodisalari sonini va shubhali urinishlarni aniqlash.',
    tasks: [
      {
        id: 'sla_t1',
        stepNumber: 1,
        title: 'Log faylidagi ERROR-larni sanash',
        description: 'Demo log matnidagi "ERROR" so‘zlari sonini hisoblab ekranga chiqaring.',
        starterCode: `log_data = """INFO login success
WARNING invalid input
ERROR password failed
ERROR unauthorized access"""
error_count = log_data.count("ERROR")
print("Topilgan ERROR lar:", error_count)`,
        expectedOutputSubstring: '2',
        hints: [
          'log_data.count("ERROR") orqali sanang.',
          'Natijani print qiling.',
          'error_count = log_data.count("ERROR")'
        ]
      }
    ],
    readmeTemplate: `# Security Log Analyzer\n\n- **Maqsad**: Server va ilova loglarida xavfsizlik hodisalarini monitoring qilish.`
  },

  // 🔴 ADVANCED PROJECTS
  {
    id: 'secure_student_system',
    title: '6. Secure Student Management System (Yakuniy Xavfsiz Loyiha)',
    subtitle: 'OOP + JSON + Input Validation + Access Control + Hashing (#121)',
    tier: 'advanced',
    unlockedAtLevel: 32,
    requiredKnowledge: ['OOP Class', 'JSON Storage', 'Input Validation', 'Access Control', 'Hashing'],
    goal: 'Talabalar ma’lumotlarini boshqaruvchi, rollar (Student/Teacher/Admin) bilan himoyalangan va xavfsiz kod tamoyillariga mos yakuniy tizim.',
    tasks: [
      {
        id: 'ssms_t1',
        stepNumber: 1,
        title: 'Rollar va kirish nazoratini (Access Control) tuzish',
        description: '`Talaba` va `Admin` rollariga ega foydalanuvchilarning vakolatlarini tekshiruvchi sinf yozing.',
        starterCode: `class SecureSystem:
    def __init__(self, user_role):
        self.role = user_role

    def access_data(self):
        if self.role == "Admin":
            return "Barcha talabalar ma'lumotlari: Access Granted"
        else:
            return "Faqat o'z baholaringiz: Limited Access"

sys = SecureSystem("Admin")
print(sys.access_data())`,
        expectedOutputSubstring: 'Access Granted',
        hints: [
          'Role Admin bo‘lganda Access Granted qaytaring.',
          'sys = SecureSystem("Admin")',
          'print(sys.access_data())'
        ]
      }
    ],
    securityReviewQuestions: [
      'Input validation va Exception handling barcha funksiyalarda mavjudmi?',
      'Rollar vakolati (Access Control - Student, Teacher, Admin) to‘g‘ri cheklanganmi?'
    ],
    readmeTemplate: `# Secure Student Management System\n\n- **Muallif**: PyQuest Master\n- **Imkoniyatlar**: OOP, JSON persistence, Role-based Access Control (RBAC), Hashing, Input Validation.`
  }
];
