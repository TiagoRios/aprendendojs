/*
 * Existem mais formas de criação de objetos.
 *     Herança (com extends ou com prototipação).
 *     Object.create(obj)
 *     Object.defineProperties(obj, props) criação/Modificação mais detalhada. Ex:
 *     Object.defineProperties( {}, {cor: {}, ano: {value: 2000, writable: true, }} ) 
 *     props(value, writable, configurable, enumerable, get, set);
 */

let CarroObject = new Object();

// Definição propriedade ANO e seus GETTERS e SETTERS.
CarroObject.ano = new Date().getFullYear();

CarroObject.getAno = () => {
    return CarroObject.ano;
};

CarroObject.setAno = (ano) => {
    CarroObject.ano = ano;
};

// Definição propriedade COR e seus GETTERS e SETTERS.
CarroObject.cor = 'Branco';

CarroObject.getCor = () => {
    return CarroObject.cor;
};

CarroObject.setCor = (cor) => {
    CarroObject.cor = cor;
};

module.exports = CarroObject;