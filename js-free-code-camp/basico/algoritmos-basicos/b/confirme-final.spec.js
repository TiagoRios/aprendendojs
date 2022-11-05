const { confirmeFinal } = require('./confirme-final');

test('Deve retornar um numero', () => {
    expect(typeof confirmeFinal('a')).toBe('boolean');
});
test('Deve retornar true', () => {
    expect(confirmeFinal('algo', 'go')).toBe(true);
});
test('Deve retornar true', () => {
    expect(confirmeFinal('alguma outra coisa', 'sa')).toBe(true);
});
test('Deve retornar false', () => {
    expect(confirmeFinal('algo', 'be')).toBe(false);
});
test('Deve retornar false', () => {
    expect(confirmeFinal('alguma outra coisa', 'is')).toBe(false);
});
