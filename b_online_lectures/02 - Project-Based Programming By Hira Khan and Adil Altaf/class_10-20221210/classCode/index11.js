"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let returnStringOrNumber;
// Error
// // returnStringOrNumber = 'Alexander';
returnStringOrNumber = 7;
returnStringOrNumber = () => 'Alexander';
// Error
// // returnStringOrNumber = () => 7;
// Error
// // returnStringOrNumber = function (): number {
// //   return 7;
// // };
returnStringOrNumber = function () {
    return '7';
};
returnStringOrNumber = 7;
let aboutImran;
aboutImran = (name) => {
    return 7;
};
