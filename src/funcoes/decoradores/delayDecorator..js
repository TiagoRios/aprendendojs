// Este exemplo é do site javascript.info

// import exibirMensagem from "./util"; // não funciona quando chamado externamente.

/**
 * Exibe uma mensagem de log.
 * 
 * @param {string} msg a mensagem a ser exibida. 
 */
function exibirMensagem(msg) {
    console.log(msg);
}


/**
 * Atrasa a chamada da função em milisegundos.
 * 
 * @param {Function} func A função para ser executada.
 * @param {number} ms Tempo de atraso em milisegundos.
 * 
 * @returns {Function} A função que foi atrasa.
 */
function delay(func, ms) {
    return function () {
        setTimeout(() => func.apply(this, arguments), ms);
    }
}

let mensagemAtrasada = delay(exibirMensagem, 3000);

// São chamados todos de uma vez.
mensagemAtrasada("test-1");
mensagemAtrasada("test-2");
mensagemAtrasada("test-3");

