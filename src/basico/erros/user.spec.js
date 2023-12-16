const throwUserExeption = require('./user');
const UserException = require('./UserException.js');

test('should thrwos UserException, number more than 100', () => {
    expect(() => throwUserExeption(101))
        .toThrow(UserException);
})
