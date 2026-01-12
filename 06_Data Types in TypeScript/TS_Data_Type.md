
---

# Data Types in TypeScript

## What is a Data Type?

A **data type** tells TypeScript **what kind of value** a variable can store.
TypeScript checks data types **at compile time**, which helps avoid errors.

Example:

```ts
let age: number = 20;
```

---

# Categories of Data Types in TypeScript

TypeScript data types are mainly divided into:

1. Basic (Primitive) Data Types
2. Special Data Types
3. Non-Primitive (Reference) Data Types

---

# 1. Basic (Primitive) Data Types

---

## 1. number

Used to store numeric values (integer and decimal).

```ts
let price: number = 99.5;
let count: number = 10;
```

---

## 2. string

Used to store text.

```ts
let username: string = "Pawan";
let city: string = "Surat";
```

---

## 3. boolean

Used to store `true` or `false`.

```ts
let isActive: boolean = true;
```

---

## 4. null

Represents an intentional empty value.

```ts
let data: null = null;
```

---

## 5. undefined

Represents a variable that has not been assigned a value.

```ts
let result: undefined;
```

---

# 2. Special Data Types

---

## 1. any

Allows any type of value.
Type checking is disabled.

```ts
let value: any = 10;
value = "Hello";
value = true;
```

Use `any` carefully.

---

## 2. unknown

Similar to `any`, but safer.

```ts
let input: unknown = "Hello";
```

You must check the type before using it.

---

## 3. void

Used for functions that do not return anything.

```ts
function greet(): void {
  console.log("Hello");
}
```

---

## 4. never

Used for functions that never return.

```ts
function errorMsg(): never {
  throw new Error("Error occurred");
}
```

---

# 3. Non-Primitive (Reference) Data Types

---

## 1. array

Used to store multiple values of the same type.

```ts
let numbers: number[] = [1, 2, 3];
let names: string[] = ["A", "B", "C"];
```

---

## 2. tuple

Fixed-length array with defined types.

```ts
let user: [string, number] = ["Pawan", 21];
```

---

## 3. object

Used to store key-value pairs.

```ts
let student: {
  name: string;
  age: number;
  course: string;
} = {
  name: "Pawan",
  age: 21,
  course: "MERN"
};
```

---

## 4. enum

Used to define a set of named constants.

```ts
enum Role {
  Admin,
  User,
  Guest
}

let userRole: Role = Role.Admin;
```

---

## 5. union

Allows a variable to hold more than one type.

```ts
let id: number | string;
id = 101;
id = "A101";
```

---

## 6. type alias

Used to create a custom type.

```ts
type User = {
  name: string;
  age: number;
};

let person: User = {
  name: "Pawan",
  age: 21
};
```

---

# Summary

* TypeScript enforces data types at compile time
* Helps catch errors early
* Supports primitive, special, and reference data types
* Makes code more readable and maintainable

---
