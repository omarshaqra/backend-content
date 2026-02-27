/**
 * Video 10: Arrow Functions & Higher-Order Functions
 *
 * - Arrow: (params) => expression or { body }, no own this, no arguments
 * - Higher-order: functions that take or return functions (map, filter, reduce, etc.)
 *
 * Run: node arrow-functions.js
 */

'use strict';

// ========== Arrow function syntax ==========
console.log('=== Arrow basics ===');
const double = (x) => x * 2;
const add = (a, b) => a + b;
const greet = () => 'Hello';
const oneParam = x => x + 1;  // parentheses optional for single param

console.log(double(5), add(1, 2), greet(), oneParam(3));

// Multi-line: use block and explicit return
const max = (a, b) => {
  if (a > b) return a;
  return b;
};
console.log(max(10, 20));

// Return object literal: wrap in () so {} is not parsed as block
const makePoint = (x, y) => ({ x, y });
console.log(makePoint(1, 2)); // { x: 1, y: 2 }

// ========== Higher-order: array methods ==========
console.log('\n=== map, filter, reduce ===');
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map((n) => n * n);
console.log('map:', squared); // [1, 4, 9, 16, 25]

const evens = numbers.filter((n) => n % 2 === 0);
console.log('filter:', evens); // [2, 4]

const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('reduce sum:', sum); // 15

const product = numbers.reduce((acc, n) => acc * n, 1);
console.log('reduce product:', product); // 120

// Chaining
const result = numbers
  .filter((n) => n > 2)
  .map((n) => n * 2)
  .reduce((acc, n) => acc + n, 0);
console.log('chain:', result); // 14 + 16 = 30 (4*2 + 5*2)

// ========== Functions that return functions ==========
console.log('\n=== Return functions ===');
function multiplier(factor) {
  return (n) => n * factor;
}
const triple = multiplier(3);
const timesTen = multiplier(10);
console.log(triple(4), timesTen(4)); // 12, 40

function prefix(prefixStr) {
  return (msg) => `${prefixStr} ${msg}`;
}
const logError = prefix('[ERROR]');
const logInfo = prefix('[INFO]');
console.log(logError('Something failed'));
console.log(logInfo('Started'));

// ========== Functions that take functions ==========
function repeat(n, fn) {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
}
repeat(3, (i) => console.log('Iteration', i));

// ========== Arrow vs regular: this (preview for video 16) ==========
const obj = {
  name: 'Obj',
  regular: function () {
    console.log('regular this:', this?.name);
  },
  arrow: () => {
    console.log('arrow this:', this?.name); // arrow doesn't have own this
  },
};
obj.regular(); // Obj
obj.arrow();   // undefined (in strict mode) or global
