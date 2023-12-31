describe('Sem Reflexão', () => {
  test('Deve retornar o primeiro caractere da string', () => {
    expect(Function.prototype.apply.call("".charAt, "ponies", [0])).toBe('p');
  })

  test('Deve arredondar o número para o menor inteiro', () => {
    expect(Function.prototype.apply.call(Math.floor, undefined, [1.75])).toBe(1);
  })

  test('Deve retornar o index da RegExp encontrada', () => {
    expect(Function.prototype.apply.call(RegExp.prototype.exec, /la/, ["confabulation"]).index).toBe(7);
  })

  test('Deve transformar os códigos char em caracteres e retornar a string formada', () => {
    expect(Function.prototype.apply.call(String.fromCharCode, undefined, [104, 101, 108, 108, 111])).toBe('hello');
  })
})

describe('Usando Reflexão', () => {
  //menos verboso.
  describe('Reflect com apply', () => {
    test('Deve retornar o terceiro caractere da string', () => {
      expect(Reflect.apply("".charAt, "ponies", [3])).toBe('i');
    })

    test('Deve arredondar o número para o menor inteiro', () => {
      expect(Reflect.apply(Math.floor, undefined, [1.75])).toBe(1);
    })

    test('Deve retornar o index da RegExp encontrada', () => {
      expect(Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index).toBe(4);
    })

    test('Deve transformar os códigos char em caracteres e retornar a string formada', () => {
      expect(Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])).toBe('hello');
    })
  });

  // as propriedades são apenas definidas e retornam true se criadas.
  describe('Reflect com defineProperty', () => {
    test('Deve definir a propriedade para string', () => {
      expect(Reflect.defineProperty("".charAt, "ponies", [3])).toBe(true);
    })

    test('Deve definir a propriedade para Math', () => {
      expect(Reflect.defineProperty(Math.floor, undefined, [1.75])).toBe(true);
    })

    test('Deve definir a propriedade para RegExp', () => {
      //retirei o index. só preciso saber se a propriedade foi definida.
      expect(Reflect.defineProperty(RegExp.prototype.exec, /ab/, ["confabulation"])).toBe(true);
    })

    test('Deve transformar os códigos char em caracteres e retornar a string formada', () => {
      expect(Reflect.defineProperty(String.fromCharCode, undefined, [104, 101, 108, 108, 111])).toBe(true);
    })
  });
});