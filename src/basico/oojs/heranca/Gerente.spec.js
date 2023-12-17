import Funcionario from './Funcionario';
import Gerente from './Gerente';

const departamento = require('./departamento');
const funcionarioMock = require('./funcionarioMock');

let gerente = new Gerente(funcionarioMock.nome);

test(`gerente deve herdar propriedade nome de funcionario`, () => {
  expect(gerente.nome).toBe(funcionarioMock.nome);
})

test(`gerente deve herdar propriedade departamento de funcionario`, () => {
  expect(gerente.departamento).toBe(departamento.GERAL);
})

test(`gerente deve possuir um relatorio geral por padrão`, () => {
  expect(gerente.relatorios.length).toBe(1);
})

// TODO: Sem ligamento com prototype?
test(`gerente deve herdar propriedade dinãmica definida na cadeia de prototipos`, () => {
  expect(gerente.especialidade).toBe(funcionarioMock.especialidade);
})

describe('propriedade __proto__ da cadeia de prototypes', () => {
  test(`gerente com 1 propriedade __proto__`, () => {
    expect(gerente.__proto__).toBe(Gerente.prototype);
  })

  // TODO: Sem ligamento com prototype?
  test(`gerente com 2 propriedades __proto__`, () => {
    expect(gerente.__proto__.__proto__).toBe(Funcionario.prototype);
  })
})