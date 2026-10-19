// Assignment 3: Conditional Logic Implementation
const score = 85;

let band; // if...else
if (score >= 90) band = "A";
else if (score >= 80) band = "B";
else if (score >= 70) band = "C";
else if (score >= 60) band = "D";
else band = "F";

let grade; // switch
switch (band) {
    case "A": grade = "A"; break;
    case "B": grade = "B"; break;
    case "C": grade = "C"; break;
    case "D": grade = "D"; break;
    default: grade = "F";
}

const status = score >= 60 ? "Passed" : "Failed"; // ternary

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);
//Type (node "node Assignment 3.js") in terminal to run the code and see the output.