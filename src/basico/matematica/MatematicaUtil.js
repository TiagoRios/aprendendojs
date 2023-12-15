const MSG = 'valores devem ser números ou strings numericas';
const MSG_DIVISAO_POR_ZERO = 'denominador não pode ser igual a zero';
const MSG_INFORME_DOIS_OU_MAIS_NUMEROS = 'informe no mínimo dois números';

function verificarDivisaoPorZero(divisor) {
  if (divisor === 0) {
    throw new Error(MSG_DIVISAO_POR_ZERO);
  }
}

function verificarDoisOuMaisNumeros(array) {
  if (array.length < 2) {
    throw new Error(MSG_INFORME_DOIS_OU_MAIS_NUMEROS);
  }
}

function verificarNumeroValido(element) {
  if (!isNumeroValido(element)) {
    throw new Error(MSG);
  }
}

function isNumeroValido(element) {
  resultado = false;

  if (element != Number(element)) {
    resultado = false;

  } else if (element.isNaN) {
    resultado = false;

  } else {
    resultado = true;
  }

  return resultado;
}

modulo.exports = {
  verificarDivisaoPorZero,
  verificarDoisOuMaisNumeros,
  verificarNumeroValido,
}
