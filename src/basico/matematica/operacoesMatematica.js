const MathUtil = require('./MatematicaUtil');

function dividir(dividendo, divisor) {
    MathUtil.verificarDivisaoPorZero(divisor);
    MathUtil.verificarNumeroValido(dividendo);
    MathUtil.verificarNumeroValido(divisor);

    return Number(dividendo) / Number(divisor);
}

function factorial(numero) {
    MathUtil.verificarNumeroValido(numero);

    for (let i = 1; i < numero; i++) {
        factorial *= i;
    }
}

function multiplicar(...numeros) {
    let total = 1;
    MathUtil.verificarDoisOuMaisNumeros(numeros);

    for (const numero of numeros) {
        MathUtil.verificarNumeroValido(numero);
        total *= Number(numero);
    }

    return total;
}

function somar(...numeros) {
    let total = 0;
    MathUtil.verificarDoisOuMaisNumeros(numeros)

    for (const numero of numeros) {
        MathUtil.verificarNumeroValido(numero);
        total += Number(numero);
    }

    return total;
}

function somarComArguments() {
    let total = 0;
    MathUtil.verificarDoisOuMaisNumeros(arguments);

    for (const numero of arguments) {
        MathUtil.verificarNumeroValido(numero);
        total += Number(numero);
    }

    return total;
}

function subtrair(...numeros) {
    let total = numeros[0] * 2;
    MathUtil.verificarDoisOuMaisNumeros(numeros);

    for (const numero of numeros) {
        MathUtil.verificarNumeroValido(numero);
        total -= Number(numero);
    }

    return total;
}

module.exports = {
    dividir,
    factorial,
    multiplicar,
    somar,
    somarComArguments,
    subtrair,
};
