/**
 * Exemplo sobre fechamentos (Closures).
 * 
 * Faz a contagem incremental de um número.
 * 
 * @returns um número incrementado. 
 */
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    }
}

let count = makeCounter();

test('retornar 0', () => {
    expect(count()).toBe(0)
})
test('retornar 1', () => {
    expect(count()).toBe(1)
})
test('retornar 2', () => {
    expect(count()).toBe(2)
})
test('retornar 3', () => {
    expect(count()).toBe(3)
})