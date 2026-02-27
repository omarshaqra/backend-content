/**
 * Video 3: Variables & use strict – var, let, const
 *
 * Key ideas:
 * - var: function-scoped, hoisted, can be re-declared (avoid in modern code)
 * - let: block-scoped, not hoisted (TDZ), cannot re-declare in same scope
 * - const: block-scoped, must be assigned once; object/array contents can change
 *
 * Run: node variables.js
 */

'use strict';

// ========== var ==========
console.log('=== var (legacy) ===');
var score = 10;
var score = 20; // Re-declaration allowed – can cause bugs
console.log('score:', score);

function demoVar() {
  console.log(innerVar); // undefined (hoisted but not yet assigned)
  var innerVar = 5;
  console.log(innerVar); // 5
}
demoVar();
// console.log(innerVar); // ReferenceError – function-scoped

// ========== let ==========
console.log('\n=== let ===');
let count = 0;
count = 1;       // Reassignment OK
// let count = 2; // SyntaxError: Identifier 'count' has already been declared

for (let i = 0; i < 2; i++) {
  console.log('loop i:', i); // i is only visible inside the loop
}
// console.log(i); // ReferenceError – block-scoped

// ========== const ==========
console.log('\n=== const ===');
const PI = 3.14159;
// PI = 3.15; // TypeError: Assignment to constant variable

const user = { name: 'Ali', age: 25 };
user.name = 'Sara';  // OK – we're mutating the object, not reassigning the variable
user.age = 26;       // OK
// user = {};        // TypeError – cannot reassign the variable

const numbers = [1, 2, 3];
numbers.push(4);     // OK – array is mutable
// numbers = [1,2];  // TypeError

// ========== Block scope: let/const vs var ==========
console.log('\n=== Block scope ===');
{
  let blockOnly = 'let: inside block';
  const alsoBlockOnly = 'const: inside block';
  var leaksOut = 'var: leaks out of block';
}
// console.log(blockOnly);   // ReferenceError
// console.log(alsoBlockOnly); // ReferenceError
console.log('Outside block:', leaksOut); // var is visible here

// ========== Best practice ==========
// Prefer: const by default, let when you need to reassign, avoid var.
