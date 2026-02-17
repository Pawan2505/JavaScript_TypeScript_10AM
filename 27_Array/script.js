
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