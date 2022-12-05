// Write your types here! ✨

// --- Define Types
type CurrentBase = {
	name: string;
	proximity: number;
	treasure?: string;
};

type Clearing = CurrentBase & {
	through?: Current;
	type: "clearing";
};

type Path = CurrentBase & {
	shortcut?: Current;
	through: Current;
	type: "path";
};

type Town = CurrentBase & {
	around?: Current;
	through?: Current;
	type: "town";
};

type Stream = CurrentBase & {
	type: "stream";
};

type End = Stream & {
	area: "end";
	upstream: Current;
};

type Begin = Stream & {
	area: "begin";
	downstream: Current;
};

type Middle = Stream & {
	area: "middle";
	downstream: Current;
	upstream: Current;
};

type StreamF = Begin | End | Middle;

type Current = Clearing | Town | Path | StreamF;

let current: Current | undefined = {
	name: "Woesong Bridge",
	proximity: 100,
	type: "path",
	through: {
		name: "Yavina River",
		proximity: 50,
		type: "stream",
		area: "middle",
		downstream: {
			name: "Oxenfurt Gate",
			proximity: 40,
			type: "town",
			around: {
				name: "White Orchard Creek",
				proximity: 25,
				type: "stream",
				area: "end",
				upstream: {
					name: "Vizima",
					proximity: 30,
					type: "clearing",
				},
			},
			through: {
				name: "Vergen Tunnel",
				proximity: 20,
				type: "path",
				shortcut: {
					proximity: 30,
					name: "Crow's Perch",
					type: "town",
				},
				through: {
					name: "Founders Stream",
					proximity: 25,
					type: "stream",
					area: "begin",
					downstream: {
						name: "Gate of the Hierarch",
						proximity: 10,
						type: "town",
						through: {
							name: "Reuven's Treasure",
							proximity: 0,
							type: "clearing",
							treasure: "rare playing cards",
						},
					},
				},
			},
		},
		upstream: {
			name: "Merchants' Trail",
			proximity: 65,
			type: "path",
			through: {
				name: "Beauclair",
				proximity: 70,
				type: "town",
			},
		},
	},
};

let treasure;

while (current) {
	console.log(`At: ${current.name}`);

	switch (current.type) {
		case "clearing":
			current = current.through;
			break;

		case "path":
			current =
				current.shortcut &&
				current.shortcut.proximity < current.through.proximity
					? current.shortcut
					: current.through;
			break;

		case "town":
			if (!current.around) {
				current = current.through;
			} else if (!current.through) {
				current = current.around;
			} else {
				current =
					current.around.proximity < current.through.proximity
						? current.around
						: current.through;
			}
			break;

		case "stream":
			switch (current.area) {
				case "begin":
					current = current.downstream;
					break;
				case "end":
					current = current.upstream;
					break;
				case "middle":
					current =
						current.downstream.proximity < current.upstream.proximity
							? current.downstream
							: current.upstream;
					break;
			}
	}

	if (!current) {
		console.log("Hmm. Dead end.");
	} else if (current.treasure) {
		treasure = current.treasure;
		break;
	}
}

if (treasure) {
	console.log(`This will do nicely: ${treasure}.`);
} else {
	console.log("Nothing going.");
}

/*********************************************************/
// type CurrentBase = {
// 	name: string;
// 	proximity: number;
// 	type: string;
// };
// type CurrentThroughBase = {
// 	area: string;
// 	name: string;
// 	proximity: number;
// 	type: string;
// };
// type CurrentThroughDownstreamBase = {
// 	name: string;
// 	proximity: number;
// 	type: string;
// };
// type CurrentThroughDownstreamAroundBase = {
// 	area: string;
// 	name: string;
// 	proximity: number;
// 	type: string;
// };
// type CurrentThroughDownstreamAroundUpstreamBase = {
// 	name: string;
// 	proximity: number;
// 	type: string;
// };
// type CurrentThroughDownstreamThroughBase = {
// 	name: string;
// 	proximity: number;
// 	type: string;
// };
// type CurrentThroughDownstreamThroughShortcutBase = {
// 	name: string;
// 	proximity: number;
// 	type: string;
// };
// type CurrentThroughDownstreamThroughThroughBase = {
// 	area: string;
// 	name: string;
// 	proximity: number;
// 	type: string;
// };
// type CurrentThroughDownstreamThroughThroughDownstreamBase = {
// 	name: string;
// 	proximity: number;
// 	type: string;
// };
// type CurrentThroughDownstreamThroughThroughDownstreamThroughBase = {
// 	name: string;
// 	proximity: number;
// 	type: string;
// 	treasure: string;
// };
// type CurrentThroughUpstreamBase = {
// 	name: string;
// 	proximity: number;
// 	type: string;
// };
// type CurrentThroughUpstreamThroughBase = {
// 	name: string;
// 	proximity: number;
// 	type: string;
// };

/*********************************************************/
// type PureBAse = {
// 	name: string;
// 	proximity: number;
// 	type: string;
// };

// type PureBaseArea = PureBAse & {
// 	area: string;
// };

// type PureBasetreasure = PureBAse & {
// 	treasure: string;
// };
// type Current = PureBAse & {
// 	through?: PureBaseArea & {
// 		downstream?: PureBAse & {
// 			around: PureBaseArea & {
// 				upstream: PureBAse;
// 			};
// 			through: PureBAse & {
// 				shortcut: PureBAse;
// 				through: PureBaseArea & {
// 					downstream: PureBAse & {
// 						through: PureBasetreasure;
// 					};
// 				};
// 			};
// 		};
// 		upstream: PureBAse & {
// 			through: PureBAse;
// 		};
// 	};
// };
/*********************************************************/
