import Operario from "./Operario";
import departamento from "../herancaUtil/departamento";

export default function Vendedor(nome) {
  Operario.call(this, nome);
  this.departamento = departamento.VENDAS;
  this.quota = 100;
}
// Não vinculação a cadeia de prototipos.
// Vendedor.prototype = new Operario();