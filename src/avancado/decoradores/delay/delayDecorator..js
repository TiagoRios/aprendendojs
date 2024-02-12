// Este exemplo é do site javascript.info

/**
 * Atrasa a chamada da função em milisegundos.
 * 
 * @param {Function} func A função para ser executada.
 * @param {number} ms Tempo de atraso em milisegundos.
 * 
 * @returns {Function} A função que foi atrasa.
 */
export function delayDecorator(func, ms) {
    return function () {
        setTimeout(() => func.apply(this, arguments), ms);
    }
}
