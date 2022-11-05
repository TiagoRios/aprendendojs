//Não funciona com palavras GET e SET
//Antes ES6
let CarroLiteralFunction = {
    ano: new Date().getFullYear(),
    getAno: function () {
        return this.ano;
    },
    setAno: function (ano) {
        this.ano = ano;
    },
}

//THIS não funciona com ARROW FUNCTIONS - Olha a cambiarra!
//Não funciona com palavras GET e SET
let CarroLiteralES6ArrowFunction = {
    ano: new Date().getFullYear(),
    getAno: () => {
        return CarroLiteralES6ArrowFunction.ano;
    },
    setAno: (ano) => {
        CarroLiteralES6ArrowFunction.ano = ano;
    },
}

//única forma que funciona com GET e SET
//Funciona também com definições de CLASSES
let CarroLiteralES6 = {
    ano: new Date().getFullYear(),
    getAno(){
        return this.ano;
    },
    setAno(ano) {
        this.ano = ano;
    },
}

//preciso alterar o nome da variavel/ conflito com nome métodos.
//Funciona também com definições de CLASSES
let CarroExpressaoES6GetSet = {
    _ano: new Date().getFullYear(), //Nome diferente dos metodos GET e SET.
    get ano(){
        return this._ano;
    },
    set ano(ano) {
        this._ano = ano;
    },
}

CarroLiteralFunction.setAno(9999);
console.log(`FUNCTION = ${CarroLiteralFunction.getAno()}`);

CarroLiteralES6ArrowFunction.setAno(8888)
console.log("ES6-ARROW-FUNCTIONS = " + CarroLiteralES6ArrowFunction.getAno()); 

CarroLiteralES6.setAno(7777);
console.log("ES6 = " + CarroLiteralES6.getAno());

CarroExpressaoES6GetSet.ano = 6666; //não define igual função.
console.log("ES6-GET-SET = " + CarroExpressaoES6GetSet.ano);//não chama igual função. 