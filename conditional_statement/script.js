console.log("Conditional Statements in JavaScript");
let name = "Logesh";
let marks = 60;
if(marks >= 50){
    console.log(name + " has passed the exam.");
}
else{
    console.log(name + " has failed the exam.");
}
if(marks>=90){
    console.log("Grade: A");
}
else if(marks>=75){
    console.log("Grade: B");
}
else if(marks>=50){
    console.log("Grade: C");
}
else{
    console.log("Grade: F");
}
let result;
if(marks>=50){
    result="PASS";
}
else{
    result="FAIL";
}
switch(result){
    case "PASS":
        console.log(name + " is promoted to the next class.");
        break;
    case "FAIL":
        console.log(name + " needs to reappear for the exam.");
        break;
    default:
        console.log("Invalid result.");
}
/*if – else
Used to execute code based on a condition.
else if
Used to check multiple conditions in sequence.
switch
Used to execute code based on matching cases of a value.*/