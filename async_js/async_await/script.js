function fetchStudentData(){
    return new Promise(function (resolve){
        setTimeout(function(){
            resolve("Student data received");
        },2000);
    });    
}
async function showData(){
    let result = await fetchStudentData();
    console.log(result);
}
showData();