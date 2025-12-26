let studentpromise = new Promise(function (resolve, reject){
    let dataLoaded = false; //or true
    setTimeout(function(){
        if(dataLoaded){
            resolve("Student data fetched successfully");
        }
        else{
            reject("Error fetching student data");
        }
    },2000);
});
studentpromise 
    .then(function(message){
    console.log(message);
    })
    .catch(function (error){
    console.log(error);
    });