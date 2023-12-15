/**
 * Transforma a primeira letra em maiúscula e as demais em minúsculas.
 * 
 * @param {string[]} listaElementos 
 * 
 * @returns {string[]} Array com as strings capitalizadas.
 */
function transformaPalavraCapitalizada(listaElementos) {
  let arrayElemetos = [];

  for (const elementosLista of listaElementos) {
    let emMinusculo = elementosLista.toLowerCase();
    let primeiraLetra = emMinusculo.slice(0, 1);
    let palavraCapitalizada = emMinusculo.replace(primeiraLetra, primeiraLetra.toUpperCase());

    arrayElemetos.push(palavraCapitalizada);
  }

  return arrayElemetos;
}

/**
 * Formata o nome das estações de mêtro do reino unido. 
 * 
 * @param {string[]} listaElementos Um array com string referente as estações.
 * 
 * @returns {string[]} com as strings formatadas.
 */
function formatarStringMetroReinoUnido(listaElementos) {
  let arrayElemetos = [];

  for (const elementoLista of listaElementos) {
    let codigoMetro = elementoLista.slice(0, 3);
    let posicaoPontoVirgula = elementoLista.indexOf(';');
    let nomeDepoisPontoVirgula = elementoLista.slice(posicaoPontoVirgula + 1);
    let stringFormatada = codigoMetro + ': ' + nomeDepoisPontoVirgula;

    arrayElemetos.push(stringFormatada);
  }

  return arrayElemetos;
}

module.exports = {
  formatarStringMetroReinoUnido,
  transformaPalavraCapitalizada,
};