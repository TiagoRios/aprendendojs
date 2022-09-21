function VeiculoFunction(marcaParam, modelo) {
    let marca = marcaParam || 'marcaaa'; //propriedade privada.
    this.getMarca = () => { return marca; }; //this = função pública.
    this.setMarca = (novaMarca) => { marcaParam = novaMarca; };    
}

function MotoFunction(marca) {
    VeiculoFunction.call(this, marca);
}
MotoFunction.prototype = new VeiculoFunction();

let motoFunction = new MotoFunction();
console.log(motoFunction.marca); //undefined pq é propriedade privada
console.log(motoFunction.getMarca()); 