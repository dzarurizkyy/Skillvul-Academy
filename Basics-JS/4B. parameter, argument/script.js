// Declare Function
function squareCircumference(s) { // Parameter
    return 4*s;
};

let squareArea = function(s) { // Parameter
    return s*s;
};


// Declare Variable
let s = 5;

// Call Function
console.log("Square Circumference");
console.log(
    s + " + " + s + " + " + s + " + " + s +" = ",
    squareCircumference(5) // Argument
);

console.log("");

console.log("Square Area")
console.log(
    s + " x " + s + " = ",
    squareArea(5) // Argument
);
