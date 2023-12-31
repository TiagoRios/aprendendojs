import cachingDecorator from "./cachingDecorator";
import hash from "./hash";
import worker from "./worker";

worker.slow = cachingDecorator(worker.slow, hash);

test('Método do objeto sem cache', () => {
    expect(worker.slow(2)).toBe(2);
});

test('Método do objeto com cache - execução mais rápida', () => {
    expect(worker.slow(2)).toBe(2);
});