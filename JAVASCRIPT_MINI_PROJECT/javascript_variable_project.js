// A simple poject to undersand the concepts of JavaScript Variables
console.log("---student profile---");
var studentname = "Logesh B";
let age = 18;
let year =2;
const collegename = "Svaeetha Engineering College";
const department = "CSE(IOT)";
let isstudent = true;
console.log("Name:",studentname);
console.log("Age:",age);
console.log("year:",year);
console.log("College:", collegename);
console.log("Department:", department);
console.log("Is Student:", isstudent);
// constant (cannot change)
// var → Function Scope
// Accessible throughout the function
// Does NOT respect block { }
/*if (true) {
    var x = 10;
}
console.log(x); // ✅ 10 (accessible)
*/
// let → Block Scope
// Accessible only inside { }
// Safer and recommended
/*if (true) {
    let y = 20;
}
console.log(y); // ❌ Error: y is not defined
*/