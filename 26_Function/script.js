
//1. Normal Function : also known as named function

// Type 1 : no return type -> not return any value


// function definition 
// function add(){
//     console.log("Named function Called..")  // block of code
// }

// add(); // invoking the function : calling the function : executing the function


// x,y ->  It is parameter : it is a placeholder for the value which will be passed at the time of function call

// function add(x,y){
//     console.log(`Addition : ${x+y}`);  // `` -> Template literal : it is used to embed the expression -> text k sath ham javascript expression ko embed kr skte hai   
// }

// add(10,20); // 10 and 20 are argument : it is the actual value which is passed to the function at the time of function call


// function add(x,y){

//     return x+y;  // return statement : it is used to return a value from the function : it is used to exit from the function

// }

// // add(100,200);

// // console.log(add(100,200))

// let sum = add(100,200);

// console.log(sum)



// function add(x,y){

//     return x+y;  // return statement : it is used to return a value from the function : it is used to exit from the function

//     console.log("Hey, Addition Function");

// }



// let sum = add(100,200);

// console.log(sum)

// function add(x,y){
    
//     console.log("Hey, Addition Function");
//     return x+y;  // return statement : it is used to return a value from the function : it is used to exit from the function


// }



// let sum = add(100,200);

// console.log(sum)


// function add(x,y){
    
//     console.log("Hey, Addition Function");
//     return `Addition : ${x+y}`;  // return statement : it is used to return a value from the function : it is used to exit from the function


// }



// let sum = add(100,200);

// console.log(sum)


// Note : let x, let y : In parameter we don't use let, const or var keyword otherwise it will give error

// function add(x,y){
    
//     console.log("Hey, Addition Function");
//     return `Addition : ${x+y}`;  

// }



// let sum = add(100,200);

// console.log(sum)



//2. Anonymous Function : 

// 1.it is a function without a name
// 2.it is stored in a variable
// 3.It is invoked using the variable name
// Note : Javascript is dynamic type : when you store a function in a variable, the variable type is changed to function type

// Type : no return type : not return any value

// const add = function(){
//     let x = 20;
//     let y = 60;

//     console.log("Addition : ",x+y);
// }

// add();


// const add = function(x,y){

//     console.log("Addition : ",x+y);
// }

// add(30,90);


// const add = function(x,y){

//     console.log("Addition : ",x+y);
// }

// add(30,90);


// const add = function(x,y){

//     console.log(`Addition : ${x+y}`);
// }

// add(30,90);


// Type 2 : return type : return value


// const add = function(x,y){

//     return `Addition : ${x+y}`;
// }

// let sum = add(30,90);
// console.log(sum)


// Default Parameter : it is used to assign a default value to the parameter if no value is passed at the time of function call


// function add(x,y=200,z=500){

//     console.log(x+y+z); // ? 

// }

// add(12,34);


// function add(x,y=240,z=45){

//     console.log(x+y+z); // 

// }

// add(12,34);



//3. Arrow Function :
// arraw function is a shorthand way to write a function expression
// it does not have its own name
// it store in a variable
// it is invoked using the variable name
// no function keyword is used
// it uses => (arrow) syntax


// syntax :
// const functionName = (parameters) => { // block of code }


// ()=>{

// }


// const add = ()=>{
//     console.log("Hey Arrow Function!")
// }

// add();


// const add = (x,y)=>{
    
//     console.log(x+y);
// }

// add(12,34);


// const add = (x,y)=>{
    
//     return x+y;
// }

// let sum  = add(12,34);
// console.log("Sum : ",sum)


// const add = (x,y)=>{
//     let z = 100;
//     return x+y+z;
// }

// let sum  = add(12,34);
// console.log("Sum : ",sum)

// const add = (x,y=200)=>{
//     let z = 100;
//     return x+y+z;
// }

// let sum  = add(12);
// console.log("Sum : ",sum)

 

//4. IIFE : Inmediately Invoked Function Expression
// it is a function which is invoked immediately after its definition
// it is used to create a private scope
// it is used to avoid polluting the global scope

// Syntax : (function(){ // block of code })();


// (()=>{
//     console.log("Inmediately Invoked Function Expression");
// })();


// (()=>{
//     console.log("Inmediately Invoked Function Expression");
// })

// ();

// ((x,y)=>{
//     console.log(x+y);
//     console.log("Inmediately Invoked Function Expression");
// })

// (10,30);


// ((x,y=899)=>{
//     console.log(x+y);
//     console.log("Inmediately Invoked Function Expression");
// })

// (10);

// (function(x,y=899){
//     console.log(x+y);
//     console.log("Inmediately Invoked Function Expression");
// })

// (10);


// Recurrsion function : it is a process in which a function calls itself directly or indirectly but one time it call by you.

// Base Condition : it is a condition which is used to stop the recursion


// Factorial : 

// 5! = 5*4*3*2*1

// function fact(x){

//     // Base Condition

//     if(x == 1){
//         return 1;
//     }

//     // calling itself

//     return x*fact(x-1);

// }

// let result = fact(15);
// console.log(result)


//  Closure concepts : 

// - Nested function 
        // - outer function
        // - inner function (laxical scope)
// - it remember outer function variable value 

// Note : outer function return the laxical scope function



// function outerfun(){
//     let count = 0;

//     return function innerfun(){
//         console.log(count++);
//     }
// }


// let data = outerfun();
// data();
// data();
// data();
// data();
// data();


// Callback Function : 

// - a function that is pass as a argument into another function is called callback function


// function sayHey(candidate, callback){
//     console.log(`Hey ${candidate}, ${callback()}`);
// }


// function greet(){
//     return "Namshte";
// }

// let username = "Pawan";

// sayHey(username,greet)



// function sayHey(candidate, callback){
//     console.log(`Hey ${candidate}`);
//     callback();
// }


// function greet(){
//     // return "Namshte";
//     console.log("Namste")
// }

// let username = "Pawan";

// sayHey(username,greet)