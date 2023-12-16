const getMonthName = require('./month');
const MonthException = require('./MonthException');

describe('learning functions from mozilla developer', () => {
    test('should equal to Jan', () => {
        expect(getMonthName(1)).toEqual('Jan');
    })

    test('should throws invalid month', () => {
        expect(() => getMonthName(13))
            .toThrow(MonthException);
    })
});