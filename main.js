function convertToUpperCase(inputText) {
	return inputText.toUpperCase();
}

if (typeof module !== 'undefined') {
	module.exports = { convertToUpperCase };
}

if (typeof document !== 'undefined') {
	const inputElement = document.querySelector('#inputText');
	const convertButton = document.querySelector('#convertButton');

	convertButton.addEventListener('click', () => {
		const newText = convertToUpperCase(inputElement.value);
		console.log(newText);
		return newText;
	});
}
