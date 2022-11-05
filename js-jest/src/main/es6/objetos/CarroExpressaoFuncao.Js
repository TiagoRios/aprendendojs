//NÃO >>> funcina >>> THIS. preciso fazer gambiarra.
//Antes ES6
let CarroExpressaoFunction = (ano) => { // ou: let nomeFunction = function() {};
    return {
        //ano, = Abreviação valor propriedade = tecnica de desestruturação  
        ano1: ano || new Date().getFullYear() + 44, //Se undefined então valor default;
        getAno: function () {
            return this.ano1;
        },
        setAno: function (ano) {
            this.ano1 = ano;
        },
    }
}

//NÃO >>> funcina >>> THIS. preciso fazer gambiarra.
let CarroExpressaoES6ArrowFunction = () => {
    return {
        ano2: new Date().getFullYear(),
        getAno: () => {
            //return this dot ano2;
            return CarroExpressaoES6ArrowFunction.ano2; //Gambiarra sem this.
        },
        setAno: (ano) => {
            //this dot ano2 = ano;
            CarroExpressaoES6ArrowFunction.ano2 = ano; //Gambiarra sem this.
        },
    }
}

//NÃO >>> funcina >>> THIS. preciso fazer gambiarra.
let CarroExpressaoES6 = () => {
    return {
        ano3: new Date().getFullYear() + 78,
        getAno() {
            return this.ano3;
        },
        setAno(ano) {
            this.ano3 = ano;
        },
    }
}

//Funciona com >>> EXPRESSAO DE FUNÇÕES.
//THIS >>> funcina.
let CarroExpressaoES6GetSet = () => {
    return {
        _ano: new Date().getFullYear(),
        get ano() {
            return this._ano;
        },
        set ano(ano) {
            this._ano = ano;
        },
    }
}

let carroExpressaoFunction = CarroExpressaoFunction(343434343434); //função de fabrica sem usar new.
console.log(`FUNCTION sem new = ${carroExpressaoFunction.getAno()}`);
carroExpressaoFunction.setAno(9999); //SETTERS não funcionam com THIS
console.log(`FUNCTION depois set= ${carroExpressaoFunction.getAno()}`);

CarroExpressaoES6ArrowFunction().setAno(8888); //GETTERS e SETTERS não funcionam com THIS
console.log("ES6-ARROW-FUNCTIONS = " + CarroExpressaoES6ArrowFunction().getAno()); 

CarroExpressaoES6().setAno(7777); //SETTERS não funcionam com THIS
console.log("ES6 = " + CarroExpressaoES6().getAno());

//Funciona tanto os GETTERS e os SETTERS.
CarroExpressaoES6GetSet.ano = 6666; //não define igual função.
console.log("ES6-GET-SET = " + CarroExpressaoES6GetSet.ano);//não chama igual função.  