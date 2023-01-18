/*
    # Chapter 10. Generics
*/

/***********************************************************/

/*---------------------*/
/*-- Generic Classes --*/
/*---------------------*/

/***********************************************************/
class Secret<Key, Value> {
  key: Key;
  value: Value;
  constructor(key: Key, value: Value) {
    this.key = key;
    this.value = value;
  }
  getValue(key: Key): Value | undefined {
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
class CurriedCallback<Input> {
  #callback: (input: Input) => void;
  constructor(callback: (input: Input) => void) {
    this.#callback = (input: Input) => {
      console.log('Input:', input);
      callback(input);
    };
  }
  call(input: Input) {
    this.#callback(input);
  }
}
// Type: CurriedCallback<string>
new CurriedCallback((input: string) => {
  console.log(input.length);
});
// Type: CurriedCallback<unknown>
// new CurriedCallback((input) => {
//   console.log(input.length);
// });

/***********************************************************/
// Type: CurriedCallback<string>
new CurriedCallback<string>((input) => {
  console.log(input.length);
});
// new CurriedCallback<string>((input: boolean) => {});

/***********************************************************/

/*********************************/
/*** Extending Generic Classes ***/
/*********************************/

/***********************************************************/
class Quote<T> {
  lines: T;
  constructor(lines: T) {
    this.lines = lines;
  }
}
class SpokenQuote extends Quote<string[]> {
  speak() {
    console.log(this.lines.join('\n'));
  }
}
new Quote('The only real failure is the failure to try.').lines;
new Quote([4, 8, 15, 16, 23, 42]).lines; // Type: number[]
new SpokenQuote(['Greed is so destructive.', 'It destroys everything']).lines; // Type: string[]
// new SpokenQuote([4, 8, 15, 16, 23, 42]);

/***********************************************************/
class AttributedQuote<Value> extends Quote<Value> {
  speaker: string;
  constructor(value: Value, speaker: string) {
    super(value);
    this.speaker = speaker;
  }
}
new AttributedQuote(
  'The road to success is always under construction.',
  'Lily Tomlin'
);

/***********************************************************/

/***************************************/
/*** Implementing Generic Interfaces ***/
/***************************************/

/***********************************************************/
interface ActingCredit<Role> {
  role: Role;
}
class MoviePart implements ActingCredit<string> {
  role: string;
  speaking: boolean;
  constructor(role: string, speaking: boolean) {
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
class CreatePairFactory<Key> {
  key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  createPair<Value>(value: Value) {
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
class BothLogger<OnInstance> {
  instanceLog(value: OnInstance) {
    console.log(value);
    return value;
  }
  static staticLog<OnStatic>(value: OnStatic) {
    // let fromInstance: OnInstance;
    console.log(value);
    return value;
  }
}
const logger = new BothLogger<number[]>();
logger.instanceLog([1, 2, 3]); // Type: number[]
// Inferred OnStatic type argument: boolean[]
BothLogger.staticLog([false, true]);
// Explicit OnStatic type argument: string
BothLogger.staticLog<string>("You can't change the music of your soul.");

/***********************************************************/

export {};
