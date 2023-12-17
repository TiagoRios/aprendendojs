const Gerente = require("./Gerente");
const { Funcionario } = require('./Funcionario');

const DEPARTAMENTO_GERAL = 'geral';
const NOME_GERENTE = 'nome do gerente';

let gerente = new Gerente(NOME_GERENTE);

test(`gerente deve herdar propriedade nome de funcionario`, () => {
  expect(gerente.nome).toBe(NOME_GERENTE);
})

test(`gerente deve herdar propriedade departamento de funcionario`, () => {
  expect(gerente.departamento).toBe(DEPARTAMENTO_GERAL);
})

test(`gerente deve possuir um relatorio geral por padrão`, () => {
  expect(gerente.relatorios.length).toBe(1);
})

// TODO: Sem ligamento com prototype?
test.skip(`gerente deve herdar propriedade dinãmica definida na cadeia de prototipos`, () => {
  expect(gerente.especialidade).toBe('sem especialidade');
})

describe('propriedade __proto__ da cadeia de prototypes', () => {
  test(`gerente com 1 propriedade __proto__`, () => {
    expect(gerente.__proto__).toBe(Gerente.prototype);
  })

  // TODO: Sem ligamento com prototype?
  test.skip(`gerente com 2 propriedades __proto__`, () => {
    expect(gerente.__proto__.__proto__).toBe(Funcionario.prototype);
  })
})