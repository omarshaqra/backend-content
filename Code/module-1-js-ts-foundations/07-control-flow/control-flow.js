/**
 * Video 7: Control Flow – if, switch, Conditional Logic
 *
 * - if / else if / else, ternary, switch
 * - Truthy vs falsy values
 *
 * Run: node control-flow.js
 */

'use strict';

// ========== if / else if / else ==========
console.log('=== if / else if / else ===');
function getGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}
console.log(getGrade(85)); // B
console.log(getGrade(92)); // A

// ========== Ternary operator ==========
console.log('\n=== Ternary ===');
const age = 20;
const canVote = age >= 18 ? 'Yes' : 'No';
console.log('Can vote:', canVote);

// Nested ternary (use sparingly – can get hard to read)
const temp = 25;
const feel = temp > 30 ? 'Hot' : temp > 20 ? 'Warm' : temp > 10 ? 'Cool' : 'Cold';
console.log('Feel:', feel);

// ========== switch (strict ===) ==========
console.log('\n=== switch ===');
function getDayType(day) {
  switch (day) {
    case 'mon':
    case 'tue':
    case 'wed':
    case 'thu':
    case 'fri':
      return 'Weekday';
    case 'sat':
    case 'sun':
      return 'Weekend';
    default:
      return 'Unknown';
  }
}
console.log(getDayType('mon'));
console.log(getDayType('sun'));
console.log(getDayType('xyz'));

// switch with number
const statusCode = 404;
switch (statusCode) {
  case 200:
    console.log('OK');
    break;
  case 404:
    console.log('Not Found');
    break;
  case 500:
    console.log('Server Error');
    break;
  default:
    console.log('Other');
}

// ========== Truthy vs Falsy ==========
console.log('\n=== Truthy / Falsy ===');
// Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is truthy (including [], {}, " ", "0")

console.log(Boolean(0));        // false
console.log(Boolean(''));       // false
console.log(Boolean(null));     // false
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
console.log(Boolean('0'));      // true

// Default value with ||
const userName = '';
const displayName = userName || 'Anonymous';
console.log(displayName); // Anonymous

const count = 0;
const result = count || 10;  // 10 – 0 is falsy!
const safe = count ?? 10;    // 0 – ?? only replaces null/undefined
console.log(result, safe);

// Guard clause pattern
function processUser(user) {
  if (!user) return null;
  if (!user.email) return null;
  return user.email.toUpperCase();
}
console.log(processUser(null));
console.log(processUser({ email: 'a@b.com' }));
