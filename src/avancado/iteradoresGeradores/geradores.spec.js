//generator
function* idMaker() {
  let index = 0;
  while (true)
      yield index++;
}

function* fibonacci() {
  let fn = 1;
  let fn2 = 1;
  while (true) {
      let current = fn2;
      fn2 = fn;
      fn = fn + current;
      let reset = yield current;
      if (reset) {
          fn = 1;
          fn2 = 1;
      }
  }
}


describe('geradores', () => {
  test('gerador personalizado', () => {
      let generator = idMaker();
      expect(generator.next().value).toBe(0);
      expect(generator.next().value).toBe(1);
      expect(generator.next().value).toBe(2);
      expect(generator.next().value).toBe(3);
      expect(generator.next().value).toBe(4);
  });
  test('gerador avançado - reinicia a sequência fibonacci', () => {
      let sequencia = fibonacci();
      expect(sequencia.next().value).toBe(1);
      expect(sequencia.next().value).toBe(1);
      expect(sequencia.next().value).toBe(2);
      expect(sequencia.next().value).toBe(3);
      expect(sequencia.next(true).value).toBe(1);
      expect(sequencia.next().value).toBe(1);
      expect(sequencia.next().value).toBe(2);
      expect(sequencia.next().value).toBe(3);
      expect(sequencia.next().value).toBe(5);
      expect(sequencia.next().value).toBe(8);
  });
});