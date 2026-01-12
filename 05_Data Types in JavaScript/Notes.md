
---

# Data Types in JavaScript

## What is a Data Type?

A **data type** tells JavaScript **what kind of data** a variable is holding.

Example:

```js
let age = 20;
```

Here, `age` stores a number, so its data type is **Number**.

---

## Types of Data in JavaScript

JavaScript data types are mainly divided into **two categories**:

1. Primitive Data Types
2. Non-Primitive (Reference) Data Types

---

# 1. Primitive Data Types

Primitive data types store **single values** and are **immutable**.

---

## 1. Number

Used to store numbers (integer and decimal).

```js
let marks = 85;
let price = 99.50;
```

---

## 2. String

Used to store text or characters.

```js
let name = "Pawan";
let city = 'Surat';
```

Strings can be written using **single quotes** or **double quotes**.

---

## 3. Boolean

Used to store `true` or `false`.

```js
let isLogin = true;
let isAdmin = false;
```

Mostly used in conditions and decisions.

---

## 4. Undefined

A variable that is declared but **not assigned any value**.

```js
let result;
```

Here, `result` is `undefined`.

---

## 5. Null

Represents **no value intentionally**.

```js
let data = null;
```

`null` means the value is empty on purpose.

---

## 6. BigInt

Used to store **very large numbers**.

```js
let bigNumber = 12345678901234567890n;
```

`n` at the end makes it a BigInt.

---

## 7. Symbol

Used to create **unique values**.

```js
let id = Symbol("id");
```

Mostly used in advanced JavaScript concepts.

---

# 2. Non-Primitive (Reference) Data Types

Non-primitive data types can store **multiple values** and are **mutable**.

---

## 1. Object

Used to store data in **key-value pairs**.

```js
let student = {
  name: "Pawan",
  age: 21,
  course: "MERN"
};
```

---

## 2. Array

Used to store **multiple values** in a single variable.

```js
let subjects = ["HTML", "CSS", "JavaScript", "React"];
```

---

## 3. Function

A block of code used to perform a task.

```js
function greet() {
  console.log("Hello World");
}
```

---

# Checking Data Type

Use `typeof` operator to check the data type.

```js
typeof 10;          // number
typeof "Hello";     // string
typeof true;        // boolean
typeof undefined;   // undefined
typeof null;        // object (JavaScript bug)
```

---

# Summary

* Data type defines the type of value stored
* JavaScript has primitive and non-primitive data types
* Primitive types store single values
* Non-primitive types store multiple or complex values
* `typeof` is used to check data type

---
