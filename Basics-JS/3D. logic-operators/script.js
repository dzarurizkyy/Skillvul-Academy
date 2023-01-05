let number1 = 6;
let number2 = 4;

console.log("AND Operator");

console.log(
    number1 + " === " + 6 + " && " + number2 + " === " + 4,
    number1 === 6 && number2 === 4
);
console.log(
    number1 + " === " + 6 + " && " + number2 + " < " + 4,
    number1 === 6 && number2 < 4
);
console.log(
    number1 + " < " + 6 + " && " + number2 + " === " + 4,
    number1 < 6 && number2 === 4
);
console.log(
    number1 + " < " + 6 + " && " + number2 + " < " + 4,
    number1 < 6 && number2 < 4
);
console.log("");


console.log("OR Operator");

console.log(
    number1 + " === " + 6 + " || " + number2 + " === " + 4,
    number1 === 6 || number2 === 4
);
console.log(
    number1 + " === " + 6 + " || " + number2 + " < " + 4,
    number1 === 6 || number2 < 4
);
console.log(
    number1 + " < " + 6 + " || " + number2 + " === " + 4,
    number1 < 6 || number2 === 4
);
console.log(
    number1 + " < " + 6 + " || " + number2 + " < " + 4,
    number1 < 6 || number2 < 4
);
console.log("");


console.log("NOT Operator");

console.log(
    "!" + true, !true
);
console.log(
    "!" + false, !false
);
