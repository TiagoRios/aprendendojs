const { somar, subtrair } = require('./operacoesMatematica.js');
const matematica = require('./operacoesMatematica.js');

const errorMessages = require('./matematicaErrorMessages');

describe('TDD com javascript', () => {
  describe('TEST Soma', () => {
    test('deve somar 2 números', () => {
      expect(somar(1, 2)).toBe(3);
    })

    test('deve somar varios números', () => {
      expect(somar(1, 2, 5, 6, 4, 3)).toBe(21);
    })

    test('deve somar número com string numerica', () => {
      expect(matematica.somar('6', 3, 6)).toBe(15);
    })

    test('deve somar todas as string numerica', () => {
      expect(matematica.somar('6', '3', '8', '7', '9')).toBe(33);
    })

    test('deve somar usando arguments', () => {
      expect(matematica.somarComArguments(1, 2, 5, 6, 4, 3)).toBe(21);
    })

    describe('Erros de soma', () => {
      test('Erro quando quando não passar valores', () => {
        expect(() => matematica.somar())
          .toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
      })

      test('Erro quando quando passar apenas 1 valor', () => {
        expect(() => matematica.somar(5))
          .toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
      })

      test('Erro com valores strings alfanumericas', () => {
        expect(() => matematica.somar(3, "asdf"))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro com valores undefined', () => {
        expect(() => matematica.somar(undefined, undefined))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro com valores NaN', () => {
        expect(() => matematica.somar(NaN, NaN))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro com valores [] - array', () => {
        expect(() => matematica.somar([], []))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })
    })
  })
  describe('TEST Subtrair', () => {
    test('deve subtrair 2 números', () => {
      expect(subtrair(1, 2)).toBe(-1);
    })
    test('deve subtrair string numerica', () => {
      expect(matematica.subtrair('6', 3)).toBe(3);
    })
    test('deve subtrair string numerica', () => {
      expect(matematica.subtrair('6', '3')).toBe(3);
    })
    test('não deve subtrair string alfanumerica', () => {
      expect(() => matematica.subtrair(3, "asdf")).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve subtrair passando zero valores', () => {
      expect(() => matematica.subtrair()).toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
    })
    test('não deve subtrair passando apenas um valor', () => {
      expect(() => matematica.subtrair(5)).toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
    })
    test('não deve subtrair valores undefined', () => {
      expect(() => matematica.subtrair(undefined, undefined)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve subtrair valores não numericos', () => {
      expect(() => matematica.subtrair("asdf", NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve subtrair valores não numericos parte 2', () => {
      expect(() => matematica.subtrair([], NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
  });

  describe('test multiplicação', () => {
    test('deve multiplicar 2 números', () => {
      expect(matematica.multiplicar(2, 2)).toBe(4);
    })
    test('deve multiplicar string numerica', () => {
      expect(matematica.multiplicar('6', 3)).toBe(18);
    })
    test('deve multiplicar string numerica', () => {
      expect(matematica.multiplicar('6', '3')).toBe(18);
    })
    test('não deve multiplicar denominador string alfanumerica', () => {
      expect(() => matematica.multiplicar(3, "asdf")).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve multiplicar passando zero valores', () => {
      expect(() => matematica.multiplicar()).toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
    })
    test('não deve multiplicar passando apenas um valor', () => {
      expect(() => matematica.somar(5)).toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
    })
    test('não deve multiplicar valores undefined', () => {
      expect(() => matematica.multiplicar(undefined, undefined)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve multiplicar valores não numericos', () => {
      expect(() => matematica.multiplicar("asdf", NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve multiplicar valores não numericos parte 2', () => {
      expect(() => matematica.multiplicar([], NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
  });

  describe('test dividir', () => {
    test('deve dividir 2 números', () => {
      expect(matematica.dividir(6, 3)).toBe(2);
    })
    test('deve dividir denominador string numerica', () => {
      expect(matematica.dividir('6', 3)).toBe(2);
    })
    test('deve dividir denominador e numerador string numerica', () => {
      expect(matematica.dividir('6', '3')).toBe(2);
    })
    test('não deve dividir denominador igual a 0 e throw ERROR', () => {
      expect(() => matematica.dividir(6, 0)).toThrow(errorMessages.MSG_DIVISAO_POR_ZERO);
    })
    test('não deve dividir denominador string alfanumerica', () => {
      expect(() => matematica.dividir(3, "asdf")).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve dividir esquecer algum parametro', () => {
      expect(() => matematica.dividir()).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve dividir valores undefined', () => {
      expect(() => matematica.dividir(undefined, undefined)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve dividir valores não numericos', () => {
      expect(() => matematica.dividir("asdf", NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
    test('não deve dividir valores não numericos parte 2', () => {
      expect(() => matematica.dividir([], NaN)).toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
    })
  })
});