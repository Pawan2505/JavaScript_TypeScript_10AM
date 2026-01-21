
---

## 📘 Topic: Number Data Type

### 📄 Filename

```
number-data-type.ts
```

---

## 🔹 What is Number Data Type?

In TypeScript, the **number** data type is used to store **all types of numeric values**.

It can store:

* whole numbers (5, 100)
* decimal numbers (10.75, 99.5)
* binary, octal, and hexadecimal numbers

👉 TypeScript has **only one number type** for all numeric values.

---

## 🔹 Applying Number Data Type

Syntax:

```ts
// var variableName : number = value
```

Example:

```ts
var marks: number = 85;
var bonus: number = 15;
var finalScore: number = 0;
```

---

## 🔹 Redeclare Issue (Important Concept)

```ts
var marks: number = 85;
var marks: number = 90; // allowed
```

👉 With `var`, redeclaration is allowed
👉 With `let` or `const`, redeclaration is **not allowed**

---

## 🔹 Adding Numbers Using Number Data Type

```ts
finalScore = marks + bonus;
console.log(finalScore);
```

👉 Output:

```
100
```

---

## 🔹 Decimal Numbers with Number Type

```ts
var productPrice: number = 499.50;
var tax: number = 50.25;

console.log(productPrice + tax);
```

👉 Decimal values are also stored using **number** data type.

---

## 🔹 Binary, Octal, and Hexadecimal Numbers

```ts
var octalValue: number = 0o45;    // octal
var binaryValue: number = 0b1010; // binary
var hexValue: number = 0x1f;      // hexadecimal

console.log(octalValue + 5);
```

👉 TypeScript automatically converts these values into decimal.

---

## 🔹 Convert String to Number

Sometimes numbers come as **string values**, especially from input fields.

```ts
var price: number = 200;
var discount: string = "50";
```

### Method 1: Using `Number()`

```ts
// var discountNum = Number(discount);
```

### Method 2: Using Unary `+` Operator (Simple Way)

```ts
var discountNum = +discount;
console.log(price - discountNum);
```

👉 Output:

```
150
```

---

## 🔹 Type Inference with Number

```ts
var count = 10;
count = 20;
// count = "ten"; // Error
```

👉 TypeScript automatically understands `count` is a **number**
👉 This is called **Type Inference**

---

## 🔹 Union Type

```ts
var inputValue: number | string = 25;
inputValue = "twenty five";
```

👉 Variable can store **number or string**

---

## 💻 Complete Code (number-data-type.ts)

```ts
// Applying number data type
var marks: number = 85;
var bonus: number = 15;

var finalScore: number = marks + bonus;
console.log(finalScore);

// Decimal example
var productPrice: number = 499.50;
var tax: number = 50.25;
console.log(productPrice + tax);

// Binary, octal, hexadecimal
var octalValue: number = 0o45;
var binaryValue: number = 0b1010;
var hexValue: number = 0x1f;

console.log(octalValue + 5);

// String to number conversion
var price: number = 200;
var discount: string = "50";
var discountNum = +discount;

console.log(price - discountNum);

// Type inference
// var count = 10;
// count = 20
// count = "ten"; // Error

// Union type
// var inputValue: number | string = 25
// inputValue = "twenty five"
```

---

## 🎯 Interview Questions

**Q1. What does number data type store in TypeScript?**
It stores integers, decimals, binary, octal, and hexadecimal values.

**Q2. Does TypeScript have different types for int and float?**
No, it has only one number type.

**Q3. How do you convert a string into a number?**
Using `Number()` or unary `+` operator.

**Q4. What is type inference?**
When TypeScript automatically detects the data type of a variable.

---


