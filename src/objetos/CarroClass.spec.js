import {
    CarroClassPropPublica,
    CarroClassPropPrivada
} from "./CarroClass";

let carPrivada;
let carPublica;

beforeAll(() => {
    carPrivada = new CarroClassPropPrivada();
    carPublica = new CarroClassPropPublica();
})

test('Acesso propriedade pública', () => {
    expect(carPublica.ano).toBe(new Date().getFullYear());
  
    carPublica.setAno(1111);
    expect(carPublica.ano).toBe(1111);
})

test('Não acesso propriedade privada', () => {
    expect(carPrivada.ano).toBeUndefined();
    
    carPrivada.meuSetAno = 2222;
    expect(carPrivada.meuGetAno).toBe(2222);
})