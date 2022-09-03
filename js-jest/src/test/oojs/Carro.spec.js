const { Carro, CarroObjeto, CarroLiteral, ObjetoCarroLiteral } = require('../../main/oojs/Carro.js');

const ANO_ATUAL = new Date().getFullYear();
const COR_CARRO = 'preto'; //Poderia ser um enum
const MARCA_CARRO = 'ka';
const MODELO_CARRO = 'ford';

let CarroComFunction;

beforeAll(() => {
    CarroComFunction = new Carro();
    CarroComFunction['ano'] = ANO_ATUAL;
    CarroComFunction['cor'] = COR_CARRO;
    CarroComFunction['marca'] = MARCA_CARRO;
    CarroComFunction['modelo'] = MODELO_CARRO;
});

describe('Carro criado por new Carro()', () => {
    test('teste get e set funcao Carro', () => {
        CarroComFunction.setCor(COR_CARRO)
        expect(CarroComFunction.getCor()).toBe(COR_CARRO);
    });
    
    test('verificar os tipos de acesso propriedade', () => {
        expect(CarroComFunction['ano']).toBe(ANO_ATUAL);
        expect(CarroComFunction['cor']).toBe(COR_CARRO);
        expect(CarroComFunction['marca']).toBe(MARCA_CARRO);
        expect(CarroComFunction['modelo']).toBe(MODELO_CARRO);
    });
});

describe('Carro criado por new Objetc()', () => {
    test('teste get e set CarroObjeto', () => {
        CarroObjeto.setAno(ANO_ATUAL - 4);
        expect(CarroObjeto.getAno()).toBe(ANO_ATUAL - 4);
    });
});

describe('Carro criado de forma literal', () => {
    test('teste get e set CarroLiteral', () => {
        CarroLiteral.setAno(ANO_ATUAL-9);
        expect(CarroLiteral.getAno()).toBe(ANO_ATUAL-9);
    });
});

describe('Carro criado por Objetct.create(CarroLiteral)', () => {
    test('teste get e set funcao ObjetoCarroLiteral', () => {
        ObjetoCarroLiteral.setAno(ANO_ATUAL - 3);
        expect(ObjetoCarroLiteral.getAno()).toBe(ANO_ATUAL - 3);
    });
});