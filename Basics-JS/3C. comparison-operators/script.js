let number = 10;

console.log("Loose Equality (==)");

console.log (
    number + " == " + 10 + " =", number == 10
);
console.log (
    number + " == " + 8 + " =", number == 8
);
console.log (
    number + " == " + '"10"' + " =", number == "10"
);
console.log("");


console.log("Strict Equality (===)");

console.log (
    number + " === " + '"10"' + " =", number === "10"
);
console.log("");


console.log("Not Equal To (!=)")

console.log (
    number + " != " + "10" + " =", number != 10
);
console.log (
    number + " != " + "8" + " =", number != 8
);
console.log (
    number + " != " + '"10"' + " =", number != "10"
);
console.log (
    number + " !== " + '"10"' + " =", number !== "10"
);
console.log("");


console.log("More Than (>)");

console.log (
    number + " > " + "10" + " =", number > 10
);
console.log (
    number + " > " + "11" + " =", number > 11
);
console.log (
    number + " > " + "8" + " =", number > 8
);
console.log("");


console.log("Less Than (<)")

console.log (
    number + " < " + "10" + " =", number < 10
);
console.log (
    number + " < " + "8" + " =", number < 8
);
console.log (
    number + " < " + "11" + " =", number < 11
);

console.log("");


console.log("Greater than or equal to (>=)");

console.log (
    number + " >= " + "10" + " =", number >= 10
);
console.log (
    number + " >= " + "8" + " =", number >= 8
);
console.log (
    number + " >= " + "11" + " =", number >= 11
);
console.log("");


console.log("Less than or equal to (<=)");

console.log (
    number + " <= " + "10" + " =", number <= 10
);
console.log (
    number + " <= " + "11" + " =", number <= 11
);
console.log (
    number + " <= " + "8" + " =", number <= 8
);
console.log("");


console.log("Ternary Operator (?)");

let food = "meal";
let animalType = food === "meal" ? "Carnivore" : "Herbivore";
console.log
(
    food + " === " + food + " ? Carnivore : Herbivore"
);
console.log(animalType);

