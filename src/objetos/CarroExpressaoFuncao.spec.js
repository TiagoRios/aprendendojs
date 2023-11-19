import {
    CarroExpressaoFunction,
    CarroExpressaoES6Arrow,
    CarroExpressaoES6,
    CarroExpressaoES6GetSet,
    CarroExpressaoES6ArrowReferenciaIndireta,
} from "./CarroExpressaoFuncao";

let carFunction;
let carES6Arrow;
let carES6;
let carES6GetSet;
let carRefIndireta;

beforeAll(() => {
    carFunction = CarroExpressaoFunction();
    carES6Arrow = CarroExpressaoES6Arrow();
    carES6 = CarroExpressaoES6();
    carES6GetSet = CarroExpressaoES6GetSet();
    carRefIndireta = CarroExpressaoES6ArrowReferenciaIndireta();
})

test('GETTER e SETTER - Function', () => {
    carFunction.setAno(1000);
    expect(carFunction.getAno()).toBe(1000);
})

// Funções de seta não possuem referência this.
test('GETTER e SETTER - Arrow', () => {
    // try {
    //     carES6Arrow.getAno()

    // } catch (error) {
    //     expect(error.message).toBe("Cannot read properties of undefined (reading 'ano')");
    // }
    expect(() => carES6Arrow.setAno(123)).toThrowError();
    expect(() => carES6Arrow.getAno()).toThrowError();
})

test('GETTER e SETTER - Arrow - Sucesso', () => {
    carRefIndireta.setAno(3333);
    expect(carRefIndireta.getAno()).toBe(3333);
    expect(() => carRefIndireta.getAno()).not.toThrowError();
})

test('GETTER e SETTER - ES6', () => {
    carES6.setAno(3000);
    expect(carES6.getAno()).toBe(3000);
})

test('GETTER e SETTER - Palavras-chave get/set', () => {
    carES6GetSet.ano = 4000;
    expect(carES6GetSet.ano).toBe(4000);
})