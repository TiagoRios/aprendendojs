const iteradorArray = (array) => {
  let proximoIndex = 0;

  return {
    next: () => {
      return proximoIndex < array.length ?
        { valor: array[proximoIndex++], feito: false } :
        { feito: true };
    }
  }
};

let meuObjetoIteravel = {};
// sem o Symbol.iterator não faz iteração
meuObjetoIteravel[Symbol.iterator] = function* () {
  yield 3;
  yield 2;
  yield 1;
};

const somarNumerosArray = (array) => {
  let contador = 0;

  for (let value of array) {
    contador += value;
  }

  return contador;
}

export {
  iteradorArray,
  meuObjetoIteravel,
  somarNumerosArray,
}
