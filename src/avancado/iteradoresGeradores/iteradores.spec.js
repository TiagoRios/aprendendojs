/* 
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

describe('iteradores', () => {
    test('fazer iteração', () => {
        let it = fazerIteracao(['a', 'b']);
        expect(it.next().feito).toBe(false);
        expect(it.next().valor).toBe('b');
        expect(it.next().feito).toBe(true);
    });
    //Usar somente em casos específicos. 
    test('meu iterável', () => {
        expect([...meuIteravel]).toHaveLength(3);
    });
    
    test('iterável embutido', () => {
        expect(IteravelEmbutidoLacoForSomaNumerosArray([1, 8, 9])).toBe(18);
        expect([...'abcdefghij']).toHaveLength(10);
        expect(gen().next().done).toBe(false);
        expect(gen().next().value).toBe('a');
    });
});

