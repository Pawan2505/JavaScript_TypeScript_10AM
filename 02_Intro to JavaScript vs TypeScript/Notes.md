
---

# 📘 Intro to JavaScript vs TypeScript

## (ES5 & ES6 Concept Difference + Output Methods)

---

## 1️⃣ What is JavaScript?

**JavaScript (JS)** is a **programming language** used to make web pages **interactive**.

### 🔹 Why JavaScript?

* Makes websites **dynamic**
* Works directly in the **browser**
* Used for:

  * Form validation
  * Button clicks
  * Sliders
  * Dynamic content
  * API calls

### 🔹 JavaScript Runs In:

* Browser (Chrome, Edge, Firefox)
* Server (Node.js)

---

## 2️⃣ What is TypeScript?

**TypeScript (TS)** is a **superset of JavaScript** developed by **Microsoft**.

👉 This means:

* TypeScript = JavaScript + extra features
* All JavaScript code is valid TypeScript

### 🔹 Why TypeScript?

* Adds **type safety**
* Helps catch **errors before runtime**
* Better for **large applications**
* Widely used in **React, Angular, Next.js**

---

## 3️⃣ JavaScript vs TypeScript (Comparison)

| Feature         | JavaScript     | TypeScript        |
| --------------- | -------------- | ----------------- |
| Type Checking   | ❌ No           | ✅ Yes             |
| Errors          | Runtime        | Compile time      |
| Learning        | Easy           | Slightly hard     |
| File Extension  | `.js`          | `.ts`             |
| Best For        | Small projects | Large projects    |
| Browser Support | Direct         | Needs compilation |

---

## 4️⃣ What is ES5?

**ES5 (ECMAScript 5)** is an **older version** of JavaScript (2009).

### 🔹 ES5 Features:

* `var` keyword
* Function-based code
* Less readable
* More lines of code

### Example (ES5):

```js
var name = "Pawan";
function greet() {
  console.log("Hello " + name);
}
greet();
```

---

## 5️⃣ What is ES6?

**ES6 (ECMAScript 2015)** is a **modern version** of JavaScript.

### 🔹 ES6 Features:

* `let` and `const`
* Arrow functions
* Template literals
* Classes
* Destructuring
* Spread operator

### Example (ES6):

```js
const name = "Pawan";
const greet = () => {
  console.log(`Hello ${name}`);
};
greet();
```

---

## 6️⃣ ES5 vs ES6 Difference

| Feature  | ES5             | ES6               |
| -------- | --------------- | ----------------- |
| Variable | `var`           | `let`, `const`    |
| Function | Normal function | Arrow function    |
| String   | `+` concat      | Template literals |
| Scope    | Function scope  | Block scope       |
| Code     | Long            | Short & clean     |

---

## 7️⃣ Output Methods in JavaScript

JavaScript provides multiple ways to **show output**.

---

## 8️⃣ console.log()

### 🔹 What is it?

Used to display output in the **browser console**.

### 🔹 Mostly used for:

* Debugging
* Checking values

### Example:

```js
console.log("Hello JavaScript");
```

Output appears in:

* Right click → Inspect → Console

---

## 9️⃣ document.write()

### 🔹 What is it?

Writes output **directly on the webpage**.

⚠️ **Not recommended** for real projects.

### Example:

```js
document.write("Welcome to JavaScript");
```

Drawback:

* Removes existing HTML if used after page load

---

## 🔟 alert()

### 🔹 What is it?

Shows output in a **popup box**.

### Example:

```js
alert("Form submitted successfully");
```

Used for:

* Warnings
* Simple messages

⚠️ Blocks user interaction until closed.

---

## 1️⃣1️⃣ innerHTML

### 🔹 What is it?

Used to display or change **HTML content dynamically**.

### Example:

```html
<p id="demo"></p>

<script>
  document.getElementById("demo").innerHTML = "Hello World";
</script>
```

Best method for:

* Updating UI
* Dynamic content

---

## 1️⃣2️⃣ Output Methods Comparison

| Method             | Where Output Shows | Use Case      |
| ------------------ | ------------------ | ------------- |
| `console.log()`    | Console            | Debugging     |
| `document.write()` | Page               | Learning only |
| `alert()`          | Popup              | Messages      |
| `innerHTML`        | HTML element       | Real projects |

---

## 1️⃣3️⃣ Summary 

* JavaScript makes websites interactive
* TypeScript adds safety to JavaScript
* ES6 is modern and preferred
* `console.log()` is best for testing
* `innerHTML` is best for UI updates
* TypeScript + ES6 = Industry standard

---
