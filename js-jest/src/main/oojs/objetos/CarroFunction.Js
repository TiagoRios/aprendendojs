function CarroFunction(ano = 1999) { //ano é privado
    //this.ano = ano //Propriedade ano pública
    this.getAno = function () {
        return ano;
    };
    this.setAno =  function (anoo) {
        ano = anoo;
    };
}

let carroFunction = new CarroFunction();
console.log(`Propriedade privada = ${carroFunction.ano}`);
console.log(`getAno = ${carroFunction.getAno()}`);