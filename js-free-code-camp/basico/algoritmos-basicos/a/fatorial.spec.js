const { fatorial } = require('./fatorial.js');

test('Deve retornar um numero', () => {
    expect(typeof fatorial(3)).toBe('number');
});
test('Deve retornar fatorial de 0(zero)', () => {
    expect(fatorial(0)).toBe(1);
});
test('Deve retornar fatorial de 5!', () => {
    expect(fatorial(5)).toBe(120);
});
test('Deve retornar fatorial de 10!', () => {
    expect(fatorial(10)).toBe(3628800);
});
test('Deve retornar fatorial de 20!', () => {
    expect(fatorial(20)).toBe(2432902008176640000);
});