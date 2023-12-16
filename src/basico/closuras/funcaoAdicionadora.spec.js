/**
 * Apresentando fechamentos (Closures).
 * 
 * @param {number} numeroExterno Um número para sempre ser adicionado ao chamar a função retornada.
 * A propriedade é criada e se mantém viva até não existir mais referências a ela.
 * 
 * @returns Uma função que já recebeu o argumento da função envolvente.
 */
export function criaFuncaoAdicionadora(numeroExterno) {

    // A função retornada não pode ser manipulada fora deste escopo
    return function (numeroInterno) {
        return numeroExterno + numeroInterno;
    };
}

let adicionadora;

beforeAll(() => {
    adicionadora = criaFuncaoAdicionadora(5); // recebe a função interna com valor 5.
})


test('deve somar 6 a função que já tem 5 e retornar 11', () => {
    expect(adicionadora(6)).toBe(11)
})

test('deve somar 6 a função que já tem 5 e retornar 11', () => {
    expect(criaFuncaoAdicionadora(5)(6)).toBe(11)
})