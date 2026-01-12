
---

# Variables in JavaScript

## What is a Variable?

A **variable** is like a **container** that stores data so we can use it later in our program.

Example:

```js
var age = 20;
let name = "Pawan";
const isStudent = true;
```

---

# Rules for Naming Variables in JavaScript

JavaScript follows strict rules for variable names.
Breaking these rules will cause errors.

---

## Rule 1: Variable name cannot start with a number

Not allowed:

```js
var 12num;
```

Allowed:

```js
var num12;
```

Reason:
JavaScript does not allow variable names to begin with numbers.

---

## Rule 2: No spaces in variable names

Not allowed:

```js
var first number;
```

Allowed:

```js
var first_number;
var firstNumber;
```

Tip:
CamelCase (`firstNumber`) is commonly used in JavaScript.

---

## Rule 3: JavaScript is case-sensitive

```js
let num = 10;
let Num = 20;
```

`num` and `Num` are treated as different variables.

---

## Rule 4: Only `_` and `$` are allowed special characters

Allowed:

```js
var _count;
var $price;
```

Not allowed:

```js
var @count;
```

Only `_` and `$` can be used in variable names.

---

## Rule 5: Variable names should be meaningful

Avoid unclear names:

```js
let x = 5000;
```

Use meaningful names:

```js
let salary = 5000;
```

Meaningful variable names make code easier to read and understand.

---

## Summary

* Variables store data
* Variable names cannot start with numbers
* Spaces are not allowed
* JavaScript is case-sensitive
* Only `_` and `$` are allowed as special characters
* Always use meaningful variable names

---
