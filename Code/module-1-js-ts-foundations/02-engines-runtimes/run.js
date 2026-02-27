/**
 * Video 2: How JavaScript Runs – Engines, Runtimes & Node vs Browser
 *
 * Concepts:
 * - JS Engine (V8 in Node/Chrome): parses, compiles, executes JS
 * - Runtime: engine + APIs (e.g. Node = V8 + fs, http, buffer)
 * - Browser: V8/SpiderMonkey + DOM, fetch, window
 * - Node.js: V8 + Node APIs, no DOM/window
 *
 * Run: node run.js
 */

'use strict';

// ----- Node.js global object (not "window") -----
console.log('=== Global in Node ===');
console.log('globalThis exists:', typeof globalThis !== 'undefined');
console.log('window exists:', typeof window !== 'undefined'); // false in Node

// Node-specific globals (not in browser)
console.log('__dirname:', __dirname);   // directory of this file
console.log('__filename:', __filename); // full path of this file

// ----- Process (Node only) -----
console.log('\n=== Process (Node only) ===');
console.log('Node version:', process.version);
console.log('Platform:', process.platform);
console.log('Current working directory:', process.cwd());

// ----- What exists in Browser but NOT in Node -----
// document   → ReferenceError
// window     → undefined
// alert()    → not defined
// fetch()    → available in Node 18+ (global), but different from browser fetch in some edge cases

// ----- Event loop demo: JS is single-threaded -----
console.log('\n=== Execution order (event loop) ===');
console.log('1. Sync first');
setTimeout(() => console.log('3. Then callback (next tick of event loop)'), 0);
console.log('2. Sync second');
// Output: 1, 2, 3
