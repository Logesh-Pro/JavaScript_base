let button = document.getElementById("loadbtn");
let output = document.getElementById("output");
button.addEventListener("click",feychStudent);
async function feychStudent(){
    output.innerText = "Loading Student Data...";
    let responce = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let student = await responce.json();
    output.innerText = "Name" + student.name + "\n"+
    "Email: " + student.email + "\n" +
    "City:" + student.address.citt;
}