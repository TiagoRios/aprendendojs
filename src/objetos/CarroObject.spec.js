const CarroObject = require('./CarroObject.js');

const ANO_ATUAL = new Date().getFullYear();
const COR_CARRO = 'Azul';

test('get e set COR - ObjetoCarro', () => {
    CarroObject.setCor(COR_CARRO);
    expect(CarroObject.getCor()).toBe(COR_CARRO);
});

test('get e set ANO - ObjetoCarro', () => {
    CarroObject.setAno(ANO_ATUAL);
    expect(CarroObject.getAno()).toBe(ANO_ATUAL);
});