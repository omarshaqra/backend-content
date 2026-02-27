/**
 * Video 9: Functions Basics & Parameters
 *
 * - Function declaration (hoisted) vs function expression
 * - Parameters: default values, rest (...args), arguments object
 *
 * Run: node functions.js
 */

'use strict';

// ========== Function declaration (hoisted) ==========
console.log('=== Declaration ===');
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet('Ali'));

// Can be called before definition (hoisting)
console.log(double(4)); // 8
function double(x) {
  return x * 2;
}

// ========== Function expression ==========
console.log('\n=== Expression ===');
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5
// add is not hoisted; only the variable add is hoisted (as undefined)

// Named function expression (useful for recursion and stack traces)
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
console.log(factorial(5)); // 120

// ========== Default parameters ==========
console.log('\n=== Default parameters ===');
function createUser(name, role = 'user', active = true) {
  return { name, role, active };
}
console.log(createUser('Ali'));           // { name: 'Ali', role: 'user', active: true }
console.log(createUser('Sara', 'admin')); // { name: 'Sara', role: 'admin', active: true }
console.log(createUser('Bob', undefined, false)); // pass undefined to use default for role

// ========== Rest parameters (...args) ==========
console.log('\n=== Rest parameters ===');
function sum(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5)); // 15

function log(prefix, ...messages) {
  console.log(prefix, messages.join(' '));
}
log('[INFO]', 'Hello', 'World'); // [INFO] Hello World

// ========== arguments object (legacy; avoid in modern code) ==========
console.log('\n=== arguments (legacy) ===');
function legacySum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(legacySum(1, 2, 3)); // 6
// Note: arguments is not available in arrow functions; use rest instead.

// ========== Return value ==========
function noReturn() {
  console.log('no return');
}
console.log(noReturn()); // undefined

function earlyReturn(x) {
  if (x < 0) return;
  return x * 2;
}
console.log(earlyReturn(-1), earlyReturn(5)); // undefined 10
