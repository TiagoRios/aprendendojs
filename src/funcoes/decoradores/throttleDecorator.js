// Este exemplo é do site javascript.info

/**
 * Exibe uma mensagem de log.
 * 
 * @param {string} msg a mensagem a ser exibida. 
 */
export function exibirMensagem(msg) {
    console.log(msg);
}

/**
 * Função que executa a primeira e a última chamada da função criada com esta função.
 * Esta função desconsidera todas as chamadas intermediárias. 
 * 
 * @param {Function} minhaCallback A função para ser executada.
 * 
 * @param {number} milisegundos Tempo para começar a executar a callback.
 * 1000ms é igual a 1seg
 * 
 * @returns {Function} Um closure. Desconsiderando chamadas intermediárias.
 */
function throttle(minhaCallback, milisegundos) {
    let isThrottled = false, savedArgs, savedThis;

    function wrapper() {
        if (isThrottled) { // True? Atualiza as referências.
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        isThrottled = true;

        // víncula a refêrencia 'this' a função de callback.
        minhaCallback.apply(this, arguments);

        // espera x(ms) para mostrar o último valor.
        setTimeout(() => {
            isThrottled = false;

            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedArgs = null;
            }

        }, milisegundos);
    }

    return wrapper;
}


let acelerador = throttle(exibirMensagem, 2000);

// Chamadas anteriores são desconsideradas caso haja novas chamadas
// apenas a última chamada aparece como saida.
acelerador("Primeira"); // executada
acelerador("desconsiderada-1");
acelerador("desconsiderada-2");
acelerador("desconsiderada-3");
acelerador("desconsiderada-4");
acelerador("desconsiderada-5");
acelerador("Última"); // executada
