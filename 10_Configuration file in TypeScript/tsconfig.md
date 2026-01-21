
---

## 📘 Topic: TypeScript Config File (tsconfig.json)

---

## 🔹 What is tsconfig.json?

`tsconfig.json` ek **configuration file** hoti hai jo TypeScript compiler ko batati hai:

* kaunsa JavaScript version banana hai
* kaunse rules follow karne hain
* output file kaha generate karni hai
* errors kaise handle karne hain

👉 Simple words me:
**tsconfig.json = TypeScript ka control center**

---

## 🔹 How to Generate Config File

Project folder ke andar terminal open karo aur command run karo:

```bash
tsc --init
```

➡️ Ye command automatically ek file banayegi:

```
tsconfig.json
```

---

## 🔹 Use of tsconfig.json

tsconfig file ka use hota hai:

* Sabhi `.ts` files ko **ek saath compile** karne ke liye
* Same rules har file par apply karne ke liye
* Errors ko **strict way** me catch karne ke liye
* Project ko **professional structure** dene ke liye

---

## 🔹 Convert All TS Files to JS Together

Agar project me multiple `.ts` files hain, jaise:

```
number.ts
string.ts
null.ts
```

Toh sirf ye command run karo:

```bash
tsc
```

👉 Ye command:

* saari `.ts` files ko compile karegi
* `.js` files generate karegi
* `outDir` ke andar output dalegi

---

## 🔹 Important compilerOptions (Simple Explanation)

### ✅ target

```json
"target": "ES2024"
```

👉 Batata hai kaunsa JavaScript version banana hai.

---

### ✅ module

```json
"module": "commonjs"
```

👉 Batata hai kaunsa module system use hoga (Node.js ke liye commonjs best).

---

### ✅ outDir

```json
"outDir": "./output"
```

👉 Sab compiled `.js` files **output folder** me jayengi.

---

### ✅ strict

```json
"strict": true
```

👉 TypeScript ko **strict mode** me chalata hai.
👉 Zyada errors dikhata hai (good for learning & interviews).

---

### ✅ esModuleInterop

```json
"esModuleInterop": true
```

👉 CommonJS modules ko easily import karne me help karta hai.

---

### ✅ skipLibCheck

```json
"skipLibCheck": true
```

👉 Library files ke errors skip karta hai (project smooth run hota hai).

---

## 🔹 Fix Errors After Config File

Config file ke baad students ko errors dikh sakte hain, jaise:

* variable ka type missing
* `null` or `undefined` issue
* unused variables

👉 Solution:

* Proper data type define karo
* Union type use karo (`string | null`)
* Code clean rakho

Example:

```ts
var userName: string | null = null;
```

---

## 🔹 Common Use of tsconfig.json

* Large TypeScript projects
* React + TypeScript apps
* Team projects
* Interview & production-level code

👉 Real projects me **tsconfig.json mandatory hota hai**.

---

## 🔹 Basic Project Structure (After tsconfig)

```
project-folder/
│
├── number.ts
├── string.ts
├── null.ts
├── tsconfig.json
│
└── output/
    ├── number.js
    ├── string.js
    └── null.js
```

---

## 🎯 Interview Questions (tsconfig.json)

### Q1. What is tsconfig.json?

It is a configuration file that tells the TypeScript compiler how to compile the project.

---

### Q2. How do you create tsconfig.json?

By using the command:

```bash
tsc --init
```

---

### Q3. How do you compile all TypeScript files at once?

By running:

```bash
tsc
```

---

### Q4. What is the use of `outDir`?

It defines the folder where compiled JavaScript files are stored.

---

### Q5. What does `strict: true` do?

It enables strict type checking and helps catch more errors.

---

### Q6. Is tsconfig.json required for small projects?

Not required, but **recommended** for clean and professional code.

---
