import Operario from "./Operario";
import departamento from "../herancaUtil/departamento";
import funcionarioMock from "../herancaUtil/funcionarioMock";

export default function Engenheiro(nome, maquina) {
  Operario.call(this, nome);
  this.departamento = departamento.ENGENHARIA;
  this.maquina = maquina || funcionarioMock.maquina
}
Engenheiro.prototype = Object.create(Operario.prototype);