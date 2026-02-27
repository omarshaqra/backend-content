# Module 1 – Presentation & Teaching Guide

**One file for all 30 videos.** Use each section as slide content + speaker notes.  
Copy bullets into PowerPoint/Google Slides, or use with Marp/reveal.js (split on `---`).

---

## Table of Contents

| # | Topic | # | Topic |
|---|--------|---|--------|
| 1 | Course Overview & Setup | 16 | The `this` Keyword |
| 2 | Engines & Runtimes | 17 | Prototypes & Classes |
| 3 | Variables (var, let, const) | 18 | Error Handling |
| 4 | Primitive Types | 19 | Async & Callbacks |
| 5 | Objects & References | 20 | Promises |
| 6 | Operators | 21 | async/await |
| 7 | Control Flow | 22 | Modules (CJS vs ESM) |
| 8 | Loops | 23 | Memory & GC |
| 9 | Functions Basics | 24 | TypeScript Intro |
| 10 | Arrow & HOFs | 25 | Types, Interfaces, Enums |
| 11 | Scope & Closures | 26 | Generics & Utilities |
| 12 | Hoisting | 27 | Classes in TS |
| 13 | Shallow vs Deep Copy | 28 | Decorators |
| 14 | Arrays (map, filter, reduce) | 29 | TS Project Setup |
| 15 | Destructuring | 30 | CLI Project |

---

# Video 1: Course Overview, Roadmap & Environment Setup

## Slide: What we'll learn in this course
- Backend development with **JavaScript & TypeScript**
- **Node.js** and **Express** for APIs
- **NestJS**, databases, auth, security
- Full **e-commerce backend** project

