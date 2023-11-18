// Este exemplo é do site javascript.info

/**
 * Função qualquer que demora algum tempo para ser executada.
 * As quase dez milhões de operações no array deixam lenta a execução da função.
 * 
 * @param {any} xyz um tipo de dado qualquer. 
 * @returns {any} Sempre o mesmo valor fornecido como argumento para a função.
 */
function slow(xyz) {
    for (let i = 0; i < 9_999_999; i++) {
        [].push(i);
    }

    return xyz;
}

/**
 * Objeto que contém um método que faz a mesma coisa que a função slow.
 */
let worker = {
    someMethod() {
        return 1;
    },

    /**
     * Método que faz o mesmo que a função slow definida fora de um objeto. 
     */
    slow(x) {
        for (let i = 0; i < 9_999_999; i++) {
            [].push(i);
        }

        return x * this.someMethod();
    }
}

/**
 * Função que faz o cache de outra função.
 * Se o valor de entrada for o mesmo o retorno nunca muda.
 * Deixa o valor em cache deixa as chamadas subsequentes com mesmo valor mais rápidas.
 * 
 * @param {Function} func A função que será executada mais lenta. 
 * @param {any} hash Algum hash para que será um chave para um Map(). 
 * 
 * @returns A função em cache.
 */
function cachingDecorator(func, hash) {
    let cache = new Map();
    // let cache = new WeakMap(); melhor para cache, mas ele só aceita objetos como chave.

    return function () {
        let key = hash(arguments);

        // verifica se já está em cache.
        if (cache.has(key)) {
            return cache.get(key); // retorna objeto em cache.
        }

        // let result = func(x); NÃO adaptado para trabalhar com métodos em objetos.
        // let result = func.call(this, x); // Adaptado.
        // let result = func.call(this, ...arguments); // Adaptado. aceita mais que um argumento
        let result = func.apply(this, arguments); // mesmo que acima, mas não aceita sintaxe de propagação "..."
        cache.set(key, result); // Chave é um hash gerado.

        return result;
    };
}

/**
 * Função que gera uma string a partir de 'arguments'.
 */
function hash() {
    return [].join.call(arguments) // método emprestado de Array.
}

slow = cachingDecorator(slow, hash);

worker.slow = cachingDecorator(worker.slow, hash);

// Verifique o tempo de execução na saída do teste.
// Quando em cache é executado em média em 1 milisegundo.

test('função sem cache', () => {
    expect(slow(2)).toBe(2);
});
test('função com cache - execução mais rápida', () => {
    expect(slow(2)).toBe(2);
});

test('função no objeto sem cache', () => {
    expect(worker.slow(2)).toBe(2);
});
test('função no objeto com cache - execução mais rápida', () => {
    expect(worker.slow(2)).toBe(2);
});