export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let availableResource: undefined | "food" | "water";
	let day: number = 1;
	let food: number = 5;
	let water: number = 5;

	for (day; day <= 7; day++) {
		let diceRoll: number = Math.floor(Math.random() * 6) + 1;
		switch (diceRoll) {
			case 1:
				availableResource = "food";
				break;
			case 2:
				availableResource = "water";
				break;
			default:
				switch (availableResource) {
					case "food":
						food += diceRoll;
						availableResource = undefined;
						break;
					case "water":
						water += diceRoll;
						availableResource = undefined;
						break;
					default:
						availableResource = diceRoll % 2 === 0 ? "food" : "water";
						break;
				}
				break;
		}

		food -= 1;
		water -= 1;

		if (food === 0 || water === 0) {
			return false;
		}
	}
	return true;
}
