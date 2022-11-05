const { verdadeiroFalso } = require('./verdadeiro-falso.js');

test('Deve retornar true', () => {
    expect(verdadeiroFalso(true)).toBe(true);
});
test('Deve retornar true', () => {
    expect(verdadeiroFalso(false)).toBe(true);
});
test('Deve retornar false', () => {
    expect(verdadeiroFalso([].slice())).toBe(false);
});
test('Deve retornar false', () => {
    expect(verdadeiroFalso({'a': 1})).toBe(false);
});
test('Deve retornar false', () => {
    expect(verdadeiroFalso(1)).toBe(false);
});
test('Deve retornar false', () => {
    expect(verdadeiroFalso(NaN)).toBe(false);
});
test('Deve retornar false', () => {
    expect(verdadeiroFalso('a')).toBe(false);
});
test('Deve retornar false', () => {
    expect(verdadeiroFalso('true')).toBe(false);
});
test('Deve retornar false', () => {
    expect(verdadeiroFalso('false')).toBe(false);
});