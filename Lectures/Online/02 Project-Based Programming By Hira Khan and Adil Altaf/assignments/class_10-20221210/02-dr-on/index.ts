// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

type paramFunction = (param: string) => string;

export function createAdvancedCipher(
	onVowel: paramFunction,
	onConsonant: paramFunction,
	onPunctuation: paramFunction
) {
	return (text: string) => {
		let r = "";
		for (let char of text) {
			let cipher = /[aeiou]/i.test(char)
				? onVowel
				: /[bcdfghjklmnpqrstvwxyz]/i.test(char)
				? onConsonant
				: onPunctuation;
			r += cipher(char);
		}
		return r;
	};
}
