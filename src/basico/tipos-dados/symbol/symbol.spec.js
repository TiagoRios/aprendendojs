const userMock = require('./userMock');
const util = require('./symbolUtil');

describe('Básico sobre Symbols', () => {
    test('os simbolos são únicos', () => {
        expect(util.symbolLocal == util.symbolLocalMesmaDescricao)
            .toBe(false);
    })

    test('deve retornar a descrição do Symbol', () => {
        expect(util.symbolLocal.description)
            .toBe(util.DESCRICAO);
    })

    test('deve retornar o toString() do Symbol', () => {
        expect(util.symbolLocal.toString())
            .toBe(`Symbol(${util.DESCRICAO})`);
    })

    test('Erro ao converter Symbol para string', () => {
        expect(() => "" + util.symbolLocal)
            .toThrow(util.MSG_ERRO_CONVERSAO);
    })

    test('Object.assign({}, obj) deve copiar as chaves Symbol do objeto', () => {
        let objetoCopiado = Object.assign({}, userMock);

        expect(objetoCopiado[util.symbolLocal])
            .toBe(userMock[util.symbolLocal]);
    })
})

describe('Ignora chaves Symbol em objetos', () => {
    test('for..in deve ignorar chaves Symbol', () => {
        let arr = [];

        for (let key in userMock) {
            arr.push(key);
        }

        expect(arr.length).toBe(util.CHAVES_NAO_SIMBOLICAS);
    })

    test(' Object.keys(obj) deve ignorar chaves Symbol', () => {
        let arr = [];

        const chavesObjeto = Object.keys(userMock);

        for (let i = 0; i < chavesObjeto.length; i++) {
            arr.push(chavesObjeto[i]);
        }

        expect(arr.length).toBe(util.CHAVES_NAO_SIMBOLICAS);
    })
})

describe('Symbol não são totalmente inacessíveis', () => {
    test(`Object.getOwnPropertySymbols(obj) deve acessar chaves Symbol escondidas`, () => {
        expect(Object.getOwnPropertySymbols(userMock).length)
            .toBe(util.CHAVES_SIMBOLICAS);
    })

    test('Reflect.ownKeys(userMock) deve acessar chaves Symbol escondidas', () => {
        const totalPropriedades = util.CHAVES_NAO_SIMBOLICAS + util.CHAVES_SIMBOLICAS;

        expect(Reflect.ownKeys(userMock).length)
            .toBe(totalPropriedades);
    })
})

describe('Symbol globais', () => {
    test('Symbols globais são compartilhados', () => {
        const symbolGlobalRecuperado = Symbol.for(util.DESCRICAO_GLOBAL); // busca no registro

        expect(util.symbolGlobal === symbolGlobalRecuperado).toBe(true);
    })

    test('Symbol.keyFor() deve retornar a descrição do Symbol global', () => {
        expect(Symbol.keyFor(util.symbolGlobal))
            .toBe(util.DESCRICAO_GLOBAL);
    })

    test('Symbols locais são indefinidos em Symbol.keyFor(symbolLocal)', () => {
        expect(Symbol.keyFor(util.symbolLocal))
            .toBe(undefined);
    })
})