
// - while, do-While, for Loop

// Loop : same pattern of code is executed multiple times until a certain condition is met

// A. Entry Controlled Loops : first check the condition then execute the code block

// 1. For Loop : used when range is known 
    //  . starting point
    //  . ending point
    //  . increment / decrement

// 2. while Loop : used when range is not known
    // . only condition is provided

// B. Exit Controlled Loops : first execute the code block then c 

// 3. do-While Loop : same as while loop but at least one execution is guaranteed
// at first execution condition is not checked



// For Loop : 

// 1 to 10 => 55 (1+2+3+4+5+6+7+8+9+10)

// let sum = 0;
// for(let i = 1; i <=10; i++){
//     sum+=i;
// }
// console.log(sum);



// for(let i = 1; i <=20; i++){
   
//     if(i%2 == 0){
//         console.log(i);
//     }
// }


//  Prime Number : 

// 1, itsef completely divisible -> only ( kisi aur number se hi hona chahiye)

// 2 factor

//  10 => 1, 2,5,10

// 2 -> 1, 2
// 3 -> 1,3
// 5 -> 1,5
// 7 -> 1,7




// for(let i = 2; i <= 20; i++){
//     let count = 0;
//     for(let j = 1; j <= i; j++){
//         if(i%j == 0){
//             count++;
//         }
//     }

//     if(count == 2){
//         console.log(i);
//     }
// }

// 10 ? 

// 5 ? 


//  while Loop : 

// syntax :

// while(condition){
//     // code
// }
            count = 5
//  13634 => digit ? 
//  13634 => sum of digit ? 

// int value =  13634/10

// let value = 13634/10;

// console.log(Math.floor(value));



// let value = 13634%10;
// console.log(value)



// let num = 1363434345;
// let count_digit = 0;

// while(num>0){
//     num = Math.floor(num/10);
//     count_digit++;
// }

// console.log(count_digit)