
// Function : function block of code -> function call

// 1. Normal function

// syntax : 


function gradeCalculate(){
    // console.log("Function Called...")
    // let data = document.getElementsByClassName("input_marks")[0].value;

    let marks = parseInt(document.getElementsByClassName("input_marks")[0].value);

    if(marks <=100 && marks >=80){
        if(marks>=90){
            console.log("Grade A");
        }else{
            console.log("Grade B");
        }
    }
    else if(marks >= 60){
        if(marks>=70){
            console.log("Grade C");
        }else{
            console.log("Grade D");
        }
    }else{
        console.log("Sorry, You are faield");
    }

}