const {somar, subtrair} = require('../../main/mathOperations/mathOperations.js');
const app = require('../../main/mathOperations/mathOperations.js');
const msg = 'valores devem ser números ou strings numericas';
const msgDivisaoZero = 'denominador não pode ser igual a zero';

describe('aprendendo TDD javaScript', () => {

  describe('TEST Somar', () => {
    test('deve somar 2 números', () => {
      expect(somar(1, 2)).toBe(3);
    })

    test('deve somar string numerica', () => {
      expect(app.somar('6', 3)).toBe(9);
    })

    test('deve somar string numerica', () => {
      expect(app.somar(3, '6')).toBe(9);
    })

    test('deve somar string numerica', () => {
      expect(app.somar('6', '3')).toBe(9);
    })

    test('não deve somar denominador string alfanumerica', () => {
      expect(() => app.somar(3, "asdf")).toThrow(msg);
    })

    test('não deve somar esquecer algum parametro', () => {
      expect(() => app.somar()).toThrow(msg);
    })

    test('não deve somar valores undefined', () => {
      expect(() => app.somar(undefined, undefined)).toThrow(msg);
    })

    test('não deve somar valores não numericos', () => {
      expect(() => app.somar("asdf", NaN)).toThrow(msg);
    })

    test('não deve somar valores não numericos parte 2', () => {
      expect(() => app.somar([], NaN)).toThrow(msg);
    })
  });



  describe('TEST Subtrair', () => {
    test('deve subtrair 2 números', () => {
      expect(subtrair(1, 2)).toBe(-1);
    })

    test('deve subtrair string numerica', () => {
      expect(app.subtrair('6', 3)).toBe(3);
    })

    test('deve subtrair string numerica', () => {
      expect(app.subtrair('6', '3')).toBe(3);
    })

    test('não deve subtrair string alfanumerica', () => {
      expect(() => app.subtrair(3, "asdf")).toThrow(msg);
    })

    test('não deve subtrair esquecer algum parametro', () => {
      expect(() => app.subtrair()).toThrow(msg);
    })

    test('não deve subtrair valores undefined', () => {
      expect(() => app.subtrair(undefined, undefined)).toThrow(msg);
    })

    test('não deve subtrair valores não numericos', () => {
      expect(() => app.subtrair("asdf", NaN)).toThrow(msg);
    })

    test('não deve subtrair valores não numericos parte 2', () => {
      expect(() => app.subtrair([], NaN)).toThrow(msg);
    })
  });



  describe('test multiplicação', () => {
    test('deve multiplicar 2 números', () => {
      expect(app.multiplicar(2, 2)).toBe(4);
    })

    test('deve multiplicar string numerica', () => {
      expect(app.multiplicar('6', 3)).toBe(18);
    })

    test('deve multiplicar string numerica', () => {
      expect(app.multiplicar('6', '3')).toBe(18);
    })

    test('não deve multiplicar denominador string alfanumerica', () => {
      expect(() => app.multiplicar(3, "asdf")).toThrow(msg);
    })

    test('não deve multiplicar esquecer algum parametro', () => {
      expect(() => app.multiplicar()).toThrow(msg);
    })

    test('não deve multiplicar valores undefined', () => {
      expect(() => app.multiplicar(undefined, undefined)).toThrow(msg);
    })

    test('não deve multiplicar valores não numericos', () => {
      expect(() => app.multiplicar("asdf", NaN)).toThrow(msg);
    })

    test('não deve multiplicar valores não numericos parte 2', () => {
      expect(() => app.multiplicar([], NaN)).toThrow(msg);
    })
  });

  describe('test dividir', () => {
    test('deve dividir 2 números', () => {
      expect(app.dividir(6, 3)).toBe(2);
    })

    test('deve dividir denominador string numerica', () => {
      expect(app.dividir('6', 3)).toBe(2);
    })

    test('deve dividir denominador e numerador string numerica', () => {
      expect(app.dividir('6', '3')).toBe(2);
    })

    test('não deve dividir denominador igual a 0 e throw ERROR', () => {
      expect(() => app.dividir(6, 0)).toThrow(msgDivisaoZero);
    })

    test('não deve dividir denominador string alfanumerica', () => {
      expect(() => app.dividir(3, "asdf")).toThrow(msg);
    })

    test('não deve dividir esquecer algum parametro', () => {
      expect(() => app.dividir()).toThrow(msg);
    })

    test('não deve dividir valores undefined', () => {
      expect(() => app.dividir(undefined, undefined)).toThrow(msg);
    })

    test('não deve dividir valores não numericos', () => {
      expect(() => app.dividir("asdf", NaN)).toThrow(msg);
    })

    test('não deve dividir valores não numericos parte 2', () => {
      expect(() => app.dividir([], NaN)).toThrow(msg);
    })
  })
});