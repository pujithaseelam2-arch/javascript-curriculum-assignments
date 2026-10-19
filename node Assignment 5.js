// Assignment 5: Function Architecture and Scope
function areaStandard(length = 5, width = 4) {
    return length * width;
}
const areaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${areaStandard()}`);
console.log(`Arrow Function Area (Custom 10x3): ${areaArrow(10, 3)}`);

// Scope demo
try {
    {
        let blockVar = "I live inside the block";
    }
    console.log(blockVar);
} catch (e) {
    console.log(`Scope Test Error: ${e.name}: ${e.message} (when accessed outside block)`);
}
//Type (node "node Assignment 5.js") in terminal to run the code and see the output.