
---

# 📘 TypeScript Installation and Setup

---

## 🔹 Step 1: Download and Install Node.js

To use TypeScript, **Node.js is required**.

👉 Download Node.js from this link:
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

After installation, open **Terminal / Command Prompt** and check:

```bash
node -v
npm -v
```

If version numbers are shown, Node.js is installed correctly ✅

---

## 🔹 Step 2: Create Project Folder

1. Create a new folder on Desktop or any drive
2. Folder name:

```
typescript-demo
```

3. Open this folder in **VS Code**

---

## 🔹 Step 3: Install TypeScript (Global Installation)

Open terminal inside the project folder and run:

```bash
npm install -g typescript
```

Check TypeScript installation:

```bash
tsc -v
```

If version shows, TypeScript is installed successfully ✅

---

## 🔹 Step 4: Create TypeScript File

Inside the project folder, create a new file:

```
App.ts
```

---

## 🔹 Step 5: Write TypeScript Code (App.ts)

```ts
var num: number = 10;
var num: number = 10.10;

var isLogin: boolean = false;

var a: undefined = undefined;

var numArray: number[] = [10, 20, 30];
```

### Simple Explanation:

* `number` → used for numeric values
* `boolean` → true or false
* `undefined` → undefined value
* `number[]` → array that allows only numbers

---

## 🔹 Step 6: Compile TypeScript to JavaScript

Run this command in terminal:

```bash
tsc App.ts
```

➡️ This will automatically generate a new file:

```
App.js
```

---

## 🔹 Generated JavaScript File (App.js)

```js
"use strict";

var num = 10;
var num = 10.10;
var isLogin = false;
var a = undefined;
var numArray = [10, 20, 30];
```

👉 JavaScript does **not support data types**, so all types are removed.

---

## 🔹 Step 7: Connect JavaScript File with HTML

Create an HTML file:

```
User.html
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript Demo</title>
    <script src="App.js"></script>
</head>
<body>
</body>
</html>
```

👉 Browser **only understands JavaScript**, not TypeScript.

---

## 🔹 Flow Summary (Very Important for Interview)

```
App.ts  →  (tsc compiler)  →  App.js  →  Browser
```

---

# 🎯 Interview Questions (Beginner Level)

### Q1. What is TypeScript?

TypeScript is a statically typed version of JavaScript that helps catch errors before running the code.

---

### Q2. Why is Node.js required for TypeScript?

Node.js provides npm, which is needed to install and run TypeScript.

---

### Q3. How do you convert TypeScript into JavaScript?

By using the TypeScript compiler command:

```bash
tsc filename.ts
```

---

### Q4. Can browsers run TypeScript directly?

No, browsers can run only JavaScript.

---

### Q5. What is the file extension of TypeScript?

`.ts`

---

### Q6. What does `number[]` mean in TypeScript?

It defines an array that can store only numbers.

---

