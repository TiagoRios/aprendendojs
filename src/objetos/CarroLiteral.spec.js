import {
    CarroLiteralFunction as carFunction,
    CarroLiteralES6Arrow as carES6Arrow,
    CarroLiteralES6 as carES6,
    CarroLiteralES6GetSet as carES6GetSet,
    CarroLiteralES6ArrowGambiarra as carES6ArrowGambiarra,
} from "./CarroLiteral";

test('GETTER e SETTER - Function', () => {
    carFunction.setAno(1000);
    expect(carFunction.getAno()).toBe(1000);
})

// Funções de seta não possuem referência this.
test('GETTER e SETTER - Arrow - Error não possui referência this', () => {
    // try {
    //     carES6Arrow.getAno()

    // } catch (error) {
    //     expect(error.message).toBe("Cannot read properties of undefined (reading 'ano')");
    // }
    expect(() => carES6Arrow.getAno()).toThrowError();
})

test('GETTER e SETTER - Arrow - Gambiarra - Sucesso', () => {
    carES6ArrowGambiarra.setAno(1234);

    expect(carES6ArrowGambiarra.getAno()).toBe(1234);
    expect(() => carES6ArrowGambiarra.getAno()).not.toThrowError();
})

test('GETTER e SETTER - Arrow - Gambiarra - Sucesso', () => {
    carES6ArrowGambiarra.setAno(555);

    // Referência para outro nome de variável
    let nomeDiferente = carES6ArrowGambiarra;

    expect(nomeDiferente.getAno()).toBe(555);
    expect(() => nomeDiferente.getAno()).not.toThrowError();
})

test('GETTER e SETTER - ES6', () => {
    carES6.setAno(3000);
    expect(carES6.getAno()).toBe(3000);
})

test('GETTER e SETTER - Palavras-chave get/set', () => {
    carES6GetSet.ano = 4000;
    expect(carES6GetSet.ano).toBe(4000);
})
