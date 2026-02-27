/**
 * Video 17: Prototypes & ES6 Classes
 *
 * - Prototype chain: objects inherit from their constructor's prototype
 * - ES6 class: syntactic sugar over constructor + prototype
 * - extends, super, static
 *
 * Run: node prototypes-classes.js
 */

'use strict';

// ========== Constructor function + prototype ==========
console.log('=== Constructor & prototype ===');
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};
Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

const dog = new Animal('Rex');
dog.speak(); // Rex makes a sound
console.log(dog instanceof Animal);   // true
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true

// ========== ES6 class ==========
console.log('\n=== ES6 class ===');
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, I'm ${this.name}`;
  }
  getAge() {
    return this.age;
  }
}
const p = new Person('Ali', 25);
console.log(p.greet());
console.log(p.getAge());

// ========== Inheritance with extends ==========
console.log('\n=== Inheritance ===');
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // must call before using this
    this.grade = grade;
  }
  greet() {
    return `${super.greet()} and my grade is ${this.grade}`;
  }
  study() {
    return `${this.name} is studying`;
  }
}
const s = new Student('Sara', 20, 'A');
console.log(s.greet());
console.log(s.study());
console.log(s instanceof Student); // true
console.log(s instanceof Person);  // true

// ========== Static methods ==========
console.log('\n=== Static ===');
class MathUtil {
  static add(a, b) {
    return a + b;
  }
  static PI = 3.14159;
}
console.log(MathUtil.add(2, 3)); // 5
console.log(MathUtil.PI);

// ========== Getters and setters ==========
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }
  get celsius() {
    return this._celsius;
  }
  set celsius(value) {
    this._celsius = value;
  }
  get fahrenheit() {
    return this._celsius * 9 / 5 + 32;
  }
}
const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77
temp.celsius = 30;
console.log(temp.fahrenheit);

// ========== Private fields (ES2022) ==========
class Wallet {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}
const w = new Wallet();
w.deposit(100);
console.log(w.getBalance()); // 100
// console.log(w.#balance); // SyntaxError
