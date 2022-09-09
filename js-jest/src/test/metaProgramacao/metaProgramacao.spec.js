const VALOR = 'variavelComValorPadrao';
const MSG_ERRO_GET = 'Cannot perform \'get\' on a proxy that has been revoked';
const MSG_ERRO_SET = 'Cannot perform \'set\' on a proxy that has been revoked';
const MSG_ERRO_DELETE_PROPERTY = 'Cannot perform \'deleteProperty\' on a proxy that has been revoked'

let handler = {
  get: function (target, name) {
    return name in target ? target[name] : VALOR;
  }
};

let revocable = Proxy.revocable({}, {
  get: function (target, name) {
    return "[[" + name + "]]";
  }
});

describe('proxies', () => {
  test('test Objeto Proxy', () => {
    //Proxy recebe um objeto e um manipulador
    let p = new Proxy({}, handler);
    p.a = 1;
    p.algo = 'valor de algo'
    expect(p.a).toBe(1);
    expect(p.b).toBe(VALOR);
    expect(p.c).toBe(VALOR);
    expect(p.algo).toBe('valor de algo');
    expect(p.outro).toBe(VALOR);
  });
  test('Proxy revogável', () => {
    let proxy = revocable.proxy;
    expect(proxy.foo).toBe("[[foo]]");
    revocable.revoke();

    expect(() => proxy.foo).toThrow(MSG_ERRO_GET);
    expect(() => proxy.foo = 1).toThrow(MSG_ERRO_SET);
    expect(() => delete proxy.foo).toThrow(MSG_ERRO_DELETE_PROPERTY);
    expect(() => typeof proxy).not.toThrow(TypeError);
  });
});
describe('reflexão', () => {
  test('sem Reflect', () => {
    expect(Function.prototype.apply.call("".charAt, "ponies", [0])).toBe('p');
    expect(Function.prototype.apply.call(Math.floor, undefined, [1.75])).toBe(1);
    expect(Function.prototype.apply.call(RegExp.prototype.exec, /la/, ["confabulation"]).index).toBe(7);
    expect(Function.prototype.apply.call(String.fromCharCode, undefined, [104, 101, 108, 108, 111])).toBe('hello');
  });
  //menos verboso.
  test('test Objeto Reflect', () => {
    expect(Reflect.apply("".charAt, "ponies", [3])).toBe('i');
    expect(Reflect.apply(Math.floor, undefined, [1.75])).toBe(1);
    expect(Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index).toBe(4);
    expect(Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])).toBe('hello');
  });
  test('test Objeto Reflect com defineProperty', () => {
    expect(Reflect.defineProperty("".charAt, "ponies", [3])).toBe(true);
    expect(Reflect.defineProperty(Math.floor, undefined, [1.75])).toBe(true);
    //retirei o index. só preciso saber se a propriedade foi definida.
    expect(Reflect.defineProperty(RegExp.prototype.exec, /ab/, ["confabulation"])).toBe(true);
    expect(Reflect.defineProperty(String.fromCharCode, undefined, [104, 101, 108, 108, 111])).toBe(true);
  });
});