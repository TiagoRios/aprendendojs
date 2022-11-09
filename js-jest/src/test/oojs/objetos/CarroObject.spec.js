const CarroObject = require('../../../main/oojs/objetos/CarroObject.js');

const ANO_ATUAL = new Date().getFullYear();
const COR_CARRO = 'Azul';

test('teste get e set COR', () => {
    CarroObject.setCor(COR_CARRO);
    expect(CarroObject.getCor()).toBe(COR_CARRO);

});
test('teste get e set ANO', () => {
    CarroObject.setAno(ANO_ATUAL);
    expect(CarroObject.getAno()).toBe(ANO_ATUAL);
});