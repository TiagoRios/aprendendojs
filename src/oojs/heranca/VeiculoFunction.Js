//com VeiculoFunction(marca = 'default marca') posso remover 
//a linha que contem let marca e ainda continuaria privada.
function VeiculoFunction(marcaParam) {
    let marca = marcaParam || 'default marca'; //propriedade privada.
    this.getMarca = () => { return marca; }; //this = função pública.
    this.setMarca = (novaMarca) => { marca = novaMarca; };    
}

function MotoFunction(marca) {
    VeiculoFunction.call(this, marca);
}
MotoFunction.prototype = Object.create(VeiculoFunction.prototype);

let motoFunction = new MotoFunction();
console.log(motoFunction.marca); //undefined pq é propriedade privada
console.log(motoFunction.getMarca()); 