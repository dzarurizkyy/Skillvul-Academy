// Declare Array

// Using array literal
let fruits = ['Apple', 'Strawberry', 'Cherry', 'Raspberries'];

// using keywoard new
let latinName = new Array('Malus domestica', 'Fragaria x ananassa', 'Prunus avium', 'Rubus idaeus');


// Call array

// Access single element
console.log(`Fruit Name : `, fruits[3]);
console.log(`Latin Name : `, latinName[latinName.length-1]);

console.log('');

// Access all element
console.log(fruits);
console.log(latinName);

console.log('');


// Add/Change Element

// Add Element
fruits[fruits.length] = 'Red Grape';
latinName[latinName.length] = 'Vitis vinifera';

console.log(fruits);
console.log(latinName);

console.log('');

// Change element
fruits[fruits.length-2] = 'Pomegranate';
latinName[latinName.length-2] = 'Punica granatum';

console.log(fruits);
console.log(latinName);