console.log("object in javascript");
// object creation
let student = {
    name: "Logesh",
    age: 18,
    isstudent: true,
    // nested object
    address:{
        city: "Chennai",
        state: "Tamilnadu",
        country: "India"
    },
    //nested array
    marks:{
        maths: 92,
        physics: 81,
        chemisty: 87
    }
};
// Accessing properties
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Is Student:", student.isstudent);
// Accessing nested object properties
console.log("City:", student.address.city);
console.log("State:", student.address.state);
console.log("Country:", student.address.country);
// Accessing nested array properties
console.log("Maths Marks:", student.marks.maths);
console.log("Physics Marks:", student.marks.physics);
console.log("Chemistry Marks:", student.marks.chemisty);
// full object
console.log("Student Object:", student);