const inputText = document.querySelector('#inputText');
const convertButton = document.querySelector('#convertButton');

convertButton.addEventListener('click', () => {
	console.log(inputText.value.toUpperCase());
});
