const { Funcionario } = require("./Funcionario");

function Gerente(nome) {
  this.minhaBase = Funcionario; // Preferir funcionario.call(this, nome)
  this.minhaBase(nome); // Função pai sendo chamada.
  this.relatorios = ['relatorio geral'];
}

module.exports = Gerente;
