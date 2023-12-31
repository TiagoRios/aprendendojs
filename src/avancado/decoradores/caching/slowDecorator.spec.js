import hash from "./hash";
import slow from "./slow";

slow = cachingDecorator(slow, hash);

test('função sem cache', () => {
    expect(slow(2)).toBe(2);
});

test('função com cache - execução mais rápida', () => {
    expect(slow(2)).toBe(2);
});