// Este exemplo é do site javascript.info

/**
 * Atrasa a execução da função.
 * 
 * A diferença entre delayDecorator e que aqui o timeout é limpo 
 * (clearTimeout) caso haja novas chamadas à função.
 * 
 * Sempre ao chamar uma nova função o método clearTimeout e executado, 
 * então a função anterior sera removida e não mais executada.
 * 
 * @param {Function} func a função a ser atrasada.
 * 
 * @param {number} ms O tempo de atraso em milisegundos.
 * 
 * @returns {Function} A função que foi atrasada.
 */
function debounce(func, ms) {
    let timeout;

    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    }
}

export default debounce;