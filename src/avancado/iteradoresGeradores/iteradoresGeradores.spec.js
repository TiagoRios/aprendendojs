/* 
Somente copiado para fazer testes e verificar o funcionamento.

Aprender a usar: 
    yield
    yield*
    function*
*/
const fazerIteracao = (array) => {
    let proximoIndex = 0;
    return {
        next: () => {
            return proximoIndex < array.length ?
                { valor: array[proximoIndex++], feito: false } :
                { feito: true };
        }
    }
};

let meuIteravel = {};
meuIteravel[Symbol.iterator] = function* () {
    yield 3;
    yield 2;
    yield 1;
};

function* gen() {
    yield* ["a", "b", "c"]
}

const IteravelEmbutidoLacoForSomaNumerosArray = (array) => {
    let contador = 0;
    for (let value of array) {
        contador += value;
    }
    return contador;
}

//generator
function* idMaker() {
    let index = 0;
    while (true)
        yield index++;
}

function* fibonacci() {
    let fn = 1;
    let fn2 = 1;
    while (true) {
        let current = fn2;
        fn2 = fn;
        fn = fn + current;
        let reset = yield current;
        if (reset) {
            fn = 1;
            fn2 = 1;
        }
    }
}

describe('iteradores', () => {
    test('iterador', () => {
        let it = fazerIteracao(['a', 'b']);
        expect(it.next().feito).toBe(false);
        expect(it.next().valor).toBe('b');
        expect(it.next().feito).toBe(true);
    });
    //Usar somente em casos específicos. 
    test('iterável', () => {
        expect([...meuIteravel]).toHaveLength(3);
    });
    test('iterável embutido', () => {
        expect(IteravelEmbutidoLacoForSomaNumerosArray([1, 8, 9])).toBe(18);
        expect([...'abcdefghij']).toHaveLength(10);
        expect(gen().next().done).toBe(false);
        expect(gen().next().value).toBe('a');
    });
});

describe('geradores', () => {
    test('gerador personalizado', () => {
        let generator = idMaker();
        expect(generator.next().value).toBe(0);
        expect(generator.next().value).toBe(1);
        expect(generator.next().value).toBe(2);
        expect(generator.next().value).toBe(3);
        expect(generator.next().value).toBe(4);
    });
    test('gerador avançado - reinicia a sequência fibonacci', () => {
        let sequencia = fibonacci();
        expect(sequencia.next().value).toBe(1);
        expect(sequencia.next().value).toBe(1);
        expect(sequencia.next().value).toBe(2);
        expect(sequencia.next().value).toBe(3);
        expect(sequencia.next(true).value).toBe(1);
        expect(sequencia.next().value).toBe(1);
        expect(sequencia.next().value).toBe(2);
        expect(sequencia.next().value).toBe(3);
        expect(sequencia.next().value).toBe(5);
        expect(sequencia.next().value).toBe(8);
    });
});