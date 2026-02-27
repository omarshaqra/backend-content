/**
 * Video 19: Asynchronous JavaScript – Callbacks & Event Loop
 *
 * - Sync vs async: async work is scheduled and runs later (event loop)
 * - Callback pattern: pass a function to be called when done (Node-style: error first)
 * - Callback hell and why we use Promises/async-await later
 *
 * Run: node callbacks.js
 */

'use strict';

// ========== Sync vs async execution order ==========
console.log('=== Execution order ===');
console.log('1. Start');
setTimeout(() => console.log('4. setTimeout callback'), 0);
Promise.resolve().then(() => console.log('3. Promise microtask'));
console.log('2. End');
// Output: 1, 2, 3, 4 (microtasks before next macrotask)

// ========== Node-style callback: error first ==========
console.log('\n=== Error-first callback ===');
function fetchUser(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error('Invalid id'), null);
      return;
    }
    callback(null, { id, name: `User${id}` });
  }, 100);
}

fetchUser(1, (err, user) => {
  if (err) {
    console.error('Error:', err.message);
    return;
  }
  console.log('User:', user);
});

fetchUser(-1, (err, user) => {
  if (err) {
    console.error('Error:', err.message);
    return;
  }
  console.log('User:', user);
});

// ========== Callback hell (nested callbacks) ==========
console.log('\n=== Callback hell ===');
function fetchOrder(orderId, callback) {
  setTimeout(() => callback(null, { orderId, userId: 1 }), 50);
}
function fetchUserById(userId, callback) {
  setTimeout(() => callback(null, { userId, name: 'Ali' }), 50);
}
function fetchAddress(userId, callback) {
  setTimeout(() => callback(null, { city: 'Cairo' }), 50);
}

fetchOrder(101, (err, order) => {
  if (err) return console.error(err);
  fetchUserById(order.userId, (err, user) => {
    if (err) return console.error(err);
    fetchAddress(user.userId, (err, addr) => {
      if (err) return console.error(err);
      console.log('Order', order.orderId, 'User', user.name, 'City', addr.city);
    });
  });
});

// ========== Simulated readFile with callback ==========
function readFile(path, callback) {
  setTimeout(() => {
    if (path === '') {
      callback(new Error('Path cannot be empty'), null);
      return;
    }
    callback(null, `Content of ${path}`);
  }, 80);
}

readFile('config.json', (err, data) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Data:', data);
});
