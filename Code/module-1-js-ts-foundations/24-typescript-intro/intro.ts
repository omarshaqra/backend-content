/**
 * Video 24: Introduction to TypeScript & Tooling
 *
 * - Types for variables, parameters, return values
 * - type inference; running with ts-node or tsc
 *
 * Run: npx ts-node intro.ts
 */

// Explicit types
const message: string = 'Hello, TypeScript!';
const count: number = 42;
const isActive: boolean = true;
const items: string[] = ['a', 'b'];
const tuple: [string, number] = ['ali', 25];

// Function with types
function greet(name: string): string {
  return `Hi, ${name}`;
}
console.log(greet('Ali'));

// Type inference: no need to type when obvious
const inferred = 10;        // number
const inferredStr = 'hi';   // string
const inferredArr = [1, 2]; // number[]

// Union type
let id: string | number;
id = 1;
id = 'abc';

// Any (avoid when possible)
let flexible: any = 5;
flexible = 'hello';

// Void for no return
function log(msg: string): void {
  console.log(msg);
}

// Optional parameter
function greetOptional(name?: string): string {
  return `Hello, ${name ?? 'Guest'}`;
}
console.log(greetOptional());
console.log(greetOptional('Sara'));
