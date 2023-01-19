/*******************************************************/
class Robot {
	// Properties of Robot class
	name: string;
	abilities: string[];
	power: number;

	// Class Constructor
	constructor(name: string, abilities: string[]) {
		this.name = name;
		this.abilities = abilities;
		this.power = 100;
	}

	// Methods on the class
	announce() {
		console.log("Greetings. I am " + this.name + ".");

		for (var i = 0; i < this.abilities.length; i += 1) {
			console.log("I am able to " + this.abilities[i] + ".");
		}
	}
	charge(amount: number) {
		if (this.power < 100) {
			this.power = Math.min(this.power + amount, 100);
			console.log("Recharged power supplies to " + this.power + ".");
		}

		if (this.power === 100) {
			console.log("I am at optimal operational capacity.");
		}
	}
	move(distance: number) {
		if (this.power < distance) {
			console.log("I do not have enough power to move " + distance + " units.");
		} else {
			console.log("Moving " + distance + " units.");
			this.power -= distance;
		}
	}
}

/*******************************************************/

class Humanoid extends Robot {
	// Properties of Humanoid class
	catchphrase: string;

	// Class Constructor
	constructor(name: string, abilities: string[], catchphrase: string) {
		super(name, abilities);
		this.catchphrase = catchphrase;
	}

	// Methods
	announce() {
		super.announce();
		console.log(" > " + this.catchphrase + " <");
	}
}

/*******************************************************/
module.exports.Humanoid = Humanoid;
module.exports.Robot = Robot;
