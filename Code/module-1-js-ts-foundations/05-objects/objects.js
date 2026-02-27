/**
 * Video 5: Objects & Reference Types
 *
 * - Objects (including arrays, functions) are reference types
 * - Stored by reference; assignment copies the reference, not the value
 * - Comparison is by reference (same object in memory?)
 *
 * Run: node objects.js
 */

'use strict';

// ========== Object literal ==========
console.log('=== Object literal ===');
const user = {
  name: 'Ali',
  age: 25,
  email: 'ali@example.com',
  greet() {
    return `Hi, I'm ${this.name}`;
  },
  getAge() {
    return this.age;
  },
};
console.log(user.greet());
console.log(user.getAge());

// ========== Arrays are objects ==========
console.log('\n=== Arrays ===');
const arr = [1, 2, 3];
console.log(typeof arr);           // "object"
console.log(Array.isArray(arr));   // true
console.log(Array.isArray(user));  // false

// ========== Reference: two variables, one object ==========
console.log('\n=== Reference semantics ===');
const original = { value: 10 };
const copy = original;   // copy points to same object
copy.value = 99;
console.log(original.value); // 99 – both see the same data

// ========== Comparison by reference ==========
console.log('\n=== Comparison ===');
console.log({ a: 1 } === { a: 1 }); // false – different objects in memory
const ref1 = { x: 1 };
const ref2 = ref1;
console.log(ref1 === ref2); // true – same reference

// ========== Property access: dot vs bracket ==========
console.log('\n=== Property access ===');
const key = 'name';
console.log(user.name);      // dot: fixed key name
console.log(user[key]);      // bracket: key from variable or expression
const dynamicKey = 'email';
console.log(user[dynamicKey]);

// Bracket notation for invalid identifiers or computed keys
user['full-name'] = 'Ali Hassan';
console.log(user['full-name']);

// ========== Iterating over keys ==========
console.log('\n=== Keys, values, entries ===');
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// ========== Shallow copy (see video 13 for deep copy) ==========
const clone = { ...user };
clone.name = 'Sara';
console.log(user.name, clone.name); // Ali  Sara
