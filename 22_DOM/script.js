
// function show(){
// let heading = document.getElementById("heading");

// // heading.innerHTML = `<i>Hey, How are you?</i>`
// heading.innerText = `<i>Hey, How are you?</i>`

// }


// function show(){
// // let heading = document.getElementsByClassName("heading")[0];
// let heading = document.getElementsByClassName("heading")[1];

// heading.innerHTML = `<i>Hey, How are you?</i>`
// // heading.innerText = `<i>Hey, How are you?</i>`

// }


// function show(){
// // let heading = document.getElementsByClassName("heading")[0];
// // let heading = document.getElementsByClassName("heading")[1];
// let heading = document.getElementsByTagName("h1")[0];

// heading.innerHTML = `<i>Hey, How are you?</i>`
// // heading.innerText = `<i>Hey, How are you?</i>`

// }

// function show(){
// // let heading = document.getElementsByClassName("heading")[0];
// // let heading = document.getElementsByClassName("heading")[1];
// // let heading = document.getElementsByTagName("h1")[0];
// // let heading = document.querySelector("h1");
// // let heading = document.querySelector("#h1-heading");
// let heading = document.querySelector(".heading");

// heading.innerHTML = `<i>Hey, How are you?</i>`
// // heading.innerText = `<i>Hey, How are you?</i>`

// }
// function show(){
// // let heading = document.getElementsByClassName("heading")[0];
// // let heading = document.getElementsByClassName("heading")[1];
// // let heading = document.getElementsByTagName("h1")[0];
// // let heading = document.querySelector("h1");
// // let heading = document.querySelector("#h1-heading");
// // let heading = document.querySelectorAll(".heading")[0];
// // let heading = document.querySelectorAll(".heading")[1];
// // let heading = document.querySelectorAll("#h1-heading")[1]; // not work at id 
// let heading = document.querySelectorAll("h1")[1];



// heading.innerHTML = `<i>Hey, How are you?</i>`
// // heading.innerText = `<i>Hey, How are you?</i>`

// }


// Normal function : 

// function add(x,y){
// // console.log(x+y);

// return x+y;

// }

// let result = add(10,20);

// console.log(result);



// arror function : 


// syntax :  ()=>{}
// arrow function -> variable k andr assign krte ho 

// let add = ()=>{

// }

// // add variable is behave like function

// console.log(typeof add);

// let add = (x,y)=>{
//     console.log(x+y);
// }

// add(20,40);


// second class 

let add = ()=>{

    let paraData = document.getElementById("para-first");

    paraData.setAttribute("class","newpara");


}


let remove = ()=>{
     let paraData = document.getElementById("para-first");
     paraData.removeAttribute("class")
}


let togglebtn = ()=>{
    let paraData = document.getElementById("para-first");

     paraData.classList.toggle("para");
}