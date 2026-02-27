/**
 * Video 21: async/await & Best Practices
 *
 * - async function always returns a Promise
 * - await pauses until Promise settles; only inside async
 * - try/catch for errors; sequential vs parallel (Promise.all)
 *
 * Run: node async-await.js
 */

'use strict';

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) reject(new Error('Invalid id'));
      else resolve({ id, name: `User${id}` });
    }, 50);
  });
}

function fetchOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ orderId: 1 }, { orderId: 2 }]), 30);
  });
}

// ========== Basic async/await ==========
console.log('=== Basic async/await ===');
async function getUser(id) {
  const user = await fetchUser(id);
  console.log('User:', user);
  return user;
}
getUser(1); // returns Promise; use .then() or await in another async to get value

// ========== Error handling with try/catch ==========
console.log('\n=== try/catch ===');
async function safeGetUser(id) {
  try {
    const user = await fetchUser(id);
    return user;
  } catch (err) {
    console.error('Error:', err.message);
    return null;
  }
}
safeGetUser(-1).then((u) => console.log('Result:', u));

// ========== Sequential vs parallel ==========
console.log('\n=== Sequential vs parallel ===');
async function sequential() {
  const u1 = await fetchUser(1);
  const u2 = await fetchUser(2);
  return [u1, u2]; // total time ~100ms
}

async function parallel() {
  const [u1, u2] = await Promise.all([fetchUser(1), fetchUser(2)]);
  return [u1, u2]; // total time ~50ms
}

parallel().then((users) => console.log('Parallel result:', users));

// ========== Practical: fetch user then orders ==========
async function getUserWithOrders(userId) {
  const user = await fetchUser(userId);
  if (!user) throw new Error('User not found');
  const orders = await fetchOrders(user.id);
  return { ...user, orders };
}

getUserWithOrders(1).then((data) => console.log('User with orders:', data));

// ========== Await in loop: sequential ==========
async function fetchAllSequential(ids) {
  const results = [];
  for (const id of ids) {
    const user = await fetchUser(id);
    results.push(user);
  }
  return results;
}

// ========== Await in loop: parallel ==========
async function fetchAllParallel(ids) {
  const promises = ids.map((id) => fetchUser(id));
  return Promise.all(promises);
}

fetchAllParallel([1, 2, 3]).then((users) => console.log('Fetched:', users.length));

// ========== Top-level await (ES2022, modules) ==========
// In .mjs or "type": "module": await fetchUser(1) at top level is allowed
