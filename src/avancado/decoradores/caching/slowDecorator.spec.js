import cachingDecorator from "./cachingDecorator";
import hash from "./hash";
import slowFunction from "./slow";

let slow = slowFunction;
slow = cachingDecorator(slow, hash);
// slow = cachingDecorator(slow, hash); // error slow is read-only.

test('função sem cache', () => {
    expect(slow(2)).toBe(2);
})

test('função com cache - execução mais rápida', () => {
    expect(slow(2)).toBe(2);
})