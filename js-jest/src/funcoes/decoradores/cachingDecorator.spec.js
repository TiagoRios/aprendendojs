/**
 * Função qualquer que demora algum tempo para ser executada.
 * 
 * Para o mesmo valor de x sempre retorna o mesmo resultado
 * @param {*} x um tipo de dado qualquer. 
 * @returns sempre o mesmo valor dependendo do paramentro fornecido.
 */
function slow(xyz) {
    for (let i = 0; i < 9_999_999; i++) {
        [].push(i);
    }
    return xyz;
}

let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        for (let i = 0; i < 9_999_999; i++) {
            [].push(i);
        }
        return x * this.someMethod();
    }
}

/**
 * Função que faz o cache de uma função que dependendo do mesmo
 * valor de entrada o retorno nunca muda.
 * 
 * @param {Function} func referência para uma função. 
 * @returns o retorno da própria função.
 */
function cachingDecorator(func, hash) {
    let cache = new Map();
    // let cache = new WeakMap(); melhor para cache, mas ele só aceita objetos como chave.

    return function () {
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }

        // let result = func(x); NÃO adaptado para trabalhar com métodos em objetos.
        // let result = func.call(this, x); // Adaptado.
        // let result = func.call(this, ...arguments); // Adaptado. aceita mais que um argumento
        let result = func.apply(this, arguments); // mesmo que acima, mas não aceita sintaxe de propagação "..."
        cache.set(key, result);
        return result;
    };
}

/**
 * Gera string com os valores do objeto arguments.
 */
function hash(){
   return [].join.call(arguments) // método emprestado de Array.
}

slow = cachingDecorator(slow, hash);

worker.slow = cachingDecorator(worker.slow, hash);

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