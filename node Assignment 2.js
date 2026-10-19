// Assignment 2: Operators, Expressions, and Input Handling
const ask = (msg, def) => (typeof prompt === "function" ? prompt(msg, def) : def);

const subtotal = Number(ask("Enter subtotal:", "100"));
const tipPercent = Number(ask("Enter tip percentage:", "15"));

const tip = (subtotal * tipPercent) / 100;
const total = subtotal + tip;

console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercent}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${total}`);
//Type (node "node Assignment 2.js") in terminal to run the code and see the output.