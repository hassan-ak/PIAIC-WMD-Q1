"use strict";
/*
    # Chapter 8. Classes
*/
/***********************************************************/
var _Base_truePrivate;
Object.defineProperty(exports, "__esModule", { value: true });
/*-------------------------*/
/*-- Member Visibility --*/
/*-------------------------*/
/***********************************************************/
class Base {
    constructor() {
        this.isPublicImplicit = 0;
        this.isPublicExplicit = 1;
        this.isProtected = 2;
        this.isPrivate = 3;
        _Base_truePrivate.set(this, 4);
    }
}
_Base_truePrivate = new WeakMap();
class Subclass extends Base {
    examples() {
        this.isPublicImplicit; // Ok
        this.isPublicExplicit; // Ok
        this.isProtected; // Ok
        // Error
        // this.isPrivate;
        // this.#truePrivate;
    }
}
new Subclass().isPublicImplicit; // Ok
new Subclass().isPublicExplicit; // Ok
// private
// new Subclass().isProtected;
// new Subclass().isPrivate;
/***********************************************************/
class TwoKeywords {
    constructor() {
        this.name = 'Anne Sullivan'; // Ok
    }
    log() {
        console.log(this.name); // Ok
    }
}
const two = new TwoKeywords();
// two.name = 'Savitribai Phule';
/***********************************************************/
/******************************/
/*** Static Field Modifiers ***/
/******************************/
/***********************************************************/
class Question {
    guess(getAnswer) {
        const answer = getAnswer(Question.prompt);
        // Ok
        if (answer === Question.answer) {
            console.log('You got it!');
        }
        else {
            console.log('Try again...');
        }
    }
}
Question.prompt = "What's an ogre's favorite programming language?";
