import criarAdicionadora from "./funcaoAdicionadora";

let adicionadora;

beforeAll(() => {
    adicionadora = criarAdicionadora(5);
})

test('deve somar 6 a função que já tem 5 e retornar 11', () => {
    expect(adicionadora(6)).toBe(11)
})

test('deve somar 6 a função que já tem 5 e retornar 11', () => {
    expect(criarAdicionadora(5)(6)).toBe(11)
})
