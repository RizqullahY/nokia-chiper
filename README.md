# Nokia Chiper
<div align='center'>
  <img src="https://github.com/user-attachments/assets/d9a8006e-2a22-4328-8317-6ada821f2e07" height=400/>
</div>

## 📱 About Nokia Chiper
**Nokia Chiper** is an encryption system based on the **T9 Keyboard** used in old Nokia phones. This system converts text into numerical combinations that resemble the way messages were typed on classic phones before the smartphone era.

## 🔧 Features
- **Encrypt** text into numeric codes based on T9 button patterns.
- **Decrypt** numeric codes back into original text.
- **Supports uppercase and lowercase letters** with a unique format.
- **Supports numbers and spaces** for easier communication.

## ⚙️ How It Works
**Nokia Chiper** uses number-to-letter mapping based on the classic T9 keyboard:

- `2 → a`, `22 → b`, `222 → c`
- `3 → d`, `33 → e`, `333 → f`
- `4 → g`, `44 → h`, `444 → i`
- `5 → j`, `55 → k`, `555 → l`
- `6 → m`, `66 → n`, `666 → o`
- `7 → p`, `77 → q`, `777 → r`, `7777 → s`
- `8 → t`, `88 → u`, `888 → v`
- `9 → w`, `99 → x`, `999 → y`, `9999 → z`
- `0 → space`

For **uppercase letters**, the prefix `!` is used, for example:
- `!2 → A`, `!22 → B`, `!222 → C`

For numbers, the prefix `|` is used, for example:
- `|1 → 1`, `|2 → 2`, etc.

## 🛠️ How to Use

### 1️⃣ Encrypt Text
Use the `encrypt(text)` function to convert text into Nokia Chiper code.

**Example:**
```js
nokiaChiper.encrypt("Hello World");
```
**Result:**
```
!44 33 555 555 666 0 !9 666 777 555 3
```

### 2️⃣ Decrypt Code
Use the `decrypt(code)` function to convert Nokia Chiper code back into text.

**Example:**
```js
nokiaChiper.decrypt("44 33 555 555 666 0 9 666 777 555 3");
```
**Result:**
```
hello world
```

## 🎯 Use Cases
- Nostalgic typing experience like old Nokia phones 📟
- Simple encryption system for secret messages 🕵️
- Learning about character mapping and basic ciphers 🔠

## 💡 Contribution
If you want to contribute to **Nokia Chiper**, feel free to fork this repository and submit a pull request! 🚀

## 📜 License
This project is licensed under the **MIT License**.

---
Happy encrypting with Nokia Chiper! 🔢✨

