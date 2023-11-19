/**
 * Demonstra como definir uma função construtora.
 * 
 * @param {number} ano O ano do veículo. 
 */
export function CarroFunction(ano = 1999) { // ano é privado e definindo valor padrão.
    // this.ano = ano // Tornar a Propriedade ano pública.

    this.getAno = function () { // aceita funções de seta também.
        return ano;
    };

    this.setAno = function (anoo) { // ano já definido.
        ano = anoo;
    };
}