//Melhor para OO
function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

    this.getMarca = () =>{
        return this.marca;
    };
    this.setMarca = (novaMarca) =>{
        this.marca = novaMarca;
    };

    this.getModelo = () =>{
        return this.modelo;
    };
    this.setModelo = (novoModelo) =>{
        this.modelo = novoModelo;
    };
}
//Melhor maneira de atribuir um método a uma função.
Carro.prototype.cor = 'azul'; //variável de instância compartilhada
Carro.prototype.getCor = function () { return this.cor; }
Carro.prototype.setCor = function (cor) { this.cor = cor; }

//Não consigo utilizar palavra THIS desta forma
//Objetos criados com base nele so utiliza as variaveis dele
let CarroLiteral = {
    ano: new Date().getFullYear(),
    getAno: () => {
        return CarroLiteral.ano;
    },
    setAno: function (ano) {
        CarroLiteral.ano = ano;
    },
}

//copia a estrutura de um objeto ja criado
//não consigo utilizar prototype
let ObjetoCarroLiteral = Object.create(CarroLiteral);


//Criar objetos cru
let CarroObjeto = new Object();
CarroObjeto.ano = new Date().getFullYear();
CarroObjeto.getAno = () => {
    return CarroObjeto.ano;
};
CarroObjeto.setAno = (ano) => {
    CarroObjeto.ano = ano;
};

module.exports = {
    Carro,
    CarroObjeto,
    CarroLiteral,
    ObjetoCarroLiteral,
}