// Declare Object

// Using object literal
let fruit = {
    name: 'Manggo',
    color: 'green',
    price: 5000
};

// Using keyword new
let user = new Object();

user.name = 'Mark Zuckeberq';
user.age  = 38;
user.job  = 'CEO Facebook';


// Call Object

// Dot Notation
console.log(user.name); 

// Bracket Notation
console.log(fruit['name']);

console.log('');
console.log(fruit);
console.log(user);
console.log('');


// Add Property

// Dot Notation
user.gender = 'Male';
console.log(user);

// Bracket Notation
fruit['quantity'] = 20;
console.log(fruit);

console.log('');


// Delete Properrty

// Dot Notation
delete user.age;
console.log(user);

// Bracket Notation
delete fruit['price'];
console.log(fruit);

console.log('');


// Object Method
let cat = {
    sound: function() {
        return 'Meow';
    }
};

let dog = {
    sound: function() {
        return 'Woof';
    }
};

console.log(`Cat Sound :`, cat.sound());
console.log(`Dog Sound :`, dog.sound());

console.log('');

user['text'] = function() {
    // Literal template
    return `Hello, my name is ${this.name}, i am 38 years old and currently the ${this.job}.`;
};

// Stand-alone function
function callA() {
    return user.text();    
}

// function stored in a variable
let callB = function() {
    return user.text();
}

// Arrow function
let callC = () => user.text();

console.log(callA());
console.log(callB());
console.log(callC());