class CarroClass {
    ano; //deixar privada com '#ano'
    constructor(){ 
        this.ano = new Date().getFullYear();
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
}

let carroClass = new CarroClass(); 
console.log(`${carroClass.ano} = Propriedade publica`);
carroClass.setAno(1111);
console.log(`MetodoGet: ${carroClass.getAno()}`);

//Uso de GET e SET
//Propriedade privada
//pode instanciar com ou sem argumento.
class CarroClass2 {
    #ano;
    constructor(ano){
        this.#ano = ano || new Date().getFullYear();
    }
    get meuGetAno() {
        return this.#ano;
    }
    set meuSetAno(ano) {
        this.#ano = ano;
    }
}

const carroClass2 = new CarroClass2();
console.log(`${carroClass2.ano} = NÃO ACESSO - Propriedade privada`);
carroClass2.meuSetAno = 2222;
console.log(`MetodoGet: ${carroClass2.meuGetAno} - Não function`);