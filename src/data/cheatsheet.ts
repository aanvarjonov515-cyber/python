export interface CheatSheetItem {
  id: string;
  category: string;
  title: string;
  syntax: string;
  example: string;
  description: string;
}

export const CHEAT_SHEET_ITEMS: CheatSheetItem[] = [
  {
    id: 'print',
    category: 'Asosiy (Basics)',
    title: 'print()',
    syntax: 'print(qiymat1, qiymat2, ...)',
    example: 'print("Salom", "Python")',
    description: 'Ekranga matn yoki ma’lumotlarni ko‘rsatish uchun ishlatiladi.'
  },
  {
    id: 'input',
    category: 'Asosiy (Basics)',
    title: 'input()',
    syntax: 'o_zgaruvchi = input("Savol matni: ")',
    example: 'ism = input("Ismingiz: ")',
    description: 'Foydalanuvchidan matn shaklida ma’lumot oladi.'
  },
  {
    id: 'f_string',
    category: 'String (Matn)',
    title: 'f-string (Formatlangan matn)',
    syntax: 'f"Matn {o_zgaruvchi}"',
    example: 'f"Salom, {ism}! Yoshingiz: {yosh}"',
    description: 'Matn ichiga o‘zgaruvchilar qiymatini qulay ravishda joylashtirish.'
  },
  {
    id: 'if_else',
    category: 'Shartlar (Conditions)',
    title: 'if / elif / else',
    syntax: 'if shart1:\n    # kod\nelif shart2:\n    # kod\nelse:\n    # kod',
    example: 'if yosh >= 18:\n    print("Katta")\nelse:\n    print("Kichik")',
    description: 'Mantiqiy shartga qarab dasturning tegishli tarmog‘ini ishga tushiradi.'
  },
  {
    id: 'for_range',
    category: 'Sikllar (Loops)',
    title: 'for sikli va range()',
    syntax: 'for var in range(boshlanish, tugash, qadam):\n    # kod',
    example: 'for son in range(1, 6):\n    print(son)',
    description: 'Ketma-ketlik bo‘yicha ma’lum marta takrorlanish amali.'
  },
  {
    id: 'while_loop',
    category: 'Sikllar (Loops)',
    title: 'while sikli',
    syntax: 'while shart:\n    # kod',
    example: 'i = 1\nwhile i <= 5:\n    print(i)\n    i += 1',
    description: 'Shart True bo‘lib turguniga qadar takrorlanadi.'
  },
  {
    id: 'list_methods',
    category: 'Kolleksiyalar',
    title: 'List (Ro‘yxat amallari)',
    syntax: 'l.append(x) | l.remove(x) | l.pop() | len(l)',
    example: 'mevalar = ["olma"]\nmevalar.append("banan")',
    description: 'Tartiblangan o‘zgaruvchan ro‘yxatlar ustida amallar.'
  },
  {
    id: 'dict_methods',
    category: 'Kolleksiyalar',
    title: 'Dictionary (Lug‘at)',
    syntax: 'd = {key: value} | d.get(key) | d.keys() | d.values()',
    example: 'user = {"ism": "Ali", "yosh": 20}\nprint(user["ism"])',
    description: 'Kalit va qiymat (Key-Value) juftligi bo‘yicha ma’lumot saqlash.'
  },
  {
    id: 'def_function',
    category: 'Funksiyalar',
    title: 'def (Funksiya yaratish)',
    syntax: 'def funksiya_nomi(parametrlar):\n    return natija',
    example: 'def qoshish(a, b):\n    return a + b',
    description: 'Qayta ishlatiluvchi kod blokini e’lon qilish.'
  },
  {
    id: 'try_except',
    category: 'Ilg‘or (Advanced)',
    title: 'try / except (Xato ushlash)',
    syntax: 'try:\n    # kod\nexcept XatoTuri:\n    # xato kodi',
    example: 'try:\n    r = 10 / 0\nexcept ZeroDivisionError:\n    print("0 ga bo‘lib bo‘lmaydi")',
    description: 'Dastur xato berib to‘xtab qolishining oldini olish.'
  },
  {
    id: 'class_oop',
    category: 'OOP',
    title: 'class (Sinf yaratish)',
    syntax: 'class SinfNomi:\n    def __init__(self, p):\n        self.p = p',
    example: 'class Talaba:\n    def __init__(self, ism):\n        self.ism = ism',
    description: 'Ob’yektga yo‘naltirilgan dasturlashda sinf yaratish.'
  }
];
