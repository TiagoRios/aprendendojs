function VeiculoFunction(marcaVeiculo) { // (marcaVeiculo = 'default marca')
    let marca = marcaVeiculo || 'default marca'; // propriedade privada.
    this.getMarca = () => { return marca; }; // this = função pública.
    this.setMarca = (novaMarca) => { marca = novaMarca; };
}

function MotoFunction(marca) {
    VeiculoFunction.call(this, marca); // chamando o construtor da função base.
}
MotoFunction.prototype = Object.create(VeiculoFunction.prototype);

let motoFunction = new MotoFunction();
console.log(motoFunction.marca); // undefined pq é propriedade privada.
console.log(motoFunction.getMarca()); // intellisense não funcionando quando herança com prototipagem.
