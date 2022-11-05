const { dividirAgruparArrays } = require('./dividir-agrupar-arrays.js');

test('Deve retornar um array', () => {
    expect(Array.isArray(dividirAgruparArrays([1,2,3,4], 2))).toBe(true);
});
test('Deve retornar array agrupado de 2 em 2', () => {
    expect(dividirAgruparArrays(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]]);
});
test('Deve retornar array agrupado de 2 em 2', () => {
    expect(dividirAgruparArrays(["a", "b", "c", "d", "e"], 2)).toEqual([["a", "b"], ["c", "d"], ["e"]]);
});
test('Deve retornar array agrupado de 3 em 3', () => {
    expect(dividirAgruparArrays([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]);
});
test('Deve retornar array agrupado de 3 em 3', () => {
    expect(dividirAgruparArrays([0, 1, 2, 3, 4, 5, 6], 3)).toEqual([[0, 1, 2], [3, 4, 5], [6]]);
});