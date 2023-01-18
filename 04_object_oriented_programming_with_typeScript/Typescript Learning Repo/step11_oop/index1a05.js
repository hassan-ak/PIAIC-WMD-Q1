"use strict";
/******************/
/*** step11_oop ***/
/******************/
Object.defineProperty(exports, "__esModule", { value: true });
/************************************************/
/*+++++++++++++*/
/*++ Classes ++*/
/*+++++++++++++*/
/************************************************/
/*------------------------------*/
/*-- static Blocks in Classes --*/
/*------------------------------*/
/************************************************/
// static blocks have their on scope
// can access private eilds
class Foo {
    static #count = 0;
    get count() {
        return Foo.#count;
    }
    static {
        try {
            const lastInstances = 21;
            Foo.#count += lastInstances;
        }
        catch { }
    }
}
