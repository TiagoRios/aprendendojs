import Funcionario from "./Funcionario";

export default function Operario(nome) {
  Funcionario.call(this, nome);
  this.projetos = ['projeto geral'];
}
// Operario.prototype = new Funcionario(); // Parece que com new tem efeitos colaterais..
Operario.prototype = Object.create(Funcionario.prototype);
