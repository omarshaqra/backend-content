/**
 * Video 13: Shallow Copy vs Deep Copy (Objects & Arrays)
 *
 * - Shallow: only top-level is copied; nested objects/arrays are still shared
 * - Deep: every level is copied; no shared references
 *
 * Run: node copy.js
 */

'use strict';

// ========== Shallow copy: spread and Object.assign ==========
console.log('=== Shallow copy ===');
const original = { a: 1, b: { c: 2 }, d: [3, 4] };

const shallowSpread = { ...original };
const shallowAssign = Object.assign({}, original);

// Top-level change: only the copy is affected
shallowSpread.a = 99;
console.log(original.a); // 1

// Nested change: original is affected! (same reference)
shallowSpread.b.c = 100;
console.log(original.b.c); // 100

shallowSpread.d.push(5);
console.log(original.d); // [3, 4, 5]

// ========== Shallow copy array ==========
const arr = [1, 2, [3, 4]];
const arrShallow = [...arr];
arrShallow[0] = 99;      // only copy
arrShallow[2][0] = 88;   // nested array shared
console.log(arr[0], arr[2][0]); // 1, 88

// ========== Deep copy: JSON.parse(JSON.stringify(...)) ==========
console.log('\n=== Deep copy (JSON) ===');
const obj2 = { a: 1, b: { c: 2 } };
const deepJson = JSON.parse(JSON.stringify(obj2));
deepJson.b.c = 999;
console.log(obj2.b.c); // 2 – unchanged

// Limitations of JSON: no functions, undefined, Symbol, Date becomes string, etc.
const withDate = { d: new Date(), n: undefined };
const jsonCopy = JSON.parse(JSON.stringify(withDate));
console.log(jsonCopy.d);   // string, not Date
console.log(jsonCopy.n);   // omitted (undefined not in JSON)

// ========== Deep copy: structuredClone (Node 17+) ==========
console.log('\n=== Deep copy (structuredClone) ===');
const obj3 = { a: 1, b: { c: 2 }, d: [3, 4] };
const deepClone = structuredClone(obj3);
deepClone.b.c = 200;
deepClone.d.push(5);
console.log(obj3.b.c, obj3.d.length); // 2, 2 – original unchanged

// structuredClone supports: Date, RegExp, Map, Set, typed arrays, but not functions or Symbol

// ========== Manual deep copy (for full control) ==========
function deepCopySimple(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepCopySimple);
  const copy = {};
  for (const key of Object.keys(obj)) {
    copy[key] = deepCopySimple(obj[key]);
  }
  return copy;
}
const manual = deepCopySimple({ x: 1, y: { z: 2 } });
manual.y.z = 99;
console.log(manual.y.z); // 99; original unchanged if you check
