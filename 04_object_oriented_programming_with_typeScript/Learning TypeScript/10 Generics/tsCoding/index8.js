"use strict";
/*
    # Chapter 10. Generics
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/***********************************************************/
/*--------------*/
/*-- Promises --*/
/*--------------*/
/***********************************************************/
/*************************/
/*** Creating Promises ***/
/*************************/
/***********************************************************/
class PromiseLike {
    constructor(executor) {
        /* ... */
    }
}
/***********************************************************/
// Type: Promise<unknown>
const resolvesUnknown = new Promise((resolve) => {
    setTimeout(() => resolve('Done!'), 1000);
});
// Type: Promise<string>
const resolvesString = new Promise((resolve) => {
    setTimeout(() => resolve('Done!'), 1000);
});
/***********************************************************/
// Type: Promise<string>
const textEventually = new Promise((resolve) => {
    setTimeout(() => resolve('Done!'), 1000);
});
// Type: Promise<number>
const lengthEventually = textEventually.then((text) => text.length);
/***********************************************************/
/***********************/
/*** Async Functions ***/
/***********************/
/***********************************************************/
// Type: (text: string) => Promise<number>
function lengthAfterSecond(text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve) => setTimeout(resolve, 1000));
        return text.length;
    });
}
// Type: (text: string) => Promise<number>
function lengthImmediately(text) {
    return __awaiter(this, void 0, void 0, function* () {
        return text.length;
    });
}
/***********************************************************/
// Ok
function givesPromiseForString() {
    return __awaiter(this, void 0, void 0, function* () {
        return 'Done!';
    });
}
