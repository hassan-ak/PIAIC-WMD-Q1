// Please correct any type annotation problems here! ✨
// --- added undefined as union type
let arugula: number | undefined;
let dressing: string;
// --- added undefined as union type
let lettuce: number | undefined;
// --- changed type from string to Date
let mealDate: Date;

arugula = 2;
dressing = "honey dijon";
// *** TS2322: Type 'undefined' is not assignable to type 'number'.
lettuce = undefined;
// *** TS2322: Type 'Date' is not assignable to type 'string'.
mealDate = new Date("September 13, 2021");

console.log(`We're starting on ${mealDate} with a dressing of ${dressing}.`);

if (arugula) {
	console.log(`There are ${arugula} arugula serving(s) for this first meal.`);
}

if (lettuce) {
	console.log(`There are ${arugula} arugula serving(s) for this first meal.`);
}

// *** TS2322: Type 'undefined' is not assignable to type 'number'.
arugula = undefined;
dressing = "balsamic vinaigrette";
lettuce = 1;
// *** TS2322: Type 'Date' is not assignable to type 'string'.
mealDate = new Date("March 13, 2022");

console.log(`Next up, a ${mealDate} meal with a dressing of ${dressing}.`);

if (arugula) {
	console.log(`This time, there are ${arugula} arugula serving(s).`);
}

if (lettuce) {
	console.log(`This time, there are ${arugula} arugula serving(s).`);
}

export {};
