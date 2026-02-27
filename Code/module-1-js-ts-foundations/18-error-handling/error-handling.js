/**
 * Video 18: Error Types & Exception Handling in JS
 *
 * - throw, try/catch/finally
 * - Built-in errors: Error, TypeError, ReferenceError, SyntaxError, etc.
 * - Custom error classes, instanceof, rethrowing
 *
 * Run: node error-handling.js
 */

'use strict';

// ========== throw ==========
console.log('=== throw ===');
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}
console.log(divide(10, 2)); // 5
// divide(10, 0); // throws

// ========== try / catch / finally ==========
console.log('\n=== try / catch / finally ===');
try {
  console.log(divide(10, 2));
  console.log(divide(10, 0)); // throws
} catch (err) {
  console.error('Caught:', err.message);
} finally {
  console.log('Finally always runs (cleanup, close connection)');
}

// ========== Built-in error types ==========
console.log('\n=== Built-in errors ===');
// TypeError: wrong type
// ReferenceError: variable not defined
// SyntaxError: invalid syntax
// RangeError: value out of range
try {
  const obj = null;
  console.log(obj.foo); // TypeError
} catch (e) {
  console.log(e.name, e.message);
}

// ========== Custom error class ==========
console.log('\n=== Custom error ===');
class ValidationError extends Error {
  constructor(message, field) {
    super(message); // required
    this.name = 'ValidationError';
    this.field = field;
    Object.setPrototypeOf(this, ValidationError.prototype); // for instanceof in some environments
  }
}

function validateUser(user) {
  if (!user.email) throw new ValidationError('Email is required', 'email');
  if (!user.age || user.age < 0) throw new ValidationError('Invalid age', 'age');
  return true;
}

try {
  validateUser({ name: 'Ali' });
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(`Validation failed on "${e.field}": ${e.message}`);
  } else {
    throw e; // rethrow unknown errors
  }
}

// ========== Rethrowing ==========
function processData(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error('Parse failed:', e.message);
    throw e; // rethrow to let caller handle
  }
}
try {
  processData('invalid json');
} catch (e) {
  console.log('Caller caught:', e.name);
}

// ========== Error object properties ==========
const err = new Error('Something went wrong');
console.log('\n=== Error properties ===');
console.log(err.name);    // Error
console.log(err.message); // Something went wrong
console.log(err.stack);   // stack trace (multi-line)
