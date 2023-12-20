import Funcionario from './Funcionario';
import Operario from './Operario';

import departamento from "./departamento";
import funcionarioMock from "./funcionarioMock";

const operario = new Operario(funcionarioMock.nome);

test(`operario deve herdar propriedade nome de funcionario`, () => {
  expect(operario.nome).toBe(funcionarioMock.nome);
})

test(`operario deve herdar propriedade departamento de funcionario`, () => {
  expect(operario.departamento).toBe(departamento.GERAL);
})

test(`operario deve possuir um projeto geral por padrão`, () => {
  expect(operario.projetos.length).toBe(1);
})

test(`operario deve herda propriedade dinãmica`, () => {
  expect(operario.especialidade).toBe(funcionarioMock.especialidade);
})

describe('propriedade __proto__ da cadeia de prototypes', () => {
  test(`operario com 1 propriedade __proto__`, () => {
    expect(operario.__proto__).toBe(Operario.prototype);
  })

  test(`operario com 2 propriedades __proto__`, () => {
    expect(operario.__proto__.__proto__).toBe(Funcionario.prototype);
  })
})