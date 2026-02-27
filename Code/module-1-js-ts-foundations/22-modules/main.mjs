/**
 * ESM: import (use .mjs or "type": "module" in package.json)
 * Run: node main.mjs
 */

import { add, subtract, PI } from './math.mjs';
console.log('ESM:', add(2, 3), subtract(5, 2), PI);

// Default import (if math.mjs had: export default { add, PI })
// import math from './math.mjs';

// Namespace import
// import * as math from './math.mjs';
// math.add(1, 2);
