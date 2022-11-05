const { removerFalsos } = require('./remover-falsos.js');

let arrComTrue = ["a", "b", "c"];
let arrComFalse = [false, null, 0, NaN, undefined, ""];
let arrComTrueFalse = [7, "ate", "", false, 9];
let arrComTrueFalse2 = [null, NaN, 1, 2, undefined];

test('Deve retornar um array', () => {
    expect(Array.isArray(removerFalsos(arrComTrueFalse))).toBe(true);
});
test('Deve retornar array vazio elementos arrays todos falsos', () => {
    expect(removerFalsos(arrComFalse)).toEqual([]);
});
test('Deve retornar o array com os mesmos elementos do array original', () => {
    expect(removerFalsos(arrComTrue)).toEqual(arrComTrue);
});
test('Deve retornar array sem elementos falsos', () => {
    expect(removerFalsos(arrComTrueFalse)).toEqual([7, "ate", 9]);
});
test('Deve retornar array sem elementos falsos', () => {
    expect(removerFalsos(arrComTrueFalse2)).toEqual([1, 2]);
});
test('Array original deve permanecer o mesmo', () => {
    expect(arrComTrueFalse).toEqual(arrComTrueFalse);
});