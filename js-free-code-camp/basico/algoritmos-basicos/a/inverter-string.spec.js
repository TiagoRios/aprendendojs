const { inverterString } = require('./inverter-string.js');

test('Deve retornar uma string', () => {
    expect(typeof inverterString('asdf')).toBe('string');
});
test('Deve inverter a string', () => {
    expect(inverterString('hello world')).toBe('dlrow olleh');
});