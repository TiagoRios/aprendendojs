const { encontrarElemento } = require('./encontrar-elemento');

function par(numero) {
    return numero % 2 === 0;
}
function impar(numero) {
    return numero % 2 !== 0;
}

test('Deve retornar undefined', () => {
    expect(typeof encontrarElemento('asdf', par)).toBe('undefined');
});
test('Deve retornar uma string', () => {
    expect(typeof encontrarElemento('2', par)).toBe('string');
});
test('Deve retornar um numero', () => {
    expect(typeof encontrarElemento([2], par)).toBe('number');
});
test('Deve retornar 8', () => {
    expect(encontrarElemento([1, 3, 5, 8, 9, 10], par)).toBe(8);
});
test('Deve retornar undefined', () => {
    expect(encontrarElemento([1, 3, 5, 9, 11], par)).toBe(undefined);
});
test('Deve retornar 1', () => {
    expect(encontrarElemento([1, 3, 5, 9, 11], impar)).toBe(1);
});
test('Deve retornar undefined', () => {
    expect(encontrarElemento([10, 30, 50, 90, 110], impar)).toBe(undefined);
});