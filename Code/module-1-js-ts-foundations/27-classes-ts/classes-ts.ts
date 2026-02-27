/**
 * Video 27: Classes, Access Modifiers & Inheritance in TS
 *
 * - public, private, protected
 * - readonly, abstract class
 *
 * Run: npx ts-node classes-ts.ts
 */

// ========== Access modifiers ==========
class Animal {
  public name: string;
  private id: number;
  protected species: string;

  constructor(name: string, id: number, species: string) {
    this.name = name;
    this.id = id;
    this.species = species;
  }

  public greet(): string {
    return `I am ${this.name}`;
  }

  getId(): number {
    return this.id; // OK inside class
  }
}

const a = new Animal('Rex', 1, 'Dog');
console.log(a.name);
// console.log(a.id);     // Error: private
// console.log(a.species); // Error: protected
console.log(a.getId());

// ========== Inheritance ==========
class Dog extends Animal {
  constructor(name: string, id: number) {
    super(name, id, 'Dog'); // must call before using this
  }
  bark(): string {
    return `${this.name} barks`; // can use this.species (protected)
  }
}

const d = new Dog('Rex', 1);
console.log(d.greet(), d.bark());

// ========== Readonly ==========
class Point {
  readonly x: number;
  readonly y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
const p = new Point(1, 2);
// p.x = 3; // Error

// ========== Parameter properties (shorthand) ==========
class User {
  constructor(
    public id: number,
    public name: string,
    private password: string
  ) {}
}
const u = new User(1, 'Ali', 'secret');
console.log(u.name);

// ========== Abstract class ==========
abstract class Shape {
  abstract getArea(): number;
  describe(): string {
    return `Area: ${this.getArea()}`;
  }
}
class Rectangle extends Shape {
  constructor(private w: number, private h: number) {
    super();
  }
  getArea(): number {
    return this.w * this.h;
  }
}
const rect = new Rectangle(3, 4);
console.log(rect.getArea(), rect.describe());
