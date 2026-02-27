/**
 * Video 4: Primitive Data Types in Depth
 *
 * Primitives: string, number, bigint, boolean, undefined, null, symbol
 * - Stored by value; compared by value
 * - Immutable (e.g. string methods return new strings)
 *
 * Run: node primitives.js
 */

'use strict';

// ========== typeof for each primitive ==========
console.log('=== typeof ===');
const str = 'hello';
const num = 42;
const big = 9007199254740991n;  // n suffix = BigInt
const bool = true;
let undef;                       // declared but not assigned
const n = null;
const sym = Symbol('unique-id');

console.log(typeof str);    // "string"
console.log(typeof num);     // "number"
console.log(typeof big);     // "bigint"
console.log(typeof bool);    // "boolean"
console.log(typeof undef);   // "undefined"
console.log(typeof n);       // "object" (famous JS quirk – use === null to check)
console.log(typeof sym);     // "symbol"

// ========== Copy by value ==========
console.log('\n=== Copy by value ===');
let a = 5;
let b = a;
b = 10;
console.log('a:', a, 'b:', b); // a: 5  b: 10

let s1 = 'hello';
let s2 = s1;
s2 = 'world';
console.log('s1:', s1, 's2:', s2); // s1: hello  s2: world

// ========== Number: NaN, Infinity ==========
console.log('\n=== Number edge cases ===');
console.log(Number('abc'));        // NaN
console.log(Number('123'));        // 123 (coercion)
console.log(1 / 0);                // Infinity
console.log(-1 / 0);               // -Infinity
console.log(Number.isNaN(NaN));    // true
console.log(Number.isFinite(1/0)); // false

// Safe integer range (2^53 - 1)
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.isSafeInteger(9007199254740991)); // true

// ========== String: template literals & immutability ==========
console.log('\n=== Strings ===');
const name = 'Ali';
const greeting = `Hello, ${name}!`;  // template literal
console.log(greeting);
const upper = greeting.toUpperCase(); // returns NEW string; original unchanged
console.log(greeting, upper);

// ========== Symbol: unique identifiers ==========
console.log('\n=== Symbols ===');
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // false – every Symbol() is unique
const KEY = Symbol('private');
const obj = { [KEY]: 'secret', name: 'Ali' };
console.log(obj.name, obj[KEY]); // Ali secret

// ========== null vs undefined ==========
console.log('\n=== null vs undefined ===');
// undefined: variable not assigned, missing property, function with no return
// null: intentional "no value"
let x;
console.log(x);           // undefined
const empty = null;
console.log(empty === null);  // true
console.log(empty == undefined); // true (loose equality)
console.log(empty === undefined); // false
