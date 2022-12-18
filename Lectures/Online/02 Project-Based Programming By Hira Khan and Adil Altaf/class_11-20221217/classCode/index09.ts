const nicknames: string[] = ['Imran', 'Alexander'];
const numbers: number[] = [1, 2];

let combined = [...nicknames];
console.log(combined);

let combined1 = [...nicknames, ...numbers];
console.log(combined1);

export {};
