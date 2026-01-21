
---

## 📘 Topic: Mastering BigInt for Large Numbers

---

## 🔹 What is BigInt?

**BigInt** is a data type used to store **very large whole numbers**.

👉 BigInt tab use hota hai jab normal `number` data type **accurate result nahi de pata**.

---

## 🔹 Why BigInt is Needed?

In JavaScript and TypeScript, **number** has a limit.

```ts
Number.MAX_SAFE_INTEGER = 2^53 - 1
```

Value:

```
9007199254740991
```

👉 Is limit ke baad **calculation me mistake (precision loss)** hoti hai.

---

## 🔹 When Should We Use BigInt?

Use BigInt when:

* number bahut zyada bada ho
* financial calculations (large values)
* large IDs
* scientific or system-level data

👉 Small numbers ke liye BigInt use karna **recommended nahi**.

---

## 🔹 How to Create BigInt?

BigInt value ke end me **`n` lagana compulsory** hai.

```ts
var largeValue: bigint = 9007199254740991n;
```

---

## 🔹 Example of BigInt

```ts
var largeNumber: bigint = 9007199254740991n;

var a: bigint = 5n;
var b: bigint = 10n;

console.log(largeNumber + a);
console.log(largeNumber + b);
```

👉 Output bilkul accurate hota hai ✅

---

## 🔹 BigInt vs Number (Important)

```ts
var numValue: number = 10;
var bigValue: bigint = 10n;
```

👉 Dono **same nahi** hote.

---

## 🔹 Mixing Issue (Very Important)

BigInt ko **number ke saath directly mix nahi kar sakte**.

❌ Wrong:

```ts
var num: number = 10;
var big: bigint = 20n;

// console.log(num + big); // Error
```

✔️ Correct way:

```ts
console.log(BigInt(num) + big);
```

---

## 💻 Complete Code (05_TS_BigInt_Data_Type.ts)

```ts
// BigInt example
var bigNumber: bigint = 9007199254740991n;

var x: bigint = 1n;
var y: bigint = 2n;

console.log(bigNumber + x);
console.log(bigNumber + y);
```

---

## 🔹 Generated JavaScript File (05_TS_BigInt_Data_Type.js)

```js
"use strict";
var bigNumber = 9007199254740991n;
var x = 1n;
var y = 2n;
console.log(bigNumber + x);
console.log(bigNumber + y);
```

---

## 🔹 Run with HTML File

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BigInt Demo</title>
    <script src="05_TS_BigInt_Data_Type.js"></script>
</head>
<body>
</body>
</html>
```

👉 Browser **BigInt support hona chahiye** (modern browsers support it).

---

## 🎯 Interview Questions

### Q1. What is BigInt?

BigInt is a data type used to store very large integer values.

---

### Q2. Why do we need BigInt?

Because normal number type cannot safely handle very large numbers.

---

### Q3. How do you create a BigInt?

By adding `n` at the end of a number.

---

### Q4. Can we mix BigInt and number?

No, they must be converted to the same type first.

---

### Q5. Does BigInt support decimal values?

No, BigInt supports only whole numbers.

---
