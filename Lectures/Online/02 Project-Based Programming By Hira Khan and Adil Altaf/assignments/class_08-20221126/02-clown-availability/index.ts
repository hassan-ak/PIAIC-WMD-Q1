// Note: I'm planning on inviting 20 guests in total.
// Some clowns can only handle a certain number of guests.
// // *** Type 'number' is not assignable to type 'boolean'.ts(2322)
// // --- change type from boolean to number
let guestCount: number = 20;
// // --- set initial count to 0
let clownsCount = 0;

let krustyAvailability = true;
let ronaldAvailability = true;
let pennywiseAvailability = true;

let matchingsDescription: any = "";
let lastClown;

do {
	clownsCount += 1;

	// Krusty says: I had a one-man show on Broadway...
	// That's who showed up, one man!
	if (krustyAvailability) {
		// // *** The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts(2362)
		guestCount -= 10;
		krustyAvailability = false;
		matchingsDescription += "Bozo will handle the first ten guests.\n";
		lastClown = "Krusty";
		continue;
	}

	// Ronald says: McDonald's donated a large set of computers to a school...
	// They were all Big Macs!
	if (ronaldAvailability) {
		// // *** The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts(2362)
		guestCount -= 5;
		ronaldAvailability = false;
		matchingsDescription += "Krusty will handle the next five guests.\n";
		lastClown = "Ronald";
		continue;
	}

	// Pennywise asks: what's a sewer's favorite data type?
	// Pennywise answers: Floats!
	if (pennywiseAvailability) {
		pennywiseAvailability = false;
		matchingsDescription += "Pennywise w̺̞̠i̢͇͙l͇̞l͇͍̘ c͓͕̝o̡̠̞n̼̝s̡̞͎u͉̝͔m͚̪̞e̢͚̝ y̴̡̡͕͌̿́ó̸̢͇͚̾̕u̸̡̡͎͒͛r̸͕͓͖̈́͆͒ s̵̺̘̪͒͆̓o̵̡͚̟̽͆̚u̵̠͖̓͐͝l̸͓̘͇̐̓̚s̸̺͎̽̈́͆.";
		lastClown = "Pennywise";
		continue;
	}

	throw new Error(`Oh no! We're out of clowns!`);
	// // *** Operator '>' cannot be applied to types 'boolean' and 'number'.ts(2365)
} while (guestCount > 0);

// // *** Operator '>' cannot be applied to types 'string' and 'number'.ts(2365)
if (clownsCount > 2) {
	console.log("We've got a lot of clowns coming!");
}

if (matchingsDescription.length()) {
	console.log(`There will be ${clownsCount} clowns!\n`);
	// // *** Cannot find name 'clownsole'. Did you mean 'console'?ts(2552)
	// // --- use console
	console.log(matchingsDescription);
	console.log(`The last clown is: ${lastClown.toUpperCase()}!`);
} else {
	console.log("Nobody gets a clown. Terrible party. Goodbye.");
}

export {};
