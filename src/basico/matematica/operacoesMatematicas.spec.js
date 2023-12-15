const { somar, subtrair } = require('./operacoesMatematica.js');
const matematica = require('./operacoesMatematica.js');

const errorMessages = require('./matematicaErrorMessages');

describe('TDD com javascript', () => {
  describe('TEST Soma', () => {
    test('deve somar 2 números', () => {
      expect(somar(1, 2)).toBe(3);
    })

    test('deve somar vários números', () => {
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
      test('Erro quando não passar valores', () => {
        expect(() => matematica.somar())
          .toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
      })

      test('Erro quando passar apenas 1 valor', () => {
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

  describe('TEST Subtração', () => {
    test('deve subtrair 2 números', () => {
      expect(subtrair(1, 2)).toBe(-1);
    })

    test('deve subtrair vários números', () => {
      expect(matematica.subtrair(30, 3, 2, 4, 1)).toBe(20);
    })

    test('deve subtrair string numerica', () => {
      expect(matematica.subtrair('6', 3)).toBe(3);
    })

    test('deve subtrair todas as string numerica', () => {
      expect(matematica.subtrair('9', '4', '2')).toBe(3);
    })

    describe('Erros de subtração', () => {
      test('Erro quando não passar valores', () => {
        expect(() => matematica.subtrair())
          .toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
      })

      test('Erro quando passar apenas 1 valor', () => {
        expect(() => matematica.subtrair(5))
          .toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
      })

      test('Erro com valores strings alfanumericas', () => {
        expect(() => matematica.subtrair(3, "asdf"))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro com valores undefined', () => {
        expect(() => matematica.subtrair(undefined, undefined))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro com valores NaN', () => {
        expect(() => matematica.subtrair(NaN, NaN))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro com valores []', () => {
        expect(() => matematica.subtrair([], []))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })
    })
  });

  describe('TEST multiplicação', () => {
    test('deve multiplicar 2 números', () => {
      expect(matematica.multiplicar(2, 2)).toBe(4);
    })

    test('deve multiplicar vários números', () => {
      expect(matematica.multiplicar(2, 2, 2, 2)).toBe(16);
    })

    test('deve multiplicar string numerica', () => {
      expect(matematica.multiplicar('6', 3)).toBe(18);
    })

    test('deve multiplicar todas as string numerica', () => {
      expect(matematica.multiplicar('6', '3', '2')).toBe(36);
    })

    describe('Erros de multiplicação', () => {
      test('Erro com valores strings alfanumericas', () => {
        expect(() => matematica.multiplicar(3, "asdf"))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro quando não passar valores', () => {
        expect(() => matematica.multiplicar())
          .toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
      })

      test('Erro quando passar apenas 1 valor', () => {
        expect(() => matematica.somar(5))
          .toThrow(errorMessages.MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
      })

      test('Erro com valores undefined', () => {
        expect(() => matematica.multiplicar(undefined, undefined))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro com valores NaN', () => {
        expect(() => matematica.multiplicar(NaN, NaN))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro com valores []', () => {
        expect(() => matematica.multiplicar([], []))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })
    })
  });

  describe('test divisão', () => {
    test('deve dividir 2 números', () => {
      expect(matematica.dividir(6, 3)).toBe(2);
    })

    test('deve dividir quando dividendo for string numerica', () => {
      expect(matematica.dividir('6', 3)).toBe(2);
    })

    test('deve dividir quando divisor for string numerica', () => {
      expect(matematica.dividir(6, '3')).toBe(2);
    })

    test('deve dividir quando dividendo e divisor forem string numerica', () => {
      expect(matematica.dividir('6', '3')).toBe(2);
    })

    describe('Erros de divisão', () => {
      test('Erro ao dividir por zero', () => {
        expect(() => matematica.dividir(6, 0))
          .toThrow(errorMessages.MSG_DIVISAO_POR_ZERO);
      })

      test('Erro quando divisor for string alfanumerica', () => {
        expect(() => matematica.dividir(3, "asdf"))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro quando não passar valores', () => {
        expect(() => matematica.dividir())
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro com valores undefined', () => {
        expect(() => matematica.dividir(undefined, undefined))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro com valores NaN', () => {
        expect(() => matematica.dividir(NaN, NaN))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })

      test('Erro com valores []', () => {
        expect(() => matematica.dividir([], []))
          .toThrow(errorMessages.MSG_DEVEM_SER_NUMEROS);
      })
    })
  })
});