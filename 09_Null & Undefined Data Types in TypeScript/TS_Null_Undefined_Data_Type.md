
---

## 📘 Topic: Null & Undefined Data Types

---

## 🔹 What is `null` Data Type?

`null` ka matlab hota hai **intentional empty value**.
Matlab value hai, but **humne khud empty set ki hai**.

👉 `null` ko hum tab use karte hain jab:

* variable declare hai
* but abhi value assign nahi karni
* future me value aayegi

---

## 🔹 How to Use `null`

```ts
var studentName: string | null = null;
```

👉 Iska matlab:

* `studentName` ya to **string** hoga
* ya phir **null**

---

## 🔹 Example with Condition

```ts
var studentName: string | null = null;
var isLoggedIn: boolean = true;

if (isLoggedIn) {
    studentName = "Rahul Sharma";
}
```

👉 Login hone ke baad value assign ho rahi hai.

---

## 🔹 What is `undefined` Data Type?

`undefined` ka matlab hota hai:

* variable declare kiya
* but **value assign nahi ki**

👉 Ye mostly **automatically** aata hai.

---

## 🔹 How to Use `undefined`

```ts
var city: undefined;
```

Ya:

```ts
var cityName: string | undefined;
```

---

## 🔹 Difference Between `null` and `undefined`

| null                       | undefined                   |
| -------------------------- | --------------------------- |
| Value intentionally empty  | Value not assigned          |
| Manually set hota hai      | Automatically milta hai     |
| Developer decide karta hai | JavaScript decide karta hai |

---

## 🔹 Possible Values

* `null` → only `null`
* `undefined` → only `undefined`

---

## 🔹 `typeof null`

```ts
var dataValue: null | string = null;
console.log(typeof dataValue);
```

👉 Output:

```
object
```

⚠️ Ye JavaScript ka **old bug** hai, interview me puchha jaata hai.

---

## 💻 Complete Code (TS_Null_Undefined_Data_Type.ts)

```ts
// Null example
var dataValue: null | string = null;

var userName: string | null = null;
var isLoggedIn: boolean = true;

if (isLoggedIn) {
    userName = "Rahul Sharma";
}

// Undefined example
var cityName: undefined;

console.log(typeof dataValue);
```

---

## 🔹 Generated JavaScript File (TS_Null_Undefined_Data_Type.js)

```js
"use strict";
var dataValue = null;
var userName = null;
var isLoggedIn = true;
if (isLoggedIn) {
    userName = "Rahul Sharma";
}
var cityName;
console.log(typeof dataValue);
```

---

## 🔹 Run with HTML File

### 📄 HTML File

```
index.html
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Null and Undefined Demo</title>
    <script src="04_TS_Null_Undefined_Data_Type.js"></script>
</head>
<body>
</body>
</html>
```

👉 Browser sirf **JavaScript file** ko run karta hai.

---

## 🎯 Interview Questions

**Q1. What is null in TypeScript?**
`null` means intentional empty value set by developer.

**Q2. What is undefined?**
A variable that is declared but not assigned any value.

**Q3. Can a variable have both null and string value?**
Yes, using union type: `string | null`.

**Q4. What is the output of `typeof null`?**
`object`

---
