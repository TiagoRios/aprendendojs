import Operario from "./Operario";
import departamento from "./departamento";

export default function Engenheiro(nome, maquina) {
  Operario.call(this, nome);
  this.departamento = departamento.ENGENHARIA;
  this.maquina = maquina || 'retro-escavadeira';
}
Engenheiro.prototype = Object.create(Operario.prototype);