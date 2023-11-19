/**
 * Definição de classe SEM propriedades privadas.
 */
export class CarroClassPropPublica {
    ano; //deixar privada com '#ano'
 
    constructor() {
        this.ano = new Date().getFullYear();
    }
 
    getAno() {
        return this.ano;
    }
 
    setAno(ano) {
        this.ano = ano;
    }
}

/**
 * Classe que demonstra como usar Propriedades privadas.
 * Uma propriedade se torna privada usando o siímbolo '#' antes dela.
 * 
 * Essse classe faz o uso de métodos GET e SET (outra forma de definiar métodos).
 */
export class CarroClassPropPrivada {
    #ano; // aqui está privada.

    constructor(ano) {
        this.#ano = ano || new Date().getFullYear();
    }

    get meuGetAno() {
        return this.#ano; // Repare como usar variável privada.
    }

    set meuSetAno(ano) {
        this.#ano = ano;
    }
}