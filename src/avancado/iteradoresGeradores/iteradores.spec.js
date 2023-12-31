import {
    iteradorArray,
    meuObjetoIteravel,
    somarNumerosArray,
} from "./iteradores";

describe('iterador criado para fazer iteração em elementos de array', () => {
    let iteracao;

    beforeEach(() => {
        iteracao = iteradorArray(['a', 'b']);
    })

    test('Deve retornar o valor do primeiro elemento', () => {
        expect(iteracao.next().valor).toBe('a');
    });

    test('Deve retornar o valor do segundo elemento', () => {
        iteracao.next(); // 'a'
        expect(iteracao.next().valor).toBe('b');
    });

    test('Deve chegar ao fim da iteração e não possuir mais elementos para iterar', () => {
        iteracao.next(); // 'a'
        iteracao.next(); // 'b'
        expect(iteracao.next().feito).toBe(true);
    });

    test('Não deve ter chegado ao fim da iteração', () => {
        expect(iteracao.next().feito).toBe(false);
    });
});

describe('Objeto iterével com propriedade do tipo Symbol.iterator', () => {
    test('Deve iterar sobre objeto iterável', () => {
        expect([...meuObjetoIteravel]).toHaveLength(3);
    });
});

describe('Iteraveis embutidos', () => {
    test('Deve iterar em array', () => {
        expect([...'abcdefghij']).toHaveLength(10);
    });

    test('Deve iterar função que utiliza Laço for', () => {
        expect(somarNumerosArray([1, 8, 9])).toBe(18);
    });
});
