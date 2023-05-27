let CarroExpressaoFunction = (ano) => {
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

let CarroExpressaoES6ArrowFunction = () => {
    return {
        ano2: new Date().getFullYear(),
        getAno: () => {
            return this.ano2;
        },
        setAno: (ano) => {
            this.ano2 = ano;
        },
    }
}

//Não utilizar dessa maneira com expressão de função.
//NÃO >>> funcina >>> THIS. preciso fazer gambiarra.
let CarroExpressaoES6 = function (){
    return {
        ano3: new Date().getFullYear() + 78,
        getAno(){
            return this.ano3;
            // returno CarroExpressaoES6.ano3; //Gambiarra
        },
        setAno(ano) {
            this.ano3 = ano;
            // returno CarroExpressaoES6.ano3; //Gambiarra
        },
    }
}

let CarroLiteralES6GetSet = () => {
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

//Não é uma função construtora não preciso usar palavra 'new'.
let carroExpressaoFunction = CarroExpressaoFunction(10101); //função de fabrica sem usar new.
console.log(`FUNCTION sem new = ${carroExpressaoFunction.getAno()}`);
carroExpressaoFunction.setAno(9999);
console.log(`FUNCTION depois set= ${carroExpressaoFunction.getAno()}`);

CarroExpressaoES6ArrowFunction().setAno(8888);
console.log("ES6-ARROW-FUNCTIONS = " + CarroExpressaoES6ArrowFunction().getAno()); 

CarroExpressaoES6().setAno(7777); //SETTERS não funcionam com THIS. Apenas GETTERS funcionam
console.log("ES6 = " + CarroExpressaoES6().getAno());

//Funciona tanto os GETTERS e os SETTERS.
CarroLiteralES6GetSet.ano = 6666; //não define igual função.
console.log("ES6-GET-SET = " + CarroLiteralES6GetSet.ano);//não chama igual função.  