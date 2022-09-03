{
const msg = 'valores devem ser números ou strings numericas';
const msgDivisaoZero = 'denominador não pode ser igual a zero';

function somar(a, b) {
    if(!saoValoresNumericos(a, b))
        throw new Error(msg);
    return Number(a) + Number(b);
}

function subtrair(a, b) {
    if(!saoValoresNumericos(a, b))
        throw new Error(msg);
    return Number(a) - Number(b);
}

function multiplicar(a, b){
    if(!saoValoresNumericos(a, b))
        throw new Error(msg);
    return Number(a) * Number(b);
}

function dividir(a, b){
    if(b === 0)
        throw new Error(msgDivisaoZero);
    else if(!saoValoresNumericos(a, b))
        throw new Error(msg);
    return Number(a) / Number(b);
}

function saoValoresNumericos(a, b){
    let resultado;
    if(a != Number(a) || b != Number(b))
        resultado = false;
    else if(a.isNaN || b.isnNaN)
        resultado = false;
    else
        resultado = true;

    return resultado;
}

function factorial(number) {
    for (let i = 1; i < number; i++) {
        factorial *= i;
    }    
}

module.exports = {
    somar, 
    dividir, 
    subtrair, 
    multiplicar, 

    factorial,
};
}