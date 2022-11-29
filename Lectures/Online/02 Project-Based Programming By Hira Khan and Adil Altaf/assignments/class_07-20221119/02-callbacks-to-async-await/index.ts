/*******************************************************/
async function checkEmotion(knownEmotions: any, emotion: any) {
	await new Promise((resolve) => {
		return setTimeout(resolve, 1000);
	});
	return knownEmotions.has(emotion);
}

/*******************************************************/
async function speak(knownEmotions: any, newEmotion: any, phrase: any) {
	if (!(await checkEmotion(knownEmotions, newEmotion))) {
		throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
	}

	return `"${phrase}" (${newEmotion})`;
}

/*******************************************************/
module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