## Slide: What you need
- **Node.js** (LTS) – [nodejs.org](https://nodejs.org)
- **VS Code** – [code.visualstudio.com](https://code.visualstudio.com)
- **Git** – [git-scm.com](https://git-scm.com)
- A **terminal** (PowerShell, Git Bash, or VS Code integrated)

## Slide: Verify installation
```bash
node -v    # e.g. v20.x.x
npm -v     # e.g. 10.x.x
git --version
```

## Slide: Module 1 roadmap
- **Videos 1–10:** JavaScript fundamentals (variables, types, functions, arrays)
- **Videos 11–18:** Scope, `this`, classes, errors
- **Videos 19–23:** Async, modules, memory
- **Videos 24–30:** TypeScript and a small CLI project

**Code:** Open `01-course-overview/setup-notes.md` for reference.

---

# Video 2: How JavaScript Runs – Engines, Runtimes & Node vs Browser

## Slide: JavaScript engine
- **Engine** (e.g. V8 in Chrome/Node): parses, compiles, and runs JS
- **Runtime** = Engine + APIs (e.g. DOM in browser, `fs`/`http` in Node)
- **Single-threaded:** one call stack; async work is queued (event loop)

## Slide: Browser vs Node.js
| Browser | Node.js |
|---------|---------|
| `window`, `document` | `global`, `process` |
| DOM, fetch, localStorage | `fs`, `http`, `__dirname` |
| No `require` (use ESM or bundler) | `require` (CJS) + ESM |

## Slide: Key Node globals
- `globalThis` – global object
- `__dirname` – folder of current file
- `__filename` – full path of current file
- `process` – version, platform, cwd, env

## Slide: Event loop (order of execution)
1. Synchronous code runs first
2. Microtasks (Promises) run before next macrotask
3. Macrotasks (setTimeout, I/O) run after

**Show code:** `02-engines-runtimes/run.js` – run and show output order.

---

# Video 3: Variables & use strict – var, let, const

## Slide: Why three keywords?
- **var** – old way; function-scoped; hoisted; can be re-declared (avoid)
- **let** – block-scoped; not hoisted (TDZ); cannot re-declare in same scope
- **const** – block-scoped; must be assigned once; **object/array contents can still change**

## Slide: Scope in one sentence
- **Block:** `{ }` (if, for, while, or standalone)
- **let/const** are only visible inside the block
- **var** is visible in the whole function (and “leaks” out of blocks)

## Slide: const does not mean “immutable”
- `const x = {}` → you cannot do `x = other`
- You **can** do `x.name = 'Ali'` (mutating the object)
- For real immutability you need to avoid mutating (and use patterns from later modules)

## Slide: Best practice
- Prefer **const** by default
- Use **let** when you need to reassign
- Avoid **var** in new code

**Show code:** `03-variables/variables.js` – run and point out block scope and const mutation.

---

# Video 4: Primitive Data Types in Depth

## Slide: The seven primitives
- **string**, **number**, **bigint**, **boolean**, **undefined**, **null**, **symbol**
- Stored **by value**; **immutable** (e.g. string methods return new strings)
- Everything else (object, array, function) is an **object** (reference type)

## Slide: typeof and edge cases
- `typeof null` → `"object"` (historical quirk; use `x === null` to check)
- `typeof []` → `"object"` (use `Array.isArray()`)
- **NaN**, **Infinity**, **-Infinity** are of type `number`

## Slide: Copy by value
- Primitives are **copied by value**
- `let a = 5; let b = a; b = 10` → `a` is still 5

## Slide: Symbol and null vs undefined
- **Symbol** – unique identifier; good for “private” or distinct keys
- **undefined** – not assigned, missing property, no return
- **null** – intentional “no value”

**Show code:** `04-primitive-types/primitives.js` – run and walk through typeof, copy-by-value, Symbol.

---

# Video 5: Objects & Reference Types

## Slide: Objects store references
- Assignment copies the **reference**, not the object
- Two variables can point to the **same** object → changes visible in both

## Slide: Comparison is by reference
- `{} === {}` → **false** (different objects in memory)
- `ref1 === ref2` → **true** only if they point to the same object

## Slide: Property access
- **Dot:** `obj.name` – key is fixed
- **Bracket:** `obj[key]` – key from variable or expression (e.g. `obj['full-name']`)

## Slide: Useful object helpers
- `Object.keys(obj)`, `Object.values(obj)`, `Object.entries(obj)`
- Shallow copy: `{ ...obj }` or `Object.assign({}, obj)` (nested objects still shared)

**Show code:** `05-objects/objects.js` – show reference example, then spread copy.

---

# Video 6: Operators & Expressions

## Slide: == vs ===
- **==** – loose equality (type coercion) → can surprise (e.g. `1 == '1'`)
- **===** – strict equality (no coercion) → **prefer this**

## Slide: Nullish coalescing ??
- `value ?? default` – use **default** only when value is **null** or **undefined**
- Unlike `||`, **0** and **''** are not replaced

## Slide: Optional chaining ?.
- `obj?.a?.b` – if `obj` or `obj.a` is null/undefined, result is **undefined** (no error)
- Also: `arr?.[0]`, `fn?.()`

## Slide: Logical short-circuit
- `a && b` – if `a` is falsy, return `a`; else return `b`
- `a || b` – if `a` is truthy, return `a`; else return `b`

**Show code:** `06-operators/operators.js` – run and highlight == vs ===, ??, ?.

---

# Video 7: Control Flow – if, switch, Conditional Logic

## Slide: if / else if / else
- Same idea as in other languages
- Use **guard clauses** (early return) to keep code flat and readable

## Slide: Ternary
- `condition ? valueIfTrue : valueIfFalse`
- Good for short branches; avoid deep nesting

## Slide: switch
- Uses **strict equality** (===)
- **break** to avoid fall-through; **default** for “else”
- Can group cases: `case 'mon': case 'tue': ...`

## Slide: Truthy and falsy
- **Falsy:** `false`, `0`, `''`, `null`, `undefined`, `NaN`
- **Truthy:** everything else (including `[]`, `{}`, `'0'`)
- Use **??** when 0 or '' are valid and you only want to replace null/undefined

**Show code:** `07-control-flow/control-flow.js` – grades, switch, and || vs ??.

---

# Video 8: Loops – for, while, for...of, for...in

## Slide: for – classic loop
- `for (let i = 0; i < n; i++)` – use **let** so `i` is block-scoped
- Good when you need the **index**

## Slide: for...of – values
- Iterates over **values** of iterables (array, string, etc.)
- Use for arrays when you don’t need the index

## Slide: for...in – keys
- Iterates over **keys** (property names) of an object
- On arrays, keys are indices (strings); prefer **for...of** for arrays
- Can include inherited enumerable properties – use with care

## Slide: break and continue
- **break** – exit the loop
- **continue** – skip to next iteration

**Show code:** `08-loops/loops.js` – run for, for...of, for...in, and break/continue.

---

# Video 9: Functions Basics & Parameters

## Slide: Declaration vs expression
- **Declaration:** `function fn() {}` – **hoisted** (can call before definition)
- **Expression:** `const fn = function () {}` – only the variable is hoisted (as undefined)

## Slide: Parameters
- **Default:** `function f(x = 0) {}`
- **Rest:** `function f(...args)` – `args` is an array of remaining arguments
- **arguments** – legacy; not in arrow functions; prefer rest

## Slide: Return
- No **return** or `return;` → result is **undefined**
- Single value: `return value;`

**Show code:** `09-functions-basics/functions.js` – declaration vs expression, default, rest.

---

# Video 10: Arrow Functions & Higher-Order Functions

## Slide: Arrow syntax
- `(x) => x * 2` or `x => x * 2` (single param)
- Block body: `(a, b) => { return a + b; }`
- Return object: `() => ({ x: 1 })` – parentheses required

## Slide: Arrow vs regular – this
- Arrow functions **do not** have their own **this** – they use the enclosing scope’s **this**
- Regular functions: **this** depends on how they are **called**

## Slide: Higher-order functions
- **Takes** a function: e.g. `array.map(fn)`, `array.filter(fn)`, `array.reduce(fn, init)`
- **Returns** a function: e.g. `multiplier(factor)` returning `(n) => n * factor`

## Slide: map, filter, reduce
- **map** – transform each element → new array (same length)
- **filter** – keep elements that pass a test → new array
- **reduce** – fold to a single value (or object/array)

**Show code:** `10-arrow-functions/arrow-functions.js` – arrows, then map/filter/reduce and “return a function”.

---

# Video 11: Scope & Closures

## Slide: Lexical scope
- **Where** the code is **written** determines which variables are visible
- Inner functions “see” outer variables (until shadowed)

## Slide: What is a closure?
- A **function** that “remembers” the **environment** where it was created
- Inner function keeps a reference to outer variables even after the outer function has returned

## Slide: Practical use – private state
- Return an object with methods that use a variable in the closure
- That variable is **not** accessible from outside (no `obj.variable`)

## Slide: Loop + closure gotcha
- With **var**, all callbacks can see the same loop variable (e.g. 3, 3, 3)
- With **let**, each iteration gets its own binding (0, 1, 2)

**Show code:** `11-scope-closures/scope-closures.js` – counter, wallet, loop with let.

---

# Video 12: Hoisting Deep Dive

## Slide: What is hoisting?
- **Conceptually:** declarations are moved to the top of their scope
- Only **declarations** are hoisted; **assignments** stay in place

## Slide: Function declaration
- **Entire** function is hoisted → you can call it **before** the line it’s defined on

## Slide: var
- **Declaration** hoisted; **initialization** not → variable exists but is **undefined** until the assignment line
- Can lead to “undefined” bugs; prefer let/const

## Slide: let and const – TDZ
- **Temporal Dead Zone:** from start of scope until the declaration line
- Accessing the variable in the TDZ throws **ReferenceError**
- Encourages declaring variables at the top of the block

**Show code:** `12-hoisting/hoisting.js` – function first, then var, then comment out let access to show TDZ.

---

# Video 13: Shallow Copy vs Deep Copy

## Slide: Shallow copy
- Only the **top level** is copied; **nested** objects/arrays are still **shared**
- Ways: `{ ...obj }`, `Object.assign({}, obj)`, `[...arr]`
- Changing a nested property affects **both** “copies”

## Slide: Deep copy – JSON
- `JSON.parse(JSON.stringify(obj))` – only for **JSON-serializable** data
- Loses: functions, undefined, Symbol, Date (becomes string), etc.

## Slide: Deep copy – structuredClone
- `structuredClone(obj)` – built-in in Node 17+; supports Date, Map, Set, typed arrays
- Does **not** support functions or Symbol

## Slide: When to use which
- Need a **full** copy with no shared refs → deep (structuredClone or library)
- Only need top-level copy or know there’s no nesting → shallow (spread/assign)

**Show code:** `13-shallow-deep-copy/copy.js` – shallow mutating nested, then deep with JSON and structuredClone.

---

# Video 14: Working with Arrays (map, filter, reduce)

## Slide: map
- Transform **each** element → new array, **same length**
- Example: `numbers.map(n => n * 2)`

## Slide: filter
- Keep elements that **pass a test** → new array (length ≤ original)
- Example: `numbers.filter(n => n % 2 === 0)`

## Slide: reduce
- Fold array into **one** value (number, object, array, etc.)
- Signature: `reduce((acc, item) => newAcc, initialValue)`
- Example: sum, product, build object, group by

## Slide: Others
- **find** / **findIndex** – first match
- **some** / **every** – boolean
- **flat** / **flatMap** – flatten and/or map

**Show code:** `14-arrays/arrays.js` – map/filter/reduce, then reduce to object and groupBy.

---

# Video 15: Working with Objects & Destructuring

## Slide: Object destructuring
- `const { name, age } = user` – unpack properties into variables
- Rename: `const { name: userName } = user`
- Default: `const { country = 'Egypt' } = user`
- Rest: `const { id, ...rest } = user`

## Slide: Array destructuring
- `const [first, second, ...rest] = arr`
- Skip: `const [a, , b] = arr`
- Swap: `[a, b] = [b, a]`

## Slide: Nested and in parameters
- Nested: `const { db: { host } } = config`
- In parameters: `function f({ name, age }) {}`

**Show code:** `15-objects-destructuring/destructuring.js` – object, array, nested, function param.

---

# Video 16: The this Keyword, call, apply, bind

## Slide: this depends on how the function is called
- **Method:** `obj.f()` → **this** = obj
- **Standalone:** `f()` → **this** = undefined (strict) or global
- **Arrow:** **this** = from enclosing scope (lexical)

## Slide: call and apply
- **call(thisArg, ...args)** – call function with explicit **this** and arguments
- **apply(thisArg, [args])** – same but arguments in an **array**
- Use to “borrow” a method: `person.greet.call(otherObj)`

## Slide: bind
- **bind(thisArg)** returns a **new function** with **this** fixed
- Use when passing a method as callback: `setTimeout(obj.method.bind(obj), 100)`

## Slide: Arrow and this
- Arrow functions don’t have own **this** – ideal for callbacks that should use the outer **this** (e.g. in class or object method)

**Show code:** `16-this-keyword/this-keyword.js` – method, lost this, call/apply/bind, arrow in setTimeout.

---

# Video 17: Prototypes & ES6 Classes

## Slide: Prototype chain
- Constructor + **prototype**: shared methods; instances “inherit” from `Constructor.prototype`
- **new** creates an object whose prototype is `Constructor.prototype`

## Slide: ES6 class
- **Syntactic sugar** over constructor + prototype
- **constructor**, methods, **extends**, **super**
- **static** – on the class, not instances

## Slide: super
- In subclass **constructor**, must call **super(...)** before using **this**
- **super.method()** – call parent method

## Slide: Private fields (ES2022)
- **#field** – only visible inside the class
- Not accessible as `obj.#field` from outside

**Show code:** `17-prototypes-classes/prototypes-classes.js` – Animal prototype, then Person/Student, static, getter/setter, #balance.

---

# Video 18: Error Types & Exception Handling

## Slide: throw and try/catch/finally
- **throw** an value (usually `new Error('message')`)
- **try** { } **catch** (err) { } **finally** { }
- **finally** runs whether or not an error was thrown

## Slide: Built-in errors
- **Error**, **TypeError**, **ReferenceError**, **SyntaxError**, **RangeError**
- **err.name**, **err.message**, **err.stack**

## Slide: Custom error class
- **extends Error**; call **super(message)**; set **this.name**
- Use **instanceof** in catch to handle specific errors and **rethrow** others

## Slide: Best practice
- Handle what you can; **rethrow** what you can’t so the caller can handle
- Don’t swallow errors (empty catch)

**Show code:** `18-error-handling/error-handling.js` – divide, try/catch/finally, ValidationError, rethrow.

---

# Video 19: Asynchronous JavaScript – Callbacks & Event Loop

## Slide: Sync vs async
- **Synchronous:** one line after another; blocking
- **Asynchronous:** start work, pass a **callback** to run when done; non-blocking
- **Event loop** runs callbacks when the call stack is empty

## Slide: Node-style callback (error first)
- Convention: `(err, result) => { }`
- If error: call with `callback(err, null)`; if success: `callback(null, data)`
- Always check **err** first

## Slide: Callback hell
- Nested callbacks become hard to read and maintain
- Solution: **Promises** and **async/await** (next videos)

**Show code:** `19-async-callbacks/callbacks.js` – execution order, then fetchUser, then nested fetchOrder → fetchUser → fetchAddress.

---

# Video 20: Promises – Chaining, Error Handling

## Slide: What is a Promise?
- Represents a **future value** (or error)
- States: **pending** → **fulfilled** (value) or **rejected** (error)
- **.then(onFulfilled)**, **.catch(onRejected)**, **.finally()**

## Slide: Chaining
- `.then()` returns a **new** Promise; you can chain
- Return value from **then** becomes the fulfilled value for the next **then**
- If you **throw** or return a rejected Promise, the chain goes to **catch**

## Slide: Promise.all and friends
- **Promise.all([...])** – wait for all; **rejects** if any reject
- **Promise.allSettled([...])** – wait for all; never rejects; get status + value/reason
- **Promise.race([...])** – first to settle wins

**Show code:** `20-promises/promises.js` – create, chain, catch, fetchUser, Promise.all, allSettled, race.

---

# Video 21: async/await & Best Practices

## Slide: async and await
- **async** function **always** returns a Promise
- **await** pauses the function until the Promise settles; only inside **async**
- **await** gives the **value** (or throws so you can catch)

## Slide: Error handling
- Use **try/catch** around **await**
- Unhandled rejection in async function becomes a rejected Promise (handle with .catch or try/catch in caller)

## Slide: Sequential vs parallel
- **Sequential:** `const a = await f1(); const b = await f2();` – total time ≈ sum
- **Parallel:** `const [a, b] = await Promise.all([f1(), f2()]);` – total time ≈ max
- Prefer **parallel** when calls are independent

**Show code:** `21-async-await/async-await.js` – basic await, try/catch, sequential vs parallel, getUserWithOrders.

---

# Video 22: Modules in JS – CommonJS vs ES Modules

## Slide: Why modules?
- Split code into files; **export** what others need; **import** what you need
- Avoid global namespace pollution; explicit dependencies

## Slide: CommonJS (Node classic)
- **Export:** `module.exports = { add, PI };` or `exports.add = add;`
- **Import:** `const { add } = require('./math.cjs');`
- **Synchronous**; default in Node for **.cjs** or when no "type": "module"

## Slide: ES Modules (ESM)
- **Export:** `export function add() {}` or `export { add, PI };`
- **Import:** `import { add } from './math.mjs';`
- Use **.mjs** or **"type": "module"** in package.json
- **Asynchronous** loading; static structure (imports hoisted)

## Slide: Summary
- CJS: **require** / **module.exports**
- ESM: **import** / **export**
- Don’t mix in the same file; know which your project uses

**Show code:** `22-modules/main.cjs` and `math.cjs`; then `main.mjs` and `math.mjs`. Run both.

---

# Video 23: Memory Management, Garbage Collection & Performance Basics

## Slide: No manual free
- JavaScript has **automatic** garbage collection (GC)
- When an object is **unreachable** (no references), GC can reclaim it

## Slide: Memory leaks
- **Unbounded cache** – e.g. array or Map that only grows
- **Detached DOM** or global references to big data
- **Closures** holding large objects longer than needed
- Mitigation: clear references, use **WeakMap**/WeakSet when keys can be collected

## Slide: process.memoryUsage() (Node)
- **rss**, **heapTotal**, **heapUsed**, **external**
- Use to observe growth (e.g. before/after a heavy operation)

## Slide: Performance tips
- Avoid huge **intermediate** arrays; use **iterators** or **generators** for streams
- Set **large references to null** when done so GC can reclaim

**Show code:** `23-memory/memory.js` – unbounded cache, WeakMap, process.memoryUsage(), generator.

---

# Video 24: Introduction to TypeScript & Tooling

## Slide: What is TypeScript?
- **JavaScript + static types** (and tooling)
- Compiles to JavaScript; types are **erased** at runtime
- Catches many bugs at **compile time** and improves editor support

## Slide: Basic types
- **string**, **number**, **boolean**, **null**, **undefined**
- **string[]**, **number[]** or **Array<number>**
- **tuple:** `[string, number]`
- **any** (avoid when possible)

## Slide: Functions
- Parameter types and **return** type: `function greet(name: string): string {}`
- **Optional:** `name?: string`
- **Union:** `string | number`

## Slide: Type inference
- TypeScript infers types when you assign (e.g. `const x = 5` → number)
- You don’t have to type everything; add types where they help

**Show code:** `24-typescript-intro/intro.ts` – variables, greet, optional, union. Run with ts-node.

---

# Video 25: Core TypeScript Types, Interfaces & Enums

## Slide: interface
- Describes the **shape** of an object
- **Optional:** `email?: string`
- **readonly:** `readonly id: number`
- **Extends:** `interface Admin extends User { role: 'admin'; }`

## Slide: type alias
- **type Role = 'admin' | 'user'** – union
- **type ID = string | number**
- Can represent objects, unions, tuples, etc.

## Slide: enum
- **enum Status { Pending = 'PENDING', Active = 'ACTIVE' }**
- Numeric enum auto-increments if you don’t set values
- Use for a fixed set of named constants

## Slide: Index signature
- **interface StringMap { [key: string]: string }** – any string key, string value

**Show code:** `25-types-interfaces/types-interfaces.ts` – User, AdminUser, Role, Status, optional chaining in types.

---

# Video 26: Functions, Generics & Utility Types in TypeScript

## Slide: Generics
- **function identity<T>(x: T): T** – type parameter **T**; caller can pass type or let it be inferred
- **function first<T>(arr: T[]): T** – same T in and out
- **Constraint:** **K extends keyof T** for “key of T”

## Slide: Generic types
- **interface ApiResponse<T> { data: T; status: number; }**
- **ApiResponse<User>** – data is User

## Slide: Utility types
- **Pick<T, K>** – subset of properties
- **Omit<T, K>** – T without certain keys
- **Partial<T>** – all properties optional
- **Required<T>**, **Readonly<T>**, **Record<K, V>**
- **ReturnType<typeof fn>** – return type of a function

**Show code:** `26-generics/generics.ts` – identity, firstElement, getProperty, ApiResponse, Pick/Omit/Partial, ReturnType.

---

# Video 27: Classes, Access Modifiers & Inheritance in TS

## Slide: Access modifiers
- **public** – default; visible everywhere
- **private** – only inside this class
- **protected** – this class and subclasses
- **readonly** – set only in constructor or at declaration

## Slide: Constructor and super
- **constructor(public id: number)** – parameter property (declares and assigns)
- In subclass: **super(...)** must be called before using **this**

## Slide: Abstract class
- **abstract class** – can’t be **new**; used as base
- **abstract method** – no body in base; must be implemented in subclass

**Show code:** `27-classes-ts/classes-ts.ts` – Animal (private/protected), Dog extends, Point readonly, User parameter props, Shape abstract.

---

# Video 28: Decorators Concept & Use Cases in Backend Code

## Slide: What is a decorator?
- **Function** that wraps a class, method, property, or parameter
- **experimentalDecorators: true** in tsconfig
- Used heavily in **NestJS** (routes, validation, guards)

## Slide: Method decorator
- **target** – prototype (or constructor for static)
- **propertyKey** – method name
- **descriptor** – property descriptor (value = the function)
- Replace **descriptor.value** with a wrapper (e.g. log, validate), then return descriptor

## Slide: Use cases
- **Logging** – log arguments and return value
- **Validation** – check args before calling original
- **Timing** – measure execution time
- **Authorization** – check before running method

**Show code:** `28-decorators/decorators.ts` – @Log, @Validate, @Serializable. Run with ts-node --experimentalDecorators.

---

# Video 29: Setting Up a TypeScript Node Project

## Slide: What we need
- **package.json** – name, scripts, dependencies
- **tsconfig.json** – compiler options (target, module, outDir, strict, etc.)
- **src/** – source TypeScript files
- **dist/** – compiled JS (gitignore usually)

## Slide: Scripts
- **npm run build** – `tsc` (compile)
- **npm run start** – `node dist/index.js` (run compiled)
- **npm run dev** – `ts-node src/index.ts` (run without pre-compiling)

## Slide: Key tsconfig options
- **target** – e.g. ES2020
- **module** – commonjs or ESNext
- **outDir** / **rootDir**
- **strict: true**
- **experimentalDecorators** if using decorators

**Show code:** `29-ts-project-setup/` – open package.json, tsconfig.json, src/index.ts. Run npm run dev.

---

# Video 30: Small CLI Project with TypeScript

## Slide: CLI from Node
- **process.argv** – array of arguments (first two are node and script path)
- Parse flags like **--name Ali** and **--greet**

## Slide: Design
- **parseArgs(argv)** – return `{ name, greet }` or similar
- **main()** – parse, then either print greeting or usage
- Keep parsing and “business” logic simple and testable

## Slide: Next steps (for course)
- Add more commands (e.g. --version, --help)
- Use a CLI library later: **commander**, **yargs**, or **inquirer** for prompts
- Same patterns apply to real backends: parse input → validate → do work → output

**Show code:** `30-cli-project/cli.ts` – parseArgs, main. Run: `npx ts-node cli.ts --name Ali --greet`.

---

## End of Module 1 Presentation

- **File:** `PRESENTATION.md` (this file)
- **Code:** One folder per video under `code/module-1-js-ts-foundations/`
- **Tip:** For slide decks, copy each “Slide:” section into one slide; use “Show code” as demo instructions or speaker notes.
