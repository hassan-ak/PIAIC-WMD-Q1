// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.

export function createCipher(cipher: (param: string) => string) {
	return (text: string) => {
		let r = "";
		for (let char of text) {
			r += cipher(char);
		}
		return r;
	};
}
