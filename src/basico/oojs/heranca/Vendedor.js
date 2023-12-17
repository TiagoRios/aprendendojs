export default function Vendedor(nome) {
  Operario.call(this, nome);
  this.departamento = 'vendas'
  this.quota = 100; 
}
// Não vinculação a cadeia de prototipos.
// Vendedor.prototype = new Operario();