// Funções no mesmo arquivo somente por conveniência.

/**
 * Função base para demonstrar herança com com prototipagem.
 * 
 * @param {*} nome O nome do funcionário. 
 */
function Funcionario(nome) {
    this.nome = nome || '';
    this.departamento = 'geral';
}

/**
 * Função filha de Funcionário.
 * 
 * @param {*} nome 
 */
function Gerente(nome) {
    this.minhaBase = Funcionario; // Preferir funcionario.call(this, nome)
    this.minhaBase(nome); // Função pai sendo chamada.
    this.relatorios = ['um relatorio'];
}
Gerente.prototype = Object.create(Funcionario.prototype); // Prefira esta forma.

/**
 * Função filha de Funcionário.
 * 
 * @param {*} nome 
 */
function Operario(nome) {
    Funcionario.call(this, nome); // Função pai sendo chamada.
    this.projetos = [];
}
Operario.prototype = new Funcionario(); // Parece que com new tem efeitos colaterais..

/**
 * Função filha de Operário.
 * 
 * @param {*} nome 
 * @param {*} maquina 
 */
function Engenheiro(nome, maquina) {
    Operario.call(this, nome); // Função pai
    this.departamento = 'engenharia';
    this.maquina = maquina || 'retro-escavadeira'; // Específico para engenheiros
}
Engenheiro.prototype = Object.create(Operario.prototype);

/**
 * Função filha de Operário.
 * 
 * Esta função não é vinculada ao prototipo da função pai. Ela quebra a cadeia.
 * As propriedades adicionadas dinamicamente na cadeia de prototipos não são 
 * herdadas por esta.
 * 
 * @param {*} nome 
 */
function Vendedor(nome) {
    Operario.call(this, nome); // Função pai sendo chamada.
    this.departamento = 'vendas'
    this.quota = 100; // Específico para vendedores
}
// Vendedor.prototype = new Operario(); // Não vinculada a cadeia de prototipos.


//Definindo uma propriedade dinãmica para uma função acima na cadeia de prototipos.
Funcionario.prototype.especialidade = 'sem especialidade';

module.exports = {
    Funcionario, Gerente, Operario, Vendedor, Engenheiro,
}