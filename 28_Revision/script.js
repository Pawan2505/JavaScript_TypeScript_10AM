// Array With Functions Push ,Pop, shift, upshifts, Splice string function

// Array With Functions (map ,filter, foreach, indexof, findindex ,includes, every, some)


//  Array : collection of multiple value (it may be diff datatype value)
// it work on index -> s -> 0, end index -> length -1
// memory allocation dynamic -> runtime -> inc/dec
// In JavaScript, memory allocation is primarily non-contiguous for complex data structures like Objects and standard Arrays, as they are typically stored on the Heap.
// no size declaration


// destructuring , spread


// let arr = [];

// console.log(typeof arr);

// let arr = [12,34,56,"Pawan",[22,45,56],{age:22}];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);
// console.log(arr[6]);

// arr[1] = 200;

// console.log(arr)


// let arr = [12,34,56,78,9];

// let brr = [];

// for(let i = 0; i < arr.length; i++){
   
//     brr[i] = arr[i];
// }

// console.log(brr)


// let arr = [12,34,56,67,23];

// for(let num of arr){
//     console.log(num)
// }

// let arr = [12,34,56,67,23];

// for(let index in arr){
//     console.log(index)
// }


// let arr = [];
// arr.push(12);

// console.log(arr);




// let arr = [12,34,56,677,89];

// // arr.splice(2,2);
// // arr.splice(2,1,23,67);

// // console.log(arr);

// console.log(arr);

// // arr.splice(3,1,344,222,111);

// arr.splice(1,2,369,356)
// console.log(arr);



// let arr = [12,34,56,34,23];

// console.log(arr.slice(1,4));


// recurrsion function


// it is function
// call onece , and after that it call itself
// base condition to controll the calling function


// 1 to 10


// function add(x){


//     // base condition

//     if(x == 1){
//         return 1;
//     }

//     return x+add(x-1);

// }

// let sum = add(10);

// console.log(sum);


// let arr = [12,34];

// arr.push(78);

// console.log(arr);

// arr.pop();

// console.log(arr);

// arr.unshift(23);

// console.log(arr)

// arr.shift();

// console.log(arr)



// let arr = [11,22,33,44,55];

// console.log(arr)
// let brr = arr.map((item)=>item*2);
// arr.map((item)=>{
//     console.log(item);
// });

// console.log(brr);

// console.log(arr)


// let arr =  [11,22,33,44,55];

// // arr.forEach((item)=>{
// //     console.log(item)
// // })
// let brr = arr.forEach((item)=>item*2)

// console.log(brr)


