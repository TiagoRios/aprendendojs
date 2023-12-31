import {
  geradorLetrasABC,
  geradorNumerosCrescentes,
  geradorNumerosFibonacci,
} from "./geradores";

describe('gerador de letras A, B e C com yield*', () => {
  let geradorAB;

  beforeEach(() => {
    geradorAB = geradorLetrasABC();
  })

  test('Deve gerar letra a', () => {
    expect(geradorAB.next().value).toBe('a');
  })

  test('Deve gerar letra b', () => {
    geradorAB.next().value;
    expect(geradorAB.next().value).toBe('b');
  })

  test('Deve chegar no fim da iteração', () => {
    geradorAB.next(); // a
    geradorAB.next(); // b
    geradorAB.next(); // c
    expect(geradorAB.next().done).toBe(true);
  })

  test('Não deve chegar no fim da iteração', () => {
    expect(geradorAB.next().done).toBe(false);
  })
});

describe('gerador de números crescentes', () => {
  let generator;

  beforeEach(() => {
    generator = geradorNumerosCrescentes();
  })

  test('Deve gerar começando com número 0', () => {
    expect(generator.next().value).toBe(0);
  })

  test('Deve gerar o número 3 ', () => {
    generator.next(); // 0
    generator.next();
    generator.next();
    expect(generator.next().value).toBe(3);
  })
})

describe('gerador de números fibonacci', () => {
  let sequencia;

  beforeEach(() => {
    sequencia = geradorNumerosFibonacci();
  })

  test('Deve gerar números dentro da sequência fibonacci', () => {
    sequencia.next(); // 1
    sequencia.next(); // 1
    sequencia.next(); // 2
    sequencia.next(); // 3
    sequencia.next(); // 5
    expect(sequencia.next().value).toBe(8);
  })

  test('Deve reiniciar a sequência fibonacci', () => {
    sequencia.next(); // 1
    sequencia.next(); // 1
    sequencia.next(); // 2
    sequencia.next(); // 3
    sequencia.next(); // 5
    sequencia.next(true); // reinicia = 1
    sequencia.next(); // 1
    expect(sequencia.next().value).toBe(2);
  })
})
