/**
* Resumo definição dos métodos.
* 
* getAno: function () {...}
* getAno: () => {...}
* getAno() {...}
* get ano() {...}
*/

/**
 * Métodos definidos com funções anônimas.
 */
let CarroLiteralFunction = {
    ano: new Date().getFullYear(),
    getAno: function () {
        return this.ano;
    },
    setAno: function (ano) {
        this.ano = ano;
    },
}

/**
 * Métodos definidos com funções de seta. 
 */
let CarroLiteralES6Arrow = {
    ano: new Date().getFullYear(),
    getAno: () => {
        return this.ano;
    },
    setAno: (ano) => {
        this.ano = ano;
    },
}

/**
 * Métodos definidos com funções de seta. 
 * 
 * Gambiarra: 
 *      Colocar o mesmo nome de quem define a função.
 */
let CarroLiteralES6ArrowGambiarra = {
    ano: new Date().getFullYear(),
    getAno: () => {
        return CarroLiteralES6ArrowGambiarra.ano;
    },
    setAno: (ano) => {
        CarroLiteralES6ArrowGambiarra.ano = ano;
    },
}

/**
 * Métodos definidos diretos SEM funções anônimas ou de seta.
 * 
 * Única forma que funciona com GET e SET
 */
let CarroLiteralES6 = {
    ano: new Date().getFullYear(),
    getAno() {
        return this.ano;
    },
    setAno(ano) {
        this.ano = ano;
    },
}

/**
 * Métodos definidos usando as palavras chaves GET e SET antes de seus nomes.
 * 
 * preciso alterar o nome da variavel/ conflito com nome métodos.
 * 
 * A forma de acesso também é diferente:
 * 
 * GETTER: CarroLiteralES6GetSet.ano;
 * SETTER: CarroLiteralES6GetSet.ano = 2000;
 */
let CarroLiteralES6GetSet = {
    _ano: new Date().getFullYear(), //Nome diferente dos metodos GET e SET.
    get ano() {
        return this._ano;
    },
    set ano(ano) {
        this._ano = ano;
    },
}

export {
    CarroLiteralFunction,
    CarroLiteralES6Arrow,
    CarroLiteralES6,
    CarroLiteralES6GetSet,
    CarroLiteralES6ArrowGambiarra,
}