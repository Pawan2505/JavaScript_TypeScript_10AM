
// Array : 

// - It is a variable that can store multiple data.
// - IN javascript array is dynamic -> At runtime we can increase and decrease memory.
// - In javascript array : diffirent type of datatype value we can store
// - array work on index - starting index -> 0
// - no size of array define 

// syntax:

// let arr = [12,34.56,true,"Pawan"];

// console.log(arr);
// console.log(typeof arr);

// console.log(arr[0]);
// console.log(arr[3]);

// console.log("Size of array : ",arr.length);

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }

// for(let num in arr){
//     console.log(arr[num]);
// }



// let brr = [12,34,56,78];

// brr.forEach((item)=>{
//     console.log(item);
// })

// brr.forEach((item)=>console.log(item))
// brr.forEach((item)=> item*2);
// console.log(brr);
// let crr =brr.forEach((item)=> item*2);
// console.log(crr);


// immutable -> we can not change original array
// mutable -> we can change original array
// forEach loop can not change original array -> immutable
// forEach loop does not return new array -> it return undefined


// let arr = [2,4,6,8,10];

// arr.map((item)=>console.log(item))

// arr.map((item)=>item*2);
// let brr = arr.map((item)=>item*2);

// console.log(brr);

// map can not change original array -> immutable
// map return new array -> it return new array with changes
// map is alsow used to iterate array like forEach loop but it return new array with changes



// let arr = [];

// arr[0] = 12;
// arr[1] = 13;
// arr[2] = 14;

// arr[1] = 111;
// console.log(arr);

//  let arr = [];

//  arr.push(12);
//  arr.push(13);
//  arr.push(14);
//  arr.push(15);
//  arr.push(16);

//  console.log(arr)
 
//  arr.pop();

//  console.log(arr)
 
//  arr.unshift(10);
//  arr.unshift(20);

//  console.log(arr)
 
//  arr.shift();

//  console.log(arr)

// // splice(index, delete_count, insert)
// arr.splice(3,1,77,88,99);

// console.log(arr)

// let brr = arr.slice(2,5);

// console.log(brr);



// let arr = [23,45,6,78,98,35];

// let data = arr.filter((item)=> item%2 == 0);

// console.log(data);


// let arr = [12,3,56,23,78,213,6,78];

// let acc = arr.toSorted((a,b)=>a-b);
// let dec = arr.toSorted((a,b)=>b-a);

// console.log(acc);
// console.log(dec);

// console.log(arr);


// let arr = [12,34,44,88,34];

// includes() -> it is used to check whether the given value is present in the array or not. It return true if value is present otherwise it return false.

// console.log(arr.includes(2));

// every() -> it is used to check whether all the elements in the array satisfy the given condition or not. It return true if all the elements satisfy the condition otherwise it return false.

// let result = arr.every((item)=>item%2 == 0);

// console.log(result);

// some() -> it is used to check whether at least one element in the array satisfy the given condition or not. It return true if at least one element satisfy the condition otherwise it return false.
// let result = arr.some((item)=>item%2 !== 0);

// console.log(result);


// indexof, findindex



// let arr = [12,25,35,445,67,8,67,34,56];

// indexOf() -> it is used to find the index of the first occurrence of the given value in the array. It return the index if value is present otherwise it return -1.

// console.log(arr.indexOf(67));

// findIndex() -> it is used to find the index of the first element in the array that satisfy the given condition. It return the index if element is present otherwise it return -1.

// let result = arr.findIndex((item)=> item>500);

// console.log(result);


// String : 

// 1. It is collection of character or text.
// 2. we can also say string is array.
// 3. we can also work on index on string (we can itreate on string).
// 4. string also have so name built-in method like array

// Note : String is mutable or immutable ?

//  Ans : string is immutable (we can not change original string).

// String Literal : 

// 1. using single quote : ''
// 2. using double quote : ""
// 3. template literal (backtick) : ``


// let username = 'Pawan Maurya';
// console.log(username);

// const username = "Pawan Maurya";
// console.log(username);

// let username = `Pawan Maurya`;
// console.log(username);

// let username = 'Pawan Maurya';

// console.log("Hey",username);

// let username = "Pawan Maurya";
// let age = 25;
// console.log("Hey",username + " Your age is" +age);

// console.log(`Hey, ${username}. Your age is ${age}`);


// let username = "Pawan Maurya";

// console.log(username[0]);
// console.log(username[1]);
// console.log(username[2]);
// console.log(username[3]);
// console.log(username[4]);

// username[0]= "Q"; // we can not change in original string

// console.log(username);

// let newStr = username.replace("P","Q");
// console.log(newStr);


// let username = "Pawan Maurya";

// for(let i = 0; i < username.length; i++){
//     console.log(username[i]);
// }


// Method 1 : length

// let username = "Pawan Maurya";

// let result = '';
// for(let i = 0; i < username.length; i++){
//     result +=username[i++];
// }

// console.log(result)

// Method : toUppercase()

// let username = 'Pawan Maurya';

// let newStr = username.toUpperCase();

// console.log(newStr);
// console.log(username);

// Method : toLowercase()

let username = 'Pawan Maurya';

let newStr = username.toLowerCase();

console.log(newStr);
console.log(username);