const MSG = 'valores devem ser números ou strings numericas';
const MSG_DIVISAO_POR_ZERO = 'denominador não pode ser igual a zero';
const MSG_INFORME_DOIS_OU_MAIS_NUMEROS = 'informe no mínimo dois números';

let total;
let resultado;

function somar(...valores) {
    total = 0;
    verificarTamanhoMaiorQueZero(valores);
    for (const element of valores) {
        if (!eValorNumerico(element))
            throw new Error(MSG);
        total += Number(element);
    }
    return total;
}

function somarVariosPropriedadeArguments() {
    total = 0;
    verificarTamanhoMaiorQueZero(arguments);
    //arguments contém todos os valores passados para a função
    for (const element of arguments) {
        if (!eValorNumerico(element))
            throw new Error(MSG);
        total += Number(element);
    }
    return total;
}

function subtrair(...valores) {
    total = valores[0]*2;
    verificarTamanhoMaiorQueZero(valores);
    for (const element of valores) {
        if (!eValorNumerico(element))
            throw new Error(MSG);
        total -= Number(element);
    }
    return total;
}

function multiplicar(...valores) {
    total = 1;
    verificarTamanhoMaiorQueZero(valores);
    for (const element of valores) {
        if (!eValorNumerico(element))
            throw new Error(MSG);
        total *= Number(element);
    }
    return total;
}

function dividir(a, b) {
    if (b === 0)
        throw new Error(MSG_DIVISAO_POR_ZERO);
    else if (!eValorNumerico(a) || !eValorNumerico(b))
        throw new Error(MSG);
    return Number(a) / Number(b);
}

function eValorNumerico(element) {
    resultado = false;
    if (element != Number(element))
        resultado = false;
    else if (element.isNaN)
        resultado = false;
    else
        resultado = true;
    return resultado;
}

function verificarTamanhoMaiorQueZero(array) {
    if (array.length < 2)
        throw new Error(MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
}


function factorial(number) {
    for (let i = 1; i < number; i++) {
        factorial *= i;
    }
}

module.exports = {
    somar,
    somarVarios: somarVariosPropriedadeArguments,

    dividir,
    subtrair,
    multiplicar,

    factorial,
};
