// Declare Object

// Using object literals
let fruit = {
    name: "Manggo",
    color: "Green",
    price: 3000
};

// Using keyword (new)
let people = new Object();

people.name = "Robert Downey Jr";
people.age  = 57;
people.job  = "Actor";


// Access Property
console.log("Acess Property");

// Dot Notation
console.log("-", fruit.name); // Only one
console.log("-", fruit); // All

// Bracket Notation
console.log("-", people["name"]);

let word = "job";
console.log("-", people[word]);

console.log("");


// Add New Property
console.log("Add Property");

// Dot Notation
fruit.flavor = "Sweet";
console.log("-", fruit.flavor);

// Bracket Notation
people["gender"] = "Male";
console.log("-", people["gender"]);

console.log("");


// Delete Property
console.log("Delete Property");

// Dot Notation
delete fruit.price;
console.log("-", fruit);

// Bracket Notation
delete people["job"];
console.log("-", people);

console.log("");

// Object Method
console.log("Object Method");

let calculator = {
    name: "Addition",
    amount: function(number1, number2) {
        return number1 + number2;
    }
}
console.log("-", calculator.amount(9, 6));

let cat = {
    sound: function() {
        return "Meow";
    }
}

let dog = {
    sound: function() {
        return "Woof";
    }
}
console.log("-", cat.sound());
console.log("-", dog.sound());

const user = {
    name: "Itosuke Rin",
    age: 19,
    favoriteFood: "Pizza",
    output: function() {
        return `My name is ${this.name}. My age ${this.age}
  years old and my favorite food is 
  ${this.favoriteFood}.`;
    }
};

console.log("-", user.output());
