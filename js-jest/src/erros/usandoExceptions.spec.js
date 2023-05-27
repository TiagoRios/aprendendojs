const app = require('./usandoExceptions.js');
const { UserException } = require('./UserException.js');

const errorMessageInvalidMonth = 'invalid month';

describe('learning functions from mozilla developer', () => {    
    test('should equal to Jan', () => {
        expect(app.getMonthName(1)).toEqual('Jan');
    });

    test('should throws invalid month', () => {
        expect(()=> app.getMonthName(13)).toThrow(errorMessageInvalidMonth);
    });
    
    test('should thrwos UserException', () => {
        expect(()=> app.methodThrowUserException(101)).toThrow(UserException);
    });

    test('should return matcher with regular expression', ()=>{
        let pattern = /string/;
        let text = 'my custom string';
        let matcher = pattern.exec(text);
        expect(matcher[0]).toBe("string");
    });
});