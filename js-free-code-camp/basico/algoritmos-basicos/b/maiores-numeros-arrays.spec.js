const { maioresNumerosArrays, largestOfFourES6 } = require('./maiores-numeros-arrays.js');

const arr1 = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
const arr2 = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
const arr3 = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]];
const arr4 = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];

test('Deve retornar um array', () => {
    expect(Array.isArray(maioresNumerosArrays(arr1))).toBe(true);
});
test('Deve retornar maiores numeros no array 1', () => {
    expect(maioresNumerosArrays(arr1)).toEqual([5, 27, 39, 1001]);
});
test('Deve retornar maiores numeros no array 2', () => {
    expect(maioresNumerosArrays(arr2)).toEqual([27, 5, 39, 1001]);
});
test('Deve retornar um array', () => {
    expect(maioresNumerosArrays(arr3)).toEqual([9, 35, 97, 1000000]);
});
test('Deve retornar um array', () => {
    expect(maioresNumerosArrays(arr4)).toEqual([25, 48, 21, -3]);
});
test('largestOfFourES6()', () => {
    expect(largestOfFourES6(arr4)).toEqual([25, 48, 21, -3]);
});
