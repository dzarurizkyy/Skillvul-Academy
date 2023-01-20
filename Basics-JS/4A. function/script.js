// Stand-alone function
function pageTitle() {
    return "Basic Javascript";
};

// Function stored in a variable
let intro = function() {
    return "Welcome to my website";
};

// Function with parameter
function exponent(a, b) {  // Paramater
    return a**b;
};

// Variable Access
let password = "14mei1984"; // Global variable

function admin() {
    let userType = "User", userName = "Mark Zuckeberq"; // Function variable 

    console.log(`Username \t: ${userName}`);
    console.log(`Password \t: ${password}`);

    if(password === "14mei1984") {
       userType = "Admin"; // Block variable
    }

    return `Type \t\t: ${userType}`;
};


// Call Function
console.log(pageTitle());
console.log(intro());
console.log("");

console.log(admin());
console.log("");

console.log(`2 ^ 3 =`, exponent(2, 3));  // Argument
console.log(`2 % 3 =`, modulus(2, 3));   // Function Hoisting


function modulus(a, b) {
    return a%b;
};