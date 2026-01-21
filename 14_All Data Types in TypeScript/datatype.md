
---

# 📘 Topic: All Data Types

---

## 🔹 What are Data Types?

**Data Types** batate hain ki:

* variable kis type ka data store karega
* TypeScript ko samajh aata hai ki value kaise use karni hai

👉 Data types se:

* errors kam hote hain
* code clean hota hai
* debugging easy hoti hai

---

## 🔹 Types of Data Types in TypeScript

TypeScript me mainly ye categories hoti hain:

1. **Primitive (Basic) Types**
2. **Special Types**
3. **Object & Collection Types**
4. **Advanced Types**
5. **Function Types**

---

# 🔹 1. Basic (Primitive) Data Types

Ye sabse common aur basic types hote hain.

---

## ✅ number

All types of numbers ko represent karta hai:

* integer
* decimal
* hexadecimal
* binary
* octal

```ts
let age: number = 25;
let pi: number = 3.14;
let hexValue: number = 0xff;
```

---

## ✅ string

Text values ke liye use hota hai.
String likhne ke **3 ways** hote hain:

```ts
let name: string = "Arjun";
let city: string = 'Ahmedabad';
let message: string = `Hello ${name}`;
```

👉 Backticks (`) ko **template string** kehte hain.

---

## ✅ boolean

Sirf **true ya false** value store karta hai.

```ts
let isActive: boolean = true;
let isAdmin: boolean = false;
```

---

## ✅ null & undefined

### null

Value intentionally empty hoti hai.

```ts
let data: null = null;
```

### undefined

Variable declared hai but value assign nahi hui.

```ts
let value: undefined = undefined;
```

---

# 🔹 2. Special Data Types

---

## ✅ any

Koi bhi type store kar sakta hai.
⚠️ Safety kam ho jaati hai.

```ts
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
```

👉 Avoid using `any` unless very necessary.

---

## ✅ unknown

`any` jaisa hai but **safer**.

```ts
let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

👉 Use karne se pehle type check compulsory.

---

## ✅ void

Mostly functions ke liye use hota hai
jab function kuch return nahi karta.

```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

---

## ✅ never

Aise functions ke liye jo:

* kabhi return nahi karte
* ya error throw kar dete hain

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

# 🔹 3. Object & Collection Types

---

## ✅ object

Non-primitive data ke liye.

```ts
let person: { name: string; age: number } = {
  name: "Aman",
  age: 22
};
```

---

## ✅ Arrays

Same type ke multiple values store karta hai.

```ts
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana"];
```

---

## ✅ Tuples

Fixed length + fixed order array.

```ts
let user: [number, string] = [1, "Raj"];
```

---

## ✅ Enums

Named constants ka group.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
```

---

# 🔹 4. Advanced Data Types

---

## ✅ Union Type (`|`)

Variable multiple types ka ho sakta hai.

```ts
let id: number | string;
id = 101;
id = "abc";
```

---

## ✅ Intersection Type (`&`)

Multiple types ko combine karta hai.

```ts
type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee;

let emp: Staff = {
  name: "Ravi",
  id: 101
};
```

---

## ✅ Type Alias

Apna custom type banane ke liye.

```ts
type ID = number | string;

let userId: ID = "U123";
```

---

## ✅ Literal Types

Exact fixed values allow karta hai.

```ts
let status: "success" | "error" | "loading";
status = "success";
```

---

# 🔹 5. Function Types

Function ke parameters aur return type define kar sakte hain.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

# ✅ In Short

### ✔ Basic Types

* number
* string
* boolean

### ✔ Special Types

* any
* unknown
* void
* never
* null
* undefined

### ✔ Data Structures

* object
* array
* tuple
* enum

### ✔ Advanced Types

* union
* intersection
* type alias
* literal types

---

## 🎯 Interview

> TypeScript data types help us write safe, readable, and error-free code by defining what kind of data a variable can hold.

---
