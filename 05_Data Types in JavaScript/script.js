
// var , let and const

// 1. we can declared variable with var declaration keywords multiple time.
// var num = 10;

// console.log(num)

// var num = 20;

// console.log(num);



// var num = 10;

// console.log(num)

// var num = "Pawan Maurya";

// console.log(num);



// // var num = 20; // Global variable

// {

//     var num = 30; // local variable

//     // console.log(num);
// }

// console.log(num) // 


// var num = 20; // Global variable

// {
//     let num = 30; // Local block-scoped variable (shadows the global)
    
//     console.log(num);           // Output: 30 (Local)
//     console.log(globalThis.num); // Output: undefined
// }



// let


// let username = "Pawan Maurya";

// console.log(username)

// let username = "Pawan Maurya";

// console.log(username)

// // let username = "Manish";

// username = "Manish";

// console.log(username)


// {
//      let username = "Manish";

//      // we can only access username variable inside this block
//      // we can not access it outside this block
// }

// console.log(username);

// let username  = "Pawan Maurya"; // global variable
// {
//      let username = "Manish"; // local variable
//     console.log(username); // Manish
//      // we can only access username variable inside this block
//      // we can not access it outside this block
// }

// console.log(username); // Pawan Maurya



//  const

// const variable must be initialized at the time of declaration
// const varible is same as let variable but we can not reassign the value to const variable
// we only can change the properties of const object or const array but we can not reassign the value to const object or const array


// const PI = 3.14;
// console.log(PI)

// PI = 4.56;

// console.log(PI)


// const PI;

// PI = 3.14;

// console.log(PI);

// const PI = 5.14;

// {
//     const PI = 3.14;
//     console.log(PI);
// }

// console.log(PI);


// Note : 
// let and const are block scoped variables
// var is function scoped variable or global scoped variable


// Javascript is dynamically typed language that why it automatically detect the data type of variable at runtime.

// we can reassign the variable with different data type value.


// let num = 10;
// console.log(typeof num)

// let data = 10.5;
// console.log(typeof data)


// let username = "Pawan Maurya";
// console.log(typeof username)


// let ispresent = true;
// console.log(typeof ispresent)

// let num2 = null;
// console.log(typeof num2)

// object store data in key value pair

// let person = {
//     name : "Pawan Maurya",
//     age : 24,
//     isMarried : false
// }

// console.log(typeof person)

// let email;

// console.log(typeof email)

// long int num = 7643632;

// let num = 46732584238472n;

// console.log(typeof num)


// let s1 = Symbol(10);

// console.log(s1)
// console.log(typeof s1)

// let s2 = Symbol(10);
// console.log(s2)
// console.log(typeof s2)

// == , === 

// let a = 10;
// console.log(typeof a)
// let b = "10";
// console.log(typeof b)


// console.log(a == b); // true

// console.log(a === b); // false

// == only check the value

// === check the value and data type both


// let s1 = Symbol(10);

// console.log(s1)
// console.log(typeof s1)

// let s2 = Symbol(10);
// console.log(s2)
// console.log(typeof s2)

// console.log(s1 == s2) // false


// symbol always create unique value even if we pass same value in symbol function

// it compare the reference of symbol not the value of symbol

//Non-Primitive (Reference) Data Types
// Non-primitive data types can store multiple values and are mutable.


// let person = {
//     username:"Pawan Maurya",
//     age:21,
//     salary:99,
// }


// console.log(person)
// console.log(typeof person)


// // object store data in key value pair.
// // we can access the value of object by using key name with dot notation or bracket notation.

// console.log(person["username"]);
// console.log(person.username);


// const add = (a,b)=>{
//     return a+b;
// }

// let sum = add(10,20);

// console.log(sum)

// console.log(typeof add);


// Array in Js : 

// let arr = [12,34,"Pawan",false];

// console.log(arr)

// console.log(typeof arr)


// In Javascript array is dynaminc in nature and store multiple data type values.
// but in typsescript array is static in nature and store only same data type values.

