console.log("Functions in javascript");
// normal function
function add(a,b) {
    let sum = a + b;
    return sum;
}
// function with return value
function multiply(a,b) {
    let mul = a * b;
    return mul;
}
// function without return value
function greet(name) {
    console.log("Hello, " + name + "!");
}
//arrow function
const subtract = (a,b) => {
    return a - b;
}
// calling functions
let result1 = add(5, 3);
console.log("Addition: " + result1);
let result2 = multiply(4, 6);
console.log("Multiplication: " + result2);
greet("Logesh");
let result3 = subtract(10, 7);
console.log("Subtraction: " + result3);
