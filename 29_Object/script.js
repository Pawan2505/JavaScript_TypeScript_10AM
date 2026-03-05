

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


// const person = {
//     username : "Pawan Maurya",
//     age:24,
//     salary : 999,
//     student : ["Viraj","Rohit","Mital","Hepil"],

//     greet: function(){
//         console.log(this);
//         console.log(`Hey ${this.username}, Your age is ${this.age}`);
//     },

//     Vehicle:{
//         car:{
//             car1:"BMW",
//             car2:"Mercedes",
//             car3:"Mahendra",
//             car4:"TATA Nano"
//         }
//     }
// }

// // person.greet();

// // console.log(person.student[2]);

// console.log(person.Vehicle.car["car3"]);


// Function cunstructor

// function person(username, age){
//     this.username = username;
//     this.age = age;
// }

// let p1 = new person("Pawan",22);
// let p2 = new person("Manish",23);
// let p3 = new person("Pankaj",228);
// let p4 = new person("Vivek",26);

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);


// const person = {
//     username : "Pawan Maurya",
//     age:24,
//     salary : 999,
//     student : ["Viraj","Rohit","Mital","Hepil"],
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));


// destructure, spread, rest operator


// copy array element into another array
// copy object value into another object

// what is diffrence between shalow copy and deep copy in javascript.


// shalow copy : always copy refrence. not value

// let arr1 = [12,34,57,56,78];

// let arr2 = arr1;

// arr2[1] = 100;

// console.log(arr2);
// console.log(arr1);


// Deep Copy : Only copy value not reference


// let arr1 = [12,34,57,56,78];

// let arr2 = JSON.parse(JSON.stringify(arr1));

// arr2[1] = 100;

// console.log(arr2);
// console.log(arr1);


// Function constructor : 

// - it is used to create multiple object with same properties and behaviours.
// - it is a template for creating objects.
// - it is a special type of function that is used to create objects.
// - it is a blueprint for creating objects.


// function Person(username, age){
//     this.username = username;
//     this.age = age;
// }

// let p1 = new Person("Pawan",22);
// let p2 = new Person("Manish",23);
// let p3 = new Person("Pankaj",228);
// let p4 = new Person("Vivek",26);

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);



// Object built-in method :

// Object.keys() : it is used to get all the keys of an object in the form of an array.
// Object.values() : it is used to get all the values of an object in the form of an array.
// Object.entries() : it is used to get all the key-value pairs of an object in the form of an array of arrays.
// Object.assign() : it is used to copy the values of all the enumerable own properties from one or more source objects to a target object. It will return the target object.


// ex :

// In Object : Deep copy in object

// let obj1 = {
//     name : "Pawan",
//     age : 24,
//     salary : 999
// }

// let obj2 = {
//     city : "Lucknow",
//     country : "India"
// }

// let obj3 = Object.assign({},obj2);

// console.log(obj3);

// obj2.marks = 90;

// console.log("After update")
// console.log(obj3);

// console.log(obj2);



// Object.freeze() : it is used to freeze an object. It will prevent the modification of the object. It will not allow to add, delete or modify the properties of the object.


// let obj1 = {
//     name : "Pawan",
//     age : 24,
//     salary : 999
// }

// Object.freeze(obj1);

// obj1.name = "Manish";

// delete obj1.age;

// console.log(obj1);


// Object.seal() : it is used to seal an object. It will prevent the addition of new properties to the object. It will not allow to add new properties and delete property but it will allow to modify the existing properties of the object.

// let obj1 = {
//     name : "Pawan",
//     age : 24,
//     salary : 999
// }

// Object.seal(obj1);

// obj1.name = "Manish";
// obj1.marks = 90;

// delete obj1.age;

// console.log(obj1);


// Object.preventExtensions() : it is used to prevent the extension of an object. It will prevent the addition of new properties to the object. It will not allow to add new properties but it will allow to modify and delete the existing properties of the object.
// Object.isFrozen() : it is used to check whether an object is frozen or not. It will return true if the object is frozen, otherwise it will return false.
// Object.isSealed() : it is used to check whether an object is sealed or not. It will return true if the object is sealed, otherwise it will return false.
// Object.isExtensible() : it is used to check whether an object is extensible or not. It will return true if the object is extensible, otherwise it will return false.
// Object.getOwnPropertyDescriptor() : it is used to get the property descriptor of a property of an object. It will return an object that contains the property descriptor of the property.
// Object.getOwnPropertyNames() : it is used to get all the property names of an object in the form of an array.
// Object.getOwnPropertySymbols() : it is used to get all the property symbols of an object in the form of an array.
// Object.getOwnPropertyDescriptors() : it is used to get the property descriptors of all the properties of an object. It will return an object that contains the property descriptors of all the properties of the object.
// Object.getPrototypeOf() : it is used to get the prototype of an object. It will return the prototype of the object.
// Object.setPrototypeOf() : it is used to set the prototype of an object. It will set the prototype of the object to the specified prototype.
// Object.create() : it is used to create a new object with the specified prototype and properties. It will return a new object that has the specified prototype and properties.