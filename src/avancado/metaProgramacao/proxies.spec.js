describe('Proxy normal', () => {
  const PROP_DEFAULT_VALUE = 'default value';
  const PROP_ONE_VALUE = 'propriedade One';
  const PROP_TWO_VALUE = 'propriedade Two';

  const myHandler = {
    get: function (target, name) {
      return name in target ? target[name] : PROP_DEFAULT_VALUE;
    }
  };

  let myProxy = new Proxy({}, myHandler);
  myProxy.propOne = PROP_ONE_VALUE;
  myProxy.propTwo = PROP_TWO_VALUE;

  test('Deve retornar a propriedade com valor One', () => {
    expect(myProxy.propOne).toBe(PROP_ONE_VALUE);
  });

  test('Deve retornar a propriedade com valor Two', () => {
    expect(myProxy.propTwo).toBe(PROP_TWO_VALUE);
  });

  test('Deve retornar valor Default para propriedade não definida', () => {
    expect(myProxy.propriedadeNaoDefinidaNoProxy).toBe(PROP_DEFAULT_VALUE);
  });
})

describe('Proxy revogável', () => {
  const MSG_ERRO_DELETE_PROPERTY = 'Cannot perform \'deleteProperty\' on a proxy that has been revoked';
  const MSG_ERRO_GET = 'Cannot perform \'get\' on a proxy that has been revoked';
  const MSG_ERRO_SET = 'Cannot perform \'set\' on a proxy that has been revoked';

  let myProxy;
  let myRevocableProxy;

  beforeEach(() => {
    myRevocableProxy = Proxy.revocable({}, {
      get: function (target, name) {
        return "[[" + name + "]]";
      }
    });

    myProxy = myRevocableProxy.proxy;
  })

  test('Deve retornar nome da propriedade entre "[[" e "]]" ', () => {
    expect(myProxy.testando).toBe("[[testando]]");
  })

  test('Deve retornar nome da propriedade entre "[[" e "]]" ', () => {
    expect(myProxy.xxx).toBe("[[xxx]]");
  })

  test('Erro quando executar GET em proxy revogado', () => {
    myRevocableProxy.revoke();
    expect(() => myProxy.testando).toThrow(MSG_ERRO_GET);
  });

  test('Erro quando executar SET em proxy revogado', () => {
    myRevocableProxy.revoke();
    expect(() => myProxy.testando = "ny test").toThrow(MSG_ERRO_SET);
  });

  test('Erro ao tentar deletar propriedade de proxy revogado', () => {
    myRevocableProxy.revoke();
    expect(() => delete myProxy.testando).toThrow(MSG_ERRO_DELETE_PROPERTY);
  });

  test('Erro ao tentar deletar propriedade não existente em proxy revogado', () => {
    myRevocableProxy.revoke();
    expect(() => delete myProxy.propriedadeNaoExistente).toThrow(MSG_ERRO_DELETE_PROPERTY);
  });
});
