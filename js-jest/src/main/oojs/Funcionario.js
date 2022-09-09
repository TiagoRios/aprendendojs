/* 
funções no mesmo arquivo somente por conveniência.
*/
function Funcionario(nome){
    this.nome = nome || '';
    this.departamento = 'geral';
}

//preferir a outra forma com funcionario.call(this, nome)
function Gerente(nome){
    this.minhaBase = Funcionario;
    this.minhaBase(nome);
    this.relatorios = ['um relatorio'];
}
//prefira a forma com operador new
Gerente.prototype = Object.create(Funcionario.prototype);

//
function Operario(nome){
    Funcionario.call(this, nome);
    this.projetos = [];
}
Operario.prototype = new Funcionario();

//objeto sem definir o seu prototype 
//não deve herda propriedades dinãmicas do objeto pai.
function Vendedor(nome){
    Operario.call(this, nome);
    this.departamento = 'vendas' 
    this.quota = 100;
}

function Engenheiro(nome, maquina){
    Operario.call(this, nome);
    this.departamento = 'engenharia';
    this.maquina = maquina || 'retro-escavadeira';
}
Engenheiro.prototype = new Operario();

//definição propriedade dinãmica. teste herança dinãmica.
Funcionario.prototype.especialidade = 'sem especialidade';

module.exports = {
    Funcionario, Gerente, Operario, Vendedor, Engenheiro,
}