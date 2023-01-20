let number1 = 6, 
    number2 = 4;

// &&
console.log(`${number1} == 6 && ${number2} == 4`, number1 == 6 && number2 == 4);
console.log(`${number1} == 6 && ${number2} < 4`, number1 == 6 && number2 < 4);
console.log(`${number1} < 6 && ${number2} == 4`, number1 < 6 && number2 == 4);
console.log(`${number1} < 6 && ${number2} < 4`, number1 < 6 && number2 < 4);

console.log("");

// ||
console.log(`${number1} == 6 || ${number2} == 4`, number1 == 6 || number2 == 4);
console.log(`${number1} == 6 || ${number2} < 4`, number1 == 6 || number2 < 4);
console.log(`${number1} < 6 || ${number2} == 4`, number1 < 6 || number2 == 4);
console.log(`${number1} < 6 || ${number2} < 4`, number1 < 6 || number2 < 4);

console.log("");

// !
console.log(`!true`, !true);
console.log(`!false`, !false);