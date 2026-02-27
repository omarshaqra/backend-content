/**
 * Video 26: Functions, Generics & Utility Types in TypeScript
 *
 * - Generic functions and types: <T>
 * - Utility types: Pick, Omit, Partial, Required, Record
 *
 * Run: npx ts-node generics.ts
 */

// ========== Generic function ==========
function identity<T>(value: T): T {
  return value;
}
console.log(identity<string>('hello'));
console.log(identity(42)); // inferred as number

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b']));

// ========== Generic with constraint ==========
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const person = { name: 'Ali', age: 25 };
console.log(getProperty(person, 'name'));
// getProperty(person, 'foo'); // Error

// ========== Interface with generic ==========
interface ApiResponse<T> {
  data: T;
  status: number;
}
const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: 'Ali' },
  status: 200,
};

// ========== Utility types ==========
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User, 'name' | 'email'>;  // { name: string; email: string }
type UserCreate = Omit<User, 'id'>;               // { name: string; email: string }
type PartialUser = Partial<User>;                // all properties optional
type RequiredUser = Required<Pick<User, 'id'>>;  // { id: number }
type ReadonlyUser = Readonly<User>;

const create: UserCreate = { name: 'Sara', email: 's@x.com' };
const update: PartialUser = { name: 'Bob' };     // only update name

// Record: object with specific key and value types
type RoleMap = Record<string, number>;
const roles: RoleMap = { admin: 1, user: 2 };

// ReturnType
function getStr(): string {
  return 'hi';
}
type Str = ReturnType<typeof getStr>; // string
