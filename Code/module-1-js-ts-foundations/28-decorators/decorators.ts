/**
 * Video 28: Decorators Concept & Use Cases in Backend Code
 *
 * - Method decorator: wrap function (logging, validation)
 * - Requires "experimentalDecorators": true in tsconfig
 *
 * Run: npx ts-node --experimentalDecorators decorators.ts
 */

function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`[LOG] ${propertyKey}(${JSON.stringify(args)})`);
    const result = original.apply(this, args);
    console.log(`[LOG] ${propertyKey} => ${result}`);
    return result;
  };
  return descriptor;
}

function Validate(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;
  descriptor.value = function (value: number) {
    if (value < 0) throw new Error(`${propertyKey}: value must be >= 0`);
    return original.apply(this, [value]);
  };
  return descriptor;
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }

  @Log
  @Validate
  setAmount(value: number): void {
    console.log('Amount set to', value);
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));
calc.setAmount(10);
// calc.setAmount(-1); // throws

// ========== Class decorator (simple) ==========
function Serializable(constructor: Function) {
  constructor.prototype.toJSON = function () {
    return JSON.stringify(this);
  };
}

@Serializable
class Entity {
  constructor(public id: number, public name: string) {}
}
const e = new Entity(1, 'Test');
console.log((e as any).toJSON?.());
