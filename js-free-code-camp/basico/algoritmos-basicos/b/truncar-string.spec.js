const { truncarString } = require('./truncar-string.js');

const string1 = "A-tisket a-tasket A green and yellow basket";
const string2 = "Peter Piper picked a peck of pickled peppers";

test('Deve retornar uma string', () => {
    expect(typeof truncarString('asdf', 2)).toBe('string');
});
test('Deve truncar uma string quando maior que 8 letras', () => {
    expect(truncarString(string1, 8)).toBe('A-tisket...');
});
test('Deve truncar uma string quando maior que 11 letras', () => {
    expect(truncarString(string2, 11)).toBe('Peter Piper...');
});
test('Deve retonar a string sem truncar com lenght iguais', () => {
    expect(truncarString(string1, string1.length)).toBe(string1);
});
test('Deve retonar a string sem truncar quando lenght for maior', () => {
    expect(truncarString(string1, (string1.length + 3))).toBe(string1);
});
test('Deve truncar uma string maior que 1 letra', () => {
    expect(truncarString("A-", 1)).toBe('A...');
});
test('Deve truncar uma string', () => {
    expect(truncarString("Absolutely Longer", 2)).toBe('Ab...');
});