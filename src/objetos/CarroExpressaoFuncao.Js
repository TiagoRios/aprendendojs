let CarroExpressaoFunction = (ano) => {
    return {
        //ano, = Abreviação valor propriedade = tecnica de desestruturação  
        ano: ano || new Date().getFullYear(),
        getAno: function () {
            return this.ano;
        },
        setAno: function (ano) {
            this.ano = ano;
        },
    }
}

let CarroExpressaoES6Arrow = function () {
    return {
        ano: new Date().getFullYear(),
        getAno: () => {
            return this.ano;
        },
        setAno: (ano) => {
            this.ano = ano;
        },
    }
}

let CarroExpressaoES6ArrowReferenciaIndireta = function nomeQualquer() {
    return {
        ano: new Date().getFullYear(),
        getAno: () => {
            return nomeQualquer.ano;
            // não faça assim:
            // return CarroExpressaoES6ArrowReferenciaIndiretaAThis.ano;
        },
        setAno: (ano) => {
            nomeQualquer.ano = ano;
        },
    }
}

let CarroExpressaoES6 = () => {
    return {
        ano: new Date().getFullYear(),
        getAno() {
            return this.ano;
        },
        setAno(ano) {
            this.ano = ano;
        },
    }
}

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

export {
    CarroExpressaoFunction,
    CarroExpressaoES6Arrow,
    CarroExpressaoES6,
    CarroExpressaoES6GetSet,
    CarroExpressaoES6ArrowReferenciaIndireta,
}