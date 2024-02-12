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
export function throttleDecorator(minhaCallback, milisegundos) {
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
                savedArgs = null;
            }

        }, milisegundos);
    }

    return wrapper;
}
