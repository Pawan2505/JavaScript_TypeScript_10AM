
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


