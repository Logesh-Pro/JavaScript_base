let repara = document.getElementById('input');
let button = document.getElementById('check');
let input = document.getElementById('int');
function checkresult(){
    if(Number(input.value)>=50){
        repara.innerText = "you are pass";
    }
    else{
        repara.innerText = "you are fail";
    }
}
button.addEventListener('click',checkresult);    