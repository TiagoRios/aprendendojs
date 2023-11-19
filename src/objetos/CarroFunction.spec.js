import { CarroFunction } from "./CarroFunction";

let carroFunction;

beforeAll(() => {
    carroFunction = new CarroFunction();
})

test('Não acesso propriedade privada', () => {
    expect(carroFunction.ano).toBeUndefined();
    
    carroFunction.setAno(2222);
    expect(carroFunction.getAno()).toBe(2222);
})