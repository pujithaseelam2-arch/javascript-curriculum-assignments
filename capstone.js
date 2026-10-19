// Capstone: Interactive Product Inventory & Analytics Dashboard

const ask = (msg, def) => (typeof prompt === "function" ? prompt(msg, def) : def);

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
];

// 1. Data & input initialization
console.log("--- Initializing Inventory System ---");
const newName = ask("Enter product name:", "Monitor");
const newPrice = Number(ask("Enter product price:", "150"));

// 3. Loops & flow control: handle bad/missing input
if (!newName || Number.isNaN(newPrice) || newPrice <= 0) {
    console.log("Invalid input, product not added.");
} else {
    inventory.push({ name: newName, price: newPrice });
    console.log(`[Prompt executed: User adds "${newName}" at "$${newPrice}"]`);
}

// 2. Control flow: category badges
function categorize(price) {
    switch (true) {
        case price >= 500: return "Premium";
        case price >= 100: return "Standard";
        default: return "Budget";
    }
}

console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item =>
    console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${categorize(item.price)}`));

// 4. Functions & scope
function totalValue(items) {
    return items.reduce((sum, i) => sum + i.price, 0);
}
const applyDiscount = (price, discount = 0, tax = 0) =>
    price * (1 - discount) * (1 + tax);

// 5. Array methods
console.log("\n--- Financial Analytics ---");
console.log(`Total Inventory Value: $${totalValue(inventory)}`);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(
    inventory.filter(i => i.price < 200).map(i => i.name))}`);
console.log(`Formatted Report List: ${JSON.stringify(
    inventory.map(i => `${i.name.toUpperCase()}: $${i.price}`))}`);
//Type (node capstone.js) in terminal to run the code and see the output.