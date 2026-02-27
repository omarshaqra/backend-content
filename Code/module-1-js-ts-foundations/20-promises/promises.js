/**
 * Video 20: Promises – Chaining, Error Handling
 *
 * - Promise: represents a value (or error) that will be available later
 * - .then(onFulfilled), .catch(onRejected), .finally()
 * - Chaining, Promise.all, Promise.race, Promise.allSettled
 *
 * Run: node promises.js
 */

'use strict';

// ========== Creating a Promise ==========
console.log('=== Creating Promise ===');
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 100);
});
p.then((value) => console.log('Resolved:', value));

// ========== Chaining ==========
console.log('\n=== Chaining ===');
Promise.resolve(1)
  .then((x) => {
    console.log('Step 1:', x);
    return x + 1;
  })
  .then((x) => {
    console.log('Step 2:', x);
    return x * 2;
  })
  .then((x) => console.log('Final:', x));

// ========== Error handling with .catch ==========
console.log('\n=== catch ===');
Promise.reject(new Error('Something failed'))
  .then((x) => console.log(x))
  .catch((err) => console.error('Caught:', err.message));

// catch returns a resolved promise unless you rethrow
Promise.reject(new Error('Fail'))
  .catch((err) => {
    console.error(err.message);
    return 'recovered';
  })
  .then((v) => console.log('After catch:', v)); // recovered

// ========== Practical: fetchUser with Promise ==========
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error('Invalid id'));
        return;
      }
      resolve({ id, name: `User${id}` });
    }, 50);
  });
}

fetchUser(1)
  .then((user) => console.log('User:', user))
  .catch((err) => console.error(err.message));

// ========== Promise.all: wait for all ==========
console.log('\n=== Promise.all ===');
Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)])
  .then((users) => console.log('All users:', users))
  .catch((err) => console.error(err.message));

// If one rejects, all fails
Promise.all([fetchUser(1), fetchUser(-1)])
  .then((users) => console.log(users))
  .catch((err) => console.error('One failed:', err.message));

// ========== Promise.allSettled: wait for all, never reject ==========
Promise.allSettled([fetchUser(1), fetchUser(-1)])
  .then((results) => {
    results.forEach((r, i) => {
      console.log(i, r.status, r.status === 'fulfilled' ? r.value : r.reason?.message);
    });
  });

// ========== Promise.race: first to settle wins ==========
Promise.race([
  fetchUser(1),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 30)),
])
  .then((user) => console.log('Race winner:', user))
  .catch((err) => console.error('Race error:', err.message));

// ========== finally ==========
fetchUser(1)
  .then((u) => console.log(u.name))
  .finally(() => console.log('Request finished'));
