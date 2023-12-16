/**
 * Apresentando fechamentos (Closures).
 * 
 * @param {number} numeroExterno 
 *      Um número para sempre ser adicionado ao chamar a função retornada.
 *      A propriedade criada mantém-se enquanto possuir referências a ela.
 * 
 * @returns Uma closure.
 */
export default function criarAdicionadora(numeroExterno) {

  // Não pode ser manipulada fora deste escopo
  return function (numeroInterno) {
    return numeroExterno + numeroInterno;
  };
}
