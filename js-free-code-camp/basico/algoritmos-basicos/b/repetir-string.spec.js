const { repetirStringNVezes } = require('./repetir-string.js');

test('Deve retornar uma string', () => {
    expect(typeof repetirStringNVezes('a', 2)).toBe('string');
});
test('Deve retornar string vazia', () => {
    expect(repetirStringNVezes('n', -2)).toBe('');
});
test('Deve retornar string vazia', () => {
    expect(repetirStringNVezes('n', 0)).toBe('');
});
test('Deve repetir a string 1 vez', () => {
    expect(repetirStringNVezes('a1', 1)).toBe('a1');
});
test('Deve repetir a string 2 vezes', () => {
    expect(repetirStringNVezes('a', 2)).toBe('aa');
});
test('Deve repetir a string 3 vezes', () => {
    expect(repetirStringNVezes('*1**2', 3)).toBe('*1**2*1**2*1**2');
});