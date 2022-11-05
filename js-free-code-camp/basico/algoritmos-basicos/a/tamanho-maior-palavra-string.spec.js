const { encontrarTamanhoMaiorPalavraString } = require('./tamanho-maior-palavra-string.js');
const texto1 = 'The quick brown fox jumped over the lazy dog';
const texto2 = 'Qual tamanho da maior palavra nesse texto';
const texto3 = 'What if we try a super-long word such as otorhinolaryngology';

test('Deve retornar um numero', () => {
    expect(typeof encontrarTamanhoMaiorPalavraString(texto1)).toBe('number');
    expect(typeof encontrarTamanhoMaiorPalavraString(texto2)).toBe('number');
});
test('Deve retornar 6', () => {
    expect(encontrarTamanhoMaiorPalavraString(texto1)).toBe(6);
});
test('Deve retornar 7', () => {
    expect(encontrarTamanhoMaiorPalavraString(texto2)).toBe(7);
});
test('Deve retornar 19', () => {
    expect(encontrarTamanhoMaiorPalavraString(texto3)).toBe(19);
});
