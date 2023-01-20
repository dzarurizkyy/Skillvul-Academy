let number = 10;

// ==
console.log(`${number} == 10`, number == 10);
console.log(`${number} == 8`, number == 8);
console.log(`${number} == "10"`, number == "10");

console.log("");

// ===
console.log(`${number} === 10`, number === 10);
console.log(`${number} === "10"`, number === "10");

console.log("");

// !=
console.log(`${number} != 8`, number != 8);
console.log(`${number} != "8"`, number != "8");
console.log(`${number} != 10`, number != 10);
console.log(`${number} != "10"`, number != "10");

console.log("");

// !==
console.log(`${number} !== 8`, number !== 8);
console.log(`${number} !== "8"`, number !== "8");
console.log(`${number} !== 10`, number !== 10);
console.log(`${number} !== "10"`, number !== "10");

console.log("");

// >
console.log(`${number} > 10`, number > 10);
console.log(`${number} > 11`, number > 11);
console.log(`${number} > 8`, number > 8);

console.log("");

// <
console.log(`${number} < 10`, number < 10);
console.log(`${number} < 8`, number < 8);
console.log(`${number} < 11`, number < 11);

console.log("");

// >=
console.log(`${number} >= 10`, number >= 10);
console.log(`${number} >= 8`, number >= 8);
console.log(`${number} >= 11`, number >= 11);

console.log("");

// <=
console.log(`${number} <= 10`, number <= 10);
console.log(`${number} <= 11`, number <= 11);
console.log(`${number} <= 8`, number <= 8);

console.log("");

// ?
let food = "meal",
    animal = food === "meal" ? "Carnivore" : "Herbivore";

console.log(`${food} === meal :`, animal);