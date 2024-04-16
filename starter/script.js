'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery(obj) {
    console.log(obj);

    console.log(
      `Order received ${this.starterMenu[obj.staterIndex]} and ${
        this.mainMenu[obj.mainIndex]
      } will be delivered to ${obj.address} at ${obj.time}`
    );
  },
  orderDeliveryDefault({ staterIndex = 1, mainIndex = 1, address, time }) {
    console.log(
      `Order received ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza(firstIngredients, ...otherIngredients) {
    console.log(firstIngredients, otherIngredients);
  },
};
/*
// const [first, second] = restaurant.categories;
// console.log(first, second);

let [main, secondary, tertiary] = restaurant.categories;
console.log(main, secondary, tertiary);
[main, secondary, tertiary] = [secondary, main, secondary];

console.log(main, secondary, tertiary);

//Receive 2 values from a function.
let [stater, mainCourse] = restaurant.order(2, 0);
console.log(stater, mainCourse);
//nested array
let arrs = [3, 2, [3, 23, 22], 7, 79];

let [first, second, [f, , third], , last] = arrs;

console.log(first, second, f, third, last);
*/

// default values
// let [p, r, q = 'hell0'] = [2, 3];
// console.log(p, q, r);

//Destructuring Objects.

// const { nam, openingHours, categories } = restaurant;

// console.log(nam, openingHours, categories);

// //Default Values
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

//Default Values
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

//Mutating Objects
// let a = 11;
// let b = 12;
// let obj = { a: 3, b: 5, c: 44 };
// console.log(obj);
// obj = { a, b };

// console.log(obj);
// ({ a, b } = obj);

// console.log(a, b);

//Nested Objects .
// console.log(openingHours);
// const { mon: open, close } = openingHours; // destructuring nested objects.
// console.log(open, close);

//Destructuring using functions.
// restaurant.orderDelivery({
//   staterIndex: '2',
//   mainIndex: '1',
//   time: '22:30',
//   address: 'lal bazar',
// });

// setting first Default values for some parameters such as time, mainIndex and staterIndex
// restaurant.orderDeliveryDefault({
//   time: '22:00',
//   address: 'Umer colony',
// });

// Spread Operator(...);
// used to unpack or extract elements from an array/objects
/*
let arr = [2, 3, 23, 23, 12, 9];
let arr3 = [2, 3, 23, 23, 12, 9];
let arr2 = [2, 3, 23, 23, 12, 889];
let r = [...arr, ...arr2, 34, 288, 99, ...arr3];
console.log(r);

let Personal = {
  name: 'adnan shakeel',
  address: 'lal bazr',
  fathersname: 'shakeel shah',
};
let otherDetails = {
  age: 22,
  occupation: 'student',
  height: 5.6,
};
let finalObj = { ...Personal, ...otherDetails };
console.log(finalObj);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const newRestaurant = { ...restaurant, founder: 'ehsaan', foundedIn: 2024 };
newRestaurant.name = 'HelloOne';
console.log(newRestaurant);
console.log(restaurant);

//Rest Operator
// used to collect the elements of an array mostly in function parameters.
//Arrays
const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);
//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//functions
const add = function (...arr) {
  //using rest operator to catch the arguments in parameters
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
  }
  return sum;
};

const arr = [2, 3.3, 0.333, 3323, 22];
console.log('sum = ');
console.log(add(...arr)); //using spread operator to pass an array

restaurant.orderPizza('mushrooms', 'onion', 'bread', 'tomato');
restaurant.orderPizza('mushroom');

*/
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}
for (const [i, el] of menu.entries()) {
  //console.log(`${item[0] + 1} : ${item[1]}`); //old school way.
  console.log(`${i + 1} : ${el}`);
}
// console.log([...menu.entries()]);
*/

// Enhanced Object literals.  ES6(2015)
// Optional Chaining
/*
console.log(restaurant.openingHours?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  const close = restaurant.openingHours[day]?.close ?? 'Closed';
  console.log(`${day} we are available from ${open} upto ${close}`);
}
*/
/*
// Optional chaining in functions
console.log(restaurant.order?.(0, 2) ?? 'not declared a function');
console.log(restaurant.orders?.(0, 2) ?? 'not declared a function'); //handling an error here using optional chaining and nullish coalescing operator.
*/
//Optional chaining in Arrays

// const checkArr = [
//   {
//     name: 'alice',
//     email: 'alice@gmail.com',
//   },
// ];
// console.log(checkArr[0]?.name);
// console.log(checkArr[1]?.name ?? 'not exists');

// Object.keys

// const Arr = {
//   name: 'alice',
//   email: 'alice@gmail.com',
// };

// console.log(Object.keys(Arr));
// console.log(Object.values(Arr));
// console.log(Object.entries(Arr));
// we can also use loop to get the values from above predefined functions

//String Methods.
const arline = 'Emirates';
console.log(arline.slice(0, -3));

const checkMiddleSeat = seat => {
  const ls = seat.slice(-1);
  ls === 'B' || ls === 'E'
    ? console.log(`You got the Middle Seat`)
    : console.log(`You were Unlucky`);
};
checkMiddleSeat('11B');
checkMiddleSeat('64E');
checkMiddleSeat('33C');
const str = 'door step back from the new door my white door';
console.log(str.replaceAll('door', 'soon'));
///string methods are Case-sensitive

console.log(str.replace(/door/g, 'store'));

const [firstName, middleName, lastName] = 'Ehsaan Fayaz Shah'.split(' ');
console.log(firstName, middleName, lastName);

const newName = ['Mr.', firstName, middleName, lastName, 22, true].join('-');
console.log(newName);

const capitalizeName = name => {
  let newName = [];
  const names = name.split(' ');

  for (const n of names) {
    // newName.push(n[0].toUpperCase() + n.slice(1));1st way of uppercasing the first letter of every word in a string.
    newName.push(n.replace(n[0], n[0].toUpperCase())); //2nd way of doing the same thing.
  }
  return newName.join(' ');
};

console.log(capitalizeName('ehsaan fayaz shah'));
///Padding.

let mystr = 'goal is achieved';
console.log(mystr.padStart(22, '=').padEnd(42, '+')); //default parameter is space('')

const maskCreditCard = num => {
  let strNum = num + '';
  return strNum.slice(-4).padStart(strNum.length, '*');
};
console.log(maskCreditCard(1232323123131312));
console.log(maskCreditCard(12323231231313127));
console.log(maskCreditCard(12323231231313124));

//Reapeat
const message = 'from today! Here will be bad Weather, so get ready';
console.log(message.repeat(4));

const planesInLine = n => {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(13);
planesInLine(4);
planesInLine(31);
