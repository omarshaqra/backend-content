/**
 * Video 12: Hoisting Deep Dive
 *
 * - Hoisting: declarations are moved to the top of their scope (conceptually)
 * - Function declarations: entire function is hoisted → can call before definition
 * - var: declaration hoisted, assignment stays → variable exists but is undefined
 * - let/const: hoisted but in "Temporal Dead Zone" until declaration line
 *
 * Run: node hoisting.js
 */

'use strict';

// ========== Function declaration: fully hoisted ==========
console.log('=== Function declaration ===');
console.log(sayHello('Ali')); // "Hello, Ali"
function sayHello(name) {
  return `Hello, ${name}`;
}

// ========== var: declaration hoisted, value not ==========
console.log('\n=== var hoisting ===');
console.log(score); // undefined (not ReferenceError)
var score = 95;
console.log(score); // 95

// Equivalent to:
// var score;
// console.log(score);
// score = 95;

// ========== let/const: Temporal Dead Zone (TDZ) ==========
console.log('\n=== let/const and TDZ ===');
// console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;
console.log(age);

// TDZ ends at the declaration line
function tdzDemo() {
  // console.log(value); // ReferenceError
  let value = 42;
  console.log(value); // 42
}
tdzDemo();

// ========== Function expression: variable hoisted, not the function ==========
console.log('\n=== Function expression ===');
// greetExpr(); // TypeError: greetExpr is not a function (it's undefined at this point)
var greetExpr = function () {
  return 'hello';
};
console.log(greetExpr()); // hello

// With let: greetExpr is in TDZ until the line above
// let greetExpr = function() { ... };
// greetExpr(); // ReferenceError if called before

// ========== Order of precedence ==========
// If both function and var exist with same name, function wins (in hoisting)
console.log(typeof myFunc); // "function"
function myFunc() {}
var myFunc = 10;
console.log(myFunc); // 10 (assignment overwrites)

// ========== Best practices ==========
// 1. Use let/const and declare at top of scope
// 2. Prefer function declarations for named functions (clearer, hoisted)
// 3. Use function expressions (or arrows) when assigning to variables
// 4. Avoid relying on var hoisting
