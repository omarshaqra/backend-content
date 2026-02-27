/**
 * Video 6: Operators & Expressions
 *
 * - Arithmetic, comparison (== vs ===), logical, nullish coalescing, optional chaining
 *
 * Run: node operators.js
 */

'use strict';

// ========== Arithmetic ==========
console.log('=== Arithmetic ===');
console.log(10 + 3, 10 - 3, 10 * 3, 10 / 3);
console.log(10 % 3);   // remainder: 1
console.log(2 ** 3);   // exponent: 8
console.log('5' + 2);  // "52" – string concatenation when one operand is string
console.log(5 + '2');  // "52"
console.log(5 - '2');  // 3 – coercion to number

// ========== Comparison: == (loose) vs === (strict) ==========
console.log('\n=== == vs === ===');
console.log(1 == '1');   // true – coercion
console.log(1 === '1');  // false – no coercion, different types
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(0 == false);  // true
console.log(0 === false); // false
// Best practice: prefer === and !== to avoid surprises

// ========== Logical: &&, ||, ! ==========
console.log('\n=== Logical ===');
console.log(true && false);   // false
console.log(true || false);   // true
console.log(!true);           // false
// Short-circuit: returns the last evaluated value
console.log(0 && 'hello');    // 0 (falsy, so stop)
console.log(0 || 'default');  // "default"
console.log('hi' && 'ok');    // "ok"

// ========== Nullish coalescing ?? ==========
// Only null or undefined trigger the right-hand side
console.log('\n=== Nullish coalescing ?? ===');
console.log(null ?? 'default');     // "default"
console.log(undefined ?? 'default'); // "default"
console.log(0 ?? 'default');         // 0 (0 is not nullish)
console.log('' ?? 'default');       // "" (empty string is not nullish)
// Use ?? when 0 or '' are valid values and you only want to replace null/undefined

// ========== Optional chaining ?. ==========
console.log('\n=== Optional chaining ?. ===');
const obj = { a: { b: 42 }, name: 'Ali' };
console.log(obj?.a?.b);     // 42
console.log(obj?.x?.y);     // undefined (no error)
console.log(obj?.name);     // Ali

const arr = [{ id: 1 }];
console.log(arr?.[0]?.id);  // 1
console.log(arr?.[5]?.id);  // undefined

// Optional call: only call if it exists
const fn = null;
// fn();     // TypeError
fn?.();    // no error, returns undefined

// ========== Assignment operators ==========
console.log('\n=== Assignment ===');
let n = 10;
n += 5;  console.log(n); // 15
n -= 3;  console.log(n); // 12
n *= 2;  console.log(n); // 24
n /= 4;  console.log(n); // 6

// ========== Increment / Decrement ==========
let i = 0;
console.log(i++, i);   // 0 1  (post-increment: use then add)
console.log(++i, i);    // 2 2  (pre-increment: add then use)
