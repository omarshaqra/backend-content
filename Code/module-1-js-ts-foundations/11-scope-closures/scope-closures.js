/**
 * Video 11: Scope & Closures
 *
 * - Lexical scope: where the code is written determines what variables are visible
 * - Closure: a function that "remembers" the environment where it was created
 *
 * Run: node scope-closures.js
 */

'use strict';

// ========== Lexical (static) scope ==========
console.log('=== Lexical scope ===');
const globalVar = 'global';
function outer() {
  const outerVar = 'outer';
  function inner() {
    const innerVar = 'inner';
    console.log(innerVar, outerVar, globalVar); // inner outer global
  }
  inner();
}
outer();

// Shadowing: inner variable hides outer with same name
const x = 10;
function shadow() {
  const x = 20;
  console.log('inner x:', x); // 20
}
shadow();
console.log('outer x:', x); // 10

// ========== Closure: function remembers its creation environment ==========
console.log('\n=== Closure ===');
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1  (separate closure, separate count)

// ========== Practical: private state (module pattern) ==========
console.log('\n=== Private state ===');
function createWallet(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      if (amount <= 0) throw new Error('Amount must be positive');
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) throw new Error('Insufficient funds');
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}
const wallet = createWallet(100);
wallet.deposit(50);
console.log(wallet.getBalance()); // 150
// balance is not accessible: console.log(wallet.balance) → undefined

// ========== Closure in loop (classic gotcha) ==========
console.log('\n=== Loop + closure (use let) ===');
const funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(function () {
    return i; // each function captures its own i (block scope)
  });
}
console.log(funcs[0](), funcs[1](), funcs[2]()); // 0, 1, 2

// With var it would have been 3, 3, 3 (same i shared)

// ========== Closure: factory with config ==========
function createLogger(prefix) {
  return function (message) {
    console.log(`[${prefix}] ${message}`);
  };
}
const logError = createLogger('ERROR');
const logInfo = createLogger('INFO');
logError('Something failed');
logInfo('Application started');
