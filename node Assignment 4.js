// Assignment 4: Loop Control Structures
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) console.log(`5 x ${i} = ${5 * i}`);

console.log("\n-- First number > 10 divisible by 6 --");
let n = 11;
while (true) {
    if (n % 6 === 0) { console.log(`Found: ${n}`); break; }
    n++;
}

// do...while that skips numbers with continue (skips odd numbers)
let k = 0;
const evens = [];
do {
    k++;
    if (k % 2 !== 0) continue;
    evens.push(k);
} while (k < 10);
console.log(`Evens: ${evens}`);
//Type (node "node Assignment 4.js") in terminal to run the code and see the output.