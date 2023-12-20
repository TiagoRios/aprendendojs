import Engenheiro from "./Engenheiro";
import Funcionario from "./Funcionario";
import Operario from "./Operario";

const departamento = require("./departamento");
const funcionarioMock = require("./funcionarioMock");

const engenheiro = new Engenheiro(funcionarioMock.nome, funcionarioMock.maquina);

test(`engenheiro deve herdar propriedade nome de funcionario`, () => {
  expect(engenheiro.nome).toBe(funcionarioMock.nome);
})

test(`engenheiro deve herdar propriedade departamento de funcionario`, () => {
  expect(engenheiro.departamento).toBe(departamento.ENGENHARIA);
})

test(`engenheiro deve possuir uma máquina padrão definida a ele`, () => {
  expect(engenheiro.maquina).toBe(funcionarioMock.maquina);
})

test(`engenheiro deve possuir uma projeto geral por padrão`, () => {
  expect(engenheiro.projetos.length).toBe(1);
})

test(`engenheiro deve herdar propriedade dinãmica`, () => {
  expect(engenheiro.especialidade).toBe(funcionarioMock.especialidade);
})

describe('propriedade __proto__ da cadeia de prototypes', () => {
  test(`operario com 1 propriedade __proto__`, () => {
    expect(engenheiro.__proto__).toBe(Engenheiro.prototype);
  })

  test(`vendedor com 2 propriedades __proto__`, () => {
    expect(engenheiro.__proto__.__proto__).toBe(Operario.prototype);
  })

  test(`operario com 3 propriedades __proto__`, () => {
    expect(engenheiro.__proto__.__proto__.__proto__).toBe(Funcionario.prototype);
  })

  test(`operario com 4 propriedades __proto__`, () => {
    expect(engenheiro.__proto__.__proto__.__proto__.__proto__).toBe(Object.prototype);
  })

  test(`operario com 5 propriedades __proto__`, () => {
    expect(engenheiro.__proto__.__proto__.__proto__.__proto__.__proto__).toBe(null);
  })

})