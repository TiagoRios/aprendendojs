const { somar, subtrair } = require('./operacoesMatematica.js');
const OPERACAO = require('./operacoesMatematica.js');

const errorMessages = require('./matematicaErrorMessages');

describe('aprendendo TDD javaScript', () => {
  describe('TEST Somar', () => {
    test('deve somar 2 números', () => {
      expect(somar(1, 2)).toBe(3);
    })
    test('deve somar varios números', () => {
      expect(somar(1, 2, 5, 6, 4, 3)).toBe(21);
    })
    test('deve somar string numerica', () => {
      expect(OPERACAO.somar('6', 3, 6)).toBe(15);
    })
    test('deve somar string numerica', () => {
      expect(OPERACAO.somar(3, '6', 2, '2')).toBe(13);
    })
    test('deve somar string numerica', () => {
      expect(OPERACAO.somar('6', '3', '8', '7', 9)).toBe(33);
    })
    test('não deve somar denominador string alfanumerica', () => {
      expect(() => OPERACAO.somar(3, "asdf")).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve somar passando zero valores', () => {
      expect(() => OPERACAO.somar()).toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
    })
    test('não deve somar passando apenas um valor', () => {
      expect(() => OPERACAO.somar(5)).toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
    })
    test('não deve somar valores undefined', () => {
      expect(() => OPERACAO.somar(undefined, undefined)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve somar valores não numericos', () => {
      expect(() => OPERACAO.somar("asdf", NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve somar valores não numericos parte 2', () => {
      expect(() => OPERACAO.somar([], NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('deve somar varios utilizando propriedade arguments', () => {
      expect(OPERACAO.somarComArguments(1, 2, 5, 6, 4, 3)).toBe(21);
    })
  });

  describe('TEST Subtrair', () => {
    test('deve subtrair 2 números', () => {
      expect(subtrair(1, 2)).toBe(-1);
    })
    test('deve subtrair string numerica', () => {
      expect(OPERACAO.subtrair('6', 3)).toBe(3);
    })
    test('deve subtrair string numerica', () => {
      expect(OPERACAO.subtrair('6', '3')).toBe(3);
    })
    test('não deve subtrair string alfanumerica', () => {
      expect(() => OPERACAO.subtrair(3, "asdf")).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve subtrair passando zero valores', () => {
      expect(() => OPERACAO.subtrair()).toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
    })
    test('não deve subtrair passando apenas um valor', () => {
      expect(() => OPERACAO.subtrair(5)).toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
    })
    test('não deve subtrair valores undefined', () => {
      expect(() => OPERACAO.subtrair(undefined, undefined)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve subtrair valores não numericos', () => {
      expect(() => OPERACAO.subtrair("asdf", NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve subtrair valores não numericos parte 2', () => {
      expect(() => OPERACAO.subtrair([], NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
  });

  describe('test multiplicação', () => {
    test('deve multiplicar 2 números', () => {
      expect(OPERACAO.multiplicar(2, 2)).toBe(4);
    })
    test('deve multiplicar string numerica', () => {
      expect(OPERACAO.multiplicar('6', 3)).toBe(18);
    })
    test('deve multiplicar string numerica', () => {
      expect(OPERACAO.multiplicar('6', '3')).toBe(18);
    })
    test('não deve multiplicar denominador string alfanumerica', () => {
      expect(() => OPERACAO.multiplicar(3, "asdf")).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve multiplicar passando zero valores', () => {
      expect(() => OPERACAO.multiplicar()).toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
    })
    test('não deve multiplicar passando apenas um valor', () => {
      expect(() => OPERACAO.somar(5)).toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
    })
    test('não deve multiplicar valores undefined', () => {
      expect(() => OPERACAO.multiplicar(undefined, undefined)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve multiplicar valores não numericos', () => {
      expect(() => OPERACAO.multiplicar("asdf", NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve multiplicar valores não numericos parte 2', () => {
      expect(() => OPERACAO.multiplicar([], NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
  });

  describe('test dividir', () => {
    test('deve dividir 2 números', () => {
      expect(OPERACAO.dividir(6, 3)).toBe(2);
    })
    test('deve dividir denominador string numerica', () => {
      expect(OPERACAO.dividir('6', 3)).toBe(2);
    })
    test('deve dividir denominador e numerador string numerica', () => {
      expect(OPERACAO.dividir('6', '3')).toBe(2);
    })
    test('não deve dividir denominador igual a 0 e throw ERROR', () => {
      expect(() => OPERACAO.dividir(6, 0)).toThrow(errorMessages.MSG_DIVISAO_POR_ZERO);
    })
    test('não deve dividir denominador string alfanumerica', () => {
      expect(() => OPERACAO.dividir(3, "asdf")).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve dividir esquecer algum parametro', () => {
      expect(() => OPERACAO.dividir()).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve dividir valores undefined', () => {
      expect(() => OPERACAO.dividir(undefined, undefined)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve dividir valores não numericos', () => {
      expect(() => OPERACAO.dividir("asdf", NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve dividir valores não numericos parte 2', () => {
      expect(() => OPERACAO.dividir([], NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
  })
});