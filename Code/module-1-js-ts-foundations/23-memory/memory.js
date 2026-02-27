/**
 * Video 23: Memory Management, Garbage Collection & Performance Basics
 *
 * - No manual free: GC reclaims unreachable objects
 * - Memory leaks: lingering references (e.g. global cache that never clears)
 * - process.memoryUsage() in Node; avoid large intermediates
 *
 * Run: node memory.js
 */

'use strict';

// ========== No manual free ==========
console.log('=== GC ===');
let big = { data: new Array(1000000).fill('x') };
big = null; // previous object is now unreachable → can be garbage-collected

// ========== Memory leak example: unbounded cache ==========
console.log('=== Leak: unbounded cache ===');
const cache = [];
function addToCache(obj) {
  cache.push(obj); // never removed – grows forever
}
// Better: use Map with max size, or WeakMap so keys can be GC'd when no longer used

// WeakMap: keys are weakly held; if nothing else references the key, it can be collected
const weak = new WeakMap();
const keyObj = {};
weak.set(keyObj, 'secret');
console.log(weak.get(keyObj)); // secret
// When keyObj goes out of scope and nothing else references it, entry can be removed

// ========== process.memoryUsage() (Node) ==========
console.log('\n=== Memory usage ===');
const used = process.memoryUsage();
console.log('RSS (resident set):', Math.round(used.rss / 1024 / 1024), 'MB');
console.log('Heap total:', Math.round(used.heapTotal / 1024 / 1024), 'MB');
console.log('Heap used:', Math.round(used.heapUsed / 1024 / 1024), 'MB');
console.log('External:', Math.round(used.external / 1024), 'KB');

// ========== Avoid large intermediate arrays ==========
// Bad: huge array in memory
// const doubled = bigArray.map(x => x * 2);
// Good for streams: use iterators, generators, or process in chunks

function* generateNumbers(limit) {
  for (let i = 0; i < limit; i++) {
    yield i;
  }
}
let sum = 0;
for (const n of generateNumbers(1000)) {
  sum += n;
}
console.log('Sum:', sum);

// ========== Detach references to help GC ==========
let largeData = { data: new Array(1000).fill(0) };
function processAndRelease() {
  // use largeData...
  largeData = null; // allow GC to reclaim when function ends
}
