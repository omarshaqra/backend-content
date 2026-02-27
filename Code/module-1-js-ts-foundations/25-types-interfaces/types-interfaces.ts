/**
 * Video 25: Core TypeScript Types, Interfaces & Enums
 *
 * - interface: shape of objects; optional, readonly
 * - type: unions, primitives, tuples, etc.
 * - enum: named constants
 *
 * Run: npx ts-node types-interfaces.ts
 */

// ========== Interface ==========
interface User {
  id: number;
  name: string;
  email?: string;        // optional
  readonly createdAt: Date;
}

const user: User = {
  id: 1,
  name: 'Ali',
  createdAt: new Date(),
};
user.name = 'Sara';       // OK
// user.createdAt = new Date(); // Error: readonly
// user.role = 'admin';         // Error: not in interface

// ========== Extending interface ==========
interface AdminUser extends User {
  role: 'admin';
  permissions: string[];
}
const admin: AdminUser = {
  id: 2,
  name: 'Sara',
  createdAt: new Date(),
  role: 'admin',
  permissions: ['read', 'write'],
};

// ========== Type alias ==========
type Role = 'admin' | 'user' | 'guest';
type ID = string | number;

const role: Role = 'admin';
const userId: ID = 1;

// ========== Enum ==========
enum Status {
  Pending = 'PENDING',
  Active = 'ACTIVE',
  Done = 'DONE',
}
const status: Status = Status.Active;
console.log(status); // ACTIVE

enum NumericEnum {
  A,
  B,
  C,
}
console.log(NumericEnum.B); // 1 (auto-increment from 0)

// ========== Index signature ==========
interface StringMap {
  [key: string]: string;
}
const map: StringMap = { a: 'x', b: 'y' };

// ========== Optional chaining in types ==========
interface Config {
  db?: {
    host: string;
    port: number;
  };
}
const config: Config = {};
const port = config.db?.port; // number | undefined
