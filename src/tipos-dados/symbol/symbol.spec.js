

const DESCRICAO = "identificador";
const DESCRICAO_GLOBAL = "identificador-global"
const MSG_ERRO_CONVERSAO = "Cannot convert a Symbol value to a string";

// Symbols são identificadores únicos
let symbolLocal = Symbol(DESCRICAO); // A descrição é opcional.
let symbolLocal2 = Symbol(DESCRICAO); // descrição definida para fins de depuração.

// Symbols compartilhados globalmente.
let globalSymbol = Symbol.for(DESCRICAO_GLOBAL); // Registra o Symbol globalmente, quando não existir globalmente.
let globalSymbol2;

const QUANTIDADE_CHAVES_SIMBOLICAS_USER = 2;
const QUANTIDADE_CHAVES_NAO_SIMBOLICAS_USER = 2;

const user = {
    name: "user1",
    age: 999,
    [symbolLocal]: 123, // precisa estar entre colchetes.
    [symbolLocal2]: 456,
}

test('retorna false na igualdade', () => {
    expect(symbolLocal == symbolLocal2).toBe(false);
})
test('retorna o toString() do Symbol', () => {
    expect(symbolLocal.toString()).toBe(`Symbol(${DESCRICAO})`);
})
test('retorna a descrição do Symbol', () => {
    expect(symbolLocal.description).toBe(DESCRICAO);
})
test(`msg retorno: ${MSG_ERRO_CONVERSAO}`, () => {
    expect(() => "" + symbolLocal).toThrow(MSG_ERRO_CONVERSAO);
})

/* ================================================== 
            loop for...in ignora chaves Symbol
            Object.keys(user) também ignora 
   ================================================== */

test('for..in ignora chaves Symbol', () => {
    let arr = [];
    for (let key in user) {
        arr.push(key);
    }
    expect(arr.length).toBe(QUANTIDADE_CHAVES_NAO_SIMBOLICAS_USER);
})
test('Copia de user, Acesso direto, resultado: 123', () => {
    let copiaUser = Object.assign({}, user); // Copia também as chaves Symbol.
    expect(copiaUser[symbolLocal]).toBe(123);
})

/* ================================================== 
         Chaves simbolicas não são 100% ocultas
   ================================================== */

test(`retorna quantidade chaves simbolicas igual a ${QUANTIDADE_CHAVES_SIMBOLICAS_USER}`, () => {
    // Acessar Symbols escondidos.
    expect(Object.getOwnPropertySymbols(user).length).toBe(QUANTIDADE_CHAVES_SIMBOLICAS_USER);
})
test('retorn Array com todas as chaves do objeto user', () => {
    expect(Reflect.ownKeys(user).length).toBe(QUANTIDADE_CHAVES_NAO_SIMBOLICAS_USER + QUANTIDADE_CHAVES_SIMBOLICAS_USER);
})

/* ================================================== 
                    Symbols globais
   ================================================== */

test('Symbols globais são compartilhados', () => {
    globalSymbol2 = Symbol.for(DESCRICAO_GLOBAL); // busca no registro, se não existir cria novo Symbol e insere no registro.
    expect(globalSymbol === globalSymbol2).toBe(true);
})
test('descrição do Symbol global Symbol.keyFor()', () => {
    expect(Symbol.keyFor(globalSymbol)).toBe(DESCRICAO_GLOBAL);
})
test('Symbols locais são indefinidos em Symbol.keyFor(symbolLocal)', () => {
    expect(Symbol.keyFor(symbolLocal)).toBe(undefined);
})