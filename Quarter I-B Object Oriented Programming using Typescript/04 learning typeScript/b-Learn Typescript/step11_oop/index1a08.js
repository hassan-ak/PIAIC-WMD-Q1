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
/*----------------*/
/*-- this Types --*/
/*----------------*/
/************************************************/
// return type is this not box
class Box {
    contents = '';
    set(value) {
        this.contents = value;
        return this;
    }
}
class ClearableBox extends Box {
    clear() {
        this.contents = '';
    }
}
const a = new ClearableBox();
const b = a.set('hello');
/************************************************/
class Box1 {
    content = '';
    sameAs(other) {
        return other.content === this.content;
    }
}
/************************************************/
class Box2 {
    content = '';
    sameAs(other) {
        return other.content === this.content;
    }
}
class DerivedBox extends Box2 {
    otherContent = '?';
}
const base = new Box2();
const derived = new DerivedBox();
