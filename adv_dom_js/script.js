let marks = document.querySelector("#marks");
let button = document.querySelector("#checkBtn");
let resultpara = document.querySelector("#result");
button.addEventListener("click", function(){
    let mark = Number(marks.value);
    if(marks.value === ""){
        resultpara.innerText = "Please enter your marks.";
        resultpara.className = "error";
        return;
    }
    if(mark>=50){
        resultpara.innerText = "PASS ✅";
        resultpara.className = "pass";
    }
    else {
        resultpara.innerText = "FAIL ❌";
        resultpara.className = "fail";
    }
})