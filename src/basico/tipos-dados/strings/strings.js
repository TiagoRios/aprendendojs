function capitalizarElementosLista(lista) {
  let listaPalavrasCapitalizadas = [];

  for (const elemento of lista) {
    let textoMinusculo = elemento.toLowerCase();
    let primeiraLetra = textoMinusculo.slice(0, 1);
    let palavraCapitalizada = textoMinusculo.replace(primeiraLetra, primeiraLetra.toUpperCase());

    listaPalavrasCapitalizadas.push(palavraCapitalizada);
  }

  return listaPalavrasCapitalizadas;
}

// exemplo: 'GNF576746573fhdg4737dh4;Greenfield',
function formatarListaEstacoesMetroReinoUnido(lista) {
  let listaFormatada = [];

  for (const elemento of lista) {
    const codigoCidade = elemento.slice(0, 3);
    const posicaoPontoVirgula = elemento.indexOf(';');
    const estacao = elemento.slice(posicaoPontoVirgula + 1);

    let textoFormatado = `${codigoCidade}:${estacao}`

    listaFormatada.push(textoFormatado);
  }

  return listaFormatada;
}

module.exports = {
  capitalizarElementosLista,
  formatarListaEstacoesMetroReinoUnido,
};