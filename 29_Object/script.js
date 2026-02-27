

// Object 

// it is collection of proprties and behaviours
// it store data in the form of key-value pairs


// Syntax : 

// let obj = {}  // Empty Obj

// console.log(typeof obj)

// object k ander jo key hota hai o string formate me nhi hota

// JSON formate me jab ham property likhte hai to key string fromate me hota hai.

// let person = {
//     username : "Pawan Maurya",
//     age:24,
//     salary : 999
// }


// console.log(person);

// const username = "Pawan maurya";

// username = "Manish";

// console.log(username);



// const person = {
//     username : "Pawan Maurya",
//     age:24,
//     salary : 999
// }

// // update object
// person.username = "Manish Mishra";

// console.log(person);
// console.log(person.age);
// console.log(person["salary"]);

// // Insert key value in object

// person.bank = "ICICI Back";

// console.log(person);

// // Delete Key from object

// delete person.salary;

// console.log(person);


// const person = {
//     username : "Pawan Maurya",
//     age:24,
//     salary : 999,

//     greet: function(){
//         console.log(this);
//         console.log(`Hey ${this.username}, Your age is ${this.age}`);
//     }
// }

// person.greet();

// Array inside object

// const person = {
//     username : "Pawan Maurya",
//     age:24,
//     salary : 999,
//     student : ["Viraj","Rohit","Mital","Hepil"],

//     greet: function(){
//         console.log(this);
//         console.log(`Hey ${this.username}, Your age is ${this.age}`);
//     }
// }

// person.greet();

// console.log(person.student[2]);


//  Nested Object : 


const person = {
    username : "Pawan Maurya",
    age:24,
    salary : 999,
    student : ["Viraj","Rohit","Mital","Hepil"],

    greet: function(){
        console.log(this);
        console.log(`Hey ${this.username}, Your age is ${this.age}`);
    },

    Vehicle:{
        car:{
            car1:"BMW",
            car2:"Mercedes",
            car3:"Mahendra",
            car4:"TATA Nano"
        }
    }
}

// person.greet();

// console.log(person.student[2]);

console.log(person.Vehicle.car["car3"]);