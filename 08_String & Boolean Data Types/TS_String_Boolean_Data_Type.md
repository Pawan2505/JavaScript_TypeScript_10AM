
---

## 📘 Topic: String & Boolean Data Type

---

## 🔹 String Data Type

In TypeScript, **string** data type is used to store **text values**.

Example:

* names
* messages
* sentences
* user input text

---

## 🔹 Ways to Define String

TypeScript me string likhne ke **3 common ways** hote hain:

```ts
var message1: string = "Welcome to TypeScript";
var message2: string = 'Learning is easy';
var message3: string = `TypeScript is powerful`;
```

👉 Teenon valid hain, but **backticks (`)** template string ke liye use hote hain.

---

## 🔹 Template String

Template string me hum **variables ko string ke andar directly use** kar sakte hain.

```ts
var studentName: string | null = "Rahul";
var studentAge: number = 21;

var details: string = `Student name is ${studentName} and age is ${studentAge}`;
console.log(details);
```

👉 Isse string zyada **readable aur clean** hoti hai.

---

## 🔹 Convert Number to String

```ts
var score: number = 90;

// Method 1
// var scoreText: string = score.toString();

// Method 2 (simple way)
// var scoreText: string = "" + score;
```

---

## 🔹 Convert Boolean to String

```ts
var isPassed: boolean = true;

// Method 1
// var resultText: string = isPassed.toString();

// Method 2
// var resultText: string = "" + isPassed;
```

---

## 🔹 Boolean Data Type

Boolean data type sirf **2 values** store karta hai:

* `true`
* `false`

Example:

```ts
var isLoggedIn: boolean = false;
var hasPermission: boolean = true;
```

---

## 🔹 Assign Boolean Value

```ts
var status1: boolean = true;
var status2: boolean;

status2 = status1;
console.log(status2);
```

👉 Output:

```
true
```

---

## 🔹 Type Inference with String

```ts
var cityName = "Ahmedabad";
// cityName = 100; // Error
```

👉 TypeScript automatically samajh leta hai ki `cityName` **string hai**
👉 Is concept ko **Type Inference** kehte hain.

---

## 💻 Complete Code (03_TS_String_Boolean_Data_Type.ts)

```ts
// String examples
var message1: string = "Welcome to TypeScript";
var message2: string = 'Learning is easy';
var message3: string = `TypeScript is powerful`;

// Template string
var studentName: string | null = "Rahul";
var studentAge: number = 21;

var details: string = `Student name is ${studentName} and age is ${studentAge}`;
console.log(details);

// Number to string
var score: number = 90;
// var scoreText: string = score.toString();
// var scoreText: string = "" + score;

// Boolean to string
var isPassed: boolean = true;
// var resultText: string = isPassed.toString();
// var resultText: string = "" + isPassed;

// Boolean example
var isLoggedIn: boolean = false;
var hasPermission: boolean = true;

// Boolean assignment
var status1: boolean = true;
var status2: boolean;
status2 = status1;
console.log(status2);

// Type inference
var cityName = "Ahmedabad";
// cityName = 100; // Error
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
    <title>String and Boolean Demo</title>
    <script src="03_TS_String_Boolean_Data_Type.js"></script>
</head>
<body>
</body>
</html>
```

👉 Browser sirf **JavaScript file** run karta hai.

---

## 🎯 Interview Questions

**Q1. What is string data type used for?**
To store text values.

**Q2. How many values can boolean store?**
Only two values: true and false.

**Q3. What is template string?**
A string that allows variables inside using backticks.


**Q4. What is type inference?**
When TypeScript automatically detects the data type.

---

