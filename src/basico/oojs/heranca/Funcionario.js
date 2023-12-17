import departamento from "./departamento";

export default function Funcionario(nome) {
    this.nome = nome || '';
    this.departamento = departamento.GERAL;
}
Funcionario.prototype.especialidade = 'especialidade';
