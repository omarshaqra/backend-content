/**
 * Video 15: Working with Objects & Destructuring
 *
 * - Object/array destructuring: unpack values into variables
 * - Defaults, renaming, rest, nested, in parameters
 *
 * Run: node destructuring.js
 */

'use strict';

const user = { id: 1, name: 'Ali', age: 25, role: 'admin', email: 'ali@example.com' };
const config = { db: { host: 'localhost', port: 5432 }, env: 'development' };

// ========== Object destructuring ==========
console.log('=== Object destructuring ===');
const { name, age } = user;
console.log(name, age); // Ali 25

// Rename with :
const { name: userName, role: userRole } = user;
console.log(userName, userRole); // Ali admin

// Default value
const { country = 'Egypt', city = 'Cairo' } = user;
console.log(country, city); // Egypt Cairo

// Rest: collect remaining keys into object
const { id, ...userWithoutId } = user;
console.log(userWithoutId); // { name, age, role, email }

// ========== Array destructuring ==========
console.log('\n=== Array destructuring ===');
const [first, second, third] = [10, 20, 30];
console.log(first, second, third); // 10 20 30

const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest); // 1 2 [3, 4, 5]

// Defaults
const [x, y, z = 0] = [1, 2];
console.log(x, y, z); // 1 2 0

// Skip elements
const [p, , q] = [1, 2, 3];
console.log(p, q); // 1 3

// Swap variables
let m = 1, n = 2;
[m, n] = [n, m];
console.log(m, n); // 2 1

// ========== Nested destructuring ==========
console.log('\n=== Nested ===');
const { db: { host, port } } = config;
console.log(host, port); // localhost 5432

const { db } = config;
const { host: h, port: pt } = db;
console.log(h, pt);

// ========== In function parameters ==========
console.log('\n=== In parameters ===');
function printUser({ name, age }) {
  console.log(`${name}, ${age}`);
}
printUser(user); // Ali, 25

function connect({ db: { host, port } = { host: 'localhost', port: 5432 } }) {
  console.log(`Connecting to ${host}:${port}`);
}
connect(config);
connect({}); // uses default

// ========== Practical: API response ==========
const apiResponse = { data: { users: [{ id: 1, name: 'Ali' }] }, status: 200 };
const { data: { users: userList } } = apiResponse;
console.log(userList[0].name); // Ali

// ========== Destructuring with computed property name ==========
const key = 'name';
const { [key]: value } = user;
console.log(value); // Ali
