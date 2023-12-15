const errorMessages = require('./matematicaErrorMessages');

function verificarDivisaoPorZero(divisor) {
  if (divisor === 0) {
    throw new Error(errorMessages.MSG_DIVISAO_POR_ZERO);
  }
}

function verificarDoisOuMaisNumeros(array) {
  if (array.length < 2) {
    throw new Error(errorMessages.MSG_DOIS_OU_MAIS_NUMEROS);
  }
}

function verificarNumeroValido(element) {
  if (!isNumeroValido(element)) {
    throw new Error(errorMessages.MSG_NUMEROS_OU_STRINGS_NUMERICAS);
  }
}

function isNumeroValido(element) {
  let resultado = false;

  if (element != Number(element)) {
    resultado = false;

  } else if (element.isNaN) {
    resultado = false;

  } else {
    resultado = true;
  }

  return resultado;
}

module.exports = {
  verificarDivisaoPorZero,
  verificarDoisOuMaisNumeros,
  verificarNumeroValido,
}
