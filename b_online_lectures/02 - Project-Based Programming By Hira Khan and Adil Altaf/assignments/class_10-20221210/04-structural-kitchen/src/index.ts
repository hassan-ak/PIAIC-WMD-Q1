// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.

type Supplies = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

type Success = { succeeded: false };
type Fail = {
	succeeded: true;
	newStock: Supplies;
};

type Recipe = (obj: Supplies) => Success | Fail;

type Cleaner = (dirt: number, time?: number) => number;

type Supplier = (expense: number) => Supplies;

type CreateKitchenResponse = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (recipe: Recipe) => boolean;
};

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): CreateKitchenResponse {
	let dirt = 0;
	let stock: Supplies = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};
	return {
		announce() {
			return `I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`;
		},
		clean(time) {
			dirt = cleaner(dirt, time);
		},
		purchase(expense) {
			if (budget >= expense) {
				stock.breads += supplier(expense).breads;
				stock.fruits += supplier(expense).fruits;
				stock.sauces += supplier(expense).sauces;
				stock.vegetables += supplier(expense).vegetables;
				budget -= expense;
				return true;
			}
			return false;
		},
		prepare(recipe: Recipe) {
			if (dirt < 100) {
				const result = recipe(stock);
				dirt += 1;
				if (result.succeeded) {
					stock = result.newStock;
				}

				return result.succeeded;
			}
			return false;
		},
	};
}
