// CommonJS module: export via module.exports
// Used by: require('./math.cjs')

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const PI = 3.14159;

// Single export object
module.exports = { add, subtract, PI };

// Alternative: module.exports.add = add; etc.
