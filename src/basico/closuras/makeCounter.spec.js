const makeCounter = require('./makeCounter');

let count = makeCounter();

test('incrementa 1 return 1', () => {
    expect(count()).toBe(1)
})

test('incrementa 1 return 2', () => {
    expect(count()).toBe(2)
})

test('incrementa 1 return 3', () => {
    expect(count()).toBe(3)
})