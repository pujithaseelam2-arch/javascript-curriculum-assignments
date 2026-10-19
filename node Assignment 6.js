// Assignment 6: Arrays, Objects, and Core Methods
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 },
];

console.log("-- All Products (forEach) --");
products.forEach(p => console.log(`Item: ${p.name} - Price: $${p.price}`));

console.log("\n-- Filtered Products (Price < $50) --");
console.log(products.filter(p => p.price < 50));

console.log("\n-- Mapped Product Tags (map) --");
console.log(products.map(p => `${p.name.toUpperCase()} costs $${p.price}`));
//Type (node "node Assignment 6.js") in terminal to run the code and see the output.