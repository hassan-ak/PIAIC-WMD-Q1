"use strict";
/*
    # Chapter 10. Generics
*/
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CurriedCallback_callback;
Object.defineProperty(exports, "__esModule", { value: true });
/***********************************************************/
/*---------------------*/
/*-- Generic Classes --*/
/*---------------------*/
/***********************************************************/
class Secret {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getValue(key) {
        return this.key === key ? this.value : undefined;
    }
}
const storage = new Secret(12345, 'luggage'); // Type: Secret<number, string>
storage.getValue(1987); // Type: string | undefined
/***********************************************************/
/************************************/
/*** Explicit Generic Class Types ***/
/************************************/
/***********************************************************/
class CurriedCallback {
    constructor(callback) {
        _CurriedCallback_callback.set(this, void 0);
        __classPrivateFieldSet(this, _CurriedCallback_callback, (input) => {
            console.log('Input:', input);
            callback(input);
        }, "f");
    }
    call(input) {
        __classPrivateFieldGet(this, _CurriedCallback_callback, "f").call(this, input);
    }
}
_CurriedCallback_callback = new WeakMap();
// Type: CurriedCallback<string>
new CurriedCallback((input) => {
    console.log(input.length);
});
// Type: CurriedCallback<unknown>
// new CurriedCallback((input) => {
//   console.log(input.length);
// });
/***********************************************************/
// Type: CurriedCallback<string>
new CurriedCallback((input) => {
    console.log(input.length);
});
// new CurriedCallback<string>((input: boolean) => {});
/***********************************************************/
/*********************************/
/*** Extending Generic Classes ***/
/*********************************/
/***********************************************************/
class Quote {
    constructor(lines) {
        this.lines = lines;
    }
}
class SpokenQuote extends Quote {
    speak() {
        console.log(this.lines.join('\n'));
    }
}
new Quote('The only real failure is the failure to try.').lines;
new Quote([4, 8, 15, 16, 23, 42]).lines; // Type: number[]
new SpokenQuote(['Greed is so destructive.', 'It destroys everything']).lines; // Type: string[]
// new SpokenQuote([4, 8, 15, 16, 23, 42]);
/***********************************************************/
class AttributedQuote extends Quote {
    constructor(value, speaker) {
        super(value);
        this.speaker = speaker;
    }
}
new AttributedQuote('The road to success is always under construction.', 'Lily Tomlin');
class MoviePart {
    constructor(role, speaking) {
        this.role = role;
        this.speaking = speaking;
    }
}
const part = new MoviePart('Miranda Priestly', true);
part.role; // Type: string
// class IncorrectExtension implements ActingCredit<string> {
//   role: boolean;
// }
/***********************************************************/
/***********************/
/*** Method Generics ***/
/***********************/
/***********************************************************/
class CreatePairFactory {
    constructor(key) {
        this.key = key;
    }
    createPair(value) {
        return { key: this.key, value };
    }
}
// Type: CreatePairFactory<string>
const factory = new CreatePairFactory('role');
// Type: { key: string, value: number }
const numberPair = factory.createPair(10);
// Type: { key: string, value: string }
const stringPair = factory.createPair('Sophie');
/***********************************************************/
/*****************************/
/*** Static Class Generics ***/
/*****************************/
/***********************************************************/
class BothLogger {
    instanceLog(value) {
        console.log(value);
        return value;
    }
    static staticLog(value) {
        // let fromInstance: OnInstance;
        console.log(value);
        return value;
    }
}
const logger = new BothLogger();
logger.instanceLog([1, 2, 3]); // Type: number[]
// Inferred OnStatic type argument: boolean[]
BothLogger.staticLog([false, true]);
// Explicit OnStatic type argument: string
BothLogger.staticLog("You can't change the music of your soul.");
