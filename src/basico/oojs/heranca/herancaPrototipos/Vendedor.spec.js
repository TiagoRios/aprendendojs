import Vendedor from "./Vendedor";
import departamento from "../herancaUtil/departamento";
import funcionarioMock from "../herancaUtil/funcionarioMock";

const vendedor = new Vendedor(funcionarioMock.nome);

test(`vendedor deve herdar propriedade nome de funcionário`, () => {
  expect(vendedor.nome).toBe(funcionarioMock.nome);
})

test(`vendedor deve ter a propriedade cota como padrão igual a 100`, () => {
  expect(vendedor.quota).toBe(100);
})

test(`vendedor deve ter a propriedade departamento com padrão definida como vendas`, () => {
  expect(vendedor.departamento).toBe(departamento.VENDAS);
})

test(`vendedor deve ter a propriedade projetos com apenas um projeto`, () => {
  expect(vendedor.projetos.length).toBe(1);
})

test(`vendedor não deve herda propriedade dinãmica, quando não estiver na cadeia de prototipo`, () => {
  expect(vendedor.especialidade).toBe(undefined);
})

describe('propriedade __proto__ da cadeia de prototypes', () => {
  test(`vendedor com 1 propriedade __proto__`, () => {
    expect(vendedor.__proto__).toBe(Vendedor.prototype);
  })

  test(`vendedor com 2 propriedades __proto__`, () => {
    expect(vendedor.__proto__.__proto__).toBe(Object.prototype);
  })

  test(`vendedor com 3 propriedades __proto__`, () => {
    expect(vendedor.__proto__.__proto__.__proto__).toBe(null);
  })
})