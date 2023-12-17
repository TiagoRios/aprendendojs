class VeiculoClass {
    #marca;
    constructor(marca) {
        this.#marca = marca || 'marcaVeiculoClass';
    }
    getMarca() { return this.#marca; }
    setMarca(marca) { this.#marca = marca; }
}

class MotoClass extends VeiculoClass { }

let motoClass = new MotoClass();
console.log(motoClass.marca); // com Intelisense não disponível marca.
console.log(motoClass.getMarca());
