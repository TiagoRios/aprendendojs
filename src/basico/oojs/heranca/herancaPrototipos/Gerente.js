import Funcionario from "./Funcionario";

export default function Gerente(nome) {
  Funcionario.call(this, nome);
  this.relatorios = ['relatorio geral'];
}
Gerente.prototype = Object.create(Funcionario.prototype);