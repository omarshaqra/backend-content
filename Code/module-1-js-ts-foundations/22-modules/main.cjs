/**
 * Video 22: Modules in JS – CommonJS vs ES Modules
 *
 * - CommonJS: require() / module.exports (Node default for .cjs)
 * - ESM: import / export (use .mjs or "type": "module")
 *
 * Run CommonJS: node main.cjs
 * Run ESM:      node main.mjs
 */

// ----- This file: main.cjs (CommonJS) -----
// Run: node main.cjs

const { add, PI } = require('./math.cjs');
console.log('CommonJS:', add(2, 3), PI);

// require is synchronous; module is cached after first load
const mathAgain = require('./math.cjs');
console.log(mathAgain.add(1, 2)); // 3
