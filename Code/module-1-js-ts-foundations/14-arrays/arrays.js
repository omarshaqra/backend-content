/**
 * Video 14: Working with Arrays (map, filter, reduce)
 *
 * - map: transform each element → new array same length
 * - filter: keep elements that pass a test → new array (possibly shorter)
 * - reduce: fold array into a single value (or object/array)
 * - find, findIndex, some, every, flat, flatMap
 *
 * Run: node arrays.js
 */

'use strict';

const numbers = [1, 2, 3, 4, 5, 6];
const users = [
  { id: 1, name: 'Ali', age: 25, role: 'admin' },
  { id: 2, name: 'Sara', age: 30, role: 'user' },
  { id: 3, name: 'Bob', age: 22, role: 'user' },
];

// ========== map ==========
console.log('=== map ===');
const squared = numbers.map((n) => n * n);
console.log(squared); // [1, 4, 9, 16, 25, 36]

const names = users.map((u) => u.name);
console.log(names); // ['Ali', 'Sara', 'Bob']

const withTitle = users.map((u) => ({ ...u, title: `${u.name} (${u.role})` }));
console.log(withTitle[0].title);

// ========== filter ==========
console.log('\n=== filter ===');
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4, 6]

const adults = users.filter((u) => u.age >= 25);
console.log(adults.length); // 2

const admins = users.filter((u) => u.role === 'admin');
console.log(admins[0].name); // Ali

// ========== reduce ==========
console.log('\n=== reduce ===');
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('sum:', sum); // 21

const product = numbers.reduce((acc, n) => acc * n, 1);
console.log('product:', product); // 720

// Build object from array
const byId = users.reduce((acc, u) => {
  acc[u.id] = u;
  return acc;
}, {});
console.log(byId[2].name); // Sara

// Group by
const byRole = users.reduce((acc, u) => {
  (acc[u.role] = acc[u.role] || []).push(u);
  return acc;
}, {});
console.log(byRole.admin.length); // 1

// ========== find / findIndex ==========
console.log('\n=== find / findIndex ===');
const firstEven = numbers.find((n) => n % 2 === 0);
console.log(firstEven); // 2

const bob = users.find((u) => u.name === 'Bob');
console.log(bob?.age); // 22

const idx = numbers.findIndex((n) => n > 4);
console.log(idx); // 4

// ========== some / every ==========
console.log('\n=== some / every ===');
console.log(numbers.some((n) => n > 5));   // true
console.log(numbers.every((n) => n > 0));  // true
console.log(users.every((u) => u.age >= 18)); // true

// ========== Chaining ==========
console.log('\n=== Chaining ===');
const result = numbers
  .filter((n) => n > 2)
  .map((n) => n * 2)
  .reduce((acc, n) => acc + n, 0);
console.log(result); // 8 + 10 + 12 = 30

// ========== flat / flatMap ==========
const nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat()); // [1, 2, 3, 4, 5]
console.log([1, 2, 3].flatMap((n) => [n, n * 2])); // [1, 2, 2, 4, 3, 6]
