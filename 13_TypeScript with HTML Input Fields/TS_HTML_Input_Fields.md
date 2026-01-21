
---

## 📘 Topic: Use TypeScript with HTML Input Fields

---

## 🔹 How to Use TypeScript with Input Fields?

TypeScript ko HTML input fields ke saath use karne ke liye hum:

1. HTML me input fields banate hain
2. TypeScript file me DOM elements access karte hain
3. Input values ko **proper data type** ke saath handle karte hain
4. TypeScript ko compile karke JavaScript banate hain

👉 Browser hamesha **JavaScript file** run karta hai.

---

## 🔹 HTML File (Input.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Inputs with TypeScript</title>
    <script src="output/inputs.js"></script>
</head>
<body>

    <input type="text" id="username" placeholder="Enter user name">
    <br><br>

    <input type="text" id="email" placeholder="Enter user email">
    <br><br>

    <input type="text" id="age" placeholder="Enter user age">
    <br><br>

    <button onclick="getInfo()">Get Info</button>

</body>
</html>
```

👉 Button click par `getInfo()` function call hoga.

---

## 🔹 Why Type Casting is Needed?

`document.getElementById()` hamesha return karta hai:

```
HTMLElement | null
```

But input field ke liye hume **HTMLInputElement** chahiye.

Isliye hum **type casting** use karte hain.

---

## 🔹 TypeScript File (inputs.ts)

```ts
function getInfo() {

    const nameInput = document.getElementById('username') as HTMLInputElement;
    const userName: string = nameInput.value;

    const emailInput = document.getElementById('email') as HTMLInputElement;
    const userEmail: string = emailInput.value;

    const ageInput = document.getElementById('age') as HTMLInputElement;
    const userAge: string = ageInput.value;

    console.log(userName, userEmail, userAge);
}
```

---

## 🔹 Explanation:

* `as HTMLInputElement` → tells TypeScript that element is an input field
* `.value` → input field ki value deta hai
* Sab values string hoti hain by default
* Console me user ka data print ho jata hai

---

## 🔹 Compile TypeScript to JavaScript

Terminal me command run karo:

```bash
tsc
```

👉 Output automatically `output` folder me jayega:

```
output/inputs.js
```

---

## 🔹 Generated JavaScript File (inputs.js)

```js
function getInfo() {
    const nameInput = document.getElementById('username');
    const userName = nameInput.value;

    const emailInput = document.getElementById('email');
    const userEmail = emailInput.value;

    const ageInput = document.getElementById('age');
    const userAge = ageInput.value;

    console.log(userName, userEmail, userAge);
}
```

---

## 🔹 Flow Summary (Very Important)

```
HTML Input → TypeScript (.ts) → JavaScript (.js) → Browser
```

---

## 🎯 Interview Questions (HTML + TypeScript)

### Q1. Why do we use `as HTMLInputElement`?

To tell TypeScript that the element is an input field so we can access `.value`.

---

### Q2. What does `document.getElementById()` return?

It returns `HTMLElement | null`.

---

### Q3. Are input values string or number?

Input values are always **string** by default.

---

### Q4. Can browser run TypeScript directly?

No, browser can run only JavaScript.

---

### Q5. How do you connect TypeScript with HTML?

By compiling TypeScript to JavaScript and linking the `.js` file in HTML.

---
