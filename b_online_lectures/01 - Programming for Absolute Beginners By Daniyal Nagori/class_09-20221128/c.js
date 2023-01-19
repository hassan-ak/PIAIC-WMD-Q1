"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shared = void 0;
// c.ts
// // import { shared } from './a';
// ~~~~~~
// Error: Import declaration conflicts with local declaration of 'shared'.
exports.shared = 'Cher';
// ~~~~~~
// Error: Individual declarations in merged declaration
// 'shared' must be all exported or all local.
