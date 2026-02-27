/**
 * Video 8: Loops – for, while, for...of, for...in
 *
 * - for: classic loop with index
 * - while / do...while: condition-based
 * - for...of: iterate over values (arrays, strings, iterables)
 * - for...in: iterate over keys (object properties); use with care on arrays
 *
 * Run: node loops.js
 */

'use strict';

// ========== for ==========
console.log('=== for ===');
for (let i = 0; i < 5; i++) {
  console.log('i:', i);
}

// Loop over array by index
const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// ========== while ==========
console.log('\n=== while ===');
let count = 0;
while (count < 3) {
  console.log('count:', count);
  count++;
}

// do...while: body runs at least once
let n = 0;
do {
  console.log('do-while:', n);
  n++;
} while (n < 2);

// ========== for...of (values) ==========
console.log('\n=== for...of (values) ===');
for (const fruit of fruits) {
  console.log(fruit); // apple, banana, cherry
}

const message = 'Hi';
for (const char of message) {
  console.log(char); // H, i
}

// ========== for...in (keys) ==========
console.log('\n=== for...in (keys) ===');
const user = { name: 'Ali', age: 25, role: 'admin' };
for (const key in user) {
  console.log(key, user[key]);
}
// On arrays: keys are indices (strings "0", "1", ...)
for (const key in fruits) {
  console.log(key, typeof key); // 0 string, 1 string, ...
}
// Prefer for...of for arrays; for...in can include inherited/enumerable props

// ========== break and continue ==========
console.log('\n=== break / continue ===');
for (let i = 0; i < 6; i++) {
  if (i === 2) continue;  // skip 2
  if (i === 5) break;     // stop at 5
  console.log(i);         // 0, 1, 3, 4
}

// ========== Label (rare) ==========
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(i, j);
  }
}

// ========== Array methods as "loops" ==========
console.log('\n=== forEach ===');
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
