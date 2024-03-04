// Check if a Value is a Number in JavaScript

// EXAMPLE 1 - Check if a Value is a Number using the `typeof` operator

const myVar = 5;

if (typeof myVar === 'number') {
  // 👇️ this runs
  console.log('✅ value is a number');
} else {
  console.log('⛔️ value is NOT a number');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Making sure NaN values don't meet the condition

// const myVar = 5;

// if (typeof myVar === 'number' && !Number.isNaN(myVar)) {
//   // 👇️ this runs
//   console.log('✅ value is a number');
// } else {
//   console.log('⛔️ value is NOT a number');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Value is a Number using Number.isFinite()

// const myVar = 5;

// if (Number.isFinite(myVar)) {
//   // 👇️ this runs
//   console.log('✅ value is a number');
// } else {
//   console.log('⛔️ value is NOT a number');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a Variable is a Number using `lodash`

// import _ from 'lodash';

// console.log(_.isNumber(NaN)); // 👉️ true
// console.log(_.isNumber(5)); // 👉️ true
// console.log(_.isNumber(-100)); // 👉️ true

// console.log(_.isNumber('hello')); // 👉️ false
// console.log(_.isNumber(null)); // 👉️ false
// console.log(_.isNumber([])); // 👉️ false

// const variable = 100;

// if (_.isNumber(variable)) {
//   // 👇️ this runs
//   console.log('The value is a number');
// } else {
//   console.log('The value is NOT a number');
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Don't use the `instanceof` operator to check if a value is a number

// import _ from 'lodash';

// function isNumber(value) {
//   return value instanceof Number;
// }

// console.log(isNumber(100)); // 👉️ false
// console.log(isNumber(-1000)); // 👉️ false
// console.log(isNumber(new Number(10))); // 👉️ true
// console.log(isNumber(new Number(-100))); // 👉️ true
// console.log(isNumber(null)); // 👉️ false
// console.log(isNumber('')); // 👉️ false
