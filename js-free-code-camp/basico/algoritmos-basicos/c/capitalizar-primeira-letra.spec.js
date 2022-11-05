const { capitalizarPrimeiraLetraPalavras } = require('./capitalizar-primeira-letra.js');

test('Deve retornar uma string', () => {
    expect(typeof capitalizarPrimeiraLetraPalavras('asdf')).toBe('string');
});
test('Deve retornar uma string com letras capitalizadas', () => {
    expect(capitalizarPrimeiraLetraPalavras('alGum teXTo doiDo')).toBe('Algum Texto Doido');
});
test('Deve retornar uma string com letras capitalizadas', () => {
    expect(capitalizarPrimeiraLetraPalavras('isso é assim')).toBe('Isso É Assim');
});