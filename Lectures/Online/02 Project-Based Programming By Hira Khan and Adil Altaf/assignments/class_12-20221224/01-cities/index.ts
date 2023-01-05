// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.

export type Coordinate = [number, number, number];
export interface Coordinates {
	north: Coordinate;
	west: Coordinate;
}

export interface City {
	coordinates: Coordinates;
	name: string;
	catchphrase?: string;
}

export function describeCity(city: City) {
	const lines = [`${city.name}, New York`];
	if (city.catchphrase) {
		lines.push(`* "${city.catchphrase}"`);
	}
	lines.push(
		[
			`* Located at`,
			`${describeCoordinate(city.coordinates.north)}N`,
			`${describeCoordinate(city.coordinates.west)}W`,
		].join(" ")
	);

	return lines.join("\n");
}

function describeUnit(unit: number) {
	return unit.toString().padStart(2, "0");
}

function describeCoordinate(coordinate: Coordinate) {
	return [
		`${describeUnit(coordinate[0])}°`,
		`${describeUnit(coordinate[1])}'`,
		`${describeUnit(coordinate[2])}"`,
	].join("");
}
