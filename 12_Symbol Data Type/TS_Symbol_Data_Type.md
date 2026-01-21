
---

## 📘 Topic: Symbol Data Type

---

## 🔹 What is Symbol Data Type?

**Symbol** is a **unique and immutable (unchangeable)** data type.

👉 Even if two symbols look the same, they are **never equal**.
👉 Mostly used to create **unique keys**.

Simple words:

* Symbol = **unique identifier**
* No two symbols are the same

---

## 🔹 How to Use Symbol

To create a symbol, we use `Symbol()` function.

```ts
var key1 = Symbol();
var key2 = Symbol();
```

👉 `key1` and `key2` are **different**, even without values.

---

## 🔹 Symbol with Description

We can also pass a description (just for understanding).

```ts
var symA = Symbol("user");
var symB = Symbol("user");
```

👉 Description same hone ke baad bhi:

```ts
// symA === symB  → false
```

---

## 🔹 Example: Symbol Uniqueness

```ts
var id1 = Symbol("id");
var id2 = Symbol("id");

// console.log(id1 === id2); // false
```

👉 Ye prove karta hai ki **Symbol hamesha unique hota hai**.

---

## 🔹 Using Symbol in Object (Most Important Use)

Symbol ka main use hota hai **object ke unique keys** banane me.

```ts
const empId = Symbol("empId");

const employee = {
    [empId]: 101,
    name: "Rahul",
    role: "Developer"
};

console.log(employee[empId]);
```

👉 Symbol key:

* object me **hidden** rehti hai
* accidentally overwrite nahi hoti

---

## 🔹 Where We Can Use Symbol?

Symbol ka use hota hai:

* unique object keys banane me
* library / framework code me
* data collision avoid karne ke liye
* internal object properties ke liye

👉 Normal projects me kam use hota hai,
👉 but **advanced JavaScript & TypeScript** me important hai.

---

## 💻 Complete Code (TS_Symbol_Data_Type.ts)

```ts
// Creating symbols
var sym1 = Symbol();
var sym2 = Symbol();

var sym3 = Symbol("code");
var sym4 = Symbol("code");

// Symbol comparison
// console.log(sym1 === sym2); // false
// console.log(sym3 === sym4); // false

// Symbol as object key
const userKey = Symbol("userId");
const adminKey = Symbol("userId");

const user = {
    [userKey]: 5001,
    name: "Rahul Sharma"
};

console.log(user[userKey]);
```

---

## 🔹 Generated JavaScript File (TS_Symbol_Data_Type.js)

```js
"use strict";
var sym1 = Symbol();
var sym2 = Symbol();
var sym3 = Symbol("code");
var sym4 = Symbol("code");
const userKey = Symbol("userId");
const adminKey = Symbol("userId");
const user = {
    [userKey]: 5001,
    name: "Rahul Sharma"
};
console.log(user[userKey]);
```

---

## 🔹 Run with HTML File

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Symbol Data Type</title>
    <script src="TS_Symbol_Data_Type.js"></script>
</head>
<body>
</body>
</html>
```

👉 Browser sirf **JavaScript file** run karta hai.

---

## 🎯 Interview Questions

**Q1. What is Symbol data type?**
Symbol is a unique and immutable data type used as an identifier.

---

**Q2. Are two symbols with same description equal?**
No, every symbol is always unique.

---

**Q3. Why do we use Symbol in objects?**
To create unique keys and avoid property name conflicts.

---

**Q4. Can Symbol be used as object key?**
Yes, symbols are mainly used as object keys.

---

**Q5. Is Symbol commonly used in daily coding?**
No, it is mostly used in advanced scenarios and libraries.

---
