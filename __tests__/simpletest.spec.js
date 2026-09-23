//simpletest.spec.js
const { convertToUpperCase } = require('../main.js');

function sum(a, b) {
    return a + b;
}
// Jest Tests
describe('The First Test Suite', () => {
    
    test('First Test', () => {
        expect(sum(1, 2)).toBe(3);
    })
// test if the js actually changes the text to only uppercase letters
    test('New text is converted to uppercase', () => {
        const inputText = 'femton';
        const newText = convertToUpperCase(inputText);

        expect(newText).toBe('FEMTON');
    });
});
