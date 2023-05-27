//a propriedade: "a" eh criada e se mantém viva 
//ate nao existir mais referencias a ela.
export function criaFuncaoAdicionadora(a) {
    return function (b) {//esta funcao. nao pode ser manipulada.
        return a + b;
    };
}

// //adiciona argumento a qual é passado
let x = criaFuncaoAdicionadora(5);//x recebe a funcao interna com valor 5

test('deve somar 6 a função que já tem 5 e retornar 11', () => {
    expect(x(6)).toBe(11)
})
test('deve somar 6 a função que já tem 5 e retornar 11', () => {
    expect(criaFuncaoAdicionadora(5)(6)).toBe(11)
})