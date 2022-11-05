const { celsiusParaFahrenheit } = require('./converter-temperatura.js');

describe('Converter celsius para fahrenheit', () => {
    test('Deve retornar um número', () => {
        expect(typeof celsiusParaFahrenheit(10)).toBe('number');
    });
    test('0°C dever retornar 32f ', () => {
        expect(celsiusParaFahrenheit(0)).toBe(32);
    });
    test('20°C dever retornar 68f ', () => {
        expect(celsiusParaFahrenheit(20)).toBe(68);
    });
    test('30°C dever retornar 86f ', () => {
        expect(celsiusParaFahrenheit(30)).toBe(86);
    });
    test('-10°C dever retornar 14f ', () => {
        expect(celsiusParaFahrenheit(-10)).toBe(14);
    });
    test('-30°C dever retornar -22f ', () => {
        expect(celsiusParaFahrenheit(-30)).toBe(-22);
    });
});