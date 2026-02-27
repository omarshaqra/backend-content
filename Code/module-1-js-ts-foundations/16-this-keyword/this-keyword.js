/**
 * Video 16: The this Keyword, call, apply, bind
 *
 * - this: determined by how a function is called (not where it's defined)
 * - call(thisArg, ...args), apply(thisArg, [args]), bind(thisArg)(...args)
 * - Arrow functions don't have own this; they use enclosing scope's this
 *
 * Run: node this-keyword.js
 */

'use strict';

// ========== this in method ==========
console.log('=== this in method ===');
const person = {
  name: 'Ali',
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
person.greet(); // Hi, I'm Ali – this = person

// ========== this lost when function is extracted ==========
const greetFn = person.greet;
// greetFn(); // TypeError in strict mode (this is undefined)

// ========== call: invoke with explicit this and arguments ==========
console.log('\n=== call ===');
greetFn.call(person);                    // Hi, I'm Ali
greetFn.call({ name: 'Sara' });          // Hi, I'm Sara

function introduce(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}
introduce.call(person, 'Hello', '!');    // Hello, I'm Ali!

// ========== apply: same as call but arguments as array ==========
console.log('\n=== apply ===');
introduce.apply(person, ['Hey', '.']);   // Hey, I'm Ali.

// Useful when you have an array of arguments
const args = ['Welcome', '!!'];
introduce.apply(person, args);

// ========== bind: return new function with fixed this ==========
console.log('\n=== bind ===');
const boundGreet = person.greet.bind(person);
boundGreet(); // Hi, I'm Ali

const boundIntroduce = introduce.bind(person, 'Hi');
boundIntroduce('...'); // Hi, I'm Ali...

// Partial application with bind
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(5)); // 10

// ========== Arrow functions: no own this ==========
console.log('\n=== Arrow vs regular ===');
const obj = {
  name: 'Obj',
  regular() {
    setTimeout(function () {
      console.log('regular callback this:', this?.name); // undefined (strict) or global
    }, 10);
  },
  arrow() {
    setTimeout(() => {
      console.log('arrow callback this:', this.name);   // Obj – lexical this
    }, 10);
  },
};
obj.regular();
obj.arrow();

// ========== Practical: borrow method ==========
const another = { name: 'Another' };
person.greet.call(another); // Hi, I'm Another

// ========== Class method passed as callback ==========
class Button {
  constructor(label) {
    this.label = label;
  }
  click() {
    console.log('Clicked:', this.label);
  }
}
const btn = new Button('Submit');
btn.click();           // Clicked: Submit
setTimeout(btn.click, 100);        // Clicked: undefined (this lost)
setTimeout(() => btn.click(), 100); // Clicked: Submit
setTimeout(btn.click.bind(btn), 100); // Clicked: Submit
