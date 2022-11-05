const { identificarMutacoes } = require('./identificar-mutacoes.js');

describe('Deve retornar true', () => {
    test('Se todas as letras da 2ª string estiverem presentes na 1ª', () => {
        expect(identificarMutacoes(["hello", "hello"])).toEqual(true);
    });
    test('Independente de letras maiúsculas e minúsculas', () => {
        expect(identificarMutacoes(["hello", "HeLlO"])).toEqual(true);
    });
    test('independente da ordem', () => {
        expect(identificarMutacoes(["hello", "olLhe"])).toEqual(true);
    });
    test('String com tamanho menor', () => {
        expect(identificarMutacoes(["hello", "olE"])).toEqual(true);
    });
    test('2ª string com letras repetidas', () => {
        expect(identificarMutacoes(["hello", "HhEeLlOo"])).toEqual(true);
    });
    test('String com numeros', () => {
        expect(identificarMutacoes(["54337539", "94"])).toEqual(true);
    });
    test('String caracteres diversos', () => {
        expect(identificarMutacoes(["!@#$%%¨&*(_)+={}[]^~´`.;,", "(^_^)"])).toEqual(true);
    });
});

describe('Deve retornar false', () => {
    test('Se todas as letras da 2ª string não estiverem presentes na 1ª', () => {
        expect(identificarMutacoes(["hello", "R3IIÓ"])).toEqual(false);
    }); 
    test('Ao menos um caracter da 2ª string não estiver na 1ª', () => {
        expect(identificarMutacoes(["hello", "hellx"])).toEqual(false);
    });
    test('1ª string não possuir todos os caracteres ', () => {
        expect(identificarMutacoes(["hello", "olEx"])).toEqual(false);
    });
    test('String com numeros', () => {
        expect(identificarMutacoes(["012345678", "987"])).toEqual(false);
    });
    test('String caracteres diversos', () => {
        expect(identificarMutacoes(["!@#$%%¨&*+={}[](^,ª)^~´`.;,", "(^_^)"])).toEqual(false);
    });
});