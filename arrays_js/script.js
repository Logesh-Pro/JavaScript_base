console.log("Arrays in JavaScript");
let marks = [85, 90, 78, 92, 88];
console.log("Marks Array:", marks);
console.log("First Mark:", marks[0]);
let sum=0;
for(let i=0; i<marks.length; i++){
    sum += marks[i];
}
console.log("Total Marks:", sum);
let average = sum / marks.length;
console.log("Average Marks:", average);
marks.push(95);
marks[0]=75;
console.log("Updated Marks Array:", marks);
console.log("Popped Element:", marks.pop());