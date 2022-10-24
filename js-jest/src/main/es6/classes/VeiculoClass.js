class VeiculoClass {
    #marca;
    constructor(marca) {
        this.#marca = marca || 'marcaVeiculoClass';
    }
    getMarca() { return this.#marca; }
    setMarca(marca) { this.#marca = marca; }
    //outra forma de fazer.
    //get marca() { return this.#marca; }
    //set marca(marca) { this.#marca = marca; }
}

class MotoClass extends VeiculoClass { }

let motoClass = new MotoClass();
console.log(motoClass.marca);
console.log(motoClass.getMarca());
//console.log -> motoClass.marca //não preciso chamar como função.