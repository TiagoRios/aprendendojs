const { Operario, Vendedor, Engenheiro, Funcionario } = require('./Funcionario.js');

let vendedor, operario, engenheiro, funcionario, funcionario2;

const NOME_FUNCIONARIO = 'nome do funcionario',
    NOME_VENDEDOR = 'nome do vendedor',
    NOME_OPERARIO = 'nome do operario',
    NOME_ENGENHEIRO = 'nome do engenheiro',

    DEPARTAMENTO_GERAL = 'geral',
    DEPARTAMENTO_VENDEDOR = 'vendas',
    DEPARTAMENTO_ENGENHEIRO = 'engenharia',

    NOME_MAQUINA = 'retro-escavadeira';

beforeAll(() => {
    vendedor = new Vendedor(NOME_VENDEDOR);
    operario = new Operario(NOME_OPERARIO);
    engenheiro = new Engenheiro(NOME_ENGENHEIRO);
    funcionario = new Funcionario(NOME_FUNCIONARIO);
    funcionario2 = new Funcionario();
});

describe('orientação objetos em js', () => {
    describe('funcionário', () => {
        test(`deve definir nome do funcionário passado no construtor`, () => {
            expect(funcionario.nome).toBe(NOME_FUNCIONARIO);
        });

        test(`deve usar o nome default do objeto funcionário`, () => {
            expect(funcionario2.nome).toBe('');
        });
    });

    describe('operario', () => {
        test(`herança de operario e funcionario`, () => {
            expect(operario.nome).toBe(NOME_OPERARIO);
            expect(operario.departamento).toBe(DEPARTAMENTO_GERAL);
            expect(operario.projetos.length).toBe(0);
            expect(operario.especialidade).toBe('sem especialidade');

        });

        test(`operario deve herda propriedade dinãmica`, () => {
            expect(operario.especialidade).toBe('sem especialidade');
        });
    });

    describe('vendedor', () => {
        test(`herança de vendedor e operario`, () => {
            expect(vendedor.nome).toBe(NOME_VENDEDOR);
            expect(vendedor.quota).toBe(100);
            expect(vendedor.departamento).toBe(DEPARTAMENTO_VENDEDOR);
            expect(vendedor.projetos.length).toBe(0);
        });

        test(`vendedor não deve herda propriedade dinãmica`, () => {
            expect(vendedor.especialidade).toBe(undefined);
        });
    });

    describe('engenheiro', () => {
        test(`herança de engenheiro e operario`, () => {
            expect(engenheiro.nome).toBe(NOME_ENGENHEIRO);
            expect(engenheiro.maquina).toBe(NOME_MAQUINA);
            expect(engenheiro.departamento).toBe(DEPARTAMENTO_ENGENHEIRO);
            expect(engenheiro.projetos.length).toBe(0);

            expect(engenheiro.especialidade).toBe('sem especialidade');
        });

        test(`engenheiro deve herdar propriedade dinãmica`, () => {
            expect(engenheiro.especialidade).toBe('sem especialidade');
        });
    });

    describe('propriedade __proto__ da cadeia de prototypes', () => {
        test(`verificar propriedade __proto__`, () => {
            expect(engenheiro.__proto__).toBe(Engenheiro.prototype);
            expect(engenheiro.__proto__.__proto__).toBe(Operario.prototype);
            expect(engenheiro.__proto__.__proto__.__proto__).toBe(Funcionario.prototype);
            expect(engenheiro.__proto__.__proto__.__proto__.__proto__).toBe(Object.prototype);
            expect(engenheiro.__proto__.__proto__.__proto__.__proto__.__proto__).toBe(null);
        });
    });
});